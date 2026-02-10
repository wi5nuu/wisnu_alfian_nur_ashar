
import { LocalAI } from "./src/utils/LocalAI";

const query = "Bagaimana cara Wisnu mengimplementasikan WebSockets?";
console.log(`Original Query: "${query}"`);

// Mocking the internal normalize method
const normalize = (q: string) => q.toLowerCase().replace(/[?.!,]/g, '').replace(/\s+/g, ' ').trim();
const normalized = normalize(query);
console.log(`Normalized Query: "${normalized}"`);

const SOCIAL_DATA = (LocalAI as any).SOCIAL_DATA;
const entries = Object.entries(SOCIAL_DATA);

console.log("\n--- Checking for matches ---\n");

let found = false;
for (const [key, entry] of entries) {
    const entryData = entry as any;
    const aliases = entryData.aliases || [];

    // Check key
    if (normalized.includes(key.toLowerCase())) {
        console.log(`✅ MATCH FOUND by KEY: "${key}"`);
        found = true;
        break;
    }

    // Check aliases
    for (const alias of aliases) {
        const al = alias.toLowerCase();
        if (normalized.includes(al)) {
            console.log(`✅ MATCH FOUND by ALIAS: "${al}" for Key: "${key}"`);
            found = true;
            break;
        }
    }
    if (found) break;
}

if (!found) {
    console.log("❌ NO MATCH FOUND");
}
