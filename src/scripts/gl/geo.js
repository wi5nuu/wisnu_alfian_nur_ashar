// CPU-side geometry helpers (edge lists for wireframes).

export function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const norm = (v) => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1;
  return [v[0] / l, v[1] / l, v[2] / l];
};

function edgesFromFaces(F) {
  const set = new Set();
  const edges = [];
  for (const f of F) {
    for (let i = 0; i < f.length; i++) {
      const a = f[i], b = f[(i + 1) % f.length];
      const k = a < b ? a + '_' + b : b + '_' + a;
      if (!set.has(k)) { set.add(k); edges.push([a, b]); }
    }
  }
  return edges;
}

/** Unit icosphere → { verts:[[x,y,z]], edges:[[a,b]] } */
export function icosphere(sub = 0) {
  const t = (1 + Math.sqrt(5)) / 2;
  const V = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0], [0, -1, t], [0, 1, t],
    [0, -1, -t], [0, 1, -t], [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ].map(norm);
  let F = [
    [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11], [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
    [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9], [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
  ];
  for (let s = 0; s < sub; s++) {
    const cache = new Map();
    const mid = (a, b) => {
      const k = a < b ? a + '_' + b : b + '_' + a;
      if (cache.has(k)) return cache.get(k);
      V.push(norm([(V[a][0] + V[b][0]) / 2, (V[a][1] + V[b][1]) / 2, (V[a][2] + V[b][2]) / 2]));
      cache.set(k, V.length - 1);
      return V.length - 1;
    };
    const NF = [];
    for (const [a, b, c] of F) {
      const ab = mid(a, b), bc = mid(b, c), ca = mid(c, a);
      NF.push([a, ab, ca], [b, bc, ab], [c, ca, bc], [ab, bc, ca]);
    }
    F = NF;
  }
  return { verts: V, edges: edgesFromFaces(F) };
}

export function octahedron() {
  const verts = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  const F = [[0, 2, 4], [2, 1, 4], [1, 3, 4], [3, 0, 4], [2, 0, 5], [1, 2, 5], [3, 1, 5], [0, 3, 5]];
  return { verts, edges: edgesFromFaces(F) };
}

export function box(h = 0.5) {
  const verts = [];
  for (let i = 0; i < 8; i++) verts.push([i & 1 ? h : -h, i & 2 ? h : -h, i & 4 ? h : -h]);
  const edges = [];
  for (let i = 0; i < 8; i++) {
    for (let b = 0; b < 3; b++) {
      const j = i ^ (1 << b);
      if (i < j) edges.push([i, j]);
    }
  }
  return { verts, edges };
}

/** Ring points on the XY plane, radius r. */
export function ring(seg = 48, r = 1) {
  const pts = [];
  for (let i = 0; i < seg; i++) {
    const a = (i / seg) * Math.PI * 2;
    pts.push([Math.cos(a) * r, Math.sin(a) * r, 0, i / seg]);
  }
  return pts;
}

/** Torus wireframe: returns edge list over generated verts. */
export function torus(R = 1, r = 0.35, nu = 14, nv = 7) {
  const verts = [];
  for (let i = 0; i < nu; i++) {
    for (let j = 0; j < nv; j++) {
      const u = (i / nu) * Math.PI * 2, v = (j / nv) * Math.PI * 2;
      verts.push([(R + r * Math.cos(v)) * Math.cos(u), r * Math.sin(v), (R + r * Math.cos(v)) * Math.sin(u)]);
    }
  }
  const edges = [];
  for (let i = 0; i < nu; i++) {
    for (let j = 0; j < nv; j++) {
      const a = i * nv + j;
      edges.push([a, i * nv + ((j + 1) % nv)]);
      edges.push([a, ((i + 1) % nu) * nv + j]);
    }
  }
  return { verts, edges };
}

/** Push a wireframe into a vertex builder. fn(v, edgeIndex) returns the extra [s0..s3, a0..a2]. */
export function pushEdges(vb, geo, scale, cx, cy, cz, seed = [0, 0, 0, 0], aux = [0, 0, 0]) {
  for (const [a, b] of geo.edges) {
    const A = geo.verts[a], B = geo.verts[b];
    vb.v(cx + A[0] * scale, cy + A[1] * scale, cz + A[2] * scale, seed[0], seed[1], seed[2], seed[3], aux[0], aux[1], aux[2]);
    vb.v(cx + B[0] * scale, cy + B[1] * scale, cz + B[2] * scale, seed[0], seed[1], seed[2], seed[3], aux[0], aux[1], aux[2]);
  }
}

export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
export const TAU = Math.PI * 2;
