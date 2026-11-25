import { defineConfig } from 'astro/config';

const site = process.env.SITE_URL || 'https://agnovikoff.github.io';
const base = process.env.SITE_URL === 'https://syndata.io' ? '/' : '/syndata-site';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
});
