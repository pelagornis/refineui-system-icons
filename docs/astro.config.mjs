// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const reactIconsSrc = path.resolve(repoRoot, 'packages/react-icons/src');

// `dist/` of the workspace packages is gitignored, so the docs site resolves
// `@refineui/react-icons` straight to its TypeScript source. This mirrors what
// `web/vite.config.ts` does and keeps the site buildable on a fresh clone.
export default defineConfig({
  site: process.env.DOCS_SITE ?? 'https://pelagornis.github.io',
  base: process.env.DOCS_BASE ?? '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        {
          find: /^@refineui\/react-icons\/metadata\.json$/,
          replacement: path.join(reactIconsSrc, 'metadata.json'),
        },
        {
          find: /^@refineui\/react-icons$/,
          replacement: path.join(reactIconsSrc, 'index.tsx'),
        },
        // Published @refineui/web-icons lags the committed font files, and the
        // docs render glyphs from that font. Always use the repo fonts.
        {
          find: '@refineui/web-icons/dist/fonts',
          replacement: path.join(repoRoot, 'packages/web-icons/fonts'),
        },
      ],
    },
    server: {
      fs: {
        allow: [repoRoot],
      },
    },
  },
});
