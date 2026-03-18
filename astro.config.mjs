import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wisnu-alfian-nur-ashar.vercel.app',
  base: './',
  output: 'static',
  build: {
    format: 'file'
  },
  integrations: [sitemap()],
  // adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    base: './'
  }
});
