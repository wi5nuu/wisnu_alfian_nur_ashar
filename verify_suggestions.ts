
import { LocalAI } from "./src/utils/LocalAI";

const testCases = [
    { query: "👤 Profil lengkap Wisnu", expected: "Full-Stack Developer" },
    { query: "💼 Pengalaman professional", expected: "startup" },
    { query: "🎓 Pendidikan dan organisasi", expected: "PUFA" },
    { query: "🚀 Proyek-proyek unggulan", expected: "Ashar Grosir" },
    { query: "🚀 Visi Karir - Goals dan career aspirations", expected: "Career Goals" }
];

console.log("--- Starting Suggestion Verification ---\n");

testCases.forEach((tc, i) => {
    const response = LocalAI.process(tc.query);
    const passed = response ? response.toLowerCase().includes(tc.expected.toLowerCase()) : false;
    console.log(`${i + 1}. Query: "${tc.query}"`);
    console.log(`   Response Match: ${passed ? "✅ PASS" : "❌ FAIL"}`);
    if (!passed) {
        console.log(`   Expected to include: "${tc.expected}"`);
        console.log(`   Actual: "${response ? response.substring(0, 100) : 'null'}..."`);
    }
});
