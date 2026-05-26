// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://couples-food-system.com',
  integrations: [
    sitemap(),
    mdx()
  ],
  output: 'static'
});
