
const fs = require('fs');
const path = require('path');

// Load EXISTING Registry first
const registryPath = path.join('d:', 'Asli_Portfolio', 'src', 'data', 'socialRegistry.ts');
let existingContent = fs.readFileSync(registryPath, 'utf8');

// Use a more robust way to find the start of the object, skipping the type definition
const startMatch = existingContent.match(/=\s*{/);
if (!startMatch) {
    throw new Error("Could not find the start of the SocialRegistry object. Make sure the file contains '= {'.");
}
const jsonStart = startMatch.index + startMatch[0].indexOf('{');
const jsonEnd = existingContent.lastIndexOf('}');
const registry = JSON.parse(existingContent.substring(jsonStart, jsonEnd + 1));

const categories = [
    {
        name: "TENTANG DIRI",
        items: [
            { q: "wisnu orangnya gimana", id: "Wisnu itu tipe orang yang detail dan suka tantangan! Keliatan dari cara dia handle 3 project production sekaligus sambil kuliah. Fokus tapi tetap humble.", en: "Wisnu is a detail-oriented person who loves challenges! It shows in how he handles 3 production projects simultaneously while studying." },
            { q: "wisnu asli mana", id: "Wisnu lahir di Tarakan, tapi perjalanan pendidikannya panjang - dari Tarakan, pindah ke Sulawesi, sekarang kuliah di Bekasi.", en: "Wisnu was born in Tarakan, but his educational journey is long - from Tarakan, to Sulawesi, and now studying in Bekasi." },
            { q: "umur wisnu berapa", id: "Wisnu sekarang lagi kuliah semester awal di President University (mulai Agustus 2024), jadi kemungkinan umur 18-19 tahun.", en: "Wisnu is currently a first-year student at President University (started August 2024), so he's likely 18-19 years old." },
            { q: "wisnu tinggal dimana", id: "Sekarang Wisnu di Bekasi Timur, Kota Bekasi, Jawa Barat. Dekat sama kampusnya President University.", en: "Wisnu currently resides in East Bekasi, Bekasi City, West Java. Close to his campus at President University." },
            { q: "wisnu bisa dihubungi kemana", id: "Bisa via email wisnualfian117@gmail.com, WhatsApp +62 813-9488-2490, atau DM Instagram @wshnn_.", en: "You can reach him via email at wisnualfian117@gmail.com, WhatsApp +62 813-9488-2490, or Instagram DM @wshnn_." },
            { q: "wisnu aktif di sosmed apa", id: "Instagram @wshnn_, LinkedIn, Facebook, Line, plus punya website portfolio sendiri di wisnualfiannurashar.my.id.", en: "Instagram @wshnn_, LinkedIn, Facebook, Line, and his own portfolio website at wisnualfiannurashar.my.id." },
            { q: "wisnu suka ngapain di waktu luang", id: "Kayaknya sih coding juga 😅 Tapi pasti ada balance-nya, dia juga aktif di organisasi kampus buat event management.", en: "Seems like he's coding too 😅 But there's balance; he's also active in campus organizations for event management." },
            { q: "wisnu tipe pekerja keras atau santai", id: "Pekerja keras! Bayangin aja, handle 3 production websites, aktif di 3 organisasi, kuliah, PLUS ngerjain family business.", en: "A hard worker! Imagine handling 3 production websites, active in 3 organizations, studying, PLUS running his family business." },
            { q: "hobi wisnu apa", id: "Coding pasti, terus event management juga. Dia balance antara technical skill sama soft skill.", en: "Definitely coding, and event management too. He balances technical and soft skills." },
            { q: "wisnu punya motto hidup", id: "Motto Wisnu: 'Delivering High-Impact Web Solutions' - fokus kasih impact yang nyata.", en: "Wisnu's motto: 'Delivering High-Impact Web Solutions' - focusing on giving real impact." }
        ]
    },
    {
        name: "PENDIDIKAN",
        items: [
            { q: "wisnu kuliah dimana", id: "President University, jurusan Bachelor of Information Technology. Kampus internasional di Bekasi.", en: "President University, majoring in Bachelor of Information Technology. An international campus in Bekasi." },
            { q: "wisnu jurusan apa", id: "Information Technology. Perfect match sama skill dan passion-nya di web development!", en: "Information Technology. A perfect match for his skills and passion in web development!" },
            { q: "wisnu semester berapa", id: "Masih semester awal, baru mulai Agustus 2024. Fresh student tapi udah punya portfolio production-level!", en: "Still in his early semesters, started in August 2024. A fresh student with a production-level portfolio!" },
            { q: "kuliah wisnu sambil kerja ya", id: "Iya! Dia kuliah sambil manage family business, aktif di organisasi, dan kerja freelance. Time management-nya luar biasa!", en: "Yes! He studies while managing the family business, active in organizations, and does freelance work. Amazing time management!" },
            { q: "wisnu ipk berapa", id: "Data IPK belum available karena masih semester awal. Tapi skill praktisnya udah proven dari project-project real!", en: "GPA data isn't available yet as it's his first year. But his practical skills are proven from real projects!" },
            { q: "sekolah wisnu dulu dimana", id: "TK/SD di Tarakan, SD/SMP/SMA di Sulawesi (As'adiyah Sengkang), sekarang kuliah President University Bekasi.", en: "K/Primary in Tarakan, Primary/Middle/High School in Sulawesi (As'adiyah Sengkang), now at President University Bekasi." },
            { q: "wisnu pernah ikut lomba akademik", id: "Fokusnya lebih ke sertifikasi profesional kayak HackerRank, HubSpot, Google - lebih applicable ke kerja!", en: "His focus is more on professional certifications like HackerRank, HubSpot, and Google." },
            { q: "organisasi kampus wisnu apa", id: "PUFA Computer Science sebagai VoD (Art and Sport Division), sama PUMA Informatic.", en: "PUFA Computer Science as VoD (Art and Sport Division), and PUMA Informatic." },
            { q: "wisnu punya sertifikat apa", id: "Google Analytics, Google Ads, HubSpot (Data Integration & Social Media), HackerRank (Software Engineer & React).", en: "Google Analytics, Google Ads, HubSpot (Data Integration & Social Media), HackerRank (Software Engineer & React)." },
            { q: "sertifikat paling baru wisnu", id: "Februari 2026: Data Integrations & Social Media Marketing dari HubSpot, plus Google Ads!", en: "February 2026: Data Integrations & Social Media Marketing from HubSpot, plus Google Ads!" }
        ]
    },
    {
        name: "SKILL TEKNIS",
        items: [
            { q: "wisnu bisa bahasa pemrograman apa", id: "React, TypeScript, Next.js, Node.js. Full-stack developer yang fokus ke JavaScript ecosystem.", en: "React, TypeScript, Next.js, Node.js. A full-stack developer focused on the JavaScript ecosystem." },
            { q: "wisnu spesialisasi di bidang apa", id: "Full-Stack Web Development, specialty di React/Next.js, TypeScript, dan cloud integration (Supabase).", en: "Full-Stack Web Development, specialty in React/Next.js, TypeScript, and cloud integration (Supabase)." },
            { q: "framework favorit wisnu apa", id: "Next.js! Semua project production-nya pakai Next.js 16 - LexCorpus dan PC FKMA pakai ini.", en: "Next.js! All his production projects use Next.js 16 - LexCorpus and PC FKMA use this." },
            { q: "database apa yang wisnu kuasai", id: "PostgreSQL lewat Supabase. Modern stack untuk aplikasi yang scalable.", en: "PostgreSQL via Supabase. A modern stack for scalable applications." },
            { q: "wisnu bisa design juga", id: "Iya! Dia handle full-stack termasuk UI/UX pakai Tailwind CSS. Designnya clean dan modern.", en: "Yes! He handles full-stack including UI/UX using Tailwind CSS. His designs are clean and modern." },
            { q: "css framework apa yang wisnu pakai", id: "Tailwind CSS - utility-first CSS framework yang efisien dan modern.", en: "Tailwind CSS - an efficient and modern utility-first CSS framework." },
            { q: "wisnu paham security", id: "Paham! Punya skill Cybersecurity & Cloud Security, serta implement role-based access di LexCorpus.", en: "Yes! He has Cybersecurity & Cloud Security skills and implemented role-based access in LexCorpus." },
            { q: "seo wisnu jago", id: "Yes! Project Ashar Grosir dioptimasi SEO-nya untuk menjangkau 15,000+ partners.", en: "Yes! The Ashar Grosir project is SEO-optimized to reach 15,000+ partners." },
            { q: "wisnu bisa ai machine learning", id: "Pernah bikin chatbot solution di PUMA Informatic untuk otomasi customer service.", en: "He built a chatbot solution at PUMA Informatic for customer service automation." },
            { q: "tools apa yang sering wisnu pakai", id: "Next.js, React, TypeScript, Tailwind, Supabase, Vercel, dan Google Analytics.", en: "Next.js, React, TypeScript, Tailwind, Supabase, Vercel, and Google Analytics." }
        ]
    },
    {
        name: "PROJECT",
        items: [
            { q: "project terbesar wisnu apa", id: "LexCorpus CMS Platform - CMS production-ready untuk law firm dengan role-based editorial system.", en: "LexCorpus CMS Platform - a production-ready CMS for a law firm with a role-based editorial system." },
            { q: "berapa project production wisnu", id: "3 project aktif: LexCorpus CMS, Ashar Grosir Parfum, dan PC FKMA Jakarta Website. Semuanya live!", en: "3 active projects: LexCorpus CMS, Ashar Grosir Parfum, and PC FKMA Jakarta Website. All are live!" },
            { q: "website ashar grosir itu apa", id: "E-commerce platform untuk bisnis parfum wholesale keluarga yang sudah 20 tahun melayani 15,000+ partners.", en: "An e-commerce platform for the family perfume wholesale business serving 15,000+ partners since 20 years." },
            { q: "teknologi apa yang dipakai di ashar grosir", id: "React, TypeScript, Tailwind CSS, dengan CDN untuk optimasi performa.", en: "React, TypeScript, Tailwind CSS, with CDN for performance optimization." },
            { q: "lexcorpus itu website apa", id: "Platform CMS untuk Lexcorpus Law Firm, pakai Next.js 16, Supabase, dan Tailwind CSS. Professional-grade.", en: "A CMS platform for Lexcorpus Law Firm, using Next.js 16, Supabase, and Tailwind CSS. Professional-grade." },
            { q: "pc fkma website buat apa", id: "Platform digital resmi untuk Alumni As'adiyah di Jakarta. Ada profile dan news portal komunitas.", en: "Official digital platform for As'adiyah Alumni in Jakarta. Featuring profiles and community news." },
            { q: "project wisnu pakai cloud", id: "Iya! Pakai Supabase untuk backend dan dideploy di Vercel. Infastruktur cloud modern.", en: "Yes! Using Supabase for the backend and deployed on Vercel. Modern cloud infrastructure." },
            { q: "wisnu pernah bikin chatbot", id: "Pernah! Di PUMA Informatic, meningkatkan response time customer service hingga 60%!", en: "Yes! At PUMA Informatic, improving customer service response time by 60%!" },
            { q: "project mana yang paling wisnu banggakan", id: "Ashar Grosir, karena mentransformasi bisnis keluarga dan mengurangi manual errors hingga 70%.", en: "Ashar Grosir, for transforming the family business and reducing manual errors by 70%." },
            { q: "website portfolio wisnu dimana", id: "Wisnualfiannurashar.my.id - portfolio lengkap dengan project dan sertifikasi.", en: "Wisnualfiannurashar.my.id - complete portfolio with projects and certifications." }
        ]
    },
    {
        name: "KERJA",
        items: [
            { q: "wisnu udah kerja dimana aja", id: "Self-employed di Ashar Grosir, VoD di PUFA CS, IT Development di PC FKMA, dan PUMA Informatic.", en: "Self-employed at Ashar Grosir, VoD at PUFA CS, IT Development at PC FKMA, and PUMA Informatic." },
            { q: "pengalaman kerja wisnu berapa lama", id: "Aktif dari 2024, sekitar 1-2 tahun dengan berbagai peran yang berjalan bersamaan.", en: "Active since 2024, about 1-2 years with various roles running concurrently." },
            { q: "posisi wisnu sekarang apa", id: "Full-Stack Developer di Ashar Grosir dan Vice of Division di PUFA Computer Science.", en: "Full-Stack Developer at Ashar Grosir and Vice of Division at PUFA Computer Science." },
            { q: "wisnu pernah kerja remote", id: "Iya! Ashar Grosir menggunakan model kerja hybrid, fleksibel antara kantor dan remote.", en: "Yes! Ashar Grosir uses a hybrid work model, flexible between office and remote." },
            { q: "achievement terbesar wisnu di kerja", id: "Digitalisasi bisnis keluarga berumur 20 tahun, mengurangi error 70%, dan ekspansi ke 15K partners.", en: "Digitalizing a 20-year family business, reducing errors by 70%, and expanding to 15K partners." },
            { q: "wisnu kerja di bidang apa", id: "Web Development, IT Development, Event Management, dan Digital Transformation.", en: "Web Development, IT Development, Event Management, and Digital Transformation." },
            { q: "impact kerja wisnu paling keliatan", id: "Chatbot di PUMA (60% Faster) dan Otomasi di Ashar Grosir (70% Fewer Errors).", en: "Chatbot at PUMA (60% Faster) and Automation at Ashar Grosir (70% Fewer Errors)." },
            { q: "wisnu handle tim", id: "Iya, sebagai VoD di PUFA dia mengkoordinasi tim lintas divisi untuk event besar.", en: "Yes, as VoD at PUFA he coordinates cross-functional teams for major events." },
            { q: "gaji wisnu berapa", id: "Informasi gaji bersifat pribadi. Tapi secara skill, Wisnu memiliki value tinggi sebagai developer.", en: "Salary info is private. But skill-wise, Wisnu has high value as a developer." },
            { q: "wisnu kerja sama siapa", id: "Berkolaborasi dengan tim organisasi (PUFA, PUMA, FKMA) dan klien independen.", en: "Collaborating with organizational teams (PUFA, PUMA, FKMA) and independent clients." }
        ]
    },
    {
        name: "SOFT SKILLS",
        items: [
            { q: "soft skill wisnu apa aja", id: "Communication, Leadership, Teamwork, Creativity, dan Problem-Solving.", en: "Communication, Leadership, Teamwork, Creativity, and Problem-Solving." },
            { q: "wisnu bisa lead tim", id: "Bisa! Terbukti dari perannya sebagai VoD yang mengkoordinasi tim untuk event fakultas.", en: "Yes! Proven by his role as VoD coordinating teams for faculty events." },
            { q: "wisnu komunikatif", id: "Sangat! Communication adalah soft skill utamanya untuk handle kolaborasi tim dan klien.", en: "Very! Communication is his key soft skill for handling team and client collaborations." },
            { q: "problem solving wisnu gimana", id: "Teruji! Dia berhasil memecahkan tantangan teknis dalam digitalisasi bisnis dan platform CMS.", en: "Tested! He successfully solved technical challenges in business digitalization and CMS platforms." },
            { q: "wisnu kreatif gak", id: "Kreatif! Memberikan solusi inovatif untuk masalah bisnis nyata di setiap projectnya.", en: "Creative! Providing innovative solutions for real business problems in every project." },
            { q: "wisnu bisa kerja tim", id: "Excellent! Aktif di 3 organisasi dan sering berkolaborasi dalam project lintas divisi.", en: "Excellent! Active in 3 organizations and often collaborates on cross-functional projects." },
            { q: "wisnu tipe pemimpin apa", id: "Pemimpin yang kolaboratif - mengkoordinasi tim sambil tetap hands-on secara teknis.", en: "A collaborative leader - coordinating teams while staying technically hands-on." },
            { q: "wisnu fast learner", id: "Super fast! Sudah handle production projects dan meraih 6 sertifikasi dalam waktu singkat.", en: "Super fast! Already handling production projects and earning 6 certifications in a short time." },
            { q: "public speaking wisnu bagus", id: "Iya, perannya sebagai VoD menuntut kemampuan presentasi dan koordinasi yang baik.", en: "Yes, his role as VoD requires good presentation and coordination skills." },
            { q: "wisnu detail oriented", id: "Sangat detail! Terlihat dari kualitas kode, keamanan sistem, dan dokumentasi projectnya.", en: "Very detail-oriented! Evident in code quality, system security, and project documentation." }
        ]
    },
    {
        name: "ORGANISASI",
        items: [
            { q: "wisnu aktif di organisasi apa", id: "3 organisasi: PC FKMA Jakarta, PUFA Computer Science, dan PUMA Informatic.", en: "3 organizations: PC FKMA Jakarta, PUFA Computer Science, and PUMA Informatic." },
            { q: "peran wisnu di fkma", id: "IT Development dan Member of Minat Bakat - handle website dan talent division.", en: "IT Development and Member of Interest & Talent Division - handling website and talent division." },
            { q: "pufa itu organisasi apa", id: "PUFA Computer Science - organisasi fakultas di President University. Wisnu menjabat sebagai VoD.", en: "PUFA Computer Science - a faculty organization at President University. Wisnu serves as VoD." },
            { q: "vod itu apa", id: "Vice of Division untuk Art and Sport - mengkoordinasi event fakultas dan inovasi digital.", en: "Vice of Division for Art and Sport - coordinating faculty events and digital innovation." },
            { q: "puma informatic ngapain aja", id: "Fokus ke solusi teknologi, seperti chatbot development untuk meningkatkan customer experience.", en: "Focusing on technology solutions, such as chatbot development to enhance customer experience." },
            { q: "organisasi mana yang paling aktif wisnu", id: "PUFA dan PC FKMA, karena memiliki peran kepemimpinan strategis sebagai VoD and IT Dev.", en: "PUFA and PC FKMA, due to strategic leadership roles as VoD and IT Dev." },
            { q: "wisnu pernah organize event apa", id: "Major faculty events di PUFA sebagai VoD, mengkoordinasi tim lintas fungsi.", en: "Major faculty events at PUFA as VoD, coordinating cross-functional teams." },
            { q: "pc fkma itu organisasi apa", id: "Perkumpulan Alumni FKMA As'adiyah Jakarta - platform komunitas alumni di area Jakarta.", en: "As'adiyah Alumni Association Jakarta - a community platform for alumni in the Jakarta area." },
            { q: "kenapa wisnu join banyak organisasi", id: "Untuk menyeimbangkan skill teknis dengan soft skills seperti leadership dan networking.", en: "To balance technical skills with soft skills like leadership and networking." },
            { q: "impact wisnu di organisasi", id: "Membangun website resmi (PC FKMA) dan mengimplementasikan sistem otomasi di organisasi.", en: "Building official websites (PC FKMA) and implementing automation systems in organizations." }
        ]
    },
    {
        name: "BUSINESS",
        items: [
            { q: "wisnu punya bisnis sendiri", id: "Iya! Wisnu mentransformasi digital Ashar Grosir Parfum, bisnis keluarga yang dia modernisasi.", en: "Yes! Wisnu digitally transformed Ashar Grosir Parfum, a family business he modernized." },
            { q: "ashar grosir itu bisnis apa", id: "Wholesale parfum yang sudah 30 tahun melayani 15,000+ partners se-Indonesia. Skala besar!", en: "A perfume wholesale business serving 15,000+ partners across Indonesia for 20 years. Large scale!" },
            { q: "omzet ashar grosir berapa", id: "Informasi omzet tidak dipublikasikan, namun dengan 15,000+ partners, bisnisnya sangat substansial.", en: "Revenue info is not public, but with 15,000+ partners, the business is very substantial." },
            { q: "wisnu ceo atau apa di ashar", id: "Posisinya adalah Full-Stack Developer yang memimpin transformasi digital bisnis tersebut.", en: "His position is Full-Stack Developer leading the digital transformation of the business." },
            { q: "business model ashar gimana", id: "B2B wholesale - menjual parfum dalam jumlah besar ke 15,000+ partners via platform digital.", en: "B2B wholesale - selling perfume in bulk to 15,000+ partners via a digital platform." },
            { q: "wisnu entrepreneurial spirit", id: "Sangat kuat! Mentransformasi bisnis tradisional menjadi digital dan menciptakan solusi secara mandiri.", en: "Very strong! Transforming a traditional business into digital and creating solutions independently." },
            { q: "website ashar bisa beli produk", id: "Iya! Ada platform e-commerce lengkap di www.ashargrosirparfum.com untuk transaksi grosir.", en: "Yes! There's a full e-commerce platform at www.ashargrosirparfum.com for wholesale transactions." },
            { q: "kompetitor ashar siapa", id: "Distributor parfum grosir lain, namun Ashar unggul dengan platform digital Next.js yang modern.", en: "Other wholesale perfume distributors, but Ashar leads with its modern Next.js digital platform." },
            { q: "wisnu handle bisnis gimana sambil kuliah", id: "Time management dan otomasi! Membangun sistem yang mengurangi kerja manual hingga 70%.", en: "Time management and automation! Building systems that reduce manual work by 70%." },
            { q: "future plan ashar grosir", id: "Terus berkembang dengan teknologi - ekspansi pasar dan meningkatkan customer experience secara digital.", en: "Continue growing with technology - expanding market reach and enhancing digital customer experience." }
        ]
    },
    {
        name: "FUTURE",
        items: [
            { q: "cita-cita wisnu apa", id: "Menjadi Senior Full-Stack Developer dan IT Specialist yang memberikan solusi berdampak tinggi.", en: "To become a Senior Full-Stack Developer and IT Specialist delivering high-impact solutions." },
            { q: "target wisnu 5 tahun ke depan", id: "Eksperimen dengan teknologi baru, expand portfolio, dan mungkin mendirikan tech company sendiri.", en: "Experimenting with new tech, expanding his portfolio, and possibly starting his own tech company." },
            { q: "wisnu mau jadi freelancer atau kantoran", id: "Fleksibel! Saat ini dia mencampur antara self-employed, freelance, dan kerja organisasi.", en: "Flexible! Currently, he mixes self-employment, freelance, and organizational work." },
            { q: "technology apa yang wisnu mau pelajari", id: "AI/ML lebih dalam, advanced cloud architecture, dan mungkin blockchain development.", en: "Deeper AI/ML, advanced cloud architecture, and possibly blockchain development." },
            { q: "wisnu mau s2", id: "Fokus saat ini adalah skill praktis dan sertifikasi profesional sebelum melanjutkan studi lanjut.", en: "The current focus is on practical skills and professional certifications before pursuing further studies." },
            { q: "wisnu tertarik startup", id: "Sangat mungkin! Sudah memiliki jiwa entrepreneur melalui transformasi bisnis keluarga.", en: "Very likely! Already has an entrepreneurial spirit through the family business transformation." },
            { q: "industry apa yang wisnu target", id: "Web development, digital transformation, and e-commerce - bidang yang sudah dia kuasai.", en: "Web development, digital transformation, and e-commerce - areas he already excels in." },
            { q: "wisnu mau kerja remote atau hybrid", id: "Prefer hybrid - menjaga keseimbangan antara fleksibilitas dan kolaborasi tim.", en: "Prefer hybrid - maintaining balance between flexibility and team collaboration." },
            { q: "gaji expectation wisnu", id: "Sebagai developer berpengalaman production, targetnya adalah market rate global yang kompetitif.", en: "As an experienced production developer, his target is a competitive global market rate." },
            { q: "wisnu mau pindah ke luar negeri", id: "Sangat mungkin dengan bekal pendidikan internasional di President University and global tech stack.", en: "Very possible with an international education at President University and a global tech stack." }
        ]
    },
    {
        name: "ACHIEVEMENT",
        items: [
            { q: "prestasi terbesar wisnu apa", id: "Mentransformasi bisnis keluarga 20 tahun, mengurangi error 70%, melayani 15,000+ partners.", en: "Transforming a 20-year family business, reducing errors 70%, and serving 15,000+ partners." },
            { q: "wisnu pernah menang kompetisi", id: "Fokus pada sertifikasi profesional dari HackerRank, Google, dan HubSpot yang diakui industri.", en: "Focusing on professional certifications from HackerRank, Google, and HubSpot recognized by the industry." },
            { q: "recognition apa yang wisnu dapat", id: "6 sertifikasi profesional global yang membuktikan kompetensinya di bidang IT dan marketing.", en: "6 global professional certifications proving his competence in IT and marketing." },
            { q: "client wisnu siapa aja", id: "LexCorpus Law Firm, Ashar Grosir Parfum, dan PC FKMA Jakarta.", en: "LexCorpus Law Firm, Ashar Grosir Parfum, and PC FKMA Jakarta." },
            { q: "testimony client tentang wisnu", id: "Hasil nyata: pengurangan error 70% dan peningkatan efisiensi tim hingga 60%.", en: "Real results: 70% error reduction and 60% team efficiency improvement." },
            { q: "portfolio wisnu impressive", id: "Sangat! 3 website production, leadership di 3 organisasi, dan 6 sertifikasi sebagai mahasiswa baru.", en: "Very! 3 production websites, leadership in 3 organizations, and 6 certifications as a freshman." },
            { q: "impact metric wisnu", id: "70% Manual error reduction, 60% Response improvement, 15,000+ Partners served.", en: "70% Manual error reduction, 60% Response improvement, 15,000+ Partners served." },
            { q: "ranking kelas wisnu", id: "Fokus utamanya adalah quality work dan practical skills yang teruji di industri.", en: "His primary focus is quality work and practical skills tested in the industry." },
            { q: "recommendation dari siapa", id: "Dapat dicek di LinkedIn-nya untuk rekomendasi profesional dari rekan kerja dan organisasi.", en: "Check his LinkedIn for professional recommendations from colleagues and organizations." },
            { q: "rating kerja wisnu", id: "Sangat tinggi di mata klien karena dedikasi dan kualitas kode production yang dia hasilkan.", en: "Very high in the eyes of clients due to his dedication and the production code quality he produces." }
        ]
    },
    {
        name: "CONTACT",
        items: [
            { q: "cara contact wisnu", id: "Email: wisnualfian117@gmail.com, WhatsApp: +62 813-9488-2490, atau Instagram: @wshnn_.", en: "Email: wisnualfian117@gmail.com, WhatsApp: +62 813-9488-2490, or Instagram: @wshnn_." },
            { q: "wisnu fast response", id: "Kemungkinan besar iya untuk urusan profesional, karena komunikasi adalah prioritas utamanya.", en: "Most likely yes for professional matters, as communication is his top priority." },
            { q: "linkedin wisnu apa", id: "linkedin.com/in/wisnu-alfian-nur-ashar-ba60a1310", en: "linkedin.com/in/wisnu-alfian-nur-ashar-ba60a1310" },
            { q: "instagram wisnu apa", id: "@wshnn_ - instagram.com/wshnn_", en: "@wshnn_ - instagram.com/wshnn_" },
            { q: "github wisnu apa", id: "github.com/wi5nuu - untuk melihat repositori kode dan kontribusinya.", en: "github.com/wi5nuu - to see his code repositories and contributions." },
            { q: "wisnu available untuk project", id: "Hubungi langsung via email atau WhatsApp untuk diskusi ketersediaan project.", en: "Contact directly via email or WhatsApp to discuss project availability." },
            { q: "rate wisnu per project", id: "Tidak dipublikasikan secara umum, diskusikan langsung sesuai scope dan kompleksitas project.", en: "Not public, discuss directly depending on the scope and complexity of the project." },
            { q: "wisnu terima project apa aja", id: "Full-stack web, e-commerce, CMS, digital transformation, dan chatbot solutions.", en: "Full-stack web, e-commerce, CMS, digital transformation, and chatbot solutions." },
            { q: "minimum project size", id: "Fleksibel berdasarkan value dan potensi impact dari project tersebut.", en: "Flexible based on the value and potential impact of the project." },
            { q: "wisnu kerja sama international client", id: "Sangat mampu dengan global tech stack dan kemampuan bahasa Inggris yang baik.", en: "Very capable with a global tech stack and good English skills." }
        ]
    },
    {
        name: "OPINION",
        items: [
            { q: "wisnu lebih suka frontend atau backend", id: "Full-stack! Dia mahir di frontend (Tailwind) maupun backend (Supabase/PostgreSQL).", en: "Full-stack! He's proficient in both frontend (Tailwind) and backend (Supabase/PostgreSQL)." },
            { q: "next js atau react biasa", id: "Next.js! Karena fitur SSR, routing, dan optimasi performanya yang superior.", en: "Next.js! For its superior SSR, routing, and performance optimization features." },
            { q: "tailwind atau bootstrap", id: "Tailwind CSS! Menjadi pilihan utama di semua project production-nya.", en: "Tailwind CSS! His primary choice in all production projects." },
            { q: "vercel atau netlify", id: "Vercel - sangat optimal untuk mendiploy project berbasis Next.js.", en: "Vercel - highly optimal for deploying Next.js-based projects." },
            { q: "typescript atau javascript", id: "TypeScript! Memberikan tingkat keamanan kode yang lebih tinggi untuk project skala besar.", en: "TypeScript! Providing a higher level of code safety for large-scale projects." },
            { q: "supabase atau firebase", id: "Supabase - dipilih karena kekuatan PostgreSQL and modern API-nya.", en: "Supabase - chosen for PostgreSQL's power and its modern API." },
            { q: "rest api atau graphql", id: "Menyesuaikan kebutuhan project, namun saat ini sering menggunakan REST via Supabase.", en: "Depends on project needs, but currently often uses REST via Supabase." },
            { q: "wisnu prefer library atau framework", id: "Framework (Next.js) untuk struktur dan konvensi yang lebih tertata.", en: "Framework (Next.js) for structured and organized conventions." },
            { q: "sql atau nosql", id: "SQL (PostgreSQL) melalui Supabase untuk integritas data yang kuat.", en: "SQL (PostgreSQL) via Supabase for strong data integrity." },
            { q: "approach wisnu code first", id: "Seimbang antara technical architecture dan user experience yang baik.", en: "Balanced between technical architecture and a good user experience." }
        ]
    },
    {
        name: "CHALLENGE",
        items: [
            { q: "challenge terbesar wisnu", id: "Mentransformasi bisnis tradisional keluarga menjadi platform digital modern.", en: "Transforming a traditional family business into a modern digital platform." },
            { q: "bug paling sulit yang wisnu solve", id: "Mengelola persistensi data dan performa untuk 15,000+ pengguna di platform e-commerce.", en: "Managing data persistence and performance for 15,000+ e-commerce platform users." },
            { q: "wisnu handle pressure", id: "Sangat baik! Terbiasa multitasking antara kuliah, organisasi, dan project profesional.", en: "Very well! Used to multitasking between studies, organizations, and professional projects." },
            { q: "kegagalan terbesar wisnu", id: "Baginya setiap kegagalan adalah pelajaran untuk menjadi developer yang lebih baik lagi.", en: "For him, every failure is a lesson to become a better developer." },
            { q: "pelajaran penting wisnu", id: "Pengalaman di lapangan jauh lebih berharga daripada sekedar teori di kelas.", en: "Real-world experience is far more valuable than just classroom theory." },
            { q: "wisnu prefer solo atau team", id: "Mampu keduanya - handle solo project (Ashar Grosir) maupun tim besar di organisasi.", en: "Capable of both - handling solo projects (Ashar Grosir) and big organizational teams." },
            { q: "dealbreaker wisnu dalam project", id: "Komunikasi yang buruk dan persyaratan project yang tidak etis.", en: "Poor communication and unethical project requirements." },
            { q: "wisnu workaholic", id: "Sepertinya iya, terlihat dari banyaknya project dan tanggung jawab yang ia pikul sekaligus!", en: "Seems so, judging by the many projects and responsibilities he takes on simultaneously!" },
            { q: "burnout pernah", id: "Selalu menyeimbangkan diri dengan kegiatan organisasi agar tetap segar melahirkan inovasi baru.", en: "Always balances himself with organizational activities to stay fresh for new innovations." },
            { q: "recovery strategy dari stress", id: "Mengganti fokus dari coding ke manajemen event atau diskusi komunitas.", en: "Switching focus from coding to event management or community discussions." }
        ]
    },
    {
        name: "TECHNICAL DEEP",
        items: [
            { q: "code style wisnu", id: "Clean code, modular architecture, dan menjunjung tinggi type-safety dengan TypeScript.", en: "Clean code, modular architecture, and upholding type-safety with TypeScript." },
            { q: "naming convention wisnu", id: "Standard camelCase untuk variabel dan PascalCase untuk komponen React.", en: "Standard camelCase for variables and PascalCase for React components." },
            { q: "wisnu pakai linter", id: "ESLint dan Prettier untuk memastikan kualitas dan konsistensi kode di setiap project.", en: "ESLint and Prettier to ensure code quality and consistency in every project." },
            { q: "state management wisnu", id: "Menggunakan React Server Components dan Hooks, serta Context API untuk state global.", en: "Using React Server Components and Hooks, plus Context API for global state." },
            { q: "routing di next js wisnu", id: "Menguasai Next.js App Router terbaru untuk manajemen navigasi yang efisien.", en: "Mastering the latest Next.js App Router for efficient navigation management." },
            { q: "authentication wisnu", id: "Sering mengimplementasikan Supabase Auth dengan Role-Based Access Control (RBAC).", en: "Often implementing Supabase Auth with Role-Based Access Control (RBAC)." },
            { q: "api design wisnu", id: "RESTful API mengikuti best practices untuk performa dan keamanan data.", en: "RESTful API following best practices for performance and data security." },
            { q: "database schema design", id: "Desain relasional yang ternormalisasi untuk menjamin integritas data di PostgreSQL.", en: "Normalized relational design to ensure data integrity in PostgreSQL." },
            { q: "performance optimization", id: "Optimasi gambar, SSR/ISR di Next.js, dan query database yang efisien.", en: "Image optimization, SSR/ISR in Next.js, and efficient database queries." },
            { q: "security measures", id: "RBAC, Row Level Security di Supabase, dan validasi input yang ketat.", en: "RBAC, Row Level Security in Supabase, and strict input validation." }
        ]
    },
    {
        name: "ADVICE",
        items: [
            { q: "tips wisnu buat pemula", id: "Langsung terjun ke project nyata! Belajar sambil membangun sesuatu yang bermanfaat.", en: "Dive straight into real projects! Learn while building something useful." },
            { q: "framework recommend buat pemula", id: "Next.js sangat direkomendasikan karena fitur lengkap dan komunitas yang besar.", en: "Next.js is highly recommended for its complete features and large community." },
            { q: "cara wisnu belajar tech baru", id: "Dokumentasi resmi + Project praktis + Sertifikasi profesional.", en: "Official docs + Practical projects + Professional certifications." },
            { q: "wisnu recommend bootcamp", id: "Kombinasi antara pendidikan formal dan eksplorasi mandiri adalah yang terbaik.", en: "A combination of formal education & self-exploration is best." },
            { q: "platform belajar suggest", id: "HackerRank, HubSpot Academy, Google Coursera, dan tentunya dokumentasi resmi teknologi.", en: "HackerRank, HubSpot Academy, Google Coursera, and of course, official tech docs." },
            { q: "mistake yang harus dihindari", id: "Terjebak di tutorial hell tanpa pernah membangun project nyata secara mandiri.", en: "Getting stuck in tutorial hell without ever building real projects independently." },
            { q: "skill paling penting", id: "Keseimbangan antara Technical Excellence dan Soft Skills (komunikasi & teamwork).", en: "A balance between Technical Excellence and Soft Skills (communication & teamwork)." },
            { q: "career path advice", id: "Bangun portfolio sedini mungkin dan ambil sertifikasi yang relevan dengan industri.", en: "Build a portfolio as early as possible and take industry-relevant certifications." },
            { q: "gimana balance coding dan life", id: "Jadikan hobi lain sebagai penyeimbang agar tidak jenuh dengan rutinitas coding.", en: "Use other hobbies as a balancer so as not to get bored with coding routines." },
            { q: "resource favorit wisnu", id: "Dokumentasi resmi React/Next.js dan platform sertifikasi profesional.", en: "Official React/Next.js documentation and professional certification platforms." }
        ]
    },
    {
        name: "META",
        items: [
            { q: "definisi sukses wisnu", id: "Memberikan dampak nyata melalui solusi teknologi yang memecahkan masalah orang banyak.", en: "Delivering real impact through technology solutions that solve people's problems." },
            { q: "long term vision", id: "Menjadi ahli IT yang memimpin inovasi digital di berbagai sektor industri.", en: "Becoming an IT expert leading digital innovation across various industrial sectors." },
            { q: "innovation philosophy", id: "Inovasi praktis - teknologi modern harus bisa diimplementasikan untuk solusi bisnis nyata.", en: "Practical innovation - modern technology should be implemented for real business solutions." }
        ]
    }
];

categories.forEach(cat => {
    cat.items.forEach(item => {
        const key = item.q.toLowerCase();
        registry[key] = { id: item.id, en: item.en };
    });
});

const output = `
export const SocialRegistry: Record<string, { id: string; en: string }> = ${JSON.stringify(registry, null, 4)};
`;

fs.writeFileSync(registryPath, output);
console.log("✅ socialRegistry.ts updated with full Wisnu data batch.");
