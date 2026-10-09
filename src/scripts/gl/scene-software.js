import { VB } from './engine.js';
import { mulberry32, box, pushEdges, ring, TAU } from './geo.js';

// Realm 03 — SOFTWARE: a rotating architecture tower. Game: squash the bugs before they take services down.

export const TOWER = [
  { name: 'Client', y: 4.2, items: ['React', 'Next.js', 'Astro'] },
  { name: 'API', y: 1.4, items: ['Laravel', 'Go Fiber', 'FastAPI', 'ASP.NET'] },
  { name: 'Services', y: -1.4, items: ['JWT · RBAC', 'RabbitMQ', 'Redis', 'Gemini AI'] },
  { name: 'Data', y: -4.2, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'] },
];

const RADIUS = 3.5;
const BOB = `
  p.y+=sin(uTime*.9+s.y*TAU)*.14;`;

const CUBE = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  vec3 l=p-a;
  l.xz=rot(l.xz,uTime*(.3+s.z*.3)+s.y*3.);
  p=a+l;${BOB}
  float id=s.x;
  float sel=1.-step(.5,abs(id-uA.x));
  float bug=mod(floor(uB.x/exp2(id)),2.);
  float down=mod(floor(uB.y/exp2(id)),2.);
  float strobe=bug*(.5+.5*sin(uTime*16.));
  col=vec4(mix(LIME,vec3(1.),clamp(sel*.7+strobe,0.,1.)),(.7+sel*.3+strobe*.5)*(1.-down*.82)*(1.-uWarp*.4));
}`;

const CORNER = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  vec3 l=p-a;
  l.xz=rot(l.xz,uTime*(.3+s.z*.3)+s.y*3.);
  p=a+l;${BOB}
  float id=s.x;
  float bug=mod(floor(uB.x/exp2(id)),2.);
  float down=mod(floor(uB.y/exp2(id)),2.);
  float sel=1.-step(.5,abs(id-uA.x));
  float strobe=bug*(.5+.5*sin(uTime*16.));
  col=vec4(mix(LIME2,vec3(1.),clamp(sel+strobe,0.,1.)),(.75+strobe*.25)*(1.-down*.85));
  size=s.w>.5?.5+.22*sin(uTime*3.+s.y*TAU)+bug*.4:.13+bug*.1;
}`;

const LINK = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;${BOB}
  col=vec4(LIME,.11*(1.-uWarp*.6));
}`;

const PLATFORM = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  float sc=pow(.5+.5*cos(s.y*TAU*2.-uTime*1.2+s.x),6.);
  col=vec4(LIME,.12+.28*sc);
}`;

const PACKET = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  float tt=fract(uTime*s.y*.32+s.x);
  p=mix(p,a,tt);
  float v=sin(tt*3.14159);
  col=vec4(mix(LIME,vec3(1.),s.z*s.z),v*(.4+.6*s.z));
  size=.1+.1*s.z;
}`;

export function softwareScene(eng, q, H) {
  const rnd = mulberry32(31);
  const u = { A: [-1, 0, 0, 0], B: [0, 0, 0, 0], C: [0, 0, 0, 0], D: [0, 0, 0, 0] };

  // cubes
  const cubes = [];
  TOWER.forEach((tier, L) => {
    const n = tier.items.length;
    tier.items.forEach((name, i) => {
      const a = (i / n) * TAU + L * 0.62;
      cubes.push({ id: cubes.length, L, name, x: Math.cos(a) * RADIUS, y: tier.y, z: Math.sin(a) * RADIUS, ph: rnd(), sp: rnd() });
    });
  });
  const byTier = TOWER.map((_, L) => cubes.filter((c) => c.L === L));

  const cb = new VB(), cn = new VB(), lk = new VB(), pf = new VB(), pk = new VB();
  const bx = box(0.55);
  for (const c of cubes) {
    pushEdges(cb, bx, 1, c.x, c.y, c.z, [c.id, c.ph, c.sp, 0], [c.x, c.y, c.z]);
    for (const v of bx.verts) cn.v(c.x + v[0], c.y + v[1], c.z + v[2], c.id, c.ph, c.sp, 0, c.x, c.y, c.z);
    cn.v(c.x, c.y, c.z, c.id, c.ph, c.sp, 1, c.x, c.y, c.z); // glowing heart
  }
  for (let L = 0; L < TOWER.length - 1; L++) {
    for (const a of byTier[L]) {
      for (const b of byTier[L + 1]) {
        lk.v(a.x, a.y, a.z, a.id, a.ph, 0, 0, a.x, a.y, a.z);
        lk.v(b.x, b.y, b.z, b.id, b.ph, 0, 0, b.x, b.y, b.z);
      }
    }
  }
  TOWER.forEach((tier, L) => {
    const pts = ring(72, RADIUS + 1.35);
    for (let i = 0; i < pts.length; i++) {
      const a = pts[i], b = pts[(i + 1) % pts.length];
      // ring lies in XY → rotate onto XZ plane
      pf.v(a[0], tier.y - 0.9, a[1], L, a[3]);
      pf.v(b[0], tier.y - 0.9, b[1], L, i + 1 === pts.length ? 1 : b[3]);
    }
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * TAU + 0.3;
      pf.v(0, tier.y - 0.9, 0, L, 0).v(Math.cos(a) * (RADIUS + 1.35), tier.y - 0.9, Math.sin(a) * (RADIUS + 1.35), L, 0.5);
    }
  });
  const pn = Math.round(170 * q);
  for (let i = 0; i < pn; i++) {
    const L = (rnd() * (TOWER.length - 1)) | 0;
    let a = byTier[L][(rnd() * byTier[L].length) | 0], b = byTier[L + 1][(rnd() * byTier[L + 1].length) | 0];
    if (rnd() < 0.4) [a, b] = [b, a]; // responses travel upward
    pk.v(a.x, a.y, a.z, rnd(), 0.5 + rnd() * 1.3, rnd(), 0, b.x, b.y, b.z);
  }

  const layers = [
    eng.layer({ mode: 'lines', data: pf.done(), motion: PLATFORM }),
    eng.layer({ mode: 'lines', data: lk.done(), motion: LINK }),
    eng.layer({ mode: 'lines', data: cb.done(), motion: CUBE }),
    eng.layer({ mode: 'points', data: cn.done(), motion: CORNER }),
    eng.layer({ mode: 'points', data: pk.done(), motion: PACKET }),
  ];

  // ---------- game: bug hunt ----------
  const pt = {};
  let playing = false, score = 0, combo = 0, level = 1, uptime = 100, spawn = 0, best = 0, selected = -1, selT = 0;
  const bugs = new Map(); // id -> expires
  const down = new Map(); // id -> recovers
  let bugMask = 0, downMask = 0;

  function masks() {
    bugMask = 0; downMask = 0;
    for (const id of bugs.keys()) bugMask |= 1 << id;
    for (const id of down.keys()) downMask |= 1 << id;
    u.B[0] = bugMask; u.B[1] = downMask;
  }
  function hud() {
    H.set({ score, best, combo, level, meter: uptime / 100, meterLabel: 'UPTIME', status: playing ? `LVL ${level}` : '' });
  }
  function over() {
    playing = false;
    best = Math.max(best, score);
    bugs.clear(); down.clear(); masks();
    H.end({ score, best, title: 'OUTAGE', sub: 'Uptime hit 0%' });
    hud();
  }

  function update(t, dt) {
    if (playing) {
      spawn -= dt;
      if (spawn <= 0) {
        const free = cubes.filter((c) => !bugs.has(c.id) && !down.has(c.id));
        if (free.length) {
          const c = free[(rnd() * free.length) | 0];
          bugs.set(c.id, t + Math.max(1.5, 3.6 - level * 0.2));
        }
        spawn = Math.max(0.45, 1.5 - level * 0.1) * (0.7 + rnd() * 0.6);
      }
      for (const [id, exp] of bugs) {
        if (t > exp) {
          bugs.delete(id);
          down.set(id, t + 3);
          uptime = Math.max(0, uptime - 9);
          combo = 0;
          H.vibrate(40);
          H.toast(`${cubes[id].name} DOWN`, 'bad', 900);
          if (uptime <= 0) { over(); break; }
        }
      }
      uptime = Math.min(100, uptime + dt * 0.5);
      hud();
    } else if (Math.random() < dt * 0.35) {
      const c = cubes[(rnd() * cubes.length) | 0];
      H.log(`${['GET', 'POST', 'PUT'][(rnd() * 3) | 0]} /api/${['orders', 'users', 'products', 'invoices'][(rnd() * 4) | 0]} → 200 · ${(rnd() * 40 + 6) | 0}ms · ${c.name}`);
    }
    for (const [id, rec] of down) if (t > rec) down.delete(id);
    masks();
    if (selected >= 0 && t - selT > 3.5) { selected = -1; u.A[0] = -1; }
  }

  return {
    id: 'software',
    layers,
    u,
    camera: { yaw: 0.6, pitch: 0.22, dist: 13.2, fov: 58, tx: 0, ty: 0, tz: 0 },
    update,
    mission: 'Tap the flashing services to patch bugs before they crash.',
    start() {
      score = 0; combo = 0; level = 1; uptime = 100; spawn = 0.3; playing = true;
      bugs.clear(); down.clear(); masks(); hud();
    },
    stop() { playing = false; bugs.clear(); down.clear(); masks(); hud(); },
    get playing() { return playing; },
    /** world position of the selected cube, for the tooltip */
    get selection() { return selected >= 0 ? { name: cubes[selected].name, tier: TOWER[cubes[selected].L].name, pos: [cubes[selected].x, cubes[selected].y + 1, cubes[selected].z] } : null; },
    tap(x, y) {
      let hit = null, bd = 60;
      for (const c of cubes) {
        eng.project(c.x, c.y, c.z, pt);
        if (!pt.vis) continue;
        const d = Math.hypot(pt.x - x, pt.y - y);
        if (d < bd) { bd = d; hit = c; }
      }
      if (!hit) return false;
      if (playing) {
        if (bugs.has(hit.id)) {
          bugs.delete(hit.id);
          combo++;
          score += 10 + Math.min(combo, 10) * 2;
          level = 1 + Math.floor(score / 130);
          H.vibrate(14);
          H.toast(combo > 2 ? `PATCHED ×${combo}` : 'PATCHED', 'good', 600);
        } else {
          combo = 0;
        }
        hud();
      } else {
        selected = hit.id; selT = eng.time; u.A[0] = hit.id;
        H.toast(`${hit.name} · ${TOWER[hit.L].name}`, 'info', 1300);
      }
      return true;
    },
    debugTarget() { const id = [...bugs.keys()][0]; const c = cubes[id]; return c ? [c.x, c.y, c.z] : null; },
    logs: () => `deploy ok · ${cubes[(rnd() * cubes.length) | 0].name} · p95 ${(rnd() * 30 + 40) | 0}ms`,
    setBest(v) { best = v; },
  };
}
