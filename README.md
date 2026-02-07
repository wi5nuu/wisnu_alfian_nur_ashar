# Wisnu Alfian Nur Ashar - Portfolio Website

A modern, responsive, and SEO-optimized portfolio website featuring an intelligent AI assistant, built with **Astro 5** and **Tailwind CSS v4**.

![Portfolio Preview](./public/wisnu_alfian_nur_ashar.jpeg)

## 🚀 Features

- **Modern Tech Stack**: Built on the latest Astro 5 framework for blazing fast performance.
- **Sage Green Aesthetic**: A custom-designed minimal interface with a professional color palette.
- **Intelligent AI Assistant**: ybrid AI Assistant chatbot that answers 400+ questions about Wisnu's background, skills, and projects in both Indonesian and English.
- **Hybrid Architecture**:
  - **Landing Page**: A rich, scrolling home page (`/`) showcasing all sections.
  - **Multi-Page**: Dedicated SEO-friendly pages for `/about`, `/projects`, `/experience`, `/skills`, `/contact`.
- **Interactive Elements**:
  - Hero Image Slider with smooth fade transitions.
  - Mobile-responsive Navigation Menu.
  - Scroll animations (Fade-in-up).
  - AI Chatbot for instant Q&A.
- **Core Sections**:
  - **Hero**: Introduction & Call to Action.
  - **About**: Professional summary and personal background.
  - **Experience**: Vertical timeline of career history and organizational activities.
  - **Projects**: Grid layout of featured works with live demos and GitHub links.
  - **Skills**: Categorized technical & soft skills with proficiency indicators.
  - **Education & Certifications**: Academic background and professional certifications.
  - **Contact**: Contact form and professional social links.

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) (v5) - Static site generator with component islands
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) - Utility-first CSS framework
- **Icons**: [Lucide Astro](https://lucide.dev/) - Beautiful icon library
- **Typography**:
  - Headings: *Cormorant Garamond*
  - Body: *Outfit*
- **Language**: TypeScript - Type-safe JavaScript
- **AI Assistant**: Custom ybrid AI Assistant implementation in TypeScript
- **Build Tools**: Vite (via Astro), PostCSS, Autoprefixer

## 📂 Project Structure

```text
/
├── public/                    # Static assets (images, icons, fonts)
│   ├── wisnu_alfian_nur_ashar.jpeg
│   ├── president_university.jpeg
│   └── project-images/
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── sections/          # Page sections (Hero, About, Projects, etc.)
│   │   ├── AIChatBot.astro    # Interactive AI assistant component
│   │   ├── Header.astro       # Navigation component
│   │   └── Footer.astro       # Footer component
│   ├── data/                  # Content data
│   │   └── profile.ts         # Centralized profile data (EDIT HERE)
│   ├── layouts/               # Main HTML layouts
│   │   └── Layout.astro       # Main layout with SEO meta tags
│   ├── pages/                 # Application routes
│   │   ├── index.astro        # Home page
│   │   ├── about.astro        # About page
│   │   ├── projects.astro     # Projects page
│   │   ├── experience.astro   # Experience page
│   │   ├── skills.astro       # Skills page
│   │   └── contact.astro      # Contact page
│   ├── styles/                # Global styles and Tailwind config
│   │   └── global.css         # Global CSS with theme variables
│   └── utils/                 # Utility functions
│       └── LocalAI.ts         # AI assistant logic (400+ questions)
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🎨 Customization

### 1. Content
All text content (Name, Role, Experience, Projects, Skills) is centralized in `src/data/profile.ts`.
**Edit this file to update your portfolio content without touching the code.**

### 2. Images
Place your images in the `public/` folder and reference them in `profile.ts` or components.
- Profile Photo: `/wisnu_alfian_nur_ashar.jpeg`
- University Logo: `/president_university.jpeg`
- Project Screenshots: `/project-images/`

### 3. AI Assistant
The AI assistant responses are defined in `src/utils/LocalAI.ts`. Add new question categories or modify responses there.

### 4. Styling
Colors and Fonts are defined as CSS variables in `src/styles/global.css` under the `@theme` block.
Customize Tailwind config in `tailwind.config.mjs` for additional utilities.

## 🚀 Deployment

This project is ready to deploy to any static hosting provider (Vercel, Netlify, GitHub Pages).

### Vercel (Recommended)
1. Push code to GitHub.
2. Import project in Vercel.
3. Vercel will detect Astro and deploy automatically.
4. Enable preview deployments for PRs.

### Netlify
1. Connect your GitHub repository.
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### GitHub Pages
1. Enable GitHub Pages in repository settings.
2. Set source to GitHub Actions.
3. Use the provided workflow or create a custom deployment action.

## 🤖 AI Assistant Features

The ybrid AI Assistant assistant can answer questions about:
- **Profile & Identity**: Background, introduction, personality
- **Education**: University, major, GPA, graduation timeline
- **Technical Skills**: React, Next.js, TypeScript, Node.js, Flutter, Laravel, etc.
- **Projects**: Ashar Grosir Parfum, LexCorpus CMS, FKMA Website
- **Career**: Goals, availability, ideal work environment
- **Personal**: Hobbies, food preferences, fun facts
- **Website**: Technology, features, hosting, performance

**Total Coverage**: 400+ questions in Indonesian and English with polite, professional responses.

## 📄 License

© 2026 Wisnu Alfian Nur Ashar. All rights reserved.

This project is for personal portfolio use. Contact for commercial licensing.
>>>>>>> 9fec30e (Initial commit: Personal Portfolio)
=======
# Wisnu Alfian Nur Ashar - Portfolio Website

A modern, responsive, and SEO-optimized portfolio website featuring an intelligent AI assistant, built with **Astro 5** and **Tailwind CSS v4**.

![Portfolio Preview](./public/wisnu_alfian_nur_ashar.jpeg)

## 🚀 Features

- **Modern Tech Stack**: Built on the latest Astro 5 framework for blazing fast performance.
- **Sage Green Aesthetic**: A custom-designed minimal interface with a professional color palette.
- **Intelligent AI Assistant**: ybrid AI Assistant chatbot that answers 400+ questions about Wisnu's background, skills, and projects in both Indonesian and English.
- **Hybrid Architecture**:
  - **Landing Page**: A rich, scrolling home page (`/`) showcasing all sections.
  - **Multi-Page**: Dedicated SEO-friendly pages for `/about`, `/projects`, `/experience`, `/skills`, `/contact`.
- **Interactive Elements**:
  - Hero Image Slider with smooth fade transitions.
  - Mobile-responsive Navigation Menu.
  - Scroll animations (Fade-in-up).
  - AI Chatbot for instant Q&A.
- **Core Sections**:
  - **Hero**: Introduction & Call to Action.
  - **About**: Professional summary and personal background.
  - **Experience**: Vertical timeline of career history and organizational activities.
  - **Projects**: Grid layout of featured works with live demos and GitHub links.
  - **Skills**: Categorized technical & soft skills with proficiency indicators.
  - **Education & Certifications**: Academic background and professional certifications.
  - **Contact**: Contact form and professional social links.

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) (v5) - Static site generator with component islands
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) - Utility-first CSS framework
- **Icons**: [Lucide Astro](https://lucide.dev/) - Beautiful icon library
- **Typography**:
  - Headings: *Cormorant Garamond*
  - Body: *Outfit*
- **Language**: TypeScript - Type-safe JavaScript
- **AI Assistant**: Custom ybrid AI Assistant implementation in TypeScript
- **Build Tools**: Vite (via Astro), PostCSS, Autoprefixer

## 📂 Project Structure

```text
/
├── public/                    # Static assets (images, icons, fonts)
│   ├── wisnu_alfian_nur_ashar.jpeg
│   ├── president_university.jpeg
│   └── project-images/
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── sections/          # Page sections (Hero, About, Projects, etc.)
│   │   ├── AIChatBot.astro    # Interactive AI assistant component
│   │   ├── Header.astro       # Navigation component
│   │   └── Footer.astro       # Footer component
│   ├── data/                  # Content data
│   │   └── profile.ts         # Centralized profile data (EDIT HERE)
│   ├── layouts/               # Main HTML layouts
│   │   └── Layout.astro       # Main layout with SEO meta tags
│   ├── pages/                 # Application routes
│   │   ├── index.astro        # Home page
│   │   ├── about.astro        # About page
│   │   ├── projects.astro     # Projects page
│   │   ├── experience.astro   # Experience page
│   │   ├── skills.astro       # Skills page
│   │   └── contact.astro      # Contact page
│   ├── styles/                # Global styles and Tailwind config
│   │   └── global.css         # Global CSS with theme variables
│   └── utils/                 # Utility functions
│       └── LocalAI.ts         # AI assistant logic (400+ questions)
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🎨 Customization

### 1. Content
All text content (Name, Role, Experience, Projects, Skills) is centralized in `src/data/profile.ts`.
**Edit this file to update your portfolio content without touching the code.**

### 2. Images
Place your images in the `public/` folder and reference them in `profile.ts` or components.
- Profile Photo: `/wisnu_alfian_nur_ashar.jpeg`
- University Logo: `/president_university.jpeg`
- Project Screenshots: `/project-images/`

### 3. AI Assistant
The AI assistant responses are defined in `src/utils/LocalAI.ts`. Add new question categories or modify responses there.

### 4. Styling
Colors and Fonts are defined as CSS variables in `src/styles/global.css` under the `@theme` block.
Customize Tailwind config in `tailwind.config.mjs` for additional utilities.

## 🚀 Deployment

This project is ready to deploy to any static hosting provider (Vercel, Netlify, GitHub Pages).

### Vercel (Recommended)
1. Push code to GitHub.
2. Import project in Vercel.
3. Vercel will detect Astro and deploy automatically.
4. Enable preview deployments for PRs.

### Netlify
1. Connect your GitHub repository.
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### GitHub Pages
1. Enable GitHub Pages in repository settings.
2. Set source to GitHub Actions.
3. Use the provided workflow or create a custom deployment action.

## 🤖 AI Assistant Features

The ybrid AI Assistant assistant can answer questions about:
- **Profile & Identity**: Background, introduction, personality
- **Education**: University, major, GPA, graduation timeline
- **Technical Skills**: React, Next.js, TypeScript, Node.js, Flutter, Laravel, etc.
- **Projects**: Ashar Grosir Parfum, LexCorpus CMS, FKMA Website
- **Career**: Goals, availability, ideal work environment
- **Personal**: Hobbies, food preferences, fun facts
- **Website**: Technology, features, hosting, performance

**Total Coverage**: 400+ questions in Indonesian and English with polite, professional responses.

## 📄 License

© 2026 Wisnu Alfian Nur Ashar. All rights reserved.

This project is for personal portfolio use. Contact for commercial licensing.
=======
# Wisnu Alfian Nur Ashar - Portfolio Website

A modern, responsive, and SEO-optimized portfolio website built with **Astro 5** and **Tailwind CSS v4**.

![Portfolio Preview](./public/wisnu_alfian_nur_ashar.jpeg)

## 🚀 Features

- **Modern Tech Stack**: Built on the latest Astro 5 framework for blazing fast performance.
- **Sage Green Aesthetic**: A custom-designed minimal interface with a professional color palette.
- **Hybrid Architecture**: 
  - **Landing Page**: A rich, scrolling home page (`/`) showcasing all sections.
  - **Multi-Page**: Dedicated SEO-friendly pages for `/about`, `/projects`, `/experience`, etc.
- **Interactive Elements**:
  - Hero Image Slider with smooth fade transitions.
  - Mobile-responsive Navigation Menu.
  - Scroll animations (Fade-in-up).
- **Core Sections**:
  - **Hero**: Introduction & Call to Action.
  - **About**: Professional summary.
  - **Experience**: Vertical timeline of career history.
  - **Projects**: Grid layout of featured works.
  - **Skills**: Categorized technical & soft skills.
  - **Education & Certifications**: Academic background.
  - **Contact**: Social links and email actions.

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) (v5)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4)
- **Icons**: [Lucide Astro](https://lucide.dev/)
- **Typography**: 
  - Headings: *Cormorant Garamond*
  - Body: *Outfit*
- **Language**: TypeScript

## 📂 Project Structure

```text
/
├── public/              # Static assets (images, fonts)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Buttons, Cards, etc.
│   │   ├── sections/    # Hero, About, Projects, etc.
│   │   ├── Header.astro # Navigation Bar
│   │   └── Footer.astro # Footer
│   ├── data/            # Content Data (profile.ts) - EDIT HERE
│   ├── layouts/         # Main HTML Layouts
│   ├── pages/           # Application Routes
│   │   ├── index.astro  # Home Page
│   │   ├── about.astro
│   │   └── ...
│   └── styles/          # Global CSS & Tailwind Config
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🎨 Customization

### 1. Content
All text content (Name, Role, Experience, Projects) is centralized in `src/data/profile.ts`. 
**Edit this file to update your portfolio content without touching the code.**

### 2. Images
Place your images in the `public/` folder and reference them in `profile.ts` or components.
- Profile Photo: `/wisnu_alfian_nur_ashar.jpeg`
- University Logo: `/president_university.jpeg` (Used in Education)

### 3. Styling
Colors and Fonts are defined as CSS variables in `src/styles/global.css` under the `@theme` block.

## 🚀 Deployment

This project is ready to deploy to any static hosting provider (Vercel, Netlify, GitHub Pages).

### Vercel (Recommended)
1. Push code to GitHub.
2. Import project in Vercel.
3. Vercel will detect Astro and deploy automatically.

---
© 2026 Wisnu Alfian Nur Ashar. All rights reserved.
>>>>>>> 9fec30e (Initial commit: Personal Portfolio)
