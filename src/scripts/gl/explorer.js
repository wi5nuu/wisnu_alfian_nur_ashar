import { VB } from './engine.js';
import { clamp, TAU } from './geo.js';

// Explorer: turns each 3D realm into a navigable knowledge map.
// Skills, projects, bug-bounty reports, experience… orbit the scene as markers; pick one to fly to it
// and read the details in a panel. Markers are real <button>s (cheap: ≤ ~30 transforms per frame).

const RING_MOTION = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  col=vec4(LIME,s.x*(1.-uWarp*.6));
}`;
const SPOKE_MOTION = `
void motion(inout vec3 p, vec4 s, vec3 a, out vec4 col, out float size){
  size=1.;
  float f=.5+.5*sin(uTime*4.-s.y*6.);
  col=vec4(mix(LIME,vec3(1.),f*.6),.25+.55*s.y);
}`;

/** Where each group orbits (world units) + a camera distance that frames all rings. */
const LAYOUT = {
  cyber: { dist: 18.5, groups: { method: [5.6, -0.6], skills: [7.4, 2.8], projects: [9, -2.8], reports: [10.6, 0.9] } },
  ai: { dist: 16.5, groups: { method: [8.6, -4.8], skills: [9.6, 4.9], projects: [11, 0.5], achievements: [8.8, -1.9] } },
  software: { dist: 16.5, groups: { method: [7.2, 5.8], skills: [8.6, 2.3], projects: [10, -1.5], experience: [7.6, -5.3] } },
  devops: { dist: 19.5, groups: { method: [9.8, 3.8], skills: [10.8, -3.8], projects: [12.4, 0.3], certs: [9.4, -6.4] } },
};
export const exploreDistance = (realm) => (LAYOUT[realm] || LAYOUT.cyber).dist;

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/** portrait phones get tighter rings so every marker stays on screen */
const radiusScale = (w, h) => (w / Math.max(1, h) < 1 ? clamp((w / Math.max(1, h)) * 1.55, 0.55, 1) : 1);

export function createExplorer({ stage, eng, lang, focusTo, resetFocus }) {
  const poiBox = stage.querySelector('[data-uv-pois]');
  const legend = stage.querySelector('[data-uv-legend]');
  const panel = stage.querySelector('[data-uv-panel]');
  if (!poiBox || !legend || !panel) return null;

  let data = null, loading = null;
  let realm = null, pois = [], groups = [], filter = 'all';
  let sel = null, hov = null, enabled = true, rs = 1, lastScene = null;
  const structures = {}; // realm -> { ring, spoke }
  const tmp = {};

  // ---------- data ----------
  function load() {
    if (data) return Promise.resolve(data);
    if (!loading) {
      loading = fetch(lang === 'id' ? '/id/universe.json' : '/universe.json')
        .then((r) => r.json())
        .then((j) => (data = j))
        .catch(() => null);
    }
    return loading;
  }

  // ---------- 3D structure (rings + selection spoke) ----------
  function structure(id, scene) {
    const key = id + (rs < 1 ? ':p' : ':l');
    const activate = () => { for (const [k, v] of Object.entries(structures)) if (k.startsWith(id + ':')) { if (v.ring) v.ring.visible = k === key; if (v.spoke) v.spoke.visible = k === key; } return structures[key]; };
    if (structures[key]) return activate();
    const cfg = LAYOUT[id] || LAYOUT.cyber;
    const rv = new VB();
    Object.values(cfg.groups).forEach(([r0, y], k) => {
      const r = r0 * rs;
      const n = 96;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * TAU, b = ((i + 1) / n) * TAU;
        const al = 0.1 + 0.05 * (k % 2);
        rv.v(Math.cos(a) * r, y, Math.sin(a) * r, al).v(Math.cos(b) * r, y, Math.sin(b) * r, al);
      }
    });
    const ring = eng.layer({ mode: 'lines', data: rv.done(), motion: RING_MOTION });
    const spoke = eng.layer({ mode: 'lines', data: new Float32Array(20), motion: SPOKE_MOTION, dynamic: true, count: 0 });
    if (ring) scene.layers.push(ring);
    if (spoke) scene.layers.push(spoke);
    structures[key] = { ring, spoke };
    return activate();
  }

  // ---------- markers ----------
  function clearMarkers() {
    poiBox.textContent = '';
    legend.textContent = '';
    pois = [];
    sel = hov = null;
    closePanel(true);
  }

  function build(id, scene) {
    clearMarkers();
    realm = id;
    lastScene = scene;
    rs = radiusScale(eng.width, eng.height);
    built = rs < 1 ? 'p' : 'l';
    structure(id, scene);
    if (!data || !data.realms[id]) return;
    groups = data.realms[id].groups;
    const cfg = LAYOUT[id] || LAYOUT.cyber;

    groups.forEach((g, gi) => {
      const [r0, y] = cfg.groups[g.id] || [8 + gi, 0];
      const r = r0 * rs;
      const dir = gi % 2 ? -1 : 1;
      g.items.forEach((item, i) => {
        const el = document.createElement('button');
        el.type = 'button';
        el.className = 'uv-poi';
        el.dataset.g = g.id;
        el.setAttribute('aria-label', `${item.t} — ${g.label}`);
        el.tabIndex = -1;
        el.innerHTML = `<i></i><span>${esc(item.t)}</span>`;
        poiBox.appendChild(el);
        const poi = { id: item.id, g, item, el, r, y, dir, a0: (i / g.items.length) * TAU + gi * 0.7, x: 0, y3: y, z: 0, w: 0, vis: false, rank: 99 };
        el.addEventListener('click', () => select(poi));
        el.addEventListener('pointerenter', () => { hov = poi; });
        el.addEventListener('pointerleave', () => { if (hov === poi) hov = null; });
        el.addEventListener('focus', () => { hov = poi; });
        el.addEventListener('blur', () => { if (hov === poi) hov = null; });
        pois.push(poi);
      });
    });

    const mk = (id2, label, n) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'uv-leg';
      b.dataset.f = id2;
      b.setAttribute('aria-pressed', String(id2 === filter));
      b.innerHTML = `${esc(label)}<b>${n}</b>`;
      b.addEventListener('click', () => setFilter(id2 === filter && id2 !== 'all' ? 'all' : id2));
      legend.appendChild(b);
    };
    filter = 'all';
    mk('all', data.ui.all, pois.length);
    groups.forEach((g) => mk(g.id, g.label, g.items.length));
    update(eng.time || 0, 0);
  }

  function setFilter(f) {
    filter = f;
    legend.querySelectorAll('.uv-leg').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.f === f)));
    if (sel && f !== 'all' && sel.g.id !== f) closePanel();
  }

  // ---------- per-frame ----------
  let rot = 0, token = 0, built = 'l';
  function update(t, dt) {
    if (!pois.length) return;
    const nowB = radiusScale(eng.width, eng.height) < 1 ? 'p' : 'l';
    if (nowB !== built && lastScene) { const keep = sel && sel.id; build(realm, lastScene); if (keep) { const again = pois.find((q) => q.id === keep); if (again) select(again); } return; }
    const frozen = !!sel || !!hov || !enabled;
    if (!frozen) rot += dt;
    let wmin = 1e9, wmax = -1e9;
    for (const p of pois) {
      const a = p.a0 + p.dir * rot * 0.045;
      p.x = Math.cos(a) * p.r;
      p.z = Math.sin(a) * p.r;
      p.y3 = p.y + Math.sin(a * 3 + p.a0) * 0.35;
      eng.project(p.x, p.y3, p.z, tmp);
      p.sx = tmp.x; p.sy = tmp.y; p.w = tmp.w; p.vis = tmp.vis;
      if (p.vis) { if (p.w < wmin) wmin = p.w; if (p.w > wmax) wmax = p.w; }
    }
    // rank by depth → label only the nearest few (keeps the scene readable)
    const order = pois.filter((p) => p.vis).sort((a, b) => a.w - b.w);
    order.forEach((p, i) => { p.rank = i; });
    const span = Math.max(1, wmax - wmin);
    const W = eng.width, H = eng.height;
    for (const p of pois) {
      const el = p.el;
      if (!p.vis || !enabled || p.sx < -40 || p.sx > W + 40 || p.sy < -40 || p.sy > H + 40) { if (!el.hidden) el.hidden = true; continue; }
      if (el.hidden) el.hidden = false;
      const d = (p.w - wmin) / span;
      const match = filter === 'all' || filter === p.g.id;
      const op = match ? 1 - 0.62 * d : 0.1;
      const sc = 1.12 - 0.34 * d;
      el.style.transform = `translate3d(${p.sx.toFixed(1)}px,${p.sy.toFixed(1)}px,0) translate(-50%,-50%) scale(${sc.toFixed(2)})`;
      el.style.opacity = op.toFixed(2);
      el.style.zIndex = String(2000 - Math.round(p.w * 10));
      el.style.pointerEvents = match ? '' : 'none';
      const showLabel = p === sel || p === hov || (match && (filter !== 'all' || p.rank < 5));
      el.classList.toggle('is-label', showLabel);
      el.classList.toggle('is-sel', p === sel);
    }
    // selection spoke (core → marker)
    const st = structures[realm + (rs < 1 ? ':p' : ':l')];
    if (st && st.spoke) {
      if (sel) {
        st.spoke.set(0, 0, 0, 0, 0, 0.0);
        st.spoke.set(1, sel.x, sel.y3, sel.z, 0, 1);
        st.spoke.upload(2);
      } else st.spoke.count = 0;
    }
  }

  // ---------- selection & panel ----------
  function select(p) {
    sel = p;
    legend.classList.add('has-sel');
    stage.classList.add('has-panel');
    renderPanel(p);
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add('is-open'));
    focusTo({ x: p.x, y: p.y3, z: p.z, dist: (LAYOUT[realm] || LAYOUT.cyber).dist * 0.55 });
    update(eng.time || 0, 0);
  }

  function closePanel(silent) {
    if (!sel && panel.hidden) return;
    sel = null;
    panel.classList.remove('is-open');
    panel.hidden = true;
    legend.classList.remove('has-sel');
    stage.classList.remove('has-panel');
    if (!silent) resetFocus();
  }

  function step(delta) {
    if (!sel) return;
    const list = pois.filter((p) => p.g === sel.g);
    const i = list.indexOf(sel);
    select(list[(i + delta + list.length) % list.length]);
  }

  function renderPanel(p) {
    const it = p.item, ui = data.ui;
    const facts = (it.f || []).filter((f) => f[1]).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('');
    const chips = (it.c || []).filter(Boolean).map((c) => `<li>${esc(c)}</li>`).join('');
    const links = (it.l || []).map(([label, url, ext]) => `<a href="${esc(url)}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(label)}<span aria-hidden="true"> ${ext ? '↗' : '→'}</span></a>`).join('');
    const idx = pois.filter((x) => x.g === p.g);
    panel.innerHTML = `
      <div class="uv-panel-top">
        <span class="uv-pill">${esc(p.g.label)}</span>
        <span class="uv-panel-count">${idx.indexOf(p) + 1}/${idx.length}</span>
        <button type="button" class="uv-panel-x" data-act="close" aria-label="${esc(ui.close)}">✕</button>
      </div>
      <div class="uv-panel-body">
        <h3>${esc(it.t)}</h3>
        ${it.s ? `<p class="uv-panel-sub">${esc(it.s)}</p>` : ''}
        ${it.img ? `<img src="${esc(it.img)}" alt="" width="640" height="360" loading="lazy" decoding="async" />` : ''}
        ${it.d ? `<p class="uv-panel-desc">${esc(it.d)}</p>` : ''}
        ${facts ? `<dl class="uv-panel-facts">${facts}</dl>` : ''}
        ${chips ? `<ul class="uv-panel-chips">${chips}</ul>` : ''}
        ${links ? `<div class="uv-panel-links">${links}</div>` : ''}
      </div>
      <div class="uv-panel-nav">
        <button type="button" data-act="prev" aria-label="Previous">‹</button>
        <button type="button" data-act="next" aria-label="Next">›</button>
      </div>`;
    panel.querySelector('.uv-panel-body').scrollTop = 0;
  }

  panel.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    if (b.dataset.act === 'close') closePanel();
    else step(b.dataset.act === 'next' ? 1 : -1);
  });

  return {
    load,
    get hasSelection() { return !!sel; },
    async setRealm(id, scene) {
      const mine = ++token;
      await load();
      if (mine === token) build(id, scene);
    },
    update,
    close: () => closePanel(),
    setEnabled(v) {
      enabled = v;
      poiBox.hidden = !v;
      legend.hidden = !v;
      if (!v) closePanel();
    },
    dispose() { clearMarkers(); },
  };
}
