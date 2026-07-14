import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import compress from 'astro-compress';

export default defineConfig({
  site: 'https://www.wisnualfiannurashar.my.id',
  output: 'static',
  build: {
    format: 'file',
    assets: 'assets'
  },
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport'
  },
  integrations: [sitemap(), compress({
    Image: false,
    JavaScript: true,
    CSS: false,
    HTML: true,
    SVG: false,
  })],
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imageService: true,
  }),
});
