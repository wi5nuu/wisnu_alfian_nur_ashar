// Tiny WebGL2 engine: additive points + lines, orbit camera, adaptive resolution.
// Every animation lives in the vertex shader (GPU), so the JS cost per frame stays near zero.

const COMMON = `
const vec3 LIME=vec3(.518,.882,.047);
const vec3 LIME2=vec3(.706,.957,.38);
const float TAU=6.2831853;
float hash(float n){return fract(sin(n*127.1)*43758.5453);}
vec2 rot(vec2 v,float a){float c=cos(a),s=sin(a);return vec2(c*v.x-s*v.y,s*v.x+c*v.y);}
`;
const UNI = `uniform float uTime;uniform float uWarp;uniform vec4 uA;uniform vec4 uB;uniform vec4 uC;uniform vec4 uD;`;

const vs = (motion) => `#version 300 es
precision highp float;
layout(location=0) in vec3 aPos;
layout(location=1) in vec4 aSeed;
layout(location=2) in vec3 aAux;
uniform mat4 uVP;uniform float uPx;uniform float uMaxPt;
${UNI}${COMMON}
out vec4 vCol;out vec4 vSeed;out vec3 vAux;out vec3 vW;
${motion}
void main(){
  vec3 p=aPos;vec4 col=vec4(0.);float size=1.;
  motion(p,aSeed,aAux,col,size);
  vec4 c=uVP*vec4(p,1.);
  gl_Position=c;
  gl_PointSize=clamp(size*uPx/max(c.w,.1)*(1.+uWarp*1.5),1.,uMaxPt);
  vCol=col;vCol.a*=smoothstep(1.2,5.,c.w);vSeed=aSeed;vAux=aAux;vW=p;
}`;

const fs = (shade) => `#version 300 es
precision highp float;
in vec4 vCol;in vec4 vSeed;in vec3 vAux;in vec3 vW;
uniform sampler2D uTex;
${UNI}${COMMON}
out vec4 o;
${shade}
void main(){o=shade();}`;

export const SHADE_POINT = `vec4 shade(){vec2 q=gl_PointCoord*2.-1.;float d=dot(q,q);if(d>1.)discard;float a=1.-d;a*=a;return vec4(vCol.rgb,vCol.a*a);}`;
export const SHADE_LINE = `vec4 shade(){return vCol;}`;

/** Vertex builder: pos(3) + seed(4) + aux(3) per vertex, interleaved. */
export class VB {
  constructor() { this.a = []; }
  v(x, y, z, s0 = 0, s1 = 0, s2 = 0, s3 = 0, a0 = 0, a1 = 0, a2 = 0) {
    this.a.push(x, y, z, s0, s1, s2, s3, a0, a1, a2);
    return this;
  }
  get count() { return this.a.length / 10; }
  done() { return new Float32Array(this.a); }
}

const STRIDE = 40;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error('[gl] shader error:', gl.getShaderInfoLog(s));
    if (import.meta.env?.DEV) console.error(src.split('\n').map((l, i) => `${i + 1}: ${l}`).join('\n'));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

function perspective(o, fovy, aspect, near, far) {
  const f = 1 / Math.tan(fovy / 2);
  o.fill(0);
  o[0] = f / aspect;
  o[5] = f;
  o[10] = (far + near) / (near - far);
  o[11] = -1;
  o[14] = (2 * far * near) / (near - far);
}

function lookAt(o, ex, ey, ez, tx, ty, tz) {
  let zx = ex - tx, zy = ey - ty, zz = ez - tz;
  let l = Math.hypot(zx, zy, zz) || 1;
  zx /= l; zy /= l; zz /= l;
  // up = (0,1,0): x = up × z
  let xx = zz, xy = 0, xz = -zx;
  l = Math.hypot(xx, xz) || 1;
  xx /= l; xz /= l;
  const yx = zy * xz - zz * xy, yy = zz * xx - zx * xz, yz = zx * xy - zy * xx;
  o[0] = xx; o[1] = yx; o[2] = zx; o[3] = 0;
  o[4] = xy; o[5] = yy; o[6] = zy; o[7] = 0;
  o[8] = xz; o[9] = yz; o[10] = zz; o[11] = 0;
  o[12] = -(xx * ex + xy * ey + xz * ez);
  o[13] = -(yx * ex + yy * ey + yz * ez);
  o[14] = -(zx * ex + zy * ey + zz * ez);
  o[15] = 1;
}

function mul(o, a, b) {
  for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
      o[c * 4 + r] =
        a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3];
    }
  }
}

export function createEngine(canvas, opts = {}) {
  const gl = canvas.getContext('webgl2', {
    antialias: false,
    alpha: true,
    premultipliedAlpha: true,
    depth: false,
    stencil: false,
    powerPreference: 'high-performance',
  });
  if (!gl) return null;

  const maxDpr = opts.maxDpr ?? 2;
  const targetDpr = Math.min(window.devicePixelRatio || 1, maxDpr);
  let dpr = targetDpr;
  const programs = new Map();
  const owned = { buffers: [], vaos: [], textures: [] };
  const view = new Float32Array(16), proj = new Float32Array(16), vp = new Float32Array(16);

  const cam = { yaw: 0, pitch: 0.2, dist: 14, fov: 60, tx: 0, ty: 0, tz: 0, fit: 1 };
  const eng = {
    gl, canvas, cam, vp,
    warp: 0,
    scene: null,
    lost: false,
    get dpr() { return dpr; },
    get width() { return canvas.clientWidth; },
    get height() { return canvas.clientHeight; },
  };

  let raf = 0, running = false, last = 0;
  const t0 = performance.now();
  let ema = 16.7, slow = 0, fast = 0, aspect = 1, pxScale = 600;

  gl.enable(gl.BLEND);
  gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE);
  gl.disable(gl.DEPTH_TEST);

  function program(mode, motion, shade) {
    const key = mode + '|' + motion + '|' + shade;
    let p = programs.get(key);
    if (p) return p;
    const v = compile(gl, gl.VERTEX_SHADER, vs(motion));
    const f = compile(gl, gl.FRAGMENT_SHADER, fs(shade));
    if (!v || !f) return null;
    const pr = gl.createProgram();
    gl.attachShader(pr, v);
    gl.attachShader(pr, f);
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) {
      console.error('[gl] link error:', gl.getProgramInfoLog(pr));
      return null;
    }
    gl.deleteShader(v);
    gl.deleteShader(f);
    const names = ['uVP', 'uPx', 'uMaxPt', 'uTime', 'uWarp', 'uA', 'uB', 'uC', 'uD', 'uTex'];
    const loc = {};
    for (const n of names) loc[n] = gl.getUniformLocation(pr, n);
    p = { pr, loc };
    programs.set(key, p);
    return p;
  }

  /** spec: { mode:'points'|'lines', data:Float32Array, motion, shade?, tex?, dynamic?, count? } */
  eng.layer = (spec) => {
    const mode = spec.mode === 'lines' ? gl.LINES : gl.POINTS;
    const shade = spec.shade || (spec.mode === 'lines' ? SHADE_LINE : SHADE_POINT);
    const prog = program(spec.mode, spec.motion, shade);
    if (!prog) return null;
    const data = spec.data;
    const vao = gl.createVertexArray();
    const buf = gl.createBuffer();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, data, spec.dynamic ? gl.DYNAMIC_DRAW : gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, STRIDE, 0);
    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 4, gl.FLOAT, false, STRIDE, 12);
    gl.enableVertexAttribArray(2);
    gl.vertexAttribPointer(2, 3, gl.FLOAT, false, STRIDE, 28);
    gl.bindVertexArray(null);
    owned.buffers.push(buf);
    owned.vaos.push(vao);
    const L = {
      mode, prog, vao, buf, data,
      count: spec.count ?? data.length / 10,
      tex: spec.tex || null,
      visible: true,
      /** write vertex i into the CPU copy (dynamic layers) */
      set(i, x, y, z, s0 = 0, s1 = 0, s2 = 0, s3 = 0, a0 = 0, a1 = 0, a2 = 0) {
        const o = i * 10;
        data[o] = x; data[o + 1] = y; data[o + 2] = z;
        data[o + 3] = s0; data[o + 4] = s1; data[o + 5] = s2; data[o + 6] = s3;
        data[o + 7] = a0; data[o + 8] = a1; data[o + 9] = a2;
      },
      upload(count) {
        L.count = count;
        if (!count) return;
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, data, 0, count * 10);
      },
    };
    return L;
  };

  eng.texture = (source) => {
    const t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    owned.textures.push(t);
    return t;
  };

  eng.setScene = (scene) => {
    eng.scene = scene;
    if (scene && scene.camera) Object.assign(cam, scene.camera);
  };

  /** world → CSS pixels relative to the canvas. */
  eng.project = (x, y, z, out = {}) => {
    const w = x * vp[3] + y * vp[7] + z * vp[11] + vp[15];
    const cx = x * vp[0] + y * vp[4] + z * vp[8] + vp[12];
    const cy = x * vp[1] + y * vp[5] + z * vp[9] + vp[13];
    const iw = 1 / (w || 1e-6);
    out.x = (cx * iw * 0.5 + 0.5) * canvas.clientWidth;
    out.y = (1 - (cy * iw * 0.5 + 0.5)) * canvas.clientHeight;
    out.w = w;
    out.vis = w > 0.1;
    return out;
  };

  eng.resize = () => {
    const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
    const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  };

  function updateCamera() {
    aspect = canvas.width / Math.max(1, canvas.height);
    const fit = aspect < 1 ? 1 + (1 - aspect) * 0.95 : 1;
    cam.fit = fit;
    const fov = ((cam.fov * (1 + eng.warp * 1.1)) * Math.PI) / 180;
    const d = cam.dist * fit;
    const cp = Math.cos(cam.pitch);
    const ex = cam.tx + d * cp * Math.sin(cam.yaw);
    const ey = cam.ty + d * Math.sin(cam.pitch);
    const ez = cam.tz + d * cp * Math.cos(cam.yaw);
    perspective(proj, fov, aspect, 0.1, 220);
    lookAt(view, ex, ey, ez, cam.tx, cam.ty, cam.tz);
    mul(vp, proj, view);
    pxScale = canvas.height / (2 * Math.tan(fov / 2));
  }

  function draw(t) {
    const w = canvas.width, h = canvas.height;
    if (!w || !h) return;
    gl.viewport(0, 0, w, h);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    updateCamera();
    const sc = eng.scene;
    if (!sc) return;
    const u = sc.u;
    for (const L of sc.layers) {
      if (!L || !L.visible || !L.count) continue;
      const { pr, loc } = L.prog;
      gl.useProgram(pr);
      gl.uniformMatrix4fv(loc.uVP, false, vp);
      gl.uniform1f(loc.uPx, pxScale);
      gl.uniform1f(loc.uMaxPt, 96 * dpr);
      gl.uniform1f(loc.uTime, t);
      gl.uniform1f(loc.uWarp, eng.warp);
      gl.uniform4fv(loc.uA, u.A);
      gl.uniform4fv(loc.uB, u.B);
      gl.uniform4fv(loc.uC, u.C);
      gl.uniform4fv(loc.uD, u.D);
      if (L.tex) {
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, L.tex);
        gl.uniform1i(loc.uTex, 0);
      }
      gl.bindVertexArray(L.vao);
      gl.drawArrays(L.mode, 0, L.count);
    }
    gl.bindVertexArray(null);
  }

  function adapt(ms) {
    ema = ema * 0.94 + ms * 0.06;
    if (ema > 24) { slow++; fast = 0; } else if (ema < 14) { fast++; slow = 0; } else { slow = fast = 0; }
    if (slow > 40 && dpr > 0.55) {
      dpr = Math.max(0.55, dpr * 0.8);
      slow = 0;
      eng.resize();
    } else if (fast > 300 && dpr < targetDpr) {
      dpr = Math.min(targetDpr, dpr * 1.15);
      fast = 0;
      eng.resize();
    }
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000);
    const ms = now - last;
    last = now;
    const t = (now - t0) / 1000;
    if (ms < 250) adapt(ms);
    eng.time = t;
    if (eng.scene && eng.scene.update) eng.scene.update(t, dt);
    if (opts.onFrame) opts.onFrame(t, dt);
    draw(t);
  }

  eng.time = 0;
  eng.start = () => {
    if (running || eng.lost) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };
  eng.stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };
  /** Render a single frame (reduced-motion / on-demand mode). */
  eng.once = () => {
    const now = performance.now();
    const t = (now - t0) / 1000;
    eng.time = t;
    eng.resize();
    if (eng.scene && eng.scene.update) eng.scene.update(t, 0.016);
    draw(t);
  };
  eng.destroy = () => {
    eng.stop();
    for (const b of owned.buffers) gl.deleteBuffer(b);
    for (const v of owned.vaos) gl.deleteVertexArray(v);
    for (const t of owned.textures) gl.deleteTexture(t);
    for (const p of programs.values()) gl.deleteProgram(p.pr);
    programs.clear();
    const ext = gl.getExtension('WEBGL_lose_context');
    if (ext) ext.loseContext();
  };

  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    eng.lost = true;
    eng.stop();
    if (opts.onLost) opts.onLost();
  });

  eng.resize();
  return eng;
}
