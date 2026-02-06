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
        role: "Information Technology Student | Full-Stack Developer",
        location: "Kota Bekasi, Jawa Barat, Indonesia",
        tagline: "Web Development & Cyber Security | Certified in IT & Web Technologies",
        summary: "I am an Information Technology student at President University with a strong interest in web development and cyber security. I have hands-on experience building and deploying real-world web applications, with attention to performance, security awareness, and practical usability.",
        email: "wisnualfian117@gmail.com",
        phone: "+62 813-9488-2490",
        linkedin: "https://www.linkedin.com/in/wisnu-alfian-nur-ashar-ba60a1310",
        github: "https://github.com/wisnualfian",
        instagram: "https://www.instagram.com/wshnn_?igsh=c2prbDU4MDdwN2pw",
        facebook: "https://www.facebook.com/profile.php?id=100083734252734&mibextid=kFxxJD",
        line: "https://line.me/ti/p/PlhxJgbURY",
        website: "https://www.ashargrosirparfum.com",
    },
    skills: {
        technical: [
            { name: "Web Development" },
            { name: "Cloud Security" },
            { name: "Google Analytics", image: "/Google_Analytics.png" },
            { name: "PostgreSQL" },
            { name: "Full-Stack Development" },
            { name: "Cybersecurity" },
            { name: "React & TypeScript" },
            { name: "Next.js" },
            { name: "Tailwind CSS" },
            { name: "Supabase" },
        ],
        soft: [
            { name: "Communication" },
            { name: "Event Management" },
            { name: "Teamwork" },
            { name: "Leadership" },
            { name: "Creativity" },
        ]
    },
    experience: [
        {
            role: "Full-stack Developer",
            company: "ASHAR GROSIR PARFUM BEKASI",
            type: "Self-employed",
            duration: "Des 2025 - Present",
            location: "Kota Bekasi (Hybrid)",
            description: "Digitized a 20-year-old family business using modern web technologies.",
            skills: ["Full-Stack Development", "Databases"]
        },
        {
            role: "VoD (Art and Sport Division)",
            company: "PUFA Computer Science",
            type: "Contract",
            duration: "Sep 2025 - Present",
            location: "Kota Bekasi (On-site)",
            description: "Organizing major faculty events and digital innovation.",
            skills: ["Communication", "Event Management"]
        },
        {
            role: "IT Development & Member of Minat dan Bakat",
            company: "PC FKMA Jakarta As'adiyah",
            type: "Organization",
            duration: "2024 - 2026",
            location: "Ciputat Timur, Banten",
            description: "Developed official organization website and managed Talent & Interest division. Facilitated alumni data integration.",
            skills: ["Web Development", "Event Management", "Teamwork"]
        },
        {
            role: "Member",
            company: "PUMA Informatic",
            type: "Contract",
            duration: "Okt 2024 - Sep 2025",
            location: "Kota Bekasi (Hybrid)",
            description: "Developed smart chatbot to enhance customer experience.",
            skills: ["Communication", "Teamwork"]
        }
    ],
    projects: [
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
            title: "Ashar Grosir Parfum",
            role: "Full-Stack Developer",
            status: "Production",
            link: "https://www.ashargrosirparfum.com",
            description: "E-Commerce platform for a 20-year-old perfume wholesaler serving 15,000+ partners.",
            techStack: ["React", "TypeScript", "Utility-first CSS", "CDN"],
            image: "/AsharGrosirParfum.png"
        },
        {
            title: "PC FKMA Jakarta Website",
            role: "Full-Stack Developer",
            status: "Production",
            link: "https://pcfkmaasadiyahjakarta.vercel.app/",
            description: "Official digital platform for As'adiyah Alumni in Jakarta. Features profile, news portal, and organizational data.",
            techStack: ["Next.js", "Tailwind CSS", "Vercel"],
            image: "/FKMA_Asadiyah_Jakarta.png"
        }
    ],
    education: {
        institution: "President University",
        degree: "Bachelor of Information Technology",
        duration: "Aug 2024 - Jul 2028 (Expected)",
        location: "Kota Bekasi, Jawa Barat",
        focus: "Web Development, Database Management, Cloud Infrastructure"
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
