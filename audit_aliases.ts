
import { LocalAI } from "./src/utils/LocalAI";

const entries = (LocalAI as any).SOCIAL_DATA as Record<string, { aliases?: string[] }>;
for (const [key, entry] of Object.entries(entries)) {
    if (entry.aliases) {
        console.log(`Key: "${key}" -> Aliases: ${JSON.stringify(entry.aliases)}`);
    } else {
        console.log(`Key: "${key}" -> No Aliases`);
    }
}
