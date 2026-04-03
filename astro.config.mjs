import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://wisnu-alfian-nur-ashar.vercel.app',
  output: 'hybrid',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: true,
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});
