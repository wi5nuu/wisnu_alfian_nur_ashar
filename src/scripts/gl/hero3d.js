import { createEngine } from './engine.js';
import { nexusScene, REALM_IDS } from './scene-nexus.js';
import { canRunGL, prefersReducedMotion, saveData, lowEnd, quality, onIdle, afterLoad } from './env.js';

/**
 * Hero background: the "Nexus" – a lightweight 3D scene with the four realm gems orbiting a core.
 * Text stays server-rendered, the canvas only boots after the page is idle so LCP is untouched.
 */
export function mountHero(section) {
  const canvas = section.querySelector('canvas[data-hero-gl]');
  if (!canvas || canvas.dataset.booted) return () => {};
  if (saveData() || lowEnd() || !canRunGL()) return () => {};
  canvas.dataset.booted = '1';

  let eng = null, disposed = false, visible = true;
  const chips = [...section.querySelectorAll('[data-hero-realm]')];
  const reduced = prefersReducedMotion();
  const ptr = { x: 0, y: 0, sx: 0, sy: 0 };
  const tmp = [0, 0, 0], pt = {};
  let hover = -1;
  const cleanups = [];

  function boot() {
    if (disposed) return;
    eng = createEngine(canvas, { maxDpr: 1.75, onLost: () => canvas.classList.remove('is-on') });
    if (!eng) return;
    const params = () => {
      const r = section.getBoundingClientRect();
      const asp = r.width / Math.max(1, r.height);
      return asp < 1 ? { R: Math.max(4.6, 8.6 * asp * 1.35), gem: 1.35, portrait: true } : { R: 8.6, gem: 1, portrait: false };
    };
    let cfg = params();
    let scene = nexusScene(eng, quality(), cfg);
    eng.setScene(scene);
    const base = { yaw: scene.camera.yaw, pitch: cfg.portrait ? 0.95 : scene.camera.pitch };

    const bind = (sc) => { sc.update = (t) => {
      ptr.sx += (ptr.x - ptr.sx) * 0.05;
      ptr.sy += (ptr.y - ptr.sy) * 0.05;
      eng.cam.yaw = base.yaw + t * 0.045 + ptr.sx * 0.5;
      eng.cam.pitch = base.pitch + ptr.sy * 0.28;
      eng.cam.ty = cfg.portrait ? -4.6 : 0.4; // portrait: lift the scene into the empty space above the headline
      // keep realm chips glued to their gems
      for (let i = 0; i < chips.length; i++) {
        const a = sc.anchor(i, t, tmp);
        eng.project(a[0], a[1], a[2], pt);
        const el = chips[i];
        if (pt.vis) {
          const m = 46; // keep chips fully inside the viewport
          const cx = Math.min(eng.width - m, Math.max(m, pt.x)), cy = Math.min(eng.height - m, Math.max(m, pt.y));
          el.style.transform = `translate3d(${cx.toFixed(1)}px,${cy.toFixed(1)}px,0) translate(-50%,-50%)`;
          el.style.opacity = Math.max(0.35, Math.min(1, 1.2 - pt.w / 34)).toFixed(2);
        }
      }
    }; };
    bind(scene);

    const onMove = (e) => {
      const r = section.getBoundingClientRect();
      ptr.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ptr.y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    section.addEventListener('pointermove', onMove, { passive: true });
    cleanups.push(() => section.removeEventListener('pointermove', onMove));

    chips.forEach((el, i) => {
      const on = () => { hover = i; scene.hover(i); };
      const off = () => { hover = -1; scene.hover(-1); };
      el.addEventListener('pointerenter', on);
      el.addEventListener('pointerleave', off);
      el.addEventListener('focus', on);
      el.addEventListener('blur', off);
      cleanups.push(() => {
        el.removeEventListener('pointerenter', on);
        el.removeEventListener('pointerleave', off);
        el.removeEventListener('focus', on);
        el.removeEventListener('blur', off);
      });
    });

    const io = new IntersectionObserver(([en]) => {
      visible = en.isIntersecting;
      if (visible && !document.hidden) { if (!reduced) eng.start(); } else eng.stop();
    }, { threshold: 0.01 });
    io.observe(section);
    cleanups.push(() => io.disconnect());

    const onVis = () => {
      if (document.hidden) eng.stop();
      else if (visible && !reduced) eng.start();
    };
    document.addEventListener('visibilitychange', onVis);
    cleanups.push(() => document.removeEventListener('visibilitychange', onVis));

    const ro = new ResizeObserver(() => {
      eng.resize();
      const next = params();
      if (next.portrait !== cfg.portrait) { cfg = next; base.pitch = cfg.portrait ? 0.95 : 0.34; scene = nexusScene(eng, quality(), cfg); bind(scene); eng.setScene(scene); }
      if (reduced) eng.once();
    });
    ro.observe(canvas);
    cleanups.push(() => ro.disconnect());

    if (reduced) eng.once(); else eng.start();
    requestAnimationFrame(() => canvas.classList.add('is-on'));
    section.classList.add('gl-ready');
  }

  afterLoad(() => onIdle(boot, 1200));

  return () => {
    disposed = true;
    cleanups.forEach((f) => f());
    if (eng) eng.destroy();
    delete canvas.dataset.booted;
  };
}

export { REALM_IDS };
