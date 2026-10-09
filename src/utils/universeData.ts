import { profile as en } from '../data/profile';
import { profile as id } from '../data/profile_id';
import { universe, type RealmId } from '../data/universe';
import { explorer } from '../data/universeExplorer';
import { getProjectSlug, thumbOf } from './slug';

/** Item shape consumed by src/scripts/gl/explorer.js */
export interface Item {
  id: string;
  t: string;
  s?: string;
  d?: string;
  /** chips */
  c?: string[];
  /** labelled long-form facts */
  f?: [string, string][];
  /** links: [label, url, external?] */
  l?: [string, string, boolean?][];
  img?: string;
}
export interface Group { id: string; label: string; items: Item[] }

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9+#.]/g, '');

/** Serialisable snapshot for /universe.json and /id/universe.json */
export function universeData(lang: 'en' | 'id') {
  const p = lang === 'id' ? id : en;
  const ex = explorer[lang];
  const base = lang === 'id' ? '/id/projects/' : '/projects/';
  const byTitle = new Map(p.projects.map((x) => [x.title, x]));

  const projectItem = (title: string): Item | null => {
    const x = byTitle.get(title);
    if (!x) return null;
    const slug = getProjectSlug(x.title);
    const links: Item['l'] = [[ex.ui.viewProject, base + slug]];
    if (x.link && x.link !== '#') links.push([ex.ui.live, x.link, true]);
    if (x.github) links.push([ex.ui.repo, x.github, true]);
    return {
      id: 'p-' + slug,
      t: x.title,
      s: `${x.role} · ${x.status}`,
      d: x.description,
      c: x.techStack,
      l: links,
      img: x.image ? thumbOf(x.image) : undefined,
    };
  };

  const skillItem = (name: string, realm: RealmId): Item => {
    const key = norm(name);
    const used = p.projects.filter((x) => x.techStack.some((tch) => { const k = norm(tch); return k === key || (key.length > 3 && (k.includes(key) || key.includes(k))); }));
    const note = (explorer[lang].realms[realm].notes || {})[name];
    const item: Item = { id: 's-' + key, t: name, s: universe[lang].realms.find((r) => r.id === realm)?.title };
    if (note) item.d = note;
    if (used.length) {
      item.f = [[ex.ui.usedIn, used.slice(0, 6).map((x) => x.title).join(' · ')]];
      item.l = used.slice(0, 3).map((x) => [x.title, base + getProjectSlug(x.title)] as [string, string]);
    } else if (!note) {
      item.d = universe[lang].realms.find((r) => r.id === realm)?.blurb;
    }
    return item;
  };

  const extraItems = (kind: string, realm: RealmId): Item[] => {
    if (kind === 'reports') {
      return p.openSource.map((o, i) => ({
        id: 'r-' + i,
        t: o.project,
        s: `${o.organization} · ${o.category}`,
        d: o.bugDescription,
        c: [o.organization, o.category, o.language],
        f: [
          [ex.ui.impact, o.impact],
          [ex.ui.location, o.fileLocation],
          [ex.ui.maintainer, o.maintainerResponse],
        ],
        l: o.repo ? [[ex.ui.repo, `https://github.com/${o.repo}`, true]] : undefined,
      }));
    }
    if (kind === 'achievements') {
      return p.competitions.map((c, i) => ({
        id: 'a-' + i,
        t: c.name,
        s: `${c.issuer} · ${c.date}`,
        d: c.description,
        c: [c.category === 'winner' ? (lang === 'id' ? 'Juara' : 'Winner') : (lang === 'id' ? 'Peserta' : 'Participant')],
        img: c.image,
      }));
    }
    if (kind === 'experience') {
      return p.experience.map((e, i) => ({
        id: 'e-' + i,
        t: e.role,
        s: `${e.company} · ${e.duration}`,
        d: e.description,
        c: e.skills,
        f: [[ex.ui.location, e.location]],
      }));
    }
    // certs: cloud-related training
    return p.certifications
      .filter((c) => /aws|google cloud|cloud|docker|devops/i.test(`${c.name} ${c.issuer}`))
      .map((c, i) => ({ id: 'c-' + i, t: c.name, s: `${c.issuer} · ${c.date}`, d: c.description, img: c.image }));
  };

  const realms: Record<string, { groups: Group[] }> = {};
  for (const r of universe[lang].realms) {
    const cfg = ex.realms[r.id];
    realms[r.id] = {
      groups: [
        {
          id: 'method',
          label: cfg.method.label,
          items: cfg.method.steps.map((st, i) => ({ id: `m-${i}`, t: st.t, s: `${ex.ui.step} ${i + 1}/${cfg.method.steps.length}`, d: st.d })),
        },
        { id: 'skills', label: ex.ui.skills, items: r.skills.map((s) => skillItem(s, r.id)) },
        { id: 'projects', label: ex.ui.projects, items: cfg.projects.map(projectItem).filter(Boolean) as Item[] },
        { id: cfg.extra.id, label: cfg.extra.label, items: extraItems(cfg.extra.id, r.id) },
      ].filter((g) => g.items.length),
    };
  }
  return { lang, ui: ex.ui, realms };
}
