import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://banababridge.com',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ko',
        locales: { ko: 'ko-KR', en: 'en', zh: 'zh-Hans' },
      },
      // noindex 페이지는 sitemap에서 제외 (서치콘솔 모순 신호 방지)
      filter: (page) => !page.includes('/privacy/') && !page.includes('/404'),
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
});
