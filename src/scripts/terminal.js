// "Hacker terminal" easter egg: press ` (backtick) or tap the $_ button. Real portfolio data, fake shell.
// Built lazily on first open, so it costs nothing until used.

let root = null, out = null, input = null, data = null, history = [], hIdx = 0, busy = false;
const L = () => (location.pathname.startsWith('/id') ? 'id' : 'en');

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function print(html, cls = '') {
  const d = document.createElement('div');
  if (cls) d.className = cls;
  d.innerHTML = html;
  out.appendChild(d);
  out.scrollTop = out.scrollHeight;
}

async function load() {
  if (data) return data;
  try {
    const r = await fetch(L() === 'id' ? '/id/terminal.json' : '/terminal.json');
    data = await r.json();
  } catch {
    data = null;
  }
  return data;
}

function build() {
  root = document.createElement('div');
  root.className = 'fx-term';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Terminal');
  root.innerHTML = `
    <div class="fx-term-box">
      <div class="fx-term-bar"><i></i><i></i><i></i><span>wisnu@portfolio:~</span><button type="button" aria-label="Close terminal">esc ✕</button></div>
      <div class="fx-term-out" aria-live="polite"></div>
      <label class="fx-term-in"><b>$</b><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Command" /></label>
    </div>`;
  document.body.appendChild(root);
  out = root.querySelector('.fx-term-out');
  input = root.querySelector('input');
  root.addEventListener('click', (e) => {
    if (e.target === root) close();
    else if (!window.getSelection().toString()) input.focus();
  });
  root.querySelector('button').addEventListener('click', close);
  input.addEventListener('keydown', onKey);
  const t = L() === 'id'
    ? ['Selamat datang. Ketik <b>help</b> untuk daftar perintah.', 'Tip: coba <b>hack</b> atau <b>sudo hire-me</b>.']
    : ['Welcome. Type <b>help</b> for the command list.', 'Tip: try <b>hack</b> or <b>sudo hire-me</b>.'];
  t.forEach((l) => print(l, 't-dim'));
}

function onKey(e) {
  if (e.key === 'Enter') {
    const v = input.value.trim();
    input.value = '';
    if (!v || busy) return;
    history.push(v);
    hIdx = history.length;
    print(`<span class="t-ok">$</span> ${esc(v)}`);
    run(v);
  } else if (e.key === 'ArrowUp') {
    if (hIdx > 0) input.value = history[--hIdx];
    e.preventDefault();
  } else if (e.key === 'ArrowDown') {
    input.value = hIdx < history.length - 1 ? history[++hIdx] : ((hIdx = history.length), '');
    e.preventDefault();
  } else if (e.key === 'Escape') {
    close();
  }
}

const HELP = {
  en: [
    ['help', 'this list'], ['whoami', 'who is Wisnu'], ['skills [cyber|ai|software|devops]', 'toolkit by realm'],
    ['projects', 'production projects'], ['open <project>', 'open a project page'], ['realm <name>', 'jump to a 3D realm'],
    ['contact', 'how to reach me'], ['cv', 'download my CV'], ['hack', 'run a (simulated) pentest'], ['clear · exit', 'tidy up / leave'],
  ],
  id: [
    ['help', 'daftar perintah'], ['whoami', 'siapa Wisnu'], ['skills [cyber|ai|software|devops]', 'perangkat per dunia'],
    ['projects', 'proyek produksi'], ['open <proyek>', 'buka halaman proyek'], ['realm <nama>', 'lompat ke dunia 3D'],
    ['contact', 'cara menghubungi'], ['cv', 'unduh CV'], ['hack', 'jalankan pentest (simulasi)'], ['clear · exit', 'bersihkan / keluar'],
  ],
};

async function run(line) {
  const [cmd, ...args] = line.split(/\s+/);
  const arg = args.join(' ').toLowerCase();
  const d = await load();
  if (!d) return print('network error — could not load profile data', 't-dim');
  const id = d.lang === 'id';
  switch (cmd.toLowerCase()) {
    case 'help':
      return HELP[d.lang].forEach(([c, t]) => print(`  <b>${esc(c.padEnd(36))}</b><span class="t-dim">${esc(t)}</span>`));
    case 'whoami':
      return print(`<b>${esc(d.name)}</b> — ${esc(d.role)}\n${esc(d.tagline)}\n<span class="t-dim">${esc(d.location)} · ${esc(d.education)}</span>`);
    case 'skills': {
      const realm = d.realms.find((r) => r.id === arg);
      if (arg && !realm) return print(`unknown realm "${esc(arg)}" — cyber, ai, software, devops`, 't-dim');
      if (realm) return print(`<b>${esc(realm.title)}</b>\n  ${realm.skills.map(esc).join(' · ')}`);
      return d.realms.forEach((r) => print(`<b>${esc(r.id.padEnd(9))}</b>${r.skills.map(esc).join(' · ')}`));
    }
    case 'projects':
      return d.projects.slice(0, 12).forEach((p) => print(`<a href="${p.url}">${esc(p.title)}</a> <span class="t-dim">— ${esc(p.stack.slice(0, 3).join(', '))}</span>`));
    case 'open': {
      const p = d.projects.find((x) => x.title.toLowerCase().includes(arg) || x.url.endsWith('/' + arg));
      if (!arg || !p) return print(id ? 'proyek tidak ditemukan — coba <b>projects</b>' : 'project not found — try <b>projects</b>', 't-dim');
      print(`opening ${esc(p.title)}…`, 't-ok');
      await sleep(500);
      close();
      return navigate(p.url);
    }
    case 'realm': {
      const r = d.realms.find((x) => x.id === arg);
      if (!r) return print('usage: realm cyber | ai | software | devops', 't-dim');
      window.__realm = r.id;
      window.dispatchEvent(new CustomEvent('universe:select', { detail: { realm: r.id } }));
      print(`entering ${esc(r.title)}…`, 't-ok');
      await sleep(350);
      close();
      const stage = document.querySelector('[data-uv-stage]');
      if (stage) stage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      else navigate((id ? '/id/' : '/') + '#universe');
      return;
    }
    case 'contact':
      return print(`email    <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>\ngithub   <a href="${esc(d.github)}" target="_blank" rel="noopener">${esc(d.github)}</a>\nlinkedin <a href="${esc(d.linkedin)}" target="_blank" rel="noopener">${esc(d.linkedin)}</a>\nform     <a href="${d.contact}">${d.contact}</a>`);
    case 'cv':
      print(`<a href="${d.cv}" download>${esc(d.cv)}</a>`);
      return;
    case 'hack':
      return hack(id);
    case 'sudo':
      if (arg === 'hire-me' || arg === 'hire me') {
        print(id ? '[sudo] izin diberikan ✔' : '[sudo] permission granted ✔', 't-ok');
        print(id ? 'membuka formulir kontak…' : 'opening contact form…', 't-dim');
        await sleep(900);
        close();
        return navigate(d.contact);
      }
      return print(id ? 'sudo: coba <b>sudo hire-me</b> 😉' : 'sudo: try <b>sudo hire-me</b> 😉', 't-dim');
    case 'clear':
      out.textContent = '';
      return;
    case 'exit':
    case 'quit':
      return close();
    case 'ls':
      return print('about/  projects/  skills/  experience/  contact/  cv.pdf');
    case 'cat':
    case 'rm':
    case 'cd':
      return print(id ? 'read-only filesystem — ini portofolio, bukan server 😄' : 'read-only filesystem — this is a portfolio, not a server 😄', 't-dim');
    default:
      return print(`command not found: ${esc(cmd)} — ${id ? 'ketik' : 'try'} <b>help</b>`, 't-dim');
  }
}

async function hack(id) {
  busy = true;
  print(id ? '<span class="t-dim">simulasi — tidak ada sistem nyata yang disentuh</span>' : '<span class="t-dim">simulation — no real system is touched</span>');
  const steps = [
    ['nmap -sV target.local', 'open: 22/ssh 80/http 443/https'],
    ['burpsuite --scan /api', '3 findings: 1 medium, 2 info'],
    ['sqlmap --batch --risk=1', 'parameters not injectable ✔'],
    ['nikto -h https://target.local', 'headers: CSP ✔ HSTS ✔ X-Frame ✔'],
    ['report --format=pdf', 'structured report written → findings.pdf'],
  ];
  for (const [c, r] of steps) {
    print(`<span class="t-ok">$</span> ${esc(c)}`);
    await sleep(520);
    print(`  ${esc(r)}`, 't-dim');
    await sleep(260);
  }
  print(id ? 'selesai. Pentest eksternal & internal dengan laporan terstruktur — itu keahlian saya.' : 'done. External & internal pentests with structured reporting — that is what I do.', 't-ok');
  busy = false;
}

function navigate(url) {
  if (url.startsWith('/') || url.startsWith(location.origin)) {
    const a = document.createElement('a');
    a.href = url;
    document.body.appendChild(a);
    a.click(); // lets the Astro router handle it
    a.remove();
  } else location.href = url;
}

export function open() {
  if (!root) build();
  root.classList.add('is-open');
  document.documentElement.classList.add('fx-lock');
  setTimeout(() => input.focus(), 30);
  load();
}
export function close() {
  if (!root) return;
  root.classList.remove('is-open');
  document.documentElement.classList.remove('fx-lock');
}

export function toggle() {
  root && root.classList.contains('is-open') ? close() : open();
}

/** Called after each client-side navigation: language may differ, so drop the cached DOM + data. */
export function reset() {
  data = null;
  close();
  if (root) { root.remove(); root = null; }
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && root && root.classList.contains('is-open')) close();
});
