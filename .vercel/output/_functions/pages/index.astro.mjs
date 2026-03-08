import { f as createComponent, k as renderComponent, r as renderTemplate, e as createAstro, m as maybeRenderHead, h as addAttribute, n as renderScript } from '../chunks/astro/server_DLnuVie7.mjs';
import 'piccolore';
import { c as $$, $ as $$Layout, a as $$Header, b as $$Footer } from '../chunks/Footer_DfGrSm-u.mjs';
import { p as profile } from '../chunks/profile_CMplmx86.mjs';
/* empty css                                 */
import { $ as $$About, a as $$Education, b as $$Certifications } from '../chunks/Certifications_qHzmFsc_.mjs';
import { $ as $$Experience } from '../chunks/Experience_0LNzLNZw.mjs';
import { $ as $$Projects } from '../chunks/Projects_Dsx60PeP.mjs';
import { $ as $$Skills } from '../chunks/Skills_DWN5AGW6.mjs';
import { $ as $$Contact } from '../chunks/Contact_C_6SFBPL.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://wisnualfiannurashar.my.id");
const $$ArrowRight = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArrowRight;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "arrow-right", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M5 12h14"></path> <path d="m12 5 7 7-7 7"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/ArrowRight.astro", void 0);

const $$Astro$1 = createAstro("https://wisnualfiannurashar.my.id");
const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-down", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m6 9 6 6 6-6"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/ChevronDown.astro", void 0);

const $$Astro = createAstro("https://wisnualfiannurashar.my.id");
const $$Download = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Download;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "download", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 15V3"></path> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path> <path d="m7 10 5 5 5-5"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Download.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
      alt: "Minimalist workspace"
    },
    {
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
      alt: "Coding environment"
    },
    {
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
      alt: "Modern design aesthetic"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-sage-900 dark:bg-dark-bg transition-colors duration-300" data-astro-cid-anhloy43> <div class="absolute inset-0 z-0" data-astro-cid-anhloy43> ${slides.map((slide, index) => renderTemplate`<div${addAttribute(`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out slider-image ${index === 0 ? "opacity-40" : "opacity-0"}`, "class")}${addAttribute(`background-image: url('${slide.image}')`, "style")}${addAttribute(index, "data-index")} data-astro-cid-anhloy43></div>`)} <div class="absolute inset-0 bg-sage-900/70" data-astro-cid-anhloy43></div> </div> <div class="container-custom relative z-10 flex flex-col items-center text-center text-white pt-32 md:pt-16" data-astro-cid-anhloy43> <div class="inline-block mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md text-sage-50 border border-white/20 rounded-full text-sm font-medium tracking-wide animate-fade-in-up" data-astro-cid-anhloy43>
Hello, I'm
</div> <h1 class="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-tight animate-fade-in-up delay-100 drop-shadow-lg min-h-[1.2em]" data-astro-cid-anhloy43> <span id="typewriter-text" data-astro-cid-anhloy43></span><span class="animate-blink" data-astro-cid-anhloy43>|</span> </h1> <p class="text-lg md:text-2xl text-sage-100 max-w-2xl mb-10 leading-relaxed animate-fade-in-up delay-200 drop-shadow-md font-light" data-astro-cid-anhloy43> ${profile.personalInfo.role} <br class="hidden md:block" data-astro-cid-anhloy43> ${profile.personalInfo.tagline} </p> <div class="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-5 animate-fade-in-up delay-300" data-astro-cid-anhloy43> <a href="/projects" class="btn bg-white text-sage-900 hover:bg-sage-50 shadow-lg px-8 py-3 rounded-full font-medium transition-all duration-300 group" data-astro-cid-anhloy43>
View My Work
${renderComponent($$result, "ArrowRight", $$ArrowRight, { "class": "inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform", "data-astro-cid-anhloy43": true })} </a> <a href="/cv" target="_blank" rel="noopener noreferrer" class="btn border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2" data-astro-cid-anhloy43> ${renderComponent($$result, "Download", $$Download, { "class": "w-4 h-4", "data-astro-cid-anhloy43": true })}
Download CV (PDF)
</a> <a href="/contact" class="btn border-2 border-transparent bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-3 rounded-full font-medium transition-all duration-300" data-astro-cid-anhloy43>
Contact Me
</a> </div> </div> <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce hidden md:block" data-astro-cid-anhloy43> ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "w-8 h-8", "data-astro-cid-anhloy43": true })} </div> </section>  ${renderScript($$result, "D:/Asli_Portfolio/src/components/sections/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Asli_Portfolio/src/components/sections/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = `${profile.personalInfo.name} | ${profile.personalInfo.role}`;
  const description = profile.personalInfo.summary;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Experience", $$Experience, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ${renderComponent($$result2, "Skills", $$Skills, {})} <div class="grid md:grid-cols-2 bg-white container-custom py-12 gap-8 items-start"> ${renderComponent($$result2, "Education", $$Education, {})} ${renderComponent($$result2, "Certifications", $$Certifications, {})} </div> ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "D:/Asli_Portfolio/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Asli_Portfolio/src/pages/index.astro", void 0);

const $$file = "D:/Asli_Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
