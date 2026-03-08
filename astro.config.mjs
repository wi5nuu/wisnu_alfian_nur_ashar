import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wisnualfiannurashar.my.id',
  output: 'static',
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: true
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});
