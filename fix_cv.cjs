const fs = require('fs');
const file = 'd:/Asli_Portfolio/src/pages/cv.astro';
let content = fs.readFileSync(file, 'utf8');

const regex = /<div class="awards-list">[\s\S]*?<!-- ── QR CODE ── -->/m;
content = content.replace(regex, `<div class="awards-list">
                {profile.certifications.map((cert) => (
                    <div>
                        <strong>{cert.name}</strong> — {cert.issuer} ({cert.date})
                    </div>
                ))}
            </div>

            <!-- ── QR CODE ── -->`);

fs.writeFileSync(file, content);
