import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DLnuVie7.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_DfGrSm-u.mjs';
import { $ as $$Contact$1 } from '../chunks/Contact_C_6SFBPL.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Contact | Wisnu Alfian Nur Ashar";
  const description = "Get in touch for opportunities or collaborations.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="pt-20 min-h-[80vh] flex flex-col justify-center"> ${renderComponent($$result2, "ContactSection", $$Contact$1, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/Asli_Portfolio/src/pages/contact.astro", void 0);

const $$file = "D:/Asli_Portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
