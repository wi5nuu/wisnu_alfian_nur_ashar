// Copy + selection rules for the interactive "Explorer" inside the Skill Universe (EN / ID).
// Facts (projects, reports, experience, certificates) are pulled from profile*.ts at build time;
// only the process descriptions ("How I work") and UI labels are authored here.

import type { RealmId } from './universe';

export interface Step { t: string; d: string }
interface RealmExplorer {
  /** profile.projects titles shown as markers */
  projects: string[];
  method: { label: string; steps: Step[] };
  /** 4th group: what it is and which profile list feeds it */
  extra: { id: 'reports' | 'achievements' | 'experience' | 'certs'; label: string };
  /** short notes for skills that have no project to point at */
  notes?: Record<string, string>;
}

interface ExplorerCopy {
  ui: {
    all: string; skills: string; projects: string; panelHint: string; close: string; zoomIn: string; zoomOut: string; reset: string;
    usedIn: string; stack: string; role: string; status: string; impact: string; location: string; maintainer: string; language: string;
    category: string; issuer: string; date: string; viewProject: string; repo: string; live: string; readAsText: string; loading: string;
    realmHelp: string; step: string;
  };
  realms: Record<RealmId, RealmExplorer>;
}

export const explorer: Record<'en' | 'id', ExplorerCopy> = {
  en: {
    ui: {
      all: 'All', skills: 'Toolkit', projects: 'Projects', panelHint: 'Select a marker to open details', close: 'Close', zoomIn: 'Zoom in', zoomOut: 'Zoom out',
      reset: 'Reset view', usedIn: 'Used in', stack: 'Stack', role: 'Role', status: 'Status', impact: 'Impact', location: 'Location', maintainer: 'Maintainer response',
      language: 'Language', category: 'Category', issuer: 'Issuer', date: 'Date', viewProject: 'Open case study', repo: 'Repository', live: 'Live site',
      readAsText: 'Read this realm as text', loading: 'Loading markers…', realmHelp: 'Drag to orbit · pinch / scroll to zoom · tap a marker', step: 'Step',
    },
    realms: {
      cyber: {
        projects: ['SENTINEL-X', 'Human Firewall', 'Risk Shield System', 'Encrypted Messaging App', 'CogniMail'],
        extra: { id: 'reports', label: 'Bug bounty & reports' },
        method: {
          label: 'How I test & report',
          steps: [
            { t: 'Scope & recon', d: 'Agree scope and rules of engagement, then map the attack surface — external or internal — before touching anything.' },
            { t: 'Scan & enumerate', d: 'Find exposed services, endpoints and misconfigurations with tools such as Kali Linux and Burp Suite.' },
            { t: 'Exploit & validate', d: 'Confirm each finding with a safe proof of concept and rate its real impact, without causing damage.' },
            { t: 'Report', d: 'Write a structured vulnerability report: description, severity, reproduction steps, evidence and clear remediation advice.' },
            { t: 'Fix & retest', d: 'Help close the gap — RBAC, JWT, CSP, zero-trust hardening — then re-test to verify the hole is really shut.' },
          ],
        },
        notes: {
          'Penetration Testing': 'External and internal penetration testing with structured vulnerability reporting.',
          'Kali Linux': 'Primary offensive-security workstation for recon, scanning and validation.',
          'Burp Suite': 'Intercepting proxy for testing web applications and APIs.',
          'Zero-Trust Architecture': 'Never trust, always verify — applied in the apps I build (JWT blacklisting, RBAC, audit trails).',
          'Cloud Security': 'Hardening cloud deployments: least-privilege access, secrets handling, edge protection.',
          OWASP: 'OWASP Foundation member; security research contributed to the OWASP Cheat Sheet Series.',
        },
      },
      ai: {
        projects: ['ColonyAI', 'CogniMail', 'Wanar AI v2.0', 'Grawizah', 'TruthLayer', 'NusantaraLearn', 'PresUnivGo', 'Risk Shield System'],
        extra: { id: 'achievements', label: 'Competitions' },
        method: {
          label: 'From data to deployed model',
          steps: [
            { t: 'Collect & annotate', d: 'Gather and label data (Roboflow, Kaggle) so the model learns from clean, representative examples.' },
            { t: 'Train & fine-tune', d: 'Fine-tune models such as YOLOv8 with PyTorch / Hugging Face and track what actually improves results.' },
            { t: 'Evaluate', d: 'Measure with mAP, precision and recall — not vibes — and keep the evaluation reproducible.' },
            { t: 'Serve', d: 'Expose the model through FastAPI behind a Next.js product UI, deployed on Railway / Vercel / Cloud Run.' },
            { t: 'Secure & monitor', d: 'Add audit trails, JWT auth and zero-trust boundaries so AI features are safe to run in production.' },
          ],
        },
      },
      software: {
        projects: ['Ashar Grosir Parfum', 'Finance-Requester', 'Zentic Enterprise', 'Pulse', 'Shooply', 'Stokiq', 'Vanguard Strategic Hub', 'Nuxar Perfumery'],
        extra: { id: 'experience', label: 'Experience' },
        method: {
          label: 'From idea to production',
          steps: [
            { t: 'Design', d: 'Model the domain, pick the architecture (monolith, clean architecture or microservices) and design the database first.' },
            { t: 'Build', d: 'Ship features end to end with Laravel, Next.js, Go or ASP.NET — typed, reviewed and documented.' },
            { t: 'Test', d: 'Unit and integration tests plus QA / UAT so releases are boring in the best way.' },
            { t: 'Ship', d: 'Containerise and deploy (Docker, Vercel, Railway) with environment-specific config and secrets handled safely.' },
            { t: 'Optimise', d: 'Measure Core Web Vitals, cache aggressively and put a CDN in front — fast is a feature.' },
          ],
        },
      },
      devops: {
        projects: ['Shooply', 'Ashar Grosir Parfum', 'SENTINEL-X', 'Vanguard Strategic Hub', 'Wiskost Residence'],
        extra: { id: 'certs', label: 'Cloud training' },
        method: {
          label: 'The release pipeline',
          steps: [
            { t: 'Commit', d: 'Small, reviewable commits on short-lived branches keep the main branch always releasable.' },
            { t: 'Build', d: 'Reproducible Docker builds so what runs on my laptop is what runs in production.' },
            { t: 'Test', d: 'Automated tests gate every change before it gets near users.' },
            { t: 'Security scan', d: 'Dependency and configuration checks catch known-vulnerable packages and unsafe defaults early.' },
            { t: 'Deploy', d: 'Roll out to Vercel, Railway or Google Cloud Run behind Cloudflare, with an easy way back.' },
            { t: 'Observe', d: 'Telemetry (OpenTelemetry, Prometheus-style metrics) shows how the release behaves in the real world.' },
          ],
        },
      },
    },
  },
  id: {
    ui: {
      all: 'Semua', skills: 'Perangkat', projects: 'Proyek', panelHint: 'Pilih penanda untuk membuka detail', close: 'Tutup', zoomIn: 'Perbesar', zoomOut: 'Perkecil',
      reset: 'Reset tampilan', usedIn: 'Dipakai di', stack: 'Stack', role: 'Peran', status: 'Status', impact: 'Dampak', location: 'Lokasi', maintainer: 'Respons maintainer',
      language: 'Bahasa', category: 'Kategori', issuer: 'Penerbit', date: 'Tanggal', viewProject: 'Buka studi kasus', repo: 'Repositori', live: 'Situs live',
      readAsText: 'Baca dunia ini sebagai teks', loading: 'Memuat penanda…', realmHelp: 'Seret untuk memutar · cubit / scroll untuk zoom · ketuk penanda', step: 'Langkah',
    },
    realms: {
      cyber: {
        projects: ['SENTINEL-X', 'Human Firewall', 'Risk Shield System', 'Encrypted Messaging App', 'CogniMail'],
        extra: { id: 'reports', label: 'Bug bounty & laporan' },
        method: {
          label: 'Cara saya menguji & melapor',
          steps: [
            { t: 'Scope & recon', d: 'Sepakati ruang lingkup dan aturan main, lalu petakan permukaan serangan — eksternal atau internal — sebelum menyentuh apa pun.' },
            { t: 'Scan & enumerasi', d: 'Temukan layanan, endpoint, dan miskonfigurasi yang terbuka dengan alat seperti Kali Linux dan Burp Suite.' },
            { t: 'Eksploitasi & validasi', d: 'Konfirmasi tiap temuan dengan proof of concept yang aman dan nilai dampak sebenarnya, tanpa merusak.' },
            { t: 'Laporan', d: 'Tulis laporan kerentanan terstruktur: deskripsi, tingkat keparahan, langkah reproduksi, bukti, dan saran perbaikan yang jelas.' },
            { t: 'Perbaikan & uji ulang', d: 'Bantu menutup celah — RBAC, JWT, CSP, hardening zero-trust — lalu uji ulang untuk memastikan celah benar-benar tertutup.' },
          ],
        },
        notes: {
          'Penetration Testing': 'Penetration testing eksternal dan internal dengan pelaporan kerentanan yang terstruktur.',
          'Kali Linux': 'Workstation offensive-security utama untuk recon, scanning, dan validasi.',
          'Burp Suite': 'Intercepting proxy untuk menguji aplikasi web dan API.',
          'Zero-Trust Architecture': 'Jangan percaya, selalu verifikasi — diterapkan di aplikasi saya (JWT blacklisting, RBAC, audit trail).',
          'Cloud Security': 'Hardening deployment cloud: akses least-privilege, pengelolaan secret, proteksi di edge.',
          OWASP: 'Anggota OWASP Foundation; riset keamanan dikontribusikan ke OWASP Cheat Sheet Series.',
        },
      },
      ai: {
        projects: ['ColonyAI', 'CogniMail', 'Wanar AI v2.0', 'Grawizah', 'TruthLayer', 'NusantaraLearn', 'PresUnivGo', 'Risk Shield System'],
        extra: { id: 'achievements', label: 'Kompetisi' },
        method: {
          label: 'Dari data ke model produksi',
          steps: [
            { t: 'Kumpulkan & anotasi', d: 'Kumpulkan dan beri label data (Roboflow, Kaggle) agar model belajar dari contoh yang bersih dan representatif.' },
            { t: 'Latih & fine-tune', d: 'Fine-tune model seperti YOLOv8 dengan PyTorch / Hugging Face dan lacak apa yang benar-benar meningkatkan hasil.' },
            { t: 'Evaluasi', d: 'Ukur dengan mAP, precision, dan recall — bukan perasaan — dan jaga evaluasi tetap dapat direproduksi.' },
            { t: 'Sajikan', d: 'Ekspos model lewat FastAPI di balik UI produk Next.js, dideploy di Railway / Vercel / Cloud Run.' },
            { t: 'Amankan & pantau', d: 'Tambahkan audit trail, autentikasi JWT, dan batas zero-trust agar fitur AI aman dijalankan di produksi.' },
          ],
        },
      },
      software: {
        projects: ['Ashar Grosir Parfum', 'Finance-Requester', 'Zentic Enterprise', 'Pulse', 'Shooply', 'Stokiq', 'Vanguard Strategic Hub', 'Nuxar Perfumery'],
        extra: { id: 'experience', label: 'Pengalaman' },
        method: {
          label: 'Dari ide ke produksi',
          steps: [
            { t: 'Desain', d: 'Modelkan domain, pilih arsitektur (monolit, clean architecture, atau microservices), dan rancang database lebih dulu.' },
            { t: 'Bangun', d: 'Kirim fitur end to end dengan Laravel, Next.js, Go, atau ASP.NET — bertipe, di-review, dan terdokumentasi.' },
            { t: 'Uji', d: 'Unit dan integration test plus QA / UAT agar rilis berjalan membosankan dalam arti terbaik.' },
            { t: 'Rilis', d: 'Kontainerisasi dan deploy (Docker, Vercel, Railway) dengan konfigurasi per-environment dan secret yang aman.' },
            { t: 'Optimalkan', d: 'Ukur Core Web Vitals, cache agresif, dan pasang CDN — cepat adalah fitur.' },
          ],
        },
      },
      devops: {
        projects: ['Shooply', 'Ashar Grosir Parfum', 'SENTINEL-X', 'Vanguard Strategic Hub', 'Wiskost Residence'],
        extra: { id: 'certs', label: 'Pelatihan cloud' },
        method: {
          label: 'Pipeline rilis',
          steps: [
            { t: 'Commit', d: 'Commit kecil yang mudah di-review di branch berumur pendek menjaga branch utama selalu siap rilis.' },
            { t: 'Build', d: 'Build Docker yang dapat direproduksi: yang jalan di laptop saya adalah yang jalan di produksi.' },
            { t: 'Test', d: 'Tes otomatis menjaga setiap perubahan sebelum sampai ke pengguna.' },
            { t: 'Security scan', d: 'Pemeriksaan dependensi dan konfigurasi menangkap paket rentan dan default tak aman sejak dini.' },
            { t: 'Deploy', d: 'Rilis ke Vercel, Railway, atau Google Cloud Run di balik Cloudflare, dengan jalan mundur yang mudah.' },
            { t: 'Observasi', d: 'Telemetri (OpenTelemetry, metrik ala Prometheus) menunjukkan perilaku rilis di dunia nyata.' },
          ],
        },
      },
    },
  },
};
