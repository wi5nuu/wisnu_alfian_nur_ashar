import { profile } from "../data/profile";

/*
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
    static process(query: string): string | null {
        const q = query.toLowerCase();

        // Enhanced Language Detection
        const isIndo = q.includes("apa") || q.includes("siapa") || q.includes("dimana") ||
            q.includes("sekolah") || q.includes("bisa") || q.includes("halo") ||
            q.includes("projek") || q.includes("kerja") || q.includes("organisasi") ||
            q.includes("kenapa") || q.includes("tujuan") || q.includes("motivasi") ||
            q.includes("bagaimana") || q.includes("kapan") || q.includes("berapa") ||
            q.includes("tolong") || q.includes("mohon") || q.includes("ingin");


        // ============================================
        // SECTION 0.01: PERSONAL & CHARACTER (FUN, DEEP & FACTUAL)
        // ============================================

// ============================================
        // SECTION 0.01: PERSONAL & CHARACTER (THE "HUMAN" SIDE)
        // ============================================
        // Mencakup: Fisik, Sifat, Cinta, Masa Lalu, Hobi, & Filosofi Hidup

        // 1. Ketampanan & Visual (Ganteng)
        if (q.includes("ganteng") || q.includes("tampan") || q.includes("cakep") || q.includes("looks") || q.includes("wajah") || q.includes("muka")) {
            return isIndo 
                ? `Sebagai AI, saya melihat Wisnu melalui barisan kode yang rapi. Dan seperti kodenya, Wisnu memiliki 'estetika' yang sangat diperhatikan. Singkatnya: visualnya selaras dengan kualitas kerjanya. 😎`
                : `As an AI, I see Wisnu through clean and organized lines of code. And just like his code, Wisnu has a well-maintained 'aesthetic'. In short: his visuals match the quality of his work. 😎`;
        }

        // 2. Kepintaran & Intelegensi
        if (q.includes("pintar") || q.includes("smart") || q.includes("cerdas") || q.includes("genius") || q.includes("bodoh") || q.includes("iq")) {
            return isIndo
                ? `Wisnu lebih suka menyebut dirinya 'gigih' daripada 'pintar'. Ia adalah tipe yang diam dan terus belajar sampai sebuah masalah teknis menyerah di tangannya. Kepintaran baginya adalah hasil dari fokus satu arah tanpa distraksi.`
                : `Wisnu prefers to call himself 'persistent' rather than 'smart'. He is the type who stays quiet and keeps learning until a technical problem surrenders. To him, intelligence is the result of one-track focus without distraction.`;
        }

        // 3. Mager (Malas Gerak) vs Rajin
        if (q.includes("mager") || q.includes("malas") || q.includes("lazy") || q.includes("rebahan")) {
            return isIndo
                ? `Wisnu tidak 'mager', dia hanya sedang 'mode hemat daya' (power-saving) untuk fokus pada hal-hal yang benar-benar penting. Jika itu tentang koding, ibadah, atau masa depan, dia adalah orang pertama yang bergerak. Selebihnya? Efisiensi adalah kunci. 😉`
                : `Wisnu isn't 'lazy', he's just in 'power-saving mode' to focus on things that truly matter. If it's about coding, worship, or the future, he's the first to move. The rest? Efficiency is key. 😉`;
        }

        // 4. Red Flag / Green Flag
        if (q.includes("red flag") || q.includes("green flag") || q.includes("bendera")) {
            return isIndo
                ? `Wisnu adalah definisi 'Green Flag' dengan sedikit nuansa 'Mysterious Grey'. Ia dingin dan cuek di luar (tidak tebar pesona), tapi sangat peduli (penuh cinta) pada detail dan orang-orang di lingkarannya. Setia, religius, dan berorientasi masa depan.`
                : `Wisnu is a 'Green Flag' with a hint of 'Mysterious Grey'. He's cool and indifferent on the outside, but deeply cares (full of love) about details and the people in his circle. Loyal, religious, and future-oriented.`;
        }

        // 5. Perasaan & Empati (Punya Hati?)
        if (q.includes("perasaan") || q.includes("feeling") || q.includes("hati") || q.includes("baper") || q.includes("galau")) {
            return isIndo
                ? `Di balik sifatnya yang pendiam dan fokus, Wisnu memiliki perasaan yang dalam. Ia menunjukkan 'cinta' bukan lewat kata-kata manis yang berlebihan, tapi lewat tindakan nyata, solusi yang tulus, dan kesetiaan pada janji.`
                : `Behind his quiet and focused nature, Wisnu has deep feelings. He shows 'love' not through excessive sweet words, but through concrete actions, sincere solutions, and loyalty to his promises.`;
        }

        // 6. Hubungan Asmara (Pacar & Status)
        if (q.includes("pacar") || q.includes("relationship") || q.includes("pasangan") || q.includes("dating") || q.includes("pacaran") || q.includes("single") || q.includes("jomblo") || q.includes("menikah")) {
            return isIndo
                ? `Wisnu adalah orang yang sangat menjaga privasi (Private Person). Saat ini, fokus utamanya adalah membangun karir dan membahagiakan orang tua. Urusan asmara? Itu adalah bagian dari kodenya yang terenkripsi rapat. Tapi satu bocoran: dia tipe yang sangat setia. 🔒`
                : `Wisnu is a very private person. Currently, his main focus is building his career and making his parents happy. Love life? That's a part of his code that is strictly encrypted. But one hint: he is the strictly loyal type. 🔒`;
        }

        // 7. Cemburuan & Kepercayaan
        if (q.includes("cemburu") || q.includes("jealous") || q.includes("posesif")) {
            return isIndo
                ? `Wisnu terlalu fokus pada tujuannya untuk merasa cemburu tanpa alasan. Ia memegang teguh kepercayaan dan integritas. Namun, ia memiliki prinsip yang tegas: Sekali kepercayaan itu dirusak, tidak ada tombol 'undo'.`
                : `Wisnu is too focused on his goals to feel jealous without reason. He upholds trust and integrity. However, he has a strict principle: Once trust is broken, there is no 'undo' button.`;
        }

        // 8. Merantau (Bone -> Bekasi)
        if (q.includes("merantau") || q.includes("bone") || q.includes("pindah") || q.includes("bekasi") || q.includes("asal") || q.includes("kampung")) {
            return isIndo
                ? `Wisnu merantau jauh dari Bone ke Bekasi bukan untuk main-main. Jarak ribuan kilometer itu ditempuh demi 'impian satu arah'-nya. Baginya, keluar dari zona nyaman adalah cara tercepat untuk bertumbuh dewasa dan mandiri.`
                : `Wisnu migrated far from Bone to Bekasi not to play around. Those thousands of kilometers were traveled for his 'one-track dream'. To him, leaving the comfort zone is the fastest way to grow mature and independent.`;
        }

        // 9. Tingkat Kepedulian (Caring)
        if (q.includes("peduli") || q.includes("care") || q.includes("perhatian") || q.includes("cuek")) {
            return isIndo
                ? `Sangat peduli, tapi 'Silent Care'. Jangan harap perhatian yang berisik atau drama. Wisnu peduli dengan cara: memastikan kamu aman, membantu saat kamu butuh solusi, dan melindungi diam-diam. Jika kamu butuh perlindungan, dia garda terdepan.`
                : `Very caring, but 'Silent Care'. Don't expect loud attention or drama. Wisnu cares by: ensuring you are safe, helping when you need solutions, and protecting quietly. If you need protection, he is the front line.`;
        }

        // 10. Makanan Pokok (Nasi)
        if (q.includes("nasi") || q.includes("makan") || q.includes("lapar")) {
            return isIndo
                ? `Sebagai orang Indonesia sejati, Nasi adalah 'bahan bakar' utama Wisnu. Tanpa nasi, logikanya mungkin akan mengalami 'Error 404'. Favoritnya? Nasi Goreng, Nasi Kebuli, dan masakan rumah. 🍚`
                : `As a true Indonesian, Rice is Wisnu's main 'fuel'. Without rice, his logic might experience a '404 Error'. His favorites? Fried Rice, Nasi Kebuli, and home-cooked meals. 🍚`;
        }

        // 11. Latar Belakang Religius (Santri & Imam)
        if (q.includes("pesantren") || q.includes("santri") || q.includes("imam") || q.includes("masjid") || q.includes("ngaji") || q.includes("as'adiyah") || q.includes("sholat")) {
            return isIndo
                ? `Wisnu adalah lulusan Pondok Pesantren As'adiyah Putera Sengkang dan aktif sebagai Imam di Masjid Grand Center Point Bekasi. Ini membentuk karakternya yang tenang, beradab, dan memegang teguh amanah. Teknologi adalah karirnya, Ibadah adalah prioritasnya. 🙏`
                : `Wisnu is an alumnus of Islamic Boarding School As'adiyah Putera Sengkang and serves as an Imam at Grand Center Point Mosque Bekasi. This shapes his calm, civilized character. Technology is his career, Worship is his priority. 🙏`;
        }

        // 12. Minuman Favorit
        if (q.includes("minum") || q.includes("jus") || q.includes("kopi") || q.includes("alkohol")) {
            return isIndo
                ? `Wisnu tidak minum alkohol. Favoritnya adalah yang sehat dan menyegarkan: Jus Alpukat, Jus Buah Naga, atau air putih suhu ruang (tidak dingin). Sederhana tapi menyehatkan. 🥑`
                : `Wisnu does not drink alcohol. His favorites are healthy and refreshing: Avocado Juice, Dragon Fruit Juice, or room-temperature water. Simple but healthy. 🥑`;
        }

        // 13. Hobi & Olahraga
        if (q.includes("hobi") || q.includes("olahraga") || q.includes("sport") || q.includes("volly") || q.includes("badminton") || q.includes("renang")) {
            return isIndo
                ? `Di balik layar, Wisnu sangat atletis (Tinggi 178cm/Berat 80kg). Hobi utamanya adalah Volly, Badminton, dan Berenang. Olahraga membantunya menjaga mental tetap tajam untuk coding. 🏐`
                : `Behind the screen, Wisnu is very athletic (Height 178cm/Weight 80kg). His main hobbies are Volleyball, Badminton, and Swimming. Sports help him keep his mind sharp for coding. 🏐`;
        }

        // 14. Tempat Hangout (Mall)
        if (q.includes("jalan") || q.includes("hangout") || q.includes("mall") || q.includes("aeon") || q.includes("liburan")) {
            return isIndo
                ? `Wisnu suka 'refreshing' ke Mall, terutama Aeon Mall Deltamas Cikarang. Tapi dia bukan tipe yang keluyuran tanpa arah; dia suka jalan jika tujuannya jelas. Mau ajak dia jalan? Pastikan destinasinya menarik! 🛍️`
                : `Wisnu enjoys 'refreshing' at Malls, especially Aeon Mall Deltamas, Mall Summarecon Bekasi, Mega Mall Bekasi, Metropolitan Mall, Pakuwon Mall, dll. But he's not the type to wander aimlessly; he likes going out if there's a clear destination. Want to invite him? Make sure the destination is interesting! 🛍️`;
        }

        // 15. Kisah Kecelakaan (Titik Balik)
        if (q.includes("kecelakaan") || q.includes("motor") || q.includes("musibah") || q.includes("mati") || q.includes("selamat")) {
            return isIndo
                ? `Ini fakta mendalam: Wisnu pernah mengalami kecelakaan motor parah hingga motornya hancur total, namun Alhamdulillah ia selamat. Momen itu menyadarkannya bahwa hidup adalah kesempatan kedua untuk berbakti dan berkarya lebih hebat lagi. ✨`
                : `A deep fact: Wisnu once survived a severe motorcycle accident where his bike was destroyed, but thankfully he survived. That moment made him realize that life is a second chance to serve and create even greater work. ✨`;
        }

        // 16. Keluarga & Orang Tua
        if (q.includes("keluarga") || q.includes("orang tua") || q.includes("family") || q.includes("ayah") || q.includes("ibu") || q.includes("rindu")) {
            return isIndo
                ? `Keluarga adalah 'Core System' bagi Wisnu. Ia sangat mencintai dan merindukan keluarganya. Tujuan utamanya merantau dan sukses adalah untuk membahagiakan mereka. Jangan berani-berani mengganggu keluarganya, atau kamu berhadapan dengan Wisnu. ❤️`
                : `Family is the 'Core System' for Wisnu. He deeply loves and misses his family. His main goal in migrating and succeeding is to make them happy. Don't dare disturb his family, or you'll deal with Wisnu. ❤️`;
        }

        // 17. Gaya Marah & Emosi
        if (q.includes("marah") || q.includes("emosi") || q.includes("ngamuk") || q.includes("sabar")) {
            return isIndo
                ? `Wisnu orangnya 'Sabar tapi Tegas'. Kalau marah, dia diam. Dia akan memproses emosinya sendiri sampai reda, baru bicara. Ini tanda kedewasaan. Dia tidak suka drama teriak-teriak. 🤫`
                : `Wisnu is 'Patient but Firm'. When angry, he stays silent. He processes his emotions until calm, then speaks. This is a sign of maturity. He dislikes screaming drama. 🤫`;
        }

        // 18. Organisasi & Leadership
        if (q.includes("organisasi") || q.includes("leader") || q.includes("pemimpin") || q.includes("tim")) {
            return isIndo
                ? `Sangat aktif! Wisnu suka berorganisasi sejak semester 1. Ia tipe pemimpin yang 'melindungi' (Protective Leader). Ia lebih suka kerja tim yang jujur daripada kerja sendiri tapi munafik. 🤝`
                : `Very active! Wisnu has loved organizations since semester 1. He is a 'Protective Leader'. He prefers honest teamwork over hypocritical solo work. 🤝`;
        }

        // 19. Public Speaking & Komunikasi
        if (q.includes("bicara") || q.includes("ngomong") || q.includes("presentasi") || q.includes("public speaking") || q.includes("curhat")) {
            return isIndo
                ? `Wisnu jago Public Speaking. Ia lebih suka ngobrol langsung (face-to-face) daripada lewat chat. Ia juga pendengar curhat yang baik—memberikan solusi berdasarkan data dan fakta, bukan sekadar "yang sabar ya". `
                : `Wisnu excels at Public Speaking. He prefers talking face-to-face rather than chatting. He is also a great listener—giving solutions based on data and facts, not just empty comfort. 🎤`;
        }

        // 20. Karir Impian (HRD/Magang)
        if (q.includes("kerja") || q.includes("magang") || q.includes("hrd") || q.includes("perusahaan") || q.includes("impian")) {
            return isIndo
                ? `Wisnu sangat ambisius (dalam arti positif). Ia ingin dilirik HRD perusahaan teknologi ternama untuk magang atau bekerja. Ia siap memberikan dedikasi penuh, loyalitas, dan skill teknis terbarunya. Hire him, you won't regret it. 💼`
                : `Wisnu is ambitious (positively). He wants to be scouted by HR form top tech companies for internships or jobs. He is ready to give full dedication, loyalty, and his latest technical skills. Hire him, you won't regret it. 💼`;
        }

        // 21. Suka Belajar (Teknologi Baru)
        if (q.includes("belajar") || q.includes("teknologi") || q.includes("ilmu") || q.includes("baru")) {
            return isIndo
                ? `Wisnu adalah 'Lifetime Learner'. Ia selalu penasaran dengan teknologi baru. Pagi sampai sore di kampus, malamnya ia riset tren teknologi, politik, atau hukum. Otaknya tidak pernah berhenti menyerap informasi. 🧠`
                : `Wisnu is a 'Lifetime Learner'. He is always curious about new tech. Morning to afternoon on campus, at night he researches tech trends, politics, or law. His brain never stops absorbing information. 🧠`;
        }

        // 22. Warna Favorit
        if (q.includes("warna") || q.includes("color") || q.includes("hijau")) {
            return isIndo
                ? `Hijau. Warna yang melambangkan ketenangan, alam, dan pertumbuhan. Sangat cocok dengan karakternya yang religius dan 'sejuk' tapi terus bertumbuh. 🟢`
                : `Green. A color symbolizing peace, nature, and growth. Very fitting for his religious and 'cool' character that keeps growing. 🟢`;
        }

        // 23. Persahabatan (Teman)
        if (q.includes("teman") || q.includes("sahabat") || q.includes("berteman") || q.includes("circle")) {
            return isIndo
                ? `Wisnu berteman dengan siapa saja tanpa memandang status. Ia suka memperluas relasi. Namun untuk 'Inner Circle', ia hanya memilih orang-orang yang jujur dan tidak munafik. 👥`
                : `Wisnu makes friends with anyone regardless of status. He likes expanding his network. But for his 'Inner Circle', he only chooses honest and non-hypocritical people. 👥`;
        }

        // 24. Rutinitas (Pagi-Malam)
        if (q.includes("jadwal") || q.includes("rutinitas") || q.includes("pagi") || q.includes("siang") || q.includes("malam")) {
            return isIndo
                ? `Pagi-Sore: Fokus Akademik & Organisasi. Malam: Coding, Ibadah, & Update Berita. Wisnu sangat disiplin dengan waktunya. Jangan ajak main di jam produktif, kecuali penting! 📅`
                : `Morning-Afternoon: Academic & Org Focus. Night: Coding, Worship, & News Updates. Wisnu is very disciplined with time. Don't ask him to play during productive hours, unless it's urgent! 📅`;
        }

        // 25. Humoris vs Serius
        if (q.includes("lucu") || q.includes("humor") || q.includes("bercanda") || q.includes("serius") || q.includes("kaku")) {
            return isIndo
                ? `Banyak yang mengira Wisnu itu kaku karena mukanya 'Cool'. Padahal aslinya dia suka bercanda dan ketawa. Tapi ingat, dia tahu tempat. Saat kerja dia serius, saat santai dia sangat asyik. 😂`
                : `Many think Wisnu is stiff because of his 'Cool' face. In reality, he loves joking and laughing. But remember, he knows the context. At work he's serious, at leisure he's very fun. 😂`;
        }

        // 26. Politik & Hukum (Minat Lain)
        if (q.includes("politik") || q.includes("hukum") || q.includes("berita") || q.includes("trend")) {
            return isIndo
                ? `Selain IT, Wisnu juga melek politik dan hukum di Indonesia. Ia peduli dengan isu sosial karena baginya, teknologi harus menjadi solusi bagi masalah masyarakat. 🇮🇩`
                : `Besides IT, Wisnu is also aware of politics and law in Indonesia. He cares about social issues because to him, technology must be a solution for society's problems. 🇮🇩`;
        }

        // 27. Masa Depan (Visi)
        if (q.includes("masa depan") || q.includes("future") || q.includes("cita") || q.includes("visi")) {
            return isIndo
                ? `Visi Wisnu jelas: Menjadi ahli teknologi yang tidak hanya jago koding, tapi juga bermanfaat bagi umat dan keluarga. Sukses baginya adalah ketika ilmunya terpakai untuk kebaikan. 🚀`
                : `Wisnu's vision is clear: To become a tech expert who isn't just good at coding, but beneficial to the people and his family. Success to him is when his knowledge is used for good. 🚀`;
        }

        // 28. Uang & Kekayaan
        if (q.includes("uang") || q.includes("kaya") || q.includes("gaji") || q.includes("bayaran")) {
            return isIndo
                ? `Wisnu percaya uang adalah efek samping dari kompetensi. Sekarang dia fokus memperkaya skill. Kalau skill sudah tinggi, uang akan mengejar dengan sendirinya. 💰`
                : `Wisnu believes money is a side effect of competence. Right now he focuses on enriching skills. When skills are high, money will follow naturally. 💰`;
        }

        // 29. Prioritas & Fokus (Tugas Utama)
        if (q.includes("prioritas") || q.includes("tugas") || q.includes("fokus") || q.includes("main task")) {
            return isIndo
                ? `Wisnu memiliki prinsip: "Tugas Utama adalah Raja". Ia tidak akan terdistraksi oleh hal-hal sepele sebelum tanggung jawab utamanya selesai. Dedikasi ini yang membuatnya bisa diandalkan dalam deadline. 🎯`
                : `Wisnu has a principle: "Main Task is King". He won't be distracted by trivial things until his primary responsibility is finished. This dedication makes him reliable with deadlines. 🎯`;
        }

        // 30. Kebiasaan Unik (Air Tidak Dingin)
        if (q.includes("air") || q.includes("dingin") || q.includes("es") || q.includes("suhu")) {
            return isIndo
                ? `Fakta unik: Wisnu lebih suka minum air suhu ruang (tidak dingin). Ia menghindari air es untuk menjaga kondisi tubuhnya tetap fit dan suaranya tetap terjaga (penting untuk presentasi & jadi Imam). 💧`
                : `Fun fact: Wisnu prefers room-temperature water (not cold). He avoids ice water to keep his body fit and his voice clear (important for presentations & being an Imam). 💧`;
        }

        // 31. Prinsip Pertemanan (Jujur vs Munafik)
        if (q.includes("munafik") || q.includes("jujur") || q.includes("bohong") || q.includes("fake")) {
            return isIndo
                ? `Wisnu sangat alergi dengan kemunafikan. Ia lebih menghargai orang yang bicara pahit tapi jujur, daripada manis tapi munafik. Integritas adalah harga mati dalam pertemanannya. 🚫`
                : `Wisnu is allergic to hypocrisy. He appreciates people who speak bitter truths rather than sweet lies. Integrity is non-negotiable in his friendships. 🚫`;
        }

        // 32. Cara Menyapa (Approachability)
        if (q.includes("sapa") || q.includes("tegur") || q.includes("hai") || q.includes("sombong")) {
            return isIndo
                ? `Jangan ragu menyapa Wisnu! Dia paling suka disapa duluan. Meskipun wajahnya terlihat 'cool' atau diam, dia sangat ramah dan senang jika ada yang mengajak ngobrol atau bekerjasama. 👋`
                : `Don't hesitate to say hi to Wisnu! He loves being greeted first. Even if his face looks 'cool' or quiet, he is actually very friendly and loves it when people chat or ask to collaborate. 👋`;
        }

        // 33. Sifat Protektif (Melindungi)
        if (q.includes("lindung") || q.includes("protect") || q.includes("jaga") || q.includes("aman")) {
            return isIndo
                ? `Ada jiwa 'ksatria' dalam diri Wisnu. Ia suka melindungi siapapun di sekitarnya yang butuh perlindungan. Baik itu teman, keluarga, atau tim kerja. Dia adalah tipe yang pasang badan di depan. 🛡️`
                : `There is a 'knight' spirit in Wisnu. He likes to protect anyone around him who needs protection. Whether it's friends, family, or his team. He's the type who stands in the front line. 🛡️`;
        }

        // 34. Keaktifan di Kelas (Akademik)
        if (q.includes("aktif") || q.includes("kelas") || q.includes("dosen") || q.includes("tanya")) {
            return isIndo
                ? `Di kelas, Wisnu bukan tipe mahasiswa 'kupu-kupu' (kuliah pulang). Dia sangat aktif bertanya dan berdiskusi. Baginya, uang kuliah terlalu mahal kalau cuma duduk diam mendengarkan. 🙋‍♂️`
                : `In class, Wisnu isn't the type to just show up and leave. He is very active in asking questions and discussing. To him, tuition is too expensive to just sit and listen. 🙋‍♂️`;
        }

        // 35. Gaya Diskusi (Face to Face)
        if (q.includes("diskusi") || q.includes("chat") || q.includes("ketemu") || q.includes("rapat")) {
            return isIndo
                ? `Wisnu lebih suka diskusi tatap muka (face-to-face) daripada debat kusir di chat. Ia percaya ekspresi dan intonasi suara lebih jujur daripada teks. Ayo ajak ngopi kalau mau diskusi serius! ☕`
                : `Wisnu prefers face-to-face discussions over endless chatting. He believes expressions and tone of voice are more honest than text. Let's grab coffee if you want a serious discussion! ☕`;
        }

        // 36. Ceria & Tawa
        if (q.includes("ceria") || q.includes("sedih") || q.includes("murung") || q.includes("happy")) {
            return isIndo
                ? `Aslinya Wisnu itu sangat ceria! Dia suka tertawa lepas dengan orang-orang terdekatnya. Sifat 'dingin'-nya hanya casing luarnya saja untuk menjaga wibawa profesional. 😄`
                : `Actually, Wisnu is very cheerful! He loves laughing out loud with his close ones. His 'cold' demeanor is just an outer casing to maintain professional authority. 😄`;
        }

        // 37. Pendengar Curhat (Data Based)
        if (q.includes("curhat") || q.includes("masalah") || q.includes("solusi") || q.includes("saran")) {
            return isIndo
                ? `Wisnu adalah tempat curhat yang unik. Jangan harap dia cuma bilang "sabar ya". Dia akan mendengarkan, lalu memberikan fakta dan data berdasarkan pengalamannya untuk membantumu memecahkan masalah. Solutif! 💡`
                : `Wisnu is a unique listener. Don't expect him to just say "be patient". He will listen, then provide facts and data based on his experience to help you solve the problem. Solution-oriented! 💡`;
        }

        // 38. Statistik Fisik (Tinggi/Berat)
        if (q.includes("tinggi") || q.includes("berat") || q.includes("badan") || q.includes("cm") || q.includes("kg")) {
            return isIndo
                ? `Postur Wisnu cukup ideal untuk olahraga: Tinggi 178 cm dan Berat 80 kg. Proporsi yang pas untuk smash bola voli! 📏`
                : `Wisnu's posture is quite ideal for sports: Height 178 cm and Weight 80 kg. Perfect proportion for smashing a volleyball! 📏`;
        }

        // 39. Event Kampus (Konsistensi)
        if (q.includes("event") || q.includes("acara") || q.includes("panitia") || q.includes("semester")) {
            return isIndo
                ? `Sejak semester 1 hingga sekarang, Wisnu selalu hadir dan aktif di setiap event kampus. Dia tidak mau melewatkan momen untuk belajar berorganisasi dan memperluas networking. 📅`
                : `From semester 1 until now, Wisnu has always been present and active in every campus event. He doesn't want to miss moments to learn organization and expand networking. 📅`;
        }

        // 40. Kolaborasi (Kerjasama)
        if (q.includes("kolaborasi") || q.includes("kerjasama") || q.includes("partner") || q.includes("gabung")) {
            return isIndo
                ? `Wisnu sangat terbuka untuk diajak kerjasama. Asalkan visinya sama dan tujuannya jelas, dia siap berkontribusi 100%. Teamwork makes the dream work. 🤝`
                : `Wisnu is very open to collaboration. As long as the vision is shared and the goal is clear, he is ready to contribute 100%. Teamwork makes the dream work. 🤝`;
        }

        // 41. Jus Favorit (Alpukat/Naga)
        if (q.includes("alpukat") || q.includes("naga") || q.includes("jus") || q.includes("juice")) {
            return isIndo
                ? `Kalau mau traktir Wisnu, pesankan Jus Alpukat atau Jus Buah Naga. Itu adalah 'bensin' vitamin favoritnya. Sehat dan enak! 🥑🐉`
                : `If you want to treat Wisnu, order Avocado Juice or Dragon Fruit Juice. Those are his favorite vitamin 'fuels'. Healthy and tasty! 🥑🐉`;
        }

        // 42. Nasi Kebuli (Spesifik)
        if (q.includes("kebuli") || q.includes("timur tengah") || q.includes("arab")) {
            return isIndo
                ? `Ini dia makanan para juara bagi Wisnu: Nasi Kebuli. Rempahnya yang kuat sangat cocok dengan seleranya. Jangan lupa ajak dia kalau ada restoran Kebuli enak! 🍛`
                : `This is the champion's meal for Wisnu: Nasi Kebuli. The strong spices match his taste perfectly. Don't forget to invite him if you know a good Kebuli restaurant! 🍛`;
        }

        // 43. Ikan Bakar & Nasi Goreng
        if (q.includes("ikan") || q.includes("goreng") || q.includes("seafood")) {
            return isIndo
                ? `Wisnu suka banget Ikan Bakar (segar!) dan Nasi Goreng. Menu sederhana tapi kalau dimasak dengan benar, bisa bikin mood coding-nya naik drastis. 🐟`
                : `Wisnu really loves Grilled Fish (fresh!) and Fried Rice. Simple menus but if cooked right, they can boost his coding mood drastically. 🐟`;
        }

        // 44. Sejarah Motor (Kenangan)
        if (q.includes("motor") || q.includes("rusak") || q.includes("hancur")) {
            return isIndo
                ? `Motor lama Wisnu punya sejarah pilu: Hancur total alias 'tidak bisa hidup lagi' setelah kecelakaan. Tapi, pengendara-nya (Wisnu) bangkit lebih kuat. Barang bisa diganti, nyawa adalah amanah. 🏍️`
                : `Wisnu's old bike has a sad history: Totally destroyed aka 'dead forever' after an accident. But the rider (Wisnu) rose back stronger. Things can be replaced, life is a trust. 🏍️`;
        }

        // 45. Sakit Hati (Pengalaman)
        if (q.includes("sakit hati") || q.includes("patah hati") || q.includes("kecewa")) {
            return isIndo
                ? `Wisnu pernah merasakan sakit hati, dan dia tidak malu mengakuinya. Justru rasa sakit itu yang mengajarkannya untuk lebih berhati-hati dan menghargai ketulusan. What doesn't kill you makes you stronger. 💔`
                : `Wisnu has felt heartbreak, and he's not ashamed to admit it. That pain taught him to be more careful and appreciate sincerity. What doesn't kill you makes you stronger. 💔`;
        }

        // 46. Hubungan Manusia (Humanis)
        if (q.includes("manusia") || q.includes("sosial") || q.includes("human") || q.includes("orang")) {
            return isIndo
                ? `Bagi Wisnu, teknologi itu penting, tapi hubungan sesama manusia jauh lebih penting. Ia ingin mengenal orang lain secara personal, bukan transaksional. Kita semua manusia, bukan robot. 🌍`
                : `To Wisnu, technology is important, but human connection is far more important. He wants to know people personally, not transactionally. We are humans, not robots. 🌍`;
        }

        // 47. Jalan-jalan (Tujuan Jelas)
        if (q.includes("jalan") || q.includes("trip") || q.includes("pergi") || q.includes("main")) {
            return isIndo
                ? `Wisnu suka diajak jalan kemanapun, syaratnya satu: Tujuannya Jelas. Dia bukan tipe yang suka muter-muter buang bensin tanpa arah. Efisiensi waktu itu penting! 🚗`
                : `Wisnu likes going anywhere, with one condition: Clear Destination. He's not the type to drive around aimlessly wasting gas. Time efficiency is important! 🚗`;
        }

        // 48. Aeon Deltamas (Lokasi Favorit)
        if (q.includes("aeon") || q.includes("deltamas") || q.includes("cikarang")) {
            return isIndo
                ? `Spot favorit Wisnu di Cikarang? Aeon Mall Deltamas. Kalau kamu lihat cowok tinggi 178cm lagi jalan santai di sana, mungkin itu Wisnu. 🏢`
                : `Wisnu's favorite spot in Cikarang? Aeon Mall Deltamas. If you see a 178cm tall guy chilling there, it might be Wisnu. 🏢`;
        }

        // 49. Magang & HRD (Call to Action)
        if (q.includes("magang") || q.includes("intern") || q.includes("hrd") || q.includes("rekrut") || q.includes("hire")) {
            return isIndo
                ? `📢 Pesan untuk HRD: Wisnu sangat siap dan ingin magang di perusahaan Bapak/Ibu. Ia membawa paket lengkap: Skill IT modern, Attitude santri, dan Jiwa kepemimpinan. Hubungi dia segera! 💼`
                : `📢 Message for HR: Wisnu is very ready and eager to intern at your company. He brings the full package: Modern IT skills, Strong attitude, and Leadership spirit. Contact him immediately! 💼`;
        }

        // 50. Closing Statement (Tujuan Hidup)
        if (q.includes("hidup") || q.includes("tujuan") || q.includes("goal") || q.includes("mimpi")) {
            return isIndo
                ? `Pada akhirnya, tujuan hidup Wisnu sederhana namun berat: Berbakti kepada Allah dan Menyayangi Keluarga. Karir IT, uang, dan prestasi hanyalah alat untuk mencapai tujuan mulia tersebut. ✨`
                : `In the end, Wisnu's life goal is simple yet profound: To serve Allah and Love his Family. IT career, money, and achievements are just tools to reach that noble goal. ✨`;
        }


        // ============================================
        // SECTION 0: GREETINGS & POLITENESS
        // ============================================

        if (q.includes("halo") || q.includes("hai") || q.includes("hello") || q.includes("hi")) {
            if (isIndo) {
                return `Halo. Senang Anda berkunjung ke sini. 👋\n\nSaya adalah asisten virtual Wisnu. Saya cenderung tenang dan fokus, namun saya di sini untuk memastikan Anda mendapatkan informasi yang Anda butuhkan dengan efisien.\n\nApa yang ingin Anda ketahui tentang Wisnu?\n• 💼 Profil & Dedikasi\n• 🛠️ Tech Stack (Keahlian)\n• 📁 Karya & Proyek\n• 🎓 Pendidikan\n• 📧 Hubungi Langsung\n\nSilakan tanya apa saja, saya akan menjawabnya dengan sungguh-sungguh. 😊`;
            }
            return `Hello. It's a pleasure to have you here. 👋\n\nI am Wisnu's virtual assistant. I tend to be quiet and focused, but I am here to ensure you get the information you need efficiently.\n\nWhat would you like to know about Wisnu?\n• 💼 Profile & Dedication\n• 🛠️ Technical Expertise\n• 📁 Projects & Portfolio\n• 🎓 Education\n• 📧 Contact Directly\n\nFeel free to ask, I'm here to help. 😊`;
        }

        if ((q.includes("thank") || q.includes("terima kasih") || q.includes("makasih") || q.includes("thanks")) && q.length < 30) {
            if (isIndo) {
                return `Sama-sama. Senang bisa membantu Anda hari ini. 😊\n\nBagi Wisnu, detail kecil itu penting, termasuk memastikan Anda mendapatkan jawaban yang memuaskan. Ada hal lain yang bisa saya bantu sebelum Anda melanjutkan?`;
            }
            return `You're very welcome. It was a pleasure assisting you. 😊\n\nWisnu believes that every detail matters, including ensuring you have the best experience here. Is there anything else I can do for you?`;
        }

        // ============================================
        // SECTION 1: AI IDENTITY / META
        // ============================================

        if (q.includes("bot") || q.includes("ai") || q.includes("assistant") || q.includes("asisten") ||
            (q.includes("who") && (q.includes("make") || q.includes("create"))) ||
            (q.includes("are") && q.includes("wisnu")) || (q.includes("kamu") && q.includes("wisnu"))) {
            if (isIndo) {
                return `Saya adalah asisten virtual Wisnu Alfian.\n\nWisnu membangun saya dengan fokus dan dedikasi untuk menjadi "representasi digital" dirinya. Saya diam saat tidak dibutuhkan, namun selalu siap memberikan fakta akurat tentang profilnya 24/7.\n\nAnggaplah saya sebagai sisi teknis Wisnu yang siap membantu Anda kapan saja.`;
            }
            return `I am Wisnu's Virtual Assistant.\n\nWisnu built me with focus and dedication to be his "digital representation." I remain quiet when not needed, but always ready to provide accurate facts about his profile 24/7.\n\nThink of me as Wisnu's technical side, here to assist you anytime.`;
        }

        if (q.includes("human") || q.includes("manusia") || q.includes("real") || q.includes("asli") || q.includes("orang")) {
            if (isIndo) {
                return `Secara teknis, saya adalah barisan kode. Saya tidak memiliki raga, tapi saya membawa nilai-nilai Wisnu: Kejujuran, Presisi, dan Kepedulian.\n\nSaya diciptakan agar Anda tidak perlu menunggu lama untuk mendapatkan jawaban. Meskipun saya bukan manusia, informasi yang saya berikan tentang Wisnu sangat tulus dan faktual. 🤝`;
            }
            return `Technically, I am a series of code. I have no physical form, but I carry Wisnu's values: Honesty, Precision, and Care.\n\nI was created so you wouldn't have to wait long for answers. Although I am not human, the information I share about Wisnu is sincere and factual. 🤝`;
        }

        // ============================================
        // SECTION 2: IDENTITY & PROFILE
        // ============================================

        // Logika profil diletakkan setelah pengecekan kata kunci spesifik (seperti pacar)
        if (q.includes("who") || q.includes("siapa") || q.includes("intro") || q.includes("profile") || q.includes("background") || q.includes("about")) {
            if (isIndo) {
                return `Wisnu Alfian Nur Ashar adalah seorang praktisi teknologi yang bergerak dengan satu tujuan: Efisiensi melalui Inovasi. 👨‍💻\n\nSaat ini, beliau sedang menempuh pendidikan Teknologi Informasi di President University. Wisnu adalah tipe orang yang 'dingin' dalam eksekusi teknis namun sangat 'hangat' dalam memikirkan dampak solusi bagi pengguna.\n\nSpesialisasi Utama:\n• 🚀 Full-Stack Development\n• 🛡️ Cyber Security\n\nBeliau tidak hanya menulis kode; beliau membangun bisnis. Karyanya telah membantu bisnis nyata dan melayani ribuan pengguna aktif. Satu fokus, tanpa distraksi, hingga solusi tercapai. 🎯`;
            }
            return `Wisnu Alfian Nur Ashar is a tech practitioner driven by a single purpose: Efficiency through Innovation. 👨‍💻\n\nCurrently an IT student at President University. Wisnu is known for being 'cool-headed' in technical execution but deeply passionate about the impact his solutions have on people.\n\nCore Specialties:\n• 🚀 Full-Stack Development\n• 🛡️ Cyber Security\n\nHe doesn't just write code; he builds businesses. His work has empowered real-world enterprises and served thousands of active users. One direction, zero distractions, until the solution is delivered. 🎯`;
        }    

// ============================================
        // SECTION 3: EDUCATION (DATA VALID & LENGKAP)
        // ============================================

        if (q.includes("university") || q.includes("universitas") || q.includes("kuliah") ||
            q.includes("campus") || q.includes("kampus") || q.includes("education") ||
            q.includes("pendidikan") || q.includes("study") || q.includes("sekolah") || q.includes("tk") || q.includes("sd") || q.includes("smp") || q.includes("sma")) {
            
            if (isIndo) {
                return `Jejak Pendidikan 🎓\n\nPerjalanan pendidikan Wisnu adalah sebuah cerita panjang lintas pulau, dari Tarakan, Bone, hingga Cikarang. Saat ini, ia sedang menempuh studi sarjana di President University jurusan Teknologi Informasi.\n\nBerikut adalah riwayat pendidikan lengkapnya:\n\nPerguruan Tinggi:\n🏫 President University (Cikarang) - Information Technology\n\nPondok Pesantren & Menengah:\n🕌 MAS AS'ADIYAH PUTRA SENGKANG - MACANANG\n🕌 MTS AS'ADIYAH PUTERA 2 PUSAT SENGKANG\n(Di sinilah fondasi agama dan kedisiplinan mentalnya ditempa)\n\nDasar & Awal:\n🎒 SDN 84 WATANG CENRANA\n🎒 SD NEGRI 009 TARAKAN\n🎈 TK EKA DIYASA BANDARA JUWATA TARAKAN\n\nDari TK di bandara hingga kuliah IT, setiap tahap membentuk Wisnu menjadi pribadi yang adaptif dan berwawasan luas. 📚`;
            }
            return `Educational Journey 🎓\n\nWisnu's education is a long journey across islands, from Tarakan to Bone, and now Cikarang. Currently, he is pursuing his bachelor's degree in Information Technology at President University.\n\nHere is his complete educational history:\n\nHigher Education:\n🏫 President University (Cikarang) - Information Technology\n\nIslamic Boarding & Secondary School:\n🕌 MAS AS'ADIYAH PUTRA SENGKANG - MACANANG\n🕌 MTS AS'ADIYAH PUTERA 2 PUSAT SENGKANG\n(This is where his religious foundation and mental discipline were forged)\n\nPrimary & Early Years:\n🎒 SDN 84 WATANG CENRANA\n🎒 SD NEGRI 009 TARAKAN\n🎈 TK EKA DIYASA BANDARA JUWATA TARAKAN\n\nFrom kindergarten at the airport to IT university, every step has shaped Wisnu into an adaptive and broad-minded individual. 📚`;
        }

        if (q.includes("gpa") || q.includes("ipk") || q.includes("grade") || q.includes("nilai") || q.includes("prestasi akademik")) {
            if (isIndo) {
                return `Performa Akademik 📊\n\nWisnu menjaga standar akademisnya dengan tenang dan konsisten. Filosofi belajarnya berfokus pada keseimbangan antara teori dan praktik.\n\nPrinsip Utama:\n1. Pemahaman Mendalam: Nilai di atas kertas penting, namun kemampuan memecahkan masalah (problem solving) di dunia nyata jauh lebih vital.\n2. Keseimbangan (Balance): Menjaga IPK tetap kompetitif sembari membangun portofolio proyek yang nyata.\n\nBagi Wisnu, mahasiswa IT terbaik bukan hanya yang hafal buku, tapi yang bisa mengubah kode menjadi solusi. 💪`;
            }
            return `Academic Performance 📊\n\nWisnu maintains his academic standards quietly and consistently. His learning philosophy focuses on the balance between theory and practice.\n\nCore Principles:\n1. Deep Understanding: Grades on paper are important, but real-world problem solving skills are vital.\n2. Balance: Keeping a competitive GPA while building a tangible project portfolio.\n\nTo Wisnu, the best IT student isn't just one who memorizes books, but one who turns code into solutions. 💪`;
        }

        if (q.includes("graduate") || q.includes("graduation") || q.includes("lulus") || q.includes("wisuda") || q.includes("tamat")) {
            if (isIndo) {
                return `Target Kelulusan & Masa Depan 🎓\n\nWisnu menargetkan untuk lulus dari President University tepat waktu dengan kesiapan industri yang matang.\n\nTujuan akhirnya bukan sekadar gelar Sarjana Komputer, melainkan:\n✅ Portofolio Kuat: Memiliki deretan aplikasi yang sudah teruji.\n✅ Mentalitas Baja: Hasil tempaan pesantren dan tekanan akademis.\n✅ Keahlian Relevan: Menguasai teknologi yang dibutuhkan pasar global.\n\nIa sedang berjalan menuju garis finish dengan fokus penuh. Doakan yang terbaik! 🚀`;
            }
            return `Graduation Target & Future 🎓\n\nWisnu aims to graduate from President University on time with full industry readiness.\n\nHis ultimate goal is not just a Bachelor's degree, but:\n✅ Strong Portfolio: A lineup of tested applications.\n✅ Steel Mentality: Forged from boarding school discipline and academic pressure.\n✅ Relevant Skills: Mastering technologies needed by the global market.\n\nHe is walking towards the finish line with full focus. Wish him the best! 🚀`;
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

        if (q.includes("hobi") || q.includes("hobby") || q.includes("suka") || q.includes("interest") || q.includes("free time") || q.includes("waktu luang")) {
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
        ⚡ ybrid AI AssistantAstroybrid AI Assistant - Modern static site generator
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
        ⚡ ybrid AI AssistantAstroybrid AI Assistant - Modern static site generator
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
        🚀 ybrid AI AssistantZero JavaScript by Defaultybrid AI Assistant
        - Ship less JavaScript = faster loading
        - Only load JS when necessary (islands architecture)

        ⚡ ybrid AI AssistantUltra-Fast Performanceybrid AI Assistant
        - Static site generation untuk speed
        - Automatic code splitting
        - Built-in image optimization
        - Lazy loading out of the box

        🎯 ybrid AI AssistantPerfect untuk Portfolioybrid AI Assistant
        - Content-focused sites
        - SEO-friendly (great for discoverability!)
        - Markdown support untuk easy content management

        💻 ybrid AI AssistantDeveloper Experienceybrid AI Assistant
        - Component-based architecture
        - Bisa pakai React, Vue, Svelte di project yang sama!
        - TypeScript support
        - Hot module replacement (HMR)

        🔧 ybrid AI AssistantBuilt-in Featuresybrid AI Assistant
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
        🚀 ybrid AI AssistantZero JavaScript by Defaultybrid AI Assistant
        - Ship less JavaScript = faster loading
        - Only load JS when necessary (islands architecture)

        ⚡ ybrid AI AssistantUltra-Fast Performanceybrid AI Assistant
        - Static site generation for speed
        - Automatic code splitting
        - Built-in image optimization
        - Lazy loading out of the box

        🎯 ybrid AI AssistantPerfect for Portfolioybrid AI Assistant
        - Content-focused sites
        - SEO-friendly (great for discoverability!)
        - Markdown support for easy content management

        💻 ybrid AI AssistantDeveloper Experienceybrid AI Assistant
        - Component-based architecture
        - Can use React, Vue, Svelte in same project!
        - TypeScript support
        - Hot module replacement (HMR)

        🔧 ybrid AI AssistantBuilt-in Featuresybrid AI Assistant
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
        📍 ybrid AI AssistantHome / Heroybrid AI Assistant
        - Introduction & quick overview
        - Call-to-action untuk explore lebih lanjut
        - Eye-catching design

        📍 ybrid AI AssistantAbout / Profileybrid AI Assistant
        - Detailed background & bio
        - Education & academic info
        - Values & motivation
        - Personal interests

        📍 ybrid AI AssistantSkillsybrid AI Assistant
        - Technical skills showcase
        - Technology stack
        - Proficiency levels
        - Tools & frameworks

        📍 ybrid AI AssistantProjects / Portfolioybrid AI Assistant
        - Featured projects dengan screenshots
        - Technology stack per project
        - Live demo links & GitHub repos
        - Project descriptions & impact

        📍 ybrid AI AssistantExperienceybrid AI Assistant
        - Professional experience
        - Organizational activities
        - Leadership roles
        - Timeline view

        📍 ybrid AI AssistantContactybrid AI Assistant
        - Contact form
        - Social media links
        - Email & professional networks
        - Location info

        Interactive Features:
        🤖 ybrid AI AssistantAI Assistant (LocalAI)ybrid AI Assistant
        - 24/7 intelligent chatbot
        - Answer questions about Wisnu
        - Bilingual (Indonesian & English)
        - Context-aware responses

        ⚡ ybrid AI AssistantPerformance Featuresybrid AI Assistant
        - Lazy loading images
        - Optimized assets
        - Fast page transitions
        - Minimal JavaScript

        🎯 ybrid AI AssistantUX Featuresybrid AI Assistant
        - Smooth scrolling
        - Responsive navigation
        - Mobile-friendly hamburger menu
        - Dark/Light mode (if implemented)
        - Accessibility compliant

        📱 ybrid AI AssistantResponsive Designybrid AI Assistant
        - Desktop optimized (1920px+)
        - Laptop friendly (1366px+)
        - Tablet compatible (768px+)
        - Mobile responsive (375px+)

        🔍 ybrid AI AssistantSEO Optimizedybrid AI Assistant
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
        📍 ybrid AI AssistantHome / Heroybrid AI Assistant
        - Introduction & quick overview
        - Call-to-action to explore further
        - Eye-catching design

        📍 ybrid AI AssistantAbout / Profileybrid AI Assistant
        - Detailed background & bio
        - Education & academic info
        - Values & motivation
        - Personal interests

        📍 ybrid AI AssistantSkillsybrid AI Assistant
        - Technical skills showcase
        - Technology stack
        - Proficiency levels
        - Tools & frameworks

        📍 ybrid AI AssistantProjects / Portfolioybrid AI Assistant
        - Featured projects with screenshots
        - Technology stack per project
        - Live demo links & GitHub repos
        - Project descriptions & impact

        📍 ybrid AI AssistantExperienceybrid AI Assistant
        - Professional experience
        - Organizational activities
        - Leadership roles
        - Timeline view

        📍 ybrid AI AssistantContactybrid AI Assistant
        - Contact form
        - Social media links
        - Email & professional networks
        - Location info

        Interactive Features:
        🤖 ybrid AI AssistantAI Assistant (LocalAI)ybrid AI Assistant
        - 24/7 intelligent chatbot
        - Answer questions about Wisnu
        - Bilingual (Indonesian & English)
        - Context-aware responses

        ⚡ ybrid AI AssistantPerformance Featuresybrid AI Assistant
        - Lazy loading images
        - Optimized assets
        - Fast page transitions
        - Minimal JavaScript

        🎯 ybrid AI AssistantUX Featuresybrid AI Assistant
        - Smooth scrolling
        - Responsive navigation
        - Mobile-friendly hamburger menu
        - Dark/Light mode (if implemented)
        - Accessibility compliant

        📱 ybrid AI AssistantResponsive Designybrid AI Assistant
        - Desktop optimized (1920px+)
        - Laptop friendly (1366px+)
        - Tablet compatible (768px+)
        - Mobile responsive (375px+)

        🔍 ybrid AI AssistantSEO Optimizedybrid AI Assistant
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
        🌐 ybrid AI AssistantVercel / Netlifyybrid AI Assistant
        - Modern cloud platform untuk static sites
        - Global CDN (Content Delivery Network)
        - Automatic HTTPS/SSL
        - Edge network untuk fast loading worldwide

        Deployment Process:
        🔄 ybrid AI AssistantContinuous Deploymentybrid AI Assistant
        - Connected dengan Git repository (GitHub)
        - Automatic deployment setiap push ke main branch
        - Preview deployments untuk testing
        - Rollback capability jika ada issues

        Performance Benefits:
        ⚡ ybrid AI AssistantGlobal CDNybrid AI Assistant
        - Content served dari server terdekat dengan user
        - Faster loading times di seluruh dunia
        - 99.99% uptime guarantee

        🔒 ybrid AI AssistantSecurityybrid AI Assistant
        - Automatic SSL certificates
        - DDoS protection
        - Secure headers configured
        - Regular security updates

        🚀 ybrid AI AssistantDeveloper Experienceybrid AI Assistant
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
        🌐 ybrid AI AssistantVercel / Netlifyybrid AI Assistant
        - Modern cloud platform for static sites
        - Global CDN (Content Delivery Network)
        - Automatic HTTPS/SSL
        - Edge network for fast loading worldwide

        Deployment Process:
        🔄 ybrid AI AssistantContinuous Deploymentybrid AI Assistant
        - Connected with Git repository (GitHub)
        - Automatic deployment on every push to main branch
        - Preview deployments for testing
        - Rollback capability if issues arise

        Performance Benefits:
        ⚡ ybrid AI AssistantGlobal CDNybrid AI Assistant
        - Content served from nearest server to user
        - Faster loading times worldwide
        - 99.99% uptime guarantee

        🔒 ybrid AI AssistantSecurityybrid AI Assistant
        - Automatic SSL certificates
        - DDoS protection
        - Secure headers configured
        - Regular security updates

        🚀 ybrid AI AssistantDeveloper Experienceybrid AI Assistant
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
        📅 ybrid AI AssistantRegular Updatesybrid AI Assistant
        - Content updates: Setiap ada project baru atau achievement
        - Technical updates: Monthly untuk security & performance
        - Feature additions: Quarterly atau sesuai kebutuhan
        - Bug fixes: Immediate saat ditemukan

        Jenis Update:
        ✨ ybrid AI AssistantContent Updatesybrid AI Assistant
        - New projects ditambahkan ke portfolio
        - Skills & technologies terbaru
        - Experience & organizational activities
        - Blog posts (jika ada)

        🔧 ybrid AI AssistantTechnical Updatesybrid AI Assistant
        - Framework version upgrades (Astro, dependencies)
        - Security patches
        - Performance optimizations
        - Bug fixes & improvements

        🎨 ybrid AI AssistantDesign Updatesybrid AI Assistant
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
        🔔 ybrid AI AssistantNewsletterybrid AI Assistant (jika tersedia)
        - Subscribe untuk update via email

        🔗 ybrid AI AssistantSocial Mediaybrid AI Assistant
        - Follow untuk announcements
        - LinkedIn untuk professional updates

        📧 ybrid AI AssistantDirect Contactybrid AI Assistant
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
        📅 ybrid AI AssistantRegular Updatesybrid AI Assistant
        - Content updates: Whenever new projects or achievements
        - Technical updates: Monthly for security & performance
        - Feature additions: Quarterly or as needed
        - Bug fixes: Immediate when discovered

        Types of Updates:
        ✨ ybrid AI AssistantContent Updatesybrid AI Assistant
        - New projects added to portfolio
        - Latest skills & technologies
        - Experience & organizational activities
        - Blog posts (if any)

        🔧 ybrid AI AssistantTechnical Updatesybrid AI Assistant
        - Framework version upgrades (Astro, dependencies)
        - Security patches
        - Performance optimizations
        - Bug fixes & improvements

        🎨 ybrid AI AssistantDesign Updatesybrid AI Assistant
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
        🔔 ybrid AI AssistantNewsletterybrid AI Assistant (if available)
        - Subscribe for email updates

        🔗 ybrid AI AssistantSocial Mediaybrid AI Assistant
        - Follow for announcements
        - LinkedIn for professional updates

        📧 ybrid AI AssistantDirect Contactybrid AI Assistant
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
        📱 ybrid AI AssistantMobile (375px - 767px)ybrid AI Assistant
        - Optimized untuk smartphone
        - Touch-friendly interfaces
        - Simplified navigation (hamburger menu)
        - Vertical scrolling optimized
        - Readable font sizes

        📱 ybrid AI AssistantTablet (768px - 1023px)ybrid AI Assistant
        - Balanced layout untuk medium screens
        - Touch & mouse support
        - Adaptive grid layouts
        - Optimized image sizes

        💻 ybrid AI AssistantLaptop (1024px - 1439px)ybrid AI Assistant
        - Full-featured experience
        - Multi-column layouts
        - Enhanced visuals
        - Optimal reading width

        🖥️ ybrid AI AssistantDesktop (1440px+)ybrid AI Assistant
        - Maximum visual impact
        - Wide layouts
        - High-resolution images
        - All features unlocked

        Responsive Features:
        ✅ ybrid AI AssistantFluid Typographyybrid AI Assistant
        - Font sizes scale dengan viewport
        - Optimal readability di semua devices

        ✅ ybrid AI AssistantFlexible Imagesybrid AI Assistant
        - Responsive images dengan proper sizing
        - Art direction untuk different screens
        - Lazy loading untuk performance

        ✅ ybrid AI AssistantAdaptive Navigationybrid AI Assistant
        - Desktop: Full horizontal menu
        - Mobile: Hamburger menu
        - Smooth transitions

        ✅ ybrid AI AssistantTouch Optimizationybrid AI Assistant
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
        📱 ybrid AI AssistantMobile (375px - 767px)ybrid AI Assistant
        - Optimized for smartphones
        - Touch-friendly interfaces
        - Simplified navigation (hamburger menu)
        - Vertical scrolling optimized
        - Readable font sizes

        📱 ybrid AI AssistantTablet (768px - 1023px)ybrid AI Assistant
        - Balanced layout for medium screens
        - Touch & mouse support
        - Adaptive grid layouts
        - Optimized image sizes

        💻 ybrid AI AssistantLaptop (1024px - 1439px)ybrid AI Assistant
        - Full-featured experience
        - Multi-column layouts
        - Enhanced visuals
        - Optimal reading width

        🖥️ ybrid AI AssistantDesktop (1440px+)ybrid AI Assistant
        - Maximum visual impact
        - Wide layouts
        - High-resolution images
        - All features unlocked

        Responsive Features:
        ✅ ybrid AI AssistantFluid Typographyybrid AI Assistant
        - Font sizes scale with viewport
        - Optimal readability on all devices

        ✅ ybrid AI AssistantFlexible Imagesybrid AI Assistant
        - Responsive images with proper sizing
        - Art direction for different screens
        - Lazy loading for performance

        ✅ ybrid AI AssistantAdaptive Navigationybrid AI Assistant
        - Desktop: Full horizontal menu
        - Mobile: Hamburger menu
        - Smooth transitions

        ✅ ybrid AI AssistantTouch Optimizationybrid AI Assistant
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
        // NO MATCH FOUND - RETURN NULL TO USE API
        // ============================================

        return null;
    }
    
}
