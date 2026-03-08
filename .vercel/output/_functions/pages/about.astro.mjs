import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DLnuVie7.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_DfGrSm-u.mjs';
import { $ as $$About$1, a as $$Education, b as $$Certifications } from '../chunks/Certifications_qHzmFsc_.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "About Me | Wisnu Alfian Nur Ashar";
  const description = "Learn more about my background, education, and professional journey.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-20"> <!-- Padding for fixed header --> ${renderComponent($$result2, "AboutSection", $$About$1, {})} <div class="grid md:grid-cols-2 bg-white container-custom py-12 gap-8 items-start"> ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Certifications", $$Certifications, {})} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/Asli_Portfolio/src/pages/about.astro", void 0);

const $$file = "D:/Asli_Portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
