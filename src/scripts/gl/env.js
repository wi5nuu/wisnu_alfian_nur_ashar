// Device / preference sniffing shared by the 3D modules.

export function canRunGL() {
  try {
    const c = document.createElement('canvas');
    return !!c.getContext('webgl2');
  } catch {
    return false;
  }
}

export const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const saveData = () => {
  const c = navigator.connection;
  return !!(c && (c.saveData || /(^|-)2g$/.test(c.effectiveType || '')));
};

export const isCoarse = () => window.matchMedia && window.matchMedia('(pointer: coarse)').matches;

/** 0.5 (weak phone) … 1 (desktop) – scales particle counts. */
export function quality() {
  const cores = navigator.hardwareConcurrency || 4;
  const mem = navigator.deviceMemory || 4;
  let q = 1;
  if (isCoarse()) q = 0.7;
  if (cores <= 4 || mem <= 3) q = Math.min(q, 0.55);
  return q;
}

export function onIdle(fn, timeout = 1500) {
  if ('requestIdleCallback' in window) window.requestIdleCallback(fn, { timeout });
  else setTimeout(fn, 200);
}

/** Run `fn` once the page has finished loading. */
export function afterLoad(fn) {
  if (document.readyState === 'complete') fn();
  else window.addEventListener('load', fn, { once: true });
}
