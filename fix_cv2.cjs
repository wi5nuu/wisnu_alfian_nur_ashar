const fs = require('fs');
const file = 'd:/Asli_Portfolio/src/pages/cv.astro';
let content = fs.readFileSync(file, 'utf8');

content = content.replace('line-height: 1.28;', 'line-height: 1.22;');
content = content.replace('padding: 0.8cm 1.25cm;', 'padding: 0.6cm 1.25cm;');
// target awards-list font-size
const regex = /\.awards-list\s*\{[\s\S]*?font-size:\s*10pt;/m;
content = content.replace(regex, match => match.replace('10pt', '9.5pt'));

fs.writeFileSync(file, content);
console.log("Updated cv.astro CSS");
