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
}

export const profile: Profile = {
    personalInfo: {
        name: "Wisnu Alfian Nur Ashar",
        pronouns: "Dia/Nya",
        role: "Full-Stack Developer & Cyber Security",
        location: "Bekasi Timur, Kota Bekasi, Jawa Barat",
        tagline: "Membangun Sistem Produksi yang Aman dan Berkinerja Tinggi",
        summary: "Praktisi Full-Stack Developer & Keamanan Siber dengan pengalaman langsung dalam membangun aplikasi web yang scalable (dapat ditingkatkan skalanya). Terspesialisasi dalam Next.js, React, Supabase, dan desain sistem yang aman. Berhasil memberikan platform yang mendukung lebih dari 15.000 pengguna dengan peningkatan kinerja dan keamanan yang terukur. Berpengalaman memimpin tim lintas divisi untuk memodernisasi infrastruktur digital dan merampingkan operasi bisnis.",
        email: "wisnualfian117@gmail.com",
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
            { name: "Pengembangan API", icon: "postman" },
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
            { name: "Computer Vision", icon: "pytorch" },
            { name: "Model Fine-Tuning", icon: "huggingface" },
        ],
        securityCloud: [
            { name: "Keamanan Siber", icon: "hackthebox" },
            { name: "Kali Linux", icon: "kalilinux" },
            { name: "Keamanan Cloud", icon: "amazonwebservices" },
            { name: "Docker", icon: "docker" },
            { name: "Vercel", icon: "vercel" },
            { name: "Railway", icon: "railway" },
            { name: "HuggingFace", icon: "huggingface" },
        ],
        tools: [
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Android Studio", icon: "androidstudio" },
            { name: "Google Sheets", icon: "googlesheets" },
            { name: "Web Development", icon: "html5" },
            { name: "Full-Stack Development", icon: "javascript" },
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
            role: "Web Developer",
            company: "Syntecxhub",
            type: "Magang",
            duration: "Maret 2026 - Sekarang",
            location: "Remote",
            description: "Mengembangkan serta memelihara aplikasi web secara remote dengan memanfaatkan kerangka web modern untuk memberikan solusi front-end yang responsif dan terukur.",
            skills: ["Web Development", "Tim Work"]
        },
        {
            role: "Full-Stack Developer",
            company: "ASHAR GROSIR PARFUM BEKASI",
            type: "Pekerja Lepas (Wiraswasta)",
            duration: "Desember 2025 - Sekarang",
            location: "Kota Bekasi (Hybrid)",
            description: "Memimpin transformasi digital sebuah bisnis keluarga yang telah berjalan selama 20 tahun. Menerapkan teknologi web termodern untuk merampingkan alur pekerjaan, mengurangi tingkat kesalahan pendataan produk hingga 70%, serta memperluas jangkauan pasar hingga di atas 15.000 mitra ritel skala besar.",
            skills: ["Full-Stack Development", "Database"]
        },
        {
            role: "Ketua Divisi Seni & Olahraga",
            company: "PUFA Computer Science",
            type: "Kontrak",
            duration: "September 2025 - Sekarang",
            location: "Kota Bekasi (On-site)",
            description: "Mengarahkan acara-acara berskala fakultas serta memelopori inisiatif inovasi digital. Berhasil mengkoordinasikan banyak tim divisi silang demi menghasilkan program yang memberikan kepuasan serta memodernisasi metode komunikasi.",
            skills: ["Komunikasi", "Manajemen Acara"]
        },
        {
            role: "IT Development & Anggota Divisi Minat dan Bakat",
            company: "PC FKMA Jakarta As'adiyah",
            type: "Organisasi",
            duration: "Januari 2024 - Sekarang",
            location: "Ciputat Timur, Banten",
            description: "Merancang sekaligus melaksanakan perilisan website resmi keorganisasian As'adiyah di Jakarta. Berperan langsung di divisi Minat Bakat dengan mengimplementasikan portal integrasi database mandiri, sehingga menaikkan rasio efisiensi sebesar signifikan.",
            skills: ["Web Development", "Manajemen Acara", "Kerja Tim"]
        },
        {
            role: "Anggota Student Passion and Talents",
            company: "PUMA Informatic",
            type: "Kontrak",
            duration: "Oktober 2024 - September 2025",
            location: "Kota Bekasi (Hybrid)",
            description: "Merancang dan membangun solusi chatbot (Bot Interaktif) berbasis AI/Kecerdasan Buatan termutakhir untuk tingkat kepuasan pelanggan terbaik. Menurunkan jeda respon pesan secara masif sampai di bawah 60% waktu awal.",
            skills: ["Komunikasi", "Kerjasama Tim"]
        }
    ],
    projects: [
        {
            title: "SENTINEL-X",
            role: "Full-Stack Architect",
            status: "Proof of Concept",
            featured: true,
            github: "https://github.com/wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform",
            link: "https://github.com/wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform",
            description: "Platform Inteligensi Ancaman & Fusion Multi-Domain. Sistem simulasi terintegrasi untuk kesadaran situasional, korelasi berbasis AI dengan arsitektur Multi-Modal, dan respons insiden otomatis secara real-time dari berbagai sumber domain (Aviation, Maritime, Cyber, Space, Seismic, RF/SIGINT).",
            techStack: ["FastAPI", "React", "PyTorch", "Kafka", "TimescaleDB", "Blockchain", "Docker"],
            image: "/projects/sentinelx.png"
        },
        {
            title: "ColonyAI",
            role: "Product Owner & AI Engineer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/colonyai",
            link: "https://colonyai-eta.vercel.app",
            description: "Sistem Penghitung Koloni Bakteri Otomatis berbasis AI untuk laboratorium mikrobiologi. Model YOLOv8 yang di-fine-tune mencapai 94.1% mAP@0.5, 94.7% presisi, dan 92.5% recall dari 56.124 anotasi bounding box. Mengubah gambar piring agar menjadi laporan CFU/ml terstandar dalam waktu kurang dari 2 menit — mengurangi variabilitas antar-analisis hingga 92.5%. Dilengkapi CLAHE preprocessing, deteksi pelat Hough Circle, estimasi koloni SA-001, ketidakpastian pengukuran GUM, jejak audit SHA-256 untuk kepatuhan ISO 17025, serta pelaporan PDF/CSV sesuai BPOM & SNI. Dibangun dengan FastAPI, Next.js 14, PostgreSQL, dan di-deploy pada Railway dengan CI/CD pipeline.",
            techStack: ["YOLOv8", "FastAPI", "Next.js 14", "TypeScript", "PostgreSQL", "OpenCV", "AWS S3", "Railway", "Vercel"],
            image: "/projects/ColonyAI.png"
        },
        {
            title: "Shooply",
            role: "Full-Stack Architect",
            status: "Production",
            featured: true,
            link: "#",
            description: "Platform E-Commerce berkinerja mutlak lewat pemanfaatan Microservice. Kombinasi bagian utama antarmuka berbasis (Next.js SSR-optimized) dan mesin Server sangat mutakhir melalui (GoFiber Backend). Didukung skema canggih berupa (Redis-RabbitMQ-Prometheus & Zerolog-OpenTelemetry).",
            techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Query", "Zustand", "Framer Motion", "Go (Golang)", "GoFiber", "PostgreSQL", "Redis", "RabbitMQ", "OpenTelemetry", "Zerolog"],
            image: "/shooply.png"
        },
        {
            title: "Fanguard Strategic Hub",
            role: "Architect & Lead Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu",
            link: "https://vanguard-execution.vercel.app/",
            description: "Pusat dasbor kontrol eksekusi tugas skala berat dan strategi manajerial setaraf Korporasi. Dilengkapi kecepatan brutal lewat Fastify engine dengan Realtime perlindungan berlapis RBAC dan arsitektur Next.js dashboard kompleks.",
            techStack: ["Next.js 14", "Fastify", "PostgreSQL", "Prisma", "Redis", "Docker", "Socket.io", "Radix UI", "shadcn/ui", "Zustand", "Vitest"],
            image: "/vanguard.png"
        },
        {
            title: "Risk Shield System",
            role: "Lead Developer / Cyber Security",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/risk-assessment-platform",
            link: "https://riskshield.vercel.app/",
            description: "Sistem pendeteksi Risiko (GRC) tingkat atas dengan tenaga buatan AI yang mampu menganalisis standarisasi secara real-time. Langsung tersambung dengan kemampuan pintar dari sistem canggih milik Google Gemini 1.5, mempercepat laporan kepatuhan yang instan.",
            techStack: ["Next.js 14", "React", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Supabase", "Google Gemini Pro", "jsPDF", "Recharts"],
            image: "/riskshieldsystem.png"
        },
        {
            title: "Human Firewall",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/Human_Firewall_Intelligence-_Platform",
            link: "https://humanfirewall.vercel.app/",
            description: "Platform latihan berbasis Cyber Security di mana para anggota akan belajar simulasi Phishing interaktif beserta rekaman pergerakan demi ketahanan organasisasi.",
            techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
            image: "/humanfirewallintelligenceplatform.png"
        },
        {
            title: "Ashar Grosir Parfum",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/ashar-grosir",
            link: "https://www.ashargrosirparfum.com",
            description: "E-Commerce komersial ritel online utama bagi perusahaan grosir wangian berumur lebih dari dua dekade. Saat ini memperkuat distribusi lancarnya terhadap lebih dari 15,000 langganan skala besar.",
            techStack: ["React", "TypeScript", "Tailwind CSS", "Cloudflare", "CDN"],
            image: "/AsharGrosirParfum.png"
        },
        {
            title: "LexCorpus CMS Platform",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu",
            link: "https://www.lexcorpuslaw.com",
            description: "CMS skala industri (khusus bagian hukum riset & Dokumen). Menghadirkan sistem ke-editorial-an ketat berbasis aturan ganda, dengan teks rilis kaya fitur canggih.",
            techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Supabase", "Quill.js", "date-fns", "Lucide"],
            image: "/Lexcorpus.png"
        },
        {
            title: "Nuxar Perfumery",
            role: "Full-Stack Developer",
            status: "Production",
            featured: false,
            link: "https://www.nuxarperfumery.my.id",
            description: "Website merek Parfum tingkat Tinggi berselimutkan pesona Animasi Cinematik 3 Dimensi, scroll Trigger serta partikel debu menyatu. Engine didorong dengan performa Railway dalam naungan mesin Golang.",
            techStack: ["Golang", "React 19", "TypeScript", "Vite", "Tailwind CSS 3", "GSAP (ScrollTrigger)", "Railway"],
            image: "/NuxarPerfumery.png"
        },
        {
            title: "PC FKMA Jakarta Website",
            role: "Full-Stack Developer",
            status: "Production",
            featured: false,
            github: "https://github.com/wi5nuu",
            link: "https://pcfkmaasadiyahjakarta.vercel.app/",
            description: "Portal Pusat digital para cendekia dan pelajar Asumsi dari As'adiyah di wilayah DKI Jakarta. Dilengkapi data personal maupun kolom portal berita utama.",
            techStack: ["Next.js", "Tailwind CSS", "Vercel"],
            image: "/FKMA_Asadiyah_Jakarta.png"
        },
        {
            title: "Wiskost Residence",
            role: "Frontend Developer",
            status: "Production",
            featured: false,
            github: "https://github.com/wi5nuu/wiskost",
            link: "https://wiskost.vercel.app/",
            description: "Website eksklusif perumahan terinspirasi kilapan emas gelap. Didesain kuat dan dioptimasi oleh kemampuan pipeline deployment.",
            techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Docker", "Hugging Face", "Formspree", "Vercel"],
            image: "/WiskostResidence.png"
        }
    ],
    education: {
        institution: "President University",
        degree: "Sarjana Teknologi Informasi (S.Kom/B.IT)",
        duration: "September 2024 - Sekarang",
        location: "Bekasi, Indonesia",
        focus: "Keamanan Siber, Pengembangan Full-Stack, Arsitektur Database"
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
        "PUMA Informatic"
    ],
    certifications: [
        {
            name: "Pelatihan Full-Stack 101",
            issuer: "Simplilearn",
            date: "Maret 2026",
            id: "10034834",
            description: "Kursus pondasi integrasi penuh bagian antarmuka maupun sistem pusat. Menganalisis skema arsitektur berskala berbasis ekosistem JavaScript.",
            image: "/Full-Stack_Development_101.png"
        },
        {
            name: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "Maret 2026",
            expiry: "Maret 2029",
            id: "JLX1VWN35Z72",
            description: "Penguasaan dasar semantik blok elemen layar HTML beserta tata desain ciamik CSS dengan standarisasi mutlak.",
            image: "/Dicoding_Web_Dasar.png"
        },
        {
            name: "AWS Cloud Practitioner Essentials \u2013 Training Completion",
            issuer: "Amazon Web Services (AWS)",
            date: "Maret 2026",
            id: "",
            description: "Tinjauan terpadu komputasi jaringan dunia dalam server modern, beserta ketahanan standar sistem Amazon Web Services.",
            image: "/aws_cloud_practioner_essentials.png"
        },
        {
            name: "AWS Technical Essentials",
            issuer: "Amazon Web Services (AWS)",
            date: "Januari 2026",
            id: "",
            description: "Tinjauan spesifik teknis dari struktur layanan jaringan dan pengoperasian Database terpusat Amazon Web Services.",
            image: "/aws_technical_essentials.png"
        },
        {
            name: "Google Ads Search Certification",
            issuer: "Google Digital Academy (Skillshop)",
            date: "Februari 2026",
            expiry: "Februari 2027",
            id: "173326967",
            description: "Penguasaan dominasi tingkat atas dari metode kampanye pencarian produk via Search Google dan analisis pelanggan tajam untuk penjualan optimal.",
            image: "/Google_Ads_Search.png"
        },
        {
            name: "Sertifikasi Analytics Google (GA4)",
            issuer: "Google Digital Academy (Skillshop)",
            date: "Februari 2026",
            expiry: "Februari 2027",
            id: "173326065",
            description: "Pengaturan analisis super canggih untuk membedah data tersembunyi para audiens untuk mendapatkan petunjuk emas bagi arah laju bisnis pasar.",
            image: "/Google_Analytics.png"
        },
        {
            name: "Sertifikasi Integrasi Data Lanjutan",
            issuer: "HubSpot Academy",
            date: "Februari 2026",
            expiry: "Maret 2027",
            id: "ab0238d2c3f14a16bfb744c1a9e28356",
            description: "Ahli di dalam penyatuan rantai-rantai lunak antara beberapa perangkat sentral menjadi sebuah pusaran sistem otomatis.",
            image: "/Data_Integrations_Certification.png"
        },
        {
            name: "Engineer Basis Perangkat Lunak (SEC)",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "D73F5CD372E0",
            description: "Validasi paten kelas atas standar dasar-dasar ilmu pengembangan, perancangan algoritma kuat dan strategi proses perbaikan bug menyeluruh.",
            image: "/Software_Engineer.png"
        },
        {
            name: "Frontend Developer Engineer (React)",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "84B47591D6EC",
            description: "Validasi kecekatan ahli yang mendalam menggunakan React secara interaktif, efisien serta manipulasi rendering untuk meminimalisasi hambatan memori sistem.",
            image: "/Frontend_Developer.png"
        }
    ]
};
