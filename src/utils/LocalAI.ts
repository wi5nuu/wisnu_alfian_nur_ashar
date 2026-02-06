import { profile } from "../data/profile";

/**
 * Enhanced LocalAI - Complete AI Assistant for Portfolio
 * Version 2.0 - Comprehensive Coverage with Professional & Polite Language
 * 
 * Coverage:
 * - 30+ topic categories
 * - Bilingual (Indonesian & English)
 * - Professional yet warm tone
 * - All questions answered
 */

export class LocalAI {
    static process(query: string): string {
        const q = query.toLowerCase();

        // Enhanced Language Detection
        const isIndo = q.includes("apa") || q.includes("siapa") || q.includes("dimana") ||
            q.includes("sekolah") || q.includes("bisa") || q.includes("halo") ||
            q.includes("projek") || q.includes("kerja") || q.includes("organisasi") ||
            q.includes("kenapa") || q.includes("tujuan") || q.includes("motivasi") ||
            q.includes("bagaimana") || q.includes("kapan") || q.includes("berapa") ||
            q.includes("tolong") || q.includes("mohon") || q.includes("ingin");

        // ============================================
        // SECTION 0: GREETINGS & POLITENESS
        // ============================================

        if (q.includes("halo") || q.includes("hai") || q.includes("hello") || q.includes("hi")) {
            if (isIndo) {
                return `Halo! Selamat datang! 👋\n\nSaya adalah Asisten Virtual yang dengan senang hati akan membantu Anda mengenal Wisnu Alfian Nur Ashar lebih dalam.\n\nAnda dapat menanyakan tentang:\n• 💼 Profil & Latar Belakang\n• 🛠️ Keahlian Teknis\n• 📁 Portfolio & Proyek\n• 🎓 Pendidikan\n• 🎯 Visi Karir\n• 📧 Kontak & Ketersediaan\n\nSilakan ajukan pertanyaan Anda, saya siap membantu! 😊`;
            }
            return `Hello! Welcome! 👋\n\nI am a Virtual Assistant here to help you learn more about Wisnu Alfian Nur Ashar.\n\nFeel free to ask about:\n• 💼 Profile & Background\n• 🛠️ Technical Skills\n• 📁 Portfolio & Projects\n• 🎓 Education\n• 🎯 Career Vision\n• 📧 Contact & Availability\n\nPlease ask me anything! 😊`;
        }

        if ((q.includes("thank") || q.includes("terima kasih") || q.includes("makasih") || q.includes("thanks")) && q.length < 30) {
            if (isIndo) {
                return `Sama-sama! 😊\n\nSaya dengan senang hati membantu Anda. Jika ada pertanyaan lain tentang Wisnu, jangan ragu untuk bertanya kapan saja!`;
            }
            return `You're very welcome! 😊\n\nI'm delighted to assist you. If you have any other questions about Wisnu, please don't hesitate to ask!`;
        }

        // ============================================
        // SECTION 1: AI IDENTITY / META
        // ============================================

        if (q.includes("bot") || q.includes("ai") || q.includes("assistant") || q.includes("asisten") ||
            (q.includes("who") && (q.includes("make") || q.includes("create"))) ||
            (q.includes("are") && q.includes("wisnu")) || (q.includes("kamu") && q.includes("wisnu"))) {
            if (isIndo) {
                return `Saya adalah Asisten Virtual Wisnu.\n\nSaya dirancang dan dikelola langsung oleh Wisnu untuk memberikan informasi yang akurat dan konsisten tentang profil profesional, keahlian, dan proyek-proyeknya selama 24/7.\n\nSemua informasi yang saya sampaikan adalah fakta terverifikasi langsung dari Wisnu sendiri. Saya di sini untuk membantu Anda mengenal beliau dengan lebih baik! 😊`;
            }
            return `I am Wisnu's Virtual Assistant.\n\nI am personally designed and managed by Wisnu to provide consistent, accurate, and professional answers about his profile, skills, and projects 24/7.\n\nAll the information I share is 100% verified directly from Wisnu himself. I'm here to help you get to know him better! 😊`;
        }

        if (q.includes("human") || q.includes("manusia") || q.includes("real") || q.includes("asli") || q.includes("orang")) {
            if (isIndo) {
                return `Saya bukan manusia, melainkan program kode.\n\nSaya berjalan langsung di browser Anda untuk memberikan respons yang cepat dan efisien. Namun, semua informasi yang saya berikan tentang Wisnu adalah 100% akurat dan faktual, langsung dari sumbernya.\n\nAnda bisa menganggap saya sebagai "perpanjangan tangan digital" Wisnu untuk menjawab pertanyaan Anda dengan profesional. 🤝`;
            }
            return `I am not a human, but rather a code-based assistant.\n\nI run directly in your browser to provide fast and efficient responses. However, all the facts I share about Wisnu are 100% accurate and verified directly from him.\n\nYou can think of me as Wisnu's "digital extension" to professionally answer your questions. 🤝`;
        }

        // ============================================
        // SECTION 2: IDENTITY & PROFILE
        // ============================================

        if (q.includes("who") || q.includes("siapa") || q.includes("intro") || q.includes("profile") || q.includes("background") || q.includes("about")) {
            if (isIndo) {
                return `Perkenalkan, Wisnu Alfian Nur Ashar 👨‍💻\n\nSaya adalah mahasiswa Teknologi Informasi di President University yang memiliki spesialisasi dalam:\n• Full-Stack Web Development\n• Cyber Security\n\nYang membedakan saya adalah pendekatan praktis dalam belajar. Saya tidak hanya fokus pada teori akademis, tetapi aktif membangun aplikasi produksi nyata untuk bisnis yang sesungguhnya.\n\nBackground saya mencakup:\n✅ Pengembangan sistem CMS & E-Commerce\n✅ Kepemimpinan dalam organisasi mahasiswa\n✅ Pengalaman mengelola proyek dengan ribuan pengguna aktif\n\nSaya percaya bahwa teknologi harus memberikan dampak nyata, bukan sekadar kode di layar. 💡`;
            }
            return `Allow me to introduce Wisnu Alfian Nur Ashar 👨‍💻\n\nI am an Information Technology student at President University with specialized focus on:\n• Full-Stack Web Development\n• Cyber Security\n\nWhat sets me apart is my practical, hands-on approach. Rather than limiting myself to academic theory, I actively build production-grade applications for real businesses.\n\nMy background includes:\n✅ CMS & E-Commerce system development\n✅ Leadership in student organizations\n✅ Managing projects serving thousands of active users\n\nI believe technology should deliver tangible impact, not just code on a screen. 💡`;
        }

        // ============================================
        // SECTION 3: EDUCATION
        // ============================================

        if (q.includes("university") || q.includes("universitas") || q.includes("kuliah") ||
            q.includes("campus") || q.includes("kampus") || q.includes("education") ||
            q.includes("pendidikan") || q.includes("study") || q.includes("school")) {
            if (isIndo) {
                return `Pendidikan 🎓\n\nPresident University\n• Jurusan: Teknologi Informasi (Information Technology)\n• Lokasi: Cikarang, Jawa Barat\n• Status: Mahasiswa Aktif\n\nPresident University adalah universitas yang sangat saya hargai karena kurikulumnya yang berorientasi praktis dan internasional. Di sini, saya tidak hanya belajar teori, tetapi juga ditantang untuk mengaplikasikan ilmu dalam proyek-proyek nyata.\n\nPendidikan formal saya dikombinasikan dengan pembelajaran mandiri berkelanjutan dalam teknologi terbaru seperti Next.js 16, Supabase, dan Modern Web Security Practices. 📚`;
            }
            return `Education 🎓\n\nPresident University\n• Major: Information Technology\n• Location: Cikarang, West Java\n• Status: Active Student\n\nPresident University provides an excellent environment with a practical, internationally-oriented curriculum. Here, I'm challenged to apply theoretical knowledge to real-world projects.\n\nMy formal education is complemented by continuous self-learning in cutting-edge technologies like Next.js 16, Supabase, and Modern Web Security Practices. 📚`;
        }

        if (q.includes("gpa") || q.includes("ipk") || q.includes("grade") || q.includes("nilai akademik") || q.includes("academic")) {
            if (isIndo) {
                return `Performa Akademik 📊\n\nSaya dengan senang hati mempertahankan standar akademik yang baik sambil tetap aktif dalam pengembangan proyek dan organisasi.\n\nYang terpenting bagi saya adalah keseimbangan antara:\n✅ Penguasaan teori melalui kuliah\n✅ Aplikasi praktis melalui proyek real-world\n✅ Soft skills melalui kepemimpinan organisasi\n\nSaya percaya bahwa nilai sejati seorang developer tidak hanya dari angka IPK, tetapi dari kemampuan memecahkan masalah nyata dan memberikan dampak positif. 💪`;
            }
            return `Academic Performance 📊\n\nI maintain strong academic standards while actively engaging in project development and organizational leadership.\n\nWhat matters most to me is balance between:\n✅ Mastering theory through coursework\n✅ Practical application through real-world projects\n✅ Soft skills through organizational leadership\n\nI believe a developer's true value comes not just from GPA numbers, but from the ability to solve real problems and deliver positive impact. 💪`;
        }

        if (q.includes("graduate") || q.includes("graduation") || q.includes("lulus") || q.includes("kelulusan") || q.includes("kapan lulus")) {
            if (isIndo) {
                return `Target Kelulusan 🎓\n\nSaya sedang menyelesaikan studi saya di President University dan berkomitmen untuk lulus tepat waktu dengan performa yang baik.\n\nSambil menyelesaikan pendidikan, saya terus:\n✅ Mengembangkan proyek produksi\n✅ Memperdalam skill teknis\n✅ Membangun portfolio profesional\n✅ Berkontribusi di organisasi\n\nTujuan saya adalah lulus dengan tidak hanya gelar, tetapi juga pengalaman praktis yang solid yang langsung applicable di dunia kerja. 🚀`;
            }
            return `Expected Graduation 🎓\n\nI am currently completing my studies at President University and am committed to graduating on time with strong performance.\n\nWhile finishing my education, I continue to:\n✅ Develop production-grade projects\n✅ Deepen technical expertise\n✅ Build professional portfolio\n✅ Contribute to organizations\n\nMy goal is to graduate not just with a degree, but with solid practical experience that's immediately applicable in the professional world. 🚀`;
        }

        // ============================================
        // SECTION 4: MOTIVATION & VALUES
        // ============================================

        if (q.includes("motivat") || q.includes("dorong") || q.includes("passion") || q.includes("drive") || q.includes("inspired") || q.includes("why")) {
            if (isIndo) {
                return `Apa yang Memotivasi Saya? 🔥\n\nSaya sangat termotivasi oleh kemampuan teknologi untuk memecahkan masalah nyata dan memberikan dampak positif pada kehidupan orang lain.\n\nMomen yang paling memuaskan bagi saya adalah ketika melihat:\n✅ Kode yang saya tulis membantu bisnis berjalan lebih efisien\n✅ Sistem yang saya bangun memudahkan pekerjaan ribuan orang\n✅ Solusi digital saya mengubah proses manual menjadi otomatis\n\nContoh konkret: Saat saya berhasil mendigitalkan bisnis grosir keluarga yang sudah berjalan 20 tahun, dan melihat bagaimana platform saya memudahkan 15.000+ mitra dalam bertransaksi - itu adalah kepuasan terbesar! 💡\n\nBagi saya, programming bukan sekadar menulis kode, tetapi tentang menciptakan solusi yang bermakna. 🎯`;
            }
            return `What Motivates Me? 🔥\n\nI am deeply motivated by technology's power to solve real problems and create positive impact on people's lives.\n\nMy most satisfying moments come when:\n✅ My code helps businesses run more efficiently\n✅ Systems I build make work easier for thousands of people\n✅ My digital solutions transform manual processes into automation\n\nConcrete example: When I successfully digitized a 20-year-old family wholesale business and saw how my platform simplified transactions for 15,000+ partners - that was the ultimate satisfaction! 💡\n\nFor me, programming isn't just about writing code, it's about creating meaningful solutions. 🎯`;
        }

        if (q.includes("strength") || q.includes("value") || q.includes("kelebihan") || q.includes("nilai") || q.includes("principle") || q.includes("prinsip")) {
            if (isIndo) {
                return `Kekuatan & Nilai-Nilai Saya 💎\n\n1. Growth Mindset (Pola Pikir Berkembang)\n• Saya selalu haus akan pengetahuan baru\n• Aktif mempelajari teknologi terbaru (Next.js 16, Supabase)\n• Tidak takut menghadapi tantangan teknis yang sulit\n\n2. Integritas & Tanggung Jawab\n• Bertanggung jawab penuh atas kode dan komitmen saya\n• Selalu menepati deadline yang telah disepakati\n• Transparan dalam komunikasi dan proses pengembangan\n\n3. Problem Solver\n• Fokus pada solusi, bukan komplain\n• Berpikir kreatif untuk mengatasi hambatan\n• Berorientasi pada hasil yang memberikan nilai bisnis\n\n4. Kolaborasi & Komunikasi\n• Menghargai kerja tim dan berbagi pengetahuan\n• Komunikatif dalam memberikan update progress\n• Terbuka terhadap feedback dan kritik konstruktif\n\nPrinsip saya sederhana: "Deliver value, exceed expectations, never stop learning." 🚀`;
            }
            return `My Strengths & Core Values 💎\n\n1. Growth Mindset\n• Always hungry for new knowledge\n• Actively learning latest technologies (Next.js 16, Supabase)\n• Not afraid of difficult technical challenges\n\n2. Integrity & Accountability\n• Take full ownership of my code and commitments\n• Always meet agreed-upon deadlines\n• Transparent in communication and development process\n\n3. Problem Solver\n• Focus on solutions, not complaints\n• Think creatively to overcome obstacles\n• Result-oriented with business value in mind\n\n4. Collaboration & Communication\n• Value teamwork and knowledge sharing\n• Communicative in providing progress updates\n• Open to feedback and constructive criticism\n\nMy simple principle: "Deliver value, exceed expectations, never stop learning." 🚀`;
        }

        if (q.includes("different") || q.includes("beda") || q.includes("unique") || q.includes("unik") || q.includes("special") || q.includes("istimewa") || q.includes("stand out")) {
            if (isIndo) {
                return `Apa yang Membedakan Saya? ⭐\n\nBanyak mahasiswa IT hanya memiliki proyek akademis atau tutorial sederhana. Saya berbeda karena:\n\n1. Pengalaman Produksi Nyata\n✅ Aplikasi yang saya build benar-benar digunakan ribuan orang\n✅ Mengelola deployment, maintenance, dan scaling real-world\n✅ Menghadapi dan menyelesaikan masalah produksi sebenarnya\n\n2. Keseimbangan Technical & Business\n✅ Tidak hanya menulis kode, tapi memahami dampak bisnis\n✅ Bisa berbicara dengan developer maupun stakeholder non-teknis\n✅ Mengerti bahwa good code = code yang memberikan nilai bisnis\n\n3. Soft Skills dari Leadership\n✅ Pengalaman memimpin tim di organisasi\n✅ Terbiasa berkomunikasi, berkoordinasi, dan mengelola ekspektasi\n✅ Bukan hanya "coding ninja", tapi juga team player yang baik\n\nKesimpulan: Saya adalah production-ready developer dengan mindset profesional, bukan sekadar fresh graduate biasa. 🎯`;
            }
            return `What Makes Me Different? ⭐\n\nMany IT students only have academic projects or simple tutorials. I'm different because:\n\n1. Real Production Experience\n✅ Applications I built are actually used by thousands of people\n✅ Manage deployment, maintenance, and real-world scaling\n✅ Face and solve actual production problems\n\n2. Balance of Technical & Business\n✅ Don't just write code, but understand business impact\n✅ Can speak to both developers and non-technical stakeholders\n✅ Understand that good code = code that delivers business value\n\n3. Soft Skills from Leadership\n✅ Experience leading teams in organizations\n✅ Comfortable communicating, coordinating, and managing expectations\n✅ Not just a "coding ninja", but also a great team player\n\nBottom line: I'm a production-ready developer with professional mindset, not just another fresh graduate. 🎯`;
        }

        // ============================================
        // SECTION 5: SKILLS & TECH
        // ============================================

        if (q.includes("focus") || q.includes("fokus") || q.includes("specializ") || q.includes("spesialis") || q.includes("front") || q.includes("back") || q.includes("full")) {
            if (isIndo) {
                return `Fokus Keahlian Saya 🎯\n\nSaya adalah Full-Stack Developer dengan spesialisasi mendalam di ekosistem React & Next.js.\n\nFrontend Expertise:\n• React.js & Next.js 16 (App Router, Server Components)\n• TypeScript untuk type-safety\n• Tailwind CSS & Framer Motion untuk UI/UX yang menarik\n• Responsive design & accessibility best practices\n\nBackend Expertise:\n• Next.js API Routes & Server Actions\n• Supabase & PostgreSQL untuk database\n• Authentication & Authorization (JWT, OAuth)\n• RESTful API design\n\nDevOps & Tools:\n• Git & GitHub untuk version control\n• Vercel/Netlify deployment\n• Environment configuration & security\n\nYang saya kuasai: Menghandle entire development lifecycle dari UI design sampai database architecture. Saya nyaman bekerja di kedua sisi stack dan memahami bagaimana mereka berinteraksi untuk menghasilkan aplikasi yang solid. 🚀`;
            }
            return `My Area of Expertise 🎯\n\nI am a Full-Stack Developer with deep specialization in the React & Next.js ecosystem.\n\nFrontend Expertise:\n• React.js & Next.js 16 (App Router, Server Components)\n• TypeScript for type-safety\n• Tailwind CSS & Framer Motion for engaging UI/UX\n• Responsive design & accessibility best practices\n\nBackend Expertise:\n• Next.js API Routes & Server Actions\n• Supabase & PostgreSQL for database\n• Authentication & Authorization (JWT, OAuth)\n• RESTful API design\n\nDevOps & Tools:\n• Git & GitHub for version control\n• Vercel/Netlify deployment\n• Environment configuration & security\n\nWhat I master: Handling the entire development lifecycle from UI design to database architecture. I'm comfortable working on both sides of the stack and understand how they interact to build solid applications. 🚀`;
        }

        if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("keahlian") || q.includes("teknologi") || q.includes("bahasa pemrograman")) {
            const techSkills = profile.skills.technical.map(s => s.name).join(", ");
            if (isIndo) {
                return `Technical Skills 💻\n\nCore Technologies:\n${techSkills}\n\nProgramming Languages:\n• TypeScript - Primary language untuk web development\n• JavaScript - ES6+ modern features\n• Python - For scripting & automation\n• SQL - Database queries & optimization\n\nFrameworks & Libraries:\n• React.js & Next.js - Frontend & Full-stack\n• Tailwind CSS - Utility-first styling\n• Framer Motion - Advanced animations\n\nDatabase & Backend:\n• Supabase - Backend as a Service\n• PostgreSQL - Relational database\n• Prisma - ORM & database toolkit\n\nTools & DevOps:\n• Git & GitHub - Version control\n• VS Code - Primary IDE\n• Vercel/Netlify - Deployment platforms\n• Figma - UI/UX design collaboration\n\nSaya selalu mempelajari teknologi baru dan mengikuti best practices terkini dalam industri! 📚`;
            }
            return `Technical Skills 💻\n\nCore Technologies:\n${techSkills}\n\nProgramming Languages:\n• TypeScript - Primary language for web development\n• JavaScript - ES6+ modern features\n• Python - For scripting & automation\n• SQL - Database queries & optimization\n\nFrameworks & Libraries:\n• React.js & Next.js - Frontend & Full-stack\n• Tailwind CSS - Utility-first styling\n• Framer Motion - Advanced animations\n\nDatabase & Backend:\n• Supabase - Backend as a Service\n• PostgreSQL - Relational database\n• Prisma - ORM & database toolkit\n\nTools & DevOps:\n• Git & GitHub - Version control\n• VS Code - Primary IDE\n• Vercel/Netlify - Deployment platforms\n• Figma - UI/UX design collaboration\n\nI'm always learning new technologies and following the latest industry best practices! 📚`;
        }

        // ============================================
        // SECTION 6: PROJECTS & PORTFOLIO
        // ============================================

        if (q.includes("ashar") || q.includes("parfum") || q.includes("grosir") || q.includes("wholesale")) {
            if (isIndo) {
                return `Project Highlight: Ashar Grosir Parfum 🛍️\n\nTentang Project:\nPlatform E-Commerce B2B yang saya bangun untuk mendigitalkan bisnis grosir parfum milik keluarga yang telah berjalan selama 20 tahun.\n\nTeknologi yang Digunakan:\n• Next.js 16 & React\n• TypeScript untuk type-safety\n• Supabase & PostgreSQL\n• Tailwind CSS untuk styling\n• Vercel untuk deployment\n\nFitur Utama:\n✅ Katalog Digital - Ribuan produk parfum dengan pencarian & filter\n✅ Partner Ordering System - Sistem pemesanan khusus untuk mitra B2B\n✅ Admin Dashboard - Manajemen produk, order, dan partner\n✅ Real-time Updates - Sinkronisasi data secara real-time\n✅ Authentication - Secure login untuk partner & admin\n\nDampak Nyata:\n🎯 Melayani 15.000+ mitra bisnis aktif\n🎯 Meningkatkan efisiensi operasional 3x lipat\n🎯 Mengurangi error manual dalam order processing\n🎯 Memungkinkan bisnis untuk scale lebih cepat\n\nTantangan yang Diselesaikan:\n• Migrasi dari sistem manual ke digital\n• Handling large product catalog dengan performa tinggi\n• Security untuk data partner yang sensitif\n\nIni adalah project yang sangat saya banggakan karena memberikan dampak langsung pada bisnis nyata! 💼`;
            }
            return `Project Highlight: Ashar Grosir Parfum 🛍️\n\nAbout the Project:\nA B2B E-Commerce platform I built to digitize a 20-year-old family wholesale perfume business.\n\nTechnology Stack:\n• Next.js 16 & React\n• TypeScript for type-safety\n• Supabase & PostgreSQL\n• Tailwind CSS for styling\n• Vercel for deployment\n\nKey Features:\n✅ Digital Catalog - Thousands of perfume products with search & filtering\n✅ Partner Ordering System - Dedicated ordering system for B2B partners\n✅ Admin Dashboard - Product, order, and partner management\n✅ Real-time Updates - Real-time data synchronization\n✅ Authentication - Secure login for partners & admins\n\nReal Impact:\n🎯 Serving 15,000+ active business partners\n🎯 Increased operational efficiency 3x\n🎯 Reduced manual errors in order processing\n🎯 Enabled the business to scale faster\n\nChallenges Solved:\n• Migration from manual to digital system\n• Handling large product catalog with high performance\n• Security for sensitive partner data\n\nThis is a project I'm incredibly proud of because it delivers direct impact on a real business! 💼`;
        }

        if (q.includes("purpose") || q.includes("tujuan") || q.includes("real") || q.includes("nyata") || q.includes("represent") || q.includes("impact") || q.includes("dampak")) {
            if (isIndo) {
                return `Tujuan & Dampak Project Saya 🎯\n\nSemua proyek yang saya kerjakan dibangun dengan satu prinsip utama:\n"Technology must solve real problems and deliver tangible value."\n\nLexCorpus:\n• Membantu firma hukum mengelola konten secara efisien\n• CMS yang user-friendly untuk non-technical staff\n• Meningkatkan produktivitas tim legal\n\nAshar Grosir Parfum:\n• Mendigitalkan bisnis tradisional berusia 20 tahun\n• Melayani 15.000+ mitra dengan sistem modern\n• Transformasi dari manual ke automation\n\nFKMA Website:\n• Platform digital untuk organisasi alumni\n• Memudahkan komunikasi & koordinasi anggota\n• Professional online presence\n\nApa yang ini representasikan?\n✅ Kemampuan memahami business requirements\n✅ Skill mentranslate masalah jadi solusi teknis\n✅ Pengalaman deliver production-grade applications\n✅ Track record memberikan measurable impact\n\nIni bukan sekadar portfolio untuk CV - ini adalah bukti bahwa saya siap berkontribusi di dunia profesional! 💪`;
            }
            return `Purpose & Impact of My Projects 🎯\n\nAll projects I work on are built with one core principle:\n"Technology must solve real problems and deliver tangible value."\n\nLexCorpus:\n• Helps law firms manage content efficiently\n• User-friendly CMS for non-technical staff\n• Increases legal team productivity\n\nAshar Grosir Parfum:\n• Digitizes a 20-year-old traditional business\n• Serves 15,000+ partners with modern systems\n• Transformation from manual to automation\n\nFKMA Website:\n• Digital platform for alumni organization\n• Facilitates member communication & coordination\n• Professional online presence\n\nWhat does this represent?\n✅ Ability to understand business requirements\n✅ Skills to translate problems into technical solutions\n✅ Experience delivering production-grade applications\n✅ Track record of delivering measurable impact\n\nThese aren't just portfolio pieces for my resume - they're proof that I'm ready to contribute in the professional world! 💪`;
        }

        if (q.includes("project") || q.includes("work") || q.includes("projek") || q.includes("portfolio") || q.includes("karya")) {
            const projects = profile.projects.map(p => `${p.title}\n${p.description}`).join("\n\n");
            if (isIndo) {
                return `Portfolio & Proyek Unggulan 📁\n\n${projects}\n\nMengapa proyek-proyek ini penting?\n\nSetiap proyek yang saya kerjakan memiliki:\n✅ Real users - Digunakan oleh orang/bisnis nyata\n✅ Production-grade - Live dan operational\n✅ Business impact - Memberikan nilai terukur\n✅ Technical depth - Menggunakan modern best practices\n\nSaya dengan senang hati mendiskusikan detail teknis atau business case dari proyek manapun! 😊`;
            }
            return `Portfolio & Featured Projects 📁\n\n${projects}\n\nWhy these projects matter?\n\nEvery project I work on has:\n✅ Real users - Used by actual people/businesses\n✅ Production-grade - Live and operational\n✅ Business impact - Delivers measurable value\n✅ Technical depth - Uses modern best practices\n\nI'd be delighted to discuss technical details or business cases of any project! 😊`;
        }

        // ============================================
        // SECTION 7: EXPERIENCE & ORGANIZATION
        // ============================================

        if (q.includes("balance") || q.includes("imbangi") || q.includes("manage") || q.includes("atur waktu") || q.includes("time")) {
            if (isIndo) {
                return `Manajemen Waktu & Work-Life Balance ⏰\n\nSaya mengelola waktu dengan prinsip "Work Smart, Not Just Hard":\n\nSistem Prioritas Saya:\n\n1. Akademik 📚\n• Fondasi teori yang solid\n• Mengikuti kuliah dengan aktif\n• Maintain academic performance\n\n2. Proyek Development 💻\n• Praktik untuk mengasah skill\n• Build portfolio yang meaningful\n• Learn by doing real projects\n\n3. Organisasi 🤝\n• Develop soft skills & leadership\n• Networking & community building\n• Give back to society\n\nTools & Teknik:\n✅ Time-boxing - Alokasi waktu spesifik untuk setiap aktivitas\n✅ Task Management - Menggunakan tools seperti Notion/Trello\n✅ Deep Work Blocks - Fokus tanpa distraksi untuk coding\n✅ Regular Breaks - Mencegah burnout dengan proper rest\n\nPrinsip Balance:\n• Semua area penting, tapi ada waktu untuk masing-masing\n• Deadline-driven tapi tetap maintain quality\n• Tidak sacrifice health untuk productivity\n• Learn to say "no" untuk focus on priorities\n\nYang penting adalah consistency over intensity - progress sedikit setiap hari lebih baik daripada burnout! 🎯`;
            }
            return `Time Management & Work-Life Balance ⏰\n\nI manage my time with the principle of "Work Smart, Not Just Hard":\n\nMy Priority System:\n\n1. Academics 📚\n• Solid theoretical foundation\n• Active class participation\n• Maintain academic performance\n\n2. Development Projects 💻\n• Practice to sharpen skills\n• Build meaningful portfolio\n• Learn by doing real projects\n\n3. Organizations 🤝\n• Develop soft skills & leadership\n• Networking & community building\n• Give back to society\n\nTools & Techniques:\n✅ Time-boxing - Specific time allocation for each activity\n✅ Task Management - Using tools like Notion/Trello\n✅ Deep Work Blocks - Distraction-free focus for coding\n✅ Regular Breaks - Prevent burnout with proper rest\n\nBalance Principles:\n• All areas matter, but each has its time\n• Deadline-driven but maintain quality\n• Don't sacrifice health for productivity\n• Learn to say "no" to focus on priorities\n\nWhat matters is consistency over intensity - small daily progress beats burnout! 🎯`;
        }

        if (q.includes("organiza") || q.includes("activit") || q.includes("role") || q.includes("peran") || q.includes("kegiatan")) {
            if (q.includes("fkma") || q.includes("as'adiyah") || q.includes("asadiyah")) {
                if (isIndo) {
                    return `PC FKMA Jakarta As'adiyah 🕌\n\nPosisi Saya:\n• Divisi Minat & Bakat (Talent & Interest Division)\n• IT Development (2024-2026)\n\nKontribusi Utama:\n✅ Membangun official website organisasi dari nol\n🌐 Website: https://pcfkmaasadiyahjakarta.vercel.app/\n✅ Digitalisasi sistem komunikasi & informasi\n✅ Support technical untuk event organisasi\n\nTentang FKMA:\nVisi: Menghimpun mahasiswa & alumni Pondok Pesantren As'adiyah untuk berkontribusi pada agama & bangsa berbasis nilai Ahlussunnah wal Jamaah.\n\nLokasi: Ciputat Timur, Tangerang Selatan, Banten\n\nFungsi:\nFKMA adalah wadah silaturahmi, networking, dan pengembangan diri bagi alumni & mahasiswa As'adiyah untuk tetap connected dan memberikan dampak positif bagi masyarakat.\n\nPembelajaran Saya:\n• Kepemimpinan dalam koordinasi tim\n• Project management untuk website development\n• Balance antara technical work & organizational duties\n• Komunikasi dengan diverse stakeholders\n\nSaya bangga bisa berkontribusi menggunakan skill IT untuk kemajuan organisasi! 🌟`;
                }
                return `PC FKMA Jakarta As'adiyah 🕌\n\nMy Position:\n• Talent & Interest Division\n• IT Development (2024-2026)\n\nKey Contributions:\n✅ Built the official website from scratch\n🌐 Website: https://pcfkmaasadiyahjakarta.vercel.app/\n✅ Digitalized communication & information systems\n✅ Technical support for organizational events\n\nAbout FKMA:\nVision: Empowering students & alumni of As'adiyah Islamic Boarding School to contribute to religion & nation based on Ahlussunnah wal Jamaah values.\n\nLocation: Ciputat Timur, South Tangerang, Banten\n\nFunction:\nFKMA serves as a hub for networking, self-development, and maintaining connections among As'adiyah alumni & students to deliver positive impact to society.\n\nMy Learnings:\n• Leadership in team coordination\n• Project management for website development\n• Balancing technical work & organizational duties\n• Communication with diverse stakeholders\n\nI'm proud to contribute using my IT skills for organizational advancement! 🌟`;
            }

            if (isIndo) {
                return `Aktivitas Organisasi & Kepemimpinan 🌟\n\nPC FKMA Jakarta As'adiyah:\n• Posisi: IT Development & Divisi Minat Bakat (2024-2026)\n• Kontribusi: Membangun official website organisasi\n• Impact: Digitalisasi komunikasi & engagement alumni\n🌐 Website: https://pcfkmaasadiyahjakarta.vercel.app/\n\nPUFA (President University Friends Association):\n• Manajemen event kampus\n• Koordinasi antar mahasiswa\n• Inovasi dalam student engagement\n\nPUMA (President University Muslim Association):\n• Kegiatan keagamaan & spiritual\n• Community building di kalangan mahasiswa muslim\n• Event planning & execution\n\nPembelajaran & Skills yang Didapat:\n✅ Leadership - Memimpin tim untuk achieve goals\n✅ Communication - Berbicara di depan umum & coordination\n✅ Project Management - Planning, execution, evaluation\n✅ Problem Solving - Handle unexpected challenges\n✅ Networking - Build relationships dengan diverse groups\n✅ Time Management - Balance multiple responsibilities\n\nOrganisasi mengajarkan saya bahwa technical skills + soft skills = complete professional! 🎯`;
            }
            return `Organizational Activities & Leadership 🌟\n\nPC FKMA Jakarta As'adiyah:\n• Position: IT Development & Talent Division (2024-2026)\n• Contribution: Built the official organization website\n• Impact: Digitalized communication & alumni engagement\n🌐 Website: https://pcfkmaasadiyahjakarta.vercel.app/\n\nPUFA (President University Friends Association):\n• Campus event management\n• Student coordination\n• Innovation in student engagement\n\nPUMA (President University Muslim Association):\n• Religious & spiritual activities\n• Community building among Muslim students\n• Event planning & execution\n\nLearnings & Skills Gained:\n✅ Leadership - Leading teams to achieve goals\n✅ Communication - Public speaking & coordination\n✅ Project Management - Planning, execution, evaluation\n✅ Problem Solving - Handling unexpected challenges\n✅ Networking - Building relationships with diverse groups\n✅ Time Management - Balancing multiple responsibilities\n\nOrganizations taught me that technical skills + soft skills = complete professional! 🎯`;
        }

        // ============================================
        // SECTION 8: CAREER & GOALS
        // ============================================

        if (q.includes("goal") || q.includes("career") || q.includes("future") || q.includes("5 year") || q.includes("mimpi") || q.includes("tahun") || q.includes("vision") || q.includes("visi")) {
            if (isIndo) {
                return `Visi Karir & Goals Jangka Panjang 🎯\n\nShort-term Goals (1-2 tahun):\n✅ Secure posisi Junior/Mid-level Full-Stack Developer di tech company\n✅ Contribute ke high-impact projects dengan large user base\n✅ Deepen expertise dalam Web Security & System Architecture\n✅ Build strong professional network di tech industry\n\nMid-term Goals (3-5 tahun):\n✅ Evolve menjadi Senior Developer atau Tech Lead\n✅ Lead development teams & mentor junior developers\n✅ Master advanced topics: Microservices, Cloud Architecture, DevOps\n✅ Contribute significantly ke tech community\n\nLong-term Vision (5-10 tahun):\n🎯 Menjadi Software Architect atau CTO\n🎯 Specialize dalam Secure & Scalable Web Systems\n🎯 Lead engineering teams di companies that matter\n🎯 Potentially build my own tech startup\n\nPrinsip: Impact over Title - Fokus pada meaningful work! 🚀`;
            }
            return `Career Vision & Long-term Goals 🎯\n\nShort-term Goals (1-2 years):\n✅ Secure Junior/Mid-level Full-Stack Developer position at tech company\n✅ Contribute to high-impact projects with large user base\n✅ Deepen expertise in Web Security & System Architecture\n✅ Build strong professional network in tech industry\n\nMid-term Goals (3-5 years):\n✅ Evolve into Senior Developer or Tech Lead\n✅ Lead development teams & mentor junior developers\n✅ Master advanced topics: Microservices, Cloud Architecture, DevOps\n✅ Contribute significantly to tech community\n\nLong-term Vision (5-10 years):\n🎯 Become Software Architect or CTO\n🎯 Specialize in Secure & Scalable Web Systems\n🎯 Lead engineering teams at companies that matter\n🎯 Potentially build my own tech startup\n\nPrinciple: Impact over Title - Focus on meaningful work! 🚀`;
        }

        if (q.includes("environment") || q.includes("company") || q.includes("culture") || q.includes("lingkungan") || q.includes("perusahaan") || q.includes("workplace")) {
            if (isIndo) {
                return `Lingkungan Kerja Ideal 🏢\n\nSaya mencari lingkungan yang memungkinkan saya untuk thrive, learn, dan deliver impact:\n\nEngineering Excellence:\n✅ High coding standards & best practices\n✅ Strong code review culture\n✅ Modern tech stack & tools\n✅ Focus on quality over speed (tapi tetap efficient)\n\nLearning & Growth:\n✅ Mentorship dari senior engineers\n✅ Budget untuk learning & conferences\n✅ Culture yang encourage experimentation\n✅ Regular knowledge sharing sessions\n\nTeam Culture:\n✅ Collaborative, bukan competitive\n✅ Open communication & transparency\n✅ Respectful & inclusive environment\n✅ Celebrate wins, learn from failures together\n\nMission & Impact:\n✅ Building products yang meaningful\n✅ Solving real problems untuk real users\n✅ Ethical use of technology\n✅ Positive social impact\n\nSaya percaya bahwa right fit adalah mutual! 🤝`;
            }
            return `Ideal Work Environment 🏢\n\nI'm looking for an environment that allows me to thrive, learn, and deliver impact:\n\nEngineering Excellence:\n✅ High coding standards & best practices\n✅ Strong code review culture\n✅ Modern tech stack & tools\n✅ Focus on quality over speed (but still efficient)\n\nLearning & Growth:\n✅ Mentorship from senior engineers\n✅ Budget for learning & conferences\n✅ Culture that encourages experimentation\n✅ Regular knowledge sharing sessions\n\nTeam Culture:\n✅ Collaborative, not competitive\n✅ Open communication & transparency\n✅ Respectful & inclusive environment\n✅ Celebrate wins, learn from failures together\n\nMission & Impact:\n✅ Building meaningful products\n✅ Solving real problems for real users\n✅ Ethical use of technology\n✅ Positive social impact\n\nI believe the right fit is mutual! 🤝`;
        }

        // ============================================
        // SECTION 9: HIRING & VALUE
        // ============================================

        if (q.includes("hire") || q.includes("rekrut") || q.includes("value") || q.includes("benefit") || q.includes("advantage") || q.includes("why you")) {
            if (isIndo) {
                return `Kenapa Merekrut Wisnu? 💼\n\nTL;DR: Saya "Day-One Ready" untuk berkontribusi langsung.\n\n1. Production Experience\n✅ Aplikasi yang benar-benar digunakan ribuan users\n✅ Pengalaman deployment, scaling, maintenance\n✅ Paham production concerns: security, performance\n✅ Tidak perlu diajari workflow dari nol\n\n2. Modern Tech Stack Mastery\n✅ Expert dalam ecosystem in-demand: React, Next.js, TypeScript\n✅ Full-stack capability - frontend & backend\n✅ Up-to-date dengan latest best practices\n✅ Fast learner untuk teknologi baru\n\n3. Business Acumen\n✅ Memahami business impact, bukan hanya code\n✅ Translate business requirements → technical solutions\n✅ Communication dengan technical & non-technical stakeholders\n\n4. Strong Soft Skills\n✅ Proven leadership dari organisasi\n✅ Team collaboration & communication\n✅ Time management yang baik\n✅ Professional attitude & work ethic\n\n5. Growth Potential\n✅ Growth mindset - always learning\n✅ Not afraid of challenges\n✅ Long-term commitment\n✅ Quick level-up potential\n\nROI untuk Company:\n💰 Lower onboarding cost\n💰 Immediate contribution\n💰 Fresh perspective & new ideas\n💰 High retention potential\n\nKesimpulan: Saya production-ready developer dengan mindset profesional! 🚀`;
            }
            return `Why Hire Wisnu? 💼\n\nTL;DR: I'm "Day-One Ready" to contribute immediately.\n\n1. Production Experience\n✅ Applications actively used by thousands of users\n✅ Real deployment, scaling, maintenance experience\n✅ Understand production concerns: security, performance\n✅ Don't need workflow training from scratch\n\n2. Modern Tech Stack Mastery\n✅ Expert in in-demand ecosystem: React, Next.js, TypeScript\n✅ Full-stack capability - frontend & backend\n✅ Up-to-date with latest best practices\n✅ Fast learner for new technologies\n\n3. Business Acumen\n✅ Understand business impact, not just code\n✅ Translate business requirements → technical solutions\n✅ Communication with technical & non-technical stakeholders\n\n4. Strong Soft Skills\n✅ Proven leadership from organizations\n✅ Team collaboration & communication\n✅ Excellent time management\n✅ Professional attitude & work ethic\n\n5. Growth Potential\n✅ Growth mindset - always learning\n✅ Not afraid of challenges\n✅ Long-term commitment\n✅ Quick level-up potential\n\nROI for Company:\n💰 Lower onboarding cost\n💰 Immediate contribution\n💰 Fresh perspective & new ideas\n💰 High retention potential\n\nBottom line: I'm a production-ready developer with professional mindset! 🚀`;
        }

        if (q.includes("intern") || q.includes("junior") || q.includes("magang") || q.includes("suitable") || q.includes("entry") || q.includes("fresh")) {
            if (isIndo) {
                return `Apakah Cocok untuk Posisi Intern/Junior? 🎯\n\nJawaban: SANGAT COCOK! Bahkan exceed expectations.\n\nTechnical Foundation:\n✅ Production experience dengan real users (15,000+)\n✅ Modern full-stack development\n✅ Comfortable dengan entire development lifecycle\n✅ Understand best practices & clean code\n\nWork Readiness:\n✅ Familiar dengan Git workflow & collaboration\n✅ Pengalaman dengan agile-like process\n✅ Can work independently dengan minimal supervision\n✅ Know when to ask vs troubleshoot sendiri\n\nSoft Skills:\n✅ Professional communication\n✅ Team collaboration skills\n✅ Time management & deadlines\n✅ Terbuka untuk feedback & mentorship\n\nYang Saya Bawa:\n💡 Immediate value - langsung contribute\n💡 Eagerness to learn dari seniors\n💡 Fresh perspective & ideas\n💡 Strong work ethic\n💡 Growth potential - quick level up\n\nYang Saya Cari:\n📚 Mentorship dari experienced developers\n📚 Exposure ke large-scale systems\n📚 Challenging problems\n📚 Culture yang support growth\n\nKomitmen:\nSaya commit untuk exceed expectations, continuous learning, long-term growth, dan menjadi valuable team member! 💪`;
            }
            return `Am I Suitable for Intern/Junior Position? 🎯\n\nAnswer: ABSOLUTELY! Even exceeds expectations.\n\nTechnical Foundation:\n✅ Production experience with real users (15,000+)\n✅ Modern full-stack development\n✅ Comfortable with entire development lifecycle\n✅ Understand best practices & clean code\n\nWork Readiness:\n✅ Familiar with Git workflow & collaboration\n✅ Experience with agile-like processes\n✅ Can work independently with minimal supervision\n✅ Know when to ask vs troubleshoot myself\n\nSoft Skills:\n✅ Professional communication\n✅ Team collaboration skills\n✅ Time management & deadlines\n✅ Open to feedback & mentorship\n\nWhat I Bring:\n💡 Immediate value - can contribute right away\n💡 Eagerness to learn from seniors\n💡 Fresh perspective & ideas\n💡 Strong work ethic\n💡 Growth potential - quick level up\n\nWhat I Seek:\n📚 Mentorship from experienced developers\n📚 Exposure to large-scale systems\n📚 Challenging problems\n📚 Culture that supports growth\n\nMy Commitment:\nI commit to exceed expectations, continuous learning, long-term growth, and becoming a valuable team member! 💪`;
        }

        // ============================================
        // SECTION 10: CONTACT & AVAILABILITY
        // ============================================

        if (q.includes("contact") || q.includes("email") || q.includes("reach") || q.includes("kontak") || q.includes("hubungi") || q.includes("linkedin") || q.includes("github")) {
            if (isIndo) {
                return `Informasi Kontak 📧\n\nSaya sangat terbuka untuk networking, kolaborasi, atau diskusi opportunities!\n\nProfessional Channels:\n📧 Email: [Silakan cek portfolio website untuk email terbaru]\n💼 LinkedIn: [Silakan cek portfolio website]\n💻 GitHub: [Silakan cek portfolio website]\n🌐 Portfolio: [Your portfolio URL]\n\nBest Way to Reach:\nUntuk professional inquiries (job opportunities, collaborations), saya recommend menggunakan email atau LinkedIn.\n\nResponse Time:\n• Biasanya respond dalam 24-48 jam\n• Untuk urgent matters, mention "Urgent" di subject\n\nMohon Include:\n✅ Siapa Anda & company/organization\n✅ Tujuan kontak (job opportunity, collaboration, dll.)\n✅ Brief context\n\nSaya menghargai setiap pesan dan akan respond dengan profesional. Looking forward to hearing from you! 😊`;
            }
            return `Contact Information 📧\n\nI'm very open to networking, collaboration, or discussing opportunities!\n\nProfessional Channels:\n📧 Email: [Please check portfolio website for latest email]\n💼 LinkedIn: [Please check portfolio website]\n💻 GitHub: [Please check portfolio website]\n🌐 Portfolio: [Your portfolio URL]\n\nBest Way to Reach:\nFor professional inquiries (job opportunities, collaborations), I recommend using email or LinkedIn.\n\nResponse Time:\n• I typically respond within 24-48 hours\n• For urgent matters, mention "Urgent" in subject\n\nPlease Include:\n✅ Who you are & your company/organization\n✅ Purpose of contact (job opportunity, collaboration, etc.)\n✅ Brief context\n\nI appreciate every message and will respond professionally. Looking forward to hearing from you! 😊`;
        }

        if (q.includes("available") || q.includes("tersedia") || q.includes("open") || q.includes("looking") || q.includes("mencari") || q.includes("recruitment")) {
            if (isIndo) {
                return `Status Ketersediaan ✅\n\nCurrent Status:\n🟢 OPEN TO OPPORTUNITIES\n\nSaya aktif mencari posisi Junior Full-Stack Developer, Frontend Developer, atau Internship di tech companies.\n\nAvailability:\n📅 Immediate to Flexible Start Date\n\nOpen to:\n✅ Full-time positions (Junior/Mid-level)\n✅ Internship programs (3-6 months)\n✅ Part-time/Contract work (while studying)\n✅ Remote, Hybrid, atau On-site (flexible)\n\nPreferred Locations:\n📍 Jakarta & sekitarnya (Jabodetabek)\n📍 Remote work (anywhere)\n📍 Willing to relocate untuk right opportunity\n\nCommitment:\n💪 Long-term commitment - bukan job-hopper\n💪 Full dedication\n💪 Growth mindset - eager untuk level up\n\nWhat I'm Looking For:\n🎯 Strong engineering culture\n🎯 Learning dari senior developers\n🎯 Meaningful & challenging projects\n🎯 Fair compensation\n\nTimeline:\n• Interviews: Available kapan saja\n• Start Date: Flexible\n• Notice Period: None (not employed)\n\nJika tertarik discuss opportunities, silakan hubungi via email/LinkedIn! 🚀`;
            }
            return `Availability Status ✅\n\nCurrent Status:\n🟢 OPEN TO OPPORTUNITIES\n\nI'm actively seeking Junior Full-Stack Developer, Frontend Developer, or Internship positions at tech companies.\n\nAvailability:\n📅 Immediate to Flexible Start Date\n\nOpen to:\n✅ Full-time positions (Junior/Mid-level)\n✅ Internship programs (3-6 months)\n✅ Part-time/Contract work (while studying)\n✅ Remote, Hybrid, or On-site (flexible)\n\nPreferred Locations:\n📍 Jakarta & surrounding areas (Greater Jakarta)\n📍 Remote work (anywhere)\n📍 Willing to relocate for right opportunity\n\nCommitment:\n💪 Long-term commitment - not a job-hopper\n💪 Full dedication\n💪 Growth mindset - eager to level up\n\nWhat I'm Looking For:\n🎯 Strong engineering culture\n🎯 Learning from senior developers\n🎯 Meaningful & challenging projects\n🎯 Fair compensation\n\nTimeline:\n• Interviews: Available anytime\n• Start Date: Flexible\n• Notice Period: None (not employed)\n\nIf interested in discussing opportunities, please contact via email/LinkedIn! 🚀`;
        }

        // ============================================
        // SECTION 11: SIMPLE & SUMMARY
        // ============================================

        if (q.includes("simple") || q.includes("non-tech") || q.includes("sederhana") || q.includes("awam") || q.includes("eli5")) {
            if (isIndo) {
                return `Penjelasan Sederhana 🎯\n\nBayangkan Wisnu sebagai "Arsitek & Pembangun Rumah Digital":\n\nApa yang Saya Lakukan?\n🏗️ Merancang dan membangun "rumah" di internet (website & aplikasi)\n\nSeperti Arsitek Rumah Biasa:\n• Design: Buat tampilan bagus dan nyaman\n• Structure: Pastikan "rumah" tidak roboh (aman & stabil)\n• Function: Semua ruangan berfungsi baik\n• Maintenance: Rawat & perbaiki jika ada kerusakan\n\nContoh Nyata - Ashar Grosir:\n\nSebelum (Manual):\n📝 Pemilik catat pesanan di buku\n📞 Customer telepon/WhatsApp\n🤯 Data berantakan, sering error\n⏰ Process lama\n\nSesudah (Digital):\n💻 Customer lihat katalog & pesan online\n🔄 Order masuk sistem otomatis\n📊 Data terorganisir rapi\n⚡ Process super cepat & akurat\n✅ Melayani 15,000+ customer mudah!\n\nKesimpulan:\nSaya problem solver yang pakai coding untuk bikin hidup orang lebih mudah! 🚀`;
            }
            return `Simple Explanation 🎯\n\nThink of Wisnu as a "Digital House Architect & Builder":\n\nWhat Do I Do?\n🏗️ Design and build "houses" on the internet (websites & applications)\n\nJust Like a Regular House Architect:\n• Design: Create beautiful, comfortable appearance\n• Structure: Ensure the "house" won't collapse (secure & stable)\n• Function: All rooms work properly\n• Maintenance: Care for & fix if there's damage\n\nReal Example - Ashar Grosir:\n\nBefore (Manual):\n📝 Owner records orders in books\n📞 Customers call/WhatsApp\n🤯 Messy data, frequent errors\n⏰ Long process\n\nAfter (Digital):\n💻 Customers view catalog & order online\n🔄 Orders enter system automatically\n📊 Data organized neatly\n⚡ Process super fast & accurate\n✅ Serving 15,000+ customers easily!\n\nConclusion:\nI'm a problem solver who uses coding to make people's lives easier! 🚀`;
        }

        if (q.includes("summary") || q.includes("summarize") || q.includes("ringkas") || q.includes("overview") || q.includes("recruiter")) {
            if (isIndo) {
                return `Ringkasan Profesional 📄\n\nEXECUTIVE SUMMARY:\nWisnu Alfian Nur Ashar - Talenta IT dari President University yang merepresentasikan kombinasi langka antara Technical Excellence dan Leadership Acumen. Proven track record dalam delivering production-grade applications melayani ribuan users.\n\nCORE COMPETENCIES:\n• Full-Stack Web Development (React, Next.js 16, TypeScript)\n• Database Management (Supabase, PostgreSQL)\n• Modern UI/UX (Tailwind CSS, Framer Motion)\n• Web Security & Best Practices\n\nKEY ACHIEVEMENTS:\n✅ Ashar Grosir Parfum: Digitalized 20-year business, serving 15,000+ partners, 3x efficiency\n✅ LexCorpus CMS: Streamlined legal content management\n✅ FKMA Website: IT Development lead, built official website\n\nUNIQUE VALUE:\n1. Production-Ready: Real experience, minimal onboarding\n2. Business-Technical Bridge: Translate requirements → solutions\n3. Growth Potential: Fast learner, long-term commitment\n\nAVAILABILITY:\n🟢 Immediately Available\n📍 Flexible: Remote/Hybrid/On-site\n🌍 Willing to Relocate\n\nBOTTOM LINE:\nHigh-ROI investment - production-ready developer dengan proven track record. Ready to deliver value from Day One. 🚀`;
            }
            return `Professional Summary 📄\n\nEXECUTIVE SUMMARY:\nWisnu Alfian Nur Ashar - IT talent from President University representing rare combination of Technical Excellence and Leadership Acumen. Proven track record delivering production-grade applications serving thousands of users.\n\nCORE COMPETENCIES:\n• Full-Stack Web Development (React, Next.js 16, TypeScript)\n• Database Management (Supabase, PostgreSQL)\n• Modern UI/UX (Tailwind CSS, Framer Motion)\n• Web Security & Best Practices\n\nKEY ACHIEVEMENTS:\n✅ Ashar Grosir Parfum: Digitalized 20-year business, serving 15,000+ partners, 3x efficiency\n✅ LexCorpus CMS: Streamlined legal content management\n✅ FKMA Website: IT Development lead, built official website\n\nUNIQUE VALUE:\n1. Production-Ready: Real experience, minimal onboarding\n2. Business-Technical Bridge: Translate requirements → solutions\n3. Growth Potential: Fast learner, long-term commitment\n\nAVAILABILITY:\n🟢 Immediately Available\n📍 Flexible: Remote/Hybrid/On-site\n🌍 Willing to Relocate\n\nBOTTOM LINE:\nHigh-ROI investment - production-ready developer with proven track record. Ready to deliver value from Day One. 🚀`;
        }

        // ============================================
        // ENHANCED FALLBACK
        // ============================================

        if (isIndo) {
            return `Hmm, saya kurang yakin memahami pertanyaan Anda. 🤔\n\nBiar saya bantu! Saya bisa memberikan informasi lengkap tentang:\n\n📋 Profil & Background:\n• Siapa Wisnu & latar belakangnya\n• Pendidikan di President University\n• Motivasi & nilai-nilai pribadi\n• Apa yang membedakan dari kandidat lain\n\n💻 Skills & Teknologi:\n• Technical skills (React, Next.js, TypeScript)\n• Keahlian Frontend & Backend\n• Database & deployment knowledge\n\n📁 Portfolio & Proyek:\n• Ashar Grosir Parfum (E-Commerce B2B)\n• LexCorpus CMS\n• FKMA Website\n• Dampak dari setiap project\n\n🎯 Karir & Goals:\n• Visi karir jangka panjang\n• Ideal work environment\n• Availability & lokasi\n\n🤝 Experience:\n• Organisasi (FKMA, PUFA, PUMA)\n• Teamwork & communication\n• Time management\n\n📧 Kontak & Hiring:\n• Informasi kontak\n• Kenapa hire Wisnu?\n• Cocok untuk internship/junior?\n• Availability untuk opportunities\n\nCoba tanya seperti:\n• "Apa skill utama Wisnu?"\n• "Ceritakan tentang project Ashar Grosir"\n• "Apakah cocok untuk posisi junior?"\n• "Bagaimana cara menghubungi Wisnu?"\n• "Apa visi karir 5 tahun ke depan?"\n\nSilakan ajukan pertanyaan Anda! 😊`;
        }
        return `Hmm, I'm not quite sure I understand your question. 🤔\n\nLet me help! I can provide complete information about:\n\n📋 Profile & Background:\n• Who Wisnu is & his background\n• Education at President University\n• Motivation & personal values\n• What differentiates him\n\n💻 Skills & Technology:\n• Technical skills (React, Next.js, TypeScript)\n• Frontend & Backend expertise\n• Database & deployment knowledge\n\n📁 Portfolio & Projects:\n• Ashar Grosir Parfum (B2B E-Commerce)\n• LexCorpus CMS\n• FKMA Website\n• Impact from each project\n\n🎯 Career & Goals:\n• Long-term career vision\n• Ideal work environment\n• Availability & location\n\n🤝 Experience:\n• Organizations (FKMA, PUFA, PUMA)\n• Teamwork & communication\n• Time management\n\n📧 Contact & Hiring:\n• Contact information\n• Why hire Wisnu?\n• Suitable for internship/junior?\n• Availability for opportunities\n\nTry asking like:\n• "What are Wisnu's main skills?"\n• "Tell me about Ashar Grosir project"\n• "Is he suitable for junior position?"\n• "How to contact Wisnu?"\n• "What's the 5-year career vision?"\n\nPlease ask your question! 😊`;
    }
}
