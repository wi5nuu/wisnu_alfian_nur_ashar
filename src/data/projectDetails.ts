export interface ProjectDetail {
  slug: string;
  problemStatement: string;
  solution: string;
  howToUse: string;
  impact: string;
  keyFeatures: { title: string; description: string }[];
  architecture?: string;
  detailedTechStack: { category: string; items: string[] }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  'sentinel-x': {
    slug: 'sentinel-x',
    problemStatement: 'Organizations face a critical gap in situational awareness — threat data from aviation, maritime, cyber, space, seismic, and RF domains exists in isolated silos. Security operations centers lack an integrated platform that can fuse multi-domain intelligence in real-time, correlate cross-domain events, and provide actionable threat assessments. Traditional SIEM systems are limited to cyber data only, leaving physical and environmental threat vectors completely unmonitored.',
    solution: 'SENTINEL-X is a proof-of-concept platform that breaks down these silos by ingesting, normalizing, and fusing data from six critical domains into a unified threat intelligence picture. The AI Fusion Engine uses a Multi-Modal architecture with 5 specialized encoders (Conv1D + Attention) feeding into a Temporal Transformer (4 heads, 4 layers, 256 timesteps) to generate 5-level threat classifications, multi-label threat types, ETA regression, and confidence scores. An interactive 3D Globe visualization provides immersive situational awareness with real-world military base mapping, live tracks, and dynamic threat overlays.',
    howToUse: '1. Clone the repository and copy .env.example to .env with 100+ configuration parameters. 2. Install dependencies with pip install -r requirements.txt. 3. Build and start all services with docker-compose build && docker-compose up -d (takes 20-30 minutes). 4. Access the tactical dashboard at http://localhost, API docs at http://localhost:8000/docs, and Grafana monitoring at http://localhost/grafana. 5. NOTE: Requires API keys from 15+ external data sources — see SETUP_REALTIME.md for complete guidance. Minimum system requirements: 8 CPU cores, 16GB RAM, 100GB SSD.',
    impact: 'Demonstrates the feasibility of a unified multi-domain threat intelligence platform. The AI Fusion Engine achieves automated cross-domain correlation with Explainable AI (XAI) providing full attention-based reasoning chains for every threat classification. The blockchain-based audit trail (ThreatLedger.sol + ResponseLog.sol smart contracts) ensures immutable incident logging via cryptographic hash chaining with IPFS-backed evidence storage. The platform successfully ingests and correlates data from OpenSky Network (aviation), AIS NMEA parsers (maritime), USGS (seismic), SDR (RF/SIGINT), ICS honeypots (cyber), and NASA satellite datasets.',
    keyFeatures: [
      { title: 'Multi-Domain Data Ingestion', description: 'Aggregates and normalizes intelligence from 6 major domains — Air Defense (ADS-B via OpenSky Network/ADS-B Exchange), Maritime Security (AIS NMEA parsing for dark vessel tracking), Seismic Activity (USGS earthquake monitoring), RF/SIGINT (Software-Defined Radio signal analysis), Cyber Warfare (ICS honeypots and global threat feeds), and Space/Satellite (NASA datasets and orbital monitoring).' },
      { title: 'AI Threat Fusion Engine', description: 'Multi-Modal architecture using 5 domain-specific encoders (Conv1D + Attention) feeding into a Temporal Transformer with 4 heads, 4 layers, and 256 timesteps. Generates 5-level threat classifications, multi-label threat types, predictive ETA regression, and confidence scores with full Explainable AI (XAI) reasoning chains.' },
      { title: 'Blockchain Audit Trail', description: 'Zero-trust audit logging with ThreatLedger.sol smart contract for cryptographically chained threat events, ResponseLog.sol for tamper-proof operator action logging, and IPFS integration for decentralized evidence storage (PCAP files, radar sweeps) with secure CID addressing.' },
      { title: 'Automated Incident Response', description: '5-tier threat matrix (INFORMATIONAL > SUSPICIOUS > ELEVATED > CRITICAL > CATASTROPHIC) with YAML Playbook Engine executing automated response phases while supporting manual operator approval gates for critical actions like firewall isolation and kinetic response authorization.' },
      { title: 'Interactive 3D Globe Visualization', description: 'Powered by deck.gl with fully interactive 3D globe representation. Operators can monitor live tracks (including simulated ICBM trajectories and naval fleet movements) mapped against 60+ real-world military installations with custom WebGL space canvas featuring auroras, nebulas, and dynamic lighting.' },
      { title: 'Real-Time Tactical Dashboard', description: 'Responsive dashboard with dynamic UI theming — calm blue cyber aesthetic during normal operations, aggressive red/amber threat indicators during critical incidents with priority modal alerts and recommended playbooks.' }
    ],
    architecture: 'Microservices architecture with React frontend (Port 3000) communicating via WebSocket to FastAPI backend (Port 8000). Backend publishes to Kafka message queue which feeds into 6 domain-specific Ingestors (Air, Mar, RF, Seis, Cyber, Space), the AI Fusion Engine (PyTorch), and the Response Coordinator (Playbook Engine). All services persist to PostgreSQL (TimescaleDB), Redis, Elasticsearch, and Ethereum (Hardhat) with IPFS for decentralized storage.',
    detailedTechStack: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'deck.gl', 'WebSocket', 'Tactical Dashboard UI'] },
      { category: 'Backend', items: ['FastAPI', 'Python 3.10+', 'WebSocket Broadcast', 'REST API'] },
      { category: 'AI/ML', items: ['PyTorch', 'Temporal Transformer', 'Conv1D + Attention', 'Multi-Modal Architecture', 'Explainable AI (XAI)'] },
      { category: 'Data Streaming', items: ['Apache Kafka', 'Real-time Event Processing', 'Multi-domain Ingestors'] },
      { category: 'Database', items: ['PostgreSQL / TimescaleDB', 'Redis', 'Elasticsearch'] },
      { category: 'Blockchain', items: ['Ethereum (Hardhat)', 'Solidity Smart Contracts', 'ThreatLedger.sol', 'ResponseLog.sol', 'IPFS'] },
      { category: 'DevOps', items: ['Docker', 'Docker Compose', 'Grafana Monitoring', 'CI/CD'] }
    ]
  },
  'truthlayer': {
    slug: 'truthlayer',
    problemStatement: 'Modern websites employ sophisticated dark patterns and manipulation tactics to trick users into actions they would not willingly take — fake urgency countdowns, confirmshaming, disguised ads, roach motel patterns (easy to sign up, hard to cancel), forced actions, and hidden data tracking. Users have no way to know the true intentions of a website before engaging with it. There is no existing tool that provides a comprehensive, AI-powered analysis of website trustworthiness, manipulation tactics, and data collection practices in real-time.',
    solution: 'TruthLayer is a Chrome Extension + Backend API + Web Dashboard ecosystem that reveals the hidden intentions of every website. With one click, it analyzes the webpage using a multi-factor engine: rule-based client-side dark pattern detection, Claude AI-powered intent classification, and a proprietary Trust Scorer algorithm. Results include Trust Score (0-100), primary/secondary/tertiary intents, detected dark patterns with evidence, data collection audit with third-party tracker enumeration, AI-generated content estimation, and manipulation level classification. Reports can be shared publicly via truthlayer.io/report/domain.',
    howToUse: 'Install the Chrome Extension by cloning the repo and loading the extension/ folder via chrome://extensions with Developer mode enabled. Start the backend server locally with cd backend && npm install && npm run dev (requires Node.js 18+). The web dashboard runs with cd web && npm install && npm run dev. For production, use docker-compose up --build. Click the TruthLayer icon on any website to analyze it instantly. Results are cached locally for 24 hours. All analysis is private — no browsing history is tracked.',
    impact: 'Empowers users with unprecedented transparency about website intentions and manipulation tactics. The Trust Score provides an immediate, intuitive metric (0-100) for assessing website credibility. The detailed dark pattern detection educates users about manipulation techniques they previously could not identify. Claude AI integration enables nuanced intent classification beyond simple keyword matching. Public report sharing creates a community knowledge base about website practices. The extension follows Manifest V3 with privacy-first architecture — only activeTab permission, local caching, no user tracking, and HTTPS-only API communication.',
    keyFeatures: [
      { title: 'Trust Score Engine', description: 'Multi-factor scoring algorithm (0-100) that evaluates website trustworthiness based on dark pattern presence, data collection practices, content transparency, and AI analysis. Provides an immediate, intuitive credibility assessment.' },
      { title: 'Dark Pattern Detection', description: 'Detects 10+ manipulation tactics including fake urgency, confirmshaming, roach motel, disguised ads, forced action, social proof fabrication, and more. Each detection includes specific evidence from the page.' },
      { title: 'AI-Powered Intent Classification', description: 'Backend Claude AI analyzes webpage content to classify primary, secondary, and tertiary intents (e-commerce, news, social media, phishing, etc.) with manipulation level assessment (low/medium/high/extreme).' },
      { title: 'Data Collection & Tracking Audit', description: 'Comprehensive audit of data collection practices including third-party cookies, trackers, fingerprinting scripts, and data types harvested. Displays percentage of page weight dedicated to tracking.' },
      { title: 'AI Content Estimation', description: 'Estimates the percentage of page content generated by AI with confidence scoring. Helps users identify potentially automated or low-effort content.' },
      { title: 'Public Report Sharing', description: 'Share analysis results via public URL (truthlayer.io/report/domain.com) for community awareness and collaborative website vetting.' }
    ],
    architecture: 'Chrome Extension (Manifest V3) with popup UI, service worker background, and content script for metadata extraction. Communicates via REST API to Node.js Express backend with in-memory caching (24-hour TTL). Backend integrates Claude AI for intent classification and runs rule-based dark pattern detection engine. Web dashboard built with Next.js 15 provides landing page, about, privacy policy, and public report pages with SSR rewrites to backend.',
    detailedTechStack: [
      { category: 'Extension', items: ['Chrome Extension Manifest V3', 'Service Worker', 'Content Scripts', 'i18n Translations'] },
      { category: 'Frontend', items: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Node.js', 'Express.js', 'Helmet Security Headers', 'Rate Limiting'] },
      { category: 'AI', items: ['Claude AI (Anthropic)', 'Rule-based Dark Pattern Engine', 'Trust Scorer Algorithm'] },
      { category: 'Infrastructure', items: ['Docker', 'Netlify', 'GitHub Actions CI/CD'] }
    ]
  },
  'colonyai': {
    slug: 'colonyai',
    problemStatement: 'Microbiology laboratories face a critical bottleneck: bacterial colony counting on agar plates is performed manually by analysts. This process is extremely time-consuming and suffers from high inter-analyst variability — coefficient of variation ranges from 22.7% to 80% depending on plate complexity. This inconsistency leads to unreliable CFU/ml calculations, compromised quality control, and potential food safety risks. Traditional automated solutions are either too expensive or lack the accuracy required for regulatory compliance with ISO 17025 standards.',
    solution: 'ColonyAI is a deep learning-powered automated system that integrates a computer vision pipeline with a secure web dashboard. The system uses a fine-tuned YOLOv8 neural network optimized to detect and classify objects into 5 distinct classes (colony_single, colony_merged, bubble, dust_debris, media_crack). Preprocessing is accelerated using Contrast Limited Adaptive Histogram Equalization (CLAHE) and Hough Circle Transform to automatically isolate the agar plate area. The system achieves 94.1% mAP@0.5, 94.7% precision, and 92.5% recall across 56,124 bounding box annotations, reducing inter-analyst variability by 92.5%.',
    howToUse: 'Upload agar plate images through the web dashboard (colonyai-eta.vercel.app). The system automatically processes the image through CLAHE preprocessing, detects the agar plate boundary using Hough Circle Transform, runs the YOLOv8 inference engine, and generates a standardized CFU/ml report in under 2 minutes. Users can review detected colonies, accept or reject auto-classifications, and export results as PDF (BPOM/SNI compliant) or CSV. The system supports batch processing for multiple plates simultaneously.',
    impact: 'Transforms microbiology laboratory workflows by reducing colony counting time from 15-30 minutes per plate to under 2 minutes — a 90%+ reduction in analysis time. Inter-analyst variability dropped from 22.7-80% CV to near-zero consistency. The SA-001 area-based merged colony estimation algorithm accurately handles overlapping colonies that would stump traditional thresholding methods. The SHA-256 cryptographic hash chaining audit trail ensures ISO 17025 compliance with tamper-evident logging. Artifact rejection precision exceeds 90%, preventing false positives from bubbles, dust, and media cracks. The system was officially submitted to the AI Open Innovation Challenge 2026 by Team President University.',
    keyFeatures: [
      { title: 'Computer Vision Pipeline', description: 'Fine-tuned YOLOv8s neural network optimized for 5-class detection (colony_single, colony_merged, bubble, dust_debris, media_crack). Preprocessing uses CLAHE for contrast enhancement and Hough Circle Transform for automatic agar plate localization.' },
      { title: 'Artifact Rejection System', description: 'Differentiates valid biological colonies from non-biological noise (air bubbles, dust particles, media cracks) with over 90% artifact rejection precision, preventing false positives in final colony counts.' },
      { title: 'Scientific CFU/ml Calculations', description: 'Automatically calculates Colony Forming Units per milliliter based on dilution factor and volume plated. Includes SA-001 area-based merged colony estimation for overlapping colonies and expanded measurement uncertainty (k=2) per ISO/IEC Guide 98-3 (GUM).' },
      { title: 'Cryptographic Audit Trail', description: 'ISO 17025-compliant tamper-evident database logging using SHA-256 cryptographic hash chaining. Any unauthorized modification to past logs automatically invalidates the subsequent chain, making data tampering detectable.' },
      { title: 'Enterprise-Grade Security', description: 'Zero-Trust architecture with Argon2 password hashing, JWT with JTI-based blacklisting for instant session revocation, magic-bytes verification to prevent MIME-type spoofing, automatic EXIF metadata stripping for GPS privacy, and integrated ClamAV malware scanning.' },
      { title: 'Multi-Role Governance', description: '4-tier Role-Based Access Control (RBAC) — Admin, Manager, Analyst, and Auditor — enforcing strict separation of duties within the laboratory workflow.' }
    ],
    architecture: 'Frontend: Next.js 14 (App Router) with TypeScript, Tailwind CSS, and Zustand state management. Backend: Python FastAPI with Pydantic v2 validation and SQLAlchemy 2.0 Async ORM. AI/ML: YOLOv8s model via PyTorch and OpenCV. Database: PostgreSQL 15 (ACID-compliant). Infrastructure: Docker containers deployed on Railway (backend) and Vercel (frontend) with AWS S3 (AES-256 encrypted) for image storage.',
    detailedTechStack: [
      { category: 'AI/ML Vision', items: ['YOLOv8s', 'OpenCV', 'PyTorch', 'CLAHE', 'Hough Circle Transform'] },
      { category: 'Backend API', items: ['Python', 'FastAPI', 'Pydantic v2', 'SQLAlchemy 2.0 (Async)'] },
      { category: 'Frontend', items: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Zustand'] },
      { category: 'Database', items: ['PostgreSQL 15', 'ACID Compliance'] },
      { category: 'Security', items: ['Argon2', 'JWT/JTI Blacklisting', 'ClamAV', 'EXIF Stripping', 'Magic-Bytes'] },
      { category: 'Infrastructure', items: ['Docker', 'Railway', 'Vercel', 'AWS S3 (AES-256)'] },
      { category: 'Compliance', items: ['ISO/IEC 17025:2017', 'ISO 4833-1:2013', 'BPOM / SNI 2897:2008', 'GUM Uncertainty'] }
    ]
  },
  'shooply': {
    slug: 'shooply',
    problemStatement: 'Modern e-commerce platforms struggle to balance performance, scalability, and developer experience. Traditional monolithic architectures become bottlenecks under high traffic, while microservices introduce complexity in service coordination, observability, and deployment. There is a need for a high-performance e-commerce reference architecture that demonstrates best practices in microservices design, caching strategies, message queuing, and comprehensive telemetry.',
    solution: 'Shooply is a full-stack e-commerce platform built with a microservices architecture that demonstrates production-grade patterns. The frontend uses Next.js 14 with SSR optimization and efficient state management via Zustand and React Query. The backend leverages Go (Golang) with GoFiber — one of the fastest Go web frameworks — connected to PostgreSQL. The platform implements Redis for advanced caching and RabbitMQ for reliable message queuing between services. Comprehensive telemetry is achieved through OpenTelemetry integration with Prometheus for metrics collection and Zerolog for structured logging.',
    howToUse: 'Clone the repository and set up both frontend (Next.js 14) and backend (GoFiber) services. Configure PostgreSQL, Redis, and RabbitMQ connections. Run migrations to set up the database schema. Start the backend API server, then launch the frontend application. The platform exposes RESTful API endpoints for product catalog, cart management, checkout, order processing, and user management with full Swagger documentation.',
    impact: 'Demonstrates a production-ready e-commerce architecture achieving high throughput through GoFiber\'s performance (one of the fastest Go frameworks) and Redis caching. The RabbitMQ message queue ensures reliable asynchronous order processing and inventory updates. OpenTelemetry integration provides end-to-end observability with distributed tracing, enabling quick diagnosis of performance bottlenecks. The SSR-optimized Next.js frontend delivers fast page loads and excellent SEO performance.',
    keyFeatures: [
      { title: 'Microservices Architecture', description: 'Decoupled services for product catalog, cart, checkout, orders, and user management, communicating through REST APIs and RabbitMQ message queues for loose coupling and independent scalability.' },
      { title: 'High-Performance Backend', description: 'GoFiber backend leveraging Go\'s concurrency model for exceptional throughput and low latency. Redis caching layer reduces database load and accelerates frequent queries.' },
      { title: 'SSR-Optimized Frontend', description: 'Next.js 14 with Server-Side Rendering for fast initial page loads, excellent SEO, and optimal Core Web Vitals scores. State management via Zustand and React Query for efficient client-side data handling.' },
      { title: 'Comprehensive Observability', description: 'OpenTelemetry integration for distributed tracing across all services, Prometheus metrics collection for performance monitoring, and Zerolog structured logging for efficient log analysis and debugging.' },
      { title: 'Reliable Message Queuing', description: 'RabbitMQ for asynchronous communication between services — order processing, inventory updates, email notifications — ensuring reliable delivery even under high load.' }
    ],
    architecture: 'Frontend (Next.js 14 + TypeScript + Tailwind CSS) communicates with Backend (Go + GoFiber) via REST API. Redis sits between frontend and backend as a caching layer. RabbitMQ handles async message passing between microservices. PostgreSQL serves as the primary database. OpenTelemetry collector gathers traces from all services and exports to Prometheus for metrics visualization.',
    detailedTechStack: [
      { category: 'Frontend', items: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'React Query', 'Zustand', 'Framer Motion'] },
      { category: 'Backend', items: ['Go (Golang)', 'GoFiber', 'PostgreSQL', 'Redis', 'RabbitMQ'] },
      { category: 'Observability', items: ['OpenTelemetry', 'Prometheus', 'Zerolog'] }
    ]
  },
  'fanguard-strategic-hub': {
    slug: 'fanguard-strategic-hub',
    problemStatement: 'Enterprise organizations need a centralized strategic execution hub that combines real-time data visualization, task management, and security monitoring. Disparate tools for project management, security monitoring, and analytics create context-switching overhead and information fragmentation. Leaders need a unified platform that provides real-time visibility into operational status, security posture, and strategic initiative progress.',
    solution: 'Fanguard Strategic Hub (formerly Vanguard) is an enterprise-grade execution hub and strategic management platform. It features a high-performance Fastify backend with real-time RBAC security, Prisma ORM for type-safe database access, and Redis caching. The sophisticated Next.js 14 dashboard integrates Radix UI primitives, shadcn/ui components, Zustand state management, and Socket.io for real-time updates. The platform provides a unified view of strategic initiatives, operational metrics, and security status with drill-down analytics.',
    howToUse: 'Clone the repository and configure the Fastify backend with PostgreSQL and Redis connections. Run Prisma migrations to initialize the database. Start the backend and frontend services. Log in with admin credentials to access the full dashboard. Configure teams, projects, and strategic initiatives. Assign roles (Admin, Manager, Member) with granular permissions. Monitor real-time updates via Socket.io connections.',
    impact: 'Delivers a unified command-center experience for enterprise operations. The Fastify backend provides high throughput with low latency, while Prisma ORM ensures type-safe database operations with zero SQL errors. Socket.io enables real-time collaboration and live updates across teams. Radix UI + shadcn/ui ensures accessibility compliance and consistent design. The platform consolidates multiple operational tools into a single, unified interface, reducing context-switching overhead.',
    keyFeatures: [
      { title: 'Real-Time Dashboard', description: 'Live-updating dashboard with Socket.io integration showing operational metrics, task status, and security posture in real-time. Drill-down analytics for detailed investigation.' },
      { title: 'RBAC Security', description: 'Role-Based Access Control with granular permissions for Admin, Manager, and Member roles. Secure session management with JWT authentication.' },
      { title: 'Strategic Initiative Management', description: 'Create, track, and manage strategic initiatives with milestone tracking, task assignment, and progress visualization.' },
      { title: 'Enterprise-Grade Performance', description: 'Fastify backend optimized for high throughput with Redis caching layer. Prisma ORM for efficient, type-safe database queries.' }
    ],
    architecture: 'Next.js 14 frontend communicates via REST API to Fastify backend. Prisma ORM handles PostgreSQL database operations. Redis provides caching for frequently accessed data. Socket.io enables bidirectional real-time communication. Docker containers orchestrate the full stack with CI/CD pipeline.',
    detailedTechStack: [
      { category: 'Frontend', items: ['Next.js 14', 'Radix UI', 'shadcn/ui', 'Zustand', 'Socket.io Client'] },
      { category: 'Backend', items: ['Fastify', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'Redis'] },
      { category: 'Real-Time', items: ['Socket.io', 'WebSocket'] },
      { category: 'Security', items: ['JWT', 'RBAC', 'BCrypt'] },
      { category: 'Testing', items: ['Vitest'] },
      { category: 'DevOps', items: ['Docker', 'CI/CD'] }
    ]
  },
  'risk-shield-system': {
    slug: 'risk-shield-system',
    problemStatement: 'Organizations struggle with Governance, Risk, and Compliance (GRC) processes that are manual, subjective, and disconnected from actual security evidence. The OCTAVE Allegro methodology — a proven framework for information security risk assessment — requires extensive manual effort across 8 detailed steps, making it impractical for continuous risk monitoring. Traditional GRC tools are either too expensive, too rigid, or lack integration with modern AI capabilities for intelligent risk analysis.',
    solution: 'Risk Shield System is a comprehensive Autonomous GRC platform that automates the entire OCTAVE Allegro 8-step roadmap. It integrates Google Gemini Pro AI for strategic risk treatment analysis, real-time compliance scoring, automated audit findings generation, intelligent evidence collection, and a local AI engine (ShieldBot) that operates with zero API dependencies for academic/offline requirements. The platform transforms subjective risk guessing into evidence-based security verification with dynamic risk heatmaps and compliance dashboards.',
    howToUse: 'Set up the Next.js frontend and Supabase backend with the provided SQL schema migrations. Configure Google Gemini Pro API key in environment variables. Log in to access the role-based dashboard (Admin, Auditor, Auditee). Create projects and follow the guided OCTAVE Allegro 8-step wizard for risk assessment. Upload evidence files for audit verification. Monitor compliance scores and risk heatmaps in real-time. Generate PDF compliance reports with automated findings. Use ShieldBot for local AI-powered querying of risk data.',
    impact: 'Transforms GRC from a periodic, manual audit exercise into a continuous, evidence-driven process. The AI integration (Gemini Pro) automates steps 5-7 of OCTAVE Allegro — risk identification, analysis, and mitigation planning — reducing assessment time by an estimated 70%. The local ShieldBot AI engine satisfies academic/offline requirements while providing dynamic database context analysis. Real-time compliance scoring and automated findings generation eliminate manual reporting overhead. The Shopee-style notification system and Intelligence Stream keep all stakeholders informed of security posture changes.',
    keyFeatures: [
      { title: 'OCTAVE Allegro Automation', description: 'Guided 8-step wizard automating the complete OCTAVE Allegro risk assessment roadmap from criteria establishment to control verification. Smart mapping between technical vulnerabilities and business assets.' },
      { title: 'AI Security Advisor (Gemini Pro)', description: 'Strategic risk analysis using Google Gemini Pro for intelligent mitigation recommendations, risk treatment planning, and complex technical translation based on global security standards.' },
      { title: 'Real-Time Compliance Scoring', description: 'Automated compliance percentage calculation across security domains with category breakdown visualization. Real-time updates as audit evidence is collected and verified.' },
      { title: 'Intelligence Stream & Notifications', description: 'Real-time scrolling notification marquee and Shopee-style slide-out notification drawer for instant security posture awareness. Inbox with category-based filtering (Security, Database, Project, System).' },
      { title: 'ShieldBot Local AI Engine', description: 'Zero-API local AI widget analyzing Risks, Projects, and Users directly from the PostgreSQL database. Rotating intelligence tooltips and role-based greetings satisfying academic/offline requirements.' },
      { title: 'Secure Admin Reporting', description: 'Multi-factor identity verification (Name, NIM, Email) before PDF generation. Automated compliance reports following official academic templates with full access logging.' }
    ],
    architecture: 'Next.js 14 frontend with React, Tailwind CSS, and shadcn/ui components. Supabase provides PostgreSQL database, authentication, and storage. Google Gemini Pro API handles AI-powered analysis. jsPDF with AutoTable generates compliance reports. Recharts visualizes risk heatmaps and compliance data. Framer Motion provides smooth animations throughout the interface.',
    detailedTechStack: [
      { category: 'Frontend', items: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'] },
      { category: 'Backend', items: ['Supabase (PostgreSQL)', 'Supabase Auth', 'Supabase Storage'] },
      { category: 'AI', items: ['Google Gemini Pro', 'ShieldBot (Local SQL Engine)'] },
      { category: 'Reporting', items: ['jsPDF', 'AutoTable'] },
      { category: 'Visualization', items: ['Recharts', 'Risk Heatmaps'] },
      { category: 'Icons', items: ['Lucide React'] }
    ]
  },
  'human-firewall': {
    slug: 'human-firewall',
    problemStatement: 'Employees are the weakest link in organizational security — 91% of data breaches start with a phishing email. Traditional cybersecurity training is boring, ineffective, and fails to engage employees. Organizations need an interactive, gamified platform that simulates real-world phishing attacks, delivers engaging security awareness content, and tracks individual and team progress to build a human firewall against social engineering threats.',
    solution: 'Human Firewall Intelligence Platform is an enterprise-grade cybersecurity awareness and phishing simulation platform. It features interactive, scenario-based phishing simulators that mimic real-world threats, a comprehensive learning hub covering social engineering, data privacy, and digital hygiene, real-time analytics dashboards for both admins and members, gamified Hall of Fame and leaderboards to encourage healthy competition, a dynamic simulation builder, and automated PDF certificate and report generation for compliance and achievement tracking.',
    howToUse: 'Access the platform at the live URL. Admin users can create and manage phishing simulation campaigns, assign learning modules to team members, and monitor progress through the analytics dashboard. Members participate in simulated phishing scenarios, complete interactive learning modules, and track their scores on the leaderboard. The platform automatically generates certificates upon completion of training milestones and detailed reports for compliance purposes.',
    impact: 'Transforms security awareness training from a checkbox compliance exercise into an engaging, measurable security capability. Gamification elements (leaderboards, Hall of Fame, badges) drive sustained engagement and healthy competition. Real-time dashboards give administrators visibility into organizational risk levels and individual progress. Adaptive learning paths ensure content is relevant to each user\'s role and risk profile. Automated reporting simplifies compliance documentation for security standards and regulations.',
    keyFeatures: [
      { title: 'Advanced Phishing Simulators', description: 'Interactive, scenario-based simulations that mimic real-world threats including spear phishing, whaling, smishing, and vishing attacks. Customizable templates for organization-specific scenarios.' },
      { title: 'Interactive Learning Hub', description: 'Comprehensive repository of modules covering social engineering, data privacy, digital hygiene, password security, and incident reporting. Bite-sized, engaging content optimized for retention.' },
      { title: 'Real-Time Analytics Dashboards', description: 'Full visibility for both administrators and individual members. Track progress, scores, risk levels, simulation performance, and training completion rates with drill-down analytics.' },
      { title: 'Gamified Experience', description: 'Hall of Fame, leaderboards, achievement badges, and performance tracking to encourage healthy competition and sustained engagement with security awareness content.' },
      { title: 'Simulation Builder', description: 'Dynamic container for creating, configuring, and monitoring various cybersecurity simulations. Customize phishing templates, landing pages, and reporting criteria.' },
      { title: 'Automated Reporting', description: 'On-the-fly PDF certificate generation for training completion and compliance. Automated reports for audit and management review.' }
    ],
    architecture: 'React 19 frontend with TypeScript, Tailwind CSS, Radix UI primitives, and Framer Motion animations. Supabase provides real-time database, authentication, and file storage. Zustand handles global state management. React Hook Form with Zod validation manages form inputs. Recharts provides interactive data visualizations. Vite serves as the build tool for fast development and optimized production builds.',
    detailedTechStack: [
      { category: 'Frontend', items: ['React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion'] },
      { category: 'Backend', items: ['Supabase (Auth, Database, Storage)'] },
      { category: 'State Management', items: ['Zustand'] },
      { category: 'Forms & Validation', items: ['React Hook Form', 'Zod'] },
      { category: 'Visualization', items: ['Recharts'] },
      { category: 'Build Tool', items: ['Vite'] }
    ]
  },
  'ashar-grosir-parfum': {
    slug: 'ashar-grosir-parfum',
    problemStatement: 'Ashar Grosir Parfum, a family business established in 2004 with 22+ years of expertise in premium fragrance distribution, faced critical operational challenges. Manual inventory management led to data errors exceeding 30%, order processing was inefficient with paper-based workflows, and market reach was limited to local walk-in customers. As one of Indonesia\'s premier wholesale perfume distributors with 15,000+ partners, there was an urgent need for digital transformation to streamline operations, reduce errors, and expand market reach nationally.',
    solution: 'A comprehensive enterprise-grade e-commerce ecosystem was built from the ground up, featuring an AI-powered intelligent catalog with 600+ SKUs and real-time inventory tracking, a smart AI chatbot for 24/7 customer support with NLP capabilities in Indonesian, a dedicated APK for wholesale partners, and a full-featured enterprise admin dashboard with AI-driven business intelligence. The platform uses Next.js 16 with React 19 for the frontend, Supabase PostgreSQL for the database, Upstash Redis for global rate limiting, and Cloudflare for enterprise WAF and DDoS protection.',
    howToUse: 'Customers browse the online catalog at www.ashargrosirparfum.com, filtering 600+ products by category, price, and fragrance type. Wholesale partners can download the dedicated APK for mobile ordering. The AI chatbot provides 24/7 assistance in Indonesian. Admin users access the enterprise dashboard to manage inventory, process wholesale orders with multi-tier pricing, run AI-powered business intelligence queries, manage retail CRM, and publish blog content. The system supports both wholesale (bulk) and retail (individual) purchasing workflows.',
    impact: 'Digital transformation of a 20-year-old family business resulted in 70% reduction in manual data errors, expansion to 15,000+ active business partners nationwide, average 500+ daily orders, 4.9/5 customer rating from 221+ verified reviews, and coverage across all provinces in Indonesia. The AI-powered admin assistant enables natural language discovery of sales data, inventory status, and business analytics. The platform achieves 96+ Lighthouse performance score with edge-side rendering and 98+ SEO score.',
    keyFeatures: [
      { title: 'AI-Powered Product Catalog', description: '600+ SKUs with real-time inventory tracking, multi-tier pricing for wholesale, retail, and premium partners. Intelligent search with fragrance notes, categories, and price filtering.' },
      { title: 'AI Chatbot (Indonesian NLP)', description: '24/7 automated customer support with natural language processing in Bahasa Indonesia. Handles product inquiries, order status, and business partner registration.' },
      { title: 'Enterprise Admin Dashboard', description: 'Comprehensive business intelligence with AI assistant for natural language queries about sales, inventory, and engagement. Full RBAC security with role-based access control.' },
      { title: 'APK & PWA Distribution', description: 'Dedicated Android APK for wholesale partners. Progressive Web App with offline resilience, push notifications, and install-to-home-screen support for mobile-first experience.' },
      { title: 'Business Partner Ecosystem', description: 'Complete entrepreneurship packages including wholesale distribution, retail sales, custom formulations, professional training, and lifetime business support for 15,000+ partners.' },
      { title: 'Enterprise-Grade Performance', description: '96+ Lighthouse performance score, 98+ SEO, 94+ accessibility. Cloudflare WAF and DDoS protection. Redis-backed rate limiting and session management.' }
    ],
    architecture: 'Next.js 16 (App Router) + React 19 frontend with Tailwind CSS. Supabase PostgreSQL with Row-Level Security for data access control. Upstash Redis for global rate limiting and session management. Cloudflare for CDN, WAF, and DDoS protection. Vercel for edge-deployed hosting with 300+ global locations. JWT authentication with bcryptjs hashing and Zod schema validation.',
    detailedTechStack: [
      { category: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Backend', items: ['Supabase PostgreSQL', 'Row-Level Security', 'API Routes'] },
      { category: 'Cache & Rate Limiting', items: ['Upstash Redis', 'Global Rate Limiting', 'Session Management'] },
      { category: 'Security', items: ['Cloudflare WAF', 'DDoS Protection', 'Turnstile CAPTCHA', 'JWT', 'bcryptjs'] },
      { category: 'AI', items: ['AI Chatbot (NLP)', 'AI Admin Assistant', 'Smart Recommendations'] },
      { category: 'Analytics', items: ['Vercel Analytics', 'Core Web Vitals'] }
    ]
  },
  'lexcorpus-cms-platform': {
    slug: 'lexcorpus-cms-platform',
    problemStatement: 'Legal education at President University lacked a dedicated digital platform for publishing, organizing, and managing legal content. Students and faculty needed a streamlined content management system for legal articles, case studies, and academic materials. The existing workflow for publishing legal content was fragmented — using general-purpose tools that lacked legal-specific features like case citation management, document versioning, and structured legal taxonomy.',
    solution: 'LexCorpus is a full-featured CMS platform designed specifically for legal education. It features a TipTap rich text editor for professional content creation, multi-role access control (Admin, Member, Public), a membership system for premium content, and a comprehensive admin dashboard for article management, membership transactions, and inquiry handling. The platform is built with Next.js 16, React 19, TypeScript, and Supabase for rapid, scalable deployment.',
    howToUse: 'Public users can browse published articles and legal content freely. Members get access to premium content and exclusive legal analyses. Admin users access the dashboard at /admin to create, edit, and manage articles using the TipTap rich text editor (similar to SINTA/WordPress). The publishing workflow supports drafts, scheduled publishing, categories, and view tracking. Contact form inquiries are managed through the admin panel with automated responses.',
    impact: 'Provides President University\'s legal community with a professional, dedicated platform for legal knowledge sharing. The TipTap editor enables rich formatting of legal documents with proper citations and references. The membership system creates sustainable content monetization. SEO optimization with structured data ensures articles are discoverable. The admin interface streamlines the publishing workflow from draft to publication.',
    keyFeatures: [
      { title: 'Rich Text Editor (TipTap)', description: 'Professional editor similar to SINTA/WordPress with support for headings, lists, images, links, tables, and code blocks. Specifically configured for legal document formatting needs.' },
      { title: 'Multi-Role Access Control', description: 'Admin, Member, and Public roles with granular permissions. Membership system with premium content gating, activation, and transaction tracking.' },
      { title: 'Comprehensive Article Management', description: 'Create, edit, publish, unpublish articles with categories, view counters, comments, and SEO-friendly URL slugs. Draft/publish workflow with scheduled publishing.' },
      { title: 'SEO Optimization', description: 'Meta tags, Open Graph preview, structured data, and semantic HTML for maximum search engine visibility. Automatic sitemap generation for all published content.' },
      { title: 'Admin Dashboard', description: 'Full administrative interface for managing articles, membership transactions, inquiries, and site settings with dashboard analytics.' }
    ],
    architecture: 'Next.js 16 (App Router) + React 19 frontend with TypeScript and Tailwind CSS. Supabase provides PostgreSQL database, authentication, and file storage. TipTap editor (based on ProseMirror) handles rich text editing. Server-side rendering ensures fast page loads and SEO optimization. API routes handle contact form submissions and admin authentication.',
    detailedTechStack: [
      { category: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Supabase (PostgreSQL, Auth, Storage)', 'API Routes'] },
      { category: 'Editor', items: ['TipTap', 'ProseMirror'] },
      { category: 'UI Components', items: ['Heroicons', 'Lucide React'] },
      { category: 'Utilities', items: ['date-fns'] }
    ]
  },
  'nuxar-perfumery': {
    slug: 'nuxar-perfumery',
    problemStatement: 'Premium perfume brands need a digital presence that matches the luxury and sophistication of their products. Standard e-commerce templates fail to convey the artistry, emotion, and craftsmanship behind fine fragrances. Nuxar Perfumery needed a website that delivers a cinematic, immersive brand experience — not just a product catalog — with dramatic animations, 3D effects, and a premium dark-themed interface that reflects the elegance of their perfume collection.',
    solution: 'Nuxar Perfumery is a high-end cinematic perfume website built with React 19, TypeScript, and Vite. The site features GSAP-powered scroll animations, Three.js 3D effects, custom particle fields, a sophisticated dark theme with glassmorphism effects, custom cursor, and canvas-based floating particle animations. An integrated AI chatbot powered by Google Gemini provides perfume consultation services. The backend uses Supabase for product data and Google Generative AI for conversational intelligence, with Upstash Redis rate limiting and Cloudflare Turnstile bot protection.',
    howToUse: 'Visit the website to experience the cinematic landing page with GSAP scroll animations and 3D effects. Browse the perfume catalog with interactive product cards, detailed fragrance information, and pricing. Use the AI chatbot for personalized perfume recommendations based on preferences. The contact form is protected by Cloudflare Turnstile for spam prevention. Admin users manage the product catalog through Supabase database directly.',
    impact: 'Delivers a luxury brand experience that sets Nuxar Perfumery apart from standard e-commerce competitors. The GSAP animations and Three.js 3D effects create an emotional connection with visitors, increasing engagement and time-on-site. The Google Gemini AI chatbot provides 24/7 personalized perfume consultations, reducing customer support workload while improving conversion rates. Upstash Redis rate limiting prevents API abuse while maintaining responsive performance.',
    keyFeatures: [
      { title: 'Cinematic GSAP Animations', description: 'Professional-grade scroll-triggered animations with typewriter effects, blur-reveal transitions, clip-path reveals, and elastic animations. Custom cubic-bezier easings for dramatic, smooth motion.' },
      { title: '3D Effects & Particle Systems', description: 'Three.js integration for 3D visual elements. Canvas-based floating particle fields with parallax effects. Noise texture overlay and chromatic aberration for cinematic atmosphere.' },
      { title: 'AI Perfume Consultant', description: 'Google Gemini-powered chatbot for personalized fragrance recommendations, perfume notes education, and product discovery. Streaming AI responses for real-time conversational experience.' },
      { title: 'Premium Dark Theme', description: 'Sophisticated black and red color scheme with glassmorphism effects. Fully responsive with mobile-first optimization and reduced motion support for accessibility.' },
      { title: 'Enterprise Security', description: 'Upstash Redis rate limiting (token bucket algorithm) for API protection. Cloudflare Turnstile for privacy-friendly bot protection on contact forms.' }
    ],
    architecture: 'React 19 + TypeScript frontend built with Vite. GSAP (ScrollTrigger) handles scroll-based animations. Three.js via @react-three/fiber provides 3D rendering. Google Generative AI (Gemini Pro) powers the AI chatbot with Vercel AI SDK for streaming responses. Supabase serves as the backend for product data and blog content. Upstash Redis provides rate limiting infrastructure.',
    detailedTechStack: [
      { category: 'Frontend Core', items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'] },
      { category: 'Animation & 3D', items: ['GSAP 3 (ScrollTrigger)', 'Three.js', '@react-three/fiber', '@react-three/drei'] },
      { category: 'AI & Intelligence', items: ['Google Generative AI (Gemini Pro)', 'Vercel AI SDK'] },
      { category: 'Security', items: ['Upstash Redis Rate Limiting', 'Cloudflare Turnstile'] },
      { category: 'UI Components', items: ['Radix UI Primitives', 'Lucide React', 'sonner Toast'] },
      { category: 'Backend', items: ['Supabase', 'PostgreSQL'] }
    ]
  },
  'pc-fkma-jakarta-website': {
    slug: 'pc-fkma-jakarta-website',
    problemStatement: 'PC FKMA Jakarta (As\'adiyah Alumni Association in Jakarta) lacked an official digital presence to connect with alumni members, share organizational news, and manage community activities. The organization relied on informal communication channels (WhatsApp groups, word-of-mouth) which limited reach, engagement, and operational efficiency. There was no centralized platform for news, event announcements, member directory, or organizational documentation.',
    solution: 'Developed and deployed the official organizational website for PC FKMA Jakarta As\'adiyah. The platform features a news portal for organizational updates, member information, event announcements, and organizational documentation. Built with Next.js and Tailwind CSS for a modern, responsive design. Deployed on Vercel for reliable, high-performance hosting with CI/CD for easy content updates.',
    howToUse: 'Visit the website to view organizational news, event schedules, and member information. Admin users can log in to publish news articles, manage events, and update organizational content. The platform serves as the central information hub for all As\'adiyah alumni in Jakarta, replacing fragmented communication channels with a unified digital presence.',
    impact: 'Provides the As\'adiyah alumni community in Jakarta with a professional digital platform for communication and engagement. Centralizes news distribution, event management, and member information. The modern, responsive design ensures accessibility across all devices. The Vercel deployment with CI/CD enables quick content updates without technical barriers.',
    keyFeatures: [
      { title: 'News Portal', description: 'Centralized platform for publishing organizational news, announcements, and updates. Categorized articles with search and archive functionality.' },
      { title: 'Organizational Profile', description: 'Complete organizational information including vision, mission, structure, leadership, and contact information for transparency and accessibility.' },
      { title: 'Event Management', description: 'Event calendar and announcement system for organizational activities, meetings, and community programs.' },
      { title: 'Responsive Design', description: 'Mobile-first design ensuring full accessibility across smartphones, tablets, and desktop devices for all members.' }
    ],
    architecture: 'Next.js frontend with Tailwind CSS for styling. Deployed on Vercel with automatic CI/CD from GitHub. Simple, lightweight architecture optimized for static content delivery with fast page loads.',
    detailedTechStack: [
      { category: 'Frontend', items: ['Next.js', 'Tailwind CSS', 'TypeScript'] },
      { category: 'Infrastructure', items: ['Vercel', 'GitHub CI/CD'] }
    ]
  },
  'wiskost-residence': {
    slug: 'wiskost-residence',
    problemStatement: 'Wiskost Residence needed a professional digital presence to showcase their boarding house/winery-inspired residence with luxury amenities. The property management team required a modern website that could effectively communicate the premium living experience, display room types and pricing, share location and facilities information, and streamline inquiries from potential tenants. The existing marketing approach relied on basic listings and word-of-mouth, limiting reach to quality tenants.',
    solution: 'A luxury winery-inspired residence website with a gold-accent dark theme. The platform features comprehensive room listings with detailed information, professional image gallery with carousel, facilities showcase, location with Google Maps integration, FAQ accordion, testimonials from current tenants, and a contact form for inquiries. The backend uses Golang (Gin Framework) with PostgreSQL for robust data management, JWT authentication for admin panel, and bcrypt password hashing for security. All CTA buttons link to WhatsApp with prefilled messages for maximum conversion.',
    howToUse: 'Prospective tenants visit the landing page to explore room types (Standard, Executive, Large), view facilities and location, read testimonials, and check FAQs. Each room listing has detailed information with high-quality images. Clicking "Book Now" or any CTA button opens WhatsApp with a prefilled message about the specific room. Property managers use the admin panel to manage rooms, images, testimonials, FAQs, and gallery content through the secure JWT-authenticated interface.',
    impact: 'Provides Wiskost Residence with a professional, luxury-branded digital presence that attracts quality tenants. The WhatsApp-integrated booking flow reduces friction in the inquiry process — a single tap connects prospects with property managers. The Golang backend ensures fast, reliable API performance. The modern, responsive design with gold-accent dark theme communicates the premium nature of the residence. Automated deployment pipeline ensures the site stays up-to-date with minimal maintenance overhead.',
    keyFeatures: [
      { title: 'Luxury UI/UX Design', description: 'Gold-accent dark theme with winery-inspired aesthetics. Premium typography and smooth animations for an upscale feel. Fully responsive with mobile-first design.' },
      { title: 'WhatsApp-Optimized Conversion', description: 'All CTA buttons open WhatsApp directly with room-specific prefilled messages. Sticky WhatsApp floating button on every page for instant contact.' },
      { title: 'Comprehensive Admin Panel', description: 'JWT-authenticated management interface for rooms, images, testimonials, FAQs, and gallery. Secure CRUD operations with bcrypt password hashing.' },
      { title: 'SEO & Performance', description: 'Meta tags, OpenGraph preview, structured data (LocalBusiness schema). Fast page loads with optimized images and efficient React rendering.' },
      { title: 'Golang Backend', description: 'High-performance Gin Framework backend with PostgreSQL. Clean Architecture (handler -> service -> repository -> model) for maintainable code.' }
    ],
    architecture: 'React 18 + TypeScript + Vite frontend with Tailwind CSS and Framer Motion. Golang backend using Gin Framework with PostgreSQL database following Clean Architecture pattern. JWT authentication for admin access with bcrypt password hashing. WhatsApp Business API integration for direct messaging. Vercel for frontend deployment.',
    detailedTechStack: [
      { category: 'Frontend', items: ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'] },
      { category: 'Backend', items: ['Golang', 'Gin Framework', 'PostgreSQL', 'Clean Architecture'] },
      { category: 'Authentication', items: ['JWT', 'bcrypt'] },
      { category: 'Integration', items: ['WhatsApp Business API', 'Google Maps'] },
      { category: 'Infrastructure', items: ['Vercel', 'Docker'] }
    ]
  },
  'grawizah': {
    slug: 'grawizah',
    problemStatement: 'Indonesia\'s Micro, Small, and Medium Enterprises (MSMEs/UMKM) contribute more than 60% of the national GDP, yet fewer than 4% successfully enter the global export market. The root causes are structural and systemic: trust deficit in verifying international trade partners, information asymmetry where small suppliers have no access to real-time global market pricing or demand signals, regulatory complexity in HS Code classification and customs documentation, and language/communication barriers when negotiating with buyers from Germany, UAE, Japan, or Korea. Existing solutions like Alibaba, TradeIndo, and Tokopedia B2B address only listing and discovery — none provide integrated AI-powered intelligence, verification, and communication tooling in a single platform.',
    solution: 'Grawizah is an AI-native Trade Intelligence Platform that serves as a strategic command center for international trade — not just a marketplace. It features a neural AI matchmaking engine powered by Groq Llama 3.3 that analyzes production capacity, ISO certifications, trade history, and market demand signals to produce ranked buyer-supplier matches with human-readable rationale. An interactive Trade Network Map visualizes global supply chain relationships. The Neural HS Code Classifier automates customs classification with confidence scoring. A Buyer/Supplier Radar provides live-stream trade demand monitoring. Competitor Price Benchmarking delivers real-time pricing intelligence from multiple global sources. A Multilingual Trade Translator supports 14 languages for trade-specific terminology. The platform serves two distinct roles: Supplier Portal for Indonesian exporters and Buyer Portal for international procurement teams.',
    howToUse: 'Register as a Supplier (exporter) or Buyer (importer) at the platform URL. Suppliers create product listings with detailed specifications, certifications, and pricing. The AI Smart Matchmaker automatically suggests potential buyers or suppliers. Use the Trade Network Map to visualize supply chain relationships and identify market opportunities. The Neural HS Code Classifier can classify any product description into the correct international HS code. Track inquiries through the RFQ management pipeline with status tracking and response time analytics. Use the AI Listing Optimizer to improve product listing visibility. The multilingual translator helps communicate with international partners in 14 languages.',
    impact: 'Grawizah was developed for the TechSprint Innovation Cup 2026 organized by Codelab under the theme "Smart Digital Solution for Real World Problems" and won the Web Developer category. The platform addresses the critical gap where fewer than 4% of Indonesian MSMEs can export by providing Fortune 500-level trade intelligence tools at zero marginal cost. The AI Smart Matchmaker powered by Groq Llama 3.3 reduces due diligence time from weeks to seconds. Real-time competitor benchmarking eliminates under-pricing and over-pricing risks. The platform was built by Team "Successful Failures" from President University with 3 members across Product Management, Frontend/UI-UX, and Full-Stack Engineering.',
    keyFeatures: [
      { title: 'AI Smart Matchmaker', description: 'Neural matching engine powered by Groq Llama 3.3 that analyzes production capacity, ISO certifications, trade history, and market demand signals to produce ranked buyer-supplier matches with human-readable rationale for every recommendation.' },
      { title: 'Interactive Trade Network Map', description: 'Real-time, interactive node graph visualizing global supply chain relationships, route dependencies, and market concentrations. Suppliers can identify at-risk routes and alternative market opportunities at a glance.' },
      { title: 'Neural HS Code Classifier', description: 'AI-powered classification of any product description into the correct international Harmonized System (HS) Code with confidence scoring, ensuring customs compliance from the start of the export process.' },
      { title: 'Buyer/Supplier Radar', description: 'Live-stream radar feed monitoring global trade demand signals, helping suppliers spot high-intent buyers and helping buyers discover emerging suppliers before competitors do.' },
      { title: 'Competitor Price Benchmarking', description: 'Real-time price intelligence pulled from multiple global sources, displayed with regional breakdowns and visual bar charts, enabling both buyers and suppliers to negotiate from a position of knowledge.' },
      { title: 'Multilingual Trade Translator', description: 'Embedded translation engine specialized for trade and procurement terminology, supporting 14 languages including Indonesian, Chinese, Arabic, Japanese, and Korean for seamless cross-border communication.' },
      { title: 'AI Listing Optimizer', description: 'Automated scoring and improvement recommendations for supplier product listings to maximize visibility and conversion on the platform, with actionable suggestions for optimization.' },
      { title: 'Inquiry & RFQ Management', description: 'Full-featured inquiry pipeline with status tracking (Open, Responded, Closed), conversion tracking, response time analytics, and buyer rating system — all role-aware and updated in real-time.' }
    ],
    architecture: 'Next.js 14 (App Router) frontend with TypeScript and Tailwind CSS communicates via REST API to Go (Golang) backend with high-concurrency request processing. JWT authentication middleware with bcrypt + RS256 provides stateless, role-aware security. Supabase (PostgreSQL) with Row Level Security provides real-time subscriptions and full-text search. Groq Llama 3.3 powers AI inference for matching, classification, and optimization. Rate limiting is handled in-process with per-role tier limits (Free/Premium).',
    detailedTechStack: [
      { category: 'Frontend', items: ['Next.js 14 (App Router)', 'TypeScript', 'Tailwind CSS', 'React'] },
      { category: 'Backend', items: ['Go (Golang)', 'lib/pq', 'REST API', 'JWT Auth'] },
      { category: 'AI Engine', items: ['Groq Llama 3.3', 'Neural Matching', 'HS Code Classification'] },
      { category: 'Database', items: ['Supabase (PostgreSQL)', 'Row Level Security', 'Real-time Subscriptions'] },
      { category: 'Infrastructure', items: ['Vercel', 'Railway/Fly.io', 'Docker'] }
    ]
  },
  'hargakita-id': {
    slug: 'hargakita-id',
    problemStatement: 'Fluctuations in staple goods prices remain a mystery for the general public in Indonesia. The information gap between wholesalers, market sellers, and household consumers frequently causes economic losses at the household level. Government price platforms are often rigid, filled with complex tables, and difficult for ordinary citizens to understand. There is no accessible, real-time, and transparent platform that allows anyone — without registration or login — to check and report prices of essential commodities like rice, chili, onions, eggs, and cooking oil across Indonesia\'s 34 provinces. Price manipulation, hoarding, and panic buying thrive in this information vacuum, harming both consumers and small businesses.',
    solution: 'HargaKita.id is a modern SaaS platform purpose-built for real-time price transparency of staple goods across Indonesia. It employs a crowdsourcing model where citizens freely report prices they find at local markets, protected by intelligent validation filters (Smart Threshold Logic) that automatically reject fake reports deviating more than 50% from verified market facts. Automated daily web scraping at dawn pulls fundamental data from government portals to ensure accuracy. The platform features interactive trend charts, regional price comparisons, and a completely login-free experience — anyone can share price links directly to WhatsApp groups. Built with React, TypeScript, and Appwrite database, deployed on Netlify for fast global access.',
    howToUse: 'Visit hargakita.netlify.app — no registration required. Browse real-time prices of essential commodities (rice, chili, onion, eggs, cooking oil) across hundreds of markets in 34 provinces. Use the interactive charts to view price trends over time. Citizens can contribute by reporting prices they see at their local markets through the crowdsourcing feature — reports are automatically validated by the Smart Threshold Logic system to filter out fake submissions. Share price information directly to WhatsApp groups via shareable links. Small business owners and culinary entrepreneurs can use the data to calculate Cost of Goods Sold (HPP) before staple prices rise unexpectedly.',
    impact: 'HargaKita.id creates a Circle of Economic Stability at the grassroots level. It prevents panic buying by providing transparent, real-time price information. It bridges the price gap between consumers and sellers by giving both parties access to the same reference prices, reducing the ability of hoarders to manipulate the market. The platform increases national economic literacy by making price trend analysis accessible to ordinary citizens through beautiful, intuitive charts. Automatic daily scraping from government portals ensures data reliability without manual entry. The zero-login model removes the biggest barrier to adoption — a citizen in a remote village can access the same price intelligence as someone in Jakarta with a single click.',
    keyFeatures: [
      { title: 'Real-Time Price Transparency', description: 'Track prices of essential commodities (rice, chili, onion, eggs, cooking oil, sugar, flour) across hundreds of markets in all 34 Indonesian provinces, updated in real-time through crowdsourcing and automated scraping.' },
      { title: 'Zero Login Required', description: 'Full platform access without registration or login. Anyone can view prices, share links, and report data instantly — removing the single biggest barrier to mass adoption among Indonesian citizens.' },
      { title: 'Smart Threshold Validation', description: 'Proprietary intelligent validation system that automatically rejects fake or spam price reports deviating more than 50% from verified market facts, ensuring data integrity and preventing manipulation.' },
      { title: 'Automated Government Data Scraping', description: 'Daily automated scraping at dawn pulls fundamental price data from official government portals, ensuring baseline accuracy is maintained alongside community-reported data.' },
      { title: 'Interactive Trend Charts', description: 'Beautiful, intuitive charts and graphs that visualize price trends over time, enabling citizens to understand market dynamics and make informed purchasing decisions.' },
      { title: 'Crowdsourced Community Reporting', description: 'Empowers citizens to report prices they observe at their local markets. Every report contributes to a collective database that benefits the entire community.' },
      { title: 'UMKM & Business Support', description: 'Helps small businesses and culinary entrepreneurs calculate Cost of Goods Sold (HPP) and adjust pricing strategies based on real-time raw material costs before unexpected price hikes.' },
      { title: 'WhatsApp Share Integration', description: 'One-click sharing of price information to WhatsApp groups, enabling rapid dissemination of verified price data through Indonesia\'s most popular communication platform.' }
    ],
    architecture: 'React + TypeScript frontend built with Vite and styled with Tailwind CSS. Appwrite provides the backend database for price reports, user submissions, and automated data aggregation. Netlify handles hosting with continuous deployment from GitHub. Chart.js powers interactive price trend visualizations. Automated scraping scripts run on scheduled GitHub Actions workflows to pull government price data daily at dawn. The Smart Threshold Logic validation layer runs client-side and server-side to filter fake reports.',
    detailedTechStack: [
      { category: 'Frontend', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'] },
      { category: 'Backend', items: ['Appwrite Database', 'GitHub Actions Scraper', 'REST API'] },
      { category: 'Visualization', items: ['Chart.js', 'Interactive Trend Charts', 'Regional Heatmaps'] },
      { category: 'Data', items: ['Crowdsourced Reports', 'Government Portal Scraping', 'Smart Threshold Logic'] },
      { category: 'Infrastructure', items: ['Netlify', 'GitHub Actions', 'CDN'] }
    ]
  }
};
