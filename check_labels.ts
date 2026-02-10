
import { LocalAI } from "./src/utils/LocalAI";
import fs from 'fs';

const labels = [
    '👤 Profil Pribadi',
    '🎓 Pendidikan & Akademik',
    '💼 Pengalaman Professional',
    '💻 Technical Skills',
    '🚀 Proyek & Portfolio',
    '🤝 Organisasi & Leadership',
    '🎯 Visi & Goals Karir',
    '📞 Kontak & Ketersediaan',
    '🎮 Hobi & Minat Pribadi',
    '🌟 Kepribadian & Values',
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

let output = "--- Testing Labels Final Verification ---\n";
for (const label of labels) {
    const response = LocalAI.process(label);
    if (!response) {
        output += `Label: "${label}" -> ❌ NO RESPONSE\n`;
        continue;
    }

    const isFallback = response.includes("Hmm, pertanyaan menarik") || response.includes("Interesting question");

    output += `Label: "${label}"\n`;
    if (isFallback) {
        output += `  Result: ❌ FALLBACK\n`;
    } else {
        const preview = response.substring(0, 150).replace(/\n/g, ' ');
        output += `  Result: ✅ MATCHED\n`;
        output += `  Preview: [${preview}...]\n`;
    }
}

fs.writeFileSync('test_results.txt', output);
console.log("Results written to test_results.txt");
