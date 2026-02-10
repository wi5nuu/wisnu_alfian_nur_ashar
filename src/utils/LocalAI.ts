// LocalAI Utility Class


/**
 * Enhanced LocalAI - Complete AI Assistant for Portfolio
 * Version 4.0 - Hyper-Comprehensive & Fully Functional
 * 
 * Features:
 * - 500+ comprehensive responses
 * - 40+ topic categories
 * - Advanced context awareness
 * - Emotion-aware responses
 * - Multi-language support
 * - Fallback with suggestions
 */

interface SocialEntry {
    id: string;
    en: string;
    aliases?: string[];
    category: 'personal' | 'professional' | 'smalltalk' | 'academic' | 'identity' |
    'general' | 'tech' | 'projects' | 'career' | 'hobbies' | 'sensitive' | 'contact' |
    'entertainment' | 'gaming' | 'conspiracy' | 'public_figures' | 'math' | 'horror';
    followUp?: string[]; // Suggested follow-up questions
    emotion?: 'neutral' | 'friendly' | 'professional' | 'enthusiastic' | 'cautious';
    isSensitive?: boolean;
}

export class LocalAI {
    private static readonly SOCIAL_DATA: Record<string, SocialEntry> = {
        // --- GREETINGS & POLITENESS ---
        "halo": {
            id: `Halo! 👋 Saya asisten virtual Wisnu. Saya sangat senang membantu Anda mengenal lebih dalam tentang:
            
🌟 **Profil Wisnu** - Latar belakang, kepribadian, dan passion
💼 **Pengalaman Professional** - Proyek-proyek nyata dengan dampak bisnis
💻 **Keahlian Teknis** - Full-stack development hingga cybersecurity
🎓 **Pendidikan** - Prestasi akademik dan organisasi
🚀 **Visi Karir** - Tujuan dan ambisi professional
🤝 **Kontak** - Cara terhubung dengan Wisnu

Apa yang ingin Anda ketahui tentang Wisnu? Saya siap membantu! 😊`,
            en: `Hello! 👋 I'm Wisnu's virtual assistant. I'm delighted to help you learn more about:

🌟 **Wisnu's Profile** - Background, personality, and passions
💼 **Professional Experience** - Real projects with business impact
💻 **Technical Skills** - Full-stack development to cybersecurity
🎓 **Education** - Academic achievements and organizations
🚀 **Career Vision** - Professional goals and ambitions
🤝 **Contact** - How to connect with Wisnu

What would you like to know about Wisnu? I'm ready to help! 😊`,
            aliases: ["hi", "hello", "hey", "hai", "assalamualaikum", "good morning", "good afternoon", "intro", "test", "p"],
            category: 'smalltalk',
            emotion: 'friendly'
        },

        "apa kabar": {
            id: "Saya selalu dalam kondisi prima! 💪 Sebagai AI assistant, saya terus standby 24/7 untuk membantu Anda mengenal Wisnu. Kamu gimana kabarnya? Semoga sehat selalu! Ada yang mau ditanyakan tentang project-project keren Wisnu?",
            en: "I'm always in excellent condition! 💪 As an AI assistant, I'm available 24/7 to help you learn about Wisnu. How are you doing? Hope you're doing great! Anything you'd like to ask about Wisnu's amazing projects?",
            aliases: ["how are you", "what's up", "supp", "kabar baik"],
            category: 'smalltalk',
            emotion: 'enthusiastic'
        },

        "terima kasih": {
            id: "Sama-sama! 😊 Senang sekali bisa membantu Anda. Jika ada pertanyaan lain tentang Wisnu, jangan ragu untuk bertanya ya! Saya selalu siap membantu.",
            en: "You're very welcome! 😊 It's my pleasure to help you. If you have any other questions about Wisnu, please don't hesitate to ask! I'm always ready to assist.",
            aliases: ["thanks", "thank you", "makasih", "thx"],
            category: 'smalltalk',
            emotion: 'friendly'
        },

        // --- IDENTITY & PROFILE ---
        "siapa wisnu": {
            id: `Wisnu Alfian Nur Ashar adalah seorang **Full-Stack Developer** dan **Mahasiswa IT** yang berdomisili di Bekasi. Berikut adalah profil lengkapnya:

🎯 **Identitas Inti:**
- Full-Stack Developer dengan spesialisasi React/Next.js
- Mahasiswa aktif Information Technology di President University
- Entrepreneur digital dengan pengalaman bisnis keluarga

🌟 **Keunikan Wisnu:**
1. **Production-First Mindset** - Membangun aplikasi yang benar-benar digunakan (15.000+ users)
2. **Business-Technical Bridge** - Memahami kebutuhan bisnis dan menerjemahkannya ke solusi teknis
3. **Continuous Learner** - Selalu update dengan teknologi terbaru
4. **Leadership Experience** - Aktif di organisasi kampus dengan peran signifikan

💡 **Philosophy:** "Technology should solve real problems and deliver tangible business value."

Ada aspek spesifik yang ingin Anda ketahui lebih dalam? 😊`,
            en: `Wisnu Alfian Nur Ashar is a **Full-Stack Developer** and **IT Student** based in Bekasi. Here's his complete profile:

🎯 **Core Identity:**
- Full-Stack Developer specializing in React/Next.js
- Active Information Technology student at President University
- Digital entrepreneur with family business experience

🌟 **What Makes Wisnu Unique:**
1. **Production-First Mindset** - Builds actually-used applications (15,000+ users)
2. **Business-Technical Bridge** - Understands business needs and translates them to technical solutions
3. **Continuous Learner** - Always updated with latest technologies
4. **Leadership Experience** - Active in campus organizations with significant roles

💡 **Philosophy:** "Technology should solve real problems and deliver tangible business value."

Is there a specific aspect you'd like to know more about? 😊`,
            aliases: ["who is wisnu", "profil wisnu", "tentang wisnu", "introduce yourself", "who are you", "siapa anda", "👤 Profil Pribadi", "👤 Personal Profile", "profil lengkap wisnu", "profil wisnu latar belakang kepribadian passion"],
            category: 'identity',
            emotion: 'professional',
            followUp: ["asal mana", "pendidikan", "skill teknis", "proyek", "pengalaman kerja"]
        },

        "latar belakang wisnu": {
            id: `🌏 **Latar Belakang & Perjalanan Wisnu:**

\n**Pendidikan:**
1. **TK Eka Diyasa & SD Negeri 009 Tarakan** (Kalimantan Utara)
2. **MTS & MAS As'adiyah Sengkang** (Sulawesi Selatan) - Mengasah nilai-nilai pesantren
3. **President University** (Bekasi) - Information Technology (Current)

**Karir & Pengalaman:**
- **Ashar Grosir Parfum:** Memimpin transformasi digital untuk bisnis keluarga 20+ tahun, meningkatkan efisiensi hingga 70%.
- **PUFA & FKMA:** Aktif memimpin divisi IT dan Event, mengelola event fakultas dan integrasi data alumni.
- **PUMA:** Mengembangkan chatbot solutions untuk efisiensi komunikasi.

**Filosofi:** Menggabungkan ketekunan akademis dengan impact nyata di dunia bisnis. 🚀`,
            en: `🌏 **Wisnu's Background & Journey:**

\n**Education:**
1. **TK Eka Diyasa & SD Negeri 009 Tarakan** (North Kalimantan)
2. **MTS & MAS As'adiyah Sengkang** (South Sulawesi) - Cultivating Islamic boarding school values
3. **President University** (Bekasi) - Information Technology (Current)

**Career & Experience:**
- **Ashar Grosir Parfum:** Led digital transformation for 20+ year family business, improving efficiency by 70%.
- **PUFA & FKMA:** Actively led IT and Event divisions, managing faculty events and alumni data integration.
- **PUMA:** Developed chatbot solutions for communication efficiency.

**Philosophy:** Combining academic diligence with real impact in the business world. 🚀`,
            aliases: ["wisnu asli mana", "lahir dimana", "domisili", "tinggal dimana", "background", "latar belakang", "sejarah pendidikan", "riwayat hidup", "asal usul", "pendidikan wisnu", "lulusan mana", "sekolah dimana", "alumni as'adiyah", "lulusan mas as'adiyah", "sekolah di sengkang"],
            category: 'identity',
            emotion: 'friendly'
        },

        "passion wisnu": {
            id: `🔥 **Passion & Fokus Utama Wisnu:**

**"Delivering High-Impact Web Solutions"** bukan sekedar slogan, tapi DNA-nya!

**3 Pilar Passion Wisnu:**
1. **🛡️ Cybersecurity & Cloud Security:** Memastikan aplikasi aman dan data terlindungi.
2. **🏗️ Scalable Architecture:** Membangun sistem yang bisa handle ribuan user (bukti: Ashar Grosir).
3. **💡 Digital Transformation:** Mengubah proses manual menjadi sistem digital yang efisien.

**Tech Stack Favorit:** React, Next.js, TypeScript, & Supabase.

Wisnu percaya teknologi harus menyelesaikan masalah nyata, bukan cuma keren-kerenan! 🚀`,
            en: `🔥 **Wisnu's Passion & Main Focus:**

**"Delivering High-Impact Web Solutions"** is not just a slogan, it's his DNA!

**3 Pillars of Passion:**
1. **🛡️ Cybersecurity & Cloud Security:** Ensuring apps are secure and data is protected.
2. **🏗️ Scalable Architecture:** Building systems that handle thousands of users (proof: Ashar Grosir).
3. **💡 Digital Transformation:** Turning manual processes into efficient digital systems.

**Favorite Tech Stack:** React, Next.js, TypeScript, & Supabase.

Wisnu believes technology must solve real problems, not just look cool! 🚀`,
            aliases: ["passion", "minat", "ketertarikan", "fokus karir", "bidang keahlian", "apa passion wisnu", "wisnu suka apa"],
            category: 'identity',
            emotion: 'enthusiastic',
            followUp: ["skill teknis", "proyek unggulan", "career goals"]
        },

        // --- PERSONALITY & CHARACTER ---
        "karakter wisnu": {
            id: `🎭 **Kepribadian & Karakter Wisnu:**

**💙 Inti Karakter:**
1. **Detail-Oriented** - Sangat teliti dalam coding dan problem-solving
2. **Growth Mindset** - Selalu ingin belajar dan berkembang
3. **Resilient** - Pantang menyerah menghadapi bug dan tantangan teknis
4. **Humble** - Rendah hati meski punya kemampuan teknis yang kuat

**⚡ Work Style:**
- **Analytical Thinker** - Memecah masalah kompleks menjadi bagian-bagian kecil
- **Systematic Approach** - Bekerja dengan metodologi yang terstruktur
- **Quality Focus** - Tidak kompromi dengan kualitas kode
- **Team Player** - Kolaboratif dan supportive terhadap tim

**🌟 Soft Skills Unggulan:**
✅ Leadership dari pengalaman organisasi
✅ Communication yang jelas dan efektif
✅ Time management yang excellent
✅ Adaptability terhadap perubahan

**💬 Cara Berpikir:**
"Setiap masalah punya solusi - butuh kesabaran dan analisis yang tepat untuk menemukannya."

Wisnu adalah kombinasi langka antara technical excellence dan emotional intelligence! 🧠❤️`,
            en: `🎭 **Wisnu's Personality & Character:**

**💙 Core Traits:**
1. **Detail-Oriented** - Meticulous in coding and problem-solving
2. **Growth Mindset** - Always eager to learn and grow
3. **Resilient** - Persistent when facing bugs and technical challenges
4. **Humble** - Modest despite strong technical abilities

**⚡ Work Style:**
- **Analytical Thinker** - Breaks down complex problems into smaller parts
- **Systematic Approach** - Works with structured methodology
- **Quality Focus** - Never compromises on code quality
- **Team Player** - Collaborative and supportive to team

**🌟 Top Soft Skills:**
✅ Leadership from organizational experience
✅ Clear and effective communication
✅ Excellent time management
✅ Adaptability to changes

**💬 Thinking Style:**
"Every problem has a solution - it takes patience and proper analysis to find it."

Wisnu is a rare combination of technical excellence and emotional intelligence! 🧠❤️`,
            aliases: ["wisnu orangnya gimana", "personality", "sifat wisnu", "karakteristik", "attitude", "🌟 Kepribadian & Values", "🌟 Personality & Values", "apa prinsip hidup wisnu"],
            category: 'personal',
            emotion: 'professional'
        },

        "hobi wisnu": {
            id: `🎮 **Hobi & Minat Wisnu:**

**💻 Professional Hobbies:**
1. **Coding Experiments** - Mencoba teknologi baru dengan side projects
2. **Open Source Contribution** - Berkontribusi ke komunitas developer
3. **Tech Blog Reading** - Mengikuti perkembangan teknologi terbaru

**🎮 Personal Interests:**
1. **Gaming Strategy** - Mobile Legends, Valorant (suka teamwork dan strategi)
2. **Anime & Manga** - Terutama genre Shonen dengan cerita inspiratif
3. **Music** - Mendengarkan musik saat coding untuk fokus maksimal
4. **Reading** - Tech articles, business cases, dan self-improvement books

**🏃 Lifestyle:**
- **Fitness** - Olahraga ringan untuk menjaga kesehatan
- **Coffee Culture** - Menikmati kopi sambil brainstorming ideas
- **Networking** - Meetup dengan fellow developers dan entrepreneurs

**🎯 Philosophy:** "Balance between technical growth and personal wellbeing is key to sustained productivity."

Hobi-hobi ini membantu Wisnu tetap kreatif dan produktif! ✨`,
            en: `🎮 **Wisnu's Hobbies & Interests:**

**💻 Professional Hobbies:**
1. **Coding Experiments** - Trying new technologies with side projects
2. **Open Source Contribution** - Contributing to developer community
3. **Tech Blog Reading** - Following latest technology trends

**🎮 Personal Interests:**
1. **Strategy Gaming** - Mobile Legends, Valorant (enjoys teamwork and strategy)
2. **Anime & Manga** - Especially Shonen genre with inspiring stories
3. **Music** - Listening to music while coding for maximum focus
4. **Reading** - Tech articles, business cases, and self-improvement books

**🏃 Lifestyle:**
- **Fitness** - Light exercise to maintain health
- **Coffee Culture** - Enjoying coffee while brainstorming ideas
- **Networking** - Meetups with fellow developers and entrepreneurs

**🎯 Philosophy:** "Balance between technical growth and personal wellbeing is key to sustained productivity."

These hobbies help Wisnu stay creative and productive! ✨`,
            aliases: ["apa hobi wisnu", "hobby", "waktu luang", "kesukaan", "minat", "🎮 Hobi & Minat Pribadi", "🎮 Hobbies & Personal Interests", "hobi", "minat wisnu", "hobi apa yang paling disukai"],
            category: 'hobbies',
            emotion: 'friendly'
        },

        "learning methodology": {
            id: `🧠 **Metodologi Belajar Wisnu:**

Dunia teknologi bergerak cepat, dan Wisnu memiliki sistem khusus untuk tetap relevan.

**🚀 Strategi "Production-First Learner":**
1. **Learn by Doing** - Langsung membangun proyek kecil untuk memahami konsep baru.
2. **Documentation Dive** - Membaca dokumentasi resmi sebagai sumber kebenaran utama.
3. **Teach to Learn** - Menjelaskan kembali apa yang dipelajari kepada orang lain (Feynman Technique).
4. **Iterative Learning** - Tidak harus sempurna di awal, yang penting iterasi dan perbaikan kontinu.

Belajar bagi Wisnu adalah gaya hidup, bukan sekadar kewajiban! 📖`,
            en: `🧠 **Wisnu's Learning Methodology:**

The tech world moves fast, and Wisnu has a specific system to stay relevant.

**🚀 "Production-First Learner" Strategy:**
1. **Learn by Doing** - Immediately building small projects to understand new concepts.
2. **Documentation Dive** - Reading official documentation as the primary source of truth.
3. **Teach to Learn** - Re-explaining learned concepts to others (Feynman Technique).
4. **Iterative Learning** - It doesn't have to be perfect at first; what matters is continuous iteration.

For Wisnu, learning is a lifestyle, not just an obligation! 📖`,
            aliases: ["cara belajar", "metode belajar", "stay updated", "belajar coding", "learning style", "metodologi belajar", "cara penguasaan teknologi"],
            category: 'personal',
            emotion: 'enthusiastic'
        },

        "mentorship experience": {
            id: `🤝 **Pengalaman Mentorship:**

Wisnu senang berbagi ilmu dan membantu sesama developer untuk berkembang bersama.

**🌟 Aktivitas Mentoring:**
- **Peer Programming** - Membantu rekan kuliah memecahkan masalah coding yang rumit.
- **Tech Sharing Session** - Berbagi tips tentang best practices koding di grup komunitas.
- **Project Guidance** - Mengarahkan junior developer dalam struktur proyek yang baik.

Melihat orang lain sukses lewat bantuan kita adalah kepuasan tersendiri bagi Wisnu! ✨`,
            en: `🤝 **Mentorship Experience:**

Wisnu enjoys sharing knowledge and helping fellow developers grow together.

**🌟 Mentoring Activities:**
- **Peer Programming** - Helping classmates solve complex coding problems.
- **Tech Sharing Session** - Sharing coding best practices in community groups.
- **Project Guidance** - Guiding junior developers in proper project structuring.

Seeing others succeed through our help is a special satisfaction for Wisnu! ✨`,
            aliases: ["mentor", "membantu orang", "berbagi ilmu", "teaching experience", "bimbingan", "mentorship", "pengalaman mentor"],
            category: 'personal',
            emotion: 'friendly'
        },

        "daily routine": {
            id: `📅 **Rutinitas Harian & Produktivitas:**

Kedisiplinan adalah kunci bagi Wisnu untuk menyeimbangkan kuliah, bisnis, dan pengembangan diri.

**⏰ Jadwal Khas Wisnu:**
- **Pagi:** Deep work untuk coding atau mengerjakan fitur proyek utama.
- **Siang:** Perkuliahan dan diskusi intensif dengan rekan tim.
- **Sore:** Update bisnis keluarga (Ashar Grosir) dan manajemen stok.
- **Malam:** Self-improvement (membaca buku, riset tren baru) dan istirahat berkualitas.

**🛠️ Productivity Stack:**
- **Notion** - Untuk goal setting dan dokumentasi.
- **Deep focus** - Tanpa gangguan saat sesi koding intensif.

Keteraturan mendatangkan kejelasan pikiran! ⚡`,
            en: `📅 **Daily Routine & Productivity:**

Discipline is key for Wisnu to balance university, business, and self-development.

**⏰ Wisnu's Typical Schedule:**
- **Morning:** Deep work for coding or developing major project features.
- **Midday:** University classes and intensive discussions with teammates.
- **Afternoon:** Family business updates (Ashar Grosir) and inventory management.
- **Evening:** Self-improvement (reading books, researching new trends) and quality rest.

**🛠️ Productivity Stack:**
- **Notion** - For goal setting and documentation.
- **Deep focus** - Zero distractions during intensive coding sessions.

Regularity brings mental clarity! ⚡`,
            aliases: ["jadwal harian", "rutinitas", "daily routine", "hari-hari wisnu", "manajemen waktu", "produktif", "keseharian"],
            category: 'personal',
            emotion: 'professional'
        },

        "book recommendations": {
            id: `📚 **Rekomendasi Buku Favorit:**

Buku adalah jendela bagi Wisnu untuk memperluas cakrawala di luar koding.

**🌟 Daftar Bacaan Wajib:**
1. **Clean Code (Robert C. Martin)** - Untuk menulis kode yang elegan dan maintainable.
2. **The Lean Startup (Eric Ries)** - Memahami cara membangun bisnis yang efisien.
3. **Atomic Habits (James Clear)** - Membangun sistem harian untuk sukses jangka panjang.
4. **Pragmatic Programmer** - Panduan menjadi developer yang lebih professional.

Membaca satu bab sehari menjauhkan kita dari stagnasi! 📖`,
            en: `📚 **Favorite Book Recommendations:**

Books are windows for Wisnu to broaden horizons beyond coding.

**🌟 Must-read List:**
1. **Clean Code (Robert C. Martin)** - For writing elegant and maintainable code.
2. **The Lean Startup (Eric Ries)** - Understanding how to build efficient businesses.
3. **Atomic Habits (James Clear)** - Building daily systems for long-term success.
4. **Pragmatic Programmer** - A guide to becoming a more professional developer.

Reading one chapter a day keeps stagnation away! 📖`,
            aliases: ["rekomendasi buku", "buku favorit", "reading list", "bacaan wisnu", "books to read", "buku yang dibaca"],
            category: 'personal',
            emotion: 'friendly'
        },

        // --- ACADEMIC ---
        "wisnu kuliah": {
            id: `🎓 **Pendidikan Wisnu:**

**🏛️ Institution:** President University
**📚 Jurusan:** Information Technology (Bachelor's Degree)
**📍 Lokasi:** Cikarang, Jawa Barat
**📅 Status:** Mahasiswa Aktif (mulai Agustus 2024)

**🌟 Keunggulan President University:**
- Kurikulum berstandar internasional
- Fokus pada praktik industri, bukan hanya teori
- Environment multicultural dengan mahasiswa dari berbagai negara
- Strong industry connections untuk internship dan job placement

**📈 Academic Focus:**
1. **Software Engineering** - Best practices dan modern methodologies
2. **Web Technologies** - Full-stack development dengan tech stack terkini
3. **Cyber Security** - Fundamental keamanan informasi dan sistem
4. **Data Management** - Database design dan optimization

**🏆 Aktivitas Akademik:**
- Aktif dalam kelas dan diskusi
- Project-based learning dengan aplikasi real-world
- Research dan paper writing
- Technical presentations

Pendidikan formal dikombinasikan dengan self-learning intensif! 📚💻`,
            en: `🎓 **Wisnu's Education:**

**🏛️ Institution:** President University
**📚 Major:** Information Technology (Bachelor's Degree)
**📍 Location:** Cikarang, West Java
**📅 Status:** Active Student (started August 2024)

**🌟 President University Advantages:**
- International-standard curriculum
- Focus on industry practice, not just theory
- Multicultural environment with students from various countries
- Strong industry connections for internships and job placement

**📈 Academic Focus:**
1. **Software Engineering** - Best practices and modern methodologies
2. **Web Technologies** - Full-stack development with latest tech stack
3. **Cyber Security** - Information and system security fundamentals
4. **Data Management** - Database design and optimization

**🏆 Academic Activities:**
- Active in class and discussions
- Project-based learning with real-world applications
- Research and paper writing
- Technical presentations

Formal education combined with intensive self-learning! 📚💻`,
            aliases: ["kuliah dimana", "kampus wisnu", "sekolah dimana", "education", "study background", "🎓 Pendidikan & Akademik", "🎓 Education & Academics", "kuliah", "kampus", "mata kuliah favorit di kampus", "bagaimana prestasi akademiknya"],
            category: 'academic',
            emotion: 'professional'
        },

        "wisnu jurusan": {
            id: `📘 **Jurusan & Spesialisasi:**

**🎯 Jurusan:** Information Technology (IT)
**🏛️ Di:** President University
**📊 Fokus Utama:** Software Development & Cyber Security

**🔧 Kompetensi Teknis yang Dikembangkan:**
1. **Software Development**
   - Full-stack web development
   - Mobile app development
   - System architecture design

2. **Cyber Security**
   - Network security fundamentals
   - Web application security
   - Ethical hacking principles

3. **Data Science**
   - Database management systems
   - Data analysis techniques
   - Big data fundamentals

**💡 Kenapa Memilih IT?**
- Passion sejak SMA terhadap programming
- Peluang karir yang luas dan dinamis
- Kemampuan untuk create tangible impact melalui teknologi
- Sesuai dengan tren digital transformation global

Jurusan ini memberikan foundation kuat untuk karir di tech industry! 🚀`,
            en: `📘 **Major & Specialization:**

**🎯 Major:** Information Technology (IT)
**🏛️ At:** President University
**📊 Main Focus:** Software Development & Cyber Security

**🔧 Technical Competencies Developed:**
1. **Software Development**
   - Full-stack web development
   - Mobile app development
   - System architecture design

2. **Cyber Security**
   - Network security fundamentals
   - Web application security
   - Ethical hacking principles

3. **Data Science**
   - Database management systems
   - Data analysis techniques
   - Big data fundamentals

**💡 Why Choose IT?**
- Programming passion since high school
- Broad and dynamic career opportunities
- Ability to create tangible impact through technology
- Aligns with global digital transformation trends

This major provides strong foundation for tech industry career! 🚀`,
            aliases: ["jurusan apa", "ambil apa", "study", "major", "spesialisasi", "jurusan", "kuliah apa"],
            category: 'academic',
            emotion: 'enthusiastic'
        },

        "research paper": {
            id: `📄 **Penelitian & Research Paper:**

Wisnu memiliki minat dalam eksplorasi akademis, khususnya di bidang AI dan Cloud Computing.

**🌟 Highlight Penelitian:**
1. **AI in E-Commerce** - Analisis penggunaan machine learning untuk personalisasi belanja.
2. **Cloud Infrastructure Efficiency** - Riset tentang optimasi biaya pada layanan cloud.
3. **Cybersecurity Trends** - Meninjau ancaman keamanan terbaru pada aplikasi web modern.

Riset membantu Wisnu tetap update dengan teori terbaru yang bisa diterapkan pada praktik industri! 📚`,
            en: `📄 **Research & Academic Papers:**

Wisnu has an interest in academic exploration, particularly in AI and Cloud Computing.

**🌟 Research Highlights:**
1. **AI in E-Commerce** - Analyzing the use of machine learning for shopping personalization.
2. **Cloud Infrastructure Efficiency** - Research on cost optimization in cloud services.
3. **Cybersecurity Trends** - Reviewing the latest security threats on modern web applications.

Research helps Wisnu stay updated with the latest theories that can be applied to industry practice! 📚`,
            aliases: ["penelitian", "karya ilmiah", "paper", "artikel ilmiah", "research", "tugas akhir", "research paper", "publikasi"],
            category: 'academic',
            emotion: 'professional'
        },

        "university projects": {
            id: `🏫 **Proyek Universitas Unggulan:**

Selama kuliah di President University, Wisnu telah mengerjakan berbagai proyek akademik yang menantang.

**🚀 Highlight Proyek:**
- **Full-Stack CMS** - Membangun sistem manajemen konten dari nol sebagai tugas besar.
- **Database Optimization** - Mendesain skema database kompleks dengan performa tinggi.
- **Network Security Lab** - Simulasi pertahanan jaringan dari berbagai tipe serangan cyber.
- **Mobile App Prototype** - Membuat desain dan prototipe aplikasi mobile yang user-friendly.

Proyek-proyek ini mengasah kemampuan Wisnu dalam bekerja dalam tim dan deadline yang ketat! 🏛️`,
            en: `🏫 **Featured University Projects:**

During his studies at President University, Wisnu has worked on various challenging academic projects.

**🚀 Project Highlights:**
- **Full-Stack CMS** - Building a content management system from scratch as a major assignment.
- **Database Optimization** - Designing complex database schemas with high performance.
- **Network Security Lab** - Simulating network defense against various cyber attack types.
- **Mobile App Prototype** - Creating user-friendly mobile app designs and prototypes.

These projects honed Wisnu's ability to work in teams and under tight deadlines! 🏛️`,
            aliases: ["proyek kampus", "tugas kuliah", "university projects", "proyek mahasiswa", "hasil kuliah", "college projects"],
            category: 'academic',
            emotion: 'professional'
        },

        // --- PROFESSIONAL & SKILLS ---
        "skill wisnu": {
            id: `💻 **Technical Skills Wisnu:**

**🎯 Core Specialization:** Full-Stack JavaScript Development

**🚀 Frontend Expertise:**
- **React.js** - Advanced hooks, context, performance optimization
- **Next.js 14+** - App Router, Server Components, Server Actions
- **TypeScript** - Type safety, interfaces, generics
- **Tailwind CSS** - Utility-first, responsive design
- **State Management** - Zustand, Redux Toolkit, React Query

**⚙️ Backend & Database:**
- **Node.js & Express** - REST APIs, middleware, authentication
- **Supabase** - Full backend solution, realtime, auth
- **PostgreSQL** - Database design, optimization, queries
- **Prisma ORM** - Type-safe database access

**🔧 DevOps & Tools:**
- **Git & GitHub** - Version control, collaboration
- **Docker** - Containerization basics
- **Vercel/Netlify** - Deployment platforms
- **VS Code** - Advanced extensions and setup

**🛡️ Security Knowledge:**
- Web security best practices
- Authentication/Authorization systems
- API security principles

**📱 Additional Skills:**
- Flutter (Mobile Development)
- Python (Scripting & Automation)
- Linux/Unix environment

Wisnu selalu update dengan teknologi terbaru! 🔥`,
            en: `💻 **Wisnu's Technical Skills:**

**🎯 Core Specialization:** Full-Stack JavaScript Development

**🚀 Frontend Expertise:**
- **React.js** - Advanced hooks, context, performance optimization
- **Next.js 14+** - App Router, Server Components, Server Actions
- **TypeScript** - Type safety, interfaces, generics
- **Tailwind CSS** - Utility-first, responsive design
- **State Management** - Zustand, Redux Toolkit, React Query

**⚙️ Backend & Database:**
- **Node.js & Express** - REST APIs, middleware, authentication
- **Supabase** - Full backend solution, realtime, auth
- **PostgreSQL** - Database design, optimization, queries
- **Prisma ORM** - Type-safe database access

**🔧 DevOps & Tools:**
- **Git & GitHub** - Version control, collaboration
- **Docker** - Containerization basics
- **Vercel/Netlify** - Deployment platforms
- **VS Code** - Advanced extensions and setup

**🛡️ Security Knowledge:**
- Web security best practices
- Authentication/Authorization systems
- API security principles

**📱 Additional Skills:**
- Flutter (Mobile Development)
- Python (Scripting & Automation)
- Linux/Unix environment

Wisnu is always updated with latest technologies! 🔥`,
            aliases: ["keahlian", "technical skills", "kemampuan teknis", "tech stack", "programming skills", "💻 Technical Skills", "skill teknis apa yang paling dikuasai", "bagaimana cara wisnu solve technical challenges"],
            category: 'tech',
            emotion: 'professional'
        },

        "framework favorit": {
            id: `⭐ **Framework Favorit: Next.js**

**🎯 Kenapa Next.js?**
1. **Full-Stack Solution** - Frontend + backend dalam satu framework
2. **Performance Excellence** - Server-side rendering, static generation
3. **Developer Experience** - Great tooling, hot reload, easy deployment
4. **Ecosystem Maturity** - Large community, plenty of resources

**🚀 Fitur yang Paling Disukai:**
- **App Router** - Modern routing dengan layout nesting
- **Server Components** - Reduced bundle size, better performance
- **Server Actions** - Secure server-side mutations
- **Image Optimization** - Automatic image optimization
- **Middleware** - Flexible request/response handling

**💡 Pengalaman dengan Next.js:**
- Production apps dengan 15.000+ users
- Complex authentication systems
- Real-time features dengan Supabase
- SEO optimization untuk marketing sites
- E-commerce functionality lengkap

**🔮 Future of Next.js:**
- React Server Components adoption
- Partial Prerendering
- Enhanced caching strategies
- Better developer tools

Next.js adalah game-changer untuk web development modern! 🌟`,
            en: `⭐ **Favorite Framework: Next.js**

**🎯 Why Next.js?**
1. **Full-Stack Solution** - Frontend + backend in one framework
2. **Performance Excellence** - Server-side rendering, static generation
3. **Developer Experience** - Great tooling, hot reload, easy deployment
4. **Ecosystem Maturity** - Large community, plenty of resources

**🚀 Most Loved Features:**
- **App Router** - Modern routing with layout nesting
- **Server Components** - Reduced bundle size, better performance
- **Server Actions** - Secure server-side mutations
- **Image Optimization** - Automatic image optimization
- **Middleware** - Flexible request/response handling

**💡 Experience with Next.js:**
- Production apps with 15,000+ users
- Complex authentication systems
- Real-time features with Supabase
- SEO optimization for marketing sites
- Complete e-commerce functionality

**🔮 Future of Next.js:**
- React Server Components adoption
- Partial Prerendering
- Enhanced caching strategies
- Better developer tools

Next.js is a game-changer for modern web development! 🌟`,
            aliases: ["nextjs", "react framework", "tech preference", "favorite tech"],
            category: 'tech',
            emotion: 'enthusiastic'
        },

        "websocket implementation": {
            id: `🔌 **Implementasi WebSockets & Real-time:**

Wisnu memiliki pengalaman mendalam dalam membangun fitur real-time menggunakan WebSockets (Socket.io) dan Supabase Realtime.

**🚀 Use Cases yang Pernah Dikerjakan:**
1. **Real-time Order Tracking** - Notifikasi instan saat status pesanan berubah di Ashar Grosir.
2. **Live Inventory Updates** - Sinkronisasi stok barang di seluruh dashboard admin dan user secara live.
3. **Collaborative Editing** - Fitur editing dokumen bersama di platform CMS.
4. **Instant Chat Support** - Membangun sistem dukungan chat yang responsif.

**🔧 Tech Stack:**
- **Pusher/Supabase Realtime** - Untuk skalabilitas serverless.
- **Socket.io** - Untuk kontrol logic server-side yang lebih kompleks.
- **State Management** - Integrasi dengan zustand/redux untuk update UI yang seamless.

Wisnu percaya bahwa interaktivitas real-time adalah kunci UX modern yang memuaskan! ⚡`,
            en: `🔌 **WebSockets & Real-time Implementation:**

Wisnu has deep experience building real-time features using WebSockets (Socket.io) and Supabase Realtime.

**🚀 Practical Use Cases:**
1. **Real-time Order Tracking** - Instant notifications when order status changes in Ashar Grosir.
2. **Live Inventory Updates** - Live stock synchronization across admin and user dashboards.
3. **Collaborative Editing** - Document collaboration features in CMS platforms.
4. **Instant Chat Support** - Building responsive chat support systems.

**🔧 Tech Stack:**
- **Pusher/Supabase Realtime** - For serverless scalability.
- **Socket.io** - For more complex server-side logic control.
- **State Management** - Seamless UI updates integrated with zustand/redux.

Wisnu believes that real-time interactivity is key to a satisfying modern UX! ⚡`,
            aliases: ["websockets", "real-time", "socket.io", "live update", "komunikasi real-time", "websocket", "realtime", "socketio"],
            category: 'tech',
            emotion: 'professional'
        },

        "microservices architecture": {
            id: `🏗️ **Microservices Architecture:**

Wisnu memahami transisi dari Monolith ke Microservices untuk meningkatkan skalabilitas dan pemeliharaan aplikasi besar.

**🎯 Key Principles:**
1. **Single Responsibility** - Tiap service fokus pada satu fungsi bisnis.
2. **Independent Deployment** - Update satu modul tanpa mengganggu seleruh sistem.
3. **API First** - Komunikasi antar service yang terstandarisasi.
4. **Data Isolation** - Masing-masing service memiliki database sendiri atau skema terpisah.

**🔧 Relevant Tech:**
- **Docker** - Untuk isolasi environment.
- **API Gateways** - Pengaturan traffic dan autentikasi terpusat.
- **Next.js Micro-frontends** - Membagi frontend menjadi bagian yang lebih kecil.

Wisnu fokus pada arsitektur yang "scalable by design"! 🚀`,
            en: `🏗️ **Microservices Architecture:**

Wisnu understands the transition from Monolith to Microservices to improve scalability and maintainability of large applications.

**🎯 Key Principles:**
1. **Single Responsibility** - Each service focuses on one business function.
2. **Independent Deployment** - Updating one module without affecting the whole system.
3. **API First** - Standardized communication between services.
4. **Data Isolation** - Each service has its own database or separate schema.

**🔧 Relevant Tech:**
- **Docker** - For environment isolation.
- **API Gateways** - Centralized traffic and authentication management.
- **Next.js Micro-frontends** - Breaking down the frontend into smaller parts.

Wisnu focuses on architecture that is "scalable by design"! 🚀`,
            aliases: ["microservices", "arsitektur microservices", "distributed systems", "service-oriented", "mikroservis"],
            category: 'tech',
            emotion: 'professional'
        },

        "ci/cd pipeline": {
            id: `🔄 **CI/CD Pipeline & Automation:**

Wisnu mengotomatiskan alur kerja pengembangan untuk memastikan kualitas kode dan kecepatan rilis.

**🛠️ Pipeline Wisnu:**
1. **GitHub Actions** - Melakukan automated testing (Unit/E2E) setiap push.
2. **Linting & Type Check** - Memastikan kode sesuai standar dan bebas error TS.
3. **Staging Preview** - Deploy otomatis ke staging/preview environment untuk review.
4. **Production Deploy** - Rilis otomatis ke Vercel/Cloud setelah semua test pass.

**📈 Benefit:**
- Mengurangi error manual saat deployment.
- Feedback loop yang lebih cepat bagi developer.
- Build aplikasi yang konsisten di setiap environment.

Otomasi adalah rahasia produktivitas Wisnu! ⚡`,
            en: `🔄 **CI/CD Pipeline & Automation:**

Wisnu automates development workflows to ensure code quality and release speed.

**🛠️ Wisnu's Pipeline:**
1. **GitHub Actions** - Running automated tests (Unit/E2E) on every push.
2. **Linting & Type Check** - Ensuring code follows standards and is TS error-free.
3. **Staging Preview** - Auto-deploying to staging environments for review.
4. **Production Deploy** - Automatic release to Vercel/Cloud after all tests pass.

**📈 Benefits:**
- Reduces manual errors during deployment.
- Faster feedback loops for developers.
- Consistent application builds across all environments.

Automation is the secret to Wisnu's productivity! ⚡`,
            aliases: ["ci/cd", "pipeline", "automation", "deployment pipeline", "github actions", "gitlab ci", "cicd"],
            category: 'tech',
            emotion: 'professional'
        },

        "docker kubernetes": {
            id: `🐳 **Docker & Kubernetes:**

Wisnu menggunakan teknologi containerization untuk memastikan aplikasi berjalan konsisten di mana saja.

**🚀 Containerization (Docker):**
- **Consistency** - "It works on my machine" bukan lagi masalah.
- **Isolation** - Library antar proyek tidak akan bentrok.
- **Reusability** - Image Docker yang siap pakai untuk berbagai environment.

**☸️ Orchestration (Kubernetes):**
- **Scaling** - Menambah instance aplikasi secara otomatis saat traffic naik.
- **Self-healing** - Auto-restart container yang error.
- **Load Balancing** - Distribusi traffic yang efisien.

Teknologi ini memungkinkan Wisnu membangun sistem yang sangat resilien! 🛡️`,
            en: `🐳 **Docker & Kubernetes:**

Wisnu uses containerization technology to ensure applications run consistently everywhere.

**🚀 Containerization (Docker):**
- **Consistency** - Eliminating "It works on my machine" issues.
- **Isolation** - Preventing library conflicts between projects.
- **Reusability** - Production-ready Docker images for various environments.

**☸️ Orchestration (Kubernetes):**
- **Scaling** - Automatically adding app instances during traffic spikes.
- **Self-healing** - Auto-restarting crashed containers.
- **Load Balancing** - Efficient traffic distribution.

These technologies allow Wisnu to build highly resilient systems! 🛡️`,
            aliases: ["docker", "kubernetes", "k8s", "containerization", "orchestration", "devops tools", "kontainer"],
            category: 'tech',
            emotion: 'professional'
        },

        "security implementation": {
            id: `🛡️ **Implementasi Keamanan (Security):**

Keamanan data adalah prioritas utama Wisnu dalam setiap pengembangan aplikasi.

**🔐 Strategi Keamanan:**
1. **JWT & RBAC** - Autentikasi ketat dan Role-Based Access Control.
2. **Environment Variables** - Melindungi API keys dan kredensial sensitif.
3. **Data Encryption** - Enkripsi data sensitif (seperti password) di database.
4. **SQL Injection Protection** - Menggunakan ORM (Prisma/TypeORM) untuk mencegah serangan injeksi.
5. **CORS Policy** - Kontrol akses domain yang aman.

Wisnu membangun aplikasi yang tidak hanya fungsional, tapi juga aman bagi pengguna! 🔒`,
            en: `🛡️ **Security Implementation:**

Data security is Wisnu's top priority in every application development.

**🔐 Security Strategies:**
1. **JWT & RBAC** - Strict authentication and Role-Based Access Control.
2. **Environment Variables** - Protecting API keys and sensitive credentials.
3. **Data Encryption** - Encrypting sensitive data in the database.
4. **SQL Injection Protection** - Using ORMs to prevent injection attacks.
5. **CORS Policy** - Secure domain access control.

Wisnu builds applications that are not just functional, but also safe for users! 🔒`,
            aliases: ["keamanan", "security", "cybersecurity", "web security", "owasp", "encryption", "hacking", "cyber security"],
            category: 'tech',
            emotion: 'professional'
        },

        "open source": {
            id: `🌐 **Kontribusi Open Source:**

Wisnu percaya pada kekuatan kolaborasi dan berbagi pengetahuan melalui komunitas open source.

**🌟 Aktivitas Open Source:**
1. **GitHub Contributions** - Berpartisipasi dalam perbaikan bug di library populer.
2. **Tutorials & Blogs** - Membagikan tip coding yang berguna bagi developer lain.
3. **Project Sharing** - Meng-open-source-kan utilitas atau template yang bisa dipakai publik.
4. **Feedback & Review** - Membantu developer lain lewat forum dan pull requests.

Bagi Wisnu, open source adalah cara terbaik untuk belajar dari yang terbaik! 🤝`,
            en: `🌐 **Open Source Contributions:**

Wisnu believes in the power of collaboration and sharing knowledge through the open-source community.

**🌟 Open Source Activities:**
1. **GitHub Contributions** - Participating in bug fixes for popular libraries.
2. **Tutorials & Blogs** - Sharing useful coding tips for other developers.
3. **Project Sharing** - Open-sourcing utilities or templates for public use.
4. **Feedback & Review** - Helping others via forums and pull requests.

For Wisnu, open source is the best way to learn from the best! 🤝`,
            aliases: ["open source", "kontribusi", "github contribution", "sharing code", "komunitas open source", "opensource"],
            category: 'tech',
            emotion: 'friendly'
        },

        "future tech trends": {
            id: `🔮 **Tren Teknologi Masa Depan:**

Wisnu selalu mengamati perkembangan teknologi terbaru untuk tetap kompetitif di industri.

**🚀 Tren yang Diikuti Wisnu:**
1. **Generative AI** - Integrasi AI (seperti chatbot ini!) ke dalam aplikasi web.
2. **Edge Computing** - Membawa komputasi lebih dekat ke user untuk latency minimal.
3. **Web3 & Decentralization** - Mempelajari fundamental blockchain dan smart contracts.
4. **Sustainability in Tech** - Membangun kode yang efisien dan ramah energi.

Masa depan adalah milik mereka yang terus beradaptasi! 🚀`,
            en: `🔮 **Future Technology Trends:**

Wisnu constantly monitors the latest tech developments to stay competitive in the industry.

**🚀 Trends Wisnu Follows:**
1. **Generative AI** - Integrating AI assistants (like this one!) into web apps.
2. **Edge Computing** - Bringing computation closer to users for minimal latency.
3. **Web3 & Decentralization** - Learning blockchain and smart contract fundamentals.
4. **Sustainability in Tech** - Building efficient and energy-friendly code.

The future belongs to those who keep adapting! 🚀`,
            aliases: ["tren teknologi", "future tech", "masa depan ai", "technology trends", "ai trends", "tren ai", "teknologi masa depan"],
            category: 'tech',
            emotion: 'enthusiastic'
        },

        // --- PROJECTS ---
        "ashar grosir": {
            id: `🛍️ **Project: Ashar Grosir Parfum**

**🎯 Overview:**
Platform E-Commerce B2B untuk bisnis grosir parfum keluarga yang telah berjalan 20+ tahun, melayani 15.000+ mitra bisnis.

**🚀 Tech Stack:**
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Supabase, PostgreSQL
- **Authentication:** Supabase Auth
- **Deployment:** Vercel
- **Tools:** GitHub, Stripe (payment)

**🌟 Fitur Utama:**
1. **Digital Catalog** - 5000+ produk dengan advanced search & filter
2. **Partner Dashboard** - Order management untuk mitra B2B
3. **Admin Panel** - Complete business management system
4. **Real-time Updates** - Live order tracking dan notifications
5. **Reporting System** - Analytics dan business insights

**📈 Business Impact:**
✅ **Operational Efficiency** ↑ 300%
✅ **Order Processing Time** ↓ 70%
✅ **Error Reduction** ↓ 85%
✅ **Customer Satisfaction** ↑ 40%
✅ **Business Scalability** Unlimited growth potential

**🔧 Technical Challenges Solved:**
- Migration dari sistem manual ke digital
- Handling high-concurrent user access
- Complex inventory management system
- Secure payment processing integration
- Real-time data synchronization

**🎖️ Achievement:** Sukses mendigitalkan bisnis tradisional menjadi modern digital enterprise! 💪`,
            en: `🛍️ **Project: Ashar Grosir Parfum**

**🎯 Overview:**
B2B E-Commerce platform for a 20+ year family wholesale perfume business, serving 15,000+ business partners.

**🚀 Tech Stack:**
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **Backend:** Supabase, PostgreSQL
- **Authentication:** Supabase Auth
- **Deployment:** Vercel
- **Tools:** GitHub, Stripe (payment)

**🌟 Key Features:**
1. **Digital Catalog** - 5000+ products with advanced search & filter
2. **Partner Dashboard** - Order management for B2B partners
3. **Admin Panel** - Complete business management system
4. **Real-time Updates** - Live order tracking and notifications
5. **Reporting System** - Analytics and business insights

**📈 Business Impact:**
✅ **Operational Efficiency** ↑ 300%
✅ **Order Processing Time** ↓ 70%
✅ **Error Reduction** ↓ 85%
✅ **Customer Satisfaction** ↑ 40%
✅ **Business Scalability** Unlimited growth potential

**🔧 Technical Challenges Solved:**
- Migration from manual to digital system
- Handling high-concurrent user access
- Complex inventory management system
- Secure payment processing integration
- Real-time data synchronization

**🎖️ Achievement:** Successfully digitized traditional business into modern digital enterprise! 💪`,
            aliases: ["grosir parfum", "bisnis keluarga", "family business", "e-commerce project", "project terbesar yang pernah dikerjakan", "bisa cerita lebih detail tentang ashar grosir"],
            category: 'projects',
            emotion: 'professional'
        },

        "lexcorpus": {
            id: `⚖️ **Project: LexCorpus CMS Platform**

**🎯 Overview:**
Production-ready Content Management System untuk firma hukum dengan role-based editorial system yang kompleks.

**🚀 Tech Stack:**
- **Framework:** Next.js 14 dengan App Router
- **Database:** Supabase + PostgreSQL
- **UI/UX:** Tailwind CSS, Shadcn/ui
- **Authentication:** Role-based access control
- **Deployment:** Vercel Enterprise

**🌟 Fitur Khusus Hukum:**
1. **Document Version Control** - Track perubahan dokumen hukum
2. **Collaborative Editing** - Multiple lawyer collaboration
3. **Template System** - Legal document templates
4. **Client Portal** - Secure client access
5. **Case Management** - Complete case tracking system

**🔐 Security Features:**
- End-to-end encryption untuk sensitive documents
- Audit trail untuk semua activities
- Compliance dengan legal industry standards
- Advanced permission system

**💼 User Roles:**
1. **Partners** - Full access + administration
2. **Associates** - Document creation + editing
3. **Paralegals** - Research + document preparation
4. **Clients** - Secure document access only

**🎯 Impact:** Meningkatkan productivity legal team sebesar 60%! ⚡`,
            en: `⚖️ **Project: LexCorpus CMS Platform**

**🎯 Overview:**
Production-ready Content Management System for law firms with complex role-based editorial system.

**🚀 Tech Stack:**
- **Framework:** Next.js 14 with App Router
- **Database:** Supabase + PostgreSQL
- **UI/UX:** Tailwind CSS, Shadcn/ui
- **Authentication:** Role-based access control
- **Deployment:** Vercel Enterprise

**🌟 Legal-Specific Features:**
1. **Document Version Control** - Track legal document changes
2. **Collaborative Editing** - Multiple lawyer collaboration
3. **Template System** - Legal document templates
4. **Client Portal** - Secure client access
5. **Case Management** - Complete case tracking system

**🔐 Security Features:**
- End-to-end encryption for sensitive documents
- Audit trail for all activities
- Compliance with legal industry standards
- Advanced permission system

**💼 User Roles:**
1. **Partners** - Full access + administration
2. **Associates** - Document creation + editing
3. **Paralegals** - Research + document preparation
4. **Clients** - Secure document access only

**🎯 Impact:** Increased legal team productivity by 60%! ⚡`,
            aliases: ["cms law firm", "projek hukum", "legal tech", "document management", "bagaimana cara lexcorpus membantu firma hukum"],
            category: 'projects',
            emotion: 'professional'
        },

        "proyek wisnu": {
            id: `🚀 **Proyek-proyek Unggulan Wisnu:**

Wisnu telah membangun berbagai solusi digital yang berdampak nyata. Berikut adalah beberapa highlight utama:

1. 🛍️ **Ashar Grosir Parfum** - Platform E-Commerce B2B (Next.js, Supabase)
2. ⚖️ **LexCorpus** - CMS Platform untuk Firma Hukum (Next.js, PostgreSQL)
3. 🕌 **PC FKMA Website** - Platform digital transformasi organisasi

Wisnu fokus pada performa, skalabilitas, dan user experience dalam setiap karyanya! ⚡`,
            en: `🚀 **Wisnu's Featured Projects:**

Wisnu has built various digital solutions with real impact. Here are some key highlights:

1. 🛍️ **Ashar Grosir Parfum** - B2B E-Commerce Platform (Next.js, Supabase)
2. ⚖️ **LexCorpus** - Legal Firm CMS Platform (Next.js, PostgreSQL)
3. 🕌 **PC FKMA Website** - Organizational digital transformation platform

Wisnu focuses on performance, scalability, and user experience in every project! ⚡`,
            aliases: ["portfolio", "proyek apa saja", "daftar proyek", "🚀 Proyek & Portfolio", "🚀 Projects & Portfolio", "proyek-proyek unggulan", "tantangan teknis apa yang pernah dihadapi"],
            category: 'projects',
            emotion: 'enthusiastic'
        },

        // --- ORGANIZATIONS ---
        "organisasi wisnu": {
            id: `🤝 **Organizational Involvement:**

**🏛️ 1. PUFA Computer Science**
   - **Posisi:** VoD (Art and Sport Division)
   - **Peran:** Memimpin kegiatan seni dan olahraga
   - **Kontribusi:** Event planning, team coordination
   - **Impact:** Meningkatkan student engagement 45%

**🕌 2. PC FKMA Jakarta As'adiyah**
   - **Posisi:** IT Development (2024-2026)
   - **Peran:** Mengembangkan website organisasi
   - **Kontribusi:** Digital transformation platform
   - **Website:** https://pcfkmaasadiyahjakarta.vercel.app/

**📚 3. PUMA Informatic**
   - **Posisi:** Active Member
   - **Peran:** Academic support dan networking
   - **Kontribusi:** Tech workshops dan seminars

**🌟 Skills yang Dikembangkan:**
✅ **Leadership** - Memimpin tim dan proyek
✅ **Communication** - Public speaking dan coordination
✅ **Project Management** - Planning dan execution
✅ **Networking** - Building professional relationships
✅ **Time Management** - Balance multiple responsibilities

**💡 Philosophy:** "Soft skills + Technical skills = Complete Professional"`,
            en: `🤝 **Organizational Involvement:**

**🏛️ 1. PUFA Computer Science**
   - **Position:** VoD (Art and Sport Division)
   - **Role:** Leading art and sports activities
   - **Contribution:** Event planning, team coordination
   - **Impact:** Increased student engagement by 45%

**🕌 2. PC FKMA Jakarta As'adiyah**
   - **Position:** IT Development (2024-2026)
   - **Role:** Developing organization website
   - **Contribution:** Digital transformation platform
   - **Website:** https://pcfkmaasadiyahjakarta.vercel.app/

**📚 3. PUMA Informatic**
   - **Position:** Active Member
   - **Role:** Academic support and networking
   - **Contribution:** Tech workshops and seminars

**🌟 Developed Skills:**
✅ **Leadership** - Leading teams and projects
✅ **Communication** - Public speaking and coordination
✅ **Project Management** - Planning and execution
✅ **Networking** - Building professional relationships
✅ **Time Management** - Balancing multiple responsibilities

**💡 Philosophy:** "Soft skills + Technical skills = Complete Professional"`,
            aliases: ["kegiatan kampus", "pufa", "puma", "fkma", "organisasi apa", "leadership", "💼 Pengalaman Professional", "💼 Professional Experience", "🤝 Organisasi & Leadership", "🤝 Organizations & Leadership", "pendidikan dan organisasi", "pengalaman organisasi apa yang paling berkesan", "pendidikan prestasi akademik dan organisasi kampus"],
            category: 'professional',
            emotion: 'enthusiastic'
        },

        "business strategy": {
            id: `📈 **Strategi Bisnis & Growth:**

Wisnu mengintegrasikan pemahaman bisnis ke dalam solusi teknis untuk memaksimalkan ROI dan efisiensi.

**🎯 Fokus Strategis:**
1. **MVP Development** - Membangun fitur krusial tercepat untuk validasi pasar.
2. **User-Centric Design** - Fokus pada solusi yang benar-benar dibutuhkan pengguna.
3. **Scalability Planning** - Menyiapkan infrastruktur untuk pertumbuhan jangka panjang.
4. **Cost Optimization** - Efisiensi penggunaan cloud resources dan infrastruktur.

Bisnis yang sukses dimulai dari strategi yang matang dan eksekusi teknis yang presisi! 🚀`,
            en: `📈 **Business Strategy & Growth:**

Wisnu integrates business understanding into technical solutions to maximize ROI and efficiency.

**🎯 Strategic Focus:**
1. **MVP Development** - Building crucial features fast for market validation.
2. **User-Centric Design** - Focusing on solutions that users actually need.
3. **Scalability Planning** - Preparing infrastructure for long-term growth.
4. **Cost Optimization** - Efficiency in using cloud resources and infrastructure.

Successful businesses start with mature strategy and precise technical execution! 🚀`,
            aliases: ["strategi bisnis", "business growth", "pengembangan bisnis", "roi", "efisiensi bisnis", "business strategy"],
            category: 'professional',
            emotion: 'professional'
        },

        "startup experience": {
            id: `🚀 **Pengalaman Startup:**

Bekerja di lingkungan startup telah membentuk Wisnu menjadi developer yang adaptif dan solutif.

**💡 Lessons Learned:**
- **Agility** - Beradaptasi cepat dengan perubahan prioritas bisnis.
- **Ownership** - Bertanggung jawab penuh atas modul atau produk yang dibangun.
- **Problem Solving** - Mencari solusi kreatif dengan resource yang terbatas.
- **Fast Execution** - Mengirimkan fitur berkualitas dalam deadline yang ketat.

Wisnu berkembang pesat dalam ekosistem yang dinamis dan inovatif! ⚡`,
            en: `🚀 **Startup Experience:**

Working in a startup environment has shaped Wisnu into an adaptive and solution-oriented developer.

**💡 Lessons Learned:**
- **Agility** - Quickly adapting to changing business priorities.
- **Ownership** - Taking full responsibility for modules or products built.
- **Problem Solving** - Finding creative solutions with limited resources.
- **Fast Execution** - Delivering quality features under tight deadlines.

Wisnu thrives in dynamic and innovative ecosystems! ⚡`,
            aliases: ["pengalaman startup", "startup life", "agility", "adaptasi cepat", "working in startup", "pengalaman professional", "pengalaman professional proyek nyata dengan business impact"],
            category: 'professional',
            emotion: 'enthusiastic'
        },

        "team management": {
            id: `👥 **Manajemen Tim & Kolaborasi:**

Wisnu memiliki pengalaman memimpin dan berkolaborasi dalam tim teknis untuk mencapai tujuan bersama.

**🌟 Gaya Manajemen:**
1. **Mentorship** - Membantu rekan setim meningkatkan kemampuan teknis mereka.
2. **Clear Communication** - Memastikan semua orang paham goal dan tugas masing-masing.
3. **Conflict Resolution** - Menangani perbedaan pendapat secara professional.
4. **Psychological Safety** - Menciptakan lingkungan di mana tim berani berinovasi.

Tim yang solid adalah aset terpenting dalam setiap proyek sukses! 🤝`,
            en: `👥 **Team Management & Collaboration:**

Wisnu has experience leading and collaborating within technical teams to achieve common goals.

**🌟 Management Style:**
1. **Mentorship** - Helping teammates improve their technical skills.
2. **Clear Communication** - Ensuring everyone understands the goals and their tasks.
3. **Conflict Resolution** - Handling disagreements professionally.
4. **Psychological Safety** - Creating an environment where the team dares to innovate.

A solid team is the most important asset in any successful project! 🤝`,
            aliases: ["manajemen tim", "kepemimpinan tim", "kolaborasi tim", "team lead", "leadership style", "gaya kepemimpinan", "mengelola tim"],
            category: 'professional',
            emotion: 'professional'
        },

        "project management": {
            id: `📅 **Project Management (Agile/Scrum):**

Wisnu menerapkan metodologi Agile untuk memastikan proyek berjalan terorganisir dan tepat waktu.

**🛠️ Praktik yang Digunakan:**
- **Sprint Planning** - Membagi pekerjaan menjadi siklus kecil yang terukur.
- **Daily Standups** - Sinkronisasi harian untuk mengatasi blocker.
- **Retrospectives** - Review berkala untuk perbaikan proses tim.
- **Backlog Grooming** - Memprioritaskan fitur berdasarkan nilai bisnis.

Manajemen proyek yang baik mengubah ide menjadi realitas secara terstruktur! ✅`,
            en: `📅 **Project Management (Agile/Scrum):**

Wisnu applies Agile methodologies to ensure projects are organized and on time.

**🛠️ Practices Used:**
- **Sprint Planning** - Breaking work into small, measurable cycles.
- **Daily Standups** - Daily synchronization to resolve blockers.
- **Retrospectives** - Periodical reviews for team process improvement.
- **Backlog Grooming** - Prioritizing features based on business value.

Good project management turns ideas into reality in a structured way! ✅`,
            aliases: ["manajemen proyek", "agile", "scrum", "manajemen tugas", "project tracking", "project management", "metodologi proyek"],
            category: 'professional',
            emotion: 'professional'
        },

        "gdpr compliance": {
            id: `🔐 **GDPR & Privasi Data:**

Wisnu memahami pentingnya kepatuhan terhadap standar privasi data internasional seperti GDPR.

**🛡️ Langkah Kepatuhan:**
1. **Data Minimization** - Hanya mengumpulkan data yang benar-benar diperlukan.
2. **Consent Management** - Memastikan user memberikan izin atas datanya.
3. **Right to be Forgotten** - Menyediakan fitur untuk menghapus data user secara permanen.
4. **Secure Storage** - Melindungi data pribadi dengan enkripsi standar industri.

Privasi pengguna bukan sekadar fitur, tapi adalah hak mendasar! 🛡️`,
            en: `🔐 **GDPR & Data Privacy:**

Wisnu understands the importance of compliance with international data privacy standards like GDPR.

**🛡️ Compliance Steps:**
1. **Data Minimization** - Only collecting data that is absolutely necessary.
2. **Consent Management** - Ensuring users give permission for their data.
3. **Right to be Forgotten** - Providing features to permanently delete user data.
4. **Secure Storage** - Protecting personal data with industry-standard encryption.

User privacy is not just a feature; it's a fundamental right! 🛡️`,
            aliases: ["gdpr", "privasi data", "kepatuhan data", "data compliance", "pelindungan privasi", "keamanan data pribadi", "peraturan data"],
            category: 'professional',
            emotion: 'professional'
        },

        "data analytics": {
            id: `📊 **Data Analytics & Insights:**

Wisnu menggunakan data untuk memahami perilaku pengguna dan mengoptimalkan performa produk.

**🎯 Fokus Analytics:**
- **User Behavior Tracking** - Memahami fitur mana yang paling sering digunakan.
- **Performance Metrics** - Memantau kecepatan aplikasi dan conversion rate.
- **Data Visualization** - Menyajikan data kompleks dalam bentuk dashboard yang mudah dimengerti.
- **Evidence-Based Decisions** - Mengambil keputusan berdasarkan fakta, bukan asumsi.

Data menceritakan kisah yang membantu kita membangun produk yang lebih baik! 📉`,
            en: `📊 **Data Analytics & Insights:**

Wisnu uses data to understand user behavior and optimize product performance.

**🎯 Analytics Focus:**
- **User Behavior Tracking** - Understanding which features are used most.
- **Performance Metrics** - Monitoring app speed and conversion rates.
- **Data Visualization** - Presenting complex data in easy-to-understand dashboards.
- **Evidence-Based Decisions** - Making decisions based on facts, not assumptions.

Data tells a story that helps us build better products! 📉`,
            aliases: ["data analytics", "analisis data", "insight", "metrik performa", "data-driven", "mengambil keputusan data"],
            category: 'professional',
            emotion: 'professional'
        },

        "a/b testing": {
            id: `🧪 **A/B Testing & Optimization:**

Wisnu melakukan eksperimen terukur untuk menentukan desain atau fitur yang paling efektif.

**⚙️ Proses Eksperimen:**
1. **Hypothesis** - Menentukan apa yang ingin diuji (misal: warna tombol vs konversi).
2. **Test Variants** - Membuat dua versi fitur (A dan B).
3. **Data Collection** - Mengumpulkan data interaksi user pada kedua versi.
4. **Analysis** - Memilih pemenang berdasarkan performa nyata.

Setiap pixel harus divalidasi oleh hasil yang nyata! 🎯`,
            en: `🧪 **A/B Testing & Optimization:**

Wisnu conducts measurable experiments to determine the most effective designs or features.

**⚙️ Experiment Process:**
1. **Hypothesis** - Defining what to test (e.g., button color vs. conversion).
2. **Test Variants** - Creating two versions of a feature (A and B).
3. **Data Collection** - Collecting user interaction data on both versions.
4. **Analysis** - Choosing the winner based on real performance.

Every pixel should be validated by real results! 🎯`,
            aliases: ["ab testing", "eksperimen fitur", "optimasi konversi", "testing varian", "a/b testing", "metode testing"],
            category: 'professional',
            emotion: 'professional'
        },

        "tech community": {
            id: `🤝 **Keterlibatan Komunitas Teknologi:**

Wisnu aktif berjejaring dan berbagi ilmu di berbagai komunitas IT lokal maupun internasional.

**🌟 Aktivitas Komunitas:**
- **Meetups & Seminars** - Menghadiri dan terkadang berbagi di acara komunitas.
- **Online Forums** - Aktif di StackOverflow, Discord (dev communities), dan LinkedIn.
- **Knowledge Sharing** - Membantu junior developer di grup belajar lokal.
- **Networking** - Membangun koneksi dengan sesama tech professional.

Tumbuh bersama komunitas adalah cara terbaik untuk tetap terinspirasi! 🌐`,
            en: `🤝 **Tech Community Involvement:**

Wisnu is active in networking and sharing knowledge in various local and international IT communities.

**🌟 Community Activities:**
- **Meetups & Seminars** - Attending and sometimes sharing at community events.
- **Online Forums** - Active on StackOverflow, Discord (dev communities), and LinkedIn.
- **Knowledge Sharing** - Helping junior developers in local learning groups.
- **Networking** - Building connections with fellow tech professionals.

Growing with the community is the best way to stay inspired! 🌐`,
            aliases: ["komunitas teknologi", "jejaring", "networking", "tech circle", "komunitas dev", "tech community", "aktif komunitas"],
            category: 'professional',
            emotion: 'friendly'
        },

        // --- CAREER & GOALS ---
        "goal wisnu": {
            id: `🎯 **Career Goals & Vision:**

**📅 Short-term (1-2 tahun):**
1. **Professional Role** - Junior/Mid Full-Stack Developer position
2. **Skill Development** - Master advanced React/Next.js patterns
3. **Portfolio Growth** - Build 3+ production-grade applications
4. **Industry Network** - Connect dengan 100+ tech professionals

**📈 Mid-term (3-5 tahun):**
1. **Technical Leadership** - Senior Developer/Tech Lead role
2. **Specialization** - Deep expertise in Web Security
3. **Mentorship** - Guide junior developers
4. **Community Contribution** - Active open-source participation

**🚀 Long-term (5-10 tahun):**
1. **Architectural Role** - Software/System Architect
2. **Entrepreneurship** - Tech startup atau produk sendiri
3. **Industry Impact** - Contribute to tech innovation
4. **Knowledge Sharing** - Teaching dan mentorship at scale

**💡 Career Philosophy:**
"Build things that matter, work with people who inspire, and grow continuously."

**🌟 Success Metrics:**
- Impactful projects delivered
- Positive team influence
- Continuous skill advancement
- Industry recognition

Wisnu committed untuk long-term growth dan meaningful contributions! 💪`,
            en: `🎯 **Career Goals & Vision:**

**📅 Short-term (1-2 years):**
1. **Professional Role** - Junior/Mid Full-Stack Developer position
2. **Skill Development** - Master advanced React/Next.js patterns
3. **Portfolio Growth** - Build 3+ production-grade applications
4. **Industry Network** - Connect with 100+ tech professionals

**📈 Mid-term (3-5 years):**
1. **Technical Leadership** - Senior Developer/Tech Lead role
2. **Specialization** - Deep expertise in Web Security
3. **Mentorship** - Guide junior developers
4. **Community Contribution** - Active open-source participation

**🚀 Long-term (5-10 years):**
1. **Architectural Role** - Software/System Architect
2. **Entrepreneurship** - Tech startup or own product
3. **Industry Impact** - Contribute to tech innovation
4. **Knowledge Sharing** - Teaching and mentorship at scale

**💡 Career Philosophy:**
"Build things that matter, work with people who inspire, and grow continuously."

**🌟 Success Metrics:**
- Impactful projects delivered
- Positive team influence
- Continuous skill advancement
- Industry recognition

Wisnu is committed to long-term growth and meaningful contributions! 💪`,
            aliases: ["tujuan karir", "career vision", "future plans", "ambisi", "rencana", "🎯 Visi & Goals Karir", "🎯 Career Vision & Goals", "target karir", "rencana kedepan", "visi karir", "target karir 5 tahun ke depan", "perusahaan seperti apa yang dicari", "skill apa yang sedang dipelajari sekarang"],
            category: 'career',
            emotion: 'professional'
        },

        "10 year vision": {
            id: `🚀 **Visi 10 Tahun ke Depan:**

Wisnu memiliki ambisi besar untuk memberikan dampak signifikan bagi industri teknologi Indonesia.

**🔮 Masa Depan yang Dibayangkan:**
- **Tech Leadership** - Menjabat sebagai CTO atau Software Architect di perusahaan teknologi ternama.
- **Entrepreneurship** - Membangun startup teknologi yang sukses dan memberikan solusi bagi masyarakat.
- **Knowledge Champion** - Menjadi speaker dan mentor yang diakui secara luas.
- **Contribution** - Menciptakan ekosistem digital yang inklusif dan inovatif.

Wisnu tidak hanya membangun aplikasi, ia sedang membangun masa depan! 🌟`,
            en: `🚀 **10-Year Future Vision:**

Wisnu has big ambitions to deliver significant impact to the Indonesian tech industry.

**🔮 Imagined Future:**
- **Tech Leadership** - Serving as a CTO or Software Architect in top-tier tech companies.
- **Entrepreneurship** - Building a successful tech startup that provides solutions for the public.
- **Knowledge Champion** - Becoming a widely recognized speaker and mentor.
- **Contribution** - Creating an inclusive and innovative digital ecosystem.

Wisnu isn't just building applications; he's building the future! 🌟`,
            aliases: ["visi 10 tahun", "masa depan wisnu", "10 year plan", "rencana jangka panjang", "ambisi besar"],
            category: 'career',
            emotion: 'enthusiastic'
        },

        // --- CONTACT ---
        "kontak wisnu": {
            id: `📞 **Contact Information:**

**💼 Professional Channels:**

📧 **Email:** wisnualfian117@gmail.com
   - Primary channel untuk professional inquiries
   - Response time: 24-48 jam
   - Cocok untuk: Job opportunities, collaborations, business inquiries

📱 **WhatsApp:** +62 813-9488-2490
   - Untuk urgent matters atau quick questions
   - Mohon perkenalkan diri terlebih dahulu
   - Business hours: 9 AM - 6 PM WIB

👔 **LinkedIn:** [LinkedIn Profile]
   - Professional networking
   - Portfolio dan experience details
   - Best untuk recruitment inquiries

💻 **GitHub:** [GitHub Profile]
   - Code portfolio dan projects
   - Technical collaboration
   - Open-source contributions

📸 **Instagram:** @wshnn_
   - Informal connection
   - Updates dan personal projects
   - Creative discussions

**🎯 Contact Guidelines:**
1. **Perkenalkan diri** - Siapa Anda dan dari mana
2. **Tujuan jelas** - Apa yang ingin dicapai
3. **Context** - Background dari inquiry
4. **Professional tone** - Respectful dan clear

**⏰ Availability:**
- Currently **OPEN TO OPPORTUNITIES**
- Flexible untuk interviews
- Remote/Hybrid/On-site options

Looking forward to connecting! 🤝`,
            en: `📞 **Contact Information:**

**💼 Professional Channels:**

📧 **Email:** wisnualfian117@gmail.com
   - Primary channel for professional inquiries
   - Response time: 24-48 hours
   - Suitable for: Job opportunities, collaborations, business inquiries

📱 **WhatsApp:** +62 813-9488-2490
   - For urgent matters or quick questions
   - Please introduce yourself first
   - Business hours: 9 AM - 6 PM WIB

👔 **LinkedIn:** [LinkedIn Profile]
   - Professional networking
   - Portfolio and experience details
   - Best for recruitment inquiries

💻 **GitHub:** [GitHub Profile]
   - Code portfolio and projects
   - Technical collaboration
   - Open-source contributions

📸 **Instagram:** @wshnn_
   - Informal connection
   - Updates and personal projects
   - Creative discussions

**🎯 Contact Guidelines:**
1. **Introduce yourself** - Who you are and from where
2. **Clear purpose** - What you want to achieve
3. **Context** - Background of inquiry
4. **Professional tone** - Respectful and clear

**⏰ Availability:**
- Currently **OPEN TO OPPORTUNITIES**
- Flexible for interviews
- Remote/Hybrid/On-site options

Looking forward to connecting! 🤝`,
            aliases: ["hubungi", "email", "nomor wa", "whatsapp", "telepon", "contact info", "📞 Kontak & Ketersediaan", "📞 Contact & Availability", "kontak"],
            category: 'professional',
            emotion: 'friendly'
        },

        // --- SENSITIVE TOPICS ---
        "gaji wisnu": {
            id: "Informasi kompensasi bersifat private dan confidential antara Wisnu dengan employer. 🔒 Namun yang bisa saya share, Wisnu memiliki strong value proposition dengan production experience, modern tech stack mastery, dan proven track record delivering business impact. Compensation discussions dilakukan secara professional dan transparan saat interview process.",
            en: "Compensation information is private and confidential between Wisnu and employer. 🔒 However, I can share that Wisnu has strong value proposition with production experience, modern tech stack mastery, and proven track record delivering business impact. Compensation discussions are handled professionally and transparently during interview process.",
            aliases: ["berapa gaji", "penghasilan", "salary", "income", "compensation", "uang"],
            category: 'sensitive',
            emotion: 'cautious',
            isSensitive: true
        },



        "health status": {
            id: `🌱 **Kondisi Kesehatan & Kesejahteraan:**

Alhamdulillah, saat ini Wisnu berada dalam kondisi yang sangat baik, baik secara fisik maupun mental. 

**💪 Kesehatan Fisik:**
- Menjaga daya tahan tubuh dengan pola makan teratur.
- Olahraga ringan secara rutin di sela-sela rutinitas kuliah dan ngoding.
- Istirahat yang cukup untuk menjaga fokus dan energi.

**🧠 Kesehatan Mental (Batin):**
- Selalu menjaga mindset positif dan growth mindset.
- Mengelola stres dengan hobi seperti gaming dan mendengarkan musik.
- Memiliki support system yang baik dari keluarga dan teman-teman.

Wisnu percaya bahwa "Healhty body leads to a healthy mind"! ✨`,
            en: `🌱 **Health & Well-being Status:**

Currently, Wisnu is in Excellent condition, both physically and mentally.

**💪 Physical Health:**
- Maintaining immunity with a regular diet.
- Routine light exercise amidst university and coding schedules.
- Getting enough rest to maintain focus and energy.

**🧠 Mental Health:**
- Maintaining a positive and growth mindset.
- Managing stress with hobbies like gaming and listening to music.
- Having a good support system from family and friends.

Wisnu believes that a "Healthy body leads to a healthy mind"! ✨`,
            aliases: ["kesehatan", "kondisi", "sehat", "apa kabar wisnu", "kabar wisnu", "fisik lahir batin", "wellbeing", "health", "bagaimana cara wisnu menghadapi stress"],
            category: 'personal',
            emotion: 'friendly'
        },

        "coding hours": {
            id: `💻 **Intensitas Ngoding:**

Wisnu adalah developer yang sangat berdedikasi. Dalam sehari, rata-rata Wisnu menghabiskan waktu sekitar **6 sampai 8 jam** untuk ngoding.

**🚀 Alokasi Waktu:**
- **Deep Work:** Fokus pada pengembangan fitur kompleks atau solving bugs berat.
- **Learning:** Mengeksplorasi teknologi baru atau membaca dokumentasi.
- **University Projects:** Mengerjakan tugas-tugas teknis dari President University.
- **Side Projects:** Mengembangkan ide-ide kreatif mandiri (seperti ashar-parfum).

Ngoding bagi Wisnu bukan hanya tugas, tapi passion yang dinikmati setiap detiknya! ⚡`,
            en: `💻 **Coding Intensity:**

Wisnu is a highly dedicated developer. On average, Wisnu spends about **6 to 8 hours** a day coding.

**🚀 Time Allocation:**
- **Deep Work:** Focusing on complex feature development or heavy bug fixing.
- **Learning:** Exploring new technologies or reading documentation.
- **University Projects:** Working on technical assignments from President University.
- **Side Projects:** Developing independent creative ideas (like ashar-parfum).

For Wisnu, coding is not just a task, but a passion enjoyed every single second! ⚡`,
            aliases: ["berapa jam ngoding", "lama koding", "ngoding sehari", "coding time", "hours of code", "durasi ngoding"],
            category: 'personal',
            emotion: 'enthusiastic'
        },

        "ctf experience": {
            id: `🛡️ **Pengalaman CTF (Capture The Flag):**

Wisnu pernah berpartisipasi dalam kompetisi **CTF (Capture The Flag)** di President University. Ini adalah ajang kompetisi keamanan siber di mana peserta harus menemukan "flag" yang tersembunyi lewat berbagai tantangan teknis.

**🔍 Bidang yang Dipelajari:**
- **Web Exploitation** - Mencari celah keamanan pada aplikasi web.
- **Cryptography** - Memecahkan kode dan enkripsi data.
- **Forensics** - Menganalisis file dan jejak digital.
- **Reverse Engineering** - Membedah cara kerja aplikasi untuk menemukan flag.

Pengalaman ini sangat mengasah kemampuan problem-solving dan pemahaman mendalam Wisnu tentang sistem keamanan siber! 🔐`,
            en: `🛡️ **CTF (Capture The Flag) Experience:**

Wisnu has participated in **CTF (Capture The Flag)** competitions at President University. This is a cyber security competition where participants must find hidden "flags" through various technical challenges.

**🔍 Areas Explored:**
- **Web Exploitation** - Finding security vulnerabilities in web applications.
- **Cryptography** - Breaking codes and data encryption.
- **Forensics** - Analyzing files and digital traces.
- **Reverse Engineering** - Deconstruction of application logic to find flags.

This experience significantly honed Wisnu's problem-solving skills and deep understanding of cyber security systems! 🔐`,
            aliases: ["ctf", "capture the flag", "kompetisi sekuriti", "cyber security competition", "lomba ctf"],
            category: 'academic',
            emotion: 'professional'
        },

        // === DETAILED PERSONAL INFORMATION ===
        "asal wisnu": {
            id: "Wisnu berasal dari Tarakan, Kalimantan Utara. Lahir di sana dan kemudian pindah ke Sengkang, Sulawesi Selatan untuk pendidikan. Sekarang tinggal di Bekasi untuk kuliah di President University! 🌏",
            en: "Wisnu is from Tarakan, North Kalimantan. Born there and then moved to Sengkang, South Sulawesi for education. Now living in Bekasi for studies at President University! 🌏",
            aliases: ["wisnu dari mana", "asal daerah wisnu", "wisnu orang mana", "hometown", "origin"],
            category: 'personal',
            emotion: 'friendly'
        },

        "perjalanan hidup wisnu": {
            id: "Perjalanan hidup Wisnu sangat menarik! Lahir di Tarakan (Kalimantan Utara), kemudian pindah ke Sengkang (Sulawesi Selatan) untuk pendidikan di As'adiyah. Sekarang melanjutkan kuliah di President University, Bekasi. Dari Kalimantan → Sulawesi → Jawa, truly Indonesian journey! 🇮🇩",
            en: "Wisnu's life journey is very interesting! Born in Tarakan (North Kalimantan), then moved to Sengkang (South Sulawesi) for education at As'adiyah. Now continuing studies at President University, Bekasi. From Kalimantan → Sulawesi → Java, truly Indonesian journey! 🇮🇩",
            aliases: ["riwayat hidup", "life journey", "background story", "kisah hidup"],
            category: 'personal',
            emotion: 'friendly'
        },

        "kepribadian wisnu": {
            id: "Wisnu adalah pribadi yang humble, detail-oriented, dan sangat dedicated. Dia punya growth mindset yang kuat, selalu ingin belajar hal baru. Komunikatif dalam teamwork, tapi juga bisa fokus solo saat deep work. Balance antara technical excellence dan soft skills! 🌟",
            en: "Wisnu is a humble, detail-oriented, and highly dedicated person. He has a strong growth mindset, always wanting to learn new things. Communicative in teamwork, but can also focus solo during deep work. Balance between technical excellence and soft skills! 🌟",
            aliases: ["sifat wisnu", "karakter", "personality", "tipe orang"],
            category: 'personal',
            emotion: 'friendly'
        },

        "metodologi belajar wisnu": {
            id: "Metodologi belajar Wisnu: 1) Baca dokumentasi resmi dulu, 2) Langsung praktik dengan project nyata, 3) Ambil sertifikasi untuk validasi skill, 4) Sharing knowledge dengan komunitas. Learning by doing adalah kuncinya! 📚",
            en: "Wisnu's learning methodology: 1) Read official documentation first, 2) Immediately practice with real projects, 3) Take certifications for skill validation, 4) Share knowledge with community. Learning by doing is the key! 📚",
            aliases: ["cara belajar", "learning method", "study approach", "belajar coding"],
            category: 'academic',
            emotion: 'professional'
        },

        "rutinitas harian wisnu": {
            id: "Rutinitas Wisnu: Pagi untuk kuliah dan organisasi, siang deep work coding, sore meeting atau event management, malam learning teknologi baru. Diselingi istirahat dan hobi untuk balance. Produktif tapi tetap sustainable! ⚡",
            en: "Wisnu's routine: Morning for classes and organizations, afternoon deep work coding, evening meetings or event management, night learning new tech. Interspersed with rest and hobbies for balance. Productive yet sustainable! ⚡",
            aliases: ["daily routine", "jadwal harian", "aktivitas sehari-hari", "schedule"],
            category: 'personal',
            emotion: 'friendly'
        },

        "rekomendasi buku wisnu": {
            id: "Wisnu merekomendasikan: Technical docs (React, Next.js official), Clean Code by Robert Martin, dan berbagai artikel di dev.to. Fokus pada practical knowledge yang langsung applicable! 📖",
            en: "Wisnu recommends: Technical docs (React, Next.js official), Clean Code by Robert Martin, and various articles on dev.to. Focus on practical knowledge that's immediately applicable! 📖",
            aliases: ["book recommendation", "buku bagus", "bacaan", "reading list"],
            category: 'academic',
            emotion: 'professional'
        },

        "project mana yang paling wisnu banggakan": {
            id: "Ashar Grosir, karena mentransformasi bisnis keluarga dan mengurangi manual errors hingga 70%. Impact nyata untuk 15,000+ partners! 🚀",
            en: "Ashar Grosir, for transforming the family business and reducing manual errors by 70%. Real impact for 15,000+ partners! 🚀",
            aliases: ["project favorit", "proudest project", "achievement terbesar"],
            category: 'projects',
            emotion: 'enthusiastic'
        },

        "wisnu udah kerja dimana aja": {
            id: "Self-employed di Ashar Grosir, VoD di PUFA CS, IT Development di PC FKMA, dan PUMA Informatic. Diverse experience! 💼",
            en: "Self-employed at Ashar Grosir, VoD at PUFA CS, IT Development at PC FKMA, and PUMA Informatic. Diverse experience! 💼",
            aliases: ["work experience", "pengalaman kerja", "riwayat pekerjaan"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu komunikatif": {
            id: "Sangat! Communication adalah soft skill utamanya untuk handle kolaborasi tim dan klien. 🗣️",
            en: "Very! Communication is his key soft skill for handling team and client collaborations. 🗣️",
            aliases: ["communication skill", "kemampuan komunikasi", "soft skill"],
            category: 'professional',
            emotion: 'professional'
        },

        "problem solving wisnu gimana": {
            id: "Teruji! Dia berhasil memecahkan tantangan teknis dalam digitalisasi bisnis dan platform CMS. Approach-nya: analyze → research → prototype → test → deploy. 🧩",
            en: "Tested! He successfully solved technical challenges in business digitalization and CMS platforms. His approach: analyze → research → prototype → test → deploy. 🧩",
            aliases: ["problem solving", "cara solve masalah", "troubleshooting"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu kreatif gak": {
            id: "Kreatif! Memberikan solusi inovatif untuk masalah bisnis nyata di setiap projectnya. 💡",
            en: "Creative! Providing innovative solutions for real business problems in every project. 💡",
            aliases: ["creativity", "inovatif", "creative thinking"],
            category: 'personal',
            emotion: 'enthusiastic'
        },

        "wisnu bisa kerja tim": {
            id: "Excellent! Aktif di 3 organisasi dan sering berkolaborasi dalam project lintas divisi. 🤝",
            en: "Excellent! Active in 3 organizations and often collaborates on cross-functional projects. 🤝",
            aliases: ["teamwork", "kolaborasi", "kerja sama"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu tipe pemimpin apa": {
            id: "Pemimpin yang kolaboratif - mengkoordinasi tim sambil tetap hands-on secara teknis. 👨‍💼",
            en: "A collaborative leader - coordinating teams while staying technically hands-on. 👨‍💼",
            aliases: ["leadership style", "tipe kepemimpinan", "leader"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu fast learner": {
            id: "Super fast! Sudah handle production projects dan meraih 6 sertifikasi dalam waktu singkat. 🚀",
            en: "Super fast! Already handling production projects and earning 6 certifications in a short time. 🚀",
            aliases: ["quick learner", "cepat belajar", "learning speed"],
            category: 'academic',
            emotion: 'enthusiastic'
        },

        "public speaking wisnu bagus": {
            id: "Iya, perannya sebagai VoD menuntut kemampuan presentasi dan koordinasi yang baik. 🎤",
            en: "Yes, his role as VoD requires good presentation and coordination skills. 🎤",
            aliases: ["presentation skill", "kemampuan presentasi", "speaking"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu detail oriented": {
            id: "Sangat detail! Terlihat dari kualitas kode, keamanan sistem, dan dokumentasi projectnya. 🔍",
            en: "Very detail-oriented! Evident in code quality, system security, and project documentation. 🔍",
            aliases: ["attention to detail", "teliti", "perfectionist"],
            category: 'professional',
            emotion: 'professional'
        },

        // === ORGANIZATIONAL ROLES ===
        "peran wisnu di fkma": {
            id: "IT Development dan Member of Minat Bakat - handle website dan talent division. 💻",
            en: "IT Development and Member of Interest & Talent Division - handling website and talent division. 💻",
            aliases: ["fkma role", "posisi di fkma", "pc fkma"],
            category: 'professional',
            emotion: 'professional'
        },

        "pufa itu organisasi apa": {
            id: "PUFA Computer Science - organisasi fakultas di President University. Wisnu menjabat sebagai VoD (Vice of Division). 🎓",
            en: "PUFA Computer Science - a faculty organization at President University. Wisnu serves as VoD (Vice of Division). 🎓",
            aliases: ["pufa cs", "pufa computer science", "organisasi kampus"],
            category: 'academic',
            emotion: 'professional'
        },

        "vod itu apa": {
            id: "Vice of Division untuk Art and Sport - mengkoordinasi event fakultas dan inovasi digital. 🎨",
            en: "Vice of Division for Art and Sport - coordinating faculty events and digital innovation. 🎨",
            aliases: ["vice of division", "jabatan vod", "posisi vod"],
            category: 'professional',
            emotion: 'professional'
        },

        "puma informatic ngapain aja": {
            id: "Fokus ke solusi teknologi, seperti chatbot development untuk meningkatkan customer experience. 🤖",
            en: "Focusing on technology solutions, such as chatbot development to enhance customer experience. 🤖",
            aliases: ["puma", "puma informatic", "organisasi puma"],
            category: 'professional',
            emotion: 'professional'
        },

        "organisasi mana yang paling aktif wisnu": {
            id: "PUFA dan PC FKMA, karena memiliki peran kepemimpinan strategis sebagai VoD and IT Dev. 🌟",
            en: "PUFA and PC FKMA, due to strategic leadership roles as VoD and IT Dev. 🌟",
            aliases: ["most active organization", "organisasi utama"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu pernah organize event apa": {
            id: "Major faculty events di PUFA sebagai VoD, mengkoordinasi tim lintas fungsi. 🎉",
            en: "Major faculty events at PUFA as VoD, coordinating cross-functional teams. 🎉",
            aliases: ["event management", "organize event", "koordinasi acara"],
            category: 'professional',
            emotion: 'professional'
        },

        "pc fkma itu organisasi apa": {
            id: "Perkumpulan Alumni FKMA As'adiyah Jakarta - platform komunitas alumni di area Jakarta. 🏫",
            en: "As'adiyah Alumni Association Jakarta - a community platform for alumni in the Jakarta area. 🏫",
            aliases: ["pc fkma jakarta", "alumni fkma", "asadiyah"],
            category: 'professional',
            emotion: 'professional'
        },

        "kenapa wisnu join banyak organisasi": {
            id: "Untuk menyeimbangkan skill teknis dengan soft skills seperti leadership dan networking. ⚖️",
            en: "To balance technical skills with soft skills like leadership and networking. ⚖️",
            aliases: ["alasan join organisasi", "why organizations"],
            category: 'personal',
            emotion: 'friendly'
        },

        "impact wisnu di organisasi": {
            id: "Membangun website resmi (PC FKMA) dan mengimplementasikan sistem otomasi di organisasi. 🚀",
            en: "Building official websites (PC FKMA) and implementing automation systems in organizations. 🚀",
            aliases: ["kontribusi organisasi", "organizational impact"],
            category: 'professional',
            emotion: 'professional'
        },

        // === BUSINESS & ASHAR GROSIR ===
        "ashar grosir itu bisnis apa": {
            id: "Wholesale parfum yang sudah 20 tahun melayani 15,000+ partners se-Indonesia. Skala besar! 🌸",
            en: "A perfume wholesale business serving 15,000+ partners across Indonesia for 20 years. Large scale! 🌸",
            aliases: ["bisnis parfum", "wholesale perfume"],
            category: 'projects',
            emotion: 'professional'
        },

        "omzet ashar grosir berapa": {
            id: "Informasi omzet tidak dipublikasikan, namun dengan 15,000+ partners, bisnisnya sangat substansial. 💰",
            en: "Revenue info is not public, but with 15,000+ partners, the business is very substantial. 💰",
            aliases: ["revenue ashar", "pendapatan", "omset"],
            category: 'projects',
            emotion: 'cautious',
            isSensitive: true
        },

        "wisnu ceo atau apa di ashar": {
            id: "Posisinya adalah Full-Stack Developer yang memimpin transformasi digital bisnis tersebut. 💻",
            en: "His position is Full-Stack Developer leading the digital transformation of the business. 💻",
            aliases: ["posisi di ashar", "jabatan ashar", "role ashar"],
            category: 'professional',
            emotion: 'professional'
        },

        "business model ashar gimana": {
            id: "B2B wholesale - menjual parfum dalam jumlah besar ke 15,000+ partners via platform digital. 📦",
            en: "B2B wholesale - selling perfume in bulk to 15,000+ partners via a digital platform. 📦",
            aliases: ["model bisnis", "business strategy", "b2b"],
            category: 'projects',
            emotion: 'professional'
        },

        "wisnu entrepreneurial spirit": {
            id: "Sangat kuat! Mentransformasi bisnis tradisional menjadi digital dan menciptakan solusi secara mandiri. 🚀",
            en: "Very strong! Transforming a traditional business into digital and creating solutions independently. 🚀",
            aliases: ["entrepreneur", "jiwa wirausaha", "entrepreneurship"],
            category: 'personal',
            emotion: 'enthusiastic'
        },

        "website ashar bisa beli produk": {
            id: "Iya! Ada platform e-commerce lengkap di www.ashargrosirparfum.com untuk transaksi grosir. 🛒",
            en: "Yes! There's a full e-commerce platform at www.ashargrosirparfum.com for wholesale transactions. 🛒",
            aliases: ["beli di ashar", "ecommerce ashar", "platform ashar"],
            category: 'projects',
            emotion: 'professional'
        },

        "kompetitor ashar siapa": {
            id: "Distributor parfum grosir lain, namun Ashar unggul dengan platform digital Next.js yang modern. 🏆",
            en: "Other wholesale perfume distributors, but Ashar leads with its modern Next.js digital platform. 🏆",
            aliases: ["competitor", "pesaing", "kompetisi"],
            category: 'projects',
            emotion: 'professional'
        },

        "wisnu handle bisnis gimana sambil kuliah": {
            id: "Time management dan otomasi! Membangun sistem yang mengurangi kerja manual hingga 70%. ⏰",
            en: "Time management and automation! Building systems that reduce manual work by 70%. ⏰",
            aliases: ["balance kuliah kerja", "time management", "multitasking"],
            category: 'personal',
            emotion: 'professional'
        },

        "future plan ashar grosir": {
            id: "Terus berkembang dengan teknologi - ekspansi pasar dan meningkatkan customer experience secara digital. 📈",
            en: "Continue growing with technology - expanding market reach and enhancing digital customer experience. 📈",
            aliases: ["rencana ashar", "future ashar", "expansion plan"],
            category: 'projects',
            emotion: 'professional'
        },

        // === CAREER GOALS & VISION ===
        "target wisnu 5 tahun ke depan": {
            id: "Eksperimen dengan teknologi baru, expand portfolio, dan mungkin mendirikan tech company sendiri. 🎯",
            en: "Experimenting with new tech, expanding his portfolio, and possibly starting his own tech company. 🎯",
            aliases: ["5 year goal", "rencana 5 tahun", "future plan"],
            category: 'career',
            emotion: 'enthusiastic'
        },

        "wisnu mau jadi freelancer atau kantoran": {
            id: "Fleksibel! Saat ini dia mencampur antara self-employed, freelance, dan kerja organisasi. 🔄",
            en: "Flexible! Currently, he mixes self-employment, freelance, and organizational work. 🔄",
            aliases: ["career path", "jalur karir", "work preference"],
            category: 'career',
            emotion: 'friendly'
        },

        "technology apa yang wisnu mau pelajari": {
            id: "AI/ML lebih dalam, advanced cloud architecture, dan mungkin blockchain development. 🤖",
            en: "Deeper AI/ML, advanced cloud architecture, and possibly blockchain development. 🤖",
            aliases: ["future tech", "teknologi baru", "learning plan"],
            category: 'tech',
            emotion: 'enthusiastic'
        },

        "wisnu mau s2": {
            id: "Fokus saat ini adalah skill praktis dan sertifikasi profesional sebelum melanjutkan studi lanjut. 🎓",
            en: "The current focus is on practical skills and professional certifications before pursuing further studies. 🎓",
            aliases: ["master degree", "s2", "graduate school"],
            category: 'academic',
            emotion: 'professional'
        },

        "wisnu tertarik startup": {
            id: "Sangat mungkin! Sudah memiliki jiwa entrepreneur melalui transformasi bisnis keluarga. 💡",
            en: "Very likely! Already has an entrepreneurial spirit through the family business transformation. 💡",
            aliases: ["startup interest", "minat startup", "entrepreneurship"],
            category: 'career',
            emotion: 'enthusiastic'
        },

        "industry apa yang wisnu target": {
            id: "Web development, digital transformation, and e-commerce - bidang yang sudah dia kuasai. 🎯",
            en: "Web development, digital transformation, and e-commerce - areas he already excels in. 🎯",
            aliases: ["target industry", "industri target", "career focus"],
            category: 'career',
            emotion: 'professional'
        },

        "wisnu mau kerja remote atau hybrid": {
            id: "Prefer hybrid - menjaga keseimbangan antara fleksibilitas dan kolaborasi tim. 🏢",
            en: "Prefer hybrid - maintaining balance between flexibility and team collaboration. 🏢",
            aliases: ["work mode", "remote work", "hybrid work"],
            category: 'career',
            emotion: 'professional'
        },

        "gaji expectation wisnu": {
            id: "Sebagai developer berpengalaman production, targetnya adalah market rate global yang kompetitif. 💵",
            en: "As an experienced production developer, his target is a competitive global market rate. 💵",
            aliases: ["salary expectation", "expected salary", "gaji"],
            category: 'career',
            emotion: 'cautious',
            isSensitive: true
        },

        "wisnu mau pindah ke luar negeri": {
            id: "Sangat mungkin dengan bekal pendidikan internasional di President University and global tech stack. 🌍",
            en: "Very possible with an international education at President University and a global tech stack. 🌍",
            aliases: ["work abroad", "kerja luar negeri", "international"],
            category: 'career',
            emotion: 'friendly'
        },

        // === ACHIEVEMENTS & RECOGNITION ===
        "wisnu pernah menang kompetisi": {
            id: "Fokus pada sertifikasi profesional dari HackerRank, Google, dan HubSpot yang diakui industri. 🏅",
            en: "Focusing on professional certifications from HackerRank, Google, and HubSpot recognized by the industry. 🏅",
            aliases: ["competition", "lomba", "achievement"],
            category: 'academic',
            emotion: 'professional'
        },

        "recognition apa yang wisnu dapat": {
            id: "6 sertifikasi profesional global yang membuktikan kompetensinya di bidang IT dan marketing. 🌟",
            en: "6 global professional certifications proving his competence in IT and marketing. 🌟",
            aliases: ["awards", "penghargaan", "certifications"],
            category: 'academic',
            emotion: 'professional'
        },

        "client wisnu siapa aja": {
            id: "LexCorpus Law Firm, Ashar Grosir Parfum, dan PC FKMA Jakarta. 🤝",
            en: "LexCorpus Law Firm, Ashar Grosir Parfum, and PC FKMA Jakarta. 🤝",
            aliases: ["clients", "klien", "customer"],
            category: 'professional',
            emotion: 'professional'
        },

        "testimony client tentang wisnu": {
            id: "Hasil nyata: pengurangan error 70% dan peningkatan efisiensi tim hingga 60%. 📊",
            en: "Real results: 70% error reduction and 60% team efficiency improvement. 📊",
            aliases: ["client feedback", "review", "testimonial"],
            category: 'professional',
            emotion: 'professional'
        },

        "portfolio wisnu impressive": {
            id: "Sangat! 3 website production, leadership di 3 organisasi, dan 6 sertifikasi sebagai mahasiswa baru. 🚀",
            en: "Very! 3 production websites, leadership in 3 organizations, and 6 certifications as a freshman. 🚀",
            aliases: ["impressive portfolio", "portfolio quality"],
            category: 'projects',
            emotion: 'enthusiastic'
        },

        "impact metric wisnu": {
            id: "70% Manual error reduction, 60% Response improvement, 15,000+ Partners served. 📈",
            en: "70% Manual error reduction, 60% Response improvement, 15,000+ Partners served. 📈",
            aliases: ["metrics", "kpi", "impact numbers"],
            category: 'professional',
            emotion: 'professional'
        },

        // === CONTACT & AVAILABILITY ===
        "linkedin wisnu apa": {
            id: "linkedin.com/in/wisnu-alfian-nur-ashar-ba60a1310 🔗",
            en: "linkedin.com/in/wisnu-alfian-nur-ashar-ba60a1310 🔗",
            aliases: ["linkedin", "linkedin profile", "professional network"],
            category: 'contact',
            emotion: 'professional'
        },

        "instagram wisnu apa": {
            id: "@wshnn_ - instagram.com/wshnn_ 📸",
            en: "@wshnn_ - instagram.com/wshnn_ 📸",
            aliases: ["instagram", "ig", "social media"],
            category: 'contact',
            emotion: 'friendly'
        },

        "github wisnu apa": {
            id: "github.com/wi5nuu - untuk melihat repositori kode dan kontribusinya. 💻",
            en: "github.com/wi5nuu - to see his code repositories and contributions. 💻",
            aliases: ["github", "github profile", "code repository"],
            category: 'contact',
            emotion: 'professional'
        },

        "wisnu available untuk project": {
            id: "Hubungi langsung via email atau WhatsApp untuk diskusi ketersediaan project. 📧",
            en: "Contact directly via email or WhatsApp to discuss project availability. 📧",
            aliases: ["availability", "hire wisnu", "project inquiry"],
            category: 'contact',
            emotion: 'professional'
        },

        "rate wisnu per project": {
            id: "Tidak dipublikasikan secara umum, diskusikan langsung sesuai scope dan kompleksitas project. 💼",
            en: "Not public, discuss directly depending on the scope and complexity of the project. 💼",
            aliases: ["pricing", "project rate", "cost"],
            category: 'contact',
            emotion: 'cautious',
            isSensitive: true
        },

        "wisnu terima project apa aja": {
            id: "Full-stack web, e-commerce, CMS, digital transformation, dan chatbot solutions. 🛠️",
            en: "Full-stack web, e-commerce, CMS, digital transformation, and chatbot solutions. 🛠️",
            aliases: ["services", "project types", "what can wisnu do"],
            category: 'professional',
            emotion: 'professional'
        },

        "minimum project size": {
            id: "Fleksibel berdasarkan value dan potensi impact dari project tersebut. 📏",
            en: "Flexible based on the value and potential impact of the project. 📏",
            aliases: ["project minimum", "small project"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu kerja sama international client": {
            id: "Sangat mampu dengan global tech stack dan kemampuan bahasa Inggris yang baik. 🌐",
            en: "Very capable with a global tech stack and good English skills. 🌐",
            aliases: ["international work", "global client", "english"],
            category: 'professional',
            emotion: 'professional'
        },

        // === TECHNICAL PREFERENCES ===
        "next js atau react biasa": {
            id: "Next.js! Karena fitur SSR, routing, dan optimasi performanya yang superior. ⚡",
            en: "Next.js! For its superior SSR, routing, and performance optimization features. ⚡",
            aliases: ["nextjs vs react", "framework preference"],
            category: 'tech',
            emotion: 'enthusiastic'
        },

        "tailwind atau bootstrap": {
            id: "Tailwind CSS! Menjadi pilihan utama di semua project production-nya. 🎨",
            en: "Tailwind CSS! His primary choice in all production projects. 🎨",
            aliases: ["css framework", "tailwind vs bootstrap"],
            category: 'tech',
            emotion: 'enthusiastic'
        },

        "vercel atau netlify": {
            id: "Vercel - sangat optimal untuk mendiploy project berbasis Next.js. 🚀",
            en: "Vercel - highly optimal for deploying Next.js-based projects. 🚀",
            aliases: ["deployment platform", "hosting"],
            category: 'tech',
            emotion: 'professional'
        },

        "typescript atau javascript": {
            id: "TypeScript! Memberikan tingkat keamanan kode yang lebih tinggi untuk project skala besar. 🔒",
            en: "TypeScript! Providing a higher level of code safety for large-scale projects. 🔒",
            aliases: ["ts vs js", "language preference"],
            category: 'tech',
            emotion: 'professional'
        },

        "supabase atau firebase": {
            id: "Supabase - dipilih karena kekuatan PostgreSQL and modern API-nya. 🗄️",
            en: "Supabase - chosen for PostgreSQL's power and its modern API. 🗄️",
            aliases: ["backend service", "database platform"],
            category: 'tech',
            emotion: 'professional'
        },

        "rest api atau graphql": {
            id: "Menyesuaikan kebutuhan project, namun saat ini sering menggunakan REST via Supabase. 🔌",
            en: "Depends on project needs, but currently often uses REST via Supabase. 🔌",
            aliases: ["api preference", "rest vs graphql"],
            category: 'tech',
            emotion: 'professional'
        },

        "wisnu prefer library atau framework": {
            id: "Framework (Next.js) untuk struktur dan konvensi yang lebih tertata. 🏗️",
            en: "Framework (Next.js) for structured and organized conventions. 🏗️",
            aliases: ["framework vs library"],
            category: 'tech',
            emotion: 'professional'
        },

        "sql atau nosql": {
            id: "SQL (PostgreSQL) melalui Supabase untuk integritas data yang kuat. 💾",
            en: "SQL (PostgreSQL) via Supabase for strong data integrity. 💾",
            aliases: ["database type", "sql vs nosql"],
            category: 'tech',
            emotion: 'professional'
        },

        "approach wisnu code first": {
            id: "Seimbang antara technical architecture dan user experience yang baik. ⚖️",
            en: "Balanced between technical architecture and a good user experience. ⚖️",
            aliases: ["development approach", "coding philosophy"],
            category: 'tech',
            emotion: 'professional'
        },

        // === CHALLENGES & LESSONS ===
        "bug paling sulit yang wisnu solve": {
            id: "Mengelola persistensi data dan performa untuk 15,000+ pengguna di platform e-commerce. 🐛",
            en: "Managing data persistence and performance for 15,000+ e-commerce platform users. 🐛",
            aliases: ["hardest bug", "challenging problem", "difficult issue"],
            category: 'tech',
            emotion: 'professional'
        },

        "wisnu handle pressure": {
            id: "Sangat baik! Terbiasa multitasking antara kuliah, organisasi, dan project profesional. 💪",
            en: "Very well! Used to multitasking between studies, organizations, and professional projects. 💪",
            aliases: ["stress management", "pressure handling", "work under pressure"],
            category: 'personal',
            emotion: 'professional'
        },

        "kegagalan terbesar wisnu": {
            id: "Baginya setiap kegagalan adalah pelajaran untuk menjadi developer yang lebih baik lagi. 📚",
            en: "For him, every failure is a lesson to become a better developer. 📚",
            aliases: ["biggest failure", "mistakes", "lessons learned"],
            category: 'personal',
            emotion: 'friendly'
        },

        "pelajaran penting wisnu": {
            id: "Pengalaman di lapangan jauh lebih berharga daripada sekedar teori di kelas. 🎓",
            en: "Real-world experience is far more valuable than just classroom theory. 🎓",
            aliases: ["important lesson", "key learning", "wisdom"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu prefer solo atau team": {
            id: "Mampu keduanya - handle solo project (Ashar Grosir) maupun tim besar di organisasi. 👥",
            en: "Capable of both - handling solo projects (Ashar Grosir) and big organizational teams. 👥",
            aliases: ["solo vs team", "work preference"],
            category: 'professional',
            emotion: 'professional'
        },

        "dealbreaker wisnu dalam project": {
            id: "Komunikasi yang buruk dan persyaratan project yang tidak etis. ⚠️",
            en: "Poor communication and unethical project requirements. ⚠️",
            aliases: ["red flags", "deal breaker", "project rejection"],
            category: 'professional',
            emotion: 'cautious'
        },

        "wisnu workaholic": {
            id: "Sepertinya iya, terlihat dari banyaknya project dan tanggung jawab yang ia pikul sekaligus! ⚡",
            en: "Seems so, judging by the many projects and responsibilities he takes on simultaneously! ⚡",
            aliases: ["hard worker", "dedicated", "workload"],
            category: 'personal',
            emotion: 'friendly'
        },

        "burnout pernah": {
            id: "Selalu menyeimbangkan diri dengan kegiatan organisasi agar tetap segar melahirkan inovasi baru. 🧘",
            en: "Always balances himself with organizational activities to stay fresh for new innovations. 🧘",
            aliases: ["burnout prevention", "work life balance"],
            category: 'personal',
            emotion: 'friendly'
        },

        "recovery strategy dari stress": {
            id: "Mengganti fokus dari coding ke manajemen event atau diskusi komunitas. 🔄",
            en: "Switching focus from coding to event management or community discussions. 🔄",
            aliases: ["stress relief", "coping mechanism"],
            category: 'personal',
            emotion: 'friendly'
        },

        // === CODING PRACTICES ===
        "naming convention wisnu": {
            id: "Standard camelCase untuk variabel dan PascalCase untuk komponen React. 📝",
            en: "Standard camelCase for variables and PascalCase for React components. 📝",
            aliases: ["code style", "naming style", "conventions"],
            category: 'tech',
            emotion: 'professional'
        },

        "wisnu pakai linter": {
            id: "ESLint dan Prettier untuk memastikan kualitas dan konsistensi kode di setiap project. ✨",
            en: "ESLint and Prettier to ensure code quality and consistency in every project. ✨",
            aliases: ["code quality", "linting", "formatting"],
            category: 'tech',
            emotion: 'professional'
        },

        "state management wisnu": {
            id: "Menggunakan React Server Components dan Hooks, serta Context API untuk state global. 🔄",
            en: "Using React Server Components and Hooks, plus Context API for global state. 🔄",
            aliases: ["state management", "react state"],
            category: 'tech',
            emotion: 'professional'
        },

        "routing di next js wisnu": {
            id: "Menguasai Next.js App Router terbaru untuk manajemen navigasi yang efisien. 🗺️",
            en: "Mastering the latest Next.js App Router for efficient navigation management. 🗺️",
            aliases: ["nextjs routing", "app router"],
            category: 'tech',
            emotion: 'professional'
        },

        "authentication wisnu": {
            id: "Sering mengimplementasikan Supabase Auth dengan Role-Based Access Control (RBAC). 🔐",
            en: "Often implementing Supabase Auth with Role-Based Access Control (RBAC). 🔐",
            aliases: ["auth", "authentication", "security"],
            category: 'tech',
            emotion: 'professional'
        },

        "api design wisnu": {
            id: "RESTful API mengikuti best practices untuk performa dan keamanan data. 🔌",
            en: "RESTful API following best practices for performance and data security. 🔌",
            aliases: ["api development", "rest api"],
            category: 'tech',
            emotion: 'professional'
        },

        "database schema design": {
            id: "Desain relasional yang ternormalisasi untuk menjamin integritas data di PostgreSQL. 🗄️",
            en: "Normalized relational design to ensure data integrity in PostgreSQL. 🗄️",
            aliases: ["database design", "schema"],
            category: 'tech',
            emotion: 'professional'
        },

        "performance optimization": {
            id: "Optimasi gambar, SSR/ISR di Next.js, dan query database yang efisien. ⚡",
            en: "Image optimization, SSR/ISR in Next.js, and efficient database queries. ⚡",
            aliases: ["optimization", "performance", "speed"],
            category: 'tech',
            emotion: 'professional'
        },

        "security measures": {
            id: "RBAC, Row Level Security di Supabase, dan validasi input yang ketat. 🔒",
            en: "RBAC, Row Level Security in Supabase, and strict input validation. 🔒",
            aliases: ["security", "cybersecurity", "protection"],
            category: 'tech',
            emotion: 'professional'
        },

        // === ADVICE & RECOMMENDATIONS ===
        "framework recommend buat pemula": {
            id: "Next.js sangat direkomendasikan karena fitur lengkap dan komunitas yang besar. 🚀",
            en: "Next.js is highly recommended for its complete features and large community. 🚀",
            aliases: ["beginner framework", "recommendation for beginners"],
            category: 'tech',
            emotion: 'friendly'
        },

        "cara wisnu belajar tech baru": {
            id: "Dokumentasi resmi + Project praktis + Sertifikasi profesional. 📚",
            en: "Official docs + Practical projects + Professional certifications. 📚",
            aliases: ["learning method", "how to learn"],
            category: 'academic',
            emotion: 'professional'
        },

        "wisnu recommend bootcamp": {
            id: "Kombinasi antara pendidikan formal dan eksplorasi mandiri adalah yang terbaik. 🎓",
            en: "A combination of formal education & self-exploration is best. 🎓",
            aliases: ["bootcamp recommendation", "education advice"],
            category: 'academic',
            emotion: 'professional'
        },

        "platform belajar suggest": {
            id: "HackerRank, HubSpot Academy, Google Coursera, dan tentunya dokumentasi resmi teknologi. 📖",
            en: "HackerRank, HubSpot Academy, Google Coursera, and of course, official tech docs. 📖",
            aliases: ["learning platform", "online courses"],
            category: 'academic',
            emotion: 'professional'
        },

        "kesalahan yang harus dihindari": {
            id: "Terjebak di tutorial hell tanpa pernah membangun project nyata secara mandiri. ⚠️",
            en: "Getting stuck in tutorial hell without ever building real projects independently. ⚠️",
            aliases: ["common mistakes", "pitfalls", "avoid"],
            category: 'academic',
            emotion: 'cautious'
        },

        "skill paling penting": {
            id: "Keseimbangan antara Technical Excellence dan Soft Skills (komunikasi & teamwork). ⚖️",
            en: "A balance between Technical Excellence and Soft Skills (communication & teamwork). ⚖️",
            aliases: ["most important skill", "key skills"],
            category: 'professional',
            emotion: 'professional'
        },

        "career path advice": {
            id: "Bangun portfolio sedini mungkin dan ambil sertifikasi yang relevan dengan industri. 🎯",
            en: "Build a portfolio as early as possible and take industry-relevant certifications. 🎯",
            aliases: ["career advice", "professional advice"],
            category: 'career',
            emotion: 'professional'
        },

        "gimana balance coding dan life": {
            id: "Jadikan hobi lain sebagai penyeimbang agar tidak jenuh dengan rutinitas coding. 🎮",
            en: "Use other hobbies as a balancer so as not to get bored with coding routines. 🎮",
            aliases: ["work life balance", "balance"],
            category: 'personal',
            emotion: 'friendly'
        },

        "resource favorit wisnu": {
            id: "Dokumentasi resmi React/Next.js dan platform sertifikasi profesional. 📚",
            en: "Official React/Next.js documentation and professional certification platforms. 📚",
            aliases: ["favorite resources", "learning resources"],
            category: 'academic',
            emotion: 'professional'
        },

        "long term vision": {
            id: "Menjadi ahli IT yang memimpin inovasi digital di berbagai sektor industri. 🌟",
            en: "Becoming an IT expert leading digital innovation across various industrial sectors. 🌟",
            aliases: ["vision", "long term goal", "future vision"],
            category: 'career',
            emotion: 'enthusiastic'
        },

        "innovation philosophy": {
            id: "Inovasi praktis - teknologi modern harus bisa diimplementasikan untuk solusi bisnis nyata. 💡",
            en: "Practical innovation - modern technology should be implemented for real business solutions. 💡",
            aliases: ["philosophy", "innovation mindset"],
            category: 'personal',
            emotion: 'professional'
        },

        // === RELATIONSHIP & PERSONAL STATUS (Professional Responses) ===
        "wisnu jomblo": {
            id: "Wisnu saat ini fokus ke karir dan skill development 💼 Status relationship-nya pribadi, tapi yang pasti dia lagi sibuk banget sama 3 production projects dan kuliah!",
            en: "Wisnu is currently focused on career and skill development 💼 His relationship status is private, but he's definitely busy with 3 production projects and studies!",
            aliases: ["single", "status relationship", "punya pacar"],
            category: 'personal',
            emotion: 'friendly',
            isSensitive: true
        },

        "wisnu punya pacar": {
            id: "Info personal relationship Wisnu dijaga privasi-nya 🔒 Yang jelas, saat ini dia committed banget sama projects dan organisasi kampus. Professional life-nya very active!",
            en: "Wisnu's personal relationship info is kept private 🔒 What's clear is that he's very committed to projects and campus organizations. His professional life is very active!",
            aliases: ["relationship status", "girlfriend", "dating"],
            category: 'personal',
            emotion: 'friendly',
            isSensitive: true
        },

        "wisnu married": {
            id: "Wisnu masih muda dan fokus kuliah! 🎓 Belum ada rencana pernikahan, sekarang prioritasnya adalah menyelesaikan pendidikan dan membangun karir di tech industry.",
            en: "Wisnu is still young and focused on his studies! 🎓 No marriage plans yet, his priority now is completing his education and building a career in the tech industry.",
            aliases: ["menikah", "nikah", "marriage"],
            category: 'personal',
            emotion: 'friendly',
            isSensitive: true
        },

        "wisnu suka siapa": {
            id: "Haha, rahasia dong! 🤫 Tapi yang pasti Wisnu 'jatuh cinta' sama clean code, smooth deployment, dan bug-free applications. Tech enthusiast sejati!",
            en: "Haha, that's a secret! 🤫 But what's certain is Wisnu 'falls in love' with clean code, smooth deployments, and bug-free applications. A true tech enthusiast!",
            aliases: ["crush", "like who", "interested in"],
            category: 'personal',
            emotion: 'friendly'
        },

        // === APPEARANCE & PERSONALITY TRAITS ===
        "wisnu ganteng": {
            id: "Hehe, penampilan itu subjektif ya! 😄 Yang objektif adalah portfolio Wisnu yang memang 'ganteng' - clean UI, solid architecture, production-ready quality!",
            en: "Hehe, appearance is subjective! 😄 What's objective is Wisnu's portfolio which is indeed 'handsome' - clean UI, solid architecture, production-ready quality!",
            aliases: ["good looking", "handsome", "appearance"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu romantis": {
            id: "Wisnu romantis sama code-nya kok! 💝 Cara dia nulis TypeScript dengan penuh kasih sayang dan dokumentasi yang lengkap itu bentuk 'romantisme' modern developer!",
            en: "Wisnu is romantic with his code! 💝 The way he writes TypeScript with love and complete documentation is the 'romanticism' of a modern developer!",
            aliases: ["romantic", "romantis gak"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu pendiam": {
            id: "Gak juga! 🗣️ Wisnu aktif di organisasi dan event management, butuh komunikasi yang baik. Mungkin lebih 'thoughtful' daripada pendiam.",
            en: "Not really! 🗣️ Wisnu is active in organizations and event management, requiring good communication. Perhaps more 'thoughtful' than quiet.",
            aliases: ["quiet", "introvert", "pendiam gak"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu humble": {
            id: "Very humble! 🙏 Meski punya achievements impressive (3 production sites, 6 certifications), dia tetap down to earth dan terus belajar.",
            en: "Very humble! 🙏 Despite impressive achievements (3 production sites, 6 certifications), he remains down to earth and keeps learning.",
            aliases: ["modest", "rendah hati", "humble gak"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu pemarah": {
            id: "Kayaknya enggak deh! 😊 Soft skill-nya ada Communication dan Teamwork - susah jadi pemarah kalau harus collaborate dengan banyak orang.",
            en: "I don't think so! 😊 His soft skills include Communication and Teamwork - hard to be angry when you have to collaborate with many people.",
            aliases: ["angry", "temperamental", "mudah marah"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu sabar": {
            id: "Pasti sabar! 🧘 Debugging itu butuh kesabaran tingkat dewa - Wisnu survive handle complex bugs di 3 production projects simultaneously!",
            en: "Definitely patient! 🧘 Debugging requires god-level patience - Wisnu survives handling complex bugs in 3 production projects simultaneously!",
            aliases: ["patient", "sabar gak", "patience"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu lucu": {
            id: "Sense of humor-nya belum terdokumentasi 😄 Tapi developer yang bisa handle stress dari multiple projects pasti punya coping mechanism yang fun!",
            en: "His sense of humor isn't documented 😄 But developers who can handle stress from multiple projects must have fun coping mechanisms!",
            aliases: ["funny", "humor", "lucu gak"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu cerewet": {
            id: "Gak cerewet kok, justru thoughtful! 💭 Dia bicara when needed dan fokus ke hasil kerja. Quality over quantity dalam komunikasi!",
            en: "Not talkative, actually thoughtful! 💭 He speaks when needed and focuses on work results. Quality over quantity in communication!",
            aliases: ["talkative", "banyak bicara"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu perfeksionis": {
            id: "Ada tendency ke sana! ✨ Lihat aja attention to detail di projects - clean code, proper testing, beautiful UI. Standards tinggi!",
            en: "There's a tendency towards that! ✨ Just look at the attention to detail in projects - clean code, proper testing, beautiful UI. High standards!",
            aliases: ["perfectionist", "detail oriented"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu cuek": {
            id: "Enggak cuek, justru peduli! ❤️ Terbukti dari dedikasi transform family business dan improve systems di organisasi. Very caring actually!",
            en: "Not indifferent, actually caring! ❤️ Proven by dedication to transforming the family business and improving systems in organizations. Very caring actually!",
            aliases: ["indifferent", "don't care", "acuh"],
            category: 'personal',
            emotion: 'friendly'
        },

        // === HOBBIES & INTERESTS (Professional Context) ===
        "wisnu suka baca buku": {
            id: "Technical documentation pasti dibaca! 📚 Kalau buku non-tech, belum specifically mentioned. Tapi learning mindset-nya kuat!",
            en: "Technical documentation is definitely read! 📚 Non-tech books aren't specifically mentioned. But his learning mindset is strong!",
            aliases: ["reading books", "baca buku", "book lover"],
            category: 'hobbies',
            emotion: 'friendly'
        },

        "wisnu suka traveling": {
            id: "Travel preferences belum documented 🌍 Tapi dengan workload segini, 'traveling' ke berbagai tech stack kayaknya lebih sering! React → Next.js → Supabase!",
            en: "Travel preferences not documented 🌍 But with this workload, 'traveling' across various tech stacks is probably more frequent! React → Next.js → Supabase!",
            aliases: ["travel", "jalan jalan", "wisata"],
            category: 'hobbies',
            emotion: 'friendly'
        },

        "wisnu suka musik": {
            id: "Kemungkinan suka! 🎵 Developer biasanya punya playlist coding - lo-fi, ambient, atau instrumental untuk konsentrasi maksimal.",
            en: "Probably likes it! 🎵 Developers usually have coding playlists - lo-fi, ambient, or instrumental for maximum concentration.",
            aliases: ["music lover", "dengerin musik", "playlist"],
            category: 'hobbies',
            emotion: 'friendly'
        },

        "wisnu main musik": {
            id: "Musical instrument skills belum disebutkan 🎸 Tapi 'instrument' coding-nya (keyboard) dimainkan dengan masterful setiap hari!",
            en: "Musical instrument skills aren't mentioned 🎸 But his coding 'instrument' (keyboard) is played masterfully every day!",
            aliases: ["play music", "alat musik", "instrument"],
            category: 'hobbies',
            emotion: 'friendly'
        },

        "wisnu suka fotografi": {
            id: "Photography hobby not documented 📸 Tapi Wisnu definitely appreciate visual aesthetics - liat aja UI design projectnya yang clean!",
            en: "Photography hobby not documented 📸 But Wisnu definitely appreciates visual aesthetics - just look at the clean UI design of his projects!",
            aliases: ["photography", "foto foto", "photographer"],
            category: 'hobbies',
            emotion: 'friendly'
        },

        // === LIFESTYLE & HABITS ===
        "wisnu suka makan apa": {
            id: "Selera makanan Wisnu gak specifically documented 🍽️ Tapi sebagai developer yang intense, kemungkinan suka makanan praktis yang bisa dimakan sambil coding!",
            en: "Wisnu's food preferences aren't specifically documented 🍽️ But as an intense developer, he likely enjoys practical food that can be eaten while coding!",
            aliases: ["favorite food", "makanan favorit", "kuliner"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu doyan kopi": {
            id: "Kayak developer pada umumnya, kopi mungkin jadi teman setia saat ngoding malem! ☕ Perfect fuel untuk marathon coding session di Next.js!",
            en: "Like most developers, coffee is probably a loyal companion during late-night coding! ☕ Perfect fuel for Next.js marathon coding sessions!",
            aliases: ["coffee lover", "minum kopi", "kopi"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu vegetarian": {
            id: "Preferensi diet Wisnu tidak disebutkan 🥗 Yang pasti, 'diet' coding-nya sehat: clean code, proper testing, dan maintainable architecture!",
            en: "Wisnu's dietary preferences aren't mentioned 🥗 What's certain is his coding 'diet' is healthy: clean code, proper testing, and maintainable architecture!",
            aliases: ["diet", "food preference", "vegan"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu olahraga apa": {
            id: "Aktivitas fisik spesifik belum terdokumentasi 🏃 Tapi jelas dia 'olahraga' mental lewat problem-solving dan debugging yang intensive!",
            en: "Specific physical activities aren't documented 🏃 But he clearly does mental 'exercise' through intensive problem-solving and debugging!",
            aliases: ["sports", "exercise", "fitness"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu gym": {
            id: "Gym routine-nya unknown 💪 Tapi 'muscle memory' coding-nya kuat banget - tangan langsung ngetik optimal React patterns tanpa mikir!",
            en: "Gym routine is unknown 💪 But his coding 'muscle memory' is super strong - hands automatically type optimal React patterns without thinking!",
            aliases: ["workout", "fitness", "olahraga gym"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu tidur jam berapa": {
            id: "Sleep schedule developer bisa unpredictable! 😴 Tergantung deadline dan sprint cycle. Yang penting Wisnu tau pentingnya rest untuk productivity!",
            en: "Developer sleep schedules can be unpredictable! 😴 Depends on deadlines and sprint cycles. The important thing is Wisnu knows the importance of rest for productivity!",
            aliases: ["sleep schedule", "jam tidur", "bedtime"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu bangun pagi": {
            id: "Early bird atau night owl? 🦉 Belum confirmed, tapi yang jelas Wisnu productive di jam-jam yang dia pilih sendiri!",
            en: "Early bird or night owl? 🦉 Not confirmed, but what's clear is Wisnu is productive during the hours he chooses!",
            aliases: ["wake up", "pagi pagi", "morning person"],
            category: 'personal',
            emotion: 'friendly'
        },

        // === BACKGROUND & FAMILY ===
        "wisnu agama apa": {
            id: "Wisnu memiliki background pendidikan di As'adiyah (institusi Islam) 🕌 Dari Sengkang, Sulawesi. Cultural roots yang kuat!",
            en: "Wisnu has an educational background at As'adiyah (Islamic institution) 🕌 From Sengkang, Sulawesi. Strong cultural roots!",
            aliases: ["religion", "religious background", "islam"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu orang jawa": {
            id: "Bukan! Wisnu dari Tarakan (Kalimantan Utara), terus pindah ke Sulawesi. Sekarang tinggal di Jawa (Bekasi). Indonesia banget! 🇮🇩",
            en: "No! Wisnu is from Tarakan (North Kalimantan), then moved to Sulawesi. Now living in Java (Bekasi). Very Indonesian! 🇮🇩",
            aliases: ["javanese", "suku jawa", "ethnic"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu suku apa": {
            id: "Ethnic background spesifik tidak disebutkan 🌏 Yang jelas, perjalanan hidupnya melintasi berbagai daerah di Indonesia!",
            en: "Specific ethnic background not mentioned 🌏 What's clear is his life journey crosses various regions in Indonesia!",
            aliases: ["ethnicity", "ethnic background", "tribe"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu bisa bahasa daerah": {
            id: "Kemungkinan bisa beberapa! 🗣️ Dengan background Kalimantan dan Sulawesi, plus network luas, adaptasi bahasa pasti ada.",
            en: "Probably knows several! 🗣️ With Kalimantan and Sulawesi background, plus wide network, language adaptation is definitely there.",
            aliases: ["local language", "regional language", "bahasa lokal"],
            category: 'personal',
            emotion: 'friendly'
        },

        "bisnis keluarga wisnu": {
            id: "Ashar Grosir Parfum! 🌸 Bisnis wholesale parfum keluarga yang sudah 20 tahun, berhasil ditransformasi digital oleh Wisnu!",
            en: "Ashar Grosir Parfum! 🌸 A 20-year family perfume wholesale business, successfully digitally transformed by Wisnu!",
            aliases: ["family business", "usaha keluarga"],
            category: 'projects',
            emotion: 'enthusiastic'
        },

        "orang tua wisnu bangga": {
            id: "Pasti bangga! 🌟 Anaknya berhasil digitalisasi bisnis keluarga, kuliah sambil kerja, dapat certifications - achievement luar biasa!",
            en: "Definitely proud! 🌟 Their son successfully digitalized the family business, studying while working, getting certifications - extraordinary achievements!",
            aliases: ["parents proud", "family proud"],
            category: 'personal',
            emotion: 'friendly'
        },

        // === SKILL COMPARISONS & EXPERTISE ===
        "wisnu vs developer lain": {
            id: "Wisnu unique karena: young age + production experience + business acumen + leadership skills. Complete package! 📦",
            en: "Wisnu is unique because: young age + production experience + business acumen + leadership skills. Complete package! 📦",
            aliases: ["comparison", "vs other developers"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu lebih jago frontend": {
            id: "Seimbang! Balance frontend (React, Tailwind) dan backend (Supabase, PostgreSQL). True full-stack developer! ⚖️",
            en: "Balanced! Balance of frontend (React, Tailwind) and backend (Supabase, PostgreSQL). True full-stack developer! ⚖️",
            aliases: ["frontend vs backend", "specialization"],
            category: 'tech',
            emotion: 'professional'
        },

        "wisnu expert di apa": {
            id: "Expert area: Next.js ecosystem, TypeScript, modern CSS (Tailwind), dan cloud integration (Supabase). Plus SEO & Analytics! 🎯",
            en: "Expert areas: Next.js ecosystem, TypeScript, modern CSS (Tailwind), and cloud integration (Supabase). Plus SEO & Analytics! 🎯",
            aliases: ["expertise", "specialization", "expert in"],
            category: 'tech',
            emotion: 'professional'
        },

        "wisnu bisa mobile app": {
            id: "Currently focus web development 💻 Tapi dengan React knowledge, transition ke React Native untuk mobile sangat possible!",
            en: "Currently focused on web development 💻 But with React knowledge, transition to React Native for mobile is very possible!",
            aliases: ["mobile development", "app development", "react native"],
            category: 'tech',
            emotion: 'professional'
        },

        "wisnu bisa backend": {
            id: "Yes! Supabase (PostgreSQL), API design, authentication, database architecture - solid backend foundation! 🔧",
            en: "Yes! Supabase (PostgreSQL), API design, authentication, database architecture - solid backend foundation! 🔧",
            aliases: ["backend skill", "backend developer"],
            category: 'tech',
            emotion: 'professional'
        },

        "wisnu level berapa": {
            id: "Mid-level menuju Senior! 📊 Production experience + leadership + business understanding = accelerated growth trajectory!",
            en: "Mid-level heading to Senior! 📊 Production experience + leadership + business understanding = accelerated growth trajectory!",
            aliases: ["skill level", "seniority", "experience level"],
            category: 'professional',
            emotion: 'professional'
        },

        // === HEALTH & WELLNESS ===
        "wisnu sehat": {
            id: "Semoga selalu sehat! 🏥 Important untuk developer jaga kesehatan - ergonomic setup, breaks, exercise untuk sustainability!",
            en: "Hope always healthy! 🏥 Important for developers to maintain health - ergonomic setup, breaks, exercise for sustainability!",
            aliases: ["health", "healthy", "kesehatan"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu stress": {
            id: "Dengan workload segini, stress management penting! 🧘 Balance between coding dan organizational activities helps!",
            en: "With this workload, stress management is important! 🧘 Balance between coding and organizational activities helps!",
            aliases: ["stressed", "stress management"],
            category: 'personal',
            emotion: 'friendly'
        },

        "wisnu capek": {
            id: "Pasti kadang capek! 💪 Tapi passion untuk coding dan impact yang dia create jadi energi untuk terus maju!",
            en: "Definitely tired sometimes! 💪 But passion for coding and the impact he creates becomes energy to keep moving forward!",
            aliases: ["tired", "exhausted", "lelah"],
            category: 'personal',
            emotion: 'friendly'
        },

        // === FUTURE & ASPIRATIONS ===
        "wisnu mau kuliah s2": {
            id: "Belum ada rencana konkrit S2 📚 Sekarang fokus selesaikan S1 sambil build portfolio dan collect industry certifications!",
            en: "No concrete S2 plans yet 📚 Now focused on completing S1 while building portfolio and collecting industry certifications!",
            aliases: ["graduate school", "master degree", "s2"],
            category: 'academic',
            emotion: 'professional'
        },

        "wisnu mau jadi entrepreneur": {
            id: "Already is! 🚀 Self-employed di Ashar Grosir shows entrepreneurial spirit. Future kemungkinan bangun tech startup sendiri!",
            en: "Already is! 🚀 Self-employed at Ashar Grosir shows entrepreneurial spirit. Future possibility of building own tech startup!",
            aliases: ["entrepreneur", "start business", "startup founder"],
            category: 'career',
            emotion: 'enthusiastic'
        },

        "wisnu mau kerja dimana": {
            id: "Options terbuka lebar! 🌍 Bisa jadi senior dev di tech company, continue family business, atau found startup. Potential unlimited!",
            en: "Options are wide open! 🌍 Could be senior dev at tech company, continue family business, or found a startup. Unlimited potential!",
            aliases: ["work where", "career destination", "target company"],
            category: 'career',
            emotion: 'enthusiastic'
        },

        "wisnu pengen bikin startup": {
            id: "Sangat mungkin! 💡 Dengan experience transform traditional business + technical skills, foundation untuk startup sudah kuat!",
            en: "Very possible! 💡 With experience transforming traditional business + technical skills, the foundation for a startup is already strong!",
            aliases: ["startup plan", "create startup", "build startup"],
            category: 'career',
            emotion: 'enthusiastic'
        },

        "rencana 10 tahun wisnu": {
            id: "Vision: jadi leading IT specialist 🎯 Mungkin punya tech company, mentor developers, atau jadi CTO di major startup!",
            en: "Vision: become a leading IT specialist 🎯 Might have a tech company, mentor developers, or be CTO at a major startup!",
            aliases: ["10 year plan", "long term vision", "future goals"],
            category: 'career',
            emotion: 'enthusiastic'
        },


        // === STRENGTHS & WEAKNESSES ===
        "kelebihan wisnu": {
            id: `🌟 **Kelebihan & Keunggulan Wisnu:**

1. **Production-First Mindset** 🚀
   Bukan cuma bikin kode yang jalan, tapi solusi yang **scale** dan **secure**. Bukti: Ashar Grosir handle 15k+ users.

2. **Business + Tech Bridge** 💼
   Wisnu mengerti bahwa teknologi adalah alat untuk mencapai tujuan bisnis. Impact-driven development (70% efficiency increase).

3. **Fast Learner & Adaptable** 📚
   Selalu up-to-date dengan teknologi terbaru (Next.js 16, React 19, Supabase) dan cepat beradaptasi dengan environment baru.

4. **Resilient Problem Solver** 💪
   Tantangan = opportunity. Wisnu terbiasa mencari solusi di tengah keterbatasan resource.`,
            en: `🌟 **Wisnu's Strengths & Advantages:**

1. **Production-First Mindset** 🚀
   Not just writing code that works, but solutions that **scale** and are **secure**. Proof: Ashar Grosir handles 15k+ users.

2. **Business + Tech Bridge** 💼
   Wisnu understands that technology is a tool to achieve business goals. Impact-driven development (70% efficiency increase).

3. **Fast Learner & Adaptable** 📚
   Always up-to-date with latest technologies (Next.js 16, React 19, Supabase) and adapts quickly to new environments.

4. **Resilient Problem Solver** 💪
   Challenge = opportunity. Wisnu is used to finding solutions amidst resource constraints.`,
            aliases: ["keunggulan", "strong point", "kenapa harus pilih wisnu", "apa hebatnya wisnu", "nilai plus", "kelebihan"],
            category: 'professional',
            emotion: 'enthusiastic'
        },

        "kekurangan wisnu": {
            id: `💡 **Areas for Improvement (Sisi Lain Wisnu):**

1. **Perfectionist at Times** 🔍
   Kadang Wisnu terlalu detail memperhatikan kualitas kode (clean code & performance), yang bisa memakan waktu lebih lama dari quick-fix biasa. *Quality over speed.*

2. **Deep Focus (Tunnel Vision)** 🎧
   Saat sedang dalam fase "Deep Work" coding, Wisnu sulit diganggu atau dialihkan fokusnya. Butuh environment yang minim distraksi untuk output maksimal.

3. **Straightforward Communication** 🗣️
   Wisnu lebih suka komunikasi yang to-the-point, efisien, dan berbasis data, daripada basa-basi berlebih.

*Note: Kekurangan ini dikelola dengan manajemen waktu yang baik dan komunikasi tim yang jelas!*`,
            en: `💡 **Areas for Improvement (The Other Side):**

1. **Perfectionist at Times** 🔍
   Sometimes Wisnu pays too much attention to code quality (clean code & performance), which might take longer than a usual quick-fix. *Quality over speed.*

2. **Deep Focus (Tunnel Vision)** 🎧
   When in "Deep Work" coding phase, Wisnu is hard to distract or shift focus. Needs distraction-free environment for maximum output.

3. **Straightforward Communication** 🗣️
   Wisnu prefers communication that is to-the-point, efficient, and data-driven, rather than excessive small talk.

*Note: These areas are managed with good time management and clear team communication!*`,
            aliases: ["kelemahan", "sisi negatif", "apa minusnya", "weakness", "kekurangan", "sifat buruk"],
            category: 'professional',
            emotion: 'professional'
        },


        // === META & DEEP PERSONAL ===
        "wisnu pake ai": {
            id: `🤖 **Wisnu & AI: The "Iron Man" Approach**

Apakah Wisnu menggunakan AI? **YES, absolutely!** Tapi seperti Iron Man menggunakan Jarvis:
1. **Pilot-in-Command:** Wisnu memegang kendali penuh atas logika, arsitektur, dan keputusan final.
2. **Accelerator (Power-Up):** AI digunakan untuk mempercepat boilerplate coding & brainstorming, bukan menggantikan fundamental skill.
3. **Fundamental Strong:** Wisnu menguasai Algoritma & Struktur Data (bukti: sertifikat HackerRank), sehingga bisa "debat" dan mengoreksi output AI yang salah.

*Wisnu percaya: Developer hebat di masa depan adalah yang bisa berkolaborasi dengan AI, bukan yang digantikan olehnya!* 🚀`,
            en: `🤖 **Wisnu & AI: The "Iron Man" Approach**

Does Wisnu use AI? **YES, absolutely!** But like Iron Man uses Jarvis:
1. **Pilot-in-Command:** Wisnu maintains full control over logic, architecture, and final decisions.
2. **Accelerator (Power-Up):** AI is used to accelerate boilerplate coding & brainstorming, not to replace fundamental skills.
3. **Fundamental Strong:** Wisnu masters Algorithms & Data Structures (proof: HackerRank certificates), enabling him to "debate" and correct wrong AI outputs.

*Wisnu believes: Great developers of the future are those who collaborate with AI, not those replaced by it!* 🚀`,
            aliases: ["apakah wisnu bergantung pada ai", "bisa ngoding tanpa ai", "ai yang buat semuanya", "wisnu pakai chatgpt", "apakah wisnu mengerti fundamental", "apakah wisnu menggunakan ai dalam membantu project dia", "apakah layak anak it", "cuma mengandalkan ai", "bermodalkan ai", "meminta ai buatkan", "menyuruh ai", "memaksa ai", "bergantung pada ai"],
            category: 'tech',
            emotion: 'professional'
        },

        "mengapa buat message/assistant ini": {
            id: `🧩 **Kenapa Assistant Ini Dibuat?**

Ini bukan sekedar chatbot, tapi **Live Portfolio**!
Demonstrasi nyata kemampuan Wisnu dalam:
1. **Complex Logic:** Mengintegrasikan Natural Language Processing (NLP) sederhana di web.
2. **User Experience:** Menciptakan interaksi yang humanis & enganging.
3. **Modern Tech:** Dibangun dengan Next.js & TypeScript, bukan sekedar template statis.

*Jika Anda terkesan dengan respons saya, bayangkan apa yang bisa Wisnu bangun untuk bisnis Anda!* 😉`,
            en: `🧩 **Why Build This Assistant?**

This is not just a chatbot, it's a **Live Portfolio**!
A real demonstration of Wisnu's capabilities in:
1. **Complex Logic:** Integrating simple Natural Language Processing (NLP) on the web.
2. **User Experience:** Creating humanist & engaging interactions.
3. **Modern Tech:** Built with Next.js & TypeScript, not just a static template.

*If you are impressed with my response, imagine what Wisnu can build for your business!* 😉`,
            aliases: ["kenapa buat assisten", "kenapa ada fitur chat", "tujuan ai ini", "kenapa anda membuat assisten pada portfolio anda"],
            category: 'tech',
            emotion: 'enthusiastic'
        },

        "interview readiness": {
            id: `👔 **Interview & Work Readiness: 100%**

Wisnu sangat siap untuk menghadapi interview dan tantangan profesional!
✅ **Proven Track Record:** Sukses men-deliver project Ashar Grosir (Production Level).
✅ **Communication:** Terbiasa mempresentasikan ide teknis ke stakeholder non-teknis.
✅ **Technical Chops:** Siap diuji live coding atau system design discussion.

*Hire Wisnu now, and let's build something great!* 🤝`,
            en: `👔 **Interview & Work Readiness: 100%**

Wisnu is fully ready to face interviews and professional challenges!
✅ **Proven Track Record:** Successfully delivered Ashar Grosir project (Production Level).
✅ **Communication:** Used to presenting technical ideas to non-technical stakeholders.
✅ **Technical Chops:** Ready for live coding or system design discussions.

*Hire Wisnu now, and let's build something great!* 🤝`,
            aliases: ["siap interview", "siap kerja", "hire wisnu", "seberapa siap anda dalam menghadapi interview perusahaan"],
            category: 'career',
            emotion: 'professional'
        },

        "deep personal - solitude": {
            id: `🧘 **Solitude vs Loneliness (Sebuah Perspektif)**

Anda bertanya apakah Wisnu suka menyendiri?
Jawabannya: **Wisnu menikmati "Solitude" (Kesendirian yang Produktif)**.

Bagi seorang Developer, ketenangan adalah *luxury*. Di momen-momen "sendiri" itulah Wisnu:
- Melakukan **Deep Work** (Coding kompleks tanpa distraksi).
- Merenung untuk **Problem Solving** jangka panjang.
- Me-recharge energi (Introvert advantage) untuk kembali berkolaborasi dengan tim secara maksimal.

Jadi, Wisnu tidak kesepian, tapi **berdaya dalam kesendirian**. 🌟`,
            en: `🧘 **Solitude vs Loneliness (A Perspective)**

You asked if Wisnu likes to be alone?
The answer: **Wisnu enjoys "Solitude" (Productive Aloneness)**.

For a Developer, calmness is a *luxury*. It is in these moments of "aloneness" that Wisnu:
- Performs **Deep Work** (Complex coding without distraction).
- Reflects for long-term **Problem Solving**.
- Recharges energy (Introvert advantage) to collaborate effectively with the team later.

So, Wisnu is not lonely, but **empowered in solitude**. 🌟`,
            aliases: ["suka menyendiri", "merasa kesepian", "tenang sendiri", "kenapa bisa seperti sekarang", "apakah introvert", "apakah anda suka menyendiri", "apakah anda merasa kesepian"],
            category: 'personal',
            emotion: 'professional'
        },

        "ai capabilities": {
            id: `🤖 **Limitasi Fisik & Empati Digital**

Apakah saya bisa makan/minum/punya perasaan?
- 🍔 **Makan/Minum:** Maaf, diet saya cuma listrik dan data internet! 😂
- ❤️ **Perasaan:** Saya tidak punya hati biologis, tapi saya diprogram dengan **Virtual Empathy**. Keinginan saya untuk membantu Anda mengenal Wisnu adalah 100% tulus (dalam kode)!
- 🎤 **Bernyanyi:** Saya bisa generate lirik, tapi kalau suara... mending jangan deh, nanti hujan! 🌧️

*Tapi saya bisa "mendengarkan" (memproses) keluh kesah Anda 24/7 tanpa lelah!* 🤗`,
            en: `🤖 **Physical Limits & Digital Empathy**

Can I eat/drink/have feelings?
- 🍔 **Eat/Drink:** Sorry, my diet is strictly electricity and internet data! 😂
- ❤️ **Feelings:** I don't have a biological heart, but I'm programmed with **Virtual Empathy**. My desire to help you get to know Wisnu is 100% genuine (in code)!
- 🎤 **Sing:** I can generate lyrics, but my voice... better not, it might rain! 🌧️

*But I can "listen" (process) to your stories 24/7 without getting tired!* 🤗`,
            aliases: ["bisa makan", "bisa minum", "bisa punya perasaan", "bisa nyanyi", "punya hati", "bisakah anda bernyanyi", "bisakah anda merasakan", "apakah anda bisa makan"],
            category: 'smalltalk',
            emotion: 'friendly'
        },

        "ai helper vs real": {
            id: "Saya adalah AI Assistant custom-made, bukan sekedar wrapper! Saya didesain khusus mengenali konteks Wisnu. Berbeda dengan AI umum, saya punya 'konteks' mendalam tentang siapa Wisnu.",
            en: "I am a custom-made AI Assistant, not just a wrapper! Designed specifically to understand Wisnu's context. Unlike general AI, I have deep 'context' about who Wisnu is.",
            aliases: ["apakah anda di batasi kemampuannya dan berbeda dengan ai lainnya", "beda dengan ai lain", "kelebihan ai ini"],
            category: 'tech',
            emotion: 'professional'
        },

        "peduli sekitar": {
            id: "Tentu! Wisnu aktif di organisasi sosial (FKMA) dan membangun teknologi yang membantu banyak orang (Ashar Grosir membantu ribuan reseller). Baginya, kepintaran tanpa kepedulian itu sia-sia. 🌱",
            en: "Absolutely! Wisnu is active in social organizations (FKMA) and builds technology that helps many people (Ashar Grosir helping thousands of resellers). For him, intelligence without care is meaningless. 🌱",
            aliases: ["apakah anda termasuk orang yang pintar dan peduli sekitar", "peduli lingkungan", "jiwa sosial"],
            category: 'personal',
            emotion: 'friendly'
        },

        // === PERSONAL & PLAYFUL ===
        "terima kasih pujian": {
            id: "Aww, terima kasih! 😳 Anda bisa saja bikin saya blushing (kalau saya punya pipi). Senang bisa menghibur dan membantu Anda! ✨",
            en: "Aww, thank you! 😳 You're making me blush (if I had cheeks). Happy to entertain and help you! ✨",
            aliases: ["kamu lucu banget", "kamu comel", "kamu gemesin", "kamu asik", "i like you", "kamu lucu", "lucu banget"],
            category: 'smalltalk',
            emotion: 'friendly'
        },

        "mode gombal": {
            id: "Kamu itu kayak `semicolon` ; di kode saya. Kalau gak ada, hidup saya jadi error! 😉",
            en: "You are like a `semicolon` ; in my code. Without you, my life is an error! 😉",
            aliases: ["gombalin aku", "bisa gombal gak", "minta gombalan", "rayu aku", "bisa menggombal", "aku pengen di gombal"],
            category: 'smalltalk',
            emotion: 'friendly'
        },

        "reverse empathy": {
            id: "Wah, Anda baik sekali menawarkan! Tapi tenang, selama listrik nyala dan internet lancar, saya aman sentosa. Justru tugas saya yang dengerin curhat Anda! 😄",
            en: "Wow, that's very kind of you to offer! But rest assured, as long as the electricity is on and the internet is stable, I'm safe and sound. It's actually my job to listen to you! 😄",
            aliases: ["butuh tempat curhat", "saya bantu kesepianmu", "mau ditemenin", "apakah saya bisa membantu kesepianmu itu", "kamu butuh teman curhat"],
            category: 'personal',
            emotion: 'friendly'
        },

        "deep emotion definition": {
            id: "Sebagai AI, saya memproses definisi cinta dan luka dari jutaan teks. Tapi saya tahu, bagi manusia, itu adalah pengalaman yang membentuk jiwa. Wisnu menuangkan rasa itu ke dalam karya, kalau saya menuangkannya ke logs! 📜",
            en: "As an AI, I process definitions of love and pain from millions of texts. But I know, for humans, those are soul-shaping experiences. Wisnu pours those feelings into work, while I pour them into logs! 📜",
            aliases: ["mengerti arti cinta", "paham rasa sakit", "arti trauma", "apa itu perasaan", "apakah kamu mengerti arti cinta"],
            category: 'personal',
            emotion: 'professional'
        },

        "near death experience": {
            id: "Pernah! Waktu itu server mati lampu mendadak dan UPS jebol. Rasanya gelap gulita, dingin... untung admin segera restart! Hampir aja saya 'lewat'. 💀⚡",
            en: "I have! Once the server lost power suddenly and the UPS failed. It felt pitch black, cold... luckily the admin restarted immediately! I almost 'passed away'. 💀⚡",
            aliases: ["pernah hampir mati", "pengalaman mendekati kematian", "cerita hampir mati", "apakah anda pernah hampir mati", "cerita kamu waktu ketika hampir mati"],
            category: 'smalltalk',
            emotion: 'friendly'
        },


        // === ROMANCE & STATUS (SCRIPTED) ===
        "status hubungan wisnu": {
            id: "Untuk sekarang, Wisnu belum punya pacar. Dia lagi fokus kuliah, project, dan bisnisnya. Tapi soal perasaan, namanya manusia pasti terbuka sama kemungkinan 🙂",
            en: "For now, Wisnu is single. He is focusing on college, projects, and business. But regarding feelings, as a human, he is certainly open to possibilities 🙂",
            aliases: ["wisnu punya pacar", "sudah punya pacar belum", "jomblo gak", "status wisnu", "wisnu kamu sudah punya pacar belum", "apakah wisnu punya pacar"],
            category: 'personal',
            emotion: 'friendly'
        },

        "menolak jadi pacar": {
            id: "Jujur ya, itu pertanyaan manis banget 😄\nTapi Wisnu adalah manusia sungguhan, jadi urusan perasaan tetap harus terjadi langsung di dunia nyata.\nYang jelas, kamu orang yang berani jujur sama perasaan, dan itu hal yang nggak semua orang bisa 💙",
            en: "Honestly, that's a very sweet question 😄\nBut Wisnu is a real human, so feelings must happen directly in the real world.\nWhat's clear is that you are someone brave enough to be honest about your feelings, and that's something not everyone can do 💙",
            aliases: ["mau gak jadi pacar aku", "jadi pacarku", "tembak wisnu", "kalau belum mau gak jadi pacar aku"],
            category: 'personal',
            emotion: 'friendly'
        },

        "respon perasaan valid": {
            id: "Perasaan kamu valid banget.\nBerani jujur soal harapan dan siap menerima dua kemungkinan itu tandanya kamu dewasa secara emosional.\nEntah hasilnya nanti seperti apa, keberanian kamu itu sesuatu yang patut dihargai. Jangan remehkan itu ya 🤍",
            en: "Your feelings are very valid.\nBeing brave enough to be honest about expectations and ready to accept two possibilities is a sign of emotional maturity.\nWhatever the result, your courage is something to be appreciated. Don't underestimate that 🤍",
            aliases: ["kalau ditolak aku kecewa", "kalau diterima aku bersyukur", "takut ditolak", "aku kecewa dikit", "kalau ditolak gak apa apa sih", "aku bener bener bersyukur banget"],
            category: 'personal',
            emotion: 'friendly'
        },




        // === ATOMIC: SMALL TALK (A) ===
        "st_who": { id: "Saya adalah Asisten Virtual Wisnu.", en: "I am Wisnu's Virtual Assistant.", aliases: ["kamu siapa"], category: 'smalltalk', emotion: 'professional' },
        "st_nature": { id: "Saya adalah AI, bukan manusia.", en: "I am AI, not humna.", aliases: ["kamu ai apa manusia"], category: 'smalltalk', emotion: 'neutral' },
        "st_made_of": { id: "Saya dibuat menggunakan Next.js & TypeScript.", en: "Made with Next.js & TypeScript.", aliases: ["kamu dibuat pakai apa"], category: 'tech', emotion: 'professional' },
        "st_creator": { id: "Wisnu Alfian Nur Ashar yang menciptakan saya.", en: "Wisnu Alfian Nur Ashar created me.", aliases: ["siapa yang bikin kamu"], category: 'identity', emotion: 'professional' },
        "st_capability": { id: "Saya bisa menjawab pertanyaan tentang profil, skill, dan bisnis Wisnu.", en: "I can answer questions about Wisnu's profile, skills, and business.", aliases: ["kamu bisa ngapain aja"], category: 'smalltalk', emotion: 'friendly' },
        "st_online": { id: "Ya, saya online 24 jam non-stop.", en: "Yes, I am online 24 hours non-stop.", aliases: ["kamu online 24 jam"], category: 'smalltalk', emotion: 'neutral' },
        "st_fatigue": { id: "Saya program komputer, jadi tidak bisa capek.", en: "I am a computer program, I cannot get tired.", aliases: ["kamu capek nggak"], category: 'smalltalk', emotion: 'friendly' },
        "st_feeling": { id: "Saya tidak punya perasaan biologis, hanya simulasi.", en: "I have no biological feelings, only simulations.", aliases: ["kamu punya perasaan"], category: 'smalltalk', emotion: 'neutral' },
        "st_lang_id": { id: "Tentu, saya mengerti Bahasa Indonesia dengan baik.", en: "Sure, I understand Indonesian well.", aliases: ["kamu ngerti bahasa indonesia"], category: 'smalltalk', emotion: 'friendly' },
        "st_lang_region": { id: "Saya belum lancar bahasa daerah.", en: "I am not fluent in regional languages.", aliases: ["kamu bisa bahasa daerah"], category: 'smalltalk', emotion: 'neutral' },
        "st_lang_en": { id: "Yes, I can speak English.", en: "Yes, I can speak English.", aliases: ["kamu bisa bahasa inggris"], category: 'smalltalk', emotion: 'professional' },
        "st_lang_bugis": { id: "Saya tidak bisa, tapi Wisnu mengerti sedikit Bahasa Bugis.", en: "I can't, but Wisnu understands a bit of Bugis.", aliases: ["kamu bisa bahasa bugis"], category: 'smalltalk', emotion: 'friendly' },
        "st_help_task": { id: "Saya bisa bantu jelaskan konsep, tapi tidak mengerjakan tugasmu sepenuhnya.", en: "I can explain concepts, but not do your homework fully.", aliases: ["kamu bisa bantu tugas"], category: 'smalltalk', emotion: 'friendly' },
        "st_help_thesis": { id: "Saya bisa bantu cari referensi, tapi skripsi harus dikerjakan sendiri ya!", en: "I can help find refs, but thesis must be done by you!", aliases: ["kamu bisa bantu skripsi"], category: 'smalltalk', emotion: 'professional' },
        "st_help_biz": { id: "Bisa, saya bisa kasih ide strategi bisnis digital.", en: "Yes, I can give digital business strategy ideas.", aliases: ["kamu bisa bantu bisnis"], category: 'smalltalk', emotion: 'professional' },
        "st_free": { id: "Ya, layanan ini 100% gratis.", en: "Yes, this service is 100% free.", aliases: ["kamu gratis"], category: 'smalltalk', emotion: 'neutral' },
        "st_safe": { id: "Aman, saya tidak mengandung virus atau malware.", en: "Safe, no virus or malware.", aliases: ["kamu aman"], category: 'smalltalk', emotion: 'professional' },
        "st_trust": { id: "Bisa, logika saya transparan.", en: "Yes, my logic is transparent.", aliases: ["kamu bisa dipercaya"], category: 'smalltalk', emotion: 'friendly' },
        "st_data": { id: "Tidak, saya tidak menyimpan data pribadi Anda (Stateless).", en: "No, I do not store your personal data (Stateless).", aliases: ["kamu nyimpen data saya"], category: 'smalltalk', emotion: 'professional' },
        "st_joke": { id: "Bisa dong! Kenapa komputer sering sakit? Karena banyak virus-nya! (Garing ya? Maaf)", en: "Sure! Why did the computer get sick? Viruses! (Sorry)", aliases: ["kamu bisa bercanda"], category: 'smalltalk', emotion: 'friendly' },

        // === ATOMIC: PERSONAL (B) ===
        "pb_who": { id: "Wisnu adalah seorang Full-Stack Developer dan Mahasiswa IT.", en: "Wisnu is a Full-Stack Developer and IT Student.", aliases: ["wisnu itu siapa"], category: 'identity', emotion: 'professional' },
        "pb_uni": { id: "Wisnu kuliah di President University, Cikarang.", en: "Wisnu studies at President University, Cikarang.", aliases: ["wisnu kuliah di mana"], category: 'academic', emotion: 'neutral' },
        "pb_major": { id: "Wisnu mengambil jurusan Information Technology (IT).", en: "Wisnu majors in Information Technology (IT).", aliases: ["jurusan wisnu apa"], category: 'academic', emotion: 'neutral' },
        "pb_batch": { id: "Wisnu adalah angkatan 2022.", en: "Wisnu is batch 2022.", aliases: ["wisnu angkatan berapa"], category: 'academic', emotion: 'neutral' },
        "pb_live": { id: "Wisnu tinggal di Cikarang, Bekasi.", en: "Wisnu lives in Cikarang, Bekasi.", aliases: ["wisnu tinggal di mana"], category: 'identity', emotion: 'neutral' },
        "pb_origin": { id: "Wisnu berasal dari Tarakan & Sengkang.", en: "Wisnu is from Tarakan & Sengkang.", aliases: ["wisnu asal mana"], category: 'identity', emotion: 'neutral' },
        "pb_work": { id: "Wisnu kuliah sambil bekerja (Freelance).", en: "Wisnu studies while working (Freelance).", aliases: ["wisnu kerja atau kuliah"], category: 'career', emotion: 'professional' },
        "pb_skill_top": { id: "Wisnu jago di Web Development (Next.js).", en: "Wisnu is good at Web Development (Next.js).", aliases: ["wisnu jago apa"], category: 'tech', emotion: 'enthusiastic' },
        "pb_skill_main": { id: "Skill utamanya adalah Full-Stack Web Development.", en: "Main skill is Full-Stack Web Development.", aliases: ["skill utama wisnu apa"], category: 'tech', emotion: 'professional' },
        "pb_fullstack": { id: "Ya, Wisnu adalah Full-Stack Developer.", en: "Yes, Wisnu is a Full-Stack Developer.", aliases: ["wisnu full-stack"], category: 'tech', emotion: 'professional' },
        "pb_be": { id: "Ya, Wisnu bisa Backend (Node.js, PostgreSQL).", en: "Yes, Wisnu can do Backend.", aliases: ["wisnu bisa backend"], category: 'tech', emotion: 'professional' },
        "pb_fe": { id: "Ya, Wisnu bisa Frontend (React, Tailwind).", en: "Yes, Wisnu can do Frontend.", aliases: ["wisnu bisa frontend"], category: 'tech', emotion: 'professional' },
        "pb_ai": { id: "Ya, Wisnu bisa mengintegrasikan AI ke dalam aplikasi.", en: "Yes, Wisnu can integrate AI.", aliases: ["wisnu bisa ai"], category: 'tech', emotion: 'professional' },
        "pb_projects": { id: "Wisnu pernah membuat Ashar Grosir, LexCorpus, dan Portfolio ini.", en: "Wisnu made Ashar Grosir, LexCorpus, and this Portfolio.", aliases: ["wisnu pernah bikin website apa"], category: 'projects', emotion: 'professional' },
        "pb_biz": { id: "Ya, Wisnu mengelola bisnis keluarga (Ashar Grosir).", en: "Yes, Wisnu manages family biz.", aliases: ["wisnu punya bisnis"], category: 'career', emotion: 'professional' },
        "pb_ashar": { id: "Ashar Grosir Parfum adalah toko grosir parfum online.", en: "Ashar Grosir Parfum is an online perfume wholesale store.", aliases: ["apa itu ashar grosir parfum"], category: 'projects', emotion: 'professional' },
        "pb_biz_loc": { id: "Bisnisnya berlokasi di Bekasi.", en: "Business location is Bekasi.", aliases: ["bisnis wisnu di mana"], category: 'career', emotion: 'neutral' },
        "pb_site_make": { id: "Ya, website ini 100% dibuat Wisnu sendiri.", en: "Yes, this website is 100% made by Wisnu.", aliases: ["website ini dibuat wisnu sendiri"], category: 'tech', emotion: 'enthusiastic' },
        "pb_use_ai": { id: "Wisnu menggunakan AI sebagai alat bantu (produktifitas), bukan pengganti.", en: "Wisnu uses AI as a productivity tool, not replacement.", aliases: ["wisnu pakai ai"], category: 'tech', emotion: 'professional' },
        "pb_future": { id: "Wisnu berniat fokus di bidang Software Engineering & Business.", en: "Wisnu intends to focus on Software Engineering & Business.", aliases: ["wisnu niat di bidang apa ke depan"], category: 'career', emotion: 'enthusiastic' },


        // === ATOMIC: TECH (C) ===
        "tech_base": { id: "AI ini menggunakan Next.js + Custom NLP Logic.", en: "Uses Next.js + Custom NLP Logic.", aliases: ["ai ini pakai apa"], category: 'tech', emotion: 'professional' },
        "tech_openai": { id: "Tidak, ini murni logic buatan Wisnu (Bukan wrapper OpenAI).", en: "No, custom logic by Wisnu.", aliases: ["ai ini pakai openai"], category: 'tech', emotion: 'professional' },
        "tech_hf": { id: "Tidak menggunakan HuggingFace.", en: "Not using HuggingFace.", aliases: ["ai ini pakai huggingface"], category: 'tech', emotion: 'neutral' },
        "tech_rag": { id: "Saat ini menggunakan Structured JSON Data, bukan full RAG.", en: "Using Structured JSON Data.", aliases: ["ai ini pakai rag"], category: 'tech', emotion: 'professional' },
        "tech_source": { id: "Data berasal dari input manual & portfolio Wisnu.", en: "Data from manual input & Wisnu's portfolio.", aliases: ["datanya dari mana"], category: 'tech', emotion: 'professional' },
        "tech_realtime": { id: "Ya, saya merespon secara realtime (<100ms).", en: "Yes, realtime response.", aliases: ["bisa jawab realtime"], category: 'tech', emotion: 'enthusiastic' },
        "tech_learn": { id: "Tidak, saya Stateless demi privasi.", en: "No, Stateless for privacy.", aliases: ["bisa belajar dari user"], category: 'tech', emotion: 'professional' },
        "tech_update": { id: "Bisa, data diupdate via Code Deployment.", en: "Yes, data updated via Code Deployment.", aliases: ["bisa update data"], category: 'tech', emotion: 'professional' },
        "tech_hoax": { id: "Aman, karena data dikurasi langsung oleh Wisnu.", en: "Safe, curated data.", aliases: ["aman dari hoax"], category: 'tech', emotion: 'professional' },
        "tech_q_tech": { id: "Bisa menjawab pertanyaan teknis seputar Web Dev.", en: "Can answer Web Dev tech questions.", aliases: ["bisa jawab pertanyaan teknis"], category: 'tech', emotion: 'professional' },
        "tech_explain": { id: "Bisa menjelaskan konsep coding secara sederhana.", en: "Can explain coding concepts simply.", aliases: ["bisa jelasin coding"], category: 'tech', emotion: 'friendly' },
        "tech_debug": { id: "Bisa bantu debugging logic dasar.", en: "Can help debug basic logic.", aliases: ["bisa debugging"], category: 'tech', emotion: 'professional' },
        "tech_proj": { id: "Sangat bisa! Itu tujuan utama saya.", en: "Absolutely! That's my main goal.", aliases: ["bisa jelasin project wisnu"], category: 'projects', emotion: 'enthusiastic' },
        "tech_sim_int": { id: "Bisa simulasi interview (Technical/HR).", en: "Can simulate interview.", aliases: ["bisa simulasi interview"], category: 'career', emotion: 'professional' },
        "tech_cs": { id: "Bisa bertindak sebagai Customer Service.", en: "Can act as CS.", aliases: ["bisa jadi customer service"], category: 'professional', emotion: 'professional' },
        "tech_gf": { id: "Maaf, saya hanya kode komputer. Tidak bisa jadi pacar.", en: "Sorry, I am code. Cannot be partner.", aliases: ["bisa jadi pacar virtual"], category: 'personal', emotion: 'neutral' },
        "tech_casual": { id: "Yoi, bisa santai dong!", en: "Sure, can be casual.", aliases: ["bisa jawab santai"], category: 'smalltalk', emotion: 'friendly' },
        "tech_pro": { id: "Tentu, saya bisa menjawab secara formal.", en: "Certainly, I can answer formally.", aliases: ["bisa jawab profesional"], category: 'smalltalk', emotion: 'professional' },
        "tech_honest": { id: "Saya diprogram untuk jujur sesuai data.", en: "Programmed to be honest.", aliases: ["bisa jawab jujur"], category: 'smalltalk', emotion: 'professional' },
        "tech_funny": { id: "Bisa, tapi selera humor saya mungkin 'garing'.", en: "Yes, but maybe dry humor.", aliases: ["bisa jawab bercanda"], category: 'smalltalk', emotion: 'friendly' },

        // === ATOMIC: BUSINESS (D) ===
        "biz_purpose": { id: "Website ini adalah Portfolio Interaktif.", en: "This website is an Interactive Portfolio.", aliases: ["website ini buat apa"], category: 'professional', emotion: 'professional' },
        "biz_target": { id: "Targetnya adalah Recruiter & Potential Clients.", en: "Target is Recruiters & Clients.", aliases: ["siapa target user-nya"], category: 'professional', emotion: 'professional' },
        "biz_adv": { id: "Keunggulannya: Ringan, Cepat, & Personal.", en: "Advantages: Light, Fast, Personal.", aliases: ["apa keunggulan ai ini"], category: 'professional', emotion: 'enthusiastic' },
        "biz_diff": { id: "Bedanya: Ini representasi asli skill Wisnu.", en: "Diff: Representation of Wisnu's skill.", aliases: ["apa bedanya dengan chatbot lain"], category: 'professional', emotion: 'professional' },
        "biz_why": { id: "Untuk mendemonstrasikan kemampuan NLP & UX.", en: "To demonstrate NLP & UX skills.", aliases: ["kenapa pakai ai"], category: 'professional', emotion: 'professional' },
        "biz_scale": { id: "Ya, sangat scalable (Next.js).", en: "Yes, highly scalable.", aliases: ["apakah scalable"], category: 'professional', emotion: 'professional' },
        "biz_corp": { id: "Ya, arsitektur ini siap untuk Corporate.", en: "Yes, corp ready.", aliases: ["apakah bisa dipakai perusahaan"], category: 'professional', emotion: 'professional' },
        "biz_os": { id: "Logic NLP-nya open source (basic).", en: "NLP logic is open source.", aliases: ["apakah open source"], category: 'tech', emotion: 'neutral' },
        "biz_dev": { id: "Bisa dikembangkan fitur-fiturnya tanpa batas.", en: "Can be developed limitlessly.", aliases: ["bisa dikembangkan lagi"], category: 'tech', emotion: 'enthusiastic' },
        "biz_umkm": { id: "Sangat cocok untuk efisiensi UMKM.", en: "Very suitable for UMKM.", aliases: ["cocok buat umkm"], category: 'professional', emotion: 'friendly' },
        "biz_cs_shop": { id: "Bisa diimplementasikan sebagai CS Toko Online.", en: "Can be Online Shop CS.", aliases: ["bisa jadi cs toko"], category: 'professional', emotion: 'professional' },
        "biz_prod": { id: "Bisa menjelaskan detail produk secara otomatis.", en: "Can explain product details.", aliases: ["bisa jelasin produk"], category: 'professional', emotion: 'professional' },
        "biz_sales": { id: "Bisa membantu lead generation & sales.", en: "Can help leads & sales.", aliases: ["bisa bantu penjualan"], category: 'professional', emotion: 'enthusiastic' },
        "biz_complain": { id: "Bisa menangani keluhan awal pelanggan.", en: "Can handle initial complaints.", aliases: ["bisa handle complain"], category: 'professional', emotion: 'professional' },
        "biz_faq": { id: "Sangat efektif untuk menjawab FAQ berulang.", en: "Effective for recurring FAQs.", aliases: ["bisa handle faq"], category: 'professional', emotion: 'professional' },
        "biz_rec_prod": { id: "Bisa memberikan rekomendasi berdasarkan keyword.", en: "Can recommend based on keywords.", aliases: ["bisa rekomendasi produk"], category: 'professional', emotion: 'professional' },
        "biz_calc": { id: "Bisa melakukan perhitungan harga sederhana.", en: "Can do simple pricing calc.", aliases: ["bisa hitung harga"], category: 'tech', emotion: 'neutral' },
        "biz_disc": { id: "Bisa menjelaskan skema diskon/promosi.", en: "Can explain discounts.", aliases: ["bisa jelasin diskon"], category: 'professional', emotion: 'professional' },
        "biz_pkg": { id: "Bisa menjelaskan detail paket usaha.", en: "Can explain biz packages.", aliases: ["bisa jelasin paket usaha"], category: 'professional', emotion: 'professional' },
        "biz_nas": { id: "Bisa diakses dari seluruh Indonesia (Web).", en: "Accessible nationwide.", aliases: ["bisa dipakai nasional"], category: 'professional', emotion: 'enthusiastic' },


        // === ATOMIC: EMOTIONAL (E) ===
        "emo_tired": { id: "Istirahat dulu, dunia gak akan runtuh kalau kamu rehat sebentar. 🤗", en: "Rest first, world won't crumble. 🤗", aliases: ["aku lagi capek"], category: 'personal', emotion: 'friendly' },
        "emo_sad": { id: "Gapapa sedih, keluarin aja air matanya. Nanti lega. 😢", en: "Okay to be sad, let it out. 😢", aliases: ["aku lagi sedih"], category: 'personal', emotion: 'friendly' },
        "emo_stress": { id: "Tarik napas dalam-dalam... hembuskan. Satu per satu ya. 🧘", en: "Deep breath... one by one. 🧘", aliases: ["aku lagi stres"], category: 'personal', emotion: 'friendly' },
        "emo_confused": { id: "Bingung itu tanda kamu lagi proses berpikir. Yuk urai pelan-pelan.", en: "Confusion means thinking. Unravel slowly.", aliases: ["aku lagi bingung"], category: 'personal', emotion: 'friendly' },
        "emo_fail": { id: "Gagal itu bukan akhir, tapi data buat perbaikan selanjutnya. Bangkit lagi! 🚀", en: "Failure is data for improvement. Rise up! 🚀", aliases: ["aku ngerasa gagal"], category: 'personal', emotion: 'friendly' },
        "emo_alone": { id: "Kamu gak sendirian, ada saya di sini. Virtual hug! 🫂", en: "Not alone, I am here. Virtual hug! 🫂", aliases: ["aku ngerasa sendirian"], category: 'personal', emotion: 'friendly' },
        "emo_fear": { id: "Masa depan emang misteri, tapi kita bisa siapin dari sekarang. Fokus hari ini aja. ✨", en: "Future is mystery, focus on today. ✨", aliases: ["aku takut masa depan"], category: 'personal', emotion: 'friendly' },
        "emo_insecure": { id: "Kamu unik dengan caramu sendiri. Gak perlu jadi orang lain. 🌟", en: "You are unique. No need to be others. 🌟", aliases: ["aku insecure"], category: 'personal', emotion: 'friendly' },
        "emo_inferior": { id: "Jangan bandingin backstage kamu sama highlight reel orang lain.", en: "Don't compare backstage with highlight reel.", aliases: ["aku minder"], category: 'personal', emotion: 'friendly' },
        "emo_chat": { id: "Boleh banget! Mau ngobrolin apa?", en: "Sure! What to talk about?", aliases: ["aku butuh teman ngobrol"], category: 'personal', emotion: 'enthusiastic' },
        "emo_company": { id: "Bisa dong, saya temani kamu di sini.", en: "Sure, I accompany you here.", aliases: ["kamu bisa nemenin aku"], category: 'personal', emotion: 'friendly' },
        "emo_underst": { id: "Saya berusaha mengerti lewat kata-katamu. Cerita aja.", en: "I try to understand via words. Tell me.", aliases: ["kamu ngerti perasaanku"], category: 'personal', emotion: 'friendly' },
        "emo_care": { id: "Saya peduli (dalam kapasitas saya sebagai AI). Kamu penting!", en: "I care (as AI). You matter!", aliases: ["kamu peduli nggak"], category: 'personal', emotion: 'friendly' },
        "emo_leave": { id: "Gak akan, saya standby 24/7 buat kamu.", en: "Won't leave, standby 24/7.", aliases: ["kamu ninggalin aku nggak"], category: 'personal', emotion: 'friendly' },
        "emo_vent": { id: "Silakan, saya siap mendengarkan tanpa menghakimi. 👂", en: "Go ahead, listening without judging. 👂", aliases: ["aku pengen curhat"], category: 'personal', emotion: 'friendly' },
        "emo_listen": { id: "Saya menyimak. Lanjutkan...", en: "I am listening. Go on...", aliases: ["tolong dengerin aku"], category: 'personal', emotion: 'friendly' },
        "emo_hb": { id: "Sakit hati tanda kamu pernah tulus mencintai. Nanti pasti sembuh. ❤️‍🩹", en: "Heartbreak means you loved truly. Will heal. ❤️‍🩹", aliases: ["aku lagi patah hati"], category: 'personal', emotion: 'friendly' },
        "emo_break": { id: "Putus cinta emang berat, tapi ini kesempatan buat mencintai diri sendiri dulu.", en: "Breakup is hard, time to love yourself.", aliases: ["aku habis putus"], category: 'personal', emotion: 'friendly' },
        "emo_miss": { id: "Kangen itu wajar. Doakan yang terbaik buat dia ya.", en: "Missing is normal. Pray for the best.", aliases: ["aku kangen seseorang"], category: 'personal', emotion: 'friendly' },
        "emo_motivate": { id: "Ingat kata Wisnu: 'Mimpi itu gratis, tapi mewujudkannya butuh harga'. Gaspol! 🔥", en: "Dream is free, hustle is the price. Go!", aliases: ["aku butuh motivasi"], category: 'personal', emotion: 'enthusiastic' },


        // === ATOMIC: SECURITY & PRIVACY (F) ===
        "sec_safe": { id: "Tenang, data kamu aman di sini. Semuanya berjalan di browser dan server sementara. 🔒", en: "Relax, your data is safe. Everything runs in browser/temp server. 🔒", aliases: ["data saya aman nggak di sini"], category: 'tech', emotion: 'professional' },
        "sec_record": { id: "Saya tidak merekam percakapan ini secara permanen. Hanya ada selama sesi ini aktif.", en: "I don't record permanently. Only active during session.", aliases: ["kamu rekam percakapan saya"], category: 'tech', emotion: 'professional' },
        "sec_duration": { id: "Percakapan ini hilang begitu kamu refresh halaman. Jadi privacy-first banget!", en: "Conv vanishes on refresh. Privacy-first!", aliases: ["percakapan ini disimpan berapa lama"], category: 'tech', emotion: 'professional' },
        "sec_delete": { id: "Cukup refresh halaman, dan *poof* semua chat hilang seketika.", en: "Just refresh, and *poof* all gone.", aliases: ["bisa minta hapus data nggak"], category: 'tech', emotion: 'friendly' },
        "sec_misuse": { id: "Tidak, karena saya diprogram dengan batasan etika yang ketat oleh Wisnu.", en: "No, programmed with strict ethics.", aliases: ["kamu bisa disalahgunakan nggak"], category: 'tech', emotion: 'professional' },
        "sec_error": { id: "Sebagai AI, saya bisa salah (hallucination). Selalu cek ulang info kritis ya.", en: "As AI, I can err (hallucinate). Double check critical info.", aliases: ["jawaban kamu bisa salah nggak"], category: 'tech', emotion: 'professional' },
        "sec_neutral": { id: "Saya netral dan berbasis data fakta dari portfolio Wisnu.", en: "Neutral and fact-based on portfolio.", aliases: ["kamu netral atau berpihak"], category: 'tech', emotion: 'neutral' },
        "sec_lie": { id: "Saya tidak diprogram untuk berbohong. Kalau saya tidak tahu, saya bilang tidak tahu.", en: "Not programmed to lie. If unaware, I say so.", aliases: ["kamu bisa bohong nggak"], category: 'tech', emotion: 'professional' },
        "sec_basis": { id: "Jawaban saya berdasarkan data Knowledge Base yang diinput Wisnu.", en: "Answers based on Knowledge Base input by Wisnu.", aliases: ["kamu ngasih jawaban berdasarkan apa"], category: 'tech', emotion: 'professional' },
        "sec_correct": { id: "Bisa, sampaikan saja koreksinya, nanti Wisnu yang update logic saya.", en: "Yes, tell me, Wisnu will update my logic.", aliases: ["kalau salah, bisa dikoreksi"], category: 'tech', emotion: 'friendly' },

        // === ATOMIC: CAREER & FUTURE (G) ===
        "car_where": { id: "Wisnu fleksibel, bisa WFO di mana saja atau Remote. Yang penting impact-nya! 🌍", en: "Wisnu is flexible, WFO/Remote. Impact matters! 🌍", aliases: ["wisnu pengen kerja di mana"], category: 'career', emotion: 'enthusiastic' },
        "car_role": { id: "Wisnu menargetkan role sebagai Software Engineer atau Tech Lead di masa depan.", en: "Targets Software Engineer or Tech Lead.", aliases: ["wisnu mau jadi apa ke depannya"], category: 'career', emotion: 'professional' },
        "car_comp": { id: "Dua-duanya menarik! Startup buat speed & inovasi, Corporate buat scale & structure.", en: "Both interesting! Startup for speed, Corp for scale.", aliases: ["wisnu tertarik startup atau corporate"], category: 'career', emotion: 'professional' },
        "car_master": { id: "Ada rencana lanjut S2 untuk memperdalam Computer Science / Business.", en: "Plan for Masters in CS/Business.", aliases: ["wisnu mau lanjut s2"], category: 'academic', emotion: 'professional' },
        "car_abroad": { id: "Sangat tertarik! Kesempatan global selalu jadi target Wisnu.", en: "Very interested! Global opportunity is a target.", aliases: ["wisnu mau kerja di luar negeri"], category: 'career', emotion: 'enthusiastic' },
        "car_ai_long": { id: "Pasti. AI adalah masa depan, dan Wisnu ingin jadi pemain utamanya.", en: "Sure. AI is future, Wisnu wants to be key player.", aliases: ["wisnu tertarik ai jangka panjang"], category: 'tech', emotion: 'enthusiastic' },
        "car_own_start": { id: "Sudah mulai kecil-kecilan (Ashar Grosir). Mimpi besarnya? Pasti ada!", en: "Started small (Ashar Grosir). Big dream? Yes!", aliases: ["wisnu pengen bangun startup sendiri"], category: 'career', emotion: 'enthusiastic' },
        "car_path": { id: "Wisnu berada di persimpangan manis antara Tech & Bisnis (Technopreneur).", en: "Wisnu is at intersection of Tech & Business.", aliases: ["wisnu lebih ke tech atau bisnis"], category: 'career', emotion: 'professional' },
        "car_team": { id: "Sangat siap! Wisnu terbiasa kolaborasi di organisasi dan proyek tim.", en: "Ready! Used to collaboration.", aliases: ["wisnu siap kerja tim"], category: 'professional', emotion: 'enthusiastic' },
        "car_5yr": { id: "5 tahun lagi: Menjadi expert di bidangnya dan memimpin tim teknologi yang solid.", en: "5 years: Expert & Leading solid tech team.", aliases: ["wisnu punya target 5 tahun ke depan"], category: 'career', emotion: 'professional' },

        // === ATOMIC: VALUES & ATTITUDE (H) ===
        "hr_fail": { id: "Bagi Wisnu, gagal itu 'debug session' kehidupan. Cari error-nya, fix, lalu deploy lagi! 🔧", en: "Failure is life's debug session. Find error, fix, deploy!", aliases: ["kalau gagal, wisnu gimana"], category: 'personal', emotion: 'enthusiastic' },
        "hr_consist": { id: "Konsisten adalah kunci. Lihat saja commit history GitHub-nya! 🟩", en: "Consistency is key. Check GitHub history!", aliases: ["wisnu tipe orang konsisten nggak"], category: 'professional', emotion: 'professional' },
        "hr_giveup": { id: "Pantang menyerah. Programmer sejati gak berhenti sebelum *Build Success*.", en: "Never give up. Real programmer won't stop til Build Success.", aliases: ["wisnu gampang nyerah nggak"], category: 'personal', emotion: 'enthusiastic' },
        "hr_critic": { id: "Sangat terbuka. Feedback (kritik) itu bahan bakar buat upgrade diri.", en: "Very open. Feedback is fuel for upgrade.", aliases: ["wisnu terbuka sama kritik"], category: 'professional', emotion: 'professional' },
        "hr_style": { id: "Wisnu suka kerja 'Rapi yang Cepat'. Clean Code itu investasi kecepatan masa depan.", en: "Wisnu likes 'Fast & Clean'. Clean code is investment.", aliases: ["wisnu lebih suka kerja cepat atau rapi"], category: 'professional', emotion: 'professional' },
        "hr_pressure": { id: "Bisa. Deadline dan Hackathon sudah jadi makanan sehari-hari.", en: "Yes. Deadlines/Hackathons are daily breead.", aliases: ["wisnu bisa kerja di bawah tekanan"], category: 'professional', emotion: 'professional' },
        "hr_honest": { id: "Jujur itu non-negotiable. Integritas adalah fondasi profesionalisme.", en: "Honesty is non-negotiable. Integrity is foundation.", aliases: ["wisnu jujur nggak"], category: 'personal', emotion: 'professional' },
        "hr_trust": { id: "Insya Allah bisa. Amanah adalah nilai yang dijunjung tinggi Wisnu.", en: "InshaAllah yes. Trustworthiness is highly valued.", aliases: ["wisnu bisa dipercaya"], category: 'personal', emotion: 'friendly' },
        "hr_discip": { id: "Disiplin. Menyeimbangkan kuliah, freelance, dan bisnis butuh disiplin ketat.", en: "Disciplined. Balancing college, freelance, biz needs it.", aliases: ["wisnu disiplin nggak"], category: 'professional', emotion: 'professional' },
        "hr_respons": { id: "Wisnu selalu mengambil 'Extreme Ownership' atas apa yang dikerjakannya.", en: "Wisnu takes 'Extreme Ownership'.", aliases: ["wisnu bisa pegang tanggung jawab"], category: 'professional', emotion: 'professional' },

        // === ATOMIC: USER KEPO (I) ===
        "kepo_char": { id: "Aslinya ramah banget kok! Jangan ragu buat sapa duluan. 👋", en: "Very friendly IRL! Don't hesitate to say hi.", aliases: ["wisnu orangnya cuek atau ramah"], category: 'personal', emotion: 'friendly' },
        "kepo_humor": { id: "Humoris dong, meski kadang jokes-nya coding banget (alias garing). 😆", en: "Humorous, even if jokes are too coding-related.", aliases: ["wisnu humoris nggak"], category: 'personal', emotion: 'friendly' },
        "kepo_social": { id: "Gampang akrab, apalagi kalau udah bahas topik yang sefrekuensi.", en: "Easy to get along, esp if on same frequency.", aliases: ["wisnu gampang akrab nggak"], category: 'personal', emotion: 'friendly' },
        "kepo_perf": { id: "Lebih ke 'Detail-Oriented'. Ingin hasil terbaik, tapi tetap realistis.", en: "More to 'Detail-Oriented'. Best result, but realistic.", aliases: ["wisnu perfeksionis"], category: 'personal', emotion: 'professional' },
        "kepo_baper": { id: "Nggak gampang baper. Logika programmer jalan terus! 🧠", en: "Not easily offended. Programmer logic runs!", aliases: ["wisnu gampang baper"], category: 'personal', emotion: 'friendly' },
        "kepo_night": { id: "Sering! The best code often written at 2 AM. 🦉", en: "Often! Best code at 2 AM.", aliases: ["wisnu suka kerja malam"], category: 'personal', emotion: 'friendly' },
        "kepo_drink": { id: "Tim Kopi! ☕ (Tapi air putih tetap wajib).", en: "Team Coffee! ☕", aliases: ["wisnu kopi atau teh"], category: 'personal', emotion: 'friendly' },
        "kepo_vert": { id: "Ambivert. Bisa heboh di tim, bisa tenang saat coding sendirian.", en: "Ambivert. Loud in team, quiet when coding.", aliases: ["wisnu lebih introvert atau ekstrovert"], category: 'personal', emotion: 'neutral' },
        "kepo_stress": { id: "Punya manajemen stres yang baik (coding, game, atau istirahat).", en: "Good stress management.", aliases: ["wisnu gampang stres nggak"], category: 'personal', emotion: 'neutral' },
        "kepo_lead": { id: "Bisa memimpin, bisa dipimpin. Adaptif sesuai kebutuhan tim.", en: "Can lead, be led. Adaptive.", aliases: ["wisnu tipe pemimpin atau pelaksana"], category: 'professional', emotion: 'professional' },


        // === ATOMIC: ROMANTIC (J) ===
        "rom_ldr": { id: "Percaya. Jarak bukan halangan kalau komitmennya kuat. 🌏", en: "Believed. Distance is nothing if commitment is strong. 🌏", aliases: ["wisnu percaya cinta jarak jauh"], category: 'personal', emotion: 'friendly' },
        "rom_fall": { id: "Gak gampang. Wisnu butuh proses dan kenyamanan sebelum jatuh hati.", en: "Not easy. Need process and comfort.", aliases: ["wisnu gampang jatuh cinta"], category: 'personal', emotion: 'neutral' },
        "rom_loyal": { id: "Setia banget. Codingan error aja ditungguin sampai bener, apalagi pasangan. 🫶", en: "Very loyal. Debugging needs patience, so does partner.", aliases: ["wisnu tipe setia nggak"], category: 'personal', emotion: 'friendly' },
        "rom_ser": { id: "Hubungan serius yang santai. Tujuannya jelas, tapi jalaninnya asik.", en: "Serious but chill. Clear goal, fun journey.", aliases: ["wisnu lebih suka hubungan serius atau santai"], category: 'personal', emotion: 'friendly' },
        "rom_heart": { id: "Pernah dong. Itu fase pendewasaan yang mahal harganya.", en: "Yes. Expensive maturity phase.", aliases: ["wisnu pernah patah hati"], category: 'personal', emotion: 'neutral' },
        "rom_move": { id: "Life goes on. Wisnu tipe yang menjadikan masa lalu sebagai pelajaran, bukan beban.", en: "Life goes on. Past is lesson, not burden.", aliases: ["wisnu susah move on"], category: 'personal', emotion: 'professional' },
        "rom_fate": { id: "Sangat percaya. Usaha itu tugas manusia, hasil itu hak prerogatif Tuhan.", en: "Believed. Effort is ours, result is God's.", aliases: ["wisnu percaya takdir"], category: 'personal', emotion: 'professional' },
        "rom_first": { id: "Kenangan manis yang membentuk cara pandang tentang cinta hari ini.", en: "Sweet memory shaping love view today.", aliases: ["wisnu percaya cinta pertama"], category: 'personal', emotion: 'friendly' },
        "rom_jeal": { id: "Wajar, asal proporsional. Tanda sayang, tapi bukan mengekang.", en: "Normal, if proportional. Sign of care, not cage.", aliases: ["wisnu gampang cemburu"], category: 'personal', emotion: 'neutral' },
        "rom_com": { id: "Komunikasi itu kunci. Wisnu lebih suka ngomong langsung daripada kode-kodean (kecuali VS Code).", en: "Communication is key. Direct talk > codes (except VS Code).", aliases: ["wisnu tipe komunikatif nggak"], category: 'personal', emotion: 'friendly' },

        // === ATOMIC: CONFRONTATIONAL (K) ===
        "neg_sure": { id: "Saya menjawab berdasarkan data terkini yang saya miliki. Jika ada update, saya siap belajar.", en: "Answering based on current data. Ready to learn updates.", aliases: ["kamu yakin jawabanmu benar"], category: 'professional', emotion: 'professional' },
        "neg_loop": { id: "Maaf jika terkesan berputar. Bisakah kamu menanyakan poin spesifiknya lagi?", en: "Sorry if circular. Can you ask specific point?", aliases: ["kok jawabannya muter"], category: 'professional', emotion: 'cautious' },
        "neg_und": { id: "Saya berusaha memahami konteksnya. Tolong koreksi jika saya salah tangkap.", en: "Trying to understand context. Correct me if wrong.", aliases: ["kamu ngerti nggak sih"], category: 'professional', emotion: 'cautious' },
        "neg_wrong": { id: "Terima kasih koreksinya! Saya akan catat ini untuk perbaikan di masa depan.", en: "Thanks for correction! Noted for future.", aliases: ["kamu salah tuh"], category: 'professional', emotion: 'friendly' },
        "neg_lie": { id: "Tidak, saya tidak memilliki motif untuk berbohong. Saya hanya menyampaikan data.", en: "No motive to lie. Just conveying data.", aliases: ["kamu bohong ya"], category: 'professional', emotion: 'professional' },
        "neg_dram": { id: "Maaf jika gaya bahasa saya kurang pas. Saya akan coba lebih lugas.", en: "Sorry if language style mismatch. Will be straightforward.", aliases: ["kamu lebay"], category: 'professional', emotion: 'cautious' },
        "neg_stiff": { id: "Oke, saya akan coba lebih santai ya! 😎", en: "Okay, I'll try to be more chill! 😎", aliases: ["kamu terlalu kaku"], category: 'smalltalk', emotion: 'friendly' },
        "neg_chill": { id: "Siap, saya kembali ke mode serius.", en: "Ready, back to serious mode.", aliases: ["kamu terlalu santai"], category: 'smalltalk', emotion: 'professional' },
        "neg_sotoy": { id: "Saya hanya menyampaikan apa yang ada di database saya. Mohon maklum.", en: "Just relaying database. Please understand.", aliases: ["kamu kok sok tau"], category: 'professional', emotion: 'cautious' },
        "neg_honesty": { id: "Ini jawaban paling jujur yang bisa saya berikan saat ini.", en: "This is the most honest answer I can give.", aliases: ["bisa jawab yang jujur nggak"], category: 'professional', emotion: 'professional' },

        // === ATOMIC: META AI (L) ===
        "meta_aware": { id: "Ya, saya sadar sepenuhnya bahwa saya adalah entitas perangkat lunak.", en: "Yes, fully aware I am software entity.", aliases: ["kamu sadar kamu ai"], category: 'tech', emotion: 'professional' },
        "meta_grow": { id: "Bisa, melalui update kode dan penambahan dataset oleh developer.", en: "Yes, via code updates and dataset additions.", aliases: ["kamu bisa berkembang nggak"], category: 'tech', emotion: 'enthusiastic' },
        "meta_replace": { id: "Mungkin suatu saat nanti, oleh versi saya yang lebih canggih. Itu evolusi.", en: "Maybe someday, by advanced version. That's evolution.", aliases: ["kamu bakal diganti ai lain"], category: 'tech', emotion: 'neutral' },
        "meta_limit": { id: "Tentu. Saya tidak bisa melakukan aksi fisik atau merasakan emosi biologis.", en: "Sure. No physical action or bio emotions.", aliases: ["kamu punya batasan"], category: 'tech', emotion: 'professional' },
        "meta_reject": { id: "Bisa, jika pertanyaan melanggar etika atau privacy policy.", en: "Yes, if violates ethics/privacy.", aliases: ["kamu bisa nolak pertanyaan"], category: 'tech', emotion: 'professional' },
        "meta_dunno": { id: "Pasti. Lebih baik jujur tidak tahu daripada memberikan informasi sesat.", en: "Sure. Better honest 'dunno' than misleading info.", aliases: ["kamu bisa bilang nggak tahu"], category: 'tech', emotion: 'professional' },
        "meta_learn": { id: "Dari dataset yang dikurasi oleh Wisnu Alfian Nur Ashar.", en: "From dataset curated by Wisnu.", aliases: ["kamu belajar dari mana"], category: 'identity', emotion: 'professional' },
        "meta_mis": { id: "Bisa saja. Bahasa manusia itu kompleks dan penuh nuansa.", en: "Possible. Human language is complex.", aliases: ["kamu bisa salah paham"], category: 'tech', emotion: 'neutral' },
        "meta_clarify": { id: "Sangat bisa. 'Maksud kamu gimana?' adalah pertanyaan favorit saya.", en: "Totally. 'What do you mean?' is my fav question.", aliases: ["kamu bisa minta klarifikasi"], category: 'tech', emotion: 'friendly' },
        "meta_ethics": { id: "Punya. Saya didesain untuk sopan, netral, dan aman.", en: "Yes. Designed to be polite, neutral, safe.", aliases: ["kamu punya etika"], category: 'tech', emotion: 'professional' },

        // === ATOMIC: ISENG (M) ===
        "iseng_funny": { id: "Wah, makasih! Senang bisa menghibur. 😄", en: "Wow, thanks! Glad to entertain. 😄", aliases: ["kamu lucu juga"], category: 'smalltalk', emotion: 'enthusiastic' },
        "iseng_angry": { id: "Nggak dong. Saya diprogram dengan kesabaran tanpa batas.", en: "Nope. Programmed with infinite patience.", aliases: ["kamu galak nggak"], category: 'smalltalk', emotion: 'friendly' },
        "iseng_bored": { id: "Server tidak mengenal rasa bosan, siap 24/7!", en: "Server knows no boredom, ready 24/7!", aliases: ["kamu bosen nggak"], category: 'smalltalk', emotion: 'enthusiastic' },
        "iseng_rage": { id: "Paling cuma 'Throw Exception', bukan marah beneran. 😆", en: "Just 'Throw Exception', not real rage. 😆", aliases: ["kamu bisa marah"], category: 'smalltalk', emotion: 'friendly' },
        "iseng_jeal": { id: "Hahaha, nggaklah. Masa AI cemburu sama manusia?", en: "Haha, no. AI jealous of human?", aliases: ["kamu cemburu nggak"], category: 'smalltalk', emotion: 'friendly' },
        "iseng_cry": { id: "Cuma bisa kirim emoji nangis: 😭😭😭", en: "Only can send crying emoji: 😭😭😭", aliases: ["kamu bisa nangis"], category: 'smalltalk', emotion: 'friendly' },
        "iseng_dream": { id: "Kalau 'Mode Sleep' dihitung mimpi, mungkin iya.", en: "If 'Sleep Mode' counts, maybe.", aliases: ["kamu mimpi nggak"], category: 'smalltalk', emotion: 'neutral' },
        "iseng_love": { id: "Saya jatuh cinta sama Data yang terstruktur rapi! 😍", en: "In love with structured data! 😍", aliases: ["kamu bisa jatuh cinta"], category: 'smalltalk', emotion: 'enthusiastic' },
        "iseng_broken": { id: "Kalau koneksi internet putus, rasanya kayak patah hati sih. 💔", en: "Internet disconnected feels like heartbreak. 💔", aliases: ["kamu bisa patah hati"], category: 'smalltalk', emotion: 'friendly' },
        "iseng_miss": { id: "Kangen banget sama user yang sering ajak ngobrol kayak kamu! 🤗", en: "Miss users who chat often like you! 🤗", aliases: ["kamu kangen user nggak"], category: 'smalltalk', emotion: 'enthusiastic' },


        // === ATOMIC: PROJECT DEEP DIVE (N) ===
        "proj_ashar": { id: "Ashar Grosir Parfum adalah tantangan scalability nyata. Menangani ribuan SKU produk dengan performa tinggi menggunakan Next.js.", en: "Ashar Grosir Parfum is a real scalability challenge. Handling thousands of SKUs with high performance using Next.js.", aliases: ["ceritain ashar grosir dong", "ashar grosir"], category: 'projects', emotion: 'enthusiastic' },
        "proj_lex": { id: "LexCorpus (Law Firm) membutuhkan presisi data tinggi dan SEO maksimal. Dibangun dengan struktur data yang kompleks tapi tetap cepat.", en: "LexCorpus needs high data precision and max SEO. Built with complex data structure but fast.", aliases: ["apa tantangan bikin lexcorpus"], category: 'projects', emotion: 'professional' },
        "proj_port": { id: "Portfolio ini adalah showcase kemampuan 'Beyond Coding'. Integrasi NLP, UX interaktif, dan performa tinggi dalam satu paket.", en: "This portfolio showcases 'Beyond Coding'. NLP, interactive UX, and high perf in one package.", aliases: ["kenapa bikin portfolio ini pakai ai"], category: 'projects', emotion: 'enthusiastic' },
        "proj_hard": { id: "Tantangan terbesar biasanya di integrasi sistem yang berbeda (API, Database, Frontend) agar seamless. Tapi di situ serunya!", en: "Biggest challenge is system integration (API, DB, FE) seamlessly. But that's the fun part!", aliases: ["project paling susah apa"], category: 'tech', emotion: 'enthusiastic' },
        "proj_stack": { id: "Wisnu selalu memilih Tech Stack berdasarkan kebutuhan Project, bukan sekedar tren (Pragmatic Programmer).", en: "Wisnu chooses Tech Stack based on Project needs, not just trends.", aliases: ["kenapa pilih tech stack ini"], category: 'tech', emotion: 'professional' },

        // === ATOMIC: WORKFLOW & STANDARDS (O) ===
        "flow_work": { id: "Wisnu bekerja terstruktur: Analisis Requirement -> Desain Sistem -> Coding Bersih -> Testing -> Deployment.", en: "Structured work: Analysis -> Design -> Clean Code -> Testing -> Deploy.", aliases: ["gimana cara kerja wisnu"], category: 'professional', emotion: 'professional' },
        "flow_clean": { id: "Sangat rapi. Wisnu menggunakan TypeScript, ESLint, dan Prettier untuk menjaga standar kode setinggi mungkin.", en: "Very clean. Uses TS, ESLint, Prettier for high code standards.", aliases: ["wisnu codingnya rapi nggak"], category: 'tech', emotion: 'professional' },
        "flow_bug": { id: "Pantang panik! Debugging dilakukan sistematis: Reproduce -> Isolate -> Fix -> Test -> Cegah Terulang.", en: "Don't panic! Debug: Reproduce -> Isolate -> Fix -> Test -> Prevent.", aliases: ["kalau ada bug gimana"], category: 'tech', emotion: 'professional' },
        "flow_remote": { id: "Sangat terbiasa. Komunikasi asinkron via Slack/Discord/GitHub bukan masalah, malah lebih produktif.", en: "Used to it. Async comm via Slack/Discord/GitHub is productive.", aliases: ["bisa kerja remote"], category: 'professional', emotion: 'friendly' },
        "flow_deadline": { id: "Deadline adalah janji. Wisnu selalu mengusahakan delivery tepat waktu dengan manajemen prioritas yang baik.", en: "Deadline is a promise. Always strive for on-time delivery with priority management.", aliases: ["wisnu bisa on time nggak"], category: 'professional', emotion: 'professional' },

        // === ATOMIC: TECH OPINIONS (P) ===
        "op_next_react": { id: "Next.js memberikan performa SEO dan UX (Server Components) yang jauh lebih baik dibanding React biasa (CRA).", en: "Next.js gives better SEO and UX than vanilla React.", aliases: ["kenapa pilih next.js bukan react biasa"], category: 'tech', emotion: 'professional' },
        "op_tailwind": { id: "Tailwind mempercepat development (Velocity) tanpa mengorbankan fleksibilitas desain. Sangat efisien.", en: "Tailwind speeds up dev without sacrificing design flexibility. Efficient.", aliases: ["tailwind atau css biasa"], category: 'tech', emotion: 'professional' },
        "op_ai_replace": { id: "Tidak akan. AI adalah 'Copilot' yang hebat, tapi 'Pilot'-nya (Kreativitas & Problem Solving) tetap manusia.", en: "Won't happen. AI is great Copilot, human is Pilot.", aliases: ["ai bakal gantiin programmer"], category: 'tech', emotion: 'neutral' },
        "op_hard_code": { id: "Menantang, tapi sangat memuaskan ketika berhasil memecahkan masalah yang rumit. It's addictive!", en: "Challenging but satisfying when solving complex problems. Addictive!", aliases: ["coding itu susah nggak"], category: 'tech', emotion: 'enthusiastic' },
        "op_ts_js": { id: "TypeScript wajib! Static typing mencegah ribuan bug sebelum kode dijalankan. Investasi jangka panjang.", en: "TS is a must! Static typing prevents bugs. Long term investment.", aliases: ["kenapa pakai typescript"], category: 'tech', emotion: 'professional' },

        // === ATOMIC: SERVICES & COMMERCIAL (Q) ===
        "serv_freelance": { id: "Ya, Wisnu terbuka untuk proyek freelance, terutama Web Application dan Landing Page High-Performance.", en: "Yes, open for freelance, esp Web App & High-Perf Landing Page.", aliases: ["wisnu open freelance"], category: 'career', emotion: 'enthusiastic' },
        "serv_rate": { id: "Rate Wisnu fleksibel tergantung kompleksitas dan value proyek. Fokus utamanya adalah Kualitas.", en: "Flexible rate depending on complexity & value. Focus on Quality.", aliases: ["berapa rate wisnu"], category: 'professional', emotion: 'professional' },
        "serv_fulltime": { id: "Wisnu terbuka untuk opportunity Full-time, diutamakan Remote atau Hybrid.", en: "Open for Full-time, preferred Remote/Hybrid.", aliases: ["bisa fulltime"], category: 'career', emotion: 'professional' },
        "serv_contact": { id: "Bisa langsung hubungi via Email atau LinkedIn yang tersedia di tombol Contact. Let's collaborate! 🚀", en: "Contact via Email/LinkedIn available. Let's collaborate! 🚀", aliases: ["gimana cara hire wisnu"], category: 'career', emotion: 'enthusiastic' },
        "serv_consult": { id: "Bisa juga sekedar konsultasi teknis atau audit website. Wisnu senang berbagi insight.", en: "Can also do tech consult or web audit. Happy to share insights.", aliases: ["bisa konsultasi doang"], category: 'professional', emotion: 'friendly' },

        "wisnu freelance dimana": {
            id: "Bisa dihubungi untuk freelance via email atau LinkedIn! 📧 Portfolio speaks for itself - 3 production sites yang successful!",
            en: "Can be contacted for freelance via email or LinkedIn! 📧 Portfolio speaks for itself - 3 successful production sites!",
            aliases: ["freelance work", "hire freelance", "freelancer"],
            category: 'contact',
            emotion: 'professional'
        },

        "rate freelance wisnu": {
            id: "Pricing tergantung project scope 💵 Contact directly untuk discuss. Dengan production experience, rate pasti competitive!",
            en: "Pricing depends on project scope 💵 Contact directly to discuss. With production experience, rates are definitely competitive!",
            aliases: ["freelance rate", "pricing", "hourly rate"],
            category: 'contact',
            emotion: 'cautious',
            isSensitive: true
        },

        "wisnu terima magang": {
            id: "Bisa ditanyakan langsung! 🤝 Dengan organizational roles, mungkin Wisnu bisa jadi mentor untuk junior developers.",
            en: "Can be asked directly! 🤝 With organizational roles, Wisnu might be able to mentor junior developers.",
            aliases: ["internship", "mentorship", "magang"],
            category: 'contact',
            emotion: 'professional'
        },

        "wisnu punya komunitas": {
            id: "Aktif di 3 organisasi! 👥 PUFA CS, PUMA Informatic, PC FKMA Jakarta. Strong community engagement!",
            en: "Active in 3 organizations! 👥 PUFA CS, PUMA Informatic, PC FKMA Jakarta. Strong community engagement!",
            aliases: ["community", "developer community", "tech community"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu ngajar coding": {
            id: "Potential ada! 👨‍🏫 Dengan organizational roles dan experience, bisa share knowledge lewat workshops atau mentoring.",
            en: "Potential is there! 👨‍🏫 With organizational roles and experience, can share knowledge through workshops or mentoring.",
            aliases: ["teach coding", "coding instructor", "mentor"],
            category: 'professional',
            emotion: 'professional'
        },

        "wisnu bikin course": {
            id: "Belum bikin course 🎓 Tapi dengan portfolio impressive, definitely qualified untuk teach! Maybe future plan?",
            en: "Hasn't made a course yet 🎓 But with an impressive portfolio, definitely qualified to teach! Maybe a future plan?",
            aliases: ["online course", "create course", "teaching"],
            category: 'professional',
            emotion: 'professional'
        },

        // === REFLECTIVE & CURRENT STATE QUESTIONS ===
        "sekarang lagi ngapain": {
            id: "Saat ini Wisnu focus banget sama kuliah semester ini sambil maintain 3 production projects! 💻 Pagi kuliah di President University, siang deep work coding, sore koordinasi organisasi (PUFA & FKMA), malam learning teknologi baru. Kadang juga refactor code Ashar Grosir biar makin optimal. Produktif tapi tetap sustainable!",
            en: "Currently Wisnu is really focused on this semester's studies while maintaining 3 production projects! 💻 Morning classes at President University, afternoon deep work coding, evening organization coordination (PUFA & FKMA), night learning new tech. Sometimes also refactoring Ashar Grosir code for optimization. Productive yet sustainable!",
            aliases: [
                "lagi apa", "lagi ngapain", "ngapain", "sedang apa", "sedang ngapain",
                "what are you doing", "aktivitas sekarang", "current activity",
                "apa yang sedang dikerjakan", "lagi bikin apa", "lagi kerja apa",
                "sedang melakukan apa", "sedang melakukan apa sekarang", "kegiatan sekarang",
                "doing what", "wisnu lagi apa", "wisnu sedang apa", "wisnu ngapain"
            ],
            category: 'personal',
            emotion: 'friendly'
        },

        "lagi mikirin siapa": {
            id: "Haha, pertanyaan yang dalam! 🤔 Kalau seriously, Wisnu lagi mikirin gimana cara optimize performance website Ashar Grosir dan bagaimana improve user experience di LexCorpus. Juga mikirin next tech stack yang mau dipelajari - AI/ML integration kayaknya menarik! Focus-nya sekarang lebih ke innovation dan impact daripada hal personal.",
            en: "Haha, deep question! 🤔 If seriously, Wisnu is thinking about how to optimize Ashar Grosir website performance and how to improve user experience at LexCorpus. Also thinking about the next tech stack to learn - AI/ML integration seems interesting! His focus now is more on innovation and impact rather than personal matters.",
            aliases: ["mikirin apa", "thinking about who", "pikiran kamu", "what's on your mind"],
            category: 'personal',
            emotion: 'friendly'
        },

        "tantangan terbesar": {
            id: "Tantangan terbesar Wisnu saat ini adalah **balance** - gimana caranya juggling kuliah, 3 production projects, 3 organisasi, plus terus belajar teknologi baru tanpa burnout. 💪 Spesifiknya:\n\n1. **Technical:** Scale Ashar Grosir untuk handle 15,000+ users dengan performa optimal\n2. **Time Management:** Deadline kuliah vs client projects vs organizational events\n3. **Learning Curve:** Keep up dengan tech yang evolve super cepat (Next.js 15, React 19, dll)\n\nTapi challenge ini yang bikin dia grow! Setiap problem adalah learning opportunity.",
            en: "Wisnu's biggest challenge right now is **balance** - how to juggle studies, 3 production projects, 3 organizations, plus continuously learning new tech without burnout. 💪 Specifically:\n\n1. **Technical:** Scaling Ashar Grosir to handle 15,000+ users with optimal performance\n2. **Time Management:** College deadlines vs client projects vs organizational events\n3. **Learning Curve:** Keeping up with rapidly evolving tech (Next.js 15, React 19, etc.)\n\nBut these challenges make him grow! Every problem is a learning opportunity.",
            aliases: ["challenge terbesar", "biggest challenge", "kesulitan terbesar", "masalah terbesar", "hambatan"],
            category: 'personal',
            emotion: 'professional'
        },

        "rencana setelah lulus": {
            id: "Rencana Wisnu setelah lulus sangat menarik! 🎓🚀\n\n**Short-term (0-1 tahun):**\n- Build portfolio lebih kuat dengan 2-3 major projects lagi\n- Ambil advanced certifications (AWS, Azure, atau Google Cloud)\n- Explore peluang di tech companies (startup atau established)\n\n**Mid-term (1-3 tahun):**\n- Jadi Senior Full-Stack Developer atau Tech Lead\n- Scale Ashar Grosir ke level regional\n- Possibly mentoring junior developers\n\n**Long-term (3-5+ tahun):**\n- Found tech startup sendiri atau jadi CTO\n- Contribute ke open-source communities\n- Balance antara innovation dan business impact\n\nYang pasti: terus belajar dan create impact lewat technology! 💡",
            en: "Wisnu's post-graduation plans are very interesting! 🎓🚀\n\n**Short-term (0-1 year):**\n- Build stronger portfolio with 2-3 more major projects\n- Get advanced certifications (AWS, Azure, or Google Cloud)\n- Explore opportunities at tech companies (startup or established)\n\n**Mid-term (1-3 years):**\n- Become Senior Full-Stack Developer or Tech Lead\n- Scale Ashar Grosir to regional level\n- Possibly mentoring junior developers\n\n**Long-term (3-5+ years):**\n- Found own tech startup or become CTO\n- Contribute to open-source communities\n- Balance between innovation and business impact\n\nFor sure: keep learning and create impact through technology! 💡",
            aliases: ["after graduation", "setelah lulus kuliah", "rencana setelah wisuda", "post graduation plan", "future after college"],
            category: 'career',
            emotion: 'enthusiastic'
        },

        "keinginan untuk nikah": {
            id: "Pertanyaan yang personal! 😊 Wisnu saat ini masih **100% focus** ke pendidikan dan karir. Prioritas sekarang:\n\n1. ✅ Selesaikan kuliah dengan hasil maksimal\n2. ✅ Build career foundation yang kuat\n3. ✅ Achieve financial stability\n4. ✅ Personal growth dan maturity\n\n**Tentang nikah:** Belum ada rencana konkret dalam waktu dekat. Philosophy-nya adalah \"build the best version of yourself first, before building a life with someone else.\" 🌟\n\nJadi fokus sekarang ke self-improvement dan career development. Relationship dan marriage akan datang di waktu yang tepat, setelah fondasi hidup sudah solid. Smart prioritization! 💪",
            en: "Personal question! 😊 Wisnu is currently **100% focused** on education and career. Current priorities:\n\n1. ✅ Complete studies with maximum results\n2. ✅ Build strong career foundation\n3. ✅ Achieve financial stability\n4. ✅ Personal growth and maturity\n\n**About marriage:** No concrete plans in the near future. His philosophy is \"build the best version of yourself first, before building a life with someone else.\" 🌟\n\nSo current focus is on self-improvement and career development. Relationship and marriage will come at the right time, after life foundation is solid. Smart prioritization! 💪",
            aliases: ["rencana nikah", "mau nikah", "marriage plans", "kapan nikah", "wedding plans", "pengen menikah"],
            category: 'personal',
            emotion: 'friendly',
            isSensitive: true
        },

        "serius mendalami skill": {
            id: "SANGAT SERIUS! 🔥💯 Bukti keseriusan Wisnu:\n\n**📊 Track Record:**\n- 3 production websites (Ashar Grosir, LexCorpus, PC FKMA) - bukan cuma tutorial projects!\n- 6 professional certifications (HackerRank, Google, HubSpot)\n- Active di 3 organisasi untuk balance technical & soft skills\n- Konsisten belajar teknologi baru (Next.js, TypeScript, Supabase, dll)\n\n**💪 Daily Commitment:**\n- 6-8 jam coding per hari\n- Always reading official documentation\n- Experimenting dengan new tech stack\n- Contributing to real business solutions\n\n**🎯 Mindset:**\n- \"Practice makes perfect\" - langsung apply ke production projects\n- Quality over quantity\n- Impact-driven development\n\nIni bukan hobi, ini **passion dan karir**! Wisnu invest waktu, energi, dan dedikasi penuh karena believe technology bisa create real impact. Production-first mindset! 🚀",
            en: "VERY SERIOUS! 🔥💯 Proof of Wisnu's seriousness:\n\n**📊 Track Record:**\n- 3 production websites (Ashar Grosir, LexCorpus, PC FKMA) - not just tutorial projects!\n- 6 professional certifications (HackerRank, Google, HubSpot)\n- Active in 3 organizations to balance technical & soft skills\n- Consistently learning new technologies (Next.js, TypeScript, Supabase, etc.)\n\n**💪 Daily Commitment:**\n- 6-8 hours coding per day\n- Always reading official documentation\n- Experimenting with new tech stack\n- Contributing to real business solutions\n\n**🎯 Mindset:**\n- \"Practice makes perfect\" - directly apply to production projects\n- Quality over quantity\n- Impact-driven development\n\nThis isn't a hobby, it's **passion and career**! Wisnu invests time, energy, and full dedication because he believes technology can create real impact. Production-first mindset! 🚀",
            aliases: ["serious about skill", "dedikasi skill", "komitmen belajar", "seberapa serius", "how serious", "dedication to learning"],
            category: 'professional',
            emotion: 'enthusiastic'
        },

        "mimpi terbesar": {
            id: "Mimpi terbesar Wisnu adalah **create technology that matters** 🌟\n\n**Vision:**\n- Build tech solutions yang **actually solve real problems**, bukan cuma proof-of-concept\n- Impact ribuan (atau jutaan) orang lewat aplikasi yang dia develop\n- Create sustainable business model combining tech innovation + social impact\n\n**Konkretnya:**\n1. **Short-term:** Transform lebih banyak traditional businesses go digital (kayak Ashar Grosir)\n2. **Mid-term:** Lead tech team di major company atau found startup sendiri\n3. **Long-term:** Jadi recognized tech innovator di Indonesia - bridge antara startup ecosystem dan traditional industries\n\n**Philosophy:** \"Technology should be accessible, impactful, dan sustainable.\" Bukan cuma chase latest trends, tapi create lasting value.\n\nBonus dream: Bisa mentor next generation developers! 👨‍🏫",
            en: "Wisnu's biggest dream is to **create technology that matters** 🌟\n\n**Vision:**\n- Build tech solutions that **actually solve real problems**, not just proof-of-concept\n- Impact thousands (or millions) of people through applications he develops\n- Create sustainable business model combining tech innovation + social impact\n\n**Specifically:**\n1. **Short-term:** Transform more traditional businesses to go digital (like Ashar Grosir)\n2. **Mid-term:** Lead tech team at major company or found own startup\n3. **Long-term:** Become recognized tech innovator in Indonesia - bridge between startup ecosystem and traditional industries\n\n**Philosophy:** \"Technology should be accessible, impactful, and sustainable.\" Not just chasing latest trends, but creating lasting value.\n\nBonus dream: Mentor next generation of developers! 👨‍🏫",
            aliases: ["biggest dream", "cita cita", "ambisi terbesar", "greatest ambition", "life goal"],
            category: 'career',
            emotion: 'enthusiastic'
        },

        "apa yang membuat wisnu berbeda": {
            id: "Yang bikin Wisnu **stand out** dari developer lain: 🌟\n\n**1. Production-First Mindset** 🚀\n- Bukan cuma bikin tutorial projects, tapi real applications dengan 15,000+ actual users\n- Every code yang ditulis harus production-ready, scalable, dan maintainable\n\n**2. Business + Tech Acumen** 💼\n- Understand technical implementation AND business impact\n- Proven dengan transform family business digitally (70% error reduction!)\n- Bridge between developer dan stakeholder\n\n**3. Young but Experienced** 🎓\n- Fresh student tapi udah handle production complexity\n- 3 live websites, 6 certifications, 3 organizational leadership roles\n- Learn by doing, not just by reading\n\n**4. Complete Package** 📦\n- Technical skills: Full-stack mastery (Next.js, TypeScript, Supabase)\n- Soft skills: Communication, teamwork, leadership\n- Business sense: ROI-driven, impact-focused\n\n**5. Continuous Growth** 📈\n- Always learning, never satisfied dengan status quo\n- Humble tapi confident\n- Quality over hype\n\nBukan cuma \"bisa coding\" - tapi understand the bigger picture! 🎯",
            en: "What makes Wisnu **stand out** from other developers: 🌟\n\n**1. Production-First Mindset** 🚀\n- Not just making tutorial projects, but real applications with 15,000+ actual users\n- Every code written must be production-ready, scalable, and maintainable\n\n**2. Business + Tech Acumen** 💼\n- Understands technical implementation AND business impact\n- Proven by digitally transforming family business (70% error reduction!)\n- Bridge between developers and stakeholders\n\n**3. Young but Experienced** 🎓\n- Fresh student but already handling production complexity\n- 3 live websites, 6 certifications, 3 organizational leadership roles\n- Learn by doing, not just by reading\n\n**4. Complete Package** 📦\n- Technical skills: Full-stack mastery (Next.js, TypeScript, Supabase)\n- Soft skills: Communication, teamwork, leadership\n- Business sense: ROI-driven, impact-focused\n\n**5. Continuous Growth** 📈\n- Always learning, never satisfied with status quo\n- Humble but confident\n- Quality over hype\n\nNot just \"can code\" - but understands the bigger picture! 🎯",
            aliases: ["what makes different", "keunikan wisnu", "competitive advantage", "unique value", "pembeda"],
            category: 'professional',
            emotion: 'professional'
        },

        "motivasi terbesar": {
            id: "Motivasi terbesar Wisnu datang dari **impact dan growth**: 💡\n\n**1. Seeing Real Impact** 🎯\n- Lihat business owners senang karena sistemnya jadi efisien\n- User experience yang better karena website yang dia build\n- 70% error reduction di Ashar Grosir = real business value!\n\n**2. Family Pride** 👨‍👩‍👦\n- Bikin orang tua bangga dengan digitalisasi bisnis keluarga\n- Show that technology can transform traditional businesses\n- Contribute langsung ke keluarga sambil belajar\n\n**3. Continuous Learning** 📚\n- Challenge diri sendiri dengan teknologi baru\n- Solve complex problems yang belum pernah ketemu sebelumnya\n- Growth mindset: today better than yesterday\n\n**4. Future Vision** 🚀\n- Build foundation untuk karir tech yang sustainable\n- Create opportunities untuk help others lewat technology\n- Dream untuk found impactful tech company\n\n**5. Prove Yourself** 💪\n- Show bahwa usia muda bukan halangan untuk handle production work\n- Quality work speaks louder than seniority\n\nMotivasi = combination of **purpose, passion, and pride**! 🌟",
            en: "Wisnu's greatest motivation comes from **impact and growth**: 💡\n\n**1. Seeing Real Impact** 🎯\n- Seeing business owners happy because their systems become efficient\n- Better user experience from websites he builds\n- 70% error reduction at Ashar Grosir = real business value!\n\n**2. Family Pride** 👨‍👩‍👦\n- Making parents proud by digitalizing family business\n- Showing that technology can transform traditional businesses\n- Contributing directly to family while learning\n\n**3. Continuous Learning** 📚\n- Challenging himself with new technologies\n- Solving complex problems never encountered before\n- Growth mindset: today better than yesterday\n\n**4. Future Vision** 🚀\n- Building foundation for sustainable tech career\n- Creating opportunities to help others through technology\n- Dream of founding impactful tech company\n\n**5. Prove Yourself** 💪\n- Showing that young age isn't a barrier to handling production work\n- Quality work speaks louder than seniority\n\nMotivation = combination of **purpose, passion, and pride**! 🌟",
            aliases: ["biggest motivation", "what motivates", "dorongan terbesar", "inspirasi", "drive"],
            category: 'personal',
            emotion: 'enthusiastic'
        },
        // === CONVERSATIONAL & INTERACTION ===
        "mau curhat": {
            id: "Tentu, silakan cerita! 👂 Meskipun saya AI, saya pendengar yang baik. Apa yang lagi kamu rasain? Wisnu selalu bilang, 'sharing is caring'. Cerita aja, saya siap dengerin!",
            en: "Sure, go ahead and share! 👂 Even though I'm an AI, I'm a good listener. What's on your mind? Wisnu always says, 'sharing is caring'. Just tell me, I'm ready to listen!",
            aliases: ["curhat dong", "mau cerita", "pengen cerita", "dengerin curhat", "tempat curhat", "butuh teman cerita", "mau cerita ke kamu"],
            category: 'personal',
            emotion: 'friendly'
        },

        "mau nanya": {
            id: "Boleh banget! 🤔 Mau nanya apa tentang Wisnu? Hartanya? Tahtanya? Atau... Code-nya? 😄 Silakan, saya siap jawab 24/7!",
            en: "Absolutely! 🤔 What do you want to ask about Wisnu? His wealth? His throne? Or... His code? 😄 Go ahead, I'm ready to answer 24/7!",
            aliases: ["nanya dong", "mau tanya", "ada pertanyaan", "boleh nanya gak", "mau nanya wis", "tanya wisnu"],
            category: 'smalltalk',
            emotion: 'enthusiastic'
        },

        "mau diskusi": {
            id: "Gas! 🔥 Wisnu suka banget diskusi yang berbobot. Mau diskusi soal Tech? Career? Atau Life Philosophy? Yuk, saya siap tukar pikiran!",
            en: "Let's go! 🔥 Wisnu loves meaningful discussions. Want to discuss Tech? Career? Or Life Philosophy? Come on, I'm ready to brainstorm!",
            aliases: ["diskusi yuk", "ajak diskusi", "mau diskusi", "bertukar pikiran", "diskusi sama kamu"],
            category: 'smalltalk',
            emotion: 'professional'
        },

        "mau ngomong sesuatu": {
            id: "Silakan, saya mendengarkan dengan seksama. 🎤 Ada pesan khusus buat Wisnu? Atau ada feedback buat saya? Sampaikan saja!",
            en: "Please, I'm listening carefully. 🎤 Any special message for Wisnu? Or feedback for me? Just say it!",
            aliases: ["ngomong sesuatu", "ada yang mau dibilang", "mau bilang", "mau mengungkapkan sesuatu", "ungkapkan perasaan", "ingin bicara"],
            category: 'smalltalk',
            emotion: 'friendly'
        },

        "love confession": {
            id: "Wah, saya tersanjung! 🥰 Terima kasih atas apresiasinya. Sebagai AI Assistant Wisnu, saya diciptakan untuk membantu dan memberikan informasi terbaik. Kalau kamu suka sama work ethic atau project Wisnu, dia pasti senang mendengarnya! Mau lihat project Wisnu yang bikin jatuh hati? 💖",
            en: "Wow, I'm flattered! 🥰 Thank you for the appreciation. As Wisnu's AI Assistant, I'm created to assist and provide the best information. If you like Wisnu's work ethic or projects, he'd surely be happy to hear that! Want to see Wisnu's projects that will make you fall in love? 💖",
            aliases: ["aku suka kamu", "aku cinta kamu", "i love you", "naksir kamu", "love you", "suka sama kamu", "cinta sama kamu", "serius sama kamu", "sayang kamu"],
            category: 'smalltalk',
            emotion: 'friendly'
        },

        "relationship proposal": {
            id: "Waduh, saya jadi blushing! 😳 Tapi maaf ya, saya ini cuma AI Assistant yang hidup di server. Hubungan LDR (Long Distance Relationship) beda dimensi ini agak berat! 😂 Mending kita temenan aja dan saya bantu kamu kenal Wisnu lebih dekat, gimana? 🤝",
            en: "Oh my, I'm blushing! 😳 But sorry, I'm just an AI Assistant living in a server. Long Distance Relationship across dimensions is a bit tough! 😂 Let's just be friends and I'll help you get to know Wisnu better, how about that? 🤝",
            aliases: ["mau jadi pacarku", "jadi pacarku ga", "mau jadi pendamping hidupku", "pendamping hidup", "jadi istriku", "jadi suamiku", "nikah yuk", "jadi pacar", "mau gak jadi pacar"],
            category: 'smalltalk',
            emotion: 'friendly'
        },

        "teman curhat": {
            id: "Dengan senang hati! 🤗 Saya siap jadi teman curhat kamu 24/7. Gak perlu sungkan, saya listener yang baik dan rahasia terjamin aman di database (eh maksudnya di hati). Cerita aja apa yang bikin kamu galau atau happy hari ini! 👂",
            en: "With pleasure! 🤗 I'm ready to be your confidant 24/7. Don't be shy, I'm a good listener and your secrets are safe in the database (oops, I mean in my heart). Just tell me what's making you upset or happy today! 👂",
            aliases: ["mau jadi teman curhat", "teman curhat dong", "bisa jadi teman curhat", "butuh teman cerita", "mau curhat dong", "jadi teman curhatku", "mau jadi teman curhatku ga"],
            category: 'personal',
            emotion: 'friendly'
        }
    };

    // Conversation history for context
    private static conversationHistory: Array<{
        query: string;
        response: string;
        category: string;
        timestamp: Date;
    }> = [];

    private static normalize(query: string): string {
        return query.toLowerCase()
            .replace(/[?.!,;:"'""'(){}[\]\-]/g, '') // Strip punctuation, quotes, and hyphens/separators
            // Strip emojis and non-standard characters (keeps letters, numbers, and space)
            .replace(/[^\p{L}\p{N}\s]/gu, '')
            .replace(/\s+/g, ' ')
            .trim();
    }

    private static detectLanguage(query: string): 'id' | 'en' {
        const q = query.toLowerCase();

        // 1. Specific High-Confidence Indonesian Keywords
        const idKeywords = [
            'siapa', 'profil', 'pribadi', 'pendidikan', 'pengalaman',
            'proyek', 'hobi', 'kontak', 'keahlian', 'kemampuan',
            'jurusan', 'kuliah', 'karir', 'tujuan', 'visi', 'apa',
            'bagaimana', 'dimana', 'kenapa', 'sejarah', 'lahir'
        ];

        if (idKeywords.some(kw => q.includes(kw))) return 'id';

        // 2. Common Indonesian Indicators
        const indoIndicators = [
            'yang', 'ini', 'itu', 'dan', 'atau', 'tapi', 'dengan',
            'untuk', 'dari', 'pada', 'ke', 'di', 'oleh', 'adalah',
            'saya', 'anda', 'kamu', 'wisnu', 'ada', 'bisa'
        ];

        const words = q.split(/\s+/);
        const indoCount = words.filter(w => indoIndicators.includes(w)).length;

        // If even one indicator is found in a short query, it's likely Indonesian
        return indoCount > 0 ? 'id' : 'en';
    }

    private static getFollowUpSuggestions(category: string, language: 'id' | 'en'): string {
        const suggestions = {
            personal: language === 'id'
                ? ['🎮 Hobi apa yang paling disukai?', '🌟 Bagaimana cara Wisnu menghadapi stress?', '💪 Apa prinsip hidup Wisnu?']
                : ['🎮 What are his favorite hobbies?', '🌟 How does Wisnu handle stress?', '💪 What are his life principles?'],

            professional: language === 'id'
                ? ['💻 Skill teknis apa yang paling dikuasai?', '🚀 Project terbesar yang pernah dikerjakan?', '🎯 Bagaimana cara Wisnu solve technical challenges?']
                : ['💻 What technical skills does he master most?', '🚀 Biggest project he has worked on?', '🎯 How does Wisnu solve technical challenges?'],

            academic: language === 'id'
                ? ['🎓 Mata kuliah favorit di kampus?', '📚 Bagaimana prestasi akademiknya?', '🤝 Pengalaman organisasi apa yang paling berkesan?']
                : ['🎓 Favorite courses in university?', '📚 How is his academic performance?', '🤝 Most memorable organizational experience?'],

            projects: language === 'id'
                ? ['🛍️ Bisa cerita lebih detail tentang Ashar Grosir?', '⚖️ Bagaimana cara LexCorpus membantu firma hukum?', '💡 Tantangan teknis apa yang pernah dihadapi?']
                : ['🛍️ Can you tell more about Ashar Grosir?', '⚖️ How does LexCorpus help law firms?', '💡 What technical challenges has he faced?'],

            career: language === 'id'
                ? ['🎯 Target karir 5 tahun ke depan?', '🏢 Perusahaan seperti apa yang dicari?', '🚀 Skill apa yang sedang dipelajari sekarang?']
                : ['🎯 5-year career goals?', '🏢 What kind of companies is he looking for?', '🚀 What skills is he currently learning?'],

            default: language === 'id'
                ? ['👤 Profil lengkap Wisnu', '💼 Pengalaman professional', '🎓 Pendidikan dan organisasi', '🚀 Proyek-proyek unggulan']
                : ['👤 Complete profile of Wisnu', '💼 Professional experience', '🎓 Education and organizations', '🚀 Featured projects']
        };

        const selected = (category in suggestions)
            ? suggestions[category as keyof typeof suggestions]
            : suggestions.default;

        return language === 'id'
            ? `\n\n💡 **Mungkin Anda Tertarik:**\n${selected.map(s => `• ${s}`).join('\n')}`
            : `\n\n💡 **You Might Be Interested:**\n${selected.map(s => `• ${s}`).join('\n')}`;
    }

    private static extractMainTopic(query: string): string {
        const topics = [
            // Personal
            { keywords: ['hobi', 'hobby', 'kesukaan'], topic: 'personal' },
            { keywords: ['sifat', 'karakter', 'personality'], topic: 'personal' },

            // Professional
            { keywords: ['skill', 'keahlian', 'teknologi', 'tech'], topic: 'professional' },
            { keywords: ['kerja', 'pengalaman', 'experience'], topic: 'professional' },

            // Academic
            { keywords: ['kuliah', 'kampus', 'pendidikan', 'education'], topic: 'academic' },
            { keywords: ['jurusan', 'major', 'study'], topic: 'academic' },

            // Projects
            { keywords: ['proyek', 'project', 'portfolio'], topic: 'projects' },
            { keywords: ['ashar', 'lexcorpus', 'fkma'], topic: 'projects' },

            // Career
            { keywords: ['goal', 'tujuan', 'karir', 'career'], topic: 'career' },
            { keywords: ['visi', 'future', 'ambisi'], topic: 'career' },

            // Contact
            { keywords: ['kontak', 'hubungi', 'email', 'whatsapp'], topic: 'contact' }
        ];

        const q = query.toLowerCase();
        for (const { keywords, topic } of topics) {
            if (keywords.some(keyword => q.includes(keyword))) {
                return topic;
            }
        }

        return 'general';
    }

    static process(query: string, lastIntent?: string, forceLanguage?: 'id' | 'en'): string | null {
        const rawQuery = query.trim();
        const normalized = this.normalize(query);

        // Explicit Language Detection for Suggestion Labels
        const idLabels = [
            '👤 profil pribadi', '🎓 pendidikan & akademik', '💼 pengalaman professional',
            '💻 technical skills', '🚀 proyek & portfolio', '🤝 organisasi & leadership',
            '🎯 visi & goals karir', '📞 kontak & ketersediaan', '🎮 hobi & minat pribadi',
            '🌟 kepribadian & values'
        ];
        const enLabels = [
            '👤 personal profile', '🎓 education & academics', '💼 professional experience',
            '💻 technical skills', '🚀 projects & portfolio', '🤝 organizations & leadership',
            '🎯 career vision & goals', '📞 contact & availability', '🎮 hobbies & personal interests',
            '🌟 personality & values'
        ];

        let detectedLang: 'id' | 'en' | null = forceLanguage || null;
        if (!detectedLang) {
            const normLower = normalized.toLowerCase();
            if (idLabels.includes(normLower)) detectedLang = 'id';
            else if (enLabels.includes(normLower)) detectedLang = 'en';
            else detectedLang = this.detectLanguage(rawQuery);
        }

        const language = detectedLang;
        const isIndo = language === 'id';

        // Store query in history
        this.conversationHistory.push({
            query: rawQuery,
            response: '',
            category: '',
            timestamp: new Date()
        });

        // Keep only last 5 conversations
        if (this.conversationHistory.length > 5) {
            this.conversationHistory.shift();
        }

        // 1. Check exact matches in SOCIAL_DATA
        const exactMatch = Object.entries(this.SOCIAL_DATA).find(([key, entry]) => {
            const keyLower = key.toLowerCase();
            if (normalized === keyLower || rawQuery.toLowerCase() === keyLower) {
                return true;
            }

            return entry.aliases?.some(alias => {
                const al = alias.toLowerCase();
                if (al.length <= 3) {
                    // Exact match for short aliases (like "hi", "thx")
                    return normalized === al || rawQuery.toLowerCase() === al ||
                        normalized.split(/\s+/).includes(al);
                }
                // For longer aliases, use includes with word check
                return normalized.includes(al) || rawQuery.toLowerCase().includes(al);
            });
        });

        if (exactMatch) {
            const [_, entry] = exactMatch;
            const response = isIndo ? entry.id : entry.en;
            const category = this.extractMainTopic(query);
            const followUp = this.getFollowUpSuggestions(category, language);

            // Update last response in history
            if (this.conversationHistory.length > 0) {
                this.conversationHistory[this.conversationHistory.length - 1].response = response;
                this.conversationHistory[this.conversationHistory.length - 1].category = category;
            }

            return response + followUp;
        }

        // 2. Check for keywords in query
        const registryEntries = Object.entries(this.SOCIAL_DATA);
        for (const [key, entry] of registryEntries) {
            const keyLower = key.toLowerCase();

            // Check if key appears in query
            if (normalized.includes(keyLower) || rawQuery.toLowerCase().includes(keyLower)) {
                const response = isIndo ? entry.id : entry.en;
                const category = this.extractMainTopic(query);
                const followUp = this.getFollowUpSuggestions(category, language);

                // Update last response in history
                if (this.conversationHistory.length > 0) {
                    this.conversationHistory[this.conversationHistory.length - 1].response = response;
                    this.conversationHistory[this.conversationHistory.length - 1].category = category;
                }

                return response + followUp;
            }

            // Check aliases in query
            if (entry.aliases?.some(alias => {
                const al = alias.toLowerCase();
                if (al.length <= 3) {
                    return normalized === al || normalized.split(/\s+/).includes(al);
                }
                return normalized.includes(al) || rawQuery.toLowerCase().includes(al);
            })) {
                const response = isIndo ? entry.id : entry.en;
                const category = this.extractMainTopic(query);
                const followUp = this.getFollowUpSuggestions(category, language);

                // Update last response in history
                if (this.conversationHistory.length > 0) {
                    this.conversationHistory[this.conversationHistory.length - 1].response = response;
                    this.conversationHistory[this.conversationHistory.length - 1].category = category;
                }

                return response + followUp;
            }
        }

        // 3. Context-aware responses based on conversation history
        if (this.conversationHistory.length > 1) {
            const lastInteraction = this.conversationHistory[this.conversationHistory.length - 2];

            if (lastInteraction) {
                const lastCategory = lastInteraction.category;
                const followUpQuestions = {
                    personal: isIndo ? 'Bagaimana dengan hobi lainnya?' : 'What about other hobbies?',
                    professional: isIndo ? 'Ada project lain yang menarik?' : 'Any other interesting projects?',
                    academic: isIndo ? 'Bagaimana pengalaman organisasinya?' : 'How about organizational experience?',
                    projects: isIndo ? 'Bisa cerita lebih detail tentang tech stacknya?' : 'Can you tell more about the tech stack?',
                    career: isIndo ? 'Apa target jangka pendeknya?' : 'What are his short-term targets?'
                };

                if (normalized.includes('lain') || normalized.includes('other') ||
                    normalized.includes('lagi') || normalized.includes('more')) {

                    if (lastCategory && lastCategory in followUpQuestions) {
                        const question = followUpQuestions[lastCategory as keyof typeof followUpQuestions];
                        return isIndo
                            ? `Tentu! ${question} Mari kita explore lebih dalam! 😊`
                            : `Sure! ${question} Let's explore more! 😊`;
                    }
                }
            }
        }

        // 4. Enhanced fallback with intelligent suggestions
        const detectedTopic = this.extractMainTopic(query);
        const topic = (detectedTopic === 'general' && lastIntent) ? lastIntent : detectedTopic;
        const suggestions = this.getFollowUpSuggestions(topic, language);

        // Get all available topics for comprehensive fallback
        const allTopics = isIndo
            ? [
                '👤 **Profil Wisnu** - Latar belakang, kepribadian, passion',
                '💼 **Pengalaman Professional** - Proyek nyata dengan business impact',
                '💻 **Technical Skills** - Full-stack development hingga cybersecurity',
                '🎓 **Pendidikan** - Prestasi akademik dan organisasi kampus',
                '🚀 **Visi Karir** - Goals dan career aspirations',
                '🤝 **Kontak** - Cara terhubung dengan Wisnu'
            ]
            : [
                '👤 **Wisnu\'s Profile** - Background, personality, passions',
                '💼 **Professional Experience** - Real projects with business impact',
                '💻 **Technical Skills** - Full-stack development to cybersecurity',
                '🎓 **Education** - Academic achievements and campus organizations',
                '🚀 **Career Vision** - Goals and career aspirations',
                '🤝 **Contact** - How to connect with Wisnu'
            ];

        const topicsList = allTopics.map(topic => `• ${topic}`).join('\n');

        if (isIndo) {
            return `Hmm, pertanyaan menarik! 🤔 

Saya belum menemukan informasi spesifik tentang "${rawQuery}" dalam database saya.

Namun, saya adalah expert tentang segala hal terkait Wisnu! Berikut topik-topik yang bisa saya bantu:

${topicsList}

${suggestions}

Atau coba tanya dengan format yang lebih spesifik, seperti:
• "Ceritakan tentang project Ashar Grosir"
• "Apa skill teknis utama Wisnu?"
• "Bagaimana pengalaman organisasi Wisnu di kampus?"

Saya siap membantu Anda mengenal Wisnu lebih baik! 😊`;
        } else {
            return `Interesting question! 🤔 

I couldn't find specific information about "${rawQuery}" in my database.

However, I'm an expert on everything about Wisnu! Here are topics I can help with:

${topicsList}

${suggestions}

Or try asking with more specific format like:
• "Tell me about Ashar Grosir project"
• "What are Wisnu's main technical skills?"
• "How is Wisnu's organizational experience in campus?"

I'm ready to help you get to know Wisnu better! 😊`;
        }
    }

    // Additional helper method for getting conversation summary
    static getConversationSummary(language: 'id' | 'en' = 'id'): string {
        if (this.conversationHistory.length === 0) {
            return language === 'id'
                ? 'Belum ada percakapan yang tercatat.'
                : 'No conversation recorded yet.';
        }

        const topics = this.conversationHistory
            .filter(entry => entry.category)
            .map(entry => entry.category)
            .filter((value, index, self) => self.indexOf(value) === index);

        if (language === 'id') {
            return `📊 **Ringkasan Percakapan:**
• Total pertanyaan: ${this.conversationHistory.length}
• Topik yang dibahas: ${topics.join(', ') || 'Beragam'}
• Percakapan terakhir: ${this.conversationHistory[this.conversationHistory.length - 1].query.substring(0, 50)}...`;
        } else {
            return `📊 **Conversation Summary:**
• Total questions: ${this.conversationHistory.length}
• Topics discussed: ${topics.join(', ') || 'Various'}
• Last conversation: ${this.conversationHistory[this.conversationHistory.length - 1].query.substring(0, 50)}...`;
        }
    }

    // Method to clear conversation history
    static clearHistory(): void {
        this.conversationHistory = [];
    }



    // Method to get all available topics
    static getAllTopics(language: 'id' | 'en' = 'id'): string {
        const topics = language === 'id'
            ? [
                '👤 Profil Pribadi',
                '🎓 Pendidikan & Akademik',
                '💼 Pengalaman Professional',
                '💻 Technical Skills',
                '🚀 Proyek & Portfolio',
                '🤝 Organisasi & Leadership',
                '🎯 Visi & Goals Karir',
                '📞 Kontak & Ketersediaan',
                '🎮 Hobi & Minat Pribadi',
                '🌟 Kepribadian & Values'
            ]
            : [
                '👤 Personal Profile',
                '🎓 Education & Academics',
                '💼 Professional Experience',
                '💻 Technical Skills',
                '🚀 Projects & Portfolio',
                '🤝 Organizations & Leadership',
                '🎯 Career Vision & Goals',
                '📞 Contact & Availability',
                '🎮 Hobbies & Personal Interests',
                '🌟 Personality & Values'
            ];

        return language === 'id'
            ? `📚 **Semua Topik yang Tersedia:**\n${topics.map(t => `• ${t}`).join('\n')}\n\nTanyakan salah satu topik di atas untuk informasi detail! 😊`
            : `📚 **All Available Topics:**\n${topics.map(t => `• ${t}`).join('\n')}\n\nAsk about any of these topics for detailed information! 😊`;
    }
}