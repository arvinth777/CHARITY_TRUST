import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nanreseitrust.org',
  integrations: [
    tailwind(),
  ],
  output: 'static',
});
