interface Profile {
    personalInfo: {
        name: string;
        pronouns: string;
        role: string;
        location: string;
        tagline: string;
        summary: string;
        email: string;
        phone: string;
        linkedin: string;
        github: string;
        instagram: string;
        facebook: string;
        line: string;
        website: string;
    };
    skills: {
        programming: { name: string; icon?: string }[];
        webTech: { name: string; icon?: string }[];
        aiMl: { name: string; icon?: string }[];
        securityCloud: { name: string; icon?: string }[];
        tools: { name: string; icon?: string }[];
        soft: { name: string }[];
    };
    experience: {
        role: string;
        company: string;
        type: string;
        duration: string;
        location: string;
        description: string;
        skills: string[];
    }[];
    organizationalExperience: {
        role: string;
        company: string;
        type: string;
        duration: string;
        location: string;
        description: string;
        skills: string[];
    }[];
    projects: {
        title: string;
        role: string;
        status: string;
        link: string;
        description: string;
        techStack: string[];
        featured?: boolean;
        github?: string;
        image?: string;
    }[];
    education: {
        institution: string;
        degree: string;
        duration: string;
        location: string;
        focus: string;
    };
    educationHistory: string[];
    organization: string[];
    certifications: {
        name: string;
        issuer: string;
        date: string;
        expiry?: string;
        id: string;
        description: string;
        image?: string;
    }[];
    competitions: {
        name: string;
        issuer: string;
        date: string;
        category: "winner" | "participant";
        description: string;
        image?: string;
    }[];
    openSource: {
        organization: string;
        repo: string;
        project: string;
        language: string;
        bugDescription: string;
        impact: string;
        fileLocation: string;
        maintainerResponse: string;
        category: string;
    }[];
}

export const profile: Profile = {
    personalInfo: {
        name: "Wisnu Alfian Nur Ashar",
        pronouns: "Dia/Nya",
        role: "Full-Stack Engineer",
        location: "Bekasi, West Java, Indonesia",
        tagline: "Membangun Sistem Produksi yang Aman dan Berkinerja Tinggi",
        summary: "Mahasiswa Teknologi Informasi di President University yang berspesialisasi dalam Full-Stack Engineering dengan 1.500+ kontribusi GitHub di 90+ repositori. Berpengalaman membangun sistem enterprise siap produksi — termasuk platform ERP/POS yang melayani 15.000+ pengguna — menggunakan Laravel, Next.js, PostgreSQL, Go, dan teknologi cloud modern. Kontributor open-source aktif (NASA, Microsoft), anggota OWASP Foundation, dan peserta IBM SkillsBuild AI Builders Challenge.",
        email: "wisnualfiannurashar@gmail.com",
        phone: "+62 813-9488-2490",
        linkedin: "https://linkedin.com/in/wisnu-alfian-nur-ashar",
        github: "https://github.com/wi5nuu",
        instagram: "https://www.instagram.com/wshnn_?igsh=c2prbDU4MDdwN2pw",
        facebook: "https://www.facebook.com/profile.php?id=100083734252734&mibextid=kFxxJD",
        line: "https://line.me/ti/p/PlhxJgbURY",
        website: "https://www.wisnualfiannurashar.my.id",
    },
    skills: {
        programming: [
            { name: "Python", icon: "python" },
            { name: "C++", icon: "cplusplus" },
            { name: "Java", icon: "openjdk" },
            { name: "PHP", icon: "php" },
            { name: "Golang", icon: "go" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "MySQL", icon: "mysql" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "SQL Server", icon: "microsoftsqlserver" },
        ],
        webTech: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextdotjs" },
            { name: "Astro", icon: "astro" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Tailwind CSS", icon: "tailwindcss" },
            { name: "Supabase", icon: "supabase" },
            { name: "GSAP", icon: "greensock" },
            { name: "Framer Motion", icon: "framer" },
            { name: "shadcn/ui", icon: "shadcnui" },
            { name: "SEO", icon: "google" },
            { name: "Laravel", icon: "laravel" },
            { name: "ASP.NET", icon: "dotnet" },
            { name: "JavaScript", icon: "javascript" },
            { name: "Pengembangan API", icon: "postman" },
            { name: "SEO Teknis", icon: "google" },
            { name: "Google Tag Manager", icon: "google" },
        ],
        aiMl: [
            { name: "YOLOv8", icon: "pytorch" },
            { name: "FastAPI", icon: "fastapi" },
            { name: "OpenCV", icon: "opencv" },
            { name: "Kaggle", icon: "kaggle" },
            { name: "Roboflow", icon: "roboflow" },
            { name: "Google Cloud Run", icon: "googlecloud" },
            { name: "HuggingFace", icon: "huggingface" },
            { name: "Google Gemini", icon: "googlegemini" },
            { name: "Google AI Studio", icon: "googlegemini" },
            { name: "Computer Vision", icon: "pytorch" },
            { name: "Model Fine-Tuning", icon: "huggingface" },
        ],
        securityCloud: [
            { name: "Keamanan Siber", icon: "hackthebox" },
            { name: "Kali Linux", icon: "kalilinux" },
            { name: "Keamanan Cloud" },
            { name: "Docker", icon: "docker" },
            { name: "Vercel", icon: "vercel" },
            { name: "Railway", icon: "railway" },
            { name: "Cloudflare", icon: "cloudflare" },
            { name: "Firebase", icon: "firebase" },
            { name: "Zero-Trust Architecture" },
            { name: "HuggingFace", icon: "huggingface" },
        ],
        tools: [
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Android Studio", icon: "androidstudio" },
            { name: "Google Sheets", icon: "googlesheets" },
            { name: "Web Development", icon: "html5" },
            { name: "Full-Stack Development", icon: "javascript" },
            { name: "Burp Suite", icon: "burpsuite" },
            { name: "Google Analytics", icon: "googleanalytics" },
            { name: "Jira", icon: "jira" },
            { name: "Google Colab", icon: "googlecolab" },
        ],
        soft: [
            { name: "Komunikasi" },
            { name: "Kepemimpinan" },
            { name: "Kerja Sama Tim" },
            { name: "Pemecahan Masalah" },
            { name: "Manajemen Acara" },
            { name: "Kreativitas" },
        ]
    },
    experience: [
        {
            role: "Full Stack Engineer",
            company: "ASHAR GROSIR PARFUM BEKASI",
            type: "Pekerja Lepas (Wiraswasta)",
            duration: "Desember 2025 - Sekarang",
            location: "Kota Bekasi (Hybrid)",
            description: "Membangun platform ERP/POS enterprise (Laravel, Next.js, PostgreSQL) dengan inventaris, penggajian, BI dashboard, AI Copilot, dan RBAC — melayani 6 admin, 600+ produk, 50+ reseller. Mencapai load time 1,34 detik dan 91% Good LCP via Cloudflare CDN. Mengotomatisasi operasi grosir yang mendukung 100+ transaksi harian, memangkas waktu rekonsiliasi keuangan 60%.",
            skills: ["Laravel", "Next.js", "PostgreSQL", "Cloudflare", "ERP/POS", "AI Copilot"]
        },
        {
            role: "Web Development Intern",
            company: "GAOTEK INC",
            type: "Magang",
            duration: "April 2026 - Sekarang",
            location: "New York, USA (Remote)",
            description: "Membangun dan menyesuaikan website WordPress responsif menggunakan PHP, HTML, CSS, JavaScript, Elementor, dan Gutenberg. Menerapkan praktik SEO terbaik untuk meningkatkan kegunaan dan visibilitas pencarian. Berkolaborasi dalam lingkungan Agile remote via Microsoft Teams.",
            skills: ["WordPress", "PHP", "JavaScript", "SEO", "Elementor", "Agile"]
        }
    ],
    organizationalExperience: [
        {
            role: "IT Development & Divisi Minat dan Bakat",
            company: "PC FKMA Jakarta As'adiyah",
            type: "Organisasi",
            duration: "Januari 2024 - Sekarang",
            location: "Ciputat Timur, Banten",
            description: "Merancang sekaligus melaksanakan perilisan website resmi keorganisasian As'adiyah di Jakarta. Berperan langsung di divisi Minat Bakat dengan mengimplementasikan portal integrasi database mandiri, sehingga menaikkan rasio efisiensi secara signifikan.",
            skills: ["Web Development", "Manajemen Acara", "Kerja Tim"]
        },
        {
            role: "Anggota – Divisi Student Passion & Talents",
            company: "PUMA Informatics – President University",
            type: "Organisasi",
            duration: "September 2024 - Agustus 2025",
            location: "President University, Bekasi",
            description: "Menyelenggarakan 3+ acara teknologi untuk 100+ mahasiswa dengan tingkat kehadiran 95%. Mengkoordinasikan workshop akademik dan inisiatif berbagi pengetahuan untuk meningkatkan keterampilan IT mahasiswa.",
            skills: ["Manajemen Acara", "Komunikasi", "Kerja Tim"]
        },
        {
            role: "Wakil Ketua – Divisi Seni dan Olahraga",
            company: "PUFA Computer Science – President University",
            type: "Organisasi",
            duration: "September 2025 - Sekarang",
            location: "President University, Bekasi (On-site)",
            description: "Memimpin 5+ kegiatan seni dan olahraga untuk 60+ mahasiswa, meningkatkan keterlibatan 40%. Menyelenggarakan acara kampus untuk 100+ mahasiswa sambil mengkoordinasikan relawan dan logistik.",
            skills: ["Kepemimpinan", "Manajemen Acara", "Komunikasi"]
        },
        {
            role: "Anggota",
            company: "IBM-SkillsBuild-AI-Builders-Challenge",
            type: "Organisasi",
            duration: "2026",
            location: "Remote",
            description: "Berpartisipasi dalam AI Builders Challenge dari IBM, berkolaborasi pada solusi berbasis AI dan mendapatkan pengalaman langsung dengan IBM Cloud dan teknologi AI.",
            skills: ["AI/ML", "IBM Cloud"]
        },
        {
            role: "Anggota",
            company: "OWASP Foundation",
            type: "Organisasi",
            duration: "2026",
            location: "Remote",
            description: "Anggota aktif Open Web Application Security Project, berkontribusi pada riset keamanan dan alat keamanan open-source.",
            skills: ["Keamanan Siber", "Riset Keamanan"]
        }
    ],
    projects: [
        {
            title: "Ashar Grosir Parfum",
            role: "Pengembang Full-Stack",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/ashar-grosir",
            link: "https://www.ashargrosirparfum.com",
            description: "Platform E-Commerce resmi untuk grosir parfum berpengalaman 20 tahun yang melayani 15.000+ mitra. Dioptimalkan untuk skala besar dengan pengiriman edge dan distribusi grosir yang efisien.",
            techStack: ["React", "TypeScript", "Cloudflare", "Tailwind CSS", "CDN"],
            image: "/projects/AsharGrosirParfum.webp"
        },
        {
            title: "SENTINEL-X",
            role: "Arsitek Full-Stack",
            status: "Bukti Konsep",
            featured: true,
            github: "https://github.com/wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform",
            link: "https://github.com/wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform",
            description: "Platform Intelijen & Fusi Ancaman Multi-Domain (23+ bintang GitHub, 10 fork). Bukti konsep edukatif yang menyimulasikan kesadaran situasi, korelasi berbasis AI dengan arsitektur Multi-Modal, dan respons insiden real-time dari 6 sumber domain (Penerbangan/ADS-B, Maritim/AIS, Siber, Luar Angkasa, Seismik, RF/SIGINT). Menampilkan jejak audit blockchain melalui smart contract Ethereum, visualisasi bola dunia 3D, dan klasifikasi ancaman AI yang dapat dijelaskan.",
            techStack: ["PyTorch", "FastAPI", "React", "Kafka", "TimescaleDB", "Docker", "Blockchain"],
            image: "/projects/sentinelx.webp"
        },
        {
            title: "CogniMail",
            role: "Pengembang Full-Stack & Arsitek Sistem",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/ML-Powered-Anti-Phishing-and-Spam-Filtering",
            link: "https://cognimail.zenime.my.id/",
            description: "Platform keamanan email mandiri yang menggabungkan analisis berbasis aturan, ML terawasi (XGBoost, TF-IDF), deteksi anomali (Isolation Forest, One-Class SVM), dan SpamAssassin dengan fusi keputusan tertimbang. Fitur deteksi evasif multi-layer (homograph, zero-width chars, JS obfuscation, RTL override, brand spoofing), pelatihan ulang ML otomatis, pipeline antrean asinkron, pengawasan email berbasis peran, dan isolasi kotak surat zero-trust.",
            techStack: ["Python 3.11", "FastAPI", "React 19", "PostgreSQL 16", "Redis 7", "XGBoost", "SpamAssassin", "Docker", "Tailwind CSS"],
            image: "/projects/cognimail.webp"
        },
        {
            title: "Zentic Enterprise",
            role: "Pengembang Backend",
            status: "Selesai",
            featured: true,
            github: "https://github.com/wi5nuu/zentic",
            link: "https://github.com/wi5nuu/zentic",
            description: "Sistem pengajuan pengeluaran kelas perusahaan yang dibangun dengan Arsitektur Bersih di ASP.NET MVC 10, Entity Framework Core, dan SQL Server. Menampilkan alur kerja persetujuan multi-tingkat, deteksi penipuan dengan penandaan real-time, pencocokan 3 arah (PO/Faktur/Penerimaan Barang), manajemen vendor, log audit yang tidak dapat diubah, dan dasbor keuangan komprehensif dengan pelacakan KPI. Mengimplementasikan hashing kata sandi BCrypt, enkripsi AES-256-GCM, dan pembatasan laju untuk keamanan.",
            techStack: ["ASP.NET MVC 10", ".NET 10", "C#", "SQL Server", "Entity Framework Core", "xUnit", "Bootstrap 5", "BCrypt.Net", "FluentValidation"],
            image: "/projects/zentic.webp"
        },
        {
            title: "Finance-Requester",
            role: "Pengembang Full-Stack",
            status: "Selesai",
            featured: true,
            github: "https://github.com/wi5nuu/Finance-Requester",
            link: "https://github.com/wi5nuu/Finance-Requester",
            description: "Sistem Pengajuan Pembayaran (PRS) kelas perusahaan untuk mengelola pengajuan pembayaran dengan persetujuan multi-tingkat, anggaran, vendor, pesanan pembelian, dan penyelesaian uang muka. Dibangun dengan arsitektur terpisah menggunakan backend API Laravel 12 dan frontend Next.js 16, diorkestrasi penuh melalui Docker. Fitur pembaruan SSE real-time, pencocokan 3 arah, pembayaran masal, RBAC, pencatatan audit, dan penyimpanan MinIO kompatibel S3.",
            techStack: ["Next.js 16", "Laravel 12", "React 19", "PostgreSQL 16", "PHP 8.2", "TypeScript", "Redis", "Docker", "MinIO", "Tailwind CSS"],
            image: "/projects/FinanceRequester.webp"
        },
        {
            title: "Pulse",
            role: "Pengembang Full-Stack",
            status: "Dalam Pengembangan",
            featured: true,
            github: "https://github.com/wi5nuu/pulse",
            link: "https://github.com/wi5nuu/pulse",
            description: "Ruang kerja kolaboratif real-time dengan editor rich-text, papan Kanban, presensi langsung, dan riwayat versi. Dibangun dengan replikasi bebas konflik CRDT menggunakan Yjs + ProseMirror sehingga banyak pengguna dapat mengedit secara bersamaan dengan resolusi konflik otomatis. Menampilkan fitur urungkan/ulangi multi-pemain, Kanban seret-dan-lepas dengan pengindeksan pecahan, riwayat versi berbasis jepretan, sistem undangan dengan peran editor/pelihat, otentikasi JWT memori dengan token penyegaran berputar dan deteksi penggunaan kembali.",
            techStack: ["Go (Golang)", "Next.js 14", "PostgreSQL", "Redis", "TypeScript", "Docker", "WebSocket", "Yjs", "ProseMirror", "Tailwind CSS", "JWT"],
            image: "/projects/Pulse.webp"
        },
        {
            title: "PresUnivGo",
            role: "Pengembang Aplikasi Seluler",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/puconnect",
            link: "https://puconnect-9e8fb.web.app",
            description: "Platform jejaring profesional lintas platform eksklusif untuk Universitas Presiden. Menampilkan AI Career Mentor Suite bertenaga Gemini (peta jalan karir, analisis CV, pembuat surat lamaran, saran postingan cerdas, MentorBot), sinkronisasi Firestore real-time, UI glassmorphism dengan desain gelombang dan mikro-animasi, pencarian instan dengan debounce 300ms, mesin jejaring real-time, dasbor analitik karir, dan Arsitektur Tanpa Penyimpanan untuk efisiensi biaya. Diterapkan sebagai aplikasi seluler Flutter dan Progressive Web App.",
            techStack: ["Gemini AI", "Flutter", "Cloud Firestore", "Riverpod", "Firebase Auth", "Firebase Messaging", "Hive", "go_router", "flutter_animate", "Google Fonts"],
            image: "/projects/PresUnivGo.webp"
        },
        {
            title: "Grawizah",
            role: "Ketua Tim & Arsitek Full-Stack",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/grawizah.com",
            link: "https://grawizah-com.vercel.app/",
            description: "Platform Intelijen Perdagangan Global berbasis AI untuk membantu UMKM Indonesia berkembang secara global. Dibangun oleh tim 'Successful Failures' (Wisnu sebagai Ketua Tim, bersama Reza Fahlevi dan Praisilia Pandoh dari Universitas Presiden). Menampilkan pencocokan AI saraf bertenaga Groq Llama 3.3, klasifikasi Kode HS otomatis, pemetaan jaringan rantai pasok real-time, pembanding harga pesaing, dan penerjemah perdagangan dwibahasa yang mendukung 14 bahasa. Memenangkan kategori Pengembang Web di TechSprint Innovation Cup 2026 yang diselenggarakan oleh Codelab Indonesia.",
            techStack: ["Groq Llama 3.3", "Next.js 14", "Go (Golang)", "TypeScript", "Supabase", "AI/ML", "Tailwind CSS", "JWT"],
            image: "/projects/grawizah.webp"
        },
        {
            title: "Stokiq",
            role: "Pengembang Full-Stack",
            status: "Dalam Pengembangan",
            featured: false,
            github: "https://github.com/wi5nuu/stokiq",
            link: "https://github.com/wi5nuu/stokiq",
            description: "Sistem manajemen inventaris dan stok komprehensif dengan prakiraan permintaan berbasis AI. Modul mencakup manajemen stok, pemrosesan pesanan, manajemen pemasok, manajemen pembeli, integrasi pasar, analitik penjualan, pertanyaan pengadaan, dan pelaporan terperinci. Dibangun dengan React + Supabase untuk sinkronisasi data real-time, menampilkan analitik prediktif (Prediksi) untuk rekomendasi tingkat stok.",
            techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS", "shadcn/ui", "Recharts", "Zod", "Framer Motion", "React Router", "React Hook Form"],
            image: "/projects/StokIQ.webp"
        },
        {
            title: "ColonyAI",
            role: "Pemilik Produk & Insinyur AI",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/colonyai",
            link: "https://colonyai-eta.vercel.app",
            description: "Pembaca Hitung Cawan Otomatis berbasis AI untuk laboratorium mikrobiologi — entri resmi untuk AI Open Innovation Challenge 2026 (tim 4 orang dari Universitas Presiden, Wisnu sebagai Pemilik Produk & Insinyur Perangkat Lunak). Model YOLOv8 yang disesuaikan mencapai mAP@0.5 94.1%, presisi 94.7%, recall 92.5% di 56.124 anotasi. Mengonversi gambar cawan agar menjadi laporan CFU/ml dalam waktu kurang dari 2 menit — mengurangi variabilitas antar-analis sebesar 92.5%. Fitur pra-pemrosesan CLAHE, deteksi Lingkaran Hough, estimasi koloni gabungan SA-001, ketidakpastian GUM, jejak audit SHA-256 untuk kepatuhan ISO 17025, BPOM & SNI. Keamanan tingkat perusahaan: hashing Argon2, daftar hitam JWT, pemindaian ClamAV, arsitektur Zero-Trust.",
            techStack: ["YOLOv8", "FastAPI", "Next.js 14", "PostgreSQL", "TypeScript", "OpenCV", "AWS S3", "Railway", "Vercel"],
            image: "/projects/ColonyAI.webp"
        },
        {
            title: "Shooply",
            role: "Arsitek Full-Stack",
            status: "Produksi",
            featured: true,
            link: "#",
            description: "Platform e-commerce berkinerja tinggi dengan arsitektur mikroservis. Menampilkan frontend Next.js 14 teroptimasi SSR dan backend GoFiber yang sangat cepat. Mengimplementasikan caching tingkat lanjut (Redis), perpesanan (RabbitMQ), dan telemetri komprehensif (OpenTelemetry, Prometheus).",
            techStack: ["Go (Golang)", "Next.js 14", "PostgreSQL", "Redis", "GoFiber", "RabbitMQ", "TypeScript", "OpenTelemetry", "React Query", "Zustand", "Tailwind CSS", "Framer Motion", "Zerolog"],
            image: "/projects/shooply.webp"
        },
        {
            title: "TruthLayer",
            role: "Arsitek & Pengembang Full-Stack",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/Truthlayer",
            link: "https://truthlayer.io",
            description: "Ekstensi Chrome (Manifest V3) + Backend Node.js Express + Dasbor Next.js 15 yang mengungkap niat tersembunyi dari setiap situs web yang Anda kunjungi. Ditenagai oleh Claude AI (Anthropic) untuk klasifikasi niat dan deteksi pola gelap. Memberikan Skor Kepercayaan (0-100), mendeteksi 10+ taktik manipulasi pola gelap (urgensi palsu, confirmshaming, iklan terselubung, tindakan paksa), mengaudit pengumpulan data & pelacak pihak ketiga, mengestimasi persentase konten buatan AI, dan memungkinkan pembagian laporan publik via truthlayer.io/report/domain. Fitur izin activeTab (utamakan privasi), caching lokal 24 jam, dan pipeline CI/CD otomatis.",
            techStack: ["Claude AI", "Next.js 15", "TypeScript", "Node.js", "Express.js", "Chrome Extension", "Docker", "Netlify"],
            image: "/projects/thrutlayer.webp"
        },
        {
            title: "Wanar AI v2.0",
            role: "Pengembang Full-Stack",
            status: "Produksi",
            featured: false,
            github: "https://github.com/wi5nuu/wanar-ai",
            link: "https://github.com/wi5nuu/wanar-ai",
            description: "Platform Agen AI multi-penyedia tingkat perusahaan dengan orkestrasi OpenAgentic, NVIDIA, dan Vector. Menampilkan router penyedia cerdas, riwayat konteks tak terbatas, caching semantik via SQLite, arsitektur Redis terdistribusi, otentikasi JWT, RAG untuk jawaban berbasis dokumen, dan pemindai keamanan. Mendukung mode CLI dan Server Web dengan UI chatbot lengkap.",
            techStack: ["NVIDIA API", "OpenAgentic", "Node.js", "Express", "Vector API", "Redis", "RAG", "SQLite", "JWT"],
            image: "/projects/wanarai.webp"
        },
        {
            title: "NusantaraLearn",
            role: "Pengembang Aplikasi Seluler",
            status: "Dalam Pengembangan",
            featured: true,
            github: "https://github.com/wi5nuu/NusantaraLearn",
            link: "https://github.com/wi5nuu/NusantaraLearn",
            description: "Aplikasi pembelajaran seluler lintas platform yang dibangun dengan React Native (Expo) menampilkan inferensi AI di perangkat via WebLLM (@mlc-ai/web-llm), arsitektur utamakan-luring dengan penyimpanan lokal terenkripsi, notifikasi push, teks-ke-suara, animasi Lottie, dan umpan balik haptik. Menyasar pembelajar Indonesia dengan desain terinspirasi nusantara. Pelaporan kerusakan via Sentry, manajemen status dengan Zustand, dan penyimpanan aman dengan expo-secure-store.",
            techStack: ["WebLLM", "React Native", "Expo", "TypeScript", "Zustand", "Sentry", "Expo Router", "Firebase", "Crypto-JS", "Lottie"],
            image: "/projects/nusantaralearn.webp"
        },
        {
            title: "Human Firewall",
            role: "Pengembang Full-Stack",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/Human_Firewall_Intelligence-_Platform",
            link: "https://humanfirewall.vercel.app/",
            description: "Platform kesadaran keamanan siber dengan pembelajaran interaktif, simulasi phishing, dan pelacakan kemajuan untuk organisasi.",
            techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
            image: "/projects/humanfirewallintelligenceplatform.webp"
        },
        {
            title: "Risk Shield System",
            role: "Ketua Pengembang / Keamanan Siber",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/risk-assessment-platform",
            link: "https://riskshield.vercel.app/",
            description: "Platform GRC canggih dibantu AI yang mengotomatiskan metodologi OCTAVE Allegro. Menampilkan integrasi Google Gemini Pro, analitik risiko real-time, dan pelaporan kepatuhan otomatis.",
            techStack: ["Google Gemini Pro", "Next.js 14", "React", "Supabase", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts", "Framer Motion", "jsPDF"],
            image: "/projects/riskshieldsystem.webp"
        },
        {
            title: "LexCorpus CMS Platform",
            role: "Pengembang Full-Stack",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu",
            link: "https://www.lexcorpuslaw.com",
            description: "Platform riset hukum dan CMS siap produksi. Menampilkan sistem editorial berbasis peran yang aman, manajemen dokumen hukum, dan analisis teks kaya.",
            techStack: ["Next.js 14", "React 18", "TypeScript", "Supabase", "Tailwind CSS", "Quill.js", "date-fns", "Lucide"],
            image: "/projects/Lexcorpus.webp"
        },
        {
            title: "Vanguard Strategic Hub",
            role: "Arsitek & Ketua Pengembang",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/Nexus-EMS",
            link: "https://nexus-ems-flame.vercel.app/",
            description: "Platform eksekusi strategis all-in-one kelas perusahaan (Pusat Komando) yang menyatukan eksekusi teknis dengan visi organisasi. Menampilkan manajemen OKR, matriks keparahan SLA/insiden, RBAC real-time dengan matriks peran & izin, backend Fastify berkinerja tinggi, dan dasbor Next.js 14 yang canggih. Mengatasi silo data, peralihan konteks, dan kelelahan kerja melalui antarmuka komando terpadu.",
            techStack: ["Next.js 14", "Fastify", "PostgreSQL", "Redis", "Prisma", "Docker", "Socket.io", "Zustand", "shadcn/ui", "Radix UI", "Vitest"],
            image: "/projects/vanguard.webp"
        },
        {
            title: "Nuxar Perfumery",
            role: "Pengembang Full-Stack",
            status: "Produksi",
            featured: false,
            link: "https://www.nuxarperfumery.my.id",
            description: "Situs web parfum sinematik kelas atas yang menampilkan animasi GSAP, transformasi 3D, efek partikel, dan UI kemewahan gelap. Backend diterapkan dengan Golang dan Railway.",
            techStack: ["Golang", "React 19", "TypeScript", "Vite", "Tailwind CSS 3", "GSAP (ScrollTrigger)", "Railway"],
            image: "/projects/NuxarPerfumery.webp"
        },
        {
            title: "PC FKMA Jakarta Website",
            role: "Pengembang Full-Stack",
            status: "Produksi",
            featured: false,
            github: "https://github.com/wi5nuu",
            link: "https://pcfkmaasadiyahjakarta.vercel.app/",
            description: "Platform digital resmi untuk Alumni As'adiyah di Jakarta. Menampilkan profil, portal berita, dan data organisasi.",
            techStack: ["Next.js", "Tailwind CSS", "Vercel"],
            image: "/projects/FKMA_Asadiyah_Jakarta.webp"
        },
        {
            title: "Wiskost Residence",
            role: "Pengembang Frontend",
            status: "Produksi",
            featured: false,
            github: "https://github.com/wi5nuu/wiskost",
            link: "https://wiskost.vercel.app/",
            description: "Templat situs web kediaman terinspirasi kilang anggur mewah dengan tema gelap beraksen emas, sistem manajemen profesional, dan pipeline penggelaran otomatis.",
            techStack: ["React 18", "TypeScript", "Docker", "Vite", "Tailwind CSS", "Hugging Face", "Formspree", "Vercel"],
            image: "/projects/WiskostResidence.webp"
        },
        {
            title: "HargaKita.id",
            role: "Pengembang Full-Stack",
            status: "Produksi",
            featured: true,
            github: "https://github.com/wi5nuu/hargakita.id",
            link: "https://hargakita.netlify.app/",
            description: "Platform pemantauan harga bahan pokok real-time untuk seluruh wilayah Indonesia. SaaS visual dan ramah pengguna yang melacak harga komoditas penting (beras, cabai, bawang, telur, minyak goreng) di ratusan pasar di 34 provinsi. Menampilkan laporan harga crowdsourced dengan filter validasi cerdas, pencacahan data harian otomatis dari portal pemerintah, grafik tren interaktif, dan tanpa persyaratkan masuk — gratis dan dapat diakses oleh seluruh warga Indonesia.",
            techStack: ["React", "TypeScript", "Appwrite", "Vite", "Tailwind CSS", "Netlify", "Chart.js", "Crowdsourcing"],
            image: "/projects/hargakita.webp"
        },
        {
            title: "Encrypted Messaging App",
            role: "Pengembang Sistem",
            status: "Selesai",
            featured: false,
            github: "https://github.com/wi5nuu/E2EE_WebApp",
            link: "https://github.com/wi5nuu/E2EE_WebApp",
            description: "Aplikasi obrolan real-time terenkripsi end-to-end yang dibangun dalam C++ menggunakan kerangka kerja web Crow dan ASIO untuk jaringan asinkron. Mengimplementasikan enkripsi simetris AES sebelum transmisi pesan dan dekripsi asimetris RSA pada sisi penerima. Menampilkan pesan real-time berbasis WebSocket, otentikasi pengguna, TLS/SSL dengan sertifikat mandiri, dan arsitektur multi-thread dengan antrean pesan dilindungi mutex.",
            techStack: ["C++", "Crow Framework", "ASIO", "WebSocket", "AES Encryption", "RSA", "TLS/SSL", "Makefile"],
            image: "/projects/e2eewebapp.webp"
        },
    ],
    education: {
        institution: "President University",
        degree: "Sarjana Teknologi Informasi (S.Kom/B.IT)",
        duration: "September 2024 - Desember 2027 (Perkiraan)",
        location: "Bekasi, Indonesia",
        focus: "Keamanan Siber, Pengembangan Full-Stack, Arsitektur Database · IPK: 3.54/4.00"
    },
    educationHistory: [
        "TK EKA DIYASA BANDARA JUWATA TARAKAN",
        "SD NEGRI 009 TARAKAN",
        "SDN 84 WATANG CENRANA",
        "MTS AS'ADIYAH PUTERA 2 PUSAT SENGKANG",
        "MAS AS'ADIYAH PUTRA SENGKANG- MACANANG",
        "President University"
    ],
    organization: [
        "FKMA AS'ADIYAH JAKARTA",
        "PUFA Computer Science",
        "PUMA Informatic",
        "IBM-SkillsBuild-AI-Builders-Challenge",
        "OWASP"
    ],
    certifications: [
        {
            name: "Pelatihan Full-Stack 101",
            issuer: "Simplilearn",
            date: "Maret 2026",
            id: "10034834",
            description: "Kursus pondasi integrasi penuh bagian antarmuka maupun sistem pusat. Menganalisis skema arsitektur berskala berbasis ekosistem JavaScript.",
            image: "/certifications/Full-Stack_Development_101.webp"
        },
        {
            name: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "Maret 2026",
            expiry: "Maret 2029",
            id: "JLX1VWN35Z72",
            description: "Penguasaan dasar semantik blok elemen layar HTML beserta tata desain ciamik CSS dengan standarisasi mutlak.",
            image: "/certifications/Dicoding_Web_Dasar.webp"
        },
        {
            name: "AWS Cloud Practitioner Essentials \u2013 Training Completion",
            issuer: "Amazon Web Services (AWS)",
            date: "Maret 2026",
            id: "",
            description: "Tinjauan terpadu komputasi jaringan dunia dalam server modern, beserta ketahanan standar sistem Amazon Web Services.",
            image: "/certifications/aws_cloud_practioner_essentials.webp"
        },
        {
            name: "AWS Technical Essentials",
            issuer: "Amazon Web Services (AWS)",
            date: "Januari 2026",
            id: "",
            description: "Tinjauan spesifik teknis dari struktur layanan jaringan dan pengoperasian Database terpusat Amazon Web Services.",
            image: "/certifications/aws_technical_essentials.webp"
        },
        {
            name: "Google Ads Search Certification",
            issuer: "Google Digital Academy (Skillshop)",
            date: "Februari 2026",
            expiry: "Februari 2027",
            id: "173326967",
            description: "Penguasaan dominasi tingkat atas dari metode kampanye pencarian produk via Search Google dan analisis pelanggan tajam untuk penjualan optimal.",
            image: "/certifications/Google_Ads_Search.webp"
        },
        {
            name: "Sertifikasi Analytics Google (GA4)",
            issuer: "Google Digital Academy (Skillshop)",
            date: "Februari 2026",
            expiry: "Februari 2027",
            id: "173326065",
            description: "Pengaturan analisis super canggih untuk membedah data tersembunyi para audiens untuk mendapatkan petunjuk emas bagi arah laju bisnis pasar.",
            image: "/certifications/Google_Analytics.webp"
        },
        {
            name: "Sertifikasi Integrasi Data Lanjutan",
            issuer: "HubSpot Academy",
            date: "Februari 2026",
            expiry: "Maret 2027",
            id: "ab0238d2c3f14a16bfb744c1a9e28356",
            description: "Ahli di dalam penyatuan rantai-rantai lunak antara beberapa perangkat sentral menjadi sebuah pusaran sistem otomatis.",
            image: "/certifications/Data_Integrations_Certification.webp"
        },
        {
            name: "Engineer Basis Perangkat Lunak (SEC)",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "D73F5CD372E0",
            description: "Validasi paten kelas atas standar dasar-dasar ilmu pengembangan, perancangan algoritma kuat dan strategi proses perbaikan bug menyeluruh.",
            image: "/certifications/Software_Engineer.webp"
        },
        {
            name: "Frontend Developer Engineer (React)",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "84B47591D6EC",
            description: "Validasi kecekatan ahli yang mendalam menggunakan React secara interaktif, efisien serta manipulasi rendering untuk meminimalisasi hambatan memori sistem.",
            image: "/certifications/Frontend_Developer.webp"
        },
        {
            name: "Golang (Basic)",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "C9F8A2B1E3D4",
            description: "Kemahiran dasar dalam bahasa pemrograman Go, meliputi sintaks, struktur data, pola konkurensi, dan penggunaan pustaka standar.",
            image: "/certifications/golang.webp"
        },
        {
            name: "Software Engineer Intern",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "E4D7F2A9C1B5",
            description: "Penilaian komprehensif fundamental rekayasa perangkat lunak termasuk struktur data, algoritma, pemecahan masalah, dan praktik kode bersih.",
            image: "/certifications/software_engineer_intern.webp"
        }
    ],
    competitions: [
        {
            name: "Juara Vibe Coding",
            issuer: "Google",
            date: "Juni 2026",
            category: "participant",
            description: "Berpartisipasi dalam kompetisi Vibe Coding Google, menunjukkan pembuatan prototipe cepat dan pemecahan masalah kreatif menggunakan alat pengembangan berbantuan AI.",
            image: "/certifications/Juara_Vibe_Coding_Google_Participants.webp"
        },
        {
            name: "Peserta Kategori Web Development",
            issuer: "Codelab Indonesia",
            date: "Juni 2026",
            category: "participant",
            description: "Berpartisipasi dalam kompetisi TechSprint yang diselenggarakan oleh Codelab Indonesia, bertanding di kategori Web Development untuk membangun aplikasi full-stack dalam batasan waktu.",
            image: "/certifications/Web_Development_Participants.webp"
        },
        {
            name: "Peserta Kompetisi Otomasi Data",
            issuer: "PUMA Information System President University",
            date: "Juni 2026",
            category: "participant",
            description: "Berpartisipasi dalam kompetisi Tech Sprint 3in1 yang diselenggarakan oleh PUMA Information System President University, berfokus pada perancangan pipeline data yang efisien dan alur kerja otomatis.",
            image: "/certifications/Data_Automation_Participants.webp"
        },
        {
            name: "AI Open Innovation Challenge 2026",
            issuer: "President University & Kemenko Perekonomian RI",
            date: "Februari – Agustus 2026",
            category: "winner",
            description: "Kompetisi inovasi AI tingkat nasional yang diselenggarakan oleh President University & Kemenko Perekonomian RI dengan 1.041+ peserta se-Indonesia. Mengembangkan solusi AI kategori Healthcare (ColonyAI) untuk penghitungan koloni mikrobiologi otomatis, presisi laboratorium, dan kepatuhan standar ISO 17025.",
            image: "/certifications/aiopeninnovationchallenge.webp"
        }
    ],
    openSource: [
        {
            organization: "NASA",
            repo: "nasa/TrickHLA",
            project: "TrickHLA — High Level Architecture Simulation Engine",
            language: "C++",
            category: "Logic Bug",
            bugDescription: "Kesalahan logika (inverted comparison) pada pencarian instans federasi. Kode menggunakan operator != yang seharusnya == saat mencocokkan MOM_instance_name dengan tMOMName.",
            impact: "Ketika proses penghapusan federasi dipicu, sistem justru merekam dan menghapus entitas terakhir yang tidak cocok (FedC), sementara federasi yang sebenarnya mengundurkan diri tetap berada di dalam memori (state corruption). Jika hanya ada satu entitas, fungsi keluar lebih awal tanpa menghapus apa pun.",
            fileLocation: "source/TrickHLA/Federate.cpp:4213",
            maintainerResponse: "Terkonfirmasi oleh maintainer internal NASA (ezcrues). Beliau menyatakan: 'Yep, that looks like a bug.' dan langsung memasukkan commit perbaikan resmi dengan hash a26e0df ke dalam branch develop."
        },
        {
            organization: "Microsoft",
            repo: "microsoft/testfx",
            project: "MSTest Framework",
            language: "C# (.NET 8+)",
            category: "Architecture Contract Failure",
            bugDescription: "Kegagalan kontrak arsitektur non-nullable return value. Ketika Assert.Throws<T>() atau Assert.ThrowsExactly<T>() dipanggil di dalam sebuah AssertScope dan asersinya gagal, metode tersebut mengembalikan nilai null alih-alih melempar exception.",
            impact: "Nilai null tersebut terekspos ke kode pengguna sebelum scope di-dispose, memicu NullReferenceException sekunder yang menutupi pesan kesalahan asersi asli dan membingungkan proses debugging.",
            fileLocation: "src/TestFramework/TestFramework/Assertions/Assert.ThrowsException.cs (Baris 54, 125, 352, 374, 512, 534)",
            maintainerResponse: "Tim arsitek Microsoft (Evangelink & Youssef1313) mengonfirmasi bahwa hal ini awalnya merupakan kompromi desain compiler (by-design). Namun, berkat laporan mendalam ini, maintainer langsung membuat 2 Pull Requests baru (dotnet/docs#54409 dan #9186) untuk merombak dokumentasi resmi .NET dan RFC 011 guna memitigasi risiko bagi seluruh developer .NET di dunia."
        },
        {
            organization: "Microsoft",
            repo: "microsoft/keyborg",
            project: "Keyborg Accessibility Library",
            language: "TypeScript / TypeScript Down",
            category: "Memory Leak",
            bugDescription: "Kebocoran variabel lingkungan Node ke runtime browser. Fungsi dispose() merujuk pada process.env.NODE_ENV, namun file konfigurasi bundler (tsdown.config.mts) hanya mengganti variabel PKG_VERSION dan melewatkan variabel environment tersebut.",
            impact: "Di lingkungan browser murni di mana objek global process tidak didefinisikan, memanggil disposeKeyborg() akan langsung mengakibatkan Uncaught ReferenceError: process is not defined. Hal ini menghentikan proses pembersihan memori (callbacks.length = 0) dan memicu kebocoran memori (memory leak).",
            fileLocation: "src/Keyborg.mts:261 dan tsdown.config.mts",
            maintainerResponse: "Ditanggapi oleh core maintainer (layershifter). Ia mengonfirmasi perilaku tersebut dan menjelaskan bahwa ketergantungan process.env.NODE_ENV merupakan standar industri OSS, di mana tanggung jawab penggantian diserahkan kepada bundler tingkat akhir aplikasi konsumen (seperti Vite/Webpack). Isu ditutup sebagai pengetahuan integrasi arsitektur yang valid."
        },
        {
            organization: "NVIDIA",
            repo: "NVIDIA/infra-controller",
            project: "Infrastructure Controller",
            language: "Rust",
            category: "Vulnerability",
            bugDescription: "Kerentanan pada komponen manajemen jaringan internal. Fungsi packet handler untuk server DHCP secara kaku meng-hardcode nilai parameter desired_address ke status None.",
            impact: "Bug ini memblokir dan merusak mekanisme pembaruan sewa alamat IP (DHCP lease renewal) pada klaster infrastruktur controller milik NVIDIA.",
            fileLocation: "crates/dhcp-server/src/packet_handler.rs:179",
            maintainerResponse: "Masuk ke dalam antrean triase tim security infrastructure NVIDIA setelah menerima laporan bug report resmi."
        },
        {
            organization: "OWASP Foundation",
            repo: "OWASP/CheatSheetSeries",
            project: "Security Cheat Sheet Series",
            language: "Dokumentasi / Keamanan",
            category: "Vulnerability Research",
            bugDescription: "Menemukan celah keamanan kritis terkait paparan informasi sensitif (Information Disclosure) pada manajemen infrastruktur server berbasis perangkat keras. Penggunaan flag -P pada utilitas ipmitool mengakibatkan kata sandi BMC (Baseboard Management Controller) bocor secara terbuka.",
            impact: "Kata sandi BMC dapat diintip oleh seluruh proses lokal yang sedang berjalan di dalam sistem, menciptakan risiko kebocoran informasi yang parah.",
            fileLocation: "N/A (Security Advisory)",
            maintainerResponse: "Laporan diterima dan divalidasi sebagai bentuk kontribusi peningkatan standar keamanan infrastruktur global."
        },
        {
            organization: "Hugging Face",
            repo: "huggingface/transformers",
            project: "Transformers Engine",
            language: "Python / AI-ML Core",
            category: "Logic Bug",
            bugDescription: "Kegagalan fungsi optimasi memori pada model bahasa besar (Large Language Models). Proses penataan ulang memori cache (Beam Search Cache Reorder) terlewati secara senyap (silently skipped).",
            impact: "Terjadi pada arsitektur model mutakhir seperti Mamba, XLNet, RWKV, dan Reformer. Bug ini menyebabkan hasil komputasi teks (generation output) dari kecerdasan buatan menjadi rusak atau tidak akurat saat menangani pencarian berbasis beam search.",
            fileLocation: "N/A",
            maintainerResponse: "Masuk ke dalam catatan repositori kontribusi core library Hugging Face."
        },
        {
            organization: "Google / WordPress",
            repo: "google/site-kit-wp",
            project: "Site Kit Analytics",
            language: "JavaScript / PHP",
            category: "Logic Bug",
            bugDescription: "Bug preseden operator (operator precedence) pada fungsi sanitasi data balik (sanitize callback) untuk modul Google Analytics 4.",
            impact: "Celah logika ini secara keliru mengizinkan masuknya nilai angka negatif pada parameter krusial seperti googleTagAccountID dan googleTagContainerID, yang berpotensi merusak integrasi pelacakan data situs.",
            fileLocation: "N/A",
            maintainerResponse: "Kontribusi tercatat di dalam riwayat pelacakan aktivitas repositori publik Google Site Kit."
        },
        {
            organization: "Google Engineering Fellow",
            repo: "addyosmani/agent-skills",
            project: "Agent Skills",
            language: "Konfigurasi / AI Core",
            category: "Configuration Error",
            bugDescription: "Kerusakan pustaka akibat konfigurasi pathing yang salah. File manifes pengapalan merujuk pada direktori agen .gemini/agents/ yang tidak eksis di dalam repositori.",
            impact: "Mengakibatkan 4 modul utama agen AI mengalami kegagalan fatal (broken modules) secara langsung saat dijalankan pada lingkungan runtime.",
            fileLocation: ".gemini/commands/ship.toml",
            maintainerResponse: "Divalidasi melalui pembukaan tiket issue perdana di repositori proyek tersebut."
        },
        {
            organization: "ADK Ecosystem",
            repo: "adk-python & adk-samples",
            project: "ADK Python & Samples",
            language: "Python",
            category: "Silent Type Error",
            bugDescription: "Kegagalan penanganan tipe data (Silent Type Error) pada fungsi interceptor. Fungsi dekorator lowercase_value() di dalam callback before_tool membuang nilai kembalian (return value) secara tidak sengaja.",
            impact: "Mengakibatkan pemrosesan struktur data bertipe dict() mengalami kegagalan eksekusi dan memicu TypeError fatal di latar belakang tanpa adanya log peringatan yang jelas.",
            fileLocation: "N/A",
            maintainerResponse: "Log kontribusi berhasil tercatat pada pertengahan Juni 2026."
        },
    ]
};
