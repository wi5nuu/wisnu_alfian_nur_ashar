
import { LocalAI } from "./src/utils/LocalAI";

const query = "🤝 Organisasi & Leadership";
console.log(`Debugging Query: "${query}"`);

// We'll simulate parts of LocalAI logic here to see what happens
const rawQuery = query.trim();
const normalized = query.toLowerCase().replace(/[?.!,]/g, '').replace(/\s+/g, ' ').trim();

console.log(`Normalized: "${normalized}"`);

// 1. Check Exact Match
const entries = (LocalAI as any).SOCIAL_DATA as Record<string, { aliases?: string[] }>;
for (const [key, entry] of Object.entries(entries)) {
    const keyLower = key.toLowerCase();
    const isExact = (normalized === keyLower || rawQuery.toLowerCase() === keyLower);
    const matchedAlias = entry.aliases?.find((alias: string) =>
        normalized.includes(alias.toLowerCase()) ||
        rawQuery.toLowerCase().includes(alias.toLowerCase())
    );

    if (isExact) {
        console.log(`✅ EXACT MATCH with Key: "${key}"`);
    }
    if (matchedAlias) {
        console.log(`✅ ALIAS MATCH with Key: "${key}" (Alias: "${matchedAlias}")`);
    }

    // Keyword Match Logic
    if (normalized.includes(keyLower) || rawQuery.toLowerCase().includes(keyLower)) {
        console.log(`✅ KEYWORD MATCH with Key: "${key}"`);
    }
}
