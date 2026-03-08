import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DLnuVie7.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_DfGrSm-u.mjs';
import { $ as $$Skills$1 } from '../chunks/Skills_DWN5AGW6.mjs';
export { renderers } from '../renderers.mjs';

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const title = "Skills | Wisnu Alfian Nur Ashar";
  const description = "My technical stack and professional capabilities.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-20"> ${renderComponent($$result2, "SkillsSection", $$Skills$1, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/Asli_Portfolio/src/pages/skills.astro", void 0);

const $$file = "D:/Asli_Portfolio/src/pages/skills.astro";
const $$url = "/skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Skills,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
