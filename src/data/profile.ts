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
        technical: { name: string; image?: string; }[];
        soft: { name: string; image?: string; }[];
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
        image?: string;
    }[];
}

export const profile: Profile = {
    personalInfo: {
        name: "Wisnu Alfian Nur Ashar",
        pronouns: "He/Him",
        role: "Senior Full-Stack Developer | Information Technology Specialist",
        location: "Bekasi Timur, Kota Bekasi, Jawa Barat",
        tagline: "Delivering High-Impact Web Solutions | Expert in Modern Development & Security",
        summary: "As a dedicated Information Technology professional at President University, I specialize in architecting and deploying production-grade web applications that drive business results. With a proven track record of optimizing performance, implementing robust security measures, and delivering intuitive user experiences, I transform complex technical challenges into scalable, user-centric solutions that exceed client expectations.",
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
        technical: [
            { name: "Python" },
            { name: "C++" },
            { name: "Java" },
            { name: "PHP" },
            { name: "PostgreSQL" },
            { name: "MySQL" },
            { name: "MongoDB" },
            { name: "Full-Stack Development" },
            { name: "Cybersecurity" },
            { name: "Kali Linux" },
            { name: "React & TypeScript" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Supabase" },
            { name: "Node.js" },
            { name: "Android Studio" },
            { name: "Google Sheets" },
            { name: "Web Development" },
            { name: "Cloud Security" },
            { name: "SEO" },
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
            role: "Member",
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
            title: "Risk Shield System",
            role: "Lead Developer / Cyber Security",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/risk-shield",
            link: "https://riskshield.vercel.app/",
            description: "AI-assisted GRC platform automating OCTAVE Allegro methodology. Features Google Gemini Pro integration and a local offline AI advisor.",
            techStack: ["Next.js", "TypeScript", "Supabase", "Gemini Pro", "Framer Motion"],
            image: "/riskshieldsystem.png"
        },
        {
            title: "Human Firewall",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/human-firewall",
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
            description: "Official E-Commerce platform for a 20-year-old perfume wholesaler serving 15,000+ partners. Built to scale digital transactions and streamline wholesale distribution.",
            techStack: ["React", "TypeScript", "Utility-first CSS", "CDN"],
            image: "/AsharGrosirParfum.png"
        },
        {
            title: "LexCorpus CMS Platform",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu",
            link: "https://www.lexcorpuslaw.com",
            description: "Production-ready CMS platform for real client using modern full-stack technologies. Secure role-based editorial system.",
            techStack: ["Next.js 16", "React 18", "TypeScript", "Tailwind CSS", "Supabase"],
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
            github: "https://github.com/wi5nuu",
            link: "https://wiskost.vercel.app/",
            description: "Luxury winery-inspired website template with gold-accent dark theme, Ken Burns animations, testimonial system, and integrated contact form.",
            techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Formspree", "Vercel"],
            image: "/WiskostResidence.png"
        }
    ],
    education: {
        institution: "President University",
        degree: "Bachelor of Information Technology",
        duration: "August 2024 - Present",
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
            name: "Software Engineer Certificate",
            issuer: "HackerRank",
            date: "January 2026",
            id: "D73F5CD372E0",
            image: "/Software_Engineer.png"
        },
        {
            name: "Frontend Developer (React)",
            issuer: "HackerRank",
            date: "January 2026",
            id: "84B47591D6EC",
            image: "/Frontend_Developer.png"
        }
    ]
};
