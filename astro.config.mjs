// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://videotrim.app',
  redirects: {
    '/signup': 'https://app.videotrim.ai/signup',
    '/login': 'https://app.videotrim.ai/login',
  },
  server: {
    port: 3011,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
