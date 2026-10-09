import { profile as en } from '../data/profile';
import { profile as id } from '../data/profile_id';
import { universe } from '../data/universe';
import { getProjectSlug } from './slug';

/** Compact, serialisable snapshot for the in-page terminal (/terminal.json, /id/terminal.json). */
export function terminalData(lang: 'en' | 'id') {
  const p = lang === 'id' ? id : en;
  const base = lang === 'id' ? '/id/projects/' : '/projects/';
  const names = (xs: { name: string }[]) => [...new Set(xs.map((x) => x.name))];
  return {
    lang,
    name: p.personalInfo.name,
    role: p.personalInfo.role,
    location: p.personalInfo.location,
    tagline: p.personalInfo.tagline,
    email: p.personalInfo.email,
    github: p.personalInfo.github,
    linkedin: p.personalInfo.linkedin,
    cv: '/CV_Wisnu_Alfian_Nur_Ashar.pdf',
    contact: lang === 'id' ? '/id/contact' : '/contact',
    education: `${p.education.degree} — ${p.education.institution}`,
    skills: {
      programming: names(p.skills.programming),
      web: names(p.skills.webTech),
      ai: names(p.skills.aiMl),
      security: names(p.skills.securityCloud),
      tools: names(p.skills.tools),
    },
    realms: universe[lang].realms.map((r) => ({ id: r.id, title: r.title, skills: r.skills, game: r.game })),
    projects: p.projects.map((x) => ({ title: x.title, role: x.role, stack: x.techStack.slice(0, 5), url: base + getProjectSlug(x.title) })),
    openSource: [...new Set(p.openSource.map((o) => o.organization))],
  };
}
