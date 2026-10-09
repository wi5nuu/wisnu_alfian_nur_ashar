import { VB, SHADE_POINT } from './engine.js';
import { mulberry32, icosphere, pushEdges, ring, TAU } from './geo.js';

// Realm 01 — CYBER: matrix rain, a shielded core and incoming packets. Game: block the threats.

const GLYPHS = '01{}[]<>/\\|;:=+-*#$%&@!?~^ABCDEF'.slice(0, 32).padEnd(32, '0');

function glyphAtlas() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.font = '700 25px ui-monospace, Menlo, Consolas, monospace';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  for (let i = 0; i < 32; i++) g.fillText(GLYPHS[i], (i % 8) * 32 + 16, Math.floor(i / 8) * 32 + 17);
  return c;
}

const RAIN = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  float H=16.;
  float sp=1.6+s.y*3.4;
  float y=mod(s.x*H*2.-uTime*sp+a.x*.42,H*2.)-H;
  p.y=y;
  float f=1.-a.x/a.y;
  float head=step(a.x,.5);
  col=vec4(mix(LIME,vec3(1.),head*.85),f*f*(.25+.75*s.z)*(1.-uWarp*.5));
  col.a*=smoothstep(-H,-H+4.,y)*smoothstep(H,H-4.,y);
  size=.34*(.6+.4*s.z)*(1.+head*.5);
}`;
const RAIN_SHADE = `
uniform sampler2D uTex;
vec4 shade(){
  float tick=floor(uTime*(1.5+vSeed.y*3.5)+vAux.x*.7);
  float g=floor(fract(sin((vSeed.z*91.7+tick*7.13+vAux.x)*12.9898)*43758.5453)*32.);
  vec2 cell=vec2(mod(g,8.),floor(g/8.));
  float a=texture(uTex,(cell+gl_PointCoord)/vec2(8.,4.)).a;
  return vec4(vCol.rgb,vCol.a*a*1.7);
}`.replace('uniform sampler2D uTex;', '');

const SHIELD = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  vec3 n=normalize(p);
  float R=length(p);
  float imp=0.;
  float age=uTime-uA.w;
  if(uA.w>0.){
    float d=acos(clamp(dot(n,uA.xyz),-1.,1.));
    imp=exp(-d*2.2)*exp(-age*2.2)*sin(age*14.-d*6.);
  }
  p=n*(R+imp*.38);
  float hp=uB.x;
  float flick=hp<.35?step(.5,hash(floor(uTime*18.)+s.x)):1.;
  float shimmer=.5+.5*sin(uTime*1.6+p.y*2.2+s.y*TAU);
  col=vec4(mix(LIME,vec3(1.),clamp(abs(imp)*1.6,0.,1.)),(.1+.16*shimmer+abs(imp)*.9)*s.z*flick*(.5+.5*hp));
}`;

const RINGS = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  float id=s.x;
  float sp=(id+1.)*.3*(mod(id,2.)<.5?1.:-1.);
  p.xy=rot(p.xy,uTime*sp+id);
  p.yz=rot(p.yz,uTime*sp*.8);
  float sc=pow(.5+.5*cos(s.y*TAU-uTime*2.2),8.);
  col=vec4(LIME,.12+.6*sc);
}`;

const GRID = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  float d=length(p.xz);
  p.y+=.35*sin(d*.55-uTime*1.6);
  col=vec4(LIME,.32*smoothstep(26.,5.,d)*(1.-uWarp*.6));
}`;

const CORE = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  if(s.z<.5){
    size=1.5+.3*sin(uTime*3.);
    col=vec4(mix(LIME,vec3(1.),.75),1.);
  } else {
    float ang=uTime*(1.+s.x*2.)+s.y*TAU;
    p=vec3(cos(ang),sin(ang*1.3+s.y),sin(ang*.9))*(.9+s.x*.8);
    size=.07+.06*s.w;
    col=vec4(LIME2,.6);
  }
}`;

const THREAT = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  float j=step(.82,hash(floor(uTime*22.)+s.x*40.));
  p+=(vec3(hash(s.x),hash(s.x+3.),hash(s.x+7.))-.5)*.14*j;
  col=vec4(mix(vec3(1.),LIME2,j),1.);
  size=.95+.25*s.y;
}`;
const THREAT_SHADE = `vec4 shade(){
  vec2 q=gl_PointCoord*2.-1.;
  float d=abs(q.x)+abs(q.y);
  if(d>1.)discard;
  float edge=smoothstep(.55,.95,d);
  vec3 c=mix(vec3(1.),LIME,edge);
  return vec4(c,vCol.a*(.35+.65*edge+.4*(1.-d)));
}`;

const TAIL = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  col=vec4(mix(LIME,vec3(1.),s.x),s.x*.65);
}`;

const BURST = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  col=vec4(mix(LIME,vec3(1.),s.x*s.x),s.x);
  size=.1+.2*s.x;
}`;

const MAX_THREATS = 14;
const MAX_BURST = 220;
const CORE_R = 3.15;

export function cyberScene(eng, q, H) {
  const rnd = mulberry32(11);
  const u = { A: [0, 1, 0, -1], B: [1, 0, 0, 0], C: [0, 0, 0, 0], D: [0, 0, 0, 0] };

  // matrix rain
  const T = 16;
  const cols = Math.round(120 * q);
  const rain = new VB();
  for (let c = 0; c < cols; c++) {
    const ang = rnd() * TAU, r = 5.5 + Math.pow(rnd(), 0.7) * 11;
    const x = Math.cos(ang) * r, z = Math.sin(ang) * r;
    const s0 = rnd(), s1 = rnd(), s2 = rnd();
    for (let k = 0; k < T; k++) rain.v(x, 0, z, s0, s1, s2, 0, k, T, 0);
  }

  // shield (two lattices)
  const sh = new VB();
  pushEdges(sh, icosphere(1), 2.35, 0, 0, 0, [0, 0, 1, 0]);
  pushEdges(sh, icosphere(2), CORE_R, 0, 0, 0, [1, 0.3, 0.55, 0]);
  // randomise per-vertex phase deterministically
  for (let i = 0; i < sh.a.length; i += 10) sh.a[i + 4] = Math.abs(Math.sin(sh.a[i] * 12.9 + sh.a[i + 1] * 7.7 + sh.a[i + 2] * 3.1));

  // scanner rings
  const rg = new VB();
  for (let k = 0; k < 3; k++) {
    const pts = ring(64, 3.9 + k * 0.5);
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      rg.v(a[0], a[1], 0, k, a[3]);
      rg.v(b[0], b[1], 0, k, i + 1 === pts.length ? 1 : b[3]);
    }
  }

  // floor grid
  const gd = new VB();
  const N = 26, seg = 20, ext = 26;
  for (let i = 0; i <= N; i++) {
    const c = -ext + (i / N) * ext * 2;
    for (let sgm = 0; sgm < seg; sgm++) {
      const a = -ext + (sgm / seg) * ext * 2, b = -ext + ((sgm + 1) / seg) * ext * 2;
      gd.v(c, -7.5, a, 0).v(c, -7.5, b, 0);
      gd.v(a, -7.5, c, 0).v(b, -7.5, c, 0);
    }
  }

  const core = new VB();
  core.v(0, 0, 0, 0, 0, 0, 0);
  for (let i = 0; i < 48; i++) core.v(0, 0, 0, rnd(), rnd(), 1, rnd());

  const atlas = eng.texture(glyphAtlas());
  const threatL = eng.layer({ mode: 'points', data: new Float32Array(MAX_THREATS * 10), motion: THREAT, shade: THREAT_SHADE, dynamic: true, count: 0 });
  const tailL = eng.layer({ mode: 'lines', data: new Float32Array(MAX_THREATS * 20), motion: TAIL, dynamic: true, count: 0 });
  const burstL = eng.layer({ mode: 'points', data: new Float32Array(MAX_BURST * 10), motion: BURST, dynamic: true, count: 0 });

  const layers = [
    eng.layer({ mode: 'lines', data: gd.done(), motion: GRID }),
    eng.layer({ mode: 'points', data: rain.done(), motion: RAIN, shade: RAIN_SHADE, tex: atlas }),
    eng.layer({ mode: 'lines', data: rg.done(), motion: RINGS }),
    eng.layer({ mode: 'lines', data: sh.done(), motion: SHIELD }),
    eng.layer({ mode: 'points', data: core.done(), motion: CORE }),
    tailL,
    threatL,
    burstL,
  ];

  // ---------- simulation ----------
  const threats = [];
  const bursts = [];
  const pt = {};
  let playing = false, score = 0, combo = 0, integrity = 100, level = 1, spawn = 0, demoSpawn = 1, best = 0, id = 1;
  const now = () => eng.time;

  function burst(x, y, z, n, speed) {
    for (let i = 0; i < n && bursts.length < MAX_BURST; i++) {
      const a = rnd() * TAU, b = Math.acos(2 * rnd() - 1), v = speed * (0.4 + rnd() * 0.9);
      bursts.push({ x, y, z, vx: Math.sin(b) * Math.cos(a) * v, vy: Math.cos(b) * v, vz: Math.sin(b) * Math.sin(a) * v, life: 1 });
    }
  }

  function spawnThreat() {
    if (threats.length >= MAX_THREATS) return;
    const a = rnd() * TAU, y = (rnd() - 0.5) * 12, r = 17;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const speed = (playing ? 2.1 + level * 0.32 : 2.4) * (0.85 + rnd() * 0.4);
    const d = Math.hypot(x, y, z);
    threats.push({ id: id++, x, y, z, vx: (-x / d) * speed, vy: (-y / d) * speed, vz: (-z / d) * speed, s: rnd() });
  }

  function impact(t, x, y, z) {
    const d = Math.hypot(x, y, z) || 1;
    u.A[0] = x / d; u.A[1] = y / d; u.A[2] = z / d; u.A[3] = t;
  }

  function hud() {
    H.set({ score, best, combo, level, meter: integrity / 100, meterLabel: 'INTEGRITY', status: playing ? `LVL ${level}` : '' });
  }

  function over() {
    playing = false;
    best = Math.max(best, score);
    H.end({ score, best, title: 'BREACH DETECTED', sub: 'Core compromised' });
    hud();
  }

  function update(t, dt) {
    // spawn
    if (playing) {
      spawn -= dt;
      if (spawn <= 0) { spawnThreat(); spawn = Math.max(0.38, 1.25 - level * 0.09) * (0.7 + rnd() * 0.6); }
    } else {
      demoSpawn -= dt;
      if (demoSpawn <= 0) { spawnThreat(); demoSpawn = 1.6 + rnd() * 1.6; }
    }

    let n = 0;
    for (let i = threats.length - 1; i >= 0; i--) {
      const th = threats[i];
      th.x += th.vx * dt; th.y += th.vy * dt; th.z += th.vz * dt;
      const d = Math.hypot(th.x, th.y, th.z);
      const guard = playing ? CORE_R + 0.25 : CORE_R + 3.4; // demo: the shield auto-defends earlier
      if (d <= guard) {
        impact(t, th.x, th.y, th.z);
        burst(th.x, th.y, th.z, playing ? 14 : 22, 3.4);
        threats.splice(i, 1);
        if (playing) {
          integrity = Math.max(0, integrity - 12);
          combo = 0;
          H.vibrate(40);
          H.toast('BREACH −12%', 'bad');
          hud();
          if (integrity <= 0) over();
        } else if (Math.random() < 0.5) {
          H.log(`blocked ${10 + ((rnd() * 240) | 0)}.${(rnd() * 255) | 0}.${(rnd() * 255) | 0}.${(rnd() * 255) | 0} — ${['SQLi', 'XSS', 'SSRF', 'RCE', 'BruteForce'][(rnd() * 5) | 0]}`);
        }
      }
    }
    if (playing && integrity < 100) integrity = Math.min(100, integrity + dt * 0.35);

    // write threats + tails
    for (let i = 0; i < threats.length; i++) {
      const th = threats[i];
      threatL.set(i, th.x, th.y, th.z, th.id * 0.137, th.s, 0, 0);
      const d = Math.hypot(th.vx, th.vy, th.vz) || 1;
      tailL.set(i * 2, th.x, th.y, th.z, 1);
      tailL.set(i * 2 + 1, th.x - (th.vx / d) * 2.2, th.y - (th.vy / d) * 2.2, th.z - (th.vz / d) * 2.2, 0);
      n++;
    }
    threatL.upload(n);
    tailL.upload(n * 2);

    // bursts
    let m = 0;
    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i];
      b.life -= dt * 1.5;
      if (b.life <= 0) { bursts.splice(i, 1); continue; }
      b.x += b.vx * dt; b.y += b.vy * dt; b.z += b.vz * dt;
      b.vx *= 0.96; b.vy *= 0.96; b.vz *= 0.96;
    }
    for (const b of bursts) burstL.set(m++, b.x, b.y, b.z, b.life);
    burstL.upload(m);

    u.B[0] = integrity / 100;
  }

  return {
    id: 'cyber',
    layers,
    u,
    camera: { yaw: 0.5, pitch: 0.26, dist: 14.5, fov: 58, tx: 0, ty: -0.4, tz: 0 },
    update,
    mission: 'Tap incoming packets before they reach the core.',
    start() {
      threats.length = 0; bursts.length = 0;
      score = 0; combo = 0; integrity = 100; level = 1; spawn = 0.4; playing = true;
      hud();
    },
    stop() { playing = false; threats.length = 0; hud(); },
    get playing() { return playing; },
    tap(x, y) {
      let best_ = null, bd = 56;
      for (const th of threats) {
        eng.project(th.x, th.y, th.z, pt);
        if (!pt.vis) continue;
        const d = Math.hypot(pt.x - x, pt.y - y);
        if (d < bd) { bd = d; best_ = th; }
      }
      if (!best_) return false;
      threats.splice(threats.indexOf(best_), 1);
      burst(best_.x, best_.y, best_.z, 26, 4.2);
      if (playing) {
        combo++;
        score += 10 + Math.min(combo, 10) * 2;
        level = 1 + Math.floor(score / 140);
        H.vibrate(14);
        H.toast(combo > 2 ? `BLOCKED ×${combo}` : 'BLOCKED', 'good');
        hud();
      }
      return true;
    },
    logs: () => `scan: port ${[22, 80, 443, 3306, 5432, 8080][(rnd() * 6) | 0]} hardened · ${['CSP', 'HSTS', 'RBAC', 'WAF', 'JWT'][(rnd() * 5) | 0]} ok`,
    setBest(v) { best = v; },
  };
}
