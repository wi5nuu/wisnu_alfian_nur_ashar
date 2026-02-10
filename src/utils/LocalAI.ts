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
    'general' | 'tech' | 'projects' | 'career' | 'hobbies' | 'sensitive' | 'contact';
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
            aliases: ["hi", "hello", "hey", "hai", "assalamualaikum", "good morning", "good afternoon"],
            category: 'smalltalk',
            emotion: 'friendly'
        },

        "apa kabar": {
            id: "Saya selalu dalam kondisi prima! 💪 Sebagai AI assistant, saya terus standby 24/7 untuk membantu Anda mengenal Wisnu. Kamu gimana kabarnya? Semoga sehat selalu! Ada yang mau ditanyakan tentang project-project keren Wisnu?",
            en: "I'm always in excellent condition! 💪 As an AI assistant, I'm available 24/7 to help you learn about Wisnu. How are you doing? Hope you're doing great! Anything you'd like to ask about Wisnu's amazing projects?",
            aliases: ["how are you", "what's up", "supp", "kabar baik", "lagi ngapain"],
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
            aliases: ["who is wisnu", "profil wisnu", "tentang wisnu", "introduce yourself", "who are you", "siapa anda", "siapa kamu", "👤 Profil Pribadi", "👤 Personal Profile", "profil lengkap wisnu", "profil wisnu latar belakang kepribadian passion"],
            category: 'identity',
            emotion: 'professional',
            followUp: ["asal mana", "pendidikan", "skill teknis", "proyek", "pengalaman kerja"]
        },

        "asal mana": {
            id: `🌏 **Asal & Latar Belakang Wisnu:**

**Tempat Lahir:** Tarakan, Kalimantan Utara
**Domisili Sekarang:** Bekasi Timur, Jawa Barat
**Latar Belakang Keluarga:** Dari keluarga entrepreneur dengan bisnis grosir parfum yang berjalan 20+ tahun

**Perjalanan:**
1. Lahir dan besar awal di Tarakan
2. Pernah tinggal di Sengkang, Sulawesi Selatan
3. Sekarang menetap di Bekasi untuk kuliah di President University

**Pengalaman Multikultural:**
- Terbiasa dengan berbagai budaya Indonesia
- Memahami perbedaan regional dan adaptasi
- Network yang luas dari berbagai daerah

Wisnu membawa perspektif unik dari latar belakang yang beragam ini ke dalam pengembangan solusi teknologi! 🌟`,
            en: `🌏 **Wisnu's Origin & Background:**

**Birthplace:** Tarakan, North Kalimantan
**Current Residence:** East Bekasi, West Java
**Family Background:** From entrepreneurial family with 20+ years wholesale perfume business

**Journey:**
1. Born and early childhood in Tarakan
2. Lived in Sengkang, South Sulawesi
3. Now settled in Bekasi for studies at President University

**Multicultural Experience:**
- Familiar with diverse Indonesian cultures
- Understands regional differences and adaptation
- Wide network from various regions

Wisnu brings unique perspectives from this diverse background into technology solution development! 🌟`,
            aliases: ["wisnu asli mana", "lahir dimana", "domisili", "tinggal dimana", "background"],
            category: 'identity',
            emotion: 'friendly'
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

        "wisnu jomblo": {
            id: "Saat ini, Wisnu sangat fokus pada pengembangan karir, pendidikan, dan skill development. 💼 Relationship status adalah informasi personal yang dihargai privasinya. Yang pasti, commitment terbesarnya saat ini adalah membangun masa depan professional yang solid dan memberikan kontribusi meaningful melalui teknologi. 🚀",
            en: "Currently, Wisnu is highly focused on career development, education, and skill enhancement. 💼 Relationship status is personal information that respects privacy. What's certain is that his biggest commitment right now is building a solid professional future and making meaningful contributions through technology. 🚀",
            aliases: ["single", "punya pacar", "relationship", "status", "couple"],
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