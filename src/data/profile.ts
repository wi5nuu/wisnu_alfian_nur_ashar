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
        aiMl: { name: string; icon?: string }[];
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
    organizationalExperience: {
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
    competitions: {
        name: string;
        issuer: string;
        date: string;
        category: "winner" | "participant";
        description: string;
        image?: string;
    }[];
    openSource: {
        organization: string;
        repo: string;
        project: string;
        language: string;
        bugDescription: string;
        impact: string;
        fileLocation: string;
        maintainerResponse: string;
        category: string;
    }[];
}

export const profile: Profile = {
    personalInfo: {
        name: "Wisnu Alfian Nur Ashar",
        pronouns: "He/Him",
        role: "Full-Stack Engineer",
        location: "Bekasi, West Java, Indonesia",
        tagline: "Building Secure, High-Performance Production Systems",
        summary: "Information Technology student specializing in Full-Stack Engineering with hands-on experience designing enterprise ERP/POS platforms, AI-powered applications, and scalable cloud-based systems using Laravel, Next.js, PostgreSQL, and modern cloud technologies.",
        email: "wisnualfiannurashar@gmail.com",
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
            { name: "Laravel", icon: "laravel" },
            { name: "JavaScript", icon: "javascript" },
            { name: "API Development", icon: "postman" },
            { name: "Technical SEO", icon: "google" },
            { name: "Google Tag Manager", icon: "google" },
        ],
        aiMl: [
            { name: "YOLOv8", icon: "pytorch" },
            { name: "FastAPI", icon: "fastapi" },
            { name: "OpenCV", icon: "opencv" },
            { name: "Kaggle", icon: "kaggle" },
            { name: "Roboflow", icon: "roboflow" },
            { name: "Google Cloud Run", icon: "googlecloud" },
            { name: "HuggingFace", icon: "huggingface" },
            { name: "Google Gemini", icon: "googlegemini" },
            { name: "Google AI Studio", icon: "googlegemini" },
            { name: "Computer Vision", icon: "pytorch" },
            { name: "Model Fine-Tuning", icon: "huggingface" },
        ],
        securityCloud: [
            { name: "Cybersecurity", icon: "hackthebox" },
            { name: "Kali Linux", icon: "kalilinux" },
            { name: "Cloud Security", icon: "amazonwebservices" },
            { name: "Docker", icon: "docker" },
            { name: "Vercel", icon: "vercel" },
            { name: "Railway", icon: "railway" },
            { name: "Cloudflare", icon: "cloudflare" },
            { name: "Firebase", icon: "firebase" },
            { name: "Zero-Trust Architecture", icon: "amazonwebservices" },
            { name: "HuggingFace", icon: "huggingface" },
        ],
        tools: [
            { name: "Node.js", icon: "nodedotjs" },
            { name: "Android Studio", icon: "androidstudio" },
            { name: "Google Sheets", icon: "googlesheets" },
            { name: "Web Development", icon: "html5" },
            { name: "Full-Stack Development", icon: "javascript" },
            { name: "Burp Suite", icon: "burpsuite" },
            { name: "Google Analytics", icon: "googleanalytics" },
            { name: "Jira", icon: "jira" },
            { name: "Google Colab", icon: "googlecolab" },
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
            role: "Full Stack Engineer",
            company: "ASHAR GROSIR PARFUM BEKASI",
            type: "Self-employed",
            duration: "December 2025 - Present",
            location: "Kota Bekasi (Hybrid)",
            description: "Architected and developed an enterprise ERP/POS platform using Laravel, Next.js, and PostgreSQL, integrating inventory management, purchasing, payroll, attendance, business intelligence dashboards, AI Copilot, and role-based access control (RBAC) into a unified business management system supporting 6 administrators, 600+ products, and 50+ active resellers. Optimized application performance through Cloudflare CDN, intelligent caching, and database query optimization, achieving a 1.34 second average page load time and 91% Good Largest Contentful Paint (LCP). Automated end-to-end business operations by integrating wholesale order management, inventory synchronization, expense tracking, financial reporting, and real-time stock monitoring, supporting 100+ daily transactions while reducing manual financial reconciliation time by 60%.",
            skills: ["Laravel", "Next.js", "PostgreSQL", "Cloudflare", "ERP/POS", "AI Copilot"]
        },
        {
            role: "Web Development Intern",
            company: "GAOTEK INC",
            type: "Internship",
            duration: "April 2026 - Present",
            location: "New York, USA (Remote)",
            description: "Developed and customized responsive WordPress websites using PHP, HTML, CSS, JavaScript, Elementor, and Gutenberg within a local XAMPP development environment. Maintained and updated WordPress websites by publishing content, optimizing page layouts, troubleshooting technical issues, and applying SEO best practices to improve usability and search visibility. Collaborated in an Agile remote environment by participating in weekly technical discussions via Microsoft Teams and consistently submitting progress reports throughout the internship while delivering assigned development tasks on schedule.",
            skills: ["WordPress", "PHP", "JavaScript", "SEO", "Elementor", "Agile"]
        }
    ],
    organizationalExperience: [
        {
            role: "IT Development & Talent Division",
            company: "PC FKMA Jakarta As'adiyah",
            type: "Organization",
            duration: "January 2024 - Present",
            location: "Ciputat Timur, Banten",
            description: "Architected and deployed the official organization website, managed the Talent & Interest division, and implemented automated alumni data integration systems, resulting in improved member engagement and operational efficiency.",
            skills: ["Web Development", "Event Management", "Teamwork"]
        },
        {
            role: "Member – Students Passion & Talents Division",
            company: "PUMA Informatics – President University",
            type: "Organization",
            duration: "September 2024 - August 2025",
            location: "President University, Bekasi",
            description: "Organized 3+ technology-focused events for 100+ university students, achieving a consistent 95% attendance rate. Coordinated technical academic workshops and student activities aimed at fostering peer-to-peer collaboration. Supported divisional logistics and knowledge-sharing initiatives to enhance student skill development in IT.",
            skills: ["Event Management", "Communication", "Teamwork"]
        },
        {
            role: "Vice – Art and Sport Division",
            company: "PUFA Computer Science – President University",
            type: "Organization",
            duration: "September 2025 - Present",
            location: "President University, Bekasi (On-site)",
            description: "Led 5+ art and sports activities for 60+ students, resulting in a 40% increase in departmental student engagement. Led cross-functional committees to organize campus events attended by over 100 students while coordinating volunteers, schedules, and logistics.",
            skills: ["Leadership", "Event Management", "Communication"]
        },
        {
            role: "Member",
            company: "IBM-SkillsBuild-AI-Builders-Challenge",
            type: "Organization",
            duration: "2026",
            location: "Remote",
            description: "Participated in IBM's AI Builders Challenge, collaborating on AI-powered solutions and gaining hands-on experience with IBM Cloud and AI technologies.",
            skills: ["AI/ML", "IBM Cloud"]
        },
        {
            role: "Member",
            company: "OWASP Foundation",
            type: "Organization",
            duration: "2026",
            location: "Remote",
            description: "Active member of the Open Web Application Security Project, contributing to security research and open-source security tools.",
            skills: ["Cybersecurity", "Security Research"]
        }
    ],
    projects: [
        {
            title: "Ashar Grosir Parfum",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/ashar-grosir",
            link: "https://www.ashargrosirparfum.com",
            description: "Official E-Commerce platform for a 20-year-old perfume wholesaler serving 15,000+ partners. Optimized for scale with edge delivery and streamlined wholesale distribution.",
            techStack: ["React", "TypeScript", "Tailwind CSS", "Cloudflare", "CDN"],
            image: "/projects/AsharGrosirParfum.png"
        },
        {
            title: "SENTINEL-X",
            role: "Full-Stack Architect",
            status: "Proof of Concept",
            featured: true,
            github: "https://github.com/wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform",
            link: "https://github.com/wi5nuu/SENTINEL-X-X-Domain-Threat-Fusion-Platform",
            description: "Multi-Domain Threat Intelligence & Fusion Platform (23+ GitHub stars, 10 forks). An integrated educational proof-of-concept simulating situational awareness, AI-based correlation with Multi-Modal architecture, and real-time incident response across 6 domain sources (Aviation/ADS-B, Maritime/AIS, Cyber, Space, Seismic, RF/SIGINT). Features blockchain audit trail via Ethereum smart contracts, 3D globe visualization, and explainable AI threat classification.",
            techStack: ["FastAPI", "React", "PyTorch", "Kafka", "TimescaleDB", "Blockchain", "Docker"],
            image: "/projects/sentinelx.png"
        },
        {
            title: "Shooply",
            role: "Full-Stack Architect",
            status: "Production",
            featured: true,
            link: "#",
            description: "High-performance e-commerce platform with a microservices architecture. Features an SSR-optimized Next.js 14 frontend and a super-fast GoFiber backend. Implements advanced caching (Redis), messaging (RabbitMQ), and comprehensive telemetry (OpenTelemetry, Prometheus).",
            techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "React Query", "Zustand", "Framer Motion", "Go (Golang)", "GoFiber", "PostgreSQL", "Redis", "RabbitMQ", "OpenTelemetry", "Zerolog"],
            image: "/projects/shooply.png"
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
            image: "/projects/Lexcorpus.png"
        },
        {
            title: "Nuxar Perfumery",
            role: "Full-Stack Developer",
            status: "Production",
            featured: false,
            link: "https://www.nuxarperfumery.my.id",
            description: "High-end cinematic perfume website featuring GSAP animations, 3D transforms, particle effects, and dark luxury UI. Backend deployed with Golang and Railway.",
            techStack: ["Golang", "React 19", "TypeScript", "Vite", "Tailwind CSS 3", "GSAP (ScrollTrigger)", "Railway"],
            image: "/projects/NuxarPerfumery.png"
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
            image: "/projects/FKMA_Asadiyah_Jakarta.png"
        },
        {
            title: "Grawizah",
            role: "Team Leader & Full-Stack Architect",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/grawizah.com",
            link: "https://grawizah-com.vercel.app/",
            description: "AI-native Global Trade Intelligence Platform empowering Indonesian MSMEs to scale globally. Built by team 'Successful Failures' (Wisnu as Team Leader, with Reza Fahlevi and Praisilia Pandoh from President University). Features neural AI matchmaking powered by Groq Llama 3.3, automated HS Code classification, real-time supply chain network mapping, competitor price benchmarking, and a multilingual trade translator supporting 14 languages. Won Web Developer category at TechSprint Innovation Cup 2026 organized by Codelab Indonesia.",
            techStack: ["Next.js 14", "TypeScript", "Go (Golang)", "Tailwind CSS", "Supabase", "Groq Llama 3.3", "AI/ML", "JWT"],
            image: "/projects/grawizah.png"
        },
        {
            title: "TruthLayer",
            role: "Architect & Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/Truthlayer",
            link: "https://truthlayer.io",
            description: "Chrome Extension (Manifest V3) + Node.js Express Backend + Next.js 15 Dashboard that reveals hidden intentions of every website you visit. Powered by Claude AI (Anthropic) for intent classification and dark pattern detection. Provides Trust Score (0-100), detects 10+ dark pattern manipulation tactics (fake urgency, confirmshaming, disguised ads, forced action), audits data collection & third-party trackers, estimates AI-generated content percentage, and enables public report sharing via truthlayer.io/report/domain. Features activeTab permission (privacy-first), local 24h caching, and automated CI/CD pipeline.",
            techStack: ["Next.js 15", "TypeScript", "Chrome Extension", "Node.js", "Express.js", "Claude AI", "Docker", "Netlify"],
            image: "/projects/thrutlayer.png"
        },
        {
            title: "ColonyAI",
            role: "Product Owner & AI Engineer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/colonyai",
            link: "https://colonyai-eta.vercel.app",
            description: "AI-powered Automated Plate Count Reader for microbiology laboratories — official entry for AI Open Innovation Challenge 2026 (team of 4 from President University, Wisnu as Product Owner & Software Engineer). Fine-tuned YOLOv8 model achieving 94.1% mAP@0.5, 94.7% precision, 92.5% recall across 56,124 annotations. Converts agar plate images into CFU/ml reports in under 2 minutes — reducing inter-analyst variability by 92.5%. Features CLAHE preprocessing, Hough Circle detection, SA-001 merged colony estimation, GUM uncertainty, SHA-256 audit trail for ISO 17025, BPOM & SNI compliance. Enterprise-grade security: Argon2 hashing, JWT blacklisting, ClamAV scanning, Zero-Trust architecture.",
            techStack: ["YOLOv8", "FastAPI", "Next.js 14", "TypeScript", "PostgreSQL", "OpenCV", "AWS S3", "Railway", "Vercel"],
            image: "/projects/ColonyAI.png"
        },
        {
            title: "Fanguard Strategic Hub",
            role: "Architect & Lead Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu",
            link: "https://vanguard-execution.vercel.app/",
            description: "Enterprise-grade execution hub and strategic management platform. Features a high-performance Fastify backend, real-time RBAC security, and a sophisticated Next.js dashboard.",
            techStack: ["Next.js 14", "Fastify", "PostgreSQL", "Prisma", "Redis", "Docker", "Socket.io", "Radix UI", "shadcn/ui", "Zustand", "Vitest"],
            image: "/projects/vanguard.png"
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
            image: "/projects/riskshieldsystem.png"
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
            image: "/projects/humanfirewallintelligenceplatform.png"
        },
        {
            title: "HargaKita.id",
            role: "Full-Stack Developer",
            status: "Production",
            featured: true,
            github: "https://github.com/wi5nuu/hargakita.id",
            link: "https://hargakita.netlify.app/",
            description: "Real-time staple goods price monitoring platform for all regions of Indonesia. Visual, user-friendly SaaS that tracks prices of essential commodities (rice, chili, onion, eggs, cooking oil) across hundreds of markets in 34 provinces. Features crowdsourced price reports with intelligent validation filters, automated daily data scraping from government portals, interactive trend charts, and zero login requirement — free and accessible to all Indonesian citizens.",
            techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Appwrite", "Netlify", "Chart.js", "Crowdsourcing"],
            image: "/projects/hargakita.png"
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
            image: "/projects/WiskostResidence.png"
        }
    ],
    education: {
        institution: "President University",
        degree: "Bachelor of Information Technology",
        duration: "September 2024 - December 2027 (Expected)",
        location: "Bekasi, Indonesia",
        focus: "Cyber Security, Full-Stack Development, Database Architecture · GPA: 3.54/4.00"
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
        "PUMA Informatic",
        "IBM-SkillsBuild-AI-Builders-Challenge",
        "OWASP"
    ],
    certifications: [
        {
            name: "Full-Stack Development 101",
            issuer: "Simplilearn",
            date: "March 2026",
            id: "10034834",
            description: "Foundational course covering front-end and back-end integration, focusing on scalable JavaScript architectures.",
            image: "/certifications/Full-Stack_Development_101.png"
        },
        {
            name: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "March 2026",
            expiry: "March 2029",
            id: "JLX1VWN35Z72",
            description: "Fundamental training on semantic HTML, CSS layouts, and professional website structure standards.",
            image: "/certifications/Dicoding_Web_Dasar.png"
        },
        {
            name: "AWS Cloud Practitioner Essentials \u2013 Training Completion",
            issuer: "Amazon Web Services (AWS)",
            date: "March 2026",
            id: "",
            description: "Comprehensive overview of cloud concepts, security, architecture, and core global infrastructure.",
            image: "/certifications/aws_cloud_practioner_essentials.png"
        },
        {
            name: "AWS Technical Essentials",
            issuer: "Amazon Web Services (AWS)",
            date: "January 2026",
            id: "",
            description: "Technical deep-dive into AWS services including compute, database, storage, networking, and security.",
            image: "/certifications/aws_technical_essentials.png"
        },
        {
            name: "Google Ads Search Certification",
            issuer: "Google Digital Academy (Skillshop)",
            date: "February 2026",
            expiry: "February 2027",
            id: "173326967",
            description: "Mastery of Google Search campaigns, audience strategies, and performance optimization for conversion.",
            image: "/certifications/Google_Ads_Search.png"
        },
        {
            name: "Google Analytics Certification",
            issuer: "Google Digital Academy (Skillshop)",
            date: "February 2026",
            expiry: "February 2027",
            id: "173326065",
            description: "Setup and data analysis expertise using Google Analytics to derive actionable user insights.",
            image: "/certifications/Google_Analytics.png"
        },
        {
            name: "Data Integrations Certification",
            issuer: "HubSpot Academy",
            date: "February 2026",
            expiry: "March 2027",
            id: "ab0238d2c3f14a16bfb744c1a9e28356",
            description: "Expertise in connecting diverse software systems to centralize and automate business data flows.",
            image: "/certifications/Data_Integrations_Certification.png"
        },
        {
            name: "Software Engineer Certificate",
            issuer: "HackerRank",
            date: "January 2026",
            id: "D73F5CD372E0",
            description: "Validation of core engineering principles, algorithm design, and systematic debugging capabilities.",
            image: "/certifications/Software_Engineer.png"
        },
        {
            name: "Frontend Developer (React)",
            issuer: "HackerRank",
            date: "January 2026",
            id: "84B47591D6EC",
            description: "Advanced proficiency in React, component state management, and performance-driven UI development.",
            image: "/certifications/Frontend_Developer.png"
        },
        {
            name: "Golang (Basic)",
            issuer: "HackerRank",
            date: "January 2026",
            id: "C9F8A2B1E3D4",
            description: "Fundamental proficiency in Go programming language, covering syntax, data structures, concurrency patterns, and standard library usage.",
            image: "/certifications/golang.png"
        },
        {
            name: "Software Engineer Intern",
            issuer: "HackerRank",
            date: "January 2026",
            id: "E4D7F2A9C1B5",
            description: "Comprehensive assessment of software engineering fundamentals including data structures, algorithms, problem-solving, and clean code practices.",
            image: "/certifications/software_engineer_intern.png"
        }
    ],
    competitions: [
        {
            name: "Juara Vibe Coding",
            issuer: "Google",
            date: "June 2026",
            category: "participant",
            description: "Participated in Google's Vibe Coding competition, showcasing rapid prototyping and creative problem-solving using AI-assisted development tools.",
            image: "/certifications/Juara_Vibe_Coding_Google_Participants.png"
        },
        {
            name: "Peserta Kategori Web Development",
            issuer: "Codelab Indonesia",
            date: "June 2026",
            category: "participant",
            description: "Participated in the TechSprint competition organized by Codelab Indonesia, competing in the Web Development category to build full-stack applications under time constraints.",
            image: "/certifications/Web_Development_Participants.png"
        },
        {
            name: "Participant Data Automation Competition",
            issuer: "PUMA Information System President University",
            date: "June 2026",
            category: "participant",
            description: "Participated in the Tech Sprint 3in1 competition organized by PUMA Information System President University, focusing on designing efficient data pipelines and automated workflows.",
            image: "/certifications/Data_Automation_Participants.png"
        }
    ],
    openSource: [
        {
            organization: "NASA",
            repo: "nasa/TrickHLA",
            project: "TrickHLA — High Level Architecture Simulation Engine",
            language: "C++",
            category: "Logic Bug",
            bugDescription: "Inverted comparison in federation instance search. The code used != operator instead of == when matching MOM_instance_name against tMOMName.",
            impact: "When federation removal was triggered, the system recorded and removed the last mismatched entity (FedC) instead of the correct one, causing state corruption. The resigning federation remained in memory, and with only one entity present the function exited early without removing anything.",
            fileLocation: "source/TrickHLA/Federate.cpp:4213",
            maintainerResponse: "Confirmed by NASA internal maintainer (ezcrues): 'Yep, that looks like a bug.' Fix committed directly to the develop branch with hash a26e0df."
        },
        {
            organization: "Microsoft",
            repo: "microsoft/testfx",
            project: "MSTest Framework",
            language: "C# (.NET 8+)",
            category: "Architecture Contract Failure",
            bugDescription: "Non-nullable return value contract failure. When Assert.Throws<T>() or Assert.ThrowsExactly<T>() was called inside an AssertScope and the assertion failed, the method returned null instead of throwing an exception.",
            impact: "Null value exposed to user code before scope disposal, triggering a secondary NullReferenceException that masked the original assertion error and confused debugging.",
            fileLocation: "src/TestFramework/TestFramework/Assertions/Assert.ThrowsException.cs (Lines 54, 125, 352, 374, 512, 534)",
            maintainerResponse: "Confirmed by Microsoft architects (Evangelink & Youssef1313). Originally a compiler design compromise (by-design), but the report led maintainers to create 2 new Pull Requests (dotnet/docs#54409 and #9186) to overhaul official .NET documentation and RFC 011 to mitigate risk for all .NET developers worldwide."
        },
        {
            organization: "Microsoft",
            repo: "microsoft/keyborg",
            project: "Keyborg Accessibility Library",
            language: "TypeScript / TypeScript Down",
            category: "Memory Leak",
            bugDescription: "Node environment variable leak into browser runtime. The dispose() function referenced process.env.NODE_ENV, but the bundler config (tsdown.config.mts) only replaced PKG_VERSION, leaving the environment variable untouched.",
            impact: "In pure browser environments where the global process object is undefined, calling disposeKeyborg() triggered Uncaught ReferenceError: process is not defined. This halted memory cleanup (callbacks.length = 0) and caused memory leaks.",
            fileLocation: "src/Keyborg.mts:261 and tsdown.config.mts",
            maintainerResponse: "Responded by core maintainer (layershifter). Confirmed the behavior and explained that process.env.NODE_ENV dependency is an OSS industry standard where replacement responsibility is delegated to the consumer's final bundler (e.g., Vite/Webpack). Issue closed as valid architectural integration knowledge."
        },
        {
            organization: "NVIDIA",
            repo: "NVIDIA/infra-controller",
            project: "Infrastructure Controller",
            language: "Rust",
            category: "Vulnerability",
            bugDescription: "Vulnerability in the internal network management component. The packet handler for the DHCP server rigidly hardcoded the desired_address parameter to None status.",
            impact: "This bug blocked and corrupted the IP address DHCP lease renewal mechanism on NVIDIA's infrastructure controller clusters.",
            fileLocation: "crates/dhcp-server/src/packet_handler.rs:179",
            maintainerResponse: "Entered NVIDIA's infrastructure security team triage queue after receiving the official bug report."
        },
        {
            organization: "OWASP Foundation",
            repo: "OWASP/CheatSheetSeries",
            project: "Security Cheat Sheet Series",
            language: "Documentation / Security",
            category: "Vulnerability Research",
            bugDescription: "Critical security gap related to sensitive information exposure on hardware-based server infrastructure management. The -P flag on ipmitool caused BMC (Baseboard Management Controller) passwords to leak openly.",
            impact: "BMC passwords became visible and could be snooped by all local processes running within the system, creating a severe information disclosure risk.",
            fileLocation: "N/A (Security Advisory)",
            maintainerResponse: "Report accepted and validated as a contribution to improving global infrastructure security standards."
        },
        {
            organization: "Hugging Face",
            repo: "huggingface/transformers",
            project: "Transformers Engine",
            language: "Python / AI-ML Core",
            category: "Logic Bug",
            bugDescription: "Memory optimization function failure on Large Language Models. The Beam Search Cache Reorder process was silently skipped.",
            impact: "Affected cutting-edge model architectures including Mamba, XLNet, RWKV, and Reformer. The bug caused corrupted or inaccurate text generation output when handling beam-search-based computation.",
            fileLocation: "N/A",
            maintainerResponse: "Recorded in the Hugging Face core library contribution repository history."
        },
        {
            organization: "Google / WordPress",
            repo: "google/site-kit-wp",
            project: "Site Kit Analytics",
            language: "JavaScript / PHP",
            category: "Logic Bug",
            bugDescription: "Operator precedence bug in the sanitize callback function for the Google Analytics 4 module.",
            impact: "This logic flaw erroneously allowed negative numeric values for critical parameters like googleTagAccountID and googleTagContainerID, potentially corrupting site tracking data integration.",
            fileLocation: "N/A",
            maintainerResponse: "Contribution recorded in the public Google Site Kit repository activity history."
        },
        {
            organization: "Google Engineering Fellow",
            repo: "addyosmani/agent-skills",
            project: "Agent Skills",
            language: "Configuration / AI Core",
            category: "Configuration Error",
            bugDescription: "Library corruption due to incorrect pathing configuration. The shipping manifest file referenced the non-existent .gemini/agents/ directory in the repository.",
            impact: "Caused 4 main AI agent modules to experience fatal failures immediately upon runtime execution.",
            fileLocation: ".gemini/commands/ship.toml",
            maintainerResponse: "Validated through the opening of the inaugural issue ticket in the project repository."
        },
        {
            organization: "ADK Ecosystem",
            repo: "adk-python & adk-samples",
            project: "ADK Python & Samples",
            language: "Python",
            category: "Silent Type Error",
            bugDescription: "Silent type error in the interceptor function. The lowercase_value() decorator inside the before_tool callback accidentally discarded the return value.",
            impact: "Caused dict()-type data structure processing to fail execution and triggered a fatal TypeError in the background without clear warning logs.",
            fileLocation: "N/A",
            maintainerResponse: "Contribution log successfully recorded in mid-June 2026."
        },
    ]
};
