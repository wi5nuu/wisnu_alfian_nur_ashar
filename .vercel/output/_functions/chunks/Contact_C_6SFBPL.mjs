import { f as createComponent, k as renderComponent, r as renderTemplate, e as createAstro, m as maybeRenderHead, h as addAttribute } from './astro/server_DLnuVie7.mjs';
import 'piccolore';
import { p as profile } from './profile_CMplmx86.mjs';
import { c as $$, d as $$Send, e as $$Linkedin, f as $$Instagram, g as $$MessageCircle, h as $$Mail } from './Footer_DfGrSm-u.mjs';

const $$Astro$2 = createAstro("https://wisnualfiannurashar.my.id");
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "facebook", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Facebook.astro", void 0);

const $$Astro$1 = createAstro("https://wisnualfiannurashar.my.id");
const $$Globe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Globe;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "globe", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path> <path d="M2 12h20"></path> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/Globe.astro", void 0);

const $$Astro = createAstro("https://wisnualfiannurashar.my.id");
const $$MapPin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MapPin;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "map-pin", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path> <circle cx="12" cy="10" r="3"></circle> ` })}`;
}, "D:/Asli_Portfolio/node_modules/lucide-astro/dist/MapPin.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    { icon: $$Linkedin, href: profile.personalInfo.linkedin, label: "LinkedIn" },
    { icon: $$Instagram, href: profile.personalInfo.instagram, label: "Instagram" },
    { icon: $$Facebook, href: profile.personalInfo.facebook, label: "Facebook" },
    { icon: $$MessageCircle, href: profile.personalInfo.line, label: "Line" },
    { icon: $$Globe, href: profile.personalInfo.website, label: "Website" }
  ];
  return renderTemplate(_a || (_a = __template(["", `<section id="contact" class="section py-20 bg-sage-50"> <div class="container-custom px-4"> <div class="max-w-6xl mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[650px] border border-white"> <div class="relative w-full md:w-5/12 bg-sage-900 text-white p-10 md:p-14 flex flex-col justify-between overflow-hidden"> <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div> <div class="relative z-10"> <h2 class="text-3xl md:text-4xl font-serif font-bold mb-6">
Let's Connect
</h2> <p class="text-sage-200 leading-relaxed font-light mb-8">
Open for opportunities. Feel free to reach out for collaborations or
            just a friendly hello.
</p> <div class="space-y-6"> <div class="flex items-center gap-4 text-sage-300"> `, ' <p class="text-white text-sm font-medium"> ', ' </p> </div> <div class="flex items-center gap-4 text-sage-300"> ', ' <p class="text-white text-sm font-medium"> ', ' </p> </div> </div> </div> <div class="relative z-10 mt-12"> <p class="text-xs text-sage-400 mb-4 uppercase tracking-widest font-bold">\nSocial Media\n</p> <div class="flex flex-wrap gap-3"> ', ' </div> </div> </div> <div class="w-full md:w-7/12 bg-white p-10 md:p-14 relative text-left"> <div class="max-w-md mx-auto relative z-10"> <h3 class="text-2xl font-bold text-sage-900 mb-2">Send Message</h3> <p class="text-gray-500 mb-8 text-sm">\nProtected by Cloudflare Turnstile.\n</p> <form id="contact-form" action="https://api.web3forms.com/submit" method="POST" class="space-y-5"> <input type="hidden" name="access_key" value="06fc49f0-58b2-493d-a3ae-cc560f16ef98"> <input type="hidden" name="subject" value="New Submission from Portfolio"> <input type="checkbox" name="botcheck" class="hidden" style="display: none;"> <div> <label class="block text-[11px] font-bold text-sage-900 uppercase tracking-wider mb-2">Full Name</label> <input type="text" name="name" required placeholder="Wisnu Alfian" class="w-full px-5 py-4 bg-sage-50/50 border border-sage-100 rounded-2xl focus:ring-2 focus:ring-sage-900/5 focus:border-sage-900 outline-none transition-all text-sm"> </div> <div> <label class="block text-[11px] font-bold text-sage-900 uppercase tracking-wider mb-2">Email Address</label> <input type="email" name="email" required placeholder="wisnu@example.com" class="w-full px-5 py-4 bg-sage-50/50 border border-sage-100 rounded-2xl focus:ring-2 focus:ring-sage-900/5 focus:border-sage-900 outline-none transition-all text-sm"> </div> <div> <label class="block text-[11px] font-bold text-sage-900 uppercase tracking-wider mb-2">Message</label> <textarea name="message" required rows="4" placeholder="How can I help you?" class="w-full px-5 py-4 bg-sage-50/50 border border-sage-100 rounded-2xl focus:ring-2 focus:ring-sage-900/5 focus:border-sage-900 outline-none transition-all text-sm resize-none"></textarea> </div> <div class="cf-turnstile" data-sitekey="0x4AAAAAACYi6BqMN6f46h-z" data-theme="light"></div> <button type="submit" id="submit-btn" class="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-sage-900 text-white rounded-2xl font-bold text-sm shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"> <span id="btn-text">Send Message</span> ', ' </button> <p id="response-msg" class="text-center text-sm font-medium mt-4 hidden"></p> </form> </div> </div> </div> </div> </section> <script>\n  const form = document.getElementById("contact-form");\n  const btn = document.getElementById("submit-btn");\n  const btnText = document.getElementById("btn-text");\n  const responseMsg = document.getElementById("response-msg");\n\n  form.addEventListener("submit", function (e) {\n    e.preventDefault();\n\n    responseMsg.classList.add("hidden");\n    btn.disabled = true;\n    btnText.innerText = "Sending...";\n\n    const formData = new FormData(form);\n\n    // HAPUS data turnstile agar Web3Forms tidak mengira kita pakai fitur Pro\n    formData.delete("cf-turnstile-response");\n\n    const object = Object.fromEntries(formData);\n    const json = JSON.stringify(object);\n\n    fetch("https://api.web3forms.com/submit", {\n      method: "POST",\n      headers: {\n        "Content-Type": "application/json",\n        Accept: "application/json",\n      },\n      body: json,\n    })\n      .then(async (response) => {\n        if (response.status == 200) {\n          responseMsg.className =\n            "text-center text-sm font-medium mt-4 text-green-600";\n          responseMsg.innerText =\n            "Pesan berhasil terkirim! Saya akan segera menghubungi Anda.";\n          form.reset();\n        } else {\n          responseMsg.className =\n            "text-center text-sm font-medium mt-4 text-red-500";\n          responseMsg.innerText = "Terjadi kesalahan, silakan coba lagi.";\n        }\n      })\n      .catch((error) => {\n        responseMsg.className =\n          "text-center text-sm font-medium mt-4 text-red-500";\n        responseMsg.innerText = "Gagal terhubung ke server.";\n      })\n      .finally(() => {\n        responseMsg.classList.remove("hidden");\n        btn.disabled = false;\n        btnText.innerText = "Send Message";\n      });\n  });\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Mail", $$Mail, { "class": "w-5 h-5" }), profile.personalInfo.email, renderComponent($$result, "MapPin", $$MapPin, { "class": "w-5 h-5" }), profile.personalInfo.location, socialLinks.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} target="_blank" class="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-sage-300 hover:bg-white hover:text-sage-900 transition-all duration-300"> ${renderComponent($$result, "item.icon", item.icon, { "class": "w-4 h-4" })} </a>`), renderComponent($$result, "Send", $$Send, { "class": "w-4 h-4" }));
}, "D:/Asli_Portfolio/src/components/sections/Contact.astro", void 0);

export { $$Contact as $ };
