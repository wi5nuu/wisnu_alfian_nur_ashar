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
    inlineStylesheets: 'always',
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
      lastmod: new Date(),
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const path = new URL(item.url).pathname.replace(/^\/id/, '') || '/';
        if (path === '/') { item.priority = 1.0; item.changefreq = 'weekly'; }
        else if (/^\/projects\/.+/.test(path)) { item.priority = 0.7; item.changefreq = 'monthly'; }
        else if (['/projects/', '/about/', '/skills/', '/experience/', '/opensource/', '/contact/'].includes(path)) { item.priority = 0.8; item.changefreq = 'monthly'; }
        else { item.priority = 0.5; item.changefreq = 'yearly'; }
        return item;
      },
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
