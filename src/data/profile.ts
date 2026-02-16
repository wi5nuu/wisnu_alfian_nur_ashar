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
        linkedin: "https://linkedin.com/in/wisnu-alfian-nur-ashar-ba60a1310",
        github: "https://github.com/wi5nuu",
        instagram: "https://www.instagram.com/wshnn_",
        facebook: "https://www.facebook.com/profile.php?id=100083734252734",
        line: "https://line.me/ti/p/PlhxJgbURY",
        website: "https://wisnualfiannurashar.my.id",
    },
    skills: {
        technical: [
            { name: "Web Development" },
            { name: "Cloud Security" },
            { name: "Google Analytics"},
            { name: "PostgreSQL" },
            { name: "Full-Stack Development" },
            { name: "Cybersecurity" },
            { name: "React & TypeScript" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Supabase" },
            { name: "SEO" },
            { name: "Node.js" },
        ],
        soft: [
            { name: "Communication" },
            { name: "Event Management" },
            { name: "Teamwork" },
            { name: "Leadership" },
            { name: "Creativity" },
            { name: "Problem-Solving" }
            
        ]
    },
    experience: [
        {
            role: "Full-Stack Developer",
            company: "ASHAR GROSIR PARFUM BEKASI",
            type: "Self-employed",
            duration: "Des 2025 - Present",
            location: "Kota Bekasi (Hybrid)",
            description: "Led digital transformation of a 20-year-old family business, implementing modern web technologies to streamline operations, reduce manual errors by 70%, and expand market reach to 15,000+ partners through scalable e-commerce solutions.",
            skills: ["Full-Stack Development", "Databases"]
        },
        {
            role: "VoD (Art and Sport Division)",
            company: "PUFA Computer Science",
            type: "Contract",
            duration: "Sep 2025 - Present",
            location: "Kota Bekasi (On-site)",
            description: "Directed major faculty events and spearheaded digital innovation initiatives, coordinating cross-functional teams to deliver high-impact student engagement programs and modernize communication workflows.",
            skills: ["Communication", "Event Management"]
        },
        {
            role: "IT Development & Member of Minat dan Bakat",
            company: "PC FKMA Jakarta As'adiyah",
            type: "Organization",
            duration: "2024 - 2026",
            location: "Ciputat Timur, Banten",
            description: "Architected and deployed the official organization website, managed the Talent & Interest division, and implemented automated alumni data integration systems, resulting in improved member engagement and operational efficiency.",
            skills: ["Web Development", "Event Management", "Teamwork"]
        },
        {
            role: "Member",
            company: "PUMA Informatic",
            type: "Contract",
            duration: "Okt 2024 - Sep 2025",
            location: "Kota Bekasi (Hybrid)",
            description: "Engineered intelligent chatbot solutions to enhance customer experience, leveraging modern AI technologies to automate support processes and improve response times by 60%.",
            skills: ["Communication", "Teamwork"]
        }
    ],
projects: [
    {
        title: "Ashar Grosir Parfum",
        role: "Full-Stack Developer",
        status: "Production",
        link: "https://www.ashargrosirparfum.com",
        description: "Official E-Commerce platform for a 20-year-old perfume wholesaler serving 15,000+ partners. Built to scale digital transactions and streamline wholesale distribution.",
        techStack: ["React", "TypeScript", "Utility-first CSS", "CDN"],
        image: "/AsharGrosirParfum.png"
    },
    {
        title: "LexCorpus CMS Platform",
        role: "Full-Stack Developer",
        status: "Production",
        link: "https://www.lexcorpuslaw.com",
        description: "Production-ready CMS platform for real client using modern full-stack technologies. Secure role-based editorial system.",
        techStack: ["Next.js 16", "React 18", "TypeScript", "Tailwind CSS", "Supabase"],
        image: "/Lexcorpus.png"
    },
    {
        title: "Nuxar Perfumery",
        role: "Full-Stack Developer",
        status: "Production",
        link: "https://www.nuxarperfumery.my.id",
        description: "High-end cinematic perfume website featuring GSAP animations, 3D transforms, particle effects, and dark luxury UI. Backend deployed with Golang and Railway.",
        techStack: ["Golang", "React 19", "TypeScript", "Vite", "Tailwind CSS 3", "GSAP (ScrollTrigger)", "Railway"],
        image: "/NuxarPerfumery.png"
    },
    {
        title: "PC FKMA Jakarta Website",
        role: "Full-Stack Developer",
        status: "Production",
        link: "https://pcfkmaasadiyahjakarta.vercel.app/",
        description: "Official digital platform for As'adiyah Alumni in Jakarta. Features profile, news portal, and organizational data.",
        techStack: ["Next.js", "Tailwind CSS", "Vercel"],
        image: "/FKMA_Asadiyah_Jakarta.png"
    },
    {
        title: "Wiskost Residence",
        role: "Frontend Developer",
        status: "Production",
        link: "https://wiskost.vercel.app/",
        description: "Luxury winery-inspired website template with gold-accent dark theme, Ken Burns animations, testimonial system, and integrated contact form.",
        techStack: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Formspree", "Vercel"],
        image: "/WiskostResidence.png"
    },
    {
    title: "Portfolio Display",
    role: "Full-Stack Developer",
    status: "Production",
    link: "https://portofolio-display.netlify.app/",
    description: "A high-impact, immersive portfolio showcase featuring a dark cyberpunk aesthetic. Built with advanced 3D elements like a rotating album cube and smooth, scroll-driven animations to deliver a premium user experience.",
    techStack: ["React 19", "TypeScript", "Three.js", "GSAP", "Tailwind CSS", "Lenis"],
    image: "/portfolio-display.png" 
    }
],

    education: {
        institution: "President University",
        degree: "Bachelor of Information Technology", 
        duration: "Aug 2024 - Present", 
        location: "Bekasi, Indonesia", 
        focus: "Full-Stack Development, Database Architecture, Cloud Infrastructure" 
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
            name: "Data Integrations Certification",
            issuer: "HubSpot Academy",
            date: "Feb 2026",
            expiry: "Mar 2027",
            id: "ab0238d2c3f14a16bfb744c1a9e28356",
            image: "/Data_Integrations_Certification.png",
            
        },
        {
            name: "Social Media Marketing Certification II",
            issuer: "HubSpot Academy",
            date: "Feb 2026",
            expiry: "Mar 2028",
            id: "70e50cd6f564443aaf383aa2b8886281",
            image: "/Social_Media_Marketing_Certification.png",
            
        },
        {
            name: "Google Ads Search Certification",
            issuer: "Skillshop",
            date: "Feb 2026",
            expiry: "Feb 2027",
            id: "173326967",
            image: "/Google_Ads_Search.png"
        },
        {
            name: "Google Analytics Certification",
            issuer: "Skillshop",
            date: "Feb 2026",
            expiry: "Feb 2027",
            id: "173326065",
            image: "/Google_Analytics.png"
        },
        {
            name: "Software Engineer Certificate",
            issuer: "HackerRank",
            date: "Jan 2026",
            id: "D73F5CD372E0",
            image: "/Software_Engineer.png"
        },
        {
            name: "Frontend Developer (React)",
            issuer: "HackerRank",
            date: "Jan 2026",
            id: "84B47591D6EC",
            image: "/Frontend_Developer.png"
        }
    ]
};
