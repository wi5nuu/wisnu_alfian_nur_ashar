import { f as createComponent, k as renderComponent, r as renderTemplate, e as createAstro, m as maybeRenderHead, h as addAttribute, n as renderScript } from './astro/server_DLnuVie7.mjs';
import 'piccolore';
import { p as profile } from './profile_CMplmx86.mjs';
/* empty css                              */
import { c as $$, i as $$Briefcase } from './Footer_DfGrSm-u.mjs';

const $$Astro = createAstro("https://wisnualfiannurashar.my.id");
const $$Calendar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Calendar;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "calendar", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M8 2v4"></path> <path d="M16 2v4"></path> <rect width="18" height="18" x="3" y="4" rx="2"></rect> <path d="M3 10h18"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Calendar.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="section bg-gradient-to-b from-white to-sage-50 relative overflow-hidden py-24" data-astro-cid-ghubstuj> <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none" data-astro-cid-ghubstuj> <div class="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-sage-200/20 rounded-full blur-[100px]" data-astro-cid-ghubstuj></div> <div class="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[80px]" data-astro-cid-ghubstuj></div> </div> <div class="container-custom relative z-10" data-astro-cid-ghubstuj> <div class="text-center mb-16 md:mb-24 reveal" data-astro-cid-ghubstuj> <div class="inline-flex items-center justify-center p-3 bg-sage-100 rounded-2xl mb-4 text-sage-600" data-astro-cid-ghubstuj> ${renderComponent($$result, "Briefcase", $$Briefcase, { "class": "w-6 h-6", "data-astro-cid-ghubstuj": true })} </div> <h2 class="text-3xl md:text-5xl font-serif font-bold text-sage-900 mb-6 tracking-tight" data-astro-cid-ghubstuj>
Work Experience
</h2> <p class="text-charcoal/70 max-w-2xl mx-auto text-lg leading-relaxed" data-astro-cid-ghubstuj>
My professional journey transforming ideas into production-grade
        software solutions.
</p> </div> <div class="relative max-w-6xl mx-auto" data-astro-cid-ghubstuj> <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-sage-200 via-sage-300 to-transparent rounded-full z-0 reveal-line" data-astro-cid-ghubstuj></div> <div class="space-y-12 md:space-y-0" data-astro-cid-ghubstuj> ${profile.experience.map((exp, index) => {
    const isEven = index % 2 === 0;
    const revealClass = isEven ? "reveal-right" : "reveal-left";
    return renderTemplate`<div${addAttribute(`relative flex flex-col md:flex-row items-center w-full md:mb-12 last:mb-0 group ${isEven ? "md:flex-row-reverse" : ""}`, "class")} data-astro-cid-ghubstuj> <div class="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-sage-500 shadow-[0_0_0_4px_rgba(255,255,255,1)] z-20 transition-transform duration-300 group-hover:scale-125 group-hover:border-sage-600 reveal" data-astro-cid-ghubstuj> <div class="w-2 h-2 bg-sage-600 rounded-full animate-pulse" data-astro-cid-ghubstuj></div> </div> <div class="hidden md:block md:w-1/2" data-astro-cid-ghubstuj></div> <div${addAttribute(`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"} ${revealClass}`, "class")} data-astro-cid-ghubstuj> <div${addAttribute(`
                    relative bg-white p-6 md:p-8 rounded-2xl 
                    border border-white/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] 
                    transition-all duration-500 ease-out
                    hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
                    hover:border-sage-200
                    text-left
                    ${isEven ? "md:text-right" : "md:text-left"} 
                  `, "class")} data-astro-cid-ghubstuj> <div${addAttribute(`
                      hidden md:block absolute top-9 h-[2px] w-16 bg-sage-200 
                      transition-all duration-500 group-hover:bg-sage-400
                      ${isEven ? "-right-16 rounded-r-full" : "-left-16 rounded-l-full"}
                  `, "class")} data-astro-cid-ghubstuj> <div${addAttribute(`absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-sage-300 rounded-full ${isEven ? "left-0" : "right-0"}`, "class")} data-astro-cid-ghubstuj></div> </div> <div${addAttribute(`flex flex-col gap-1 mb-4 ${isEven ? "md:items-end" : "md:items-start"}`, "class")} data-astro-cid-ghubstuj> <h3 class="text-xl md:text-2xl font-bold text-sage-900 group-hover:text-sage-600 transition-colors" data-astro-cid-ghubstuj> ${exp.role} </h3> <div${addAttribute(`flex flex-wrap items-center gap-2 md:gap-3 ${isEven ? "md:flex-row-reverse" : ""}`, "class")} data-astro-cid-ghubstuj> <span class="text-lg font-medium text-sage-700" data-astro-cid-ghubstuj> ${exp.company} </span> <span class="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-sage-300" data-astro-cid-ghubstuj></span> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sage-50 text-sage-600 border border-sage-100" data-astro-cid-ghubstuj> ${exp.type} </span> </div> </div> <div${addAttribute(`flex items-center gap-2 text-sm text-sage-500 mb-6 font-medium ${isEven ? "md:justify-end" : "md:justify-start"}`, "class")} data-astro-cid-ghubstuj> ${renderComponent($$result, "Calendar", $$Calendar, { "class": "w-4 h-4", "data-astro-cid-ghubstuj": true })} <span data-astro-cid-ghubstuj>${exp.duration}</span> </div> <p class="text-charcoal/80 mb-6 leading-relaxed text-sm md:text-base" data-astro-cid-ghubstuj> ${exp.description} </p> <div${addAttribute(`flex flex-wrap gap-2 ${isEven ? "justify-start md:justify-end" : "justify-start"}`, "class")} data-astro-cid-ghubstuj> ${exp.skills.map((skill) => renderTemplate`<span class="px-3 py-1.5 bg-cream-100/80 text-sage-800 text-xs font-semibold rounded-lg border border-transparent hover:border-sage-200 hover:bg-white transition-colors duration-300" data-astro-cid-ghubstuj> ${skill} </span>`)} </div> </div> </div> </div>`;
  })} </div> </div> </div> </section>  ${renderScript($$result, "D:/Asli_Portfolio/src/components/sections/Experience.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Asli_Portfolio/src/components/sections/Experience.astro", void 0);

export { $$Experience as $ };
