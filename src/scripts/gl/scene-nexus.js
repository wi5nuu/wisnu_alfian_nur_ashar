import { VB } from './engine.js';
import { mulberry32, icosphere, octahedron, box, torus, pushEdges, ring, TAU } from './geo.js';

export const REALM_IDS = ['cyber', 'ai', 'software', 'devops'];

const DEFAULT_R = 8.6;
const ORBIT_SPEED = 0.12;
const SLOT_Y = [0.8, -0.6, 0.9, -0.7];

/** World position of realm gem `i` at time t (matches the vertex shader orbit). */
export function nexusAnchor(i, t, out = [0, 0, 0], R = DEFAULT_R) {
  const a = (i / 4) * TAU + Math.PI / 4;
  const x = Math.cos(a) * R, z = Math.sin(a) * R;
  const th = t * ORBIT_SPEED, c = Math.cos(th), s = Math.sin(th);
  out[0] = c * x - s * z;
  out[1] = SLOT_Y[i];
  out[2] = s * x + c * z;
  return out;
}

const SHELL = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  float r=length(p);
  float dir=s.x>.5?1.:-1.;
  p.xz=rot(p.xz,uTime*dir*(.03+.35/(r+3.)));
  p.y+=sin(uTime*.4+s.y*TAU)*.25;
  float tw=.5+.5*sin(uTime*(.8+s.z*2.)+s.x*TAU);
  col=vec4(mix(LIME,vec3(1.),s.z*s.z*.8),(.18+.5*tw)*(.3+.7*s.y)*(1.-uWarp*.4));
  size=s.w;
}`;

const SHAPES = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  float id=s.x;
  if(s.z<.5){
    vec3 l=p-a;
    l.xz=rot(l.xz,uTime*(.35+s.y*.4));
    l.yz=rot(l.yz,uTime*.25*(.5+s.y)+id*2.);
    p=a+l;
  }
  p.xz=rot(p.xz,uTime*${ORBIT_SPEED.toFixed(2)});
  float hot=1.-step(.5,abs(id-uA.x));
  float base=s.z<.5?.85:.2;
  col=vec4(mix(LIME,vec3(1.),hot*.65),base+hot*.4);
}`;

const CORE = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  if(s.z<.5){
    size=1.3+.25*sin(uTime*2.2);
    col=vec4(mix(LIME,vec3(1.),.7),1.);
  } else {
    float ang=uTime*(.7+s.x*1.6)+s.y*TAU;
    p=vec3(cos(ang),sin(ang*(.6+s.w*.8)+s.y),sin(ang*.8))*(1.2+s.x*.9);
    size=.09+.07*s.w;
    col=vec4(LIME2,.55+.4*s.w);
  }
}`;

const CORE_RINGS = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  float id=s.x;
  p.xy=rot(p.xy,uTime*(.4+id*.25)*(mod(id,2.)<.5?1.:-1.));
  p.yz=rot(p.yz,uTime*.3*(1.+id)+id);
  float sc=pow(.5+.5*cos(s.y*TAU-uTime*(1.5+id)),6.);
  col=vec4(LIME,.12+.5*sc);
}`;

export function nexusScene(eng, q = 1, opts = {}) {
  const ORBIT_R = opts.R || DEFAULT_R;
  const GEM = opts.gem || 1;
  const rnd = mulberry32(7);
  const u = { A: [-1, 0, 0, 0], B: [0, 0, 0, 0], C: [0, 0, 0, 0], D: [0, 0, 0, 0] };

  // distant particle shell
  const sh = new VB();
  const n = Math.round(1500 * q);
  for (let i = 0; i < n; i++) {
    const r = 11 + Math.pow(rnd(), 0.8) * 16;
    const th = rnd() * TAU, ph = Math.acos(2 * rnd() - 1);
    sh.v(r * Math.sin(ph) * Math.cos(th), r * Math.cos(ph) * 0.7, r * Math.sin(ph) * Math.sin(th), rnd(), rnd(), rnd(), 0.05 + rnd() * 0.16);
  }

  // realm gems
  const geos = [icosphere(0), octahedron(), box(0.5), torus(1, 0.32, 16, 8)];
  const scales = [1.15, 1.2, 1.7, 0.95];
  const wf = new VB();
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * TAU + Math.PI / 4;
    const cx = Math.cos(a) * ORBIT_R, cz = Math.sin(a) * ORBIT_R, cy = SLOT_Y[i];
    pushEdges(wf, geos[i], scales[i] * GEM, cx, cy, cz, [i, rnd(), 0, 0], [cx, cy, cz]);
    // spoke to the core
    wf.v(cx, cy, cz, i, 0, 1, 0, cx, cy, cz);
    wf.v(0, 0, 0, i, 0, 1, 0, cx, cy, cz);
  }

  const core = new VB();
  core.v(0, 0, 0, 0, 0, 0, 0);
  for (let i = 0; i < 36; i++) core.v(0, 0, 0, rnd(), rnd(), 1, rnd());

  const rings = new VB();
  for (let k = 0; k < 3; k++) {
    const pts = ring(56, 1.7 + k * 0.45);
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      rings.v(a[0], a[1], 0, k, a[3]);
      rings.v(b[0], b[1], 0, k, i + 1 === pts.length ? 1 : b[3]);
    }
  }

  const layers = [
    eng.layer({ mode: 'points', data: sh.done(), motion: SHELL }),
    eng.layer({ mode: 'lines', data: wf.done(), motion: SHAPES }),
    eng.layer({ mode: 'lines', data: rings.done(), motion: CORE_RINGS }),
    eng.layer({ mode: 'points', data: core.done(), motion: CORE }),
  ];

  return {
    id: 'nexus',
    layers,
    u,
    camera: { yaw: 0.4, pitch: 0.34, dist: 21, fov: 55, tx: 0, ty: 0.4, tz: 0 },
    hover(i) { u.A[0] = i; },
    anchor: (i, t, out) => nexusAnchor(i, t, out, ORBIT_R),
    update() {},
  };
}
