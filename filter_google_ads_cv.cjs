const fs = require('fs');
const file = 'd:/Asli_Portfolio/src/pages/cv.astro';
let content = fs.readFileSync(file, 'utf8');

const target = `{profile.certifications.map((cert) => (`;
const replacement = `{profile.certifications.filter(c => c.name !== "Google Ads Search Certification").map((cert) => (`;

content = content.replace(target, replacement);

fs.writeFileSync(file, content);
console.log("Filtered out Google Ads from CV PDF");
