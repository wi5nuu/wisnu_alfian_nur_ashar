import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.wisnualfiannurashar.my.id',
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  integrations: [sitemap()],
  adapter: vercel({
    webAnalytics: true,
    // Performance optimizations
    images: {
      domains: ['images.unsplash.com'],
    },
  }),
  vite: {
    plugins: [tailwindcss()],
    // Build optimizations
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro', 'astro:transitions'],
          },
        },
      },
    },
    // Resolve optimization
    resolve: {
      alias: {
        '~': '/src',
      },
    },
  }
});
