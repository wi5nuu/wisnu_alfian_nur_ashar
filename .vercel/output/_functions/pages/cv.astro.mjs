import { e as createAstro, f as createComponent, l as renderHead, h as addAttribute, r as renderTemplate } from '../chunks/astro/server_DLnuVie7.mjs';
import 'piccolore';
import 'clsx';
import { p as profile } from '../chunks/profile_CMplmx86.mjs';
/* empty css                              */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://wisnualfiannurashar.my.id");
const $$Cv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cv;
  const { name, location, phone, email, linkedin, github, website } = profile.personalInfo;
  return renderTemplate`<html lang="en" data-astro-cid-zuwcdr5b> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Wisnu_Alfian_Nur_Ashar_CV</title>${renderHead()}</head> <body data-astro-cid-zuwcdr5b> <button class="dl-btn no-print" onclick="window.print()" data-astro-cid-zuwcdr5b>⬇ Download PDF</button> <div class="page" style="position: relative;" data-astro-cid-zuwcdr5b> <!-- ── HEADER ── --> <h1 data-astro-cid-zuwcdr5b>${name}</h1> <div class="contact-top" data-astro-cid-zuwcdr5b> ${location} &nbsp;|&nbsp; ${phone} &nbsp;|&nbsp;
<a${addAttribute(`mailto:${email}`, "href")} data-astro-cid-zuwcdr5b>${email}</a> </div> <div class="contact-links" data-astro-cid-zuwcdr5b> <a${addAttribute(linkedin, "href")} data-astro-cid-zuwcdr5b>${linkedin.replace("https://", "")}</a> &nbsp;|&nbsp;
<a${addAttribute(github, "href")} data-astro-cid-zuwcdr5b>${github.replace("https://", "")}</a> &nbsp;|&nbsp;
<a${addAttribute(website, "href")} data-astro-cid-zuwcdr5b>${website.replace("https://", "")}</a> </div> <!-- ── SUMMARY ── --> <p class="summary" data-astro-cid-zuwcdr5b>
Full-Stack Developer & Cyber Security practitioner with
                production experience building scalable web applications.
                Specialized in Next.js, React, Supabase, and secure system
                design. Delivered platforms supporting 15,000+ users with
                measurable performance and security improvements. Experienced in
                leading cross-functional teams to modernize digital
                infrastructure and streamline business operations.
</p> <!-- ── TECHNICAL SKILLS (ATS Categorized) ── --> <div class="section" data-astro-cid-zuwcdr5b>Technical Skills</div> <div class="skill-row" data-astro-cid-zuwcdr5b> <strong data-astro-cid-zuwcdr5b>Programming Languages:</strong> Python, Java, PHP, JavaScript
                (ES2024), TypeScript, Astro
</div> <div class="skill-row" data-astro-cid-zuwcdr5b> <strong data-astro-cid-zuwcdr5b>Frameworks &amp; Libraries:</strong> React 19, Next.js 16,
                Astro, Tailwind CSS, shadcn/ui, Framer Motion, GSAP
</div> <div class="skill-row" data-astro-cid-zuwcdr5b> <strong data-astro-cid-zuwcdr5b>Backend &amp; Databases:</strong> Node.js, Supabase, PostgreSQL,
                MySQL, MongoDB, Redis, RESTful APIs
</div> <div class="skill-row" data-astro-cid-zuwcdr5b> <strong data-astro-cid-zuwcdr5b>Cloud, Tools &amp; Security:</strong> Vercel, Cloudflare,
                Kali Linux, Android Studio, Git, JWT, TLS 1.3, ISO 27001
</div> <!-- ── PROJECTS (Curated Top 4) ── --> <div class="section" data-astro-cid-zuwcdr5b>Selected Projects</div> <div class="item" data-astro-cid-zuwcdr5b> <div class="item-title-row" data-astro-cid-zuwcdr5b> <span class="item-title" data-astro-cid-zuwcdr5b>Ashar Grosir Parfum — Full-Stack Developer</span> <span class="item-date" data-astro-cid-zuwcdr5b>December 2025 – Present</span> </div> <ul class="bullets" data-astro-cid-zuwcdr5b> <li data-astro-cid-zuwcdr5b>
Built B2B e-commerce platform for a 20-year-old
                        wholesaler, serving 15,000+ partners with 500+ daily
                        orders.
</li> <li data-astro-cid-zuwcdr5b>
Achieved 96/100 Lighthouse score and 1.9s LCP via ISR
                        and Redis; secured platform with TLS 1.3, JWT, and
                        bcrypt.
</li> <li data-astro-cid-zuwcdr5b>
Automated manual workflows, reducing order processing
                        time by 60% and minimizing operational errors.
</li> </ul> </div> <div class="item" data-astro-cid-zuwcdr5b> <div class="item-title-row" data-astro-cid-zuwcdr5b> <span class="item-title" data-astro-cid-zuwcdr5b>Risk Shield System — Lead Developer / Cyber Security</span> <span class="item-date" data-astro-cid-zuwcdr5b>February 2026 – Present</span> </div> <ul class="bullets" data-astro-cid-zuwcdr5b> <li data-astro-cid-zuwcdr5b>
Architected an AI-assisted GRC platform automating the
                        OCTAVE Allegro methodology, reducing audit time by 70%.
</li> <li data-astro-cid-zuwcdr5b>
Integrated Google Gemini Pro for prescriptive
                        remediation mapped to ISO 27001 and NIST security
                        controls.
</li> <li data-astro-cid-zuwcdr5b>
Implemented granular RBAC and middleware-based
                        protection for sensitive enterprise compliance data.
</li> </ul> </div> <div class="item" data-astro-cid-zuwcdr5b> <div class="item-title-row" data-astro-cid-zuwcdr5b> <span class="item-title" data-astro-cid-zuwcdr5b>Human Firewall — Full-Stack Developer</span> <span class="item-date" data-astro-cid-zuwcdr5b>November 2025</span> </div> <ul class="bullets" data-astro-cid-zuwcdr5b> <li data-astro-cid-zuwcdr5b>
Engineered an enterprise cybersecurity awareness
                        platform featuring phishing simulations and real-time
                        analytics.
</li> <li data-astro-cid-zuwcdr5b>
Automated PDF certification generation upon learning
                        module completion, improving employee security
                        compliance.
</li> </ul> </div> <div class="item" data-astro-cid-zuwcdr5b> <div class="item-title-row" data-astro-cid-zuwcdr5b> <span class="item-title" data-astro-cid-zuwcdr5b>LexCorpus CMS Platform — Full-Stack Developer</span> <span class="item-date" data-astro-cid-zuwcdr5b>October 2025</span> </div> <ul class="bullets" data-astro-cid-zuwcdr5b> <li data-astro-cid-zuwcdr5b>
Developed a secure production CMS for a law firm using
                        Supabase SSR and role-based editorial workflows.
</li> <li data-astro-cid-zuwcdr5b>
Delivered a fully self-managed system with SEO-optimized
                        dynamic rendering on a strict production deadline.
</li> </ul> </div> <!-- ── EXPERIENCE & LEADERSHIP ── --> <div class="section" data-astro-cid-zuwcdr5b>Experience &amp; Leadership</div> <div class="item" data-astro-cid-zuwcdr5b> <div class="item-company" data-astro-cid-zuwcdr5b>Syntecxhub</div> <div class="item-title-row" data-astro-cid-zuwcdr5b> <span class="item-role" data-astro-cid-zuwcdr5b>Web Developer — Internship</span> <span class="item-date" data-astro-cid-zuwcdr5b>March 2026 – Present</span> </div> <ul class="bullets" data-astro-cid-zuwcdr5b> <li data-astro-cid-zuwcdr5b>
Developed and maintained remote web applications, utilizing modern web frameworks to deliver responsive and scalable front-end solutions.
</li> </ul> </div> <div class="item" data-astro-cid-zuwcdr5b> <div class="item-company" data-astro-cid-zuwcdr5b>
PUFA Computer Science, President University
</div> <div class="item-title-row" data-astro-cid-zuwcdr5b> <span class="item-role" data-astro-cid-zuwcdr5b>VoD Member — Art &amp; Sport Division</span> <span class="item-date" data-astro-cid-zuwcdr5b>September 2025 – Present</span> </div> <ul class="bullets" data-astro-cid-zuwcdr5b> <li data-astro-cid-zuwcdr5b>
Led a 50+ member cross-functional team to deliver
                        faculty-wide digital events and modernizing student
                        workflows.
</li> <li data-astro-cid-zuwcdr5b>
Coordinated digital logistics for large-scale faculty
                        events, improving organization efficiency and
                        participant reach.
</li> </ul> </div> <div class="item" data-astro-cid-zuwcdr5b> <div class="item-company" data-astro-cid-zuwcdr5b>PC FKMA Jakarta As'adiyah</div> <div class="item-title-row" data-astro-cid-zuwcdr5b> <span class="item-role" data-astro-cid-zuwcdr5b>IT Development &amp; Talent Division</span> <span class="item-date" data-astro-cid-zuwcdr5b>January 2024 – Present</span> </div> <ul class="bullets" data-astro-cid-zuwcdr5b> <li data-astro-cid-zuwcdr5b>
Architected and deployed the official organization
                        website, integrating automated alumni data management
                        systems.
</li> <li data-astro-cid-zuwcdr5b>
Spearheaded digital transition for member talent
                        tracking, improving workflow efficiency and member
                        engagement.
</li> </ul> </div> <!-- ── EDUCATION ── --> <div class="section" data-astro-cid-zuwcdr5b>Education</div> <div class="item" data-astro-cid-zuwcdr5b> <div class="edu-title-row" data-astro-cid-zuwcdr5b> <span data-astro-cid-zuwcdr5b>President University</span> <span class="item-date" data-astro-cid-zuwcdr5b>August 2024 – July 2027 (Expected)</span> </div> <div class="edu-degree" data-astro-cid-zuwcdr5b>
Bachelor of Information Technology; <strong data-astro-cid-zuwcdr5b>GPA: 3.54 / 4.00</strong> </div> <div class="edu-focus" data-astro-cid-zuwcdr5b>Concentration: Cyber Security</div> </div> <!-- ── CERTIFICATIONS ── --> <div class="section" data-astro-cid-zuwcdr5b>Certifications</div> <div class="awards-list" data-astro-cid-zuwcdr5b> ${profile.certifications.filter((c) => c.name !== "Google Ads Search Certification").map((cert) => renderTemplate`<div data-astro-cid-zuwcdr5b> <strong data-astro-cid-zuwcdr5b>${cert.name}</strong> — ${cert.issuer} (${cert.date})
</div>`)} </div> <!-- ── QR CODE ── --> <div class="qr-container" data-astro-cid-zuwcdr5b> <img${addAttribute(`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${website}`, "src")} alt="Portfolio QR Code" class="qr-code" data-astro-cid-zuwcdr5b> <span class="qr-label" data-astro-cid-zuwcdr5b>Scan for Portfolio</span> </div> </div> </body></html>`;
}, "D:/Asli_Portfolio/src/pages/cv.astro", void 0);

const $$file = "D:/Asli_Portfolio/src/pages/cv.astro";
const $$url = "/cv";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Cv,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
