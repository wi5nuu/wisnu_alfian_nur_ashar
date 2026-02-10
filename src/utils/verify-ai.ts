
import { LocalAI } from "./LocalAI";
import { AIService } from "./AIService";

async function testAI() {
    console.log("--- Starting AI Intelligence Test ---");

    // 1. Fuzzy Matching Test
    console.log("\n[TEST] Fuzzy Matching:");
    const queries = ["haloo", "projk", "tampann", "smartt"];
    for (const q of queries) {
        const res = await AIService.getResponse(q);
        const isFallback = res.includes("Maaf, saya belum memiliki informasi") || res.includes("I'm sorry");
        console.log(`Query: "${q}" -> ${isFallback ? "❌ Failed (Fallback)" : "✅ Passed"}`);
    }

    // 2. Context Awareness Test
    console.log("\n[TEST] Context Awareness:");
    console.log("Sending: 'Ceritakan tentang Ashar Grosir'");
    await AIService.getResponse("Ceritakan tentang Ashar Grosir");

    console.log("Sending follow-up: 'Apa teknologinya?'");
    const contextRes = await AIService.getResponse("Apa teknologinya?");
    const isContextual = contextRes.includes("Portfolio & Proyek Unggulan") || contextRes.includes("Ashar Grosir");
    console.log(`Result: ${isContextual ? "✅ Passed (Context maintained)" : "❌ Failed (Lost context)"}`);

    // 3. Fallback Test
    console.log("\n[TEST] Helpful Fallback:");
    const fallbackRes = await AIService.getResponse("siapa presiden Indonesia pertama?");
    const okFallback = fallbackRes.includes("Coba tanya saya tentang") || fallbackRes.includes("Try asking me about");
    console.log(`Result: ${okFallback ? "✅ Passed (Helpful list shown)" : "❌ Failed"}`);

    console.log("\n--- Test Finished ---");
}

testAI().catch(console.error);
