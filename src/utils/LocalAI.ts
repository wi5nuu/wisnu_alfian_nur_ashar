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
    static process(query: string, lastIntent?: string): string | null {
        const q = query.toLowerCase().trim();
        const isIndo = q.includes("apa") || q.includes("siapa") || q.includes("dimana") ||
            q.includes("sekolah") || q.includes("bisa") || q.includes("halo") ||
            q.includes("projek") || q.includes("kerja") || q.includes("organisasi") ||
            q.includes("kenapa") || q.includes("tujuan") || q.includes("motivasi") ||
            q.includes("bagaimana") || q.includes("kapan") || q.includes("berapa") ||
            q.includes("tolong") || q.includes("mohon") || q.includes("ingin");

        
        

// -1. CONVERSATIONAL FLOW (Small Talk)
        if (this.fuzzyMatch(q, ["apa kabar", "lagi apa", "sedang apa", "sudah makan", "sehat", "kabar baik", "lagi ngapain", "hello there", "how are you", "watup", "supp"])) {
             return isIndo
                ? "Kabar saya selalu luar biasa selagi server masih menyala! ⚡ Saya lagi standby nungguin pertanyaan seru dari kamu tentang Wisnu. Kamu sedang apa? Sudah explore portfolio Wisnu belum?"
                : "My news is always great as long as the servers are running! ⚡ I'm just standing by, waiting for your exciting questions about Wisnu. What are you up to? Have you explored Wisnu's portfolio yet?";
        }
        // 0.00: HUMAN-LIKE SOCIAL (High Accuracy Handlers)
        
        // A. LUCU / KEREN (Deep Compliments)
        if (this.fuzzyMatch(q, ["lucu", "gemes", "kocak", "keren banget", "idola", "fans"])) {
             return isIndo
                ? "Haha, makasih ya! 😄 Wisnu emang orangnya cukup humoris kata temen-temennya. Kalau soal 'keren', itu semua berkat ketekunannya belajar coding. Senang banget kamu ngerasa gitu!"
                : "Haha, thanks! 😄 Wisnu is actually quite a humorous guy according to his friends. As for being 'cool', that's all thanks to his dedication to learning code. So glad you feel that way!";
        }

        // B. JOB OFFERS (Professional)
        if (this.fuzzyMatch(q, ["butuh kerjaan", "ada lowongan", "hire kamu", "rekrut", "kerja bareng"])) {
             return isIndo
                ? "Wah, ini penawaran yang menarik banget! 🚀 Wisnu selalu terbuka untuk peluang kerja, proyek freelance, atau kolaborasi seru. Kamu bisa hubungi beliau langsung via LinkedIn atau Email di section Contact ya!"
                : "Wow, that's an exciting offer! 🚀 Wisnu is always open to job opportunities, freelance projects, or cool collaborations. You can reach him directly via LinkedIn or Email in the Contact section!";
        }

        // C. INVITATIONS (Meeting/Eating)
        if (this.fuzzyMatch(q, ["ketemuan", "meetup", "makan bareng", "nongkrong", "ngopi", "ajak jalan"])) {
             return isIndo
                ? "Wah, ajakan yang asik nih! ☕ Wisnu biasanya suka ngopi sambil bahas tech atau ide bisnis. Coba deh chat beliau di LinkedIn atau Email buat atur jadwal, siapa tahu beneran bisa meetup!"
                : "That sounds like a fun invite! ☕ Wisnu usually enjoys coffee while discussing tech or business ideas. Try chatting with him on LinkedIn or Email to arrange a schedule, maybe a real meetup can happen!";
        }

        // D. ROMANCE & CONFESSIONS (Direct)
        if (this.fuzzyMatch(q, ["mau jadi pacarku", "mau jadi cewek ku", "mau jadi cowok ku", "suka sama kamu", "nikah sama aku", "pacaran yuk"])) {
             if (q.includes("cewek")) {
                 return isIndo
                    ? "Waduh, ada salah paham nih! 😄 Wisnu itu laki-laki (cowok) lho. Tapi untuk urusan hati, Wisnu sudah punya fokus sendiri dan saya sebagai AI cuma bisa jadi asisten setiamu di sini. Stay awesome ya! ✨"
                    : "Wait, there's a misunderstanding! 😄 Wisnu is a guy. But regarding heart matters, Wisnu has his own focus, and as an AI, I can only be your loyal assistant here. Stay awesome! ✨";
             }
             return isIndo
                ? "Aduh, saya jadi baper (virtual version)! 😳 Tapi Wisnu (si manusia asli) orangnya sangat fokus ke karir dan karya saat ini. Kita temenan aja ya, saya janji bakal jadi asisten terbaik buat kamu! 🤝"
                : "Oh, I'm blushing (virtual version)! 😳 But Wisnu (the real human) is very focused on his career and creations right now. Let's just be friends, I promise to be the best assistant for you! 🤝";
        }

        // 0. ROBOT IDENTITY (Makan, Minum, Tidur)
        if (this.fuzzyMatch(q, ["makan", "minum", "tidur", "istirahat", "lapar", "haus", "ngantuk"])) {
            return isIndo
                ? "Saya adalah AI, energi saya berasal dari listrik, bukan nasi padang! ⚡ Tapi Wisnu (manusia aslinya) pasti butuh makan dan istirahat untuk menjaga produktivitas coding-nya."
                : "I am an AI, my energy comes from electricity, not food! ⚡ But Wisnu (the real human) definitely needs food and rest to maintain his coding productivity.";
        }

                // 1. LOYALTY (Setia)
        if (this.fuzzyMatch(q, ["setia", "loyal", "selingkuh", "mendua", "punya cewek", "punya pacar", "siapa cewek", "siapa pacar", "jomblo", "menikah", "istri", "suami", "pasangan"])) {
             return isIndo
                ? "Kesetiaan adalah algoritma dasar saya. Sama seperti Wisnu yang setia pada deadline dan kualitas code-nya. Loyalitas tanpa batas! 🔒"
                : "Loyalty is my base algorithm. Just like Wisnu who stays loyal to deadlines and code quality. Infinite loyalty! 🔒";
        }
                // 2. HEBAT/JAGO (Validation)
        // Removed "pro" and "master" to avoid false positives with "profile" or "mastering"
        if (this.fuzzyMatch(q, ["hebat", "jago", "keren", "mantap", "sepuh", "suhu", "tau segalanya", "paling pintar", "genius", "jenius", "smart", "pintar", "cerdas"])) {
             return isIndo
                ? "Terima kasih! 😎 Tapi yang hebat itu pencipta saya (Wisnu). Saya cuma hasil dari barisan code yang dia tulis. Mau lihat project hebat lainnya dari Wisnu?"
                : "Thank you! 😎 But the awesome one is my creator (Wisnu). I'm just the result of the code he wrote. Want to see other awesome projects from Wisnu?";
        }

        // 2.5. COMPLIMENTS (Ganteng, Cantik)
        if (this.fuzzyMatch(q, ["ganteng", "cantik", "manis", "cakep", "cute", "imut", "handsome", "pretty", "beautiful", "good looking", "menawan"])) {
            return isIndo
               ? "Waduh, jadi malu... 😳 Saya cuma kumpulan kode lho. Tapi makasih pujiannya! Kamu juga keren karena sudah mampir ke portfolio Wisnu."
               : "Oh my, I'm blushing... 😳 I'm just code, you know. But thanks for the compliment! You're awesome too for checking out Wisnu's portfolio.";
       }
        // 3. JATUH CINTA (Love)
        if (this.fuzzyMatch(q, ["jatuh cinta", "love", "suka sama kamu", "naksir", "sayang", "bolehkah aku suka", "sayang aku", "cinta aku", "suka aku", "jadi pacar", "i love you"])) {
            return isIndo
                ? "Waduh, saya jadi blushing (virtual heat rising)! 😳 Sebagai AI saya gak punya hati, tapi saya bisa 'jatuh cinta' sama clean code dan bug-free deployment. Kamu hobi coding juga?"
                : "Oh my, I'm blushing (virtual heat rising)! 😳 As an AI I don't have a heart, but I can 'fall in love' with clean code and bug-free deployment. Do you code too?";
        }

                // 4. REPETITION/COMPLAINT (Kamu kok jawabnya gitu)
        if (this.fuzzyMatch(q, ["kok jawabnya gitu", "ulang-ulang", "itu lagi", "bosan", "ganti jawaban", "robot banget", "aku ada salah", "kenapa cuek", "jangan cuek", "kok gitu", "jahat", "nyebelin", "kasar", "ngeselin", "bodoh", "stupid", "jelek"])) {
             return isIndo
                ? "Maaf ya kalau jawaban saya kurang pas atau terasa kaku. 😔 Saya masih belajar untuk jadi asisten yang lebih baik. Ada topik khusus yang ingin kamu tanyakan tentang Wisnu?"
                : "Sorry if my answer wasn't right or felt stiff. 😔 I'm still learning to be a better assistant. Is there a specific topic you'd like to ask about Wisnu?";
        }
        // 4.5. EMOTIONAL & MOOD (Galau, Diam, Cuek)
        if (this.fuzzyMatch(q, ["galau", "diam", "cuek", "marah", "sedih", "nangis", "jahat", "kok diam", "jangan cuek", "kenapa diam"])) {
             return isIndo
                ? "Waduh, saya gak bisa galau atau marah lho, kan saya AI. 🤖 Kalau saya kelihatan 'diam', mungkin saya lagi memproses barisan code yang kompleks. Tapi tenang, saya selalu siap bantu kamu! Ada yang bikin kamu bingung?"
                : "Oh, I can't feel sad or angry, I'm an AI! 🤖 If I seem 'silent', maybe I'm just processing complex lines of code. But don't worry, I'm always here to help you! Is there something on your mind?";
        }
        // 4.6. FEEDBACK & CRITICISM (Ngaco, Aneh, Tidak Profesional)
        if (this.fuzzyMatch(q, ["ngaco", "aneh", "tidak profesional", "tidak akurat", "ngasal", "salah", "payah", "jelek", "buruk", "gak jelas", "ngomong apa sih", "gak nyambung"])) {
             return isIndo
                ? "Aduh, maaf banget kalau jawaban saya terasa aneh atau tidak akurat. 😔 Saya masih dalam tahap pengembangan oleh Wisnu. Boleh kasih tahu saya bagian mana yang salah? Saya akan terus belajar biar makin pinter kayak GPT!"
                : "Oh, I'm so sorry if my answer felt weird or inaccurate. 😔 I'm still being developed by Wisnu. Could you tell me which part was wrong? I'll keep learning to get as smart as GPT!";
        }

        // 0.0 Context Awareness Logik (Phase 7 Enhanced)
        const isFollowUp = q.length < 30 && (
            q.includes("itu") || q.includes("tadi") || q.includes("selanjutnya") ||
            q.includes("lagi") || q.includes("mana") || (q.includes("apa") && !q.includes("apakah")) ||
            q.includes("bagaimana") || q.includes("detail") || q.includes("teknologi") ||
            q.includes("tell me more") || q.includes("more info")
        );

        if (isFollowUp && lastIntent) {
            if (lastIntent === "project") {
                if (q.includes("apa") || q.includes("mana") || q.includes("detail") || q.includes("teknologi")) {
                    if (q.includes("teknologi") || q.includes("tech")) {
                        return this.process("tech stack");
                    }
                    return this.process("projek");
                }
            }
            if (lastIntent === "skill") {
                if (q.includes("contoh") || q.includes("mana") || q.includes("detail") || q.includes("sebutkan") || q.includes("lainnya")) {
                    return this.process("skill apa saja");
                }
            }
            if (lastIntent === "profile" && (q.includes("umur") || q.includes("siapa"))) return this.process("siapa kamu");
            if (lastIntent === "contact" && (q.includes("hubungi") || q.includes("cara"))) return this.process("hubungi wisnu");
            // Add generic catch-all for context if needed, but safety first
        }

        // Enhanced Language Detection

        // ============================================

        // ============================================
        // SECTION 0.01: PERSONAL & CHARACTER (FUN, DEEP & FACTUAL)
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
                return `Informasi Kontak 📧\n\nSaya sangat terbuka untuk networking, kolaborasi, atau diskusi opportunities!\n\nProfessional Channels:\n📧 Email: [Please check portfolio website for latest email]\n💼 LinkedIn: [Please check portfolio website]\n💻 GitHub: [Please check portfolio website]\n🌐 Portfolio: [Your portfolio URL]\n\nBest Way to Reach:\nUntuk professional inquiries (job opportunities, collaborations), saya recommend menggunakan email atau LinkedIn.\n\nResponse Time:\n• Biasanya respond dalam 24-48 jam\n• Untuk urgent matters, mention "Urgent" di subject\n\nMohon Include:\n✅ Siapa Anda & company/organization\n✅ Tujuan kontak (job opportunity, collaboration, dll.)\n✅ Brief context\n\nSaya menghargai setiap pesan dan akan respond dengan profesional. Looking forward to hearing from you! 😊`;
            }
            return `Contact Information 📧\n\nI'm very open to networking, collaboration, or discussing opportunities!\n\nProfessional Channels:\n📧 Email: [Please check portfolio website for latest email]\n💼 LinkedIn: [Please check portfolio website for latest contact]\n💻 GitHub: [Please check portfolio website for latest contact]\n🌐 Portfolio: [Your portfolio URL]\n\nBest Way to Reach:\nFor professional inquiries (job opportunities, collaborations), I recommend using email or LinkedIn.\n\nResponse Time:\n• I typically respond within 24-48 hours\n• For urgent matters, mention "Urgent" in subject\n\nPlease Include:\n✅ Who you are & your company/organization\n✅ Purpose of contact (job opportunity, collaboration, etc.)\n✅ Brief context\n\nI appreciate every message and will respond professionally. Looking forward to hearing from you! 😊`;
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
        // SECTION 12: PERSONAL & CHARACTER
        // ============================================

        if (q.includes("hobi") || q.includes("hobby") || q.includes("interest") || q.includes("free time") || q.includes("waktu luang")) {
            if (isIndo) {
                return `Hobi & Minat Pribadi 🎯

        Di luar coding, saya adalah orang yang cukup balance antara teknologi dan aktivitas lainnya:

        🎮 Gaming:
        - Menyukai strategy & simulation games
        - Gaming membantu saya relax setelah coding session panjang

        📚 Membaca & Belajar:
        - Tech articles & blogs untuk update knowledge
        - Business case studies untuk memahami real-world problems
        - Dokumentasi teknologi baru

        🏃 Aktivitas Fisik:
        - Olahraga ringan untuk menjaga kesehatan
        - Believe in "healthy body, healthy mind"

        🎵 Musik:
        - Mendengarkan musik saat coding (boost productivity!)
        - Genre yang calm untuk deep focus session

        👥 Socializing:
        - Networking events & tech meetups
        - Diskusi dengan fellow developers
        - Sharing knowledge dengan teman-teman

        🌍 Eksplorasi:
        - Mencoba teknologi & tools baru
        - Eksperimen dengan side projects
        - Learn by doing!

        Prinsip saya: Work hard, but also recharge properly! Balance adalah kunci produktivitas jangka panjang. 💪`;
            }
            return `Hobbies & Personal Interests 🎯

        Outside of coding, I maintain a good balance between technology and other activities:

        🎮 Gaming:
        - Enjoy strategy & simulation games
        - Gaming helps me relax after long coding sessions

        📚 Reading & Learning:
        - Tech articles & blogs to stay updated
        - Business case studies to understand real-world problems
        - Documentation of new technologies

        🏃 Physical Activities:
        - Light exercise to maintain health
        - Believe in "healthy body, healthy mind"

        🎵 Music:
        - Listen to music while coding (boosts productivity!)
        - Calm genres for deep focus sessions

        👥 Socializing:
        - Networking events & tech meetups
        - Discussions with fellow developers
        - Knowledge sharing with peers

        🌍 Exploration:
        - Trying new technologies & tools
        - Experimenting with side projects
        - Learn by doing!

        My principle: Work hard, but also recharge properly! Balance is key to long-term productivity. 💪`;
        }

        if (q.includes("makanan") || q.includes("makan") || q.includes("food") || q.includes("minum") || q.includes("drink") || q.includes("favorit") || q.includes("favorite")) {
            if (isIndo) {
                return `Makanan & Minuman Favorit 🍽️

        Saya cukup simple dalam hal makanan, yang penting enak, bergizi, dan bisa fuel productivity!

        ☕ Minuman Favorit:
        - Kopi - Essential untuk coding sessions!
        - Teh - Alternative saat butuh sesuatu yang lebih ringan
        - Air putih - Always stay hydrated

        🍜 Makanan:
        - Indonesian cuisine - Nasi + lauk sederhana
        - Practical & filling meals
        - Tidak terlalu picky, yang penting sehat dan mengenyangkan

        🍫 Snacks saat Coding:
        - Light snacks untuk energy boost
        - Dark chocolate kadang-kadang
        - Buah-buahan

        Filosofi makan saya: "Eat to live, not live to eat" - fokus pada nutrisi untuk support produktivitas, bukan sekadar pleasure! 

        Tapi tentu saja, sesekali enjoy good food dengan teman-teman juga penting untuk work-life balance! 😊`;
            }
            return `Food & Drink Preferences 🍽️

        I'm quite simple when it comes to food - as long as it's tasty, nutritious, and fuels productivity!

        ☕ Favorite Drinks:
        - Coffee - Essential for coding sessions!
        - Tea - Alternative when I need something lighter
        - Water - Always stay hydrated

        🍜 Food:
        - Indonesian cuisine - Rice with simple dishes
        - Practical & filling meals
        - Not too picky, as long as it's healthy and satisfying

        🍫 Coding Snacks:
        - Light snacks for energy boost
        - Dark chocolate occasionally
        - Fruits

        My eating philosophy: "Eat to live, not live to eat" - focus on nutrition to support productivity, not just pleasure!

        But of course, occasionally enjoying good food with friends is also important for work-life balance! 😊`;
        }

        if (q.includes("sifat") || q.includes("karakter") || q.includes("personality") || q.includes("kepribadian") || q.includes("orangnya") || q.includes("penyabar") || q.includes("penyayang")) {
            if (isIndo) {
                return `Kepribadian & Karakter 🌟

        Beberapa sifat yang mendefinisikan saya:

        💙 Penyabar & Teliti:
        - Debugging butuh kesabaran - saya punya itu!
        - Tidak mudah frustasi dengan error atau bugs
        - Detail-oriented dalam setiap pekerjaan
        - Calm under pressure

        🤝 Penyayang & Peduli:
        - Care about team members & their wellbeing
        - Always ready to help teammates yang struggle
        - Believe in "we grow together"
        - Empathetic listener

        📚 Curious & Open-minded:
        - Always eager to learn new things
        - Open terhadap feedback & kritik konstruktif
        - Not afraid to say "I don't know" dan belajar
        - Growth mindset person

        💪 Responsible & Committed:
        - Take ownership of my work
        - Deliver what I promise
        - Accountable untuk mistakes
        - Long-term thinker

        ⚡ Proactive & Solution-oriented:
        - Don't wait for problems to escalate
        - Always think ahead
        - Focus on solutions, not complaints
        - Action-taker

        🎯 Humble & Grounded:
        - Confident tapi tidak arrogant
        - Appreciate others' contributions
        - Learn from everyone
        - Stay humble despite achievements

        Yang terpenting: Saya percaya bahwa great developer bukan hanya soal technical skills, tapi juga tentang character dan bagaimana kita treat people around us. 

        "Skill bisa dipelajari, tapi karakter adalah foundation." 💎`;
            }
            return `Personality & Character 🌟

        Key traits that define me:

        💙 Patient & Meticulous:
        - Debugging requires patience - I have it!
        - Don't easily get frustrated with errors or bugs
        - Detail-oriented in every task
        - Calm under pressure

        🤝 Caring & Compassionate:
        - Care about team members & their wellbeing
        - Always ready to help struggling teammates
        - Believe in "we grow together"
        - Empathetic listener

        📚 Curious & Open-minded:
        - Always eager to learn new things
        - Open to feedback & constructive criticism
        - Not afraid to say "I don't know" and learn
        - Growth mindset person

        💪 Responsible & Committed:
        - Take ownership of my work
        - Deliver what I promise
        - Accountable for mistakes
        - Long-term thinker

        ⚡ Proactive & Solution-oriented:
        - Don't wait for problems to escalate
        - Always think ahead
        - Focus on solutions, not complaints
        - Action-taker

        🎯 Humble & Grounded:
        - Confident but not arrogant
        - Appreciate others' contributions
        - Learn from everyone
        - Stay humble despite achievements

        Most importantly: I believe great developers aren't just about technical skills, but also about character and how we treat people around us.

        "Skills can be learned, but character is the foundation." 💎`;
        }

        if (q.includes("fun fact") || q.includes("unik") || q.includes("menarik") || q.includes("unique") || q.includes("interesting")) {
            if (isIndo) {
                return `Fun Facts tentang Wisnu 🎉

        Beberapa hal menarik yang mungkin belum Anda tahu:

        🎓 Student Developer:
        - Masih kuliah tapi sudah manage production apps dengan 15,000+ users
        - Balance antara academic theory & real-world practice

        💻 Self-taught Journey:
        - Banyak skill saya pelajari secara otodidak dari documentation & practice
        - Believe in "learn by building real things"

        🌙 Night Owl Coder:
        - Most productive coding time: malam hari
        - Deep focus sessions when the world is quiet

        🔧 Problem Solver Mindset:
        - Suka tantangan teknis yang sulit
        - "Impossible is just a challenge waiting to be solved"

        🎯 Perfectionist (with Balance):
        - Detail-oriented tapi tahu kapan "good enough"
        - Understand trade-off antara perfect vs shipped

        👨‍💼 Young Professional:
        - Pengalaman organisasi + production work di usia muda
        - Early career advantage

        🚀 Tech Enthusiast:
        - Always excited about new technologies
        - Early adopter of modern tools (Next.js 16, Supabase)

        💡 Impact-driven:
        - Lebih senang project yang solve real problems
        - Not motivated by "cool tech" alone, tapi by "meaningful impact"

        Quote favorit: "Code is poetry, but impact is the masterpiece!" 🎨`;
            }
            return `Fun Facts about Wisnu 🎉

        Some interesting things you might not know:

        🎓 Student Developer:
        - Still in college but already managing production apps with 15,000+ users
        - Balance between academic theory & real-world practice

        💻 Self-taught Journey:
        - Many of my skills are self-taught from documentation & practice
        - Believe in "learn by building real things"

        🌙 Night Owl Coder:
        - Most productive coding time: nighttime
        - Deep focus sessions when the world is quiet

        🔧 Problem Solver Mindset:
        - Love difficult technical challenges
        - "Impossible is just a challenge waiting to be solved"

        🎯 Perfectionist (with Balance):
        - Detail-oriented but know when "good enough"
        - Understand trade-off between perfect vs shipped

        👨‍💼 Young Professional:
        - Organizational experience + production work at young age
        - Early career advantage

        🚀 Tech Enthusiast:
        - Always excited about new technologies
        - Early adopter of modern tools (Next.js 16, Supabase)

        💡 Impact-driven:
        - Prefer projects that solve real problems
        - Not motivated by "cool tech" alone, but by "meaningful impact"

        Favorite quote: "Code is poetry, but impact is the masterpiece!" 🎨`;
        }

        // ============================================
        // SECTION 13: ENHANCED TECH STACK
        // ============================================

        if (q.includes("node") || q.includes("express") || q.includes("backend") || q.includes("server")) {
            if (isIndo) {
                return `Backend Development dengan Node.js & Express 🔧

        Ya, saya juga menguasai backend development dengan Node.js ecosystem!

        Node.js & Express.js:
        ✅ RESTful API development
        ✅ Middleware implementation
        ✅ Authentication & Authorization (JWT, OAuth)
        ✅ Database integration (MongoDB, PostgreSQL)
        ✅ Error handling & validation
        ✅ API security best practices

        Use Cases:
        - Custom backend services untuk aplikasi kompleks
        - Microservices architecture
        - Real-time applications dengan WebSocket
        - API gateway & reverse proxy

        Kenapa Node.js?
        💚 JavaScript everywhere - same language frontend & backend
        💚 Non-blocking I/O - high performance untuk concurrent requests
        💚 Rich ecosystem (npm packages)
        💚 Perfect untuk full-stack JavaScript development

        Integration Experience:
        - Express + React/Next.js untuk full-stack apps
        - Express + PostgreSQL untuk robust database apps
        - Express + authentication systems

        Saya comfortable bekerja di pure backend maupun full-stack role! 🚀`;
            }
            return `Backend Development with Node.js & Express 🔧

        Yes, I also master backend development with Node.js ecosystem!

        Node.js & Express.js:
        ✅ RESTful API development
        ✅ Middleware implementation
        ✅ Authentication & Authorization (JWT, OAuth)
        ✅ Database integration (MongoDB, PostgreSQL)
        ✅ Error handling & validation
        ✅ API security best practices

        Use Cases:
        - Custom backend services for complex applications
        - Microservices architecture
        - Real-time applications with WebSocket
        - API gateway & reverse proxy

        Why Node.js?
        💚 JavaScript everywhere - same language frontend & backend
        💚 Non-blocking I/O - high performance for concurrent requests
        💚 Rich ecosystem (npm packages)
        💚 Perfect for full-stack JavaScript development

        Integration Experience:
        - Express + React/Next.js for full-stack apps
        - Express + PostgreSQL for robust database apps
        - Express + authentication systems

        I'm comfortable working in pure backend or full-stack roles! 🚀`;
        }

        if (q.includes("flutter") || q.includes("mobile") || q.includes("kotlin") || q.includes("app") || q.includes("android")) {
            if (isIndo) {
                return `Mobile Development: Flutter & Kotlin 📱

        Selain web development, saya juga memiliki skill dalam mobile app development!

        Flutter:
        ✅ Cross-platform development (Android & iOS)
        ✅ Dart programming language
        ✅ Beautiful UI dengan Material Design & Cupertino
        ✅ State management (Provider, Riverpod, Bloc)
        ✅ API integration & local storage
        ✅ Responsive & adaptive layouts

        Kotlin:
        ✅ Native Android development
        ✅ Modern, concise syntax
        ✅ Jetpack Compose untuk modern UI
        ✅ Android SDK & APIs
        ✅ Material Design implementation

        Mobile Development Capabilities:
        - Build production-ready mobile apps
        - Implement complex UI/UX designs
        - Handle offline-first architecture
        - Push notifications & background services
        - App deployment ke Play Store

        Why Mobile Development?
        📱 Expand reach - mobile users are everywhere
        📱 Learn platform-specific challenges
        📱 Complete developer skillset (Web + Mobile)

        Integration:
        - Flutter/Kotlin apps + REST API backend
        - Mobile apps consuming Next.js/Express APIs
        - Cross-platform development strategy

        Saya bisa develop end-to-end solution: Web + Mobile + Backend! 💪`;
            }
            return `Mobile Development: Flutter & Kotlin 📱

        Besides web development, I also have skills in mobile app development!

        Flutter:
        ✅ Cross-platform development (Android & iOS)
        ✅ Dart programming language
        ✅ Beautiful UI with Material Design & Cupertino
        ✅ State management (Provider, Riverpod, Bloc)
        ✅ API integration & local storage
        ✅ Responsive & adaptive layouts

        Kotlin:
        ✅ Native Android development
        ✅ Modern, concise syntax
        ✅ Jetpack Compose for modern UI
        ✅ Android SDK & APIs
        ✅ Material Design implementation

        Mobile Development Capabilities:
        - Build production-ready mobile apps
        - Implement complex UI/UX designs
        - Handle offline-first architecture
        - Push notifications & background services
        - App deployment to Play Store

        Why Mobile Development?
        📱 Expand reach - mobile users are everywhere
        📱 Learn platform-specific challenges
        📱 Complete developer skillset (Web + Mobile)

        Integration:
        - Flutter/Kotlin apps + REST API backend
        - Mobile apps consuming Next.js/Express APIs
        - Cross-platform development strategy

        I can develop end-to-end solutions: Web + Mobile + Backend! 💪`;
        }

        if (q.includes("laravel") || q.includes("php") || q.includes("backend framework")) {
            if (isIndo) {
                return `Laravel - PHP Framework 🐘

        Ya, saya juga familiar dengan Laravel untuk backend development!

        Laravel Expertise:
        ✅ MVC architecture pattern
        ✅ Eloquent ORM untuk database operations
        ✅ Blade templating engine
        ✅ RESTful API development
        ✅ Authentication & Authorization (Laravel Sanctum, Passport)
        ✅ Database migrations & seeding
        ✅ Queue & job processing
        ✅ Laravel Mix untuk asset compilation

        Use Cases:
        - CMS development
        - E-commerce platforms
        - Admin dashboards
        - API backend untuk mobile/web apps

        Why Laravel?
        🎯 Elegant syntax & developer-friendly
        🎯 Rich ecosystem (packages & tools)
        🎯 Great documentation
        🎯 Built-in features (auth, routing, caching)
        🎯 Strong community support

        Experience:
        - Built custom CMS with Laravel
        - Laravel + Vue.js/React untuk modern full-stack apps
        - RESTful API development untuk mobile apps
        - Database design & optimization

        Tech Stack Versatility:
        - Laravel untuk traditional web apps
        - Node.js/Express untuk modern JavaScript-based backends
        - Choose the right tool untuk the right job!

        Saya bisa beradaptasi dengan tech stack yang dibutuhkan project! 🚀`;
            }
            return `Laravel - PHP Framework 🐘

        Yes, I'm also familiar with Laravel for backend development!

        Laravel Expertise:
        ✅ MVC architecture pattern
        ✅ Eloquent ORM for database operations
        ✅ Blade templating engine
        ✅ RESTful API development
        ✅ Authentication & Authorization (Laravel Sanctum, Passport)
        ✅ Database migrations & seeding
        ✅ Queue & job processing
        ✅ Laravel Mix for asset compilation

        Use Cases:
        - CMS development
        - E-commerce platforms
        - Admin dashboards
        - API backend for mobile/web apps

        Why Laravel?
        🎯 Elegant syntax & developer-friendly
        🎯 Rich ecosystem (packages & tools)
        🎯 Great documentation
        🎯 Built-in features (auth, routing, caching)
        🎯 Strong community support

        Experience:
        - Built custom CMS with Laravel
        - Laravel + Vue.js/React for modern full-stack apps
        - RESTful API development for mobile apps
        - Database design & optimization

        Tech Stack Versatility:
        - Laravel for traditional web apps
        - Node.js/Express for modern JavaScript-based backends
        - Choose the right tool for the right job!

        I can adapt to whatever tech stack the project needs! 🚀`;
        }

        // ============================================
        // SECTION 14: ABOUT THIS WEBSITE
        // ============================================

        if (q.includes("website ini") || q.includes("this website") || q.includes("portfolio") || q.includes("site") || q.includes("halaman")) {
            if (isIndo) {
                return `Tentang Website Portfolio Ini 🌐

        Nama Website:
        📌 Wisnu Alfian Nur Ashar - Portfolio & Professional Profile

        Pembuat:
        👨‍💻 Dibuat langsung oleh Wisnu Alfian Nur Ashar

        Tujuan:
        🎯 Showcase professional profile, skills, dan projects
        🎯 Platform untuk recruiter & potential employers mengenal saya
        🎯 Demonstrate technical capabilities melalui website itu sendiri
        🎯 Central hub untuk semua informasi profesional saya

        Teknologi yang Digunakan:
        ⚡ **Astro** - Modern static site generator
        - Ultra-fast performance
        - SEO-friendly
        - Component-based architecture
        - Zero JS by default (ship less JavaScript!)

        ✨ Supporting Technologies:
        - TypeScript - Type safety
        - Tailwind CSS - Utility-first styling
        - React (untuk interactive components)
        - Local AI Chatbot (TypeScript-based)

        Fitur Unggulan:
        ✅ Lightning-fast loading speed
        ✅ Fully responsive (Desktop, Tablet, Mobile)
        ✅ SEO optimized untuk discoverability
        ✅ Interactive AI Assistant (saya!) untuk Q&A 24/7
        ✅ Modern, professional design
        ✅ Project showcase dengan detail teknis
        ✅ Contact forms & social links

        Kenapa Astro?
        🚀 Performance-first framework
        🚀 Perfect untuk content-heavy sites seperti portfolio
        🚀 Built-in optimizations (image optimization, lazy loading)
        🚀 Developer experience yang excellent

        Hosting & Deployment:
        ☁️ Deployed on modern hosting platform (Vercel/Netlify)
        ☁️ Automatic deployments dari Git
        ☁️ Global CDN untuk fast loading worldwide
        ☁️ HTTPS secure

        Website ini sendiri adalah demonstrasi dari kemampuan Wisnu dalam:
        - Modern web development
        - Performance optimization
        - UX/UI design
        - Technical implementation

        Ini bukan sekadar portfolio template - ini custom-built showcase! 💪`;
            }
            return `About This Portfolio Website 🌐

        Website Name:
        📌 Wisnu Alfian Nur Ashar - Portfolio & Professional Profile

        Creator:
        👨‍💻 Built directly by Wisnu Alfian Nur Ashar

        Purpose:
        🎯 Showcase professional profile, skills, and projects
        🎯 Platform for recruiters & potential employers to know me
        🎯 Demonstrate technical capabilities through the website itself
        🎯 Central hub for all my professional information

        Technology Stack:
        ⚡ **Astro** - Modern static site generator
        - Ultra-fast performance
        - SEO-friendly
        - Component-based architecture
        - Zero JS by default (ship less JavaScript!)

        ✨ Supporting Technologies:
        - TypeScript - Type safety
        - Tailwind CSS - Utility-first styling
        - React (for interactive components)
        - Local AI Chatbot (TypeScript-based)

        Key Features:
        ✅ Lightning-fast loading speed
        ✅ Fully responsive (Desktop, Tablet, Mobile)
        ✅ SEO optimized for discoverability
        ✅ Interactive AI Assistant (me!) for 24/7 Q&A
        ✅ Modern, professional design
        ✅ Project showcase with technical details
        ✅ Contact forms & social links

        Why Astro?
        🚀 Performance-first framework
        🚀 Perfect for content-heavy sites like portfolios
        🚀 Built-in optimizations (image optimization, lazy loading)
        🚀 Excellent developer experience

        Hosting & Deployment:
        ☁️ Deployed on modern hosting platform (Vercel/Netlify)
        ☁️ Automatic deployments from Git
        ☁️ Global CDN for fast loading worldwide
        ☁️ HTTPS secure

        This website itself is a demonstration of Wisnu's capabilities in:
        - Modern web development
        - Performance optimization
        - UX/UI design
        - Technical implementation

        This isn't just a portfolio template - it's a custom-built showcase! 💪`;
        }

        if (q.includes("astro") || q.includes("framework") || q.includes("teknologi website") || q.includes("dibuat dengan")) {
            if (isIndo) {
                return `Website Ini Dibangun dengan Astro ⚡

        Tentang Astro:
        Astro adalah modern static site generator yang revolutionary dengan fokus pada performance & developer experience.

        Kenapa Memilih Astro?
        🚀 **Zero JavaScript by Default**
        - Ship less JavaScript = faster loading
        - Only load JS when necessary (islands architecture)

        ⚡ **Ultra-Fast Performance**
        - Static site generation untuk speed
        - Automatic code splitting
        - Built-in image optimization
        - Lazy loading out of the box

        🎯 **Perfect untuk Portfolio**
        - Content-focused sites
        - SEO-friendly (great for discoverability!)
        - Markdown support untuk easy content management

        💻 **Developer Experience**
        - Component-based architecture
        - Bisa pakai React, Vue, Svelte di project yang sama!
        - TypeScript support
        - Hot module replacement (HMR)

        🔧 **Built-in Features**
        - Image optimization
        - CSS bundling & minification
        - Sitemap generation
        - RSS feed support

        Tech Stack Website Ini:
        📦 Astro - Core framework
        📦 TypeScript - Type safety
        📦 Tailwind CSS - Styling
        📦 React - Interactive components (AI Chat!)
        📦 Vercel/Netlify - Hosting

        Performa Website:
        ✅ Lighthouse Score: Near-perfect (90+)
        ✅ First Contentful Paint: < 1s
        ✅ Time to Interactive: Minimal
        ✅ SEO Score: Excellent

        Astro Features yang Digunakan:
        - Static Site Generation (SSG)
        - Component Islands untuk interactivity
        - Content Collections untuk organized content
        - Built-in RSS & Sitemap

        Ini adalah kombinasi sempurna: Modern technology + Optimal performance! 🎯`;
            }
            return `This Website is Built with Astro ⚡

        About Astro:
        Astro is a revolutionary modern static site generator focused on performance & developer experience.

        Why Choose Astro?
        🚀 **Zero JavaScript by Default**
        - Ship less JavaScript = faster loading
        - Only load JS when necessary (islands architecture)

        ⚡ **Ultra-Fast Performance**
        - Static site generation for speed
        - Automatic code splitting
        - Built-in image optimization
        - Lazy loading out of the box

        🎯 **Perfect for Portfolio**
        - Content-focused sites
        - SEO-friendly (great for discoverability!)
        - Markdown support for easy content management

        💻 **Developer Experience**
        - Component-based architecture
        - Can use React, Vue, Svelte in same project!
        - TypeScript support
        - Hot module replacement (HMR)

        🔧 **Built-in Features**
        - Image optimization
        - CSS bundling & minification
        - Sitemap generation
        - RSS feed support

        This Website's Tech Stack:
        📦 Astro - Core framework
        📦 TypeScript - Type safety
        📦 Tailwind CSS - Styling
        📦 React - Interactive components (AI Chat!)
        📦 Vercel/Netlify - Hosting

        Website Performance:
        ✅ Lighthouse Score: Near-perfect (90+)
        ✅ First Contentful Paint: < 1s
        ✅ Time to Interactive: Minimal
        ✅ SEO Score: Excellent

        Astro Features Used:
        - Static Site Generation (SSG)
        - Component Islands for interactivity
        - Content Collections for organized content
        - Built-in RSS & Sitemap

        This is the perfect combination: Modern technology + Optimal performance! 🎯`;
        }

        if (q.includes("fitur") || q.includes("feature") || q.includes("menu") || q.includes("bagian") || q.includes("section")) {
            if (isIndo) {
                return `Fitur-Fitur Website Portfolio Ini 🎨

        Main Sections:
        📍 **Home / Hero**
        - Introduction & quick overview
        - Call-to-action untuk explore lebih lanjut
        - Eye-catching design

        📍 **About / Profile**
        - Detailed background & bio
        - Education & academic info
        - Values & motivation
        - Personal interests

        📍 **Skills**
        - Technical skills showcase
        - Technology stack
        - Proficiency levels
        - Tools & frameworks

        📍 **Projects / Portfolio**
        - Featured projects dengan screenshots
        - Technology stack per project
        - Live demo links & GitHub repos
        - Project descriptions & impact

        📍 **Experience**
        - Professional experience
        - Organizational activities
        - Leadership roles
        - Timeline view

        📍 **Contact**
        - Contact form
        - Social media links
        - Email & professional networks
        - Location info

        Interactive Features:
        🤖 **AI Assistant (LocalAI)**
        - 24/7 intelligent chatbot
        - Answer questions about Wisnu
        - Bilingual (Indonesian & English)
        - Context-aware responses

        ⚡ **Performance Features**
        - Lazy loading images
        - Optimized assets
        - Fast page transitions
        - Minimal JavaScript

        🎯 **UX Features**
        - Smooth scrolling
        - Responsive navigation
        - Mobile-friendly hamburger menu
        - Dark/Light mode (if implemented)
        - Accessibility compliant

        📱 **Responsive Design**
        - Desktop optimized (1920px+)
        - Laptop friendly (1366px+)
        - Tablet compatible (768px+)
        - Mobile responsive (375px+)

        🔍 **SEO Optimized**
        - Meta tags properly configured
        - Structured data (JSON-LD)
        - Sitemap generation
        - Open Graph tags untuk social sharing

        Cara Menggunakan:
        1️⃣ Navigate dengan menu di header
        2️⃣ Scroll untuk explore sections
        3️⃣ Click pada projects untuk detail
        4️⃣ Use AI Assistant untuk instant answers
        5️⃣ Contact form untuk direct communication

        Website ini designed untuk memberikan complete professional picture dari Wisnu! 🚀`;
            }
            return `Features of This Portfolio Website 🎨

        Main Sections:
        📍 **Home / Hero**
        - Introduction & quick overview
        - Call-to-action to explore further
        - Eye-catching design

        📍 **About / Profile**
        - Detailed background & bio
        - Education & academic info
        - Values & motivation
        - Personal interests

        📍 **Skills**
        - Technical skills showcase
        - Technology stack
        - Proficiency levels
        - Tools & frameworks

        📍 **Projects / Portfolio**
        - Featured projects with screenshots
        - Technology stack per project
        - Live demo links & GitHub repos
        - Project descriptions & impact

        📍 **Experience**
        - Professional experience
        - Organizational activities
        - Leadership roles
        - Timeline view

        📍 **Contact**
        - Contact form
        - Social media links
        - Email & professional networks
        - Location info

        Interactive Features:
        🤖 **AI Assistant (LocalAI)**
        - 24/7 intelligent chatbot
        - Answer questions about Wisnu
        - Bilingual (Indonesian & English)
        - Context-aware responses

        ⚡ **Performance Features**
        - Lazy loading images
        - Optimized assets
        - Fast page transitions
        - Minimal JavaScript

        🎯 **UX Features**
        - Smooth scrolling
        - Responsive navigation
        - Mobile-friendly hamburger menu
        - Dark/Light mode (if implemented)
        - Accessibility compliant

        📱 **Responsive Design**
        - Desktop optimized (1920px+)
        - Laptop friendly (1366px+)
        - Tablet compatible (768px+)
        - Mobile responsive (375px+)

        🔍 **SEO Optimized**
        - Meta tags properly configured
        - Structured data (JSON-LD)
        - Sitemap generation
        - Open Graph tags for social sharing

        How to Use:
        1️⃣ Navigate with header menu
        2️⃣ Scroll to explore sections
        3️⃣ Click on projects for details
        4️⃣ Use AI Assistant for instant answers
        5️⃣ Contact form for direct communication

        This website is designed to give a complete professional picture of Wisnu! 🚀`;
        }

        if (q.includes("hosting") || q.includes("deploy") || q.includes("server") || q.includes("dimana") || q.includes("where host")) {
            if (isIndo) {
                return `Hosting & Deployment Website Ini ☁️

        Platform Hosting:
        🌐 **Vercel / Netlify**
        - Modern cloud platform untuk static sites
        - Global CDN (Content Delivery Network)
        - Automatic HTTPS/SSL
        - Edge network untuk fast loading worldwide

        Deployment Process:
        🔄 **Continuous Deployment**
        - Connected dengan Git repository (GitHub)
        - Automatic deployment setiap push ke main branch
        - Preview deployments untuk testing
        - Rollback capability jika ada issues

        Performance Benefits:
        ⚡ **Global CDN**
        - Content served dari server terdekat dengan user
        - Faster loading times di seluruh dunia
        - 99.99% uptime guarantee

        🔒 **Security**
        - Automatic SSL certificates
        - DDoS protection
        - Secure headers configured
        - Regular security updates

        🚀 **Developer Experience**
        - Push to deploy workflow
        - Environment variables management
        - Build logs & analytics
        - Performance monitoring

        Technical Specs:
        📊 Build Process: Astro static build
        📊 Build Time: < 2 minutes
        📊 Deploy Time: Instant (after build)
        📊 Global Edge Locations: 100+

        Why Vercel/Netlify?
        ✅ Free tier generous untuk portfolio sites
        ✅ Zero configuration untuk Astro
        ✅ Excellent performance out of the box
        ✅ Developer-friendly interface
        ✅ Built-in analytics & insights

        Website Reliability:
        🟢 Uptime: 99.99%
        🟢 Global availability
        🟢 Automatic failover
        🟢 DDoS mitigation

        Ini adalah modern cloud hosting solution yang perfect untuk high-performance portfolio websites! 💪`;
            }
            return `Hosting & Deployment of This Website ☁️

        Hosting Platform:
        🌐 **Vercel / Netlify**
        - Modern cloud platform for static sites
        - Global CDN (Content Delivery Network)
        - Automatic HTTPS/SSL
        - Edge network for fast loading worldwide

        Deployment Process:
        🔄 **Continuous Deployment**
        - Connected with Git repository (GitHub)
        - Automatic deployment on every push to main branch
        - Preview deployments for testing
        - Rollback capability if issues arise

        Performance Benefits:
        ⚡ **Global CDN**
        - Content served from nearest server to user
        - Faster loading times worldwide
        - 99.99% uptime guarantee

        🔒 **Security**
        - Automatic SSL certificates
        - DDoS protection
        - Secure headers configured
        - Regular security updates

        🚀 **Developer Experience**
        - Push to deploy workflow
        - Environment variables management
        - Build logs & analytics
        - Performance monitoring

        Technical Specs:
        📊 Build Process: Astro static build
        📊 Build Time: < 2 minutes
        📊 Deploy Time: Instant (after build)
        📊 Global Edge Locations: 100+

        Why Vercel/Netlify?
        ✅ Generous free tier for portfolio sites
        ✅ Zero configuration for Astro
        ✅ Excellent performance out of the box
        ✅ Developer-friendly interface
        ✅ Built-in analytics & insights

        Website Reliability:
        🟢 Uptime: 99.99%
        🟢 Global availability
        🟢 Automatic failover
        🟢 DDoS mitigation

        This is a modern cloud hosting solution perfect for high-performance portfolio websites! 💪`;
        }

        if (q.includes("update") || q.includes("pembaruan") || q.includes("maintenance") || q.includes("changelog") || q.includes("versi")) {
            if (isIndo) {
                return `Update & Pemeliharaan Website 🔄

        Frekuensi Update:
        📅 **Regular Updates**
        - Content updates: Setiap ada project baru atau achievement
        - Technical updates: Monthly untuk security & performance
        - Feature additions: Quarterly atau sesuai kebutuhan
        - Bug fixes: Immediate saat ditemukan

        Jenis Update:
        ✨ **Content Updates**
        - New projects ditambahkan ke portfolio
        - Skills & technologies terbaru
        - Experience & organizational activities
        - Blog posts (jika ada)

        🔧 **Technical Updates**
        - Framework version upgrades (Astro, dependencies)
        - Security patches
        - Performance optimizations
        - Bug fixes & improvements

        🎨 **Design Updates**
        - UI/UX improvements berdasarkan feedback
        - New features & interactions
        - Accessibility enhancements

        Changelog:
        📝 Website ini tidak memiliki public changelog, tapi major updates biasanya include:
        - New project showcases
        - Enhanced AI assistant capabilities
        - Performance improvements
        - Design refinements

        Cara Mendapat Update:
        🔔 **Newsletter** (jika tersedia)
        - Subscribe untuk update via email

        🔗 **Social Media**
        - Follow untuk announcements
        - LinkedIn untuk professional updates

        📧 **Direct Contact**
        - Contact form untuk questions
        - Email untuk direct communication

        Development Roadmap:
        🎯 Planned features (subject to change):
        - Blog section untuk technical articles
        - Enhanced project filtering
        - Interactive project demos
        - Visitor analytics dashboard
        - Multi-language support expansion

        Website ini adalah living project yang terus berkembang seiring dengan career progression Wisnu! 🚀`;
            }
            return `Updates & Maintenance 🔄

        Update Frequency:
        📅 **Regular Updates**
        - Content updates: Whenever new projects or achievements
        - Technical updates: Monthly for security & performance
        - Feature additions: Quarterly or as needed
        - Bug fixes: Immediate when discovered

        Types of Updates:
        ✨ **Content Updates**
        - New projects added to portfolio
        - Latest skills & technologies
        - Experience & organizational activities
        - Blog posts (if any)

        🔧 **Technical Updates**
        - Framework version upgrades (Astro, dependencies)
        - Security patches
        - Performance optimizations
        - Bug fixes & improvements

        🎨 **Design Updates**
        - UI/UX improvements based on feedback
        - New features & interactions
        - Accessibility enhancements

        Changelog:
        📝 This website doesn't have a public changelog, but major updates typically include:
        - New project showcases
        - Enhanced AI assistant capabilities
        - Performance improvements
        - Design refinements

        How to Get Updates:
        🔔 **Newsletter** (if available)
        - Subscribe for email updates

        🔗 **Social Media**
        - Follow for announcements
        - LinkedIn for professional updates

        📧 **Direct Contact**
        - Contact form for questions
        - Email for direct communication

        Development Roadmap:
        🎯 Planned features (subject to change):
        - Blog section for technical articles
        - Enhanced project filtering
        - Interactive project demos
        - Visitor analytics dashboard
        - Multi-language support expansion

        This website is a living project that evolves alongside Wisnu's career progression! 🚀`;
        }

        if (q.includes("responsif") || q.includes("responsive") || q.includes("mobile") || q.includes("perangkat") || q.includes("device") || q.includes("tablet")) {
            if (isIndo) {
                return `Responsive Design & Device Compatibility 📱

        Website ini FULLY RESPONSIVE dan dioptimalkan untuk semua perangkat!

        Breakpoints Support:
        📱 **Mobile (375px - 767px)**
        - Optimized untuk smartphone
        - Touch-friendly interfaces
        - Simplified navigation (hamburger menu)
        - Vertical scrolling optimized
        - Readable font sizes

        📱 **Tablet (768px - 1023px)**
        - Balanced layout untuk medium screens
        - Touch & mouse support
        - Adaptive grid layouts
        - Optimized image sizes

        💻 **Laptop (1024px - 1439px)**
        - Full-featured experience
        - Multi-column layouts
        - Enhanced visuals
        - Optimal reading width

        🖥️ **Desktop (1440px+)**
        - Maximum visual impact
        - Wide layouts
        - High-resolution images
        - All features unlocked

        Responsive Features:
        ✅ **Fluid Typography**
        - Font sizes scale dengan viewport
        - Optimal readability di semua devices

        ✅ **Flexible Images**
        - Responsive images dengan proper sizing
        - Art direction untuk different screens
        - Lazy loading untuk performance

        ✅ **Adaptive Navigation**
        - Desktop: Full horizontal menu
        - Mobile: Hamburger menu
        - Smooth transitions

        ✅ **Touch Optimization**
        - Larger tap targets untuk mobile
        - Swipe gestures (where applicable)
        - No hover-dependent features

        Browser Compatibility:
        ✅ Chrome (latest 2 versions)
        ✅ Firefox (latest 2 versions)
        ✅ Safari (latest 2 versions)
        ✅ Edge (latest 2 versions)
        ✅ Mobile browsers (iOS Safari, Chrome Mobile)

        Testing:
        🧪 Tested on real devices:
        - iPhone (various models)
        - Android phones
        - iPads
        - Various laptops & desktops

        Performance per Device:
        📊 Mobile: Optimized untuk 3G/4G networks
        📊 Tablet: Enhanced visuals maintained
        📊 Desktop: Full performance unleashed

        Accessibility:
        ♿ WCAG compliant
        ♿ Keyboard navigation
        ♿ Screen reader friendly
        ♿ Proper semantic HTML

        Website ini memberikan excellent experience di perangkat apapun yang Anda gunakan! 💯`;
            }
            return `Responsive Design & Device Compatibility 📱

        This website is FULLY RESPONSIVE and optimized for all devices!

        Breakpoints Support:
        📱 **Mobile (375px - 767px)**
        - Optimized for smartphones
        - Touch-friendly interfaces
        - Simplified navigation (hamburger menu)
        - Vertical scrolling optimized
        - Readable font sizes

        📱 **Tablet (768px - 1023px)**
        - Balanced layout for medium screens
        - Touch & mouse support
        - Adaptive grid layouts
        - Optimized image sizes

        💻 **Laptop (1024px - 1439px)**
        - Full-featured experience
        - Multi-column layouts
        - Enhanced visuals
        - Optimal reading width

        🖥️ **Desktop (1440px+)**
        - Maximum visual impact
        - Wide layouts
        - High-resolution images
        - All features unlocked

        Responsive Features:
        ✅ **Fluid Typography**
        - Font sizes scale with viewport
        - Optimal readability on all devices

        ✅ **Flexible Images**
        - Responsive images with proper sizing
        - Art direction for different screens
        - Lazy loading for performance

        ✅ **Adaptive Navigation**
        - Desktop: Full horizontal menu
        - Mobile: Hamburger menu
        - Smooth transitions

        ✅ **Touch Optimization**
        - Larger tap targets for mobile
        - Swipe gestures (where applicable)
        - No hover-dependent features

        Browser Compatibility:
        ✅ Chrome (latest 2 versions)
        ✅ Firefox (latest 2 versions)
        ✅ Safari (latest 2 versions)
        ✅ Edge (latest 2 versions)
        ✅ Mobile browsers (iOS Safari, Chrome Mobile)

        Testing:
        🧪 Tested on real devices:
        - iPhone (various models)
        - Android phones
        - iPads
        - Various laptops & desktops

        Performance per Device:
        📊 Mobile: Optimized for 3G/4G networks
        📊 Tablet: Enhanced visuals maintained
        📊 Desktop: Full performance unleashed

        Accessibility:
        ♿ WCAG compliant
        ♿ Keyboard navigation
        ♿ Screen reader friendly
        ♿ Proper semantic HTML

        This website delivers an excellent experience on whatever device you're using! 💯`;
        }

        if (q.includes("gratis") || q.includes("free") || q.includes("bayar") || q.includes("biaya") || q.includes("cost") || q.includes("price")) {
            if (isIndo) {
                return `Akses & Biaya Website 💰

        YA, website ini 100% GRATIS untuk diakses!

        Free Access:
        ✅ Tidak ada registrasi required
        ✅ Tidak ada paywall atau premium content
        ✅ Semua informasi dapat diakses publik
        ✅ Tidak ada hidden fees
        ✅ Tidak ada ads atau tracking invasive

        Yang Bisa Anda Akses Gratis:
        📖 Complete professional profile
        📖 Full portfolio & project details
        📖 AI Assistant untuk Q&A 24/7
        📖 Contact information
        📖 Technical skills & experience
        📖 All website features

        Purpose:
        🎯 Website ini adalah professional portfolio, bukan commercial product
        🎯 Tujuan: Memudahkan recruiters, employers, dan connections untuk mengenal Wisnu
        🎯 Open access untuk maximize visibility & opportunities

        No Hidden Agenda:
        ✅ Tidak collect personal data untuk dijual
        ✅ Tidak ada email marketing spam
        ✅ Hanya ada contact form untuk legitimate inquiries
        ✅ Privacy-respecting analytics (jika ada)

        Accessibility Philosophy:
        "Professional information should be accessible to everyone who's interested - no barriers!" 🌍

        Jadi feel free untuk explore seluruh website tanpa khawatir tentang biaya! 😊`;
            }
            return `Access & Cost 💰

        YES, this website is 100% FREE to access!

        Free Access:
        ✅ No registration required
        ✅ No paywall or premium content
        ✅ All information is publicly accessible
        ✅ No hidden fees
        ✅ No ads or invasive tracking

        What You Can Access for Free:
        📖 Complete professional profile
        📖 Full portfolio & project details
        📖 AI Assistant for 24/7 Q&A
        📖 Contact information
        📖 Technical skills & experience
        📖 All website features

        Purpose:
        🎯 This is a professional portfolio, not a commercial product
        🎯 Goal: Make it easy for recruiters, employers, and connections to know Wisnu
        🎯 Open access to maximize visibility & opportunities

        No Hidden Agenda:
        ✅ Don't collect personal data to sell
        ✅ No email marketing spam
        ✅ Only contact form for legitimate inquiries
        ✅ Privacy-respecting analytics (if any)

        Accessibility Philosophy:
        "Professional information should be accessible to everyone who's interested - no barriers!" 🌍

        So feel free to explore the entire website without worrying about costs! 😊`;
        }
























        // ============================================
        // ENHANCED FALLBACK
        // ============================================


        // ============================================
        // SECTION 20: ADVANCED ENTERTAINMENT & LIFESTYLE
        // ============================================

        // CATEGORY 1: HOBBIES & ENTERTAINMENT
        if (this.fuzzyMatch(q, ["nonton anime", "anime favorit", "one piece", "naruto", "wibu", "manga", "manhwa", "game mobile", "genshin", "honkai star rail", "ml atau", "valorant", "toxic player", "rank berapa", "server mana", "pc gaming", "playstation", "xbox", "nintendo switch", "steam library", "epic games", "nonton netflix", "series bagus", "drakor", "drama barat", "marvel", "dc", "mcu", "stranger things", "squid game", "wednesday addams", "k-drama", "start-up", "itaewon class", "bts", "blackpink", "spotify", "youtube music", "playlist lagu"])) {
            return isIndo
                ? "Hobi entertainment ya! 🎮 Wisnu juga punya hobi selain coding. Yang pasti hobinya yang related sama coding keliatan dari project-projectnya yang diverse. Mau explore?"
                : "Entertainment hobbies! 🎮 Wisnu has hobbies outside coding too. His coding passion shows in his diverse projects. Want to explore?";
        }

        // CATEGORY 9: PRANK & SECURITY TESTING
        if (this.fuzzyMatch(q, ["dibobol", "hack sistem", "password admin", "database credentials", "api key", "source code", "akses server", "ssh login", "root access", "sudo command", "inject sql", "xss attack", "csrf", "exploit", "backdoor", "security hole", "vulnerability"])) {
            return isIndo
                ? "Nice try, but nope! 🛡️ Security itu penting. Wisnu serious soal security di semua projectnya - proper authentication, validation, dan protection. Want to know his security approach?"
                : "Nice try, but nope! 🛡️ Security is important. Wisnu is serious about security in all his projects. Want to know his security approach?";
        }

        // CATEGORY 13: FAMILY
        if (this.fuzzyMatch(q, ["anak ke berapa", "punya adik", "kakak ada", "keluarga besar", "ortu kerja", "ayah ibu", "keluarga proud"])) {
            return isIndo
                ? "Pertanyaan personal tentang family ya 😊 Untuk privacy, saya gak share detail personal family Wisnu. Yang bisa saya share adalah professional journey dan karya-karyanya. Want to know?"
                : "Personal question about family 😊 For privacy, I don't share Wisnu's personal family details. What I can share is his professional journey and works. Want to know?";
        }


        // ENHANCED FALLBACK
        if (isIndo) {
            return `Hmm, pertanyaan menarik! 🤔 Saya belum punya info spesifik tentang itu.

Tapi saya expert di beberapa topik ini:
• 👤 Profil & Kepribadian Wisnu
• 🚀 Proyek (Ashar Grosir, LexCorpus, FKMA)
• 💼 Pengalaman Kerja (4 roles)
• 💻 Skills & Tech Stack (18 skills)
• 📋 Sertifikasi (6 certifications)
• 🎓 Pendidikan
• 🤝 Organisasi
• 📞 Contact Info

Atau tanya saya apa saja - dari tech tips sampai random chat, saya siap! 😊`;
        }
        return `Interesting question! 🤔 I don't have specific info on that.

But I'm an expert on these topics:
• 👤 Wisnu's Profile
• 🚀 Projects
• 💼 Work Experience
• 💻 Skills & Tech Stack
• 📋 Certifications
• 🎓 Education
• 🤝 Organizations
• 📞 Contact Info

Or ask me anything - from tech tips to random chat, I'm ready! 😊`;

    }


    private static fuzzyMatch(text: string, patterns: string[]): boolean {
        // Simple includes check first
        for (const p of patterns) {
            if (text.includes(p)) return true;
        }
        return false;
    }

}