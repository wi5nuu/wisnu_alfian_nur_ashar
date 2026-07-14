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
    inlineStylesheets: 'auto',
    format: 'file',
    assets: 'assets'
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  },
  integrations: [sitemap(), compress({
    Image: false,
    JavaScript: true,
    CSS: true,
    HTML: true,
    SVG: false,
  })],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      reportCompressedSize: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('lucide-astro')) {
              return 'vendor-lucide';
            }
          },
        },
      },
    },
    resolve: {
      alias: {
        '~': '/src',
      },
    },
  }
});
