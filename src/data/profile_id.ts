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
        summary: "Mahasiswa Teknologi Informasi yang berspesialisasi dalam Full-Stack Engineering dengan pengalaman langsung merancang platform ERP/POS enterprise, aplikasi berbasis AI, dan sistem cloud yang scalable menggunakan Laravel, Next.js, PostgreSQL, dan teknologi cloud modern.",
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
            { name: "Keamanan Cloud", icon: "amazonwebservices" },
            { name: "Docker", icon: "docker" },
            { name: "Vercel", icon: "vercel" },
            { name: "Railway", icon: "railway" },
            { name: "Cloudflare", icon: "cloudflare" },
            { name: "Firebase", icon: "firebase" },
            { name: "Zero-Trust Architecture", icon: "amazonwebservices" },
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
            description: "Merancang dan mengembangkan platform ERP/POS enterprise menggunakan Laravel, Next.js, dan PostgreSQL, mengintegrasikan manajemen inventaris, pembelian, penggajian, absensi, dashboard business intelligence, AI Copilot, dan role-based access control (RBAC) ke dalam sistem manajemen bisnis terpadu yang mendukung 6 administrator, 600+ produk, dan 50+ reseller aktif. Mengoptimalkan kinerja aplikasi melalui Cloudflare CDN, intelligent caching, dan optimasi kueri database, mencapai rata-rata waktu muat halaman 1,34 detik dan 91% Good Largest Contentful Paint (LCP). Mengotomatisasi operasi bisnis end-to-end dengan mengintegrasikan manajemen pesanan grosir, sinkronisasi inventaris, pelacakan pengeluaran, pelaporan keuangan, dan pemantauan stok real-time, mendukung 100+ transaksi harian sambil mengurangi waktu rekonsiliasi keuangan manual hingga 60%.",
            skills: ["Laravel", "Next.js", "PostgreSQL", "Cloudflare", "ERP/POS", "AI Copilot"]
        },
        {
            role: "Web Development Intern",
            company: "GAOTEK INC",
            type: "Magang",
            duration: "April 2026 - Sekarang",
            location: "New York, USA (Remote)",
            description: "Mengembangkan dan menyesuaikan website WordPress responsif menggunakan PHP, HTML, CSS, JavaScript, Elementor, dan Gutenberg dalam lingkungan pengembangan XAMPP lokal. Memelihara dan memperbarui website WordPress dengan mempublikasikan konten, mengoptimalkan tata letak halaman, memecahkan masalah teknis, dan menerapkan praktik SEO terbaik untuk meningkatkan kegunaan dan visibilitas pencarian. Berkolaborasi dalam lingkungan Agile remote dengan berpartisipasi dalam diskusi teknis mingguan melalui Microsoft Teams dan secara konsisten mengirimkan laporan kemajuan serta menyelesaikan tugas pengembangan tepat waktu.",
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
            description: "Menyelenggarakan 3+ acara berbasis teknologi untuk 100+ mahasiswa universitas, mencapai tingkat kehadiran konsisten 95%. Mengkoordinasikan workshop akademik teknis dan kegiatan mahasiswa yang bertujuan mendorong kolaborasi antar mahasiswa. Mendukung logistik divisi dan inisiatif berbagi pengetahuan untuk meningkatkan pengembangan keterampilan IT mahasiswa.",
            skills: ["Manajemen Acara", "Komunikasi", "Kerja Tim"]
        },
        {
            role: "Wakil Ketua – Divisi Seni dan Olahraga",
            company: "PUFA Computer Science – President University",
            type: "Organisasi",
            duration: "September 2025 - Sekarang",
            location: "President University, Bekasi (On-site)",
            description: "Memimpin 5+ kegiatan seni dan olahraga untuk 60+ mahasiswa, menghasilkan peningkatan 40% dalam keterlibatan mahasiswa departemen. Memimpin komite lintas fungsi untuk menyelenggarakan acara kampus yang dihadiri lebih dari 100 mahasiswa sambil mengkoordinasikan relawan, jadwal, dan logistik.",
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
            link: "https://nuxar.vercel.app/",
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
            title: "Grawizah",
            role: "Team Leader & Full-Stack Architect",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/grawizah.com",
            link: "https://grawizah-com.vercel.app/",
            description: "Platform Intelijen Perdagangan Global berbasis AI yang memberdayakan UMKM Indonesia untuk Go Global. Fitur neural AI matchmaking bertenaga Groq Llama 3.3, klasifikasi HS Code otomatis, pemetaan rantai pasokan real-time, perbandingan harga kompetitor, dan penerjemah perdagangan multibahasa yang mendukung 14 bahasa. Dibangun untuk TechSprint Innovation Cup 2026 dengan Next.js 14 dan backend Go (Golang) — memenangkan kategori Web Developer.",
            techStack: ["Next.js 14", "TypeScript", "Go (Golang)", "Tailwind CSS", "Supabase", "Groq Llama 3.3", "AI/ML", "JWT"],
            image: "/projects/grawizah.png"
        },
        {
            title: "TruthLayer",
            role: "Architect & Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/Truthlayer",
            link: "https://truthlayer.io",
            description: "Chrome Extension + Backend + Web Dashboard yang mengungkap niat tersembunyi setiap website yang Anda kunjungi. Menyediakan Trust Score (0-100), mendeteksi 10+ taktik manipulasi dark pattern (fake urgency, confirmshaming, disguised ads, forced action), mengaudit pengumpulan data & pelacak pihak ketiga, mengestimasi persentase konten buatan AI, dan memungkinkan berbagi laporan publik via truthlayer.io/report/domain. Dibangun dengan Manifest V3 Chrome Extension, dashboard Next.js 15, backend Node.js Express didukung Claude AI, dan deployment Docker di Netlify.",
            techStack: ["Next.js 15", "TypeScript", "Chrome Extension", "Node.js", "Express.js", "Claude AI", "Docker", "Netlify"],
            image: "/projects/thrutlayer.png"
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
            title: "HargaKita.id",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/hargakita.id",
            link: "https://hargakita.netlify.app/",
            description: "Platform pemantau harga bahan pokok Indonesia secara real-time dari ratusan pasar di 34 provinsi. SaaS visual dan ramah pengguna yang melacak harga komoditas esensial (beras, cabai, bawang, telur, minyak goreng) tanpa perlu login. Fitur laporan harga crowdsourced dengan filter validasi cerdas, scraping data harian otomatis dari portal pemerintah, grafik tren interaktif, dan akses gratis untuk seluruh masyarakat Indonesia.",
            techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Appwrite", "Netlify", "Chart.js", "Crowdsourcing"],
            image: "/projects/hargakita.png"
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
            image: "/certifications/Full-Stack_Development_101.png"
        },
        {
            name: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "Maret 2026",
            expiry: "Maret 2029",
            id: "JLX1VWN35Z72",
            description: "Penguasaan dasar semantik blok elemen layar HTML beserta tata desain ciamik CSS dengan standarisasi mutlak.",
            image: "/certifications/Dicoding_Web_Dasar.png"
        },
        {
            name: "AWS Cloud Practitioner Essentials \u2013 Training Completion",
            issuer: "Amazon Web Services (AWS)",
            date: "Maret 2026",
            id: "",
            description: "Tinjauan terpadu komputasi jaringan dunia dalam server modern, beserta ketahanan standar sistem Amazon Web Services.",
            image: "/certifications/aws_cloud_practioner_essentials.png"
        },
        {
            name: "AWS Technical Essentials",
            issuer: "Amazon Web Services (AWS)",
            date: "Januari 2026",
            id: "",
            description: "Tinjauan spesifik teknis dari struktur layanan jaringan dan pengoperasian Database terpusat Amazon Web Services.",
            image: "/certifications/aws_technical_essentials.png"
        },
        {
            name: "Google Ads Search Certification",
            issuer: "Google Digital Academy (Skillshop)",
            date: "Februari 2026",
            expiry: "Februari 2027",
            id: "173326967",
            description: "Penguasaan dominasi tingkat atas dari metode kampanye pencarian produk via Search Google dan analisis pelanggan tajam untuk penjualan optimal.",
            image: "/certifications/Google_Ads_Search.png"
        },
        {
            name: "Sertifikasi Analytics Google (GA4)",
            issuer: "Google Digital Academy (Skillshop)",
            date: "Februari 2026",
            expiry: "Februari 2027",
            id: "173326065",
            description: "Pengaturan analisis super canggih untuk membedah data tersembunyi para audiens untuk mendapatkan petunjuk emas bagi arah laju bisnis pasar.",
            image: "/certifications/Google_Analytics.png"
        },
        {
            name: "Sertifikasi Integrasi Data Lanjutan",
            issuer: "HubSpot Academy",
            date: "Februari 2026",
            expiry: "Maret 2027",
            id: "ab0238d2c3f14a16bfb744c1a9e28356",
            description: "Ahli di dalam penyatuan rantai-rantai lunak antara beberapa perangkat sentral menjadi sebuah pusaran sistem otomatis.",
            image: "/certifications/Data_Integrations_Certification.png"
        },
        {
            name: "Engineer Basis Perangkat Lunak (SEC)",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "D73F5CD372E0",
            description: "Validasi paten kelas atas standar dasar-dasar ilmu pengembangan, perancangan algoritma kuat dan strategi proses perbaikan bug menyeluruh.",
            image: "/certifications/Software_Engineer.png"
        },
        {
            name: "Frontend Developer Engineer (React)",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "84B47591D6EC",
            description: "Validasi kecekatan ahli yang mendalam menggunakan React secara interaktif, efisien serta manipulasi rendering untuk meminimalisasi hambatan memori sistem.",
            image: "/certifications/Frontend_Developer.png"
        },
        {
            name: "Golang (Basic)",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "C9F8A2B1E3D4",
            description: "Kemahiran dasar dalam bahasa pemrograman Go, meliputi sintaks, struktur data, pola konkurensi, dan penggunaan pustaka standar.",
            image: "/certifications/golang.png"
        },
        {
            name: "Software Engineer Intern",
            issuer: "HackerRank",
            date: "Januari 2026",
            id: "E4D7F2A9C1B5",
            description: "Penilaian komprehensif fundamental rekayasa perangkat lunak termasuk struktur data, algoritma, pemecahan masalah, dan praktik kode bersih.",
            image: "/certifications/software_engineer_intern.png"
        }
    ],
    competitions: [
        {
            name: "Juara Vibe Coding",
            issuer: "Google",
            date: "Juni 2026",
            category: "participant",
            description: "Berpartisipasi dalam kompetisi Vibe Coding Google, menunjukkan pembuatan prototipe cepat dan pemecahan masalah kreatif menggunakan alat pengembangan berbantuan AI.",
            image: "/certifications/Juara_Vibe_Coding_Google_Participants.png"
        },
        {
            name: "Peserta Kategori Web Development",
            issuer: "Codelab Indonesia",
            date: "Juni 2026",
            category: "participant",
            description: "Berpartisipasi dalam kompetisi TechSprint yang diselenggarakan oleh Codelab Indonesia, bertanding di kategori Web Development untuk membangun aplikasi full-stack dalam batasan waktu.",
            image: "/certifications/Web_Development_Participants.png"
        },
        {
            name: "Participant Data Automation Competition",
            issuer: "PUMA Information System President University",
            date: "Juni 2026",
            category: "participant",
            description: "Berpartisipasi dalam kompetisi Tech Sprint 3in1 yang diselenggarakan oleh PUMA Information System President University, berfokus pada perancangan pipeline data yang efisien dan alur kerja otomatis.",
            image: "/certifications/Data_Automation_Participants.png"
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
