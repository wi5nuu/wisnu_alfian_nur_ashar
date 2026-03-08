import { f as createComponent, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, o as renderSlot, r as renderTemplate, e as createAstro, k as renderComponent, n as renderScript, l as renderHead, p as defineScriptVars } from './astro/server_DLnuVie7.mjs';
import 'piccolore';
/* empty css                         */
import { p as profile } from './profile_CMplmx86.mjs';
import 'clsx';

const $$Astro$f = createAstro("https://wisnualfiannurashar.my.id");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro$e = createAstro("https://wisnualfiannurashar.my.id");
const $$Briefcase = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Briefcase;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "briefcase", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path> <rect width="20" height="14" x="2" y="6" rx="2"></rect> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Briefcase.astro", void 0);

const $$Astro$d = createAstro("https://wisnualfiannurashar.my.id");
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "external-link", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 3h6v6"></path> <path d="M10 14 21 3"></path> <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/ExternalLink.astro", void 0);

const $$Astro$c = createAstro("https://wisnualfiannurashar.my.id");
const $$FolderKanban = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$FolderKanban;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "folder-kanban", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path> <path d="M8 10v4"></path> <path d="M12 10v2"></path> <path d="M16 10v6"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/FolderKanban.astro", void 0);

const $$Astro$b = createAstro("https://wisnualfiannurashar.my.id");
const $$Github = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Github;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "github", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path> <path d="M9 18c-4.51 2-5-2-7-2"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Github.astro", void 0);

const $$Astro$a = createAstro("https://wisnualfiannurashar.my.id");
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "instagram", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Instagram.astro", void 0);

const $$Astro$9 = createAstro("https://wisnualfiannurashar.my.id");
const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "linkedin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Linkedin.astro", void 0);

const $$Astro$8 = createAstro("https://wisnualfiannurashar.my.id");
const $$Mail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Mail;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "mail", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path> <rect x="2" y="4" width="20" height="16" rx="2"></rect> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Mail.astro", void 0);

const $$Astro$7 = createAstro("https://wisnualfiannurashar.my.id");
const $$MessageCircle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$MessageCircle;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "message-circle", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/MessageCircle.astro", void 0);

const $$Astro$6 = createAstro("https://wisnualfiannurashar.my.id");
const $$Send = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Send;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "send", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path> <path d="m21.854 2.147-10.94 10.939"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Send.astro", void 0);

const $$Astro$5 = createAstro("https://wisnualfiannurashar.my.id");
const $$Sparkles = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Sparkles;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "sparkles", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path> <path d="M20 2v4"></path> <path d="M22 4h-4"></path> <circle cx="4" cy="20" r="2"></circle> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Sparkles.astro", void 0);

const $$Astro$4 = createAstro("https://wisnualfiannurashar.my.id");
const $$User = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$User;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "user", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path> <circle cx="12" cy="7" r="4"></circle> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/User.astro", void 0);

const $$Astro$3 = createAstro("https://wisnualfiannurashar.my.id");
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "x", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/X.astro", void 0);

const $$AIChatBot = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="ai-chat-widget" class="z-[110] font-sans"> <button id="chat-toggle-desktop" class="hidden md:flex fixed bottom-6 right-6 group bg-slate-900 hover:bg-slate-800 text-white p-2 pr-4 pl-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 z-50 items-center gap-3 border border-slate-700/50" aria-label="Toggle AI Assistant"> <div class="relative"> <img src="/logo.png" alt="AI" class="w-10 h-10 rounded-full object-cover border-2 border-white/20"> <div class="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full animate-pulse border-2 border-slate-900"></div> </div> <div class="flex flex-col items-start"> <span class="text-sm font-bold text-white leading-tight">Wisnu's AI</span> <span class="text-[10px] text-slate-400 font-medium">Chat with me</span> </div> </button> <div id="chat-window" class="fixed bottom-28 md:bottom-24 right-4 left-4 md:left-auto md:right-6 w-auto md:w-[380px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/20 transform scale-95 opacity-0 pointer-events-none transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) origin-bottom-right overflow-hidden flex flex-col max-h-[60vh] md:max-h-[500px] z-[120]"> <div class="bg-slate-900/90 backdrop-blur-md p-4 flex items-center justify-between text-white shrink-0 relative overflow-hidden"> <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div> <div class="flex items-center gap-3 relative z-10"> <div class="relative"> <img src="/logo.png" alt="AI Avatar" class="w-10 h-10 rounded-full object-cover border-2 border-white/20 shadow-sm"> <div class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div> </div> <div> <h3 class="font-bold text-sm text-white">
Wisnu's Career Coach
</h3> <p class="text-[10px] text-blue-300 uppercase tracking-wider font-semibold">
Online
</p> </div> </div> <button id="chat-close" class="p-2 hover:bg-white/10 rounded-full transition-all duration-300 relative z-10 text-white/80 hover:text-white hover:rotate-90"> ${renderComponent($$result, "X", $$X, { "class": "w-5 h-5" })} </button> </div> <div id="chat-messages" class="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/30 h-[350px] scroll-smooth"> <div class="flex gap-3 animate-fade-in"> <img src="/logo.png" alt="AI" class="w-8 h-8 rounded-full object-cover border border-slate-200 shrink-0 shadow-sm"> <div class="bg-white p-3 rounded-2xl rounded-tl-sm shadow-[0_2px_10px_rgba(0,0,0,0.05)] border border-slate-100 text-sm text-slate-600 leading-relaxed">
Hi! I'm Wisnu's <strong>International Career Coach</strong>.
                    Ask me about his <strong>skills</strong>, <strong>projects</strong>, or how he's prepared for <strong>overseas work</strong>!
</div> </div> </div> <form id="chat-form" class="p-3 border-t border-slate-100 bg-white/80 backdrop-blur-md flex gap-2 shrink-0"> <input type="text" id="chat-input" placeholder="Ask about careers, projects..." class="flex-1 bg-slate-100/50 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-slate-900/5 focus:outline-none placeholder:text-slate-400 transition-all" autocomplete="off"> <button type="submit" class="p-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 disabled:opacity-50 active:scale-90 shadow-lg shadow-slate-900/10"> ${renderComponent($$result, "Send", $$Send, { "class": "w-4 h-4" })} </button> </form> </div> </div> ${renderScript($$result, "D:/Asli_Portfolio/src/components/AIChatBot.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Asli_Portfolio/src/components/AIChatBot.astro", void 0);

const $$Astro$2 = createAstro("https://wisnualfiannurashar.my.id");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Asli_Portfolio/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Asli_Portfolio/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://wisnualfiannurashar.my.id");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = profile.personalInfo.summary,
    url = "https://www.wisnualfiannurashar.my.id/"
  } = Astro2.props;
  const siteName = "Wisnu Alfian Nur Ashar | Senior Full-Stack Developer Portfolio";
  const image = `${url}wisnu_alfian_nur_ashar.jpeg`;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><!-- ================= BASIC ================= --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', " | ", '</title><meta name="description"', '><meta name="author"', '><meta name="robots" content="index, follow"><meta name="keywords" content="Wisnu Alfian Nur Ashar, Full-Stack Developer, President University, IT Specialist, Web Developer Bekasi, React Developer, Next.js Expert, Cybersecurity, Career Coach"><!-- ================= VIEW TRANSITIONS ================= -->', '<!-- ================= CANONICAL ================= --><link rel="canonical"', '><!-- ================= GOOGLE VERIFICATION ================= --><meta name="google-site-verification" content="EJ_C4tjJumyHkl6RwAdqafUs-zgyK2KjvQ6zTy1_LDQ"><!-- ================= THEME ================= --><meta name="theme-color" content="#0f172a"><!-- ================= OPEN GRAPH ================= --><meta property="og:type" content="website"><meta property="og:site_name"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:image:width" content="400"><meta property="og:image:height" content="400"><!-- ================= TWITTER ================= --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- ================= FAVICON & PWA ================= --><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><!-- ================= SECURITY (CSP) ================= --><meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com; 
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://api.web3forms.com https://challenges.cloudflare.com;
  font-src 'self';
  frame-src https://challenges.cloudflare.com;
"><script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer><\/script><!-- ================= SCHEMA PERSON ================= --><script type="application/ld+json">(function(){`, '\n      {\n        "@context": "https://schema.org",\n        "@type": "Person",\n        "name": profile.personalInfo.name,\n        "url": url,\n        "image": image,\n        "jobTitle": profile.personalInfo.role,\n        "description": profile.personalInfo.summary,\n        "address": {\n          "@type": "PostalAddress",\n          "addressLocality": "Kota Bekasi",\n          "addressRegion": "Jawa Barat",\n          "addressCountry": "ID"\n        },\n        "affiliation": {\n          "@type": "CollegeOrUniversity",\n          "name": profile.education.institution\n        },\n        "knowsAbout": [\n          ...profile.skills.technical.map(s => s.name),\n          ...profile.skills.soft.map(s => s.name)\n        ],\n        "sameAs": [\n          "https://linkedin.com/in/wisnu-alfian-nur-ashar-ba60a1310",\n          "https://github.com/wi5nuu"\n        ]\n      }\n    })();<\/script><!-- ================= SCHEMA WEBSITE ================= --><script type="application/ld+json">(function(){', '\n      {\n        "@context": "https://schema.org",\n        "@type": "WebSite",\n        "name": siteName,\n        "url": url,\n        "publisher": {\n          "@type": "Person",\n          "name": "Wisnu Alfian Nur Ashar"\n        }\n      }\n    })();<\/script><meta name="generator"', ">", '</head> <body class="bg-white text-slate-900 antialiased"> <div id="app" class="min-h-screen flex flex-col transition-colors duration-300"> ', " </div> <!-- ================= AI CHATBOT ================= --> ", " </body></html>"])), title, profile.personalInfo.name, addAttribute(description, "content"), addAttribute(profile.personalInfo.name, "content"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), addAttribute(url, "href"), addAttribute(siteName, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(url, "content"), addAttribute(image, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), defineScriptVars({ profile, url, image }), defineScriptVars({ siteName, url }), addAttribute(Astro2.generator, "content"), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "AIChatBot", $$AIChatBot, {}));
}, "D:/Asli_Portfolio/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://wisnualfiannurashar.my.id");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const navLinks = [
    { name: "About", href: "/about", icon: $$User },
    { name: "Exp.", href: "/experience", icon: $$Briefcase },
    { name: "Home", href: "/", isLogo: true },
    { name: "AI", href: "#", icon: $$Sparkles, isAI: true },
    { name: "Projects", href: "/projects", icon: $$FolderKanban }
  ];
  const pathname = new URL(Astro2.request.url).pathname;
  return renderTemplate`${maybeRenderHead()}<header class="hidden md:block fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100" data-astro-cid-3ef6ksr2> <div class="container-custom flex items-center justify-between h-20" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center gap-2" data-astro-cid-3ef6ksr2> <img src="/logo.png" alt="Logo" class="w-8 h-8 object-contain" data-astro-cid-3ef6ksr2> <span class="text-xl font-bold text-slate-900 tracking-tight" data-astro-cid-3ef6ksr2>Wisnu Alfian Nur Ashar<span class="text-slate-400" data-astro-cid-3ef6ksr2>.</span></span> </a> <nav class="flex items-center gap-8" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => !link.isLogo && !link.isAI && renderTemplate`<a${addAttribute(link.href, "href")}${addAttribute(`text-sm font-medium transition-all ${pathname === link.href ? "text-slate-900 font-bold" : "text-slate-400 hover:text-slate-900"}`, "class")} data-astro-cid-3ef6ksr2> ${link.name} </a>`)} <a href="/contact" class="border border-slate-900 text-slate-900 px-5 py-2 rounded-full text-sm hover:bg-slate-900 hover:text-white transition-all" data-astro-cid-3ef6ksr2>
Contact
</a> </nav> </div> </header> <div class="md:hidden fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-slate-50" data-astro-cid-3ef6ksr2> <a href="/" class="flex items-center gap-2" data-astro-cid-3ef6ksr2> <img src="/logo.png" alt="Logo" class="w-7 h-7 object-contain" data-astro-cid-3ef6ksr2> <span class="text-lg font-bold text-slate-900 tracking-tight" data-astro-cid-3ef6ksr2>Wisnu<span class="text-slate-400" data-astro-cid-3ef6ksr2></span>Alfian Nur Ashar</span> </a> <a href="/contact" class="text-slate-900 p-2 active:scale-95 transition-transform bg-slate-50 rounded-full" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Mail", $$Mail, { "size": 18, "data-astro-cid-3ef6ksr2": true })} </a> </div> <div class="md:hidden fixed bottom-8 left-0 w-full px-6 z-[100]" data-astro-cid-3ef6ksr2> <nav class="mx-auto max-w-[380px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 rounded-[2.5rem] px-2 py-2" data-astro-cid-3ef6ksr2> <div class="flex items-center justify-around" data-astro-cid-3ef6ksr2> ${navLinks.map((link) => {
    const isActive = link.href === pathname;
    const LinkIcon = link.icon;
    if (link.isLogo) {
      return renderTemplate`<a href="/" class="relative -translate-y-8 transition-transform active:scale-95" data-astro-cid-3ef6ksr2> <div class="w-16 h-16 bg-white rounded-full p-1 shadow-xl border border-slate-100 flex items-center justify-center" data-astro-cid-3ef6ksr2> <img src="/logo.png" alt="Home" class="w-full h-full object-cover rounded-full" data-astro-cid-3ef6ksr2> </div> </a>`;
    }
    if (link.isAI) {
      return renderTemplate`<button id="mobile-ai-trigger" class="flex flex-col items-center py-2 min-w-[50px] transition-transform active:scale-95 cursor-pointer" data-astro-cid-3ef6ksr2> <div class="text-blue-500" data-astro-cid-3ef6ksr2> ${LinkIcon && renderTemplate`${renderComponent($$result, "LinkIcon", LinkIcon, { "size": 22, "strokeWidth": 2.5, "data-astro-cid-3ef6ksr2": true })}`} </div> <span class="text-[9px] mt-1 font-bold text-blue-600 uppercase tracking-wider" data-astro-cid-3ef6ksr2> ${link.name} </span> </button>`;
    }
    return renderTemplate`<a${addAttribute(link.href, "href")} class="flex flex-col items-center py-2 min-w-[50px] transition-transform active:scale-95" data-astro-cid-3ef6ksr2> <div${addAttribute(`transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-300"}`, "class")} data-astro-cid-3ef6ksr2> ${LinkIcon && renderTemplate`${renderComponent($$result, "LinkIcon", LinkIcon, { "size": 22, "strokeWidth": isActive ? 2.5 : 1.8, "data-astro-cid-3ef6ksr2": true })}`} </div> <span${addAttribute(`text-[9px] mt-1 font-semibold uppercase tracking-wider transition-colors ${isActive ? "text-slate-900" : "text-slate-300"}`, "class")} data-astro-cid-3ef6ksr2> ${link.name} </span> </a>`;
  })} </div> </nav> </div> ${renderComponent($$result, "AIChatBot", $$AIChatBot, { "data-astro-cid-3ef6ksr2": true })} `;
}, "D:/Asli_Portfolio/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];
  const socials = [
    { icon: $$Github, href: profile.personalInfo.github, label: "GitHub" },
    { icon: $$Linkedin, href: profile.personalInfo.linkedin, label: "LinkedIn" },
    { icon: $$Instagram, href: profile.personalInfo.instagram, label: "Instagram" },
    { icon: $$MessageCircle, href: profile.personalInfo.line, label: "Line" },
    { icon: $$Mail, href: `mailto:${profile.personalInfo.email}`, label: "Email" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="relative bg-sage-950 text-white pt-20 pb-10 overflow-hidden"> <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sage-500/50 to-transparent"></div> <div class="absolute -top-24 -left-24 w-96 h-96 bg-sage-500/5 rounded-full blur-[100px]"></div> <div class="container-custom relative z-10"> <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16"> <div class="md:col-span-5 space-y-6 text-center md:text-left"> <div> <h2 class="text-2xl font-serif font-bold tracking-tight mb-3">
Wisnu Alfian Nur Ashar<span class="text-sage-400">.</span> </h2> <p class="text-sage-300/80 max-w-sm leading-relaxed text-sm"> ${profile.personalInfo.tagline} </p> </div> <div class="flex justify-center md:justify-start gap-4"> ${socials.map((social) => renderTemplate`<a${addAttribute(social.href, "href")} target="_blank" rel="noopener noreferrer" class="group p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"${addAttribute(social.label, "aria-label")}> ${renderComponent($$result, "social.icon", social.icon, { "class": "w-5 h-5 text-sage-300 group-hover:text-white transition-colors" })} </a>`)} </div> </div> <div class="md:col-span-3 text-center md:text-left"> <h3 class="text-xs uppercase tracking-[0.2em] font-bold text-sage-500 mb-6">
Navigation
</h3> <ul class="space-y-4"> ${navLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sage-300 hover:text-white transition-all hover:pl-2 text-sm"> ${link.name} </a> </li>`)} </ul> </div> <div class="md:col-span-4 text-center md:text-left"> <h3 class="text-xs uppercase tracking-[0.2em] font-bold text-sage-500 mb-6">
Current Status
</h3> <div class="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"> <div class="flex items-center gap-3 mb-3 justify-center md:justify-start"> <span class="relative flex h-2 w-2"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span> </span> <span class="text-sm font-medium text-sage-100">Available for Projects</span> </div> <p class="text-xs text-sage-400 leading-relaxed mb-4">
I'm currently looking for new opportunities and collaborations in
            Web Dev & Cyber Security.
</p> <a${addAttribute(`mailto:${profile.personalInfo.email}`, "href")} class="inline-flex items-center text-xs font-bold text-white group">
START A CONVERSATION
${renderComponent($$result, "ExternalLink", $$ExternalLink, { "class": "w-3 h-3 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" })} </a> </div> </div> </div> <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-sage-500 font-bold"> <p>
&copy; ${currentYear} — Designed & Coded by Wisnu Alfian Nur Ashar
</p> <div class="flex gap-6"> <span class="hover:text-sage-300 transition-colors cursor-default underline decoration-sage-800 underline-offset-4">Bekasi, Indonesia</span> </div> </div> </div> </footer>`;
}, "D:/Asli_Portfolio/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b, $$ as c, $$Send as d, $$Linkedin as e, $$Instagram as f, $$MessageCircle as g, $$Mail as h, $$Briefcase as i, $$ExternalLink as j, $$Github as k };
