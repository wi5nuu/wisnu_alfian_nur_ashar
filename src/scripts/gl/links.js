// Hero realm portals → tell the Universe section which realm to open.
export function initRealmLinks(root) {
  root.querySelectorAll('[data-realm]').forEach((a) => {
    if (a.dataset.bound) return;
    a.dataset.bound = '1';
    a.addEventListener('click', () => {
      window.__realm = a.dataset.realm;
      window.dispatchEvent(new CustomEvent('universe:select', { detail: { realm: a.dataset.realm } }));
    });
  });
}
