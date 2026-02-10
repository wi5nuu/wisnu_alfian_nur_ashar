
import { LocalAI } from "./src/utils/LocalAI";
import fs from 'fs';

const testCases = [
    { query: "Bagaimana cara Wisnu mengimplementasikan WebSockets?", expect: "WebSockets" },
    { query: "Apa pendapat Wisnu tentang arsitektur Microservices?", expect: "Microservices" },
    { query: "Ceritakan tentang alur CI/CD pipeline yang biasa Wisnu gunakan.", expect: "CI/CD" },
    { query: "Apakah Wisnu familiar dengan Docker dan Kubernetes?", expect: "Docker" },
    { query: "Bagaimana standar keamanan (security) dalam aplikasi yang Wisnu bangun?", expect: "Keamanan" },
    { query: "Apa kontribusi Wisnu di dunia Open Source?", expect: "Open Source" },
    { query: "Apa pandangan Wisnu soal tren teknologi masa depan seperti AI?", expect: "Tren Teknologi" },
    { query: "Bagaimana strategi bisnis Wisnu dalam mengelola proyek?", expect: "Strategi Bisnis" },
    { query: "Apa pelajaran terpenting Wisnu dari pengalaman startup?", expect: "Startup" },
    { query: "Bagaimana gaya Wisnu dalam manajemen tim?", expect: "Manajemen Tim" },
    { query: "Metodologi Project Management apa yang Wisnu gunakan?", expect: "Project Management" },
    { query: "Apakah aplikasi Wisnu sudah patuh pada GDPR/privasi data?", expect: "GDPR" },
    { query: "Bagaimana Wisnu menggunakan Data Analytics untuk mengambil keputusan?", expect: "Data Analytics" },
    { query: "Pernahkah Wisnu melakukan A/B Testing pada produknya?", expect: "A/B Testing" },
    { query: "Seberapa aktif Wisnu di komunitas teknologi?", expect: "Komunitas Teknologi" },
    { query: "Apa topik penelitian/research paper yang pernah Wisnu kerjakan?", expect: "Penelitian" },
    { query: "Apa saja proyek universitas yang paling menantang bagi Wisnu?", expect: "Proyek Universitas" },
    { query: "Bagaimana metode belajar Wisnu agar cepat menguasai teknologi baru?", expect: "Belajar" },
    { query: "Apakah Wisnu memiliki pengalaman sebagai mentor?", expect: "Mentorship" },
    { query: "Bagaimana rutinitas harian Wisnu untuk tetap produktif?", expect: "Rutinitas" },
    { query: "Apa rekomendasi buku dari Wisnu untuk developer?", expect: "Buku" },
    { query: "Di mana Wisnu melihat dirinya dalam 10 tahun ke depan?", expect: "10 Tahun" }
];

let results = "--- Final Knowledge Expansion Verification ---\n";
let passCount = 0;

testCases.forEach((tc, index) => {
    const response = LocalAI.process(tc.query);
    const passed = response && response.toLowerCase().includes(tc.expect.toLowerCase());

    if (passed) passCount++;

    results += `\nTest #${index + 1}: "${tc.query}"\n`;
    results += `Result: ${passed ? "✅ PASS" : "❌ FAIL"}\n`;
    if (!passed) {
        results += `Expected keyword: "${tc.expect}"\n`;
        results += `Actual snippet: "${response ? response.substring(0, 100) + "..." : "NULL"}"\n`;
    } else {
        results += `Snippet: "${response.substring(0, 100)}..."\n`;
    }
});

results += `\n--- Final Score: ${passCount}/${testCases.length} ---\n`;

fs.writeFileSync('test_new_items_results.txt', results);
console.log("Verification completed. Results written to test_new_items_results.txt");
