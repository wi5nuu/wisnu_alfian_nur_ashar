const fs = require('fs');
const file = 'd:/Asli_Portfolio/src/pages/cv.astro';
let content = fs.readFileSync(file, 'utf8');

const regex = /<!-- ── EXPERIENCE & LEADERSHIP ── -->\s*<div class="section">Experience &amp; Leadership<\/div>/m;
const replacement = `<!-- ── EXPERIENCE & LEADERSHIP ── -->
            <div class="section">Experience &amp; Leadership</div>

            <div class="item">
                <div class="item-company">Syntecxhub</div>
                <div class="item-title-row">
                    <span class="item-role"
                        >Web Developer — Internship</span
                    >
                    <span class="item-date">March 2026 – Present</span>
                </div>
                <ul class="bullets">
                    <li>
                        Developing and maintaining web applications remotely, focusing on modern web technologies.
                    </li>
                </ul>
            </div>`;

content = content.replace(regex, replacement);

fs.writeFileSync(file, content);
console.log("Injected Syntecxhub Experience");
