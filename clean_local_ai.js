
import fs from 'fs';

const path = 'd:\\Asli_Portfolio\\src\\utils\\LocalAI.ts';
let content = fs.readFileSync(path, 'utf8');

// 1. Move q and isIndo to the very top of process
const qDecl = '        const q = query.toLowerCase().trim();\n';
const isIndoDecl = '        const isIndo = q.includes("apa") || q.includes("siapa") || q.includes("dimana") ||\n' +
    '            q.includes("sekolah") || q.includes("bisa") || q.includes("halo") ||\n' +
    '            q.includes("projek") || q.includes("kerja") || q.includes("organisasi") ||\n' +
    '            q.includes("kenapa") || q.includes("tujuan") || q.includes("motivasi") ||\n' +
    '            q.includes("bagaimana") || q.includes("kapan") || q.includes("berapa") ||\n' +
    '            q.includes("tolong") || q.includes("mohon") || q.includes("ingin");\n';

// Remove all occurrences of q and isIndo declarations within the process method
// We'll be a bit careful with the regex to not catch other variables that might start with q
content = content.replace(/^[ \t]*const\s+q\s*=\s*query\.toLowerCase\(\)\.trim\(\);(\r?\n)/gm, '');
content = content.replace(/^[ \t]*const\s+isIndo\s*=\s*q\.includes\("apa"\)[\s\S]*?q\.includes\("ingin"\);(\r?\n)?/gm, '');

// Now insert them at the top of the process method
const processStart = /(static\s+process\(query:\s*string,\s*lastIntent\?:\s*string\):\s*string\s*\|\s*null\s*\{)(\r?\n)/;
content = content.replace(processStart, (match, p1, p2) => p1 + p2 + qDecl + isIndoDecl + '\n');

fs.writeFileSync(path, content, 'utf8');
console.log("✅ LocalAI.ts Cleaned Up");
