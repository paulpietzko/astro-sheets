// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),

  integrations: [tailwind()]
});