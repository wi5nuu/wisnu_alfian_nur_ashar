const fs = require('fs');
const file = 'd:/Asli_Portfolio/src/pages/cv.astro';
let content = fs.readFileSync(file, 'utf8');

const regex = /<ul class="bullets">\s*<li>\s*Developing and maintaining web applications remotely, focusing on modern web technologies\.\s*<\/li>\s*<\/ul>/m;
const replacement = `<ul class="bullets">
                    <li>
                        Developed and maintained remote web applications, utilizing modern web frameworks to deliver responsive and scalable front-end solutions.
                    </li>
                </ul>`;

content = content.replace(regex, replacement);

fs.writeFileSync(file, content);
console.log("Updated Syntecxhub description successfully");
