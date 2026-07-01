# Wisnu Alfian Nur Ashar — Professional Portfolio

[![Astro](https://img.shields.io/badge/Astro-6.3-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![Google Gemini](https://img.shields.io/badge/AI-Google_Gemini-4285F4?logo=google&logoColor=white)](https://ai.google.dev)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-95%2B-FFD500?logo=lighthouse&logoColor=white)](https://developer.chrome.com/docs/lighthouse)

> **Live Demo:** [wisnuashar.com](https://wisnuashar.com)

A high-performance, production-grade professional portfolio built with the modern Astro island architecture. Showcases full-stack development and cyber security expertise with an intelligent AI chatbot assistant, bilingual localization, and responsive design.

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Dark/Light Mode** | System-aware theme switching with FOUC prevention, persisted via `localStorage` |
| **Bilingual (EN/ID)** | Full English & Indonesian localization with path-based routing (`/id`) |
| **AI Chatbot** | Hybrid AI assistant powered by Google Gemini Pro API answering 400+ questions |
| **Static Site Generation** | Blazing fast 95+ Lighthouse scores via Astro SSG + island architecture |
| **Responsive Design** | Mobile-first layout with custom "Sage Green & Steel Blue" aesthetic |
| **View Transitions** | SPA-like navigation with Astro 6's built-in view transition API |
| **SEO Optimized** | Open Graph, Twitter Cards, JSON-LD structured data, sitemap |
| **Donation System** | Buy Me a Donut feature with GoPay & DANA support, live donor wall |
| **CV Page** | Print-optimized resume page with ATS-friendly formatting |
| **Scroll Animations** | Intersection Observer-based reveal animations (up/down/left/right/zoom) |

---

## Tech Stack

### Frontend
- **Framework:** [Astro 6.3](https://astro.build) — Island Architecture, SSG, View Transitions
- **Styling:** [Tailwind CSS 4.1](https://tailwindcss.com) — Utility-first CSS via `@tailwindcss/vite`
- **Icons:** [Lucide](https://lucide.dev) via `lucide-astro`
- **Fonts:** Outfit (sans-serif), Cormorant Garamond (serif) via `@fontsource`
- **Language:** TypeScript 5.9

### Backend & Integrations
- **AI Engine:** Google Gemini Pro API + Hugging Face (Qwen2.5-72B, Llama-3.2)
- **Form Handling:** Web3Forms (serverless form submission)
- **Analytics:** Vercel Web Analytics
- **Deployment:** Vercel via `@astrojs/vercel` adapter
- **SEO:** `@astrojs/sitemap`, Open Graph, Twitter Cards, Schema.org JSON-LD

### Tooling
- **Package Manager:** npm
- **Build Tools:** `astro-compress`, Vite, Tailwind CSS Vite plugin
- **Type Checking:** `@astrojs/check` + TypeScript 5.9

---

## Architecture

### System Architecture Overview

```
┌──────────────────────────────────────────────────────────┐
│                    User's Browser                          │
│  ┌──────────┐  ┌──────────┐  ┌────────────────────────┐ │
│  │   HTML   │  │   CSS    │  │  Client-Side Scripts   │ │
│  │ (SSG'd)  │  │(Tailwind)│  │  (View Transitions,    │ │
│  │          │  │          │  │   AI Chat, Donations)   │ │
│  └────┬─────┘  └────┬─────┘  └───────────┬────────────┘ │
│       │             │                     │              │
└───────┼─────────────┼─────────────────────┼──────────────┘
        │             │                     │
        ▼             ▼                     ▼
┌──────────────────────────────────────────────────────────┐
│                    Astro Build Pipeline                    │
│  ┌──────────┐  ┌──────────┐  ┌────────────────────────┐ │
│  │  Pages   │  │Components│  │     Layouts + Data     │ │
│  │ (SSG)    │  │(Islands) │  │     (profile.ts)       │ │
│  └────┬─────┘  └────┬─────┘  └───────────┬────────────┘ │
│       │             │                     │              │
└───────┼─────────────┼─────────────────────┼──────────────┘
        │             │                     │
        ▼             ▼                     ▼
┌──────────────────────────────────────────────────────────┐
│                     External Services                     │
│  ┌──────────┐  ┌──────────┐  ┌────────────────────────┐ │
│  │  Google  │  │ Web3Forms │  │   Hugging Face API    │ │
│  │  Gemini  │  │ (Contact) │  │   (Fallback Models)   │ │
│  └──────────┘  └──────────┘  └────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

### Data Flow

```
Browser Request        Astro SSG Build           Deployed Static Files
     │                      │                          │
     │  GET /               │                          │
     │─────────────────────►│                          │
     │                      │  Read profile.ts         │
     │                      │  Render .astro files     │
     │                      │  Inject <script> islands │
     │                      │                          │
     │  HTML + CSS + JS     │                          │
     │◄─────────────────────│                          │
     │                      │                          │
     │  Client-side:        │                          │
     │  - View Transitions  │                          │
     │  - Theme Toggle      │                          │
     │  - AI Chat (API)     │                          │
     │  - Donations (local) │                          │
```

---

## Workflow

### Git Workflow

```mermaid
gitGraph
   commit id: "init"
   commit id: "feat: hero section"
   branch develop
   commit id: "feat: about section"
   commit id: "feat: projects grid"
   branch feature/ai-chat
   commit id: "feat: gemini integration"
   commit id: "fix: error handling"
   checkout develop
   merge feature/ai-chat id: "merge AI chat"
   branch feature/bilingual
   commit id: "feat: id routing"
   commit id: "feat: profile_id.ts"
   checkout develop
   merge feature/bilingual id: "merge i18n"
   checkout main
   merge develop id: "release v1.0"
   commit id: "deploy: vercel"
```

### Development Workflow

```mermaid
flowchart TD
    A[Start Dev Server] --> B[Edit .astro Files]
    B --> C{Hot Reload}
    C -->|Success| D[Preview in Browser]
    C -->|Error| E[Check Console]
    E --> B
    D --> F{Changes Complete?}
    F -->|No| B
    F -->|Yes| G[Type Check: npm run check]
    G --> H{Build Test: npm run build}
    H -->|Success| I[Git Commit & Push]
    H -->|Error| J[Fix Build Errors]
    J --> B
    I --> K[Auto Deploy to Vercel]
    K --> L[Verify Live Site]
```

### CI/CD Pipeline

```mermaid
flowchart LR
    A[Push to GitHub] --> B[Vercel Webhook]
    B --> C{Vercel Build}
    C --> D[Install Dependencies]
    D --> E[Lint & Type Check]
    E --> F[Astro Build]
    F --> G[Deploy to Production]
    G --> H[Vercel Analytics]
    H --> I[Monitor Performance]
```

---

## Class Diagram

```mermaid
classDiagram
    class Layout {
        +title: string
        +description: string
        +children: slot
        +renderSEO()
        +renderThemeScript()
        +renderHeader()
        +renderFooter()
    }

    class Header {
        -navLinks: NavLink[]
        +theme: 'light' | 'dark'
        +lang: 'en' | 'id'
        +setupTheme()
        +setupLang()
        +renderDesktop()
        +renderMobile()
    }

    class Footer {
        -socials: SocialLink[]
        -navLinks: NavLink[]
        +render()
    }

    class Hero {
        +profile: Profile
        +renderTypewriter()
    }

    class About {
        +profile: Profile
        +renderStats()
    }

    class Experience {
        -experiences: Experience[]
        +renderTimeline()
    }

    class Projects {
        -projects: Project[]
        +renderGrid()
        +openModal(id)
    }

    class Skills {
        -skillCategories: SkillCategory[]
        +renderCards()
    }

    class EducationCertifications {
        -education: Education[]
        -certifications: Certification[]
        +renderTabs()
    }

    class Contact {
        +formState: FormState
        +handleSubmit()
        +validateForm()
    }

    class Donation {
        -qty: number
        -selectedMethod: string
        -donors: Donor[]
        +updateDisplay()
        +renderDonors()
        +handlePay()
        +handleConfirm()
    }

    class AIChatBot {
        -messages: Message[]
        -isOpen: boolean
        +sendMessage()
        +callGeminiAPI()
        +callHuggingFace()
    }

    class Profile {
        +personalInfo: PersonalInfo
        +experience: Experience[]
        +projects: Project[]
        +skills: SkillCategory[]
        +education: Education[]
        +certifications: Certification[]
        +socials: SocialLink[]
    }

    Layout "1" *-- "1" Header : contains
    Layout "1" *-- "1" Footer : contains
    Layout "1" *-- "1" AIChatBot : contains
    Layout "1" *-- "1" ScrollToTop : contains
    Layout "1" *-- "*" Section : renders via slot
    Section <|-- Hero
    Section <|-- About
    Section <|-- Experience
    Section <|-- Projects
    Section <|-- Skills
    Section <|-- EducationCertifications
    Section <|-- Contact
    Section <|-- Donation
    Hero --> Profile : reads
    About --> Profile : reads
    Experience --> Profile : reads
    Projects --> Profile : reads
    Skills --> Profile : reads
    EducationCertifications --> Profile : reads
    Contact ..> Web3Forms : submits to
    AIChatBot ..> GoogleGeminiAPI : calls
    AIChatBot ..> HuggingFaceAPI : fallback
```

---

## Sequence Diagrams

### Page Load Sequence

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant AstroSSG as Astro SSG
    participant Cache as CDN Cache
    participant Vercel as Vercel Edge

    User->>Browser: Navigate to wisnuashar.com
    Browser->>Cache: Request HTML (SSG)
    Cache->>AstroSSG: Serve pre-built HTML
    AstroSSG-->>Browser: HTML + inlined CSS + JS
    Browser->>Browser: Parse DOM
    Browser->>Browser: Initialize Dark Mode
    Browser->>Browser: Inject Fonts
    Browser->>Browser: Setup IntersectionObserver
    Browser->>Browser: Register View Transitions
    Note over Browser: Page Fully Interactive (First Paint)
    User->>Browser: Scroll Down
    Browser->>Browser: Trigger Reveal Animations
    User->>Browser: Navigate to /about
    Browser->>Browser: Astro View Transition
    Browser->>Cache: Fetch /about (pre-fetched)
    Cache-->>Browser: HTML Fragment
    Browser->>Browser: Morph DOM
    Note over Browser: SPA-like Navigation
```

### AI Chatbot Sequence

```mermaid
sequenceDiagram
    actor User
    participant UI as Chat UI
    participant Gemini as Google Gemini API
    participant HF as Hugging Face API

    User->>UI: Click AI Button
    UI->>UI: Open Chat Modal
    User->>UI: Type Question
    User->>UI: Click Send
    UI->>UI: Add User Message to DOM
    UI->>UI: Show Loading Indicator
    UI->>Gemini: POST /v1/models/gemini-pro:generateContent
    alt Gemini Success
        Gemini-->>UI: Response Content
        UI->>UI: Markdown Render Response
    else Gemini Error
        UI->>HF: Fallback: POST /models/Qwen2.5-72B
        HF-->>UI: Response Content
    else Both Fail
        UI->>UI: Show Fallback Message
    end
    UI->>UI: Remove Loading Indicator
```

### Donation Flow Sequence

```mermaid
sequenceDiagram
    actor User
    participant UI as Donation UI
    participant LS as localStorage

    User->>UI: Scroll to Donation Section
    User->>UI: Adjust Quantity (1-99)
    UI->>UI: Update Total Price
    User->>UI: Select Payment Method (GoPay/DANA)
    UI->>UI: Show Confirmation Form
    User->>UI: Enter Name & Optional Message
    User->>UI: Click "Confirm" Button
    UI->>UI: Validate Name Input
    UI->>LS: Save Donor Data
    LS-->>UI: Confirm Save
    UI->>UI: Show Thank You Message
    UI->>UI: Refresh Donor List
    UI->>UI: Scroll to Thank You Section
    User->>UI: View Updated Donor Wall
```

### Contact Form Sequence

```mermaid
sequenceDiagram
    actor User
    participant UI as Contact Form
    participant Web3Forms as Web3Forms API

    User->>UI: Fill Form Fields
    User->>UI: Click Submit
    UI->>UI: Client-side Validation
    alt Validation Fails
        UI->>UI: Highlight Invalid Fields
    else Validation Passes
        UI->>UI: Disable Button, Show Loading
        UI->>Web3Forms: POST Form Data
        alt Success
            Web3Forms-->>UI: 200 OK
            UI->>UI: Show Success Toast
            UI->>UI: Reset Form
        else Error
            Web3Forms-->>UI: Error Response
            UI->>UI: Show Error Message
        end
    end
```

---

## Project Structure

```
wisnu_alfian_nur_ashar/
├── src/
│   ├── api/chat/route/route.ts     # Legacy AI API route
│   ├── components/
│   │   ├── sections/               # Page section components
│   │   │   ├── Hero.astro          # Landing hero with typewriter
│   │   │   ├── About.astro         # About me with stats
│   │   │   ├── Experience.astro    # Work timeline
│   │   │   ├── Projects.astro      # Project showcase grid
│   │   │   ├── Skills.astro        # Skill cards
│   │   │   ├── EducationCertifications.astro
│   │   │   ├── Contact.astro       # Contact form (Web3Forms)
│   │   │   ├── Donation.astro      # Buy Me a Donut section
│   │   │   ├── Achievements.astro  # Awards & achievements
│   │   │   └── OpenSource.astro    # Open source contributions
│   │   ├── Header.astro            # Navigation (desktop + mobile bottom nav)
│   │   ├── Footer.astro            # Site footer with socials
│   │   ├── AIChatBot.astro         # AI chatbot floating widget
│   │   ├── ThemeToggle.astro       # Standalone theme toggle
│   │   ├── ScrollToTop.astro       # Scroll to top button
│   │   ├── ImageModal.astro        # Image lightbox modal
│   │   └── ProjectDetailModal.astro# Project detail popup
│   ├── data/
│   │   ├── profile.ts              # English profile data
│   │   └── profile_id.ts           # Indonesian profile data
│   ├── layouts/
│   │   └── Layout.astro            # Master layout (SEO, theme, fonts)
│   ├── pages/
│   │   ├── index.astro             # Homepage (EN)
│   │   ├── about.astro             # About page (EN)
│   │   ├── projects.astro          # Projects page (EN)
│   │   ├── skills.astro            # Skills page (EN)
│   │   ├── experience.astro        # Experience page (EN)
│   │   ├── opensource.astro        # Open source page (EN)
│   │   ├── contact.astro           # Contact page (EN)
│   │   ├── cv.astro                # Print-optimized CV page
│   │   ├── api/chat.ts             # AI chat API endpoint
│   │   └── id/                     # Indonesian routes
│   │       ├── index.astro
│   │       ├── about.astro
│   │       ├── projects.astro
│   │       ├── skills.astro
│   │       ├── experience.astro
│   │       ├── opensource.astro
│   │       └── contact.astro
│   ├── styles/
│   │   └── global.css              # Global styles, theme variables, animations
│   └── utils/
│       ├── AIService.ts            # AI service abstraction layer
│       ├── RemoteAI.ts             # Remote AI provider
│       └── LocalAI.ts              # Local AI fallback
├── public/                         # Static assets
│   ├── certifications/             # Certificate images
│   ├── projects/                   # Project screenshots
│   ├── logos/                      # Client/tech logos
│   ├── favicon.ico
│   ├── og-image.png                # Open Graph image
│   ├── CV-Wisnu-Alfian-Nur-Ashar.pdf
│   └── robots.txt
├── astro.config.mjs                # Astro configuration
├── tailwind.config.mjs.bak         # Legacy Tailwind config backup
├── tsconfig.json                   # TypeScript config
├── vercel.json                     # Vercel deployment config
├── package.json
└── .env                            # Environment variables
```

---

## Component Hierarchy

```
Layout (Master)
├── <head> SEO, Fonts, Theme Script
├── <body>
│   ├── Header
│   │   ├── Desktop Nav (hidden < md)
│   │   ├── Mobile Top Bar (hidden >= md)
│   │   └── Mobile Bottom Nav (hidden >= md)
│   ├── <slot> (Page Content)
│   │   ├── Hero
│   │   ├── About
│   │   ├── Experience
│   │   ├── Projects
│   │   ├── Skills
│   │   ├── EducationCertifications
│   │   ├── Contact
│   │   └── Donation
│   ├── Footer
│   ├── AIChatBot (floating)
│   └── ScrollToTop (floating)
```

---

## Getting Started

### Prerequisites

- **Node.js** v18.0 or higher
- **npm** or **pnpm**

### Installation

```bash
git clone https://github.com/wi5nuu/wisnu_alfian_nur_ashar.git
cd wisnu_alfian_nur_ashar
npm install
```

### Development

```bash
npm run dev
```

The development server starts at `http://localhost:4321`. Hot reload is enabled for all `.astro`, `.ts`, and `.css` files.

### Build

```bash
npm run build
```

Generates static output in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npx astro check
```

---

## API Reference

### `POST /api/chat`

Processes chatbot messages and returns AI-generated responses.

**Request Body:**
```json
{
  "message": "What technologies do you use?",
  "history": [
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ]
}
```

**Response:**
```json
{
  "reply": "I specialize in TypeScript, React, Astro, and Go...",
  "sources": ["gemini"]
}
```

**Flow:**
1. Primary: Google Gemini Pro API
2. Fallback 1: Hugging Face Qwen2.5-72B
3. Fallback 2: Hugging Face Llama-3.2
4. Ultimate fallback: Static response from LocalAI

---

## Localization (i18n)

The site supports English and Indonesian via path-based routing:

| Route | Language |
|-------|----------|
| `/` | English |
| `/id` | Indonesian |
| `/about` | English About |
| `/id/about` | Indonesian Tentang |
| `/projects` | English Projects |
| `/id/projects` | Indonesian Proyek |
| ... | ... |

### Architecture

- **Data Layer:** `src/data/profile.ts` (EN) and `src/data/profile_id.ts` (ID)
- **Routing:** Astro file-based routing with `/id/` directory
- **Components:** All components check `Astro.url.pathname.startsWith('/id')` or `window.location.pathname`
- **Language Toggle:** Detects current path and swaps between `/path` and `/id/path`

---

## AI Integration

The AI Chatbot uses a multi-provider fallback strategy:

```
User Message
    │
    ▼
Google Gemini Pro API (Primary)
    │
    ├── Success → Return Response
    │
    └── Error
         │
         ▼
Hugging Face Qwen2.5-72B (Fallback 1)
         │
         ├── Success → Return Response
         │
         └── Error
              │
              ▼
Hugging Face Llama-3.2 (Fallback 2)
              │
              ├── Success → Return Response
              │
              └── Error
                   │
                   ▼
Local Static Responses (Last Resort)
```

The chatbot is trained (via prompt engineering) to answer **400+ specific questions** about:
- Professional experience and work history
- Technical skill proficiency levels
- Project details and architecture decisions
- Education and certifications
- Open source contributions

---

## Performance

| Metric | Score |
|--------|-------|
| **Lighthouse Performance** | 95+ |
| **Lighthouse Accessibility** | 95+ |
| **Lighthouse Best Practices** | 95+ |
| **Lighthouse SEO** | 100 |
| **First Contentful Paint** | < 1.0s |
| **Time to Interactive** | < 1.5s |
| **Total Page Size** | < 200KB (gzipped) |

### Optimization Techniques

- **Astro SSG** — Pre-renders all pages to static HTML at build time
- **Island Architecture** — Only ships JavaScript for interactive components
- **Image Optimization** — Manual compression + lazy loading
- **Font Subsetting** — Only loads required character sets via `@fontsource`
- **Tailwind CSS** — Zero-runtime CSS, purged unused styles
- **View Transitions** — Client-side navigation without full page reloads
- **Pre-fetching** — Astro automatically pre-fetches nearby pages

---

## Security

- **TLS 1.3** — Enforced via Vercel Edge Network
- **CSP Headers** — Content Security Policy configured via Vercel
- **Form Sanitization** — Web3Forms handles input sanitization server-side
- **XSS Prevention** — Astro auto-escapes template expressions
- **No Secrets in Client** — `.env` values never exposed to browser
- **Dependency Auditing** — Regular `npm audit` scans

---

## Donation System

The built-in donation feature allows supporters to buy virtual donuts:

- **1 Donut = Rp5.000**
- **Quantity:** 1–99 donuts per transaction
- **Payment Methods:** GoPay (081394882490) & DANA (081394882490)
- **Donor Wall:** All supporters are listed in real-time with name, quantity, message, and timestamp
- **Persistence:** Donor data is stored in `localStorage` (client-side only)

### How It Works

1. User adjusts donut quantity
2. Selects payment method (GoPay/DANA)
3. Transfers the total amount to the displayed number
4. Confirms by entering their name and optional message
5. User appears on the public donor wall

---

## Contact & Collaboration

Open to discussing new projects, creative ideas, or opportunities.

- **Email:** [wisnualfiann@gmail.com](mailto:wisnualfiann@gmail.com)
- **LinkedIn:** [wisnu-alfian-nur-ashar](https://www.linkedin.com/in/wisnu-alfian-nur-ashar)
- **Portfolio:** [wisnuashar.com](https://wisnuashar.com)
- **GitHub:** [@wi5nuu](https://github.com/wi5nuu)
- **Instagram:** [@wisnu.alfian_](https://instagram.com/wisnu.alfian_)

---

<p align="center">
  Developed with ❤️ by <b>Wisnu Alfian Nur Ashar</b><br>
  &copy; 2026 MIT License
</p>
