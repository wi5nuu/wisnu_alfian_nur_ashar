import { createEngine } from './engine.js';
import { cyberScene } from './scene-cyber.js';
import { aiScene } from './scene-ai.js';
import { softwareScene } from './scene-software.js';
import { devopsScene } from './scene-devops.js';
import { canRunGL, prefersReducedMotion, isCoarse, quality, onIdle } from './env.js';
import { clamp } from './geo.js';
import { createExplorer, exploreDistance } from './explorer.js';

const MAKERS = { cyber: cyberScene, ai: aiScene, software: softwareScene, devops: devopsScene };
const IDS = ['cyber', 'ai', 'software', 'devops'];

/**
 * Skill Universe controller: one WebGL canvas, four realms, a mission (mini-game) per realm.
 * Heavy work (engine, scenes) is created lazily once the section approaches the viewport.
 */
export function mountUniverse(root) {
  const stage = root.querySelector('[data-uv-stage]');
  const canvas = stage && stage.querySelector('canvas');
  if (!stage || !canvas || root.dataset.uvMounted) return () => {};
  root.dataset.uvMounted = '1';

  const $ = (s) => stage.querySelector(s);
  const ui = {
    title: $('[data-uv-title]'), mission: $('[data-uv-mission]'), game: $('[data-uv-game]'),
    score: $('[data-uv-score]'), best: $('[data-uv-best]'), combo: $('[data-uv-combo]'),
    fill: $('[data-uv-fill]'), meter: $('[data-uv-meter]'), status: $('[data-uv-status]'),
    toast: $('[data-uv-toast]'), log: $('[data-uv-log]'), labels: $('[data-uv-labels]'), tip: $('[data-uv-tip]'),
    overlay: $('[data-uv-overlay]'), oTitle: $('[data-uv-o-title]'), oSub: $('[data-uv-o-sub]'), oScore: $('[data-uv-o-score]'),
    play: $('[data-uv-play]'), imm: $('[data-uv-imm]'), tilt: $('[data-uv-tilt]'), retry: $('[data-uv-retry]'), exit: $('[data-uv-exit]'),
    hint: $('[data-uv-hint]'),
    zin: $('[data-uv-zin]'), zout: $('[data-uv-zout]'), zreset: $('[data-uv-zreset]'),
  };
  if (import.meta.env.DEV) window.__uv = { get cur() { return cur; }, get eng() { return eng; } };
  const tabs = [...root.querySelectorAll('[data-uv-tab]')];
  const cards = [...root.querySelectorAll('[data-uv-enter]')];
  const copy = JSON.parse(root.dataset.copy || '{}');
  const reduced = prefersReducedMotion();
  const coarse = isCoarse();

  let explorer = null;
  // camera "fly-to" goals (set by the explorer when a marker is selected; cleared by the user dragging)
  const goal = { on: false, x: 0, y: 0, z: 0, yaw: null, pitch: null, dist: null };
  let eng = null, cur = null, curId = 'cyber', pending = null, visible = false, immersive = false, booted = false, disposed = false;
  let lastInput = 0, idleLog = 0, rafIdle = 0;
  const scenes = {};
  const view = { yaw: 0.5, pitch: 0.25, dist: 15, vyaw: 0, vpitch: 0 };
  const gyro = { on: false, ty: 0, tp: 0, yaw: 0, pitch: 0 };
  const cleanups = [];
  const on = (el, ev, fn, opt) => { el.addEventListener(ev, fn, opt); cleanups.push(() => el.removeEventListener(ev, fn, opt)); };

  // ---------- HUD ----------
  const last = {};
  const setText = (el, key, v) => { if (el && last[key] !== v) { last[key] = v; el.textContent = v; } };
  let toastT = 0;
  const H = {
    set(o) {
      setText(ui.score, 'score', String(o.score ?? 0));
      setText(ui.best, 'best', String(o.best ?? 0));
      setText(ui.combo, 'combo', o.combo > 1 ? `×${o.combo}` : '–');
      setText(ui.status, 'status', o.status || '');
      setText(ui.meter, 'meter', o.meterLabel || '');
      if (ui.fill) ui.fill.style.transform = `scaleX(${clamp(o.meter ?? 1, 0, 1).toFixed(3)})`;
    },
    toast(msg, kind = 'info', ms = 800) {
      const el = ui.toast;
      if (!el) return;
      el.textContent = msg;
      el.className = `uv-toast uv-toast--${kind}`;
      void el.offsetWidth;
      el.classList.add('is-on');
      clearTimeout(toastT);
      toastT = setTimeout(() => el.classList.remove('is-on'), ms);
    },
    log(line) {
      const box = ui.log;
      if (!box) return;
      const d = document.createElement('div');
      d.textContent = line;
      box.appendChild(d);
      while (box.children.length > 3) box.removeChild(box.firstChild);
    },
    end(res) {
      if (!ui.overlay) return;
      saveBest(curId, res.best);
      ui.oTitle.textContent = res.title;
      ui.oSub.textContent = res.sub;
      ui.oScore.textContent = `${copy.score}: ${res.score} · ${copy.best}: ${res.best}`;
      ui.overlay.hidden = false;
      stage.classList.remove('is-playing');
      syncPlayBtn();
    },
    vibrate(ms) { if (coarse && navigator.vibrate) { try { navigator.vibrate(ms); } catch {} } },
  };

  const bestKey = (id) => 'uv-best-' + id;
  function loadBest(id) { try { return parseInt(localStorage.getItem(bestKey(id)) || '0', 10) || 0; } catch { return 0; } }
  function saveBest(id, v) { try { localStorage.setItem(bestKey(id), String(v)); } catch {} }

  function syncPlayBtn() {
    const playing = !!(cur && cur.playing);
    if (ui.play) {
      ui.play.textContent = playing ? copy.stop : copy.play;
      ui.play.setAttribute('aria-pressed', String(playing));
    }
    stage.classList.toggle('is-playing', playing);
    if (ui.hint) ui.hint.hidden = playing;
    if (explorer) explorer.setEnabled(!playing);
  }

  // ---------- scenes ----------
  function realmCopy(id) { return (copy.realms || []).find((r) => r.id === id) || {}; }

  function applyRealmUi(id) {
    const rc = realmCopy(id);
    stage.dataset.realm = id;
    root.dataset.realm = id;
    if (ui.title) ui.title.textContent = rc.title || id;
    if (ui.mission) ui.mission.textContent = rc.mission || '';
    if (ui.game) ui.game.textContent = rc.game || '';
    tabs.forEach((t) => {
      const act = t.dataset.uvTab === id;
      t.setAttribute('aria-selected', String(act));
      t.tabIndex = act ? 0 : -1;
    });
    cards.forEach((c) => c.closest('[data-uv-card]')?.classList.toggle('is-active', c.dataset.uvEnter === id));
    if (ui.log) ui.log.textContent = '';
    if (ui.overlay) ui.overlay.hidden = true;
  }

  function buildLabels(scene) {
    if (!ui.labels) return;
    ui.labels.textContent = '';
    scene.labelEls = [];
    if (scene.stages) {
      scene.stages.forEach((s, i) => {
        const el = document.createElement('span');
        el.className = 'uv-chip';
        el.innerHTML = `<b>${String(i + 1).padStart(2, '0')}</b> ${s.name}`;
        ui.labels.appendChild(el);
        scene.labelEls.push(el);
      });
    }
  }

  function getScene(id) {
    if (!scenes[id]) {
      scenes[id] = MAKERS[id](eng, quality(), H);
      scenes[id].setBest(loadBest(id));
    }
    return scenes[id];
  }

  function mount(id) {
    if (cur && cur.playing) cur.stop();
    cur = getScene(id);
    curId = id;
    eng.setScene(cur);
    const c = cur.camera;
    view.yaw = c.yaw; view.pitch = c.pitch; view.dist = c.dist; view.vyaw = view.vpitch = 0;
    buildLabels(cur);
    applyRealmUi(id);
    if (explorer) {
      view.dist = exploreDistance(id);
      goal.on = false; goal.yaw = goal.pitch = goal.dist = null;
      explorer.setRealm(id, cur).then(() => { if (reduced && eng) eng.once(); });
    }
    H.set({ score: 0, best: loadBest(id), combo: 0, meter: 1, meterLabel: '', status: '' });
    syncPlayBtn();
  }

  function select(id) {
    if (!IDS.includes(id)) return;
    if (!eng) { curId = id; applyRealmUi(id); return; }
    if (id === curId && cur) return;
    if (reduced) { mount(id); eng.once(); return; }
    pending = id; // warp out → swap at peak → warp in (driven by onFrame)
  }

  // ---------- frame ----------
  const pt = {};
  function onFrame(t, dt) {
    // warp state machine
    if (pending) {
      eng.warp += (1.05 - eng.warp) * Math.min(1, dt * 9);
      if (eng.warp > 0.9) { const id = pending; pending = null; mount(id); }
    } else if (eng.warp > 0.001) {
      eng.warp += (0 - eng.warp) * Math.min(1, dt * 6);
    } else eng.warp = 0;

    if (!cur) return;
    // inertia
    if (!drag.active) {
      view.yaw += view.vyaw * dt;
      view.pitch += view.vpitch * dt;
      const k = Math.pow(0.05, dt);
      view.vyaw *= k; view.vpitch *= k;
    }
    const idle = t - lastInput > 2.2;
    if (!reduced) {
      if (cur.playing) view.yaw += dt * 0.025;
      else if (idle && !drag.active && !(explorer && explorer.hasSelection) && goal.yaw === null) view.yaw += dt * 0.16;
    }
    // fly-to easing (marker selected / reset)
    const ek = reduced ? 1 : Math.min(1, dt * 4.5);
    const base = cur.camera;
    const tx = goal.on ? goal.x : base.tx, ty = goal.on ? goal.y : base.ty, tz = goal.on ? goal.z : base.tz;
    eng.cam.tx += (tx - eng.cam.tx) * ek;
    eng.cam.ty += (ty - eng.cam.ty) * ek;
    eng.cam.tz += (tz - eng.cam.tz) * ek;
    if (goal.yaw !== null) {
      let d = goal.yaw - view.yaw;
      d = Math.atan2(Math.sin(d), Math.cos(d));
      view.yaw += d * ek;
      if (Math.abs(d) < 0.01) goal.yaw = null;
    }
    if (goal.pitch !== null) {
      const d = goal.pitch - view.pitch;
      view.pitch += d * ek;
      if (Math.abs(d) < 0.01) goal.pitch = null;
    }
    if (goal.dist !== null) {
      const d = goal.dist - view.dist;
      view.dist += d * ek;
      if (Math.abs(d) < 0.05) goal.dist = null;
    }
    view.pitch = clamp(view.pitch, -1.38, 1.38);
    gyro.yaw += (gyro.ty - gyro.yaw) * Math.min(1, dt * 6);
    gyro.pitch += (gyro.tp - gyro.pitch) * Math.min(1, dt * 6);
    eng.cam.yaw = view.yaw + gyro.yaw;
    eng.cam.pitch = clamp(view.pitch + gyro.pitch, -1.45, 1.45);
    eng.cam.dist = view.dist;

    if (explorer) explorer.update(t, dt);

    // floating labels
    if (cur.stages && cur.labelEls) {
      for (let i = 0; i < cur.stages.length; i++) {
        const p = cur.stages[i].pos;
        eng.project(p[0], p[1], p[2], pt);
        const el = cur.labelEls[i];
        el.style.transform = `translate3d(${pt.x.toFixed(1)}px,${pt.y.toFixed(1)}px,0) translate(-50%,-50%)`;
        el.style.opacity = pt.vis ? '1' : '0';
      }
    }
    if (ui.tip) {
      const sel = cur.selection;
      if (sel) {
        eng.project(sel.pos[0], sel.pos[1], sel.pos[2], pt);
        ui.tip.hidden = false;
        setText(ui.tip, 'tip', `${sel.name} · ${sel.tier}`);
        ui.tip.style.transform = `translate3d(${pt.x.toFixed(1)}px,${pt.y.toFixed(1)}px,0) translate(-50%,-100%)`;
      } else if (!ui.tip.hidden) ui.tip.hidden = true;
    }
    // ambient terminal log
    if (!cur.playing && t > idleLog) {
      idleLog = t + 1.6 + Math.random() * 1.8;
      if (cur.logs) H.log(cur.logs());
    }
  }

  // ---------- input ----------
  const drag = { active: false, id: -1, x: 0, y: 0, moved: 0, t: 0, lx: 0, ly: 0, lt: 0 };
  const pointers = new Map();
  let pinch0 = 0, pinchDist0 = 0;

  function local(e) {
    const r = canvas.getBoundingClientRect();
    return [e.clientX - r.left, e.clientY - r.top];
  }
  function poke() {
    lastInput = eng ? eng.time : 0;
    if (reduced && eng) { eng.once(); clearTimeout(rafIdle); }
  }

  on(canvas, 'pointerdown', (e) => {
    if (!eng) return;
    canvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, [e.clientX, e.clientY]);
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinch0 = Math.hypot(a[0] - b[0], a[1] - b[1]);
      pinchDist0 = view.dist;
      drag.active = false;
    } else {
      drag.active = true; drag.id = e.pointerId;
      drag.x = drag.lx = e.clientX; drag.y = drag.ly = e.clientY; drag.moved = 0; drag.t = performance.now(); drag.lt = drag.t;
    }
    view.vyaw = view.vpitch = 0;
    goal.yaw = goal.pitch = null;
    poke();
  });
  on(canvas, 'pointermove', (e) => {
    if (!eng || !pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, [e.clientX, e.clientY]);
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
      if (pinch0 > 0) { view.dist = clamp(pinchDist0 * (pinch0 / d), 7, 40); goal.dist = null; }
      poke();
      return;
    }
    if (!drag.active || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.lx, dy = e.clientY - drag.ly;
    const now = performance.now(), dtm = Math.max(1, now - drag.lt) / 1000;
    drag.moved += Math.abs(dx) + Math.abs(dy);
    drag.lx = e.clientX; drag.ly = e.clientY; drag.lt = now;
    const free = e.pointerType !== 'touch' || immersive;
    view.yaw -= dx * 0.0062;
    view.vyaw = (-dx * 0.0062) / dtm * 0.6;
    if (free) { view.pitch += dy * 0.0052; view.vpitch = (dy * 0.0052) / dtm * 0.6; }
    poke();
  });
  const end = (e) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch0 = 0;
    if (!drag.active || e.pointerId !== drag.id) return;
    drag.active = false;
    const isTap = e.type === 'pointerup' && drag.moved < 9 && performance.now() - drag.t < 450;
    if (isTap && cur) {
      const [x, y] = local(e);
      cur.tap(x, y);
      view.vyaw = view.vpitch = 0;
    }
    poke();
  };
  on(canvas, 'pointerup', end);
  on(canvas, 'pointercancel', end);
  on(canvas, 'contextmenu', (e) => { if (immersive) e.preventDefault(); });

  on(stage, 'keydown', (e) => {
    if (!eng) return;
    const k = e.key;
    if (k === 'ArrowLeft') view.yaw += 0.12;
    else if (k === 'ArrowRight') view.yaw -= 0.12;
    else if (k === 'ArrowUp') view.pitch -= 0.1;
    else if (k === 'ArrowDown') view.pitch += 0.1;
    else if (k === '+' || k === '=') zoomBy(0.85);
    else if (k === '-') zoomBy(1.18);
    else if (k === 'Escape') { if (explorer && explorer.hasSelection) explorer.close(); else if (immersive) setImmersive(false); else return; }
    else return;
    e.preventDefault();
    poke();
  });

  // ---------- zoom (wheel in immersive / Ctrl+wheel, buttons, keys) ----------
  function zoomBy(f) {
    view.dist = clamp(view.dist * f, 7, 40);
    goal.dist = null;
    poke();
  }
  on(canvas, 'wheel', (e) => {
    if (!immersive && !e.ctrlKey && !e.metaKey) return; // plain wheel keeps scrolling the page
    e.preventDefault();
    zoomBy(1 + clamp(e.deltaY, -120, 120) * 0.0016);
  }, { passive: false });
  if (ui.zin) on(ui.zin, 'click', () => zoomBy(0.8));
  if (ui.zout) on(ui.zout, 'click', () => zoomBy(1.25));
  if (ui.zreset) on(ui.zreset, 'click', () => { if (explorer) explorer.close(); resetView(); });
  function resetView() {
    goal.on = false;
    goal.dist = explorer ? exploreDistance(curId) : cur.camera.dist;
    goal.yaw = cur.camera.yaw;
    goal.pitch = cur.camera.pitch;
    poke();
  }

  // ---------- gyroscope ("tilt to look around") ----------
  function onOri(e) {
    if (e.gamma == null) return;
    gyro.ty = clamp(e.gamma, -40, 40) / 40 * 0.7;
    gyro.tp = clamp((e.beta || 55) - 55, -35, 35) / 35 * 0.4;
  }
  function setTilt(enable) {
    if (enable === gyro.on) return;
    if (enable) {
      const DOE = window.DeviceOrientationEvent;
      const go = () => { window.addEventListener('deviceorientation', onOri, { passive: true }); gyro.on = true; ui.tilt?.setAttribute('aria-pressed', 'true'); };
      if (DOE && typeof DOE.requestPermission === 'function') DOE.requestPermission().then((s) => s === 'granted' && go()).catch(() => {});
      else go();
    } else {
      window.removeEventListener('deviceorientation', onOri);
      gyro.on = false; gyro.ty = gyro.tp = 0;
      ui.tilt?.setAttribute('aria-pressed', 'false');
    }
  }
  cleanups.push(() => window.removeEventListener('deviceorientation', onOri));

  // ---------- immersive ----------
  function setImmersive(v) {
    immersive = v;
    stage.classList.toggle('is-full', v);
    document.documentElement.classList.toggle('uv-lock', v);
    canvas.style.touchAction = v ? 'none' : 'pan-y';
    ui.imm?.setAttribute('aria-pressed', String(v));
    if (eng) { eng.resize(); if (reduced) eng.once(); }
    if (!v && cur && cur.playing) { cur.stop(); syncPlayBtn(); }
    if (v) stage.focus({ preventScroll: true });
  }

  function startGame() {
    if (!cur) return;
    if (ui.overlay) ui.overlay.hidden = true;
    if (coarse || window.innerWidth < 768) setImmersive(true);
    if (explorer) explorer.close();
    goal.on = false; goal.dist = cur.camera.dist; goal.pitch = cur.camera.pitch;
    cur.start();
    if (reduced) eng.start();
    syncPlayBtn();
  }
  function stopGame() {
    if (cur) cur.stop();
    if (cur && explorer) goal.dist = exploreDistance(curId);
    syncPlayBtn();
  }

  if (ui.play) on(ui.play, 'click', () => (cur && cur.playing ? stopGame() : startGame()));
  if (ui.retry) on(ui.retry, 'click', startGame);
  if (ui.exit) on(ui.exit, 'click', () => { ui.overlay.hidden = true; if (immersive) setImmersive(false); });
  if (ui.imm) on(ui.imm, 'click', () => setImmersive(!immersive));
  if (ui.tilt) {
    if (!('DeviceOrientationEvent' in window) || !coarse) ui.tilt.hidden = true;
    else on(ui.tilt, 'click', () => setTilt(!gyro.on));
  }

  tabs.forEach((t, i) => {
    on(t, 'click', () => { if (!(cur && cur.playing)) select(t.dataset.uvTab); });
    on(t, 'keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const n = (i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length;
      tabs[n].focus();
      select(tabs[n].dataset.uvTab);
    });
  });
  cards.forEach((c) => on(c, 'click', () => {
    select(c.dataset.uvEnter);
    stage.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
  }));

  const onSelect = (e) => select(e.detail.realm);
  window.addEventListener('universe:select', onSelect);
  cleanups.push(() => window.removeEventListener('universe:select', onSelect));
  if (window.__realm) { curId = window.__realm; applyRealmUi(curId); }

  // ---------- lifecycle ----------
  function boot() {
    if (booted || disposed) return;
    booted = true;
    if (!canRunGL()) { stage.classList.add('no-gl'); return; }
    eng = createEngine(canvas, {
      maxDpr: coarse ? 1.5 : 2,
      onFrame,
      onLost: () => { stage.classList.add('no-gl'); setTimeout(() => { if (!disposed) { teardownEngine(); booted = false; stage.classList.remove('no-gl'); boot(); } }, 400); },
    });
    if (!eng) { stage.classList.add('no-gl'); return; }
    explorer = createExplorer({
      stage, eng, lang: copy.lang || 'en',
      focusTo: (p) => {
        const narrow = window.innerWidth < 768;
        goal.on = true; goal.x = p.x; goal.y = p.y - (narrow ? p.dist * 0.34 : 0); goal.z = p.z;
        goal.dist = p.dist; goal.yaw = Math.atan2(p.x, p.z); goal.pitch = 0.3;
        poke();
      },
      resetFocus: () => { goal.on = false; goal.dist = exploreDistance(curId); goal.yaw = goal.pitch = null; poke(); },
    });
    mount(curId);
    eng.resize();
    if (reduced) eng.once();
    else if (visible && !document.hidden) eng.start();
    requestAnimationFrame(() => stage.classList.add('is-live'));
  }
  function teardownEngine() {
    if (explorer) { explorer.dispose(); explorer = null; }
    if (eng) { eng.destroy(); eng = null; }
    for (const k of Object.keys(scenes)) delete scenes[k];
    cur = null;
  }

  const io = new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible && !booted) onIdle(boot, 600);
    if (!eng) return;
    if (visible && !document.hidden && !reduced) eng.start();
    else if (!immersive) eng.stop();
  }, { rootMargin: '250px 0px', threshold: 0 });
  io.observe(stage);
  cleanups.push(() => io.disconnect());

  on(document, 'visibilitychange', () => {
    if (!eng) return;
    if (document.hidden) eng.stop();
    else if ((visible || immersive) && !reduced) eng.start();
  });
  const ro = new ResizeObserver(() => { if (eng) { eng.resize(); if (reduced) eng.once(); } });
  ro.observe(stage);
  cleanups.push(() => ro.disconnect());

  return () => {
    disposed = true;
    cleanups.forEach((f) => f());
    document.documentElement.classList.remove('uv-lock');
    teardownEngine();
    delete root.dataset.uvMounted;
  };
}
