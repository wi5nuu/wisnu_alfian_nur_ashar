import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://www.wisnualfiannurashar.my.id',
  output: 'static',
  build: {
    format: 'file',
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  },
  security: {
    checkOrigin: true
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('@google/generative-ai')) {
              return 'ai';
            }
          }
        }
      }
    }
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          id: 'id'
        }
      }
    }), 
    compress({
      Image: false,
      JavaScript: true,
      CSS: false,
      HTML: true,
      SVG: false,
    })
  ],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
    imageService: true,
    isr: false,
  }),
});
