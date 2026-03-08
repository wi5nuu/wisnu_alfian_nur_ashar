import { f as createComponent, k as renderComponent, r as renderTemplate, e as createAstro, m as maybeRenderHead, h as addAttribute } from './astro/server_DLnuVie7.mjs';
import 'piccolore';
import { p as profile } from './profile_CMplmx86.mjs';
import { c as $$ } from './Footer_DfGrSm-u.mjs';

const $$Astro$1 = createAstro("https://wisnualfiannurashar.my.id");
const $$Cpu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Cpu;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "cpu", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M12 20v2"></path> <path d="M12 2v2"></path> <path d="M17 20v2"></path> <path d="M17 2v2"></path> <path d="M2 12h2"></path> <path d="M2 17h2"></path> <path d="M2 7h2"></path> <path d="M20 12h2"></path> <path d="M20 17h2"></path> <path d="M20 7h2"></path> <path d="M7 20v2"></path> <path d="M7 2v2"></path> <rect x="4" y="4" width="16" height="16" rx="2"></rect> <rect x="8" y="8" width="8" height="8" rx="1"></rect> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Cpu.astro", void 0);

const $$Astro = createAstro("https://wisnualfiannurashar.my.id");
const $$Users = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Users;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "users", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <path d="M16 3.128a4 4 0 0 1 0 7.744"></path> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <circle cx="9" cy="7" r="4"></circle> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Users.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="section bg-cream-50"> <div class="container-custom"> <div class="text-center mb-16"> <h2 class="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-4 inline-block relative">
Skills & Expertise
<span class="absolute -bottom-2 left-0 w-full h-1 bg-sage-300/50 rounded-full"></span> </h2> <p class="text-charcoal/70 max-w-2xl mx-auto mt-4">
A comprehensive toolkit for modern web development and digital
        leadership.
</p> </div> <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"> <!-- Technical Skills --> <div class="bg-white p-8 rounded-2xl shadow-sm border border-cream-200"> <div class="flex items-center gap-3 mb-6 border-b border-cream-100 pb-4"> <div class="p-3 bg-sage-50 text-sage-600 rounded-lg"> ${renderComponent($$result, "Cpu", $$Cpu, { "class": "w-6 h-6" })} </div> <h3 class="text-xl font-bold text-sage-800">Technical Skills</h3> </div> <div class="flex flex-wrap gap-3"> ${profile.skills.technical.map((skill) => renderTemplate`<span class="flex items-center gap-2 px-3 py-1.5 bg-white border border-sage-200 text-charcoal/80 text-sm font-medium rounded-lg hover:border-sage-400 hover:text-sage-700 transition-colors cursor-default hover:shadow-sm"> ${skill.image && renderTemplate`<img${addAttribute(skill.image, "src")} alt="" class="w-4 h-4 object-contain">`} ${skill.name} </span>`)} </div> </div> <!-- Soft Skills --> <div class="bg-white p-8 rounded-2xl shadow-sm border border-cream-200"> <div class="flex items-center gap-3 mb-6 border-b border-cream-100 pb-4"> <div class="p-3 bg-sage-50 text-sage-600 rounded-lg"> ${renderComponent($$result, "Users", $$Users, { "class": "w-6 h-6" })} </div> <h3 class="text-xl font-bold text-sage-800">Soft Skills</h3> </div> <div class="flex flex-wrap gap-3"> ${profile.skills.soft.map((skill) => renderTemplate`<span class="flex items-center gap-2 px-3 py-1.5 bg-white border border-cream-300 text-charcoal/80 text-sm font-medium rounded-lg hover:border-sage-300 hover:text-sage-600 transition-colors cursor-default hover:shadow-sm"> ${skill.image && renderTemplate`<img${addAttribute(skill.image, "src")} alt="" class="w-4 h-4 object-contain">`} ${skill.name} </span>`)} </div> </div> </div> </div> </section>`;
}, "D:/Asli_Portfolio/src/components/sections/Skills.astro", void 0);

export { $$Skills as $ };
