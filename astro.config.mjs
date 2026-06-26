import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.wisnualfiannurashar.my.id',
  output: 'static',
  build: {
    inlineStylesheets: 'never',
    format: 'file'
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  },
  integrations: [sitemap(), compress()],
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
          manualChunks: undefined,
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
