
import fs from 'fs';

const path = 'd:\\Asli_Portfolio\\src\\utils\\LocalAI.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. HUMAN-LIKE SOCIAL (Invitations, Job Offers, Deep Compliments)
const humanSocialNew = `        // 0.00: HUMAN-LIKE SOCIAL (High Accuracy Handlers)
        
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
`;

// Inject right after the process method starts (it's already re-ordered to be above context logic)
// Based on previous file structure, it starts with method definition, then q and isIndo, then -1 small talk.
// I'll put it right after -1 and before Section 0 robot identity.

const smallTalkMarker = /\/\/\s*-1\.[\s\S]*?\}\s*(\r\n|\n)/;
if (smallTalkMarker.test(content)) {
    content = content.replace(smallTalkMarker, (match) => match + humanSocialNew + '\n');
    console.log("✅ Human-Like Social logic injected.");
} else {
    console.log("❌ Small Talk Marker NOT FOUND - check file structure.");
}

fs.writeFileSync(path, content, 'utf8');
