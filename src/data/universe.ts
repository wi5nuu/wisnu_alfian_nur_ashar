// Copy for the interactive "Skill Universe" section (EN / ID).
// Every claim here mirrors src/data/profile*.ts — keep them in sync.

export type RealmId = 'cyber' | 'ai' | 'software' | 'devops';

interface RealmCopy {
  id: RealmId;
  label: string;
  title: string;
  blurb: string;
  game: string;
  mission: string;
  skills: string[];
  /** project titles (must exist in profile.projects) */
  proofs: string[];
}

interface UniverseCopy {
  badge: string;
  heading: [string, string];
  intro: string;
  hint: string;
  play: string;
  stop: string;
  retry: string;
  exit: string;
  explore: string;
  tilt: string;
  best: string;
  score: string;
  combo: string;
  enter: string;
  proof: string;
  skills: string;
  drag: string;
  noGl: string;
  realms: RealmCopy[];
}

export const universe: Record<'en' | 'id', UniverseCopy> = {
  en: {
    badge: 'Skill Universe',
    heading: ['Step inside', 'my skills'],
    intro:
      'Four realms, one engineer. Drag to orbit, tap to interact, and play a 30-second mission in each — every scene is rendered live in your browser.',
    hint: 'Drag to rotate · tap to interact',
    play: 'Play mission',
    stop: 'Stop',
    retry: 'Play again',
    exit: 'Exit',
    explore: 'Immersive',
    tilt: 'Tilt',
    best: 'Best',
    score: 'Score',
    combo: 'Combo',
    enter: 'Enter realm',
    proof: 'Built with it',
    skills: 'Toolkit',
    drag: 'Drag to look around',
    noGl: 'Your browser cannot run WebGL — the realms below describe the same skills.',
    realms: [
      {
        id: 'cyber',
        label: 'Cyber',
        title: 'Cyber Security',
        blurb:
          'External and internal penetration testing with structured vulnerability reporting. OWASP Foundation member who ships security fixes to open source (OWASP, NVIDIA) and hardens every app with RBAC, JWT and zero-trust thinking.',
        game: 'Firewall Defender',
        mission: 'Tap incoming packets before they breach the core.',
        skills: ['Penetration Testing', 'Kali Linux', 'Burp Suite', 'Zero-Trust Architecture', 'Cloud Security', 'OWASP'],
        proofs: ['SENTINEL-X', 'Human Firewall', 'Risk Shield System', 'Encrypted Messaging App'],
      },
      {
        id: 'ai',
        label: 'AI',
        title: 'AI Engineering',
        blurb:
          'Computer vision with YOLOv8 and OpenCV, LLM products on Gemini, Groq and NVIDIA APIs, retrieval-augmented generation and ML classifiers — served through FastAPI and shipped to production.',
        game: 'Neuron Chain',
        mission: 'Fire one neuron per layer, input → output, before time runs out.',
        skills: ['Claude Code', 'AI Agents', 'MCP', 'RAG', 'Google Gemini', 'FastAPI', 'YOLOv8', 'OpenCV', 'Hugging Face'],
        proofs: ['ColonyAI', 'CogniMail', 'Wanar AI v2.0', 'Grawizah'],
      },
      {
        id: 'software',
        label: 'Software',
        title: 'Software Engineering',
        blurb:
          'Full-stack systems end to end: Laravel, Next.js, Go and ASP.NET on PostgreSQL. An ERP/POS platform serving thousands of customers, 1.34 s load time and 91% good LCP, plus 3,300+ GitHub contributions.',
        game: 'Bug Hunt',
        mission: 'Patch the flashing services before they crash.',
        skills: ['Laravel', 'Next.js', 'TypeScript', 'Golang', 'PostgreSQL', 'Astro', 'WhatsApp Gateway', 'Email Gateway', 'Webhooks'],
        proofs: ['Ashar Grosir Parfum', 'Finance-Requester', 'Zentic Enterprise', 'Pulse'],
      },
      {
        id: 'devops',
        label: 'DevOps',
        title: 'DevOps & Cloud',
        blurb:
          'Containerised, observable and fast: Docker, Redis, RabbitMQ and OpenTelemetry behind Cloudflare CDN, deployed on Vercel, Railway and Google Cloud Run. Completed AWS Cloud Practitioner Essentials and AWS Technical Essentials training.',
        game: 'Release Train',
        mission: 'Tap when a container sits inside the glowing gate.',
        skills: ['Docker', 'Cloudflare', 'Firewall & WAF', 'Linux Server', 'Vercel', 'Railway', 'Google Cloud Run', 'AWS'],
        proofs: ['Shooply', 'Ashar Grosir Parfum', 'SENTINEL-X', 'Vanguard Strategic Hub'],
      },
    ],
  },
  id: {
    badge: 'Semesta Keahlian',
    heading: ['Masuk ke dalam', 'keahlian saya'],
    intro:
      'Empat dunia, satu engineer. Seret untuk memutar, ketuk untuk berinteraksi, dan mainkan misi 30 detik di tiap dunia — semuanya dirender langsung di browser Anda.',
    hint: 'Seret untuk memutar · ketuk untuk berinteraksi',
    play: 'Mainkan misi',
    stop: 'Berhenti',
    retry: 'Main lagi',
    exit: 'Keluar',
    explore: 'Layar penuh',
    tilt: 'Miring',
    best: 'Terbaik',
    score: 'Skor',
    combo: 'Kombo',
    enter: 'Masuk dunia',
    proof: 'Dibangun dengannya',
    skills: 'Perangkat',
    drag: 'Seret untuk melihat sekeliling',
    noGl: 'Browser Anda tidak mendukung WebGL — dunia di bawah menjelaskan keahlian yang sama.',
    realms: [
      {
        id: 'cyber',
        label: 'Cyber',
        title: 'Keamanan Siber',
        blurb:
          'Penetration testing eksternal dan internal dengan pelaporan kerentanan yang terstruktur. Anggota OWASP Foundation yang mengirim perbaikan keamanan ke open source (OWASP, NVIDIA) dan memperkuat setiap aplikasi dengan RBAC, JWT, dan pola pikir zero-trust.',
        game: 'Firewall Defender',
        mission: 'Ketuk paket yang datang sebelum menembus inti.',
        skills: ['Penetration Testing', 'Kali Linux', 'Burp Suite', 'Zero-Trust Architecture', 'Cloud Security', 'OWASP'],
        proofs: ['SENTINEL-X', 'Human Firewall', 'Risk Shield System', 'Encrypted Messaging App'],
      },
      {
        id: 'ai',
        label: 'AI',
        title: 'Rekayasa AI',
        blurb:
          'Computer vision dengan YOLOv8 dan OpenCV, produk LLM di atas API Gemini, Groq, dan NVIDIA, retrieval-augmented generation, serta klasifikator ML — disajikan lewat FastAPI dan dirilis ke produksi.',
        game: 'Neuron Chain',
        mission: 'Aktifkan satu neuron per lapisan, input → output, sebelum waktu habis.',
        skills: ['Claude Code', 'AI Agents', 'MCP', 'RAG', 'Google Gemini', 'FastAPI', 'YOLOv8', 'OpenCV', 'Hugging Face'],
        proofs: ['ColonyAI', 'CogniMail', 'Wanar AI v2.0', 'Grawizah'],
      },
      {
        id: 'software',
        label: 'Software',
        title: 'Rekayasa Perangkat Lunak',
        blurb:
          'Sistem full-stack dari hulu ke hilir: Laravel, Next.js, Go, dan ASP.NET di atas PostgreSQL. Platform ERP/POS yang melayani ribuan pelanggan, waktu muat 1,34 detik dan 91% LCP baik, plus 3.300+ kontribusi GitHub.',
        game: 'Bug Hunt',
        mission: 'Perbaiki layanan yang berkedip sebelum crash.',
        skills: ['Laravel', 'Next.js', 'TypeScript', 'Golang', 'PostgreSQL', 'Astro', 'WhatsApp Gateway', 'Email Gateway', 'Webhooks'],
        proofs: ['Ashar Grosir Parfum', 'Finance-Requester', 'Zentic Enterprise', 'Pulse'],
      },
      {
        id: 'devops',
        label: 'DevOps',
        title: 'DevOps & Cloud',
        blurb:
          'Terkontainerisasi, terpantau, dan cepat: Docker, Redis, RabbitMQ, dan OpenTelemetry di balik Cloudflare CDN, dideploy di Vercel, Railway, dan Google Cloud Run. Telah menyelesaikan pelatihan AWS Cloud Practitioner Essentials dan AWS Technical Essentials.',
        game: 'Release Train',
        mission: 'Ketuk saat kontainer berada di dalam gerbang yang menyala.',
        skills: ['Docker', 'Cloudflare', 'Firewall & WAF', 'Linux Server', 'Vercel', 'Railway', 'Google Cloud Run', 'AWS'],
        proofs: ['Shooply', 'Ashar Grosir Parfum', 'SENTINEL-X', 'Vanguard Strategic Hub'],
      },
    ],
  },
};
