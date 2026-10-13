// Scroll-reveal for text. Only elements that start below the fold are touched, so first paint / LCP are unaffected.
// Animations are opacity + transform only (compositor), driven by one IntersectionObserver.

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const TEXT = 'h2, h3, h4, p, li, blockquote, summary, figcaption, .badge, .sec-badge, [data-reveal]';
const SKIP = '[data-no-reveal], nav, header.site-header, .cx, .uv-root, [data-uv-root], .sw-info, .mq, .aic, .fx-term, details:not([open]) > *:not(summary), svg, button, a > *';
const MAX = 220;

function splitWords(el) {
  const label = (el.innerText || el.textContent || '').replace(/\s+/g, ' ').trim();
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) if (walker.currentNode.nodeValue.trim()) nodes.push(walker.currentNode);
  let n = 0;
  nodes.forEach((node) => {
    const frag = document.createDocumentFragment();
    node.nodeValue.split(/(\s+)/).forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
      const o = document.createElement('span');
      o.className = 'rv-w';
      o.setAttribute('aria-hidden', 'true');
      const i = document.createElement('span');
      i.style.setProperty('--i', String(Math.min(n++, 14)));
      i.textContent = part;
      o.appendChild(i);
      frag.appendChild(o);
    });
    node.parentNode.replaceChild(frag, node);
  });
  el.setAttribute('aria-label', label);
}

let io = null;
let tagged = [];

export function initReveal() {
  disposeReveal();
  if (reduced() || !('IntersectionObserver' in window)) return;
  const vh = window.innerHeight;
  const root = document.querySelector('main') || document.body;

  const els = [...root.querySelectorAll(TEXT)].filter((el) => {
    if (el.closest(SKIP)) return false;
    if (el.querySelector('h2, h3, h4, p, li')) return false;
    if (!(el.textContent || '').trim()) return false;
    return el.getBoundingClientRect().top > vh * 0.92;
  }).slice(0, MAX);
  if (!els.length) return;

  io = new IntersectionObserver((entries) => {
    let k = 0;
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      io.unobserve(el);
      el.style.setProperty('--rv-d', `${Math.min(k++, 5) * 70}ms`);
      el.classList.add('rv-in');
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

  els.forEach((el) => {
    const heading = /^H[23]$/.test(el.tagName) && getComputedStyle(el).webkitTextFillColor !== 'rgba(0, 0, 0, 0)' && el.textContent.length < 140;
    if (heading) { splitWords(el); el.classList.add('rv', 'rv-words'); }
    else el.classList.add('rv', 'rv-fade');
    tagged.push(el);
    io.observe(el);
  });
  document.documentElement.classList.add('rv-on');
}

export function disposeReveal() {
  io?.disconnect();
  io = null;
  tagged.forEach((el) => { el.classList.remove('rv', 'rv-fade', 'rv-words', 'rv-in'); el.style.removeProperty('--rv-d'); });
  tagged = [];
  document.documentElement.classList.remove('rv-on');
}
