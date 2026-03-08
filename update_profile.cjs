const fs = require('fs');

const path = './src/data/profile.ts';
let code = fs.readFileSync(path, 'utf8');

// 1. Update Tagline
code = code.replace(
    'tagline: "Building Secure & High-Performance Digital Solutions | Aspiring Software Engineer | Cyber Security"',
    'tagline: "Full-Stack Developer | Cybersecurity Focus, Building Secure & High-Performance Web Applications"'
);

// 2. Add 'featured' and 'github' to Project Interface
code = code.replace(
    'techStack: string[];',
    'techStack: string[];\n        featured?: boolean;\n        github?: string;'
);

// 3. Update Projects Array
// We will parse the code, but string replacement is safer for preserving formatting. 

// Project 1: Risk Shield System
code = code.replace(
    /title: "Risk Shield System",\s*role: "Lead Developer \/ Cyber Security",\s*status: "Production",/,
    'title: "Risk Shield System",\n            role: "Lead Developer / Cyber Security",\n            status: "Production",\n            featured: true,\n            github: "https://github.com/wi5nuu",'
);
code = code.replace(
    /description: "AI-assisted GRC platform automating OCTAVE Allegro methodology. Features a heuristic AI advisor \(Gemini Pro 1.5\), automated compliance reporting \(ISO 27001\/NIST\), and a real-time risk heatmap.",/,
    'description: "Designed and developed the full-stack system including risk engine, AI advisory integration, and compliance reporting. Implemented OCTAVE Allegro methodology with automated ISO 27001/NIST reporting.",'
);

// Project 2: Human Firewall Intelligence
code = code.replace(
    /title: "Human Firewall Intelligence",\s*role: "Full-Stack Developer",\s*status: "Production",/,
    'title: "Human Firewall Intelligence",\n            role: "Full-Stack Developer",\n            status: "Production",\n            featured: true,\n            github: "https://github.com/wi5nuu",'
);
code = code.replace(
    /description: "Enterprise-grade Cybersecurity Awareness & Phishing Simulation platform. Includes interactive learning hubs, real-time analytics dashboards, and automated certification generation.",/,
    'description: "Engineered an enterprise-grade cybersecurity awareness platform featuring interactive learning hubs, real-time analytics dashboards, and automated certification generation using React and Supabase.",'
);

// Project 3: Ashar Grosir Parfum
code = code.replace(
    /title: "Ashar Grosir Parfum",\s*role: "Full-Stack Developer",\s*status: "Production",/,
    'title: "Ashar Grosir Parfum",\n            role: "Full-Stack Developer",\n            status: "Production",\n            featured: true,\n            github: "https://github.com/wi5nuu/ashar-grosir",'
);
code = code.replace(
    /description: "Performance-first e-commerce platform for a 20-year traditional wholesaler. Serving 15,000\+ partners with 60% faster order processing and 96\/100 Lighthouse performance score.",/,
    'description: "Built an e-commerce platform with an optimized checkout flow serving 15,000+ business partners. Achieved a 96 Lighthouse performance score and 1.9s LCP.",'
);

// Project 4: LexCorpus CMS Platform
code = code.replace(
    /title: "LexCorpus CMS Platform",\s*role: "Full-Stack Developer",\s*status: "Production",/,
    'title: "LexCorpus CMS Platform",\n            role: "Full-Stack Developer",\n            status: "Production",\n            featured: true,\n            github: "https://github.com/wi5nuu",'
);
code = code.replace(
    /description: "Secure, role-based editorial system customized for production usage. Features server-side auth, middleware protection, and SEO-friendly dynamic rendering.",/,
    'description: "Developed a secure, role-based editorial CMS with server-side authentication, robust middleware protection, and SEO-friendly dynamic rendering logic.",'
);

// Project 5: Nuxar Perfumery
code = code.replace(
    /title: "Nuxar Perfumery",\s*role: "Founder \/ Developer",\s*status: "Production",/,
    'title: "Nuxar Perfumery",\n            role: "Founder / Developer",\n            status: "Production",\n            featured: false,\n            github: "https://github.com/wi5nuu",'
);
code = code.replace(
    /description: "High-end cinematic perfume brand platform featuring 3D transforms and luxury UI. Designed for premium market positioning and digital growth.",/,
    'description: "Created an interactive e-commerce platform featuring 3D product showcases and scalable UI to support premium market positioning constraints.",'
);

// Project 6: PC FKMA Jakarta Website
code = code.replace(
    /title: "PC FKMA Jakarta Website",\s*role: "Full-Stack Developer",\s*status: "Production",/,
    'title: "PC FKMA Jakarta Website",\n            role: "Full-Stack Developer",\n            status: "Production",\n            featured: false,\n            github: "https://github.com/wi5nuu",'
);

// Project 7: Wiskost Residence
code = code.replace(
    /title: "Wiskost Residence",\s*role: "Frontend Developer",\s*status: "Production",/,
    'title: "Wiskost Residence",\n            role: "Frontend Developer",\n            status: "Production",\n            featured: false,\n            github: "https://github.com/wi5nuu",'
);

// Project 8: Portfolio Display (Delete)
const portfolioRegex = /,\s*\{\s*title: "Portfolio Display"[\s\S]*?image: "\/portfolio-display\.png"\s*\}/;
code = code.replace(portfolioRegex, '');

// 4. Remove Marketing Certifications
const certsRegex = /\{\s*name: "Data Integrations Certification"[\s\S]*?image: "\/Google_Analytics\.png"\s*\},\s*/;
code = code.replace(certsRegex, '');

fs.writeFileSync(path, code);
console.log("Successfully updated profile.ts");
