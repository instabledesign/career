import { defineConfig } from 'astro/config';

// The build goes to `public/` (published by the GitHub Pages workflow); the site is served under /<project>/ unless a custom domain is used.
export default defineConfig({
  outDir: 'public',
  publicDir: 'static',
  base: process.env.BASE_PATH ?? '/',
  site: process.env.SITE_URL,
  build: { format: 'directory' },
});
