import { VB } from './engine.js';
import { mulberry32, box, pushEdges, TAU } from './geo.js';

// Realm 04 — DEVOPS: a CI/CD pipeline loop. Game: approve each gate exactly when a container is inside it.

export const STAGES = [
  { name: 'Commit', s: 0.07 },
  { name: 'Build', s: 0.25 },
  { name: 'Test', s: 0.43 },
  { name: 'Security scan', s: 0.65 },
  { name: 'Deploy', s: 0.83 },
];
const N_CONT = 7;
const ROUND = 45;

export function pathPoint(s, out = [0, 0, 0]) {
  const a = TAU * s;
  out[0] = 7.6 * Math.sin(a);
  out[1] = 1.4 * Math.sin(2 * a + 0.7);
  out[2] = 4.7 * Math.sin(2 * a);
  return out;
}

const PATH = `vec3 P(float s){float a=TAU*s;return vec3(7.6*sin(a),1.4*sin(2.*a+.7),4.7*sin(2.*a));}`;

const TRACK = `${PATH}
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  float f=pow(.5+.5*sin(TAU*(s.x*5.-uTime*.4)),8.);
  col=vec4(LIME,(.2+.55*f)*(1.-uWarp*.5));
}`;

const GATE = `${PATH}
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  float near=0.;
  for(int i=0;i<${N_CONT};i++){
    float cs=fract(uC.y+float(i)/${N_CONT}.);
    float d=abs(cs-s.y);d=min(d,1.-d);
    near=max(near,exp(-d*60.));
  }
  float act=1.-step(.5,abs(s.x-uB.x));
  vec3 c=vec3(0.);
  // grow ring slightly when a container passes
  p+=(p-P(s.y))*near*.18;
  col=vec4(mix(LIME,vec3(1.),clamp(near*.8+act*.5,0.,1.)),(.3+near*.7+act*(.3+.3*sin(uTime*7.)))*(1.-uWarp*.4));
}`;

const CONT = `${PATH}
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  vec3 l=p;
  l.xz=rot(l.xz,uTime*.9+s.x);
  l.xy=rot(l.xy,uTime*.6+s.x*2.);
  p=P(fract(uC.y+s.x/${N_CONT}.))+l;
  col=vec4(LIME2,.9);
}`;

const SPARK = `${PATH}
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  if(s.z<.5){
    p=P(fract(uC.y+s.x/${N_CONT}.));
    size=.8+.18*sin(uTime*6.+s.x*5.);
    col=vec4(mix(LIME2,vec3(1.),.6),.95);
  } else {
    float sp=fract(uC.y*1.7+s.x);
    p=P(sp)+a*(.4+.35*sin(uTime*.9+s.y*TAU));
    size=.06+.07*s.w;
    col=vec4(mix(LIME,vec3(1.),s.y*s.y),(.25+.5*s.y)*(1.-uWarp*.5));
  }
}`;

export function devopsScene(eng, q, H) {
  const rnd = mulberry32(47);
  const u = { A: [0, 0, 0, 0], B: [-1, 0, 0, 0], C: [0, 0, 0, 0], D: [0, 0, 0, 0] };

  // track + rails
  const tk = new VB();
  const n = 300, p0 = [0, 0, 0], p1 = [0, 0, 0], p2 = [0, 0, 0];
  const lateral = (s, out) => {
    pathPoint(s - 0.002, p1); pathPoint(s + 0.002, p2);
    const tx = p2[0] - p1[0], ty = p2[1] - p1[1], tz = p2[2] - p1[2];
    // lateral = normalize(t × up)
    let lx = -tz, lz = tx;
    const l = Math.hypot(lx, lz) || 1;
    out[0] = lx / l; out[1] = 0; out[2] = lz / l;
    return [tx, ty, tz];
  };
  const lat = [0, 0, 0];
  for (let i = 0; i < n; i++) {
    const sa = i / n, sb = (i + 1) / n;
    for (const off of [-0.55, 0.55]) {
      const pa = pathPoint(sa, [0, 0, 0]), pb = pathPoint(sb, [0, 0, 0]);
      lateral(sa, lat);
      tk.v(pa[0] + lat[0] * off, pa[1] + lat[1] * off, pa[2] + lat[2] * off, sa);
      lateral(sb, lat);
      tk.v(pb[0] + lat[0] * off, pb[1] + lat[1] * off, pb[2] + lat[2] * off, sb);
    }
  }
  // sleepers
  for (let i = 0; i < 120; i++) {
    const s = i / 120;
    const pc = pathPoint(s, [0, 0, 0]);
    lateral(s, lat);
    tk.v(pc[0] - lat[0] * 0.7, pc[1] - lat[1] * 0.7, pc[2] - lat[2] * 0.7, s).v(pc[0] + lat[0] * 0.7, pc[1] + lat[1] * 0.7, pc[2] + lat[2] * 0.7, s);
  }

  // gates (rings facing along the track)
  const gt = new VB();
  const R = 1.5, seg = 40;
  STAGES.forEach((st, k) => {
    const c = pathPoint(st.s, [0, 0, 0]);
    const t = lateral(st.s, lat);
    const tl = Math.hypot(t[0], t[1], t[2]) || 1;
    const tx = t[0] / tl, ty = t[1] / tl, tz = t[2] / tl;
    // v = t × lat
    const vx = ty * lat[2] - tz * lat[1], vy = tz * lat[0] - tx * lat[2], vz = tx * lat[1] - ty * lat[0];
    const pt = (th) => [c[0] + (Math.cos(th) * lat[0] + Math.sin(th) * vx) * R, c[1] + (Math.cos(th) * lat[1] + Math.sin(th) * vy) * R, c[2] + (Math.cos(th) * lat[2] + Math.sin(th) * vz) * R];
    for (let i = 0; i < seg; i++) {
      const a = pt((i / seg) * TAU), b = pt(((i + 1) / seg) * TAU);
      gt.v(a[0], a[1], a[2], k, st.s, i / seg).v(b[0], b[1], b[2], k, st.s, (i + 1) / seg);
    }
    // posts
    for (const th of [0, TAU / 4, TAU / 2, (3 * TAU) / 4]) {
      const a = pt(th);
      gt.v(a[0], a[1], a[2], k, st.s, th / TAU).v(c[0] + (a[0] - c[0]) * 1.22, c[1] + (a[1] - c[1]) * 1.22, c[2] + (a[2] - c[2]) * 1.22, k, st.s, th / TAU);
    }
  });

  // containers (wireframe cubes) + sparks
  const ct = new VB();
  for (let i = 0; i < N_CONT; i++) pushEdges(ct, box(0.4), 1, 0, 0, 0, [i, 0, 0, 0]);
  const sk = new VB();
  for (let i = 0; i < N_CONT; i++) sk.v(0, 0, 0, i, 0, 0, 0);
  const sn = Math.round(520 * q);
  for (let i = 0; i < sn; i++) {
    const a = rnd() * TAU, b = Math.acos(2 * rnd() - 1), r = Math.cbrt(rnd());
    sk.v(0, 0, 0, rnd(), rnd(), 1, rnd(), Math.sin(b) * Math.cos(a) * r, Math.sin(b) * Math.sin(a) * r * 0.7, Math.cos(b) * r);
  }

  const layers = [
    eng.layer({ mode: 'lines', data: tk.done(), motion: TRACK }),
    eng.layer({ mode: 'lines', data: gt.done(), motion: GATE }),
    eng.layer({ mode: 'lines', data: ct.done(), motion: CONT }),
    eng.layer({ mode: 'points', data: sk.done(), motion: SPARK }),
  ];

  // ---------- game ----------
  let phase = 0, speed = 0.05, playing = false, score = 0, combo = 0, level = 1, gate = 0, timeLeft = ROUND, best = 0, shipped = 0;

  function hud() {
    H.set({ score, best, combo, level, meter: playing ? Math.max(0, timeLeft / ROUND) : 1, meterLabel: playing ? `NEXT: ${STAGES[gate].name.toUpperCase()}` : 'PIPELINE', status: playing ? `LVL ${level}` : '' });
  }
  function over() {
    playing = false;
    best = Math.max(best, score);
    u.B[0] = -1;
    H.end({ score, best, title: 'RELEASE SHIPPED', sub: `${shipped} gates approved` });
    hud();
  }
  let logT = 0;
  function update(t, dt) {
    speed = playing ? 0.062 + level * 0.009 : 0.05;
    phase += speed * dt;
    u.C[1] = phase % 1000;
    if (playing) {
      timeLeft -= dt;
      if (timeLeft <= 0) over();
      else if ((t * 10 | 0) !== ((t - dt) * 10 | 0)) hud();
    } else {
      logT -= dt;
      if (logT <= 0) {
        const st = STAGES[(rnd() * STAGES.length) | 0];
        H.log(`[${st.name.toLowerCase()}] ✓ ${['passed', 'cached', 'green', '0 critical', 'rolled out'][(rnd() * 5) | 0]} · ${(rnd() * 40 + 4).toFixed(0)}s`);
        logT = 1.2 + rnd() * 1.4;
      }
    }
  }

  return {
    id: 'devops',
    layers,
    u,
    camera: { yaw: 0.2, pitch: 0.42, dist: 16.5, fov: 58, tx: 0, ty: 0, tz: 0 },
    update,
    stages: STAGES.map((s) => ({ name: s.name, pos: (() => { const p = pathPoint(s.s, [0, 0, 0]); p[1] += 2.1; return p; })() })),
    mission: 'Tap when a container is inside the glowing gate. Perfect timing = bonus.',
    start() {
      score = 0; combo = 0; level = 1; gate = 0; timeLeft = ROUND; shipped = 0; playing = true;
      u.B[0] = 0; hud();
    },
    stop() { playing = false; u.B[0] = -1; hud(); },
    get playing() { return playing; },
    tap() {
      if (!playing) return false;
      const gs = STAGES[gate].s;
      let d = 1;
      for (let i = 0; i < N_CONT; i++) {
        const cs = (phase + i / N_CONT) % 1;
        const dd = Math.abs(cs - gs);
        d = Math.min(d, dd, 1 - dd);
      }
      if (d < 0.02) { combo++; score += 25 + combo * 3; shipped++; H.toast('PERFECT', 'good', 600); H.vibrate(16); gate = (gate + 1) % STAGES.length; }
      else if (d < 0.05) { combo++; score += 10 + combo; shipped++; H.toast('GOOD', 'good', 500); H.vibrate(10); gate = (gate + 1) % STAGES.length; }
      else { combo = 0; timeLeft = Math.max(0, timeLeft - 2); H.toast('ROLLBACK −2s', 'bad', 700); H.vibrate(35); }
      level = 1 + Math.floor(score / 110);
      u.B[0] = gate;
      hud();
      return true;
    },
    logs: () => `[${STAGES[(rnd() * 5) | 0].name.toLowerCase()}] ok`,
    setBest(v) { best = v; },
  };
}
