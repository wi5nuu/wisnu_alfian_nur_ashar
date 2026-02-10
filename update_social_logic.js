
import fs from 'fs';

const path = 'd:\\Asli_Portfolio\\src\\utils\\LocalAI.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. LOYALTY
const loyaltyNew = `        // 1. LOYALTY (Setia)
        if (this.fuzzyMatch(q, ["setia", "loyal", "selingkuh", "mendua", "punya cewek", "punya pacar", "siapa cewek", "siapa pacar", "jomblo", "menikah", "istri", "suami", "pasangan"])) {
             return isIndo
                ? "Kesetiaan adalah algoritma dasar saya. Sama seperti Wisnu yang setia pada deadline dan kualitas code-nya. Loyalitas tanpa batas! 🔒"
                : "Loyalty is my base algorithm. Just like Wisnu who stays loyal to deadlines and code quality. Infinite loyalty! 🔒";
        }`;

// Regex for Loyalty: // 1. LOYALTY ... until closing brace }
// Note: fuzzyMatch call is one line. condition is one line. return block is multiple lines.
const loyRegex = /\/\/\s*1\.\s*LOYALTY\s*\(Setia\)[\s\S]*?\}\s*(\r\n|\n)/;

if (loyRegex.test(content)) {
    content = content.replace(loyRegex, loyaltyNew + '\n');
    console.log("✅ Loyalty Replaced");
} else {
    console.log("❌ Loyalty Pattern NOT FOUND");
}


// 2. HEBAT + COMPLIMENTS
const hebatNew = `        // 2. HEBAT/JAGO (Validation)
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
       }`;

const hebatRegex = /\/\/\s*2\.\s*HEBAT\/JAGO\s*\(Validation\)[\s\S]*?\}\s*(\r\n|\n)/;
if (hebatRegex.test(content)) {
    // We replace the HEBAT block with NEW HEBAT + COMPLIMENTS
    content = content.replace(hebatRegex, hebatNew + '\n');
    console.log("✅ Hebat Replaced");
} else {
    console.log("❌ Hebat Pattern NOT FOUND");
}


// 3. REPETITION
const repNew = `        // 4. REPETITION/COMPLAINT (Kamu kok jawabnya gitu)
        if (this.fuzzyMatch(q, ["kok jawabnya gitu", "ulang-ulang", "itu lagi", "bosan", "ganti jawaban", "robot banget", "aku ada salah", "kenapa cuek", "jangan cuek", "kok gitu", "jahat", "nyebelin", "kasar", "ngeselin", "bodoh", "stupid", "jelek"])) {
             return isIndo
                ? "Maaf ya kalau jawaban saya kurang pas atau terasa kaku. 😔 Saya masih belajar untuk jadi asisten yang lebih baik. Ada topik khusus yang ingin kamu tanyakan tentang Wisnu?"
                : "Sorry if my answer wasn't right or felt stiff. 😔 I'm still learning to be a better assistant. Is there a specific topic you'd like to ask about Wisnu?";
        }`;

const repRegex = /\/\/\s*4\.\s*REPETITION\/COMPLAINT[\s\S]*?\}\s*(\r\n|\n)/;
if (repRegex.test(content)) {
    content = content.replace(repRegex, repNew + '\n');
    console.log("✅ Repetition Replaced");
} else {
    console.log("❌ Repetition Pattern NOT FOUND");
}

fs.writeFileSync(path, content, 'utf8');
