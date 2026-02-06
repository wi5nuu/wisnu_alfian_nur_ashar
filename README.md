<<<<<<< HEAD
# wisnu_alfian_nur_ashar
Personal professional profile and virtual assistant representing Wisnu Alfian Nur Ashar
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
