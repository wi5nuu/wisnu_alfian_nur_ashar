
import { LocalAI } from "./src/utils/LocalAI";

const keys = Object.keys((LocalAI as any).SOCIAL_DATA);
console.log(`Total Keys: ${keys.length}`);
keys.forEach((key, i) => console.log(`${i + 1}: ${key}`));
