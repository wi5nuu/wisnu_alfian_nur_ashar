// Site-wide micro-interactions. Everything here is progressive enhancement:
// no layout is changed, nothing runs for reduced-motion users, and touch devices skip pointer-only effects.

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const TILT_SELECTOR = '[data-tilt], .project-card, .service-card, .cert-card, .achievement-item, .why-work-with-me .card, .tl-card';
const MAGNET_SELECTOR = '.cta-button, .cv-button, .nav-cta, .uv-btn--accent';

function setupTilt(root = document) {
  if (!finePointer() || reduced()) return () => {};
  const off = [];
  root.querySelectorAll(TILT_SELECTOR).forEach((el) => {
    if (el.dataset.fxTilt) return;
    el.dataset.fxTilt = '1';
    if (getComputedStyle(el).position === 'static') el.style.position = 'relative';
    const glare = document.createElement('i');
    glare.className = 'fx-glare';
    glare.setAttribute('aria-hidden', 'true');
    el.appendChild(glare);
    let raf = 0, saved = '';
    const max = parseFloat(el.dataset.tiltMax || '6');

    const move = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `perspective(900px) rotateX(${((0.5 - py) * max * 2).toFixed(2)}deg) rotateY(${((px - 0.5) * max * 2).toFixed(2)}deg) translateZ(0)`;
        glare.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
        glare.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
      });
    };
    const enter = () => {
      saved = el.style.transition;
      el.style.transition = 'transform 0.12s ease-out';
      el.classList.add('fx-tilting');
    };
    const leave = () => {
      cancelAnimationFrame(raf);
      el.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)';
      el.style.transform = '';
      el.classList.remove('fx-tilting');
      setTimeout(() => { el.style.transition = saved; }, 650);
    };
    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', leave);
    off.push(() => {
      el.removeEventListener('pointerenter', enter);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
      glare.remove();
      delete el.dataset.fxTilt;
    });
  });
  return () => off.forEach((f) => f());
}

function setupMagnet(root = document) {
  if (!finePointer() || reduced()) return () => {};
  const off = [];
  root.querySelectorAll(MAGNET_SELECTOR).forEach((el) => {
    if (el.dataset.fxMagnet) return;
    el.dataset.fxMagnet = '1';
    let raf = 0;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) * 0.18, dy = (e.clientY - (r.top + r.height / 2)) * 0.28;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { el.style.translate = `${dx.toFixed(1)}px ${dy.toFixed(1)}px`; });
    };
    const leave = () => { cancelAnimationFrame(raf); el.style.translate = ''; };
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', leave);
    off.push(() => { el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); delete el.dataset.fxMagnet; el.style.translate = ''; });
  });
  return () => off.forEach((f) => f());
}

function setupCounters(root = document) {
  const nodes = [...root.querySelectorAll('.stat-number')].filter((n) => /^\s*[\d.,]+\s*\+?\s*$/.test(n.textContent || ''));
  if (!nodes.length) return () => {};
  if (reduced() || !('IntersectionObserver' in window)) return () => {};
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target;
      const txt = (el.textContent || '').trim();
      const target = parseFloat(txt.replace(/[^\d.]/g, ''));
      const suffix = txt.replace(/[\d.,]/g, '');
      const dur = 1300, t0 = performance.now();
      el.style.fontVariantNumeric = 'tabular-nums';
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const v = Math.round(target * (1 - Math.pow(1 - p, 4)));
        el.textContent = v + (p < 1 ? '' : suffix);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  nodes.forEach((n) => io.observe(n));
  return () => io.disconnect();
}

/** Marks the page when scroll-driven animations are available (CSS does the rest). */
function setupScrollFx() {
  const ok = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('animation-timeline: view()');
  document.documentElement.classList.toggle('fx-scroll', ok && !reduced());
  return () => document.documentElement.classList.remove('fx-scroll');
}

let cleanups = [];
export function initFx() {
  cleanups.forEach((f) => f());
  cleanups = [setupScrollFx(), setupTilt(), setupMagnet(), setupCounters()];
}
export function disposeFx() {
  cleanups.forEach((f) => f());
  cleanups = [];
}
