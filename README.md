# Wisnu Alfian Nur Ashar — Portfolio

[![Astro](https://img.shields.io/badge/Astro-6.3-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Hugging Face](https://img.shields.io/badge/AI-HuggingFace-FFD21E?logo=huggingface&logoColor=black)](https://huggingface.co)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)

> **Live:** [wisnualfiannurashar.my.id](https://www.wisnualfiannurashar.my.id)

Personal portfolio website built with Astro. Features bilingual (EN/ID) pages, AI chatbot assistant, donation system with admin dashboard, and a print-ready CV page.

---

## Features

| Feature | |
|---------|-|
| **Bilingual** | Full English & Indonesian via path-based routing (`/id/`) |
| **AI Chatbot** | LocalAI fuzzy matching → HuggingFace Qwen2.5-72B → fallback |
| **Donation System** | GoPay/DANA with Vercel KV persistence + admin confirmation dashboard |
| **CV Page** | Print-optimized resume |
| **Dark Mode** | System-aware with localStorage persistence |
| **View Transitions** | SPA-like navigation via Astro's ClientRouter |
| **SEO** | Open Graph, Twitter Cards, JSON-LD, sitemap |
| **Scroll Animations** | Intersection Observer reveal effects |

---

## Tech Stack

- **Framework:** [Astro 6.3](https://astro.build) — SSG + island architecture + view transitions
- **CSS:** [Tailwind CSS 4.1](https://tailwindcss.com) via `@tailwindcss/vite`
- **Icons:** [Lucide](https://lucide.dev) via `lucide-astro`
- **Fonts:** Outfit (sans), Cormorant Garamond (serif) via `@fontsource`
- **AI Backend:** [HuggingFace Inference](https://huggingface.co) (Qwen2.5-72B-Instruct) via serverless API route
- **Analytics:** Vercel Web Analytics
- **KV Storage:** `@vercel/kv` (production) / in-memory fallback (dev)
- **Deployment:** Vercel via `@astrojs/vercel` (serverless)
- **Build:** `astro-compress`, Vite

---

## Project Structure

```
src/
├── components/
│   ├── sections/        # Page sections (Hero, About, Projects, etc.)
│   ├── Header.astro     # Desktop nav + mobile bottom nav
│   ├── Footer.astro     # Social links + navigation
│   ├── AIChatBot.astro  # Floating chatbot widget
│   ├── ThemeToggle.astro
│   ├── ScrollToTop.astro
│   ├── ImageModal.astro
│   └── ProjectDetailModal.astro
├── data/
│   ├── profile.ts       # English profile (skills, experience, projects, etc.)
│   └── profile_id.ts    # Indonesian profile
├── layouts/
│   └── Layout.astro     # Master layout (SEO, theme, fonts, view transitions)
├── lib/
│   └── donation-store.ts # Vercel KV + in-memory donation persistence
├── pages/
│   ├── index.astro      # Homepage (EN)
│   ├── about.astro, projects.astro, skills.astro, etc.
│   ├── cv.astro         # Print-optimized resume
│   ├── admin-dashboard.astro  # Donation confirmation (Auth: Bearer token)
│   ├── api/
│   │   ├── chat.ts           # POST — AI chat (HuggingFace)
│   │   ├── donations.ts      # GET — list, POST — create
│   │   └── donations/confirm.ts  # POST — confirm (admin only)
│   └── id/               # Indonesian routes (index, about, projects, etc.)
├── styles/
│   └── global.css       # Theme variables, animations
├── utils/
│   ├── AIService.ts     # Intent detection + fallback chain
│   ├── RemoteAI.ts      # HuggingFace API client
│   └── LocalAI.ts       # Static response matching
public/                   # Static assets (images, CV PDF, robots.txt)
```

---

## API Endpoints

### `POST /api/chat`
AI chatbot — uses HuggingFace inference (Qwen2.5-72B-Instruct). Requires `HF_TOKEN` env var.
```json
{ "query": "What projects have you worked on?", "lang": "en" }
// → { "choices": [{ "message": { "content": "..." } }] }
```

### `GET /api/donations`
- `?type=confirmed` — public, returns confirmed donations only
- `?type=all` — admin only, requires `Authorization: Bearer <ADMIN_TOKEN>` header

### `POST /api/donations`
Create a new donation:
```json
{ "name": "John", "qty": 2, "method": "gopay", "message": "Great work!" }
```

### `POST /api/donations/confirm`
Confirm a pending donation (admin). Requires `Authorization: Bearer <ADMIN_TOKEN>`.
```json
{ "id": "donation-id-here" }
```

---

## AI Chatbot Flow

```
User Message
    │
    ▼
LocalAI (fuzzy intent matching)
    │
    ├── Match found → Return static response (instant)
    │
    └── No match
         │
         ▼
    RemoteAI → POST /api/chat → HuggingFace Qwen2.5-72B
         │
         ├── Success → Return AI response
         │
         └── Fail → Smart default fallback
```

The chatbot knows about Wisnu's skills, projects, experience, education, certifications, and contact info via profile data injected as system prompt.

---

## Donation System

- **1 Donut = Rp5.000**
- **Payment:** GoPay / DANA (081394882490)
- **Flow:** Select qty → choose payment → transfer → confirm name via WhatsApp → admin confirms → public donor wall
- **Storage:** Vercel KV (production) / in-memory (dev)
- **Admin:** `/admin-dashboard` — login with `ADMIN_TOKEN` via `Authorization: Bearer`

---

## Getting Started

```bash
git clone https://github.com/wi5nuu/wisnu_alfian_nur_ashar.git
cd wisnu_alfian_nur_ashar
cp .env.example .env   # Set HF_TOKEN, ADMIN_TOKEN
npm install
npm run dev            # http://localhost:4321
```

### Build

```bash
npm run build          # Outputs to dist/
```

### Required Env Vars

| Variable | Description |
|----------|-------------|
| `HF_TOKEN` | HuggingFace API token for AI chatbot |
| `ADMIN_TOKEN` | Bearer token for admin dashboard |

---

## Pages

| Route | Content |
|-------|---------|
| `/` | Home (all sections) |
| `/about` | About me |
| `/projects` | Project showcase |
| `/skills` | Technical skills |
| `/experience` | Work timeline |
| `/opensource` | Open source contributions |
| `/contact` | Contact form (Web3Forms) |
| `/cv` | Print-optimized resume |
| `/admin-dashboard` | Donation admin panel |
| `/id/*` | Indonesian versions of all pages |

---

## Contact

- **Email:** wisnualfian117@gmail.com
- **LinkedIn:** [wisnu-alfian-nur-ashar](https://linkedin.com/in/wisnu-alfian-nur-ashar)
- **GitHub:** [@wi5nuu](https://github.com/wi5nuu)
- **Site:** [wisnualfiannurashar.my.id](https://www.wisnualfiannurashar.my.id)
