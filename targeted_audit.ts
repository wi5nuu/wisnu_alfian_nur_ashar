
import { LocalAI } from "./src/utils/LocalAI";

const query = "🤝 Organisasi & Leadership";
const rawQuery = query.toLowerCase();
const normalized = query.toLowerCase().replace(/[?.!,]/g, '').replace(/\s+/g, ' ').trim();

const entries = (LocalAI as any).SOCIAL_DATA as Record<string, { aliases?: string[] }>;
console.log("--- Match Audit ---");
for (const [key, entry] of Object.entries(entries)) {
    // Check key
    if (normalized === key.toLowerCase() || rawQuery.includes(key.toLowerCase())) {
        console.log(`KEY MATCH: "${key}"`);
    }

    // Check aliases
    if (entry.aliases) {
        for (const alias of entry.aliases) {
            const al = alias.toLowerCase();
            if (normalized === al || normalized.includes(al) || rawQuery.includes(al)) {
                console.log(`ALIAS MATCH: Key "${key}" matches Alias "${alias}"`);
            }
        }
    }
}
