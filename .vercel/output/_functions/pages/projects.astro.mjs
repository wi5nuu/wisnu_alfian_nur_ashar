import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DLnuVie7.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_DfGrSm-u.mjs';
import { $ as $$Projects$1 } from '../chunks/Projects_Dsx60PeP.mjs';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const title = "Projects | Wisnu Alfian Nur Ashar";
  const description = "Explore my featured projects and case studies.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-20"> ${renderComponent($$result2, "ProjectsSection", $$Projects$1, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/Asli_Portfolio/src/pages/projects.astro", void 0);

const $$file = "D:/Asli_Portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Projects,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
