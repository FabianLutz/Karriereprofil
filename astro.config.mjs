import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://fabzin.github.io',
  base: '/Karriereprofil/',
  integrations: [tailwind()],
});
