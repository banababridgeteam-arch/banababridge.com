import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://banababridge.com',
  integrations: [
    sitemap({
      // noindex 페이지는 sitemap에서 제외 (서치콘솔 모순 신호 방지)
      filter: (page) => !page.includes('/privacy/') && !page.includes('/404'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
