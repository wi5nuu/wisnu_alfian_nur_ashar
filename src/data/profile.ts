interface Profile {
    personalInfo: {
        name: string;
        pronouns: string;
        role: string;
        location: string;
        tagline: string;
        summary: string;
        email: string;
        phone: string;
        linkedin: string;
        github: string;
        instagram: string;
        facebook: string;
        line: string;
        website: string;
    };
    skills: {
        programming: { name: string; icon?: string }[];
        webTech: { name: string; icon?: string }[];
        securityCloud: { name: string; icon?: string }[];
        tools: { name: string; icon?: string }[];
        soft: { name: string }[];
    };
    experience: {
        role: string;
        company: string;
        type: string;
        duration: string;
        location: string;
        description: string;
        skills: string[];
    }[];
    projects: {
        title: string;
        role: string;
        status: string;
        link: string;
        description: string;
        techStack: string[];
        featured?: boolean;
        github?: string;
        image?: string;
    }[];
    education: {
        institution: string;
        degree: string;
        duration: string;
        location: string;
        focus: string;
    };
    educationHistory: string[];
    organization: string[];
    certifications: {
        name: string;
        issuer: string;
        date: string;
        expiry?: string;
        id: string;
        description: string;
        image?: string;
    }[];
}

export const profile: Profile = {
    personalInfo: {
        name: "Wisnu Alfian Nur Ashar",
        pronouns: "He/Him",
        role: "Full-Stack Developer & Cyber Security",
        location: "Bekasi Timur, Kota Bekasi, Jawa Barat",
        tagline: "Building Secure, High-Performance Production Systems",
        summary: "Full-Stack Developer & Cyber Security practitioner with production experience building scalable web applications. Specialized in Next.js, React, Supabase, and secure system design. Delivered platforms supporting 15,000+ users with measurable performance and security improvements. Experienced in leading cross-functional teams to modernize digital infrastructure and streamline business operations.",
        email: "wisnualfian117@gmail.com",
        phone: "+62 813-9488-2490",
        linkedin: "https://linkedin.com/in/wisnu-alfian-nur-ashar",
        github: "https://github.com/wi5nuu",
        instagram: "https://www.instagram.com/wshnn_?igsh=c2prbDU4MDdwN2pw",
        facebook: "https://www.facebook.com/profile.php?id=100083734252734&mibextid=kFxxJD",
        line: "https://line.me/ti/p/PlhxJgbURY",
        website: "https://www.wisnualfiannurashar.my.id",
    },
    skills: {
        programming: [
            { name: "Python", icon: "python" },
            { name: "C++", icon: "cplusplus" },
            { name: "Java", icon: "openjdk" },
            { name: "PHP", icon: "php" },
            { name: "Golang", icon: "go" },
            { name: "PostgreSQL", icon: "postgresql" },
            { name: "MySQL", icon: "mysql" },
            { name: "MongoDB", icon: "mongodb" },
        ],
        webTech: [
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "nextdotjs" },
            { name: "Astro", icon: "astro" },
            { name: "TypeScript", icon: "typescript" },
            { name: "Tailwind CSS", icon: "tailwindcss" },
            { name: "Supabase", icon: "supabase" },
            { name: "GSAP", icon: "greensock" },
            { name: "Framer Motion", icon: "framer" },
            { name: "shadcn/ui", icon: "shadcnui" },
            { name: "SEO", icon: "google" },
            { name: "API Development", icon: "postman" },
        ],
        securityCloud: [
            { name: "Cybersecurity", icon: "hackthebox" },
            { name: "Kali Linux", icon: "kalilinux" },
            { name: "Cloud Security", icon: "amazonwebservices" },
            { name: "Docker", icon: "docker" },
            { name: "Vercel", icon: "vercel" },
            { name: "Railway", icon: "railway" },
            { name: "HuggingFace", icon: "huggingface" },
        ],
        tools: [
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Android Studio", icon: "androidstudio" },
            { name: "Google Sheets", icon: "googlesheets" },
            { name: "Web Development", icon: "html5" },
            { name: "Full-Stack Development", icon: "javascript" },
        ],
        soft: [
            { name: "Communication" },
            { name: "Leadership" },
            { name: "Teamwork" },
            { name: "Problem-Solving" },
            { name: "Event Management" },
            { name: "Creativity" },
        ]
    },
    experience: [
        {
            role: "Web Developer",
            company: "Syntecxhub",
            type: "Internship",
            duration: "March 2026 - Present",
            location: "Remote",
            description: "Developed and maintained remote web applications, utilizing modern web frameworks to deliver responsive and scalable front-end solutions.",
            skills: ["Web Development", "Teamwork"]
        },
        {
            role: "Full-Stack Developer",
            company: "ASHAR GROSIR PARFUM BEKASI",
            type: "Self-employed",
            duration: "December 2025 - Present",
            location: "Kota Bekasi (Hybrid)",
            description: "Led digital transformation of a 20-year-old family business, implementing modern web technologies to streamline operations, reduce manual errors by 70%, and expand market reach to 15,000+ partners through scalable e-commerce solutions.",
            skills: ["Full-Stack Development", "Databases"]
        },
        {
            role: "VoD (Art and Sport Division)",
            company: "PUFA Computer Science",
            type: "Contract",
            duration: "September 2025 - Present",
            location: "Kota Bekasi (On-site)",
            description: "Directed major faculty events and spearheaded digital innovation initiatives, coordinating cross-functional teams to deliver high-impact student engagement programs and modernize communication workflows.",
            skills: ["Communication", "Event Management"]
        },
        {
            role: "IT Development & Member of Minat dan Bakat",
            company: "PC FKMA Jakarta As'adiyah",
            type: "Organization",
            duration: "January 2024 - Present",
            location: "Ciputat Timur, Banten",
            description: "Architected and deployed the official organization website, managed the Talent & Interest division, and implemented automated alumni data integration systems, resulting in improved member engagement and operational efficiency.",
            skills: ["Web Development", "Event Management", "Teamwork"]
        },
        {
            role: "Member of Student Passion and Talents",
            company: "PUMA Informatic",
            type: "Contract",
            duration: "October 2024 - September 2025",
            location: "Kota Bekasi (Hybrid)",
            description: "Engineered intelligent chatbot solutions to enhance customer experience, leveraging modern AI technologies to automate support processes and improve response times by 60%.",
            skills: ["Communication", "Teamwork"]
        }
    ],
    projects: [
        {
            title: "Fanguard Strategic Hub",
            role: "Architect & Lead Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu",
            link: "https://vanguard-execution.vercel.app/",
            description: "Enterprise-grade execution hub and strategic management platform. Features a high-performance Fastify backend, real-time RBAC security, and a sophisticated Next.js dashboard.",
            techStack: ["Next.js 14", "Fastify", "PostgreSQL", "Prisma", "Redis", "Docker", "Socket.io", "Radix UI", "shadcn/ui", "Zustand", "Vitest"],
            image: "/vanguard.png"
        },
        {
            title: "Risk Shield System",
            role: "Lead Developer / Cyber Security",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/risk-assessment-platform",
            link: "https://riskshield.vercel.app/",
            description: "Advanced AI-assisted GRC platform automating OCTAVE Allegro methodology. Features Google Gemini Pro integration, real-time risk analytics, and automated compliance reporting.",
            techStack: ["Next.js 14", "React", "Tailwind CSS", "shadcn/ui", "Framer Motion", "Supabase", "Google Gemini Pro", "jsPDF", "Recharts"],
            image: "/riskshieldsystem.png"
        },
        {
            title: "Human Firewall",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/Human_Firewall_Intelligence-_Platform",
            link: "https://humanfirewall.vercel.app/",
            description: "Cybersecurity awareness platform with interactive learning, phishing simulations, and progress tracking for organizations.",
            techStack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
            image: "/humanfirewallintelligenceplatform.png"
        },
        {
            title: "Ashar Grosir Parfum",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/ashar-grosir",
            link: "https://www.ashargrosirparfum.com",
            description: "Official E-Commerce platform for a 20-year-old perfume wholesaler serving 15,000+ partners. Optimized for scale with edge delivery and streamlined wholesale distribution.",
            techStack: ["React", "TypeScript", "Tailwind CSS", "Cloudflare", "CDN"],
            image: "/AsharGrosirParfum.png"
        },
        {
            title: "LexCorpus CMS Platform",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu",
            link: "https://www.lexcorpuslaw.com",
            description: "Production-ready CMS and legal research platform. Features secure role-based editorial systems, legal document management, and rich text analysis.",
            techStack: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Supabase", "Quill.js", "date-fns", "Lucide"],
            image: "/Lexcorpus.png"
        },
        {
            title: "Nuxar Perfumery",
            role: "Full-Stack Developer",
            status: "Production",
            featured: false,
            link: "https://www.nuxarperfumery.my.id",
            description: "High-end cinematic perfume website featuring GSAP animations, 3D transforms, particle effects, and dark luxury UI. Backend deployed with Golang and Railway.",
            techStack: ["Golang", "React 19", "TypeScript", "Vite", "Tailwind CSS 3", "GSAP (ScrollTrigger)", "Railway"],
            image: "/NuxarPerfumery.png"
        },
        {
            title: "PC FKMA Jakarta Website",
            role: "Full-Stack Developer",
            status: "Production",
            featured: false,
            github: "https://github.com/wi5nuu",
            link: "https://pcfkmaasadiyahjakarta.vercel.app/",
            description: "Official digital platform for As'adiyah Alumni in Jakarta. Features profile, news portal, and organizational data.",
            techStack: ["Next.js", "Tailwind CSS", "Vercel"],
            image: "/FKMA_Asadiyah_Jakarta.png"
        },
        {
            title: "Wiskost Residence",
            role: "Frontend Developer",
            status: "Production",
            featured: false,
            github: "https://github.com/wi5nuu/wiskost",
            link: "https://wiskost.vercel.app/",
            description: "Luxury winery-inspired residence website template with gold-accent dark theme, professional management system, and automated deployment pipeline.",
            techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Docker", "Hugging Face", "Formspree", "Vercel"],
            image: "/WiskostResidence.png"
        }
    ],
    education: {
        institution: "President University",
        degree: "Bachelor of Information Technology",
        duration: "September 2024 - Present",
        location: "Bekasi, Indonesia",
        focus: "Cyber Security, Full-Stack Development, Database Architecture"
    },
    educationHistory: [
        "TK EKA DIYASA BANDARA JUWATA TARAKAN",
        "SD NEGRI 009 TARAKAN",
        "SDN 84 WATANG CENRANA",
        "MTS AS'ADIYAH PUTERA 2 PUSAT SENGKANG",
        "MAS AS'ADIYAH PUTRA SENGKANG- MACANANG",
        "President University"
    ],
    organization: [
        "FKMA AS'ADIYAH JAKARTA",
        "PUFA Computer Science",
        "PUMA Informatic"
    ],
    certifications: [
        {
            name: "Full-Stack Development 101",
            issuer: "Simplilearn",
            date: "March 2026",
            id: "10034834",
            description: "Foundational course covering front-end and back-end integration, focusing on scalable JavaScript architectures.",
            image: "/Full-Stack_Development_101.png"
        },
        {
            name: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "March 2026",
            expiry: "March 2029",
            id: "JLX1VWN35Z72",
            description: "Fundamental training on semantic HTML, CSS layouts, and professional website structure standards.",
            image: "/Dicoding_Web_Dasar.png"
        },
        {
            name: "AWS Cloud Practitioner Essentials \u2013 Training Completion",
            issuer: "Amazon Web Services (AWS)",
            date: "March 2026",
            id: "",
            description: "Comprehensive overview of cloud concepts, security, architecture, and core global infrastructure.",
            image: "/aws_cloud_practioner_essentials.png"
        },
        {
            name: "AWS Technical Essentials",
            issuer: "Amazon Web Services (AWS)",
            date: "January 2026",
            id: "",
            description: "Technical deep-dive into AWS services including compute, database, storage, networking, and security.",
            image: "/aws_technical_essentials.png"
        },
        {
            name: "Google Ads Search Certification",
            issuer: "Google Digital Academy (Skillshop)",
            date: "February 2026",
            expiry: "February 2027",
            id: "173326967",
            description: "Mastery of Google Search campaigns, audience strategies, and performance optimization for conversion.",
            image: "/Google_Ads_Search.png"
        },
        {
            name: "Google Analytics Certification",
            issuer: "Google Digital Academy (Skillshop)",
            date: "February 2026",
            expiry: "February 2027",
            id: "173326065",
            description: "Setup and data analysis expertise using Google Analytics to derive actionable user insights.",
            image: "/Google_Analytics.png"
        },
        {
            name: "Data Integrations Certification",
            issuer: "HubSpot Academy",
            date: "February 2026",
            expiry: "March 2027",
            id: "ab0238d2c3f14a16bfb744c1a9e28356",
            description: "Expertise in connecting diverse software systems to centralize and automate business data flows.",
            image: "/Data_Integrations_Certification.png"
        },
        {
            name: "Software Engineer Certificate",
            issuer: "HackerRank",
            date: "January 2026",
            id: "D73F5CD372E0",
            description: "Validation of core engineering principles, algorithm design, and systematic debugging capabilities.",
            image: "/Software_Engineer.png"
        },
        {
            name: "Frontend Developer (React)",
            issuer: "HackerRank",
            date: "January 2026",
            id: "84B47591D6EC",
            description: "Advanced proficiency in React, component state management, and performance-driven UI development.",
            image: "/Frontend_Developer.png"
        }
    ]
};
