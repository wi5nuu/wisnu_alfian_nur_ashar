// FAQ shown on the home page + emitted as FAQPage JSON-LD. Every answer mirrors src/data/profile*.ts.

export interface QA { q: string; a: string }

export const faq: Record<'en' | 'id', { title: [string, string]; badge: string; items: QA[] }> = {
  en: {
    badge: 'FAQ',
    title: ['Quick answers about', 'Wisnu Alfian Nur Ashar'],
    items: [
      {
        q: 'Who is Wisnu Alfian Nur Ashar?',
        a: 'Wisnu is an Information Technology undergraduate at President University (Bekasi, Indonesia) who works as a Full-Stack Engineer across cyber security, AI, software engineering and DevOps, with 3,300+ GitHub contributions across 100+ repositories.',
      },
      {
        q: 'What does Wisnu do in cyber security?',
        a: 'External and internal penetration testing with structured vulnerability reporting. He is an OWASP Foundation member, contributes security fixes to open source (OWASP, NVIDIA) and builds applications with RBAC, JWT and zero-trust principles.',
      },
      {
        q: 'Which technologies does Wisnu use?',
        a: 'Laravel, Next.js, React, TypeScript, Go, Python, ASP.NET and PostgreSQL for software; YOLOv8, OpenCV, FastAPI and Google Gemini for AI; Docker, Cloudflare, Vercel, Railway and Google Cloud Run for DevOps and cloud.',
      },
      {
        q: 'What production systems has Wisnu built?',
        a: 'An ERP/POS platform and e-commerce site for Ashar Grosir Parfum Bekasi that serves thousands of customers (1.34 s load time, 91% good LCP via Cloudflare CDN), plus projects such as SENTINEL-X (threat intelligence), CogniMail (email security), ColonyAI (YOLOv8 colony counting) and Shooply (Go + Next.js microservices).',
      },
      {
        q: 'Which open-source projects has Wisnu contributed to?',
        a: 'Bug reports and fixes for NASA (TrickHLA), Microsoft (MSTest, Keyborg), NVIDIA, the OWASP Cheat Sheet Series, Hugging Face, Google (Site Kit, Agent Skills) and the ADK ecosystem.',
      },
      {
        q: 'Is Wisnu available for internships or work?',
        a: 'Yes — he is open to internships, full-time roles and freelance projects, including remote work. His most recent role was a Web Development Internship at GAOTEK INC (remote, New York, April–July 2026).',
      },
      {
        q: 'How can I contact Wisnu?',
        a: 'Use the contact page on this website, email wisnualfiannurashar@gmail.com, or reach out on LinkedIn (wisnu-alfian-nur-ashar) and GitHub (wi5nuu).',
      },
    ],
  },
  id: {
    badge: 'FAQ',
    title: ['Jawaban singkat tentang', 'Wisnu Alfian Nur Ashar'],
    items: [
      {
        q: 'Siapa Wisnu Alfian Nur Ashar?',
        a: 'Wisnu adalah mahasiswa Teknologi Informasi President University (Bekasi, Indonesia) yang bekerja sebagai Full-Stack Engineer di bidang cyber security, AI, software engineering, dan DevOps, dengan 3.300+ kontribusi GitHub di 100+ repositori.',
      },
      {
        q: 'Apa yang dikerjakan Wisnu di bidang cyber security?',
        a: 'Penetration testing eksternal dan internal dengan pelaporan kerentanan yang terstruktur. Ia anggota OWASP Foundation, mengirim perbaikan keamanan ke open source (OWASP, NVIDIA), dan membangun aplikasi dengan prinsip RBAC, JWT, dan zero-trust.',
      },
      {
        q: 'Teknologi apa yang dipakai Wisnu?',
        a: 'Laravel, Next.js, React, TypeScript, Go, Python, ASP.NET, dan PostgreSQL untuk software; YOLOv8, OpenCV, FastAPI, dan Google Gemini untuk AI; Docker, Cloudflare, Vercel, Railway, dan Google Cloud Run untuk DevOps dan cloud.',
      },
      {
        q: 'Sistem produksi apa yang pernah dibangun Wisnu?',
        a: 'Platform ERP/POS dan website e-commerce Ashar Grosir Parfum Bekasi yang melayani ribuan pelanggan (waktu muat 1,34 detik, 91% LCP baik via Cloudflare CDN), serta proyek seperti SENTINEL-X (threat intelligence), CogniMail (keamanan email), ColonyAI (penghitung koloni dengan YOLOv8), dan Shooply (microservices Go + Next.js).',
      },
      {
        q: 'Ke proyek open-source mana saja Wisnu berkontribusi?',
        a: 'Laporan bug dan perbaikan untuk NASA (TrickHLA), Microsoft (MSTest, Keyborg), NVIDIA, OWASP Cheat Sheet Series, Hugging Face, Google (Site Kit, Agent Skills), dan ekosistem ADK.',
      },
      {
        q: 'Apakah Wisnu tersedia untuk magang atau bekerja?',
        a: 'Ya — ia terbuka untuk magang, posisi full-time, dan proyek freelance, termasuk remote. Peran terbarunya adalah Web Development Intern di GAOTEK INC (remote, New York, April–Juli 2026).',
      },
      {
        q: 'Bagaimana cara menghubungi Wisnu?',
        a: 'Gunakan halaman kontak di website ini, kirim email ke wisnualfiannurashar@gmail.com, atau hubungi lewat LinkedIn (wisnu-alfian-nur-ashar) dan GitHub (wi5nuu).',
      },
    ],
  },
};

export function faqJsonLd(lang: 'en' | 'id') {
  return {
    '@type': 'FAQPage',
    mainEntity: faq[lang].items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}
