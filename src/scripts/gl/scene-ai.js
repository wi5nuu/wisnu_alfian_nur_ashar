import { VB } from './engine.js';
import { mulberry32, TAU } from './geo.js';

// Realm 02 — AI: a living neural network + embedding cloud. Game: fire the neurons in sequence.

const LAYERS = [5, 8, 10, 8, 4];
const GAP = 3.4;

const FLOAT = `
  p.y+=sin(uTime*.7+s.y*TAU)*.14;
  p.z+=cos(uTime*.5+s.y*TAU)*.14;`;

const NODE = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  float L=s.x;${FLOAT}
  float fl=(uTime-uA.x)*uA.y;
  float wave=uA.x>0.?exp(-pow((fl-L)*1.5,2.)):0.;
  float idle=.4+.25*sin(uTime*1.3+s.y*TAU);
  float tgt=(abs(L-uB.x)<.5&&abs(s.z-uB.y)<.5)?1.:0.;
  float ch=L<.5?uC.x:(L<1.5?uC.y:(L<2.5?uC.z:(L<3.5?uC.w:uD.x)));
  float done=(L<uD.y-.5&&abs(s.z-ch)<.5)?1.:0.;
  float lit=clamp(wave+tgt*.9+done*.8,0.,1.);
  col=vec4(mix(LIME,vec3(1.),lit),clamp(idle+wave+done*.5+tgt*(.55+.45*sin(uTime*9.)),0.,1.6)*(1.-uWarp*.5));
  size=(.55+wave*.28+tgt*.32+done*.12)*(.85+.3*s.w);
}`;

const EDGE = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;${FLOAT}
  col=vec4(LIME,.2*(1.-uWarp*.6));
}`;
const EDGE_SHADE = `
vec4 shade(){
  float lx=vW.x/${GAP.toFixed(1)}+2.;
  float fl=(uTime-uA.x)*uA.y;
  float wave=uA.x>0.?exp(-pow((fl-lx)*1.8,2.)):0.;
  float ph=fract(uTime*(.22+vSeed.z*.3)+vSeed.z*7.);
  float pulse=exp(-pow((vAux.x-ph)*8.,2.));
  float a=vCol.a*(.3+vSeed.w*.9)+pulse*.75*vSeed.w+wave*.85;
  return vec4(mix(vCol.rgb,vec3(1.),clamp(pulse+wave,0.,1.)*.75),a);
}`;

const CLOUD = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  p.xz=rot(p.xz,uTime*.05*(s.y>.5?1.:.6));
  p.y+=sin(uTime*.6+s.x*TAU)*.2;
  float tw=.5+.5*sin(uTime*(.8+s.z*1.8)+s.x*TAU);
  col=vec4(mix(LIME,vec3(1.),s.z*s.z),(.12+.4*tw)*(1.-uWarp*.4));
  size=.05+.1*s.w;
}`;

export const AI_PREDICTIONS = [
  ['YOLOv8', 'object: colony', 97.3],
  ['Gemini', 'intent: summarize', 95.1],
  ['XGBoost', 'class: phishing', 98.6],
  ['RAG', 'answer: grounded', 93.4],
  ['OpenCV', 'region: plate', 96.2],
];

export function aiScene(eng, q, H) {
  const rnd = mulberry32(23);
  const u = { A: [-1, 3, 0, 0], B: [-1, -1, 0, 0], C: [-1, -1, -1, -1], D: [-1, 0, 0, 0] };

  // nodes
  const nodes = []; // {L,i,x,y,z,ph}
  LAYERS.forEach((n, L) => {
    const r = 0.7 + n * 0.3;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * TAU + L * 0.55;
      nodes.push({ L, i, x: (L - 2) * GAP, y: Math.cos(a) * r * 0.85, z: Math.sin(a) * r, ph: rnd(), w: rnd() });
    }
  });
  const byLayer = LAYERS.map((_, L) => nodes.filter((n) => n.L === L));

  const nv = new VB();
  for (const n of nodes) nv.v(n.x, n.y, n.z, n.L, n.ph, n.i, n.w);
  const ev = new VB();
  for (let L = 0; L < LAYERS.length - 1; L++) {
    for (const a of byLayer[L]) {
      for (const b of byLayer[L + 1]) {
        const pr = rnd(), w = rnd();
        ev.v(a.x, a.y, a.z, L, a.ph, pr, w, 0);
        ev.v(b.x, b.y, b.z, L + 1, b.ph, pr, w, 1);
      }
    }
  }
  // embedding cloud
  const cv = new VB();
  const centers = [];
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * TAU + 0.4, r = 11 + rnd() * 3;
    centers.push([Math.cos(a) * r, (rnd() - 0.5) * 8, Math.sin(a) * r]);
  }
  const cn = Math.round(1300 * q);
  for (let i = 0; i < cn; i++) {
    const c = centers[i % 6];
    const g = () => (rnd() + rnd() + rnd() - 1.5) * 2.4;
    cv.v(c[0] + g(), c[1] + g(), c[2] + g(), rnd(), rnd(), (i % 6) / 6 + rnd() * 0.1, rnd());
  }

  const layers = [
    eng.layer({ mode: 'points', data: cv.done(), motion: CLOUD }),
    eng.layer({ mode: 'lines', data: ev.done(), motion: EDGE, shade: EDGE_SHADE }),
    eng.layer({ mode: 'points', data: nv.done(), motion: NODE }),
  ];

  // ---------- game: chain the neurons from input to output ----------
  const pt = {};
  let playing = false, score = 0, combo = 0, level = 1, lives = 3, best = 0;
  let layer = 0, target = 0, timer = 0, limit = 8, chosen = [-1, -1, -1, -1, -1], waveEnd = 0;

  function setTarget() {
    target = (rnd() * LAYERS[layer]) | 0;
    u.B[0] = layer; u.B[1] = target;
  }
  function resetChain() {
    layer = 0; chosen = [-1, -1, -1, -1, -1];
    u.C[0] = u.C[1] = u.C[2] = u.C[3] = u.D[0] = -1; u.D[1] = 0;
    limit = Math.max(3.6, 8 - level * 0.55);
    timer = limit;
    setTarget();
  }
  function hud() {
    H.set({ score, best, combo, level, meter: playing ? Math.max(0, timer / limit) : 1, meterLabel: playing ? `LIVES ${'●'.repeat(lives)}${'○'.repeat(3 - lives)}` : 'ACCURACY', status: playing ? `LVL ${level}` : '' });
  }
  function fire(t) {
    u.A[0] = t; u.A[1] = 3.2;
  }
  function over() {
    playing = false;
    best = Math.max(best, score);
    u.B[0] = -1;
    H.end({ score, best, title: 'MODEL DIVERGED', sub: 'Out of attempts' });
    hud();
  }

  function update(t, dt) {
    if (playing) {
      timer -= dt;
      if (timer <= 0) {
        lives--; combo = 0;
        H.vibrate(40); H.toast('TIMEOUT', 'bad');
        if (lives <= 0) over(); else resetChain();
        hud();
      } else if ((t * 10 | 0) !== ((t - dt) * 10 | 0)) hud();
    } else if (t > waveEnd && Math.random() < dt * 0.22) {
      fire(t); waveEnd = t + 2.6; // idle: periodic forward pass keeps the network alive
    }
  }

  return {
    id: 'ai',
    layers,
    u,
    camera: { yaw: -0.55, pitch: 0.18, dist: 12.2, fov: 58, tx: 0, ty: 0, tz: 0 },
    update,
    mission: 'Fire one neuron per layer, input → output, before the clock runs out.',
    start() {
      score = 0; combo = 0; level = 1; lives = 3; playing = true;
      resetChain(); hud();
    },
    stop() { playing = false; u.B[0] = -1; u.D[1] = 0; u.C.fill(-1); u.D[0] = -1; hud(); },
    get playing() { return playing; },
    tap(x, y) {
      let hit = null, bd = 50;
      for (const n of nodes) {
        eng.project(n.x, n.y, n.z, pt);
        if (!pt.vis) continue;
        const d = Math.hypot(pt.x - x, pt.y - y);
        if (d < bd) { bd = d; hit = n; }
      }
      if (!hit) return false;
      const t = eng.time;
      if (!playing) { fire(t); waveEnd = t + 2.6; return true; }
      if (layer >= LAYERS.length) return true; // chain complete, waiting for reset
      if (hit.L === layer && hit.i === target) {
        chosen[layer] = target;
        if (layer < 4) { u.C[layer] = target; } else u.D[0] = target;
        layer++;
        u.D[1] = layer;
        H.vibrate(10);
        if (layer >= LAYERS.length) {
          const bonus = Math.round(timer * 6);
          combo++;
          score += 40 + bonus + combo * 5;
          level = 1 + Math.floor(score / 220);
          fire(t); waveEnd = t + 2.6;
          const p = AI_PREDICTIONS[(rnd() * AI_PREDICTIONS.length) | 0];
          H.toast(`${p[0]} → ${p[1]} · ${p[2]}%`, 'good', 1600);
          H.log(`forward pass ok · ${p[0]} · conf ${p[2]}% (simulated)`);
          setTimeout(() => { if (playing) resetChain(); hud(); }, 650);
          layer = LAYERS.length; // freeze until reset
          u.B[0] = -1;
        } else {
          setTarget();
        }
      } else if (playing) {
        combo = 0;
        H.vibrate(30);
        H.toast('WRONG NEURON', 'bad', 700);
      }
      hud();
      return true;
    },
    /** dev/test helper: world position of the neuron the player should tap next */
    debugTarget() { const n = nodes.find((x) => x.L === layer && x.i === target); return n ? [n.x, n.y, n.z] : null; },
    logs: () => `epoch ${(rnd() * 90 + 10) | 0} · loss ${(rnd() * 0.4 + 0.05).toFixed(3)} · acc ${(94 + rnd() * 5).toFixed(1)}%`,
    setBest(v) { best = v; },
  };
}
