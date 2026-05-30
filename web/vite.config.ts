import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Connect } from 'vite';
import react from '@vitejs/plugin-react';
import { centerSvgContent } from './src/centerSvg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const iconsRoot = path.resolve(repoRoot, 'packages/icon-cdn/icons');
const assetsRoot = path.resolve(repoRoot, 'assets');

function isPlaceholderSvg(filePath: string): boolean {
  try {
    const head = fs.readFileSync(filePath, 'utf8').slice(0, 400);
    return head.includes('<text x=') && head.includes('font-family="Arial"');
  } catch {
    return false;
  }
}

function resolveFromAssets(iconName: string, size: string, style: string): string | null {
  if (!fs.existsSync(assetsRoot)) return null;

  const svgFile = `ic_refineui_${iconName}_${size}_${style}.svg`;
  for (const entry of fs.readdirSync(assetsRoot, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const candidate = path.join(assetsRoot, entry.name, 'svg', svgFile);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return null;
}

function resolveLocalIconPath(size: string, filename: string): string | null {
  const styleMatch = filename.match(/^(.+)-(regular|filled)\.svg$/);
  if (!styleMatch) return null;

  const [, rawName, style] = styleMatch;
  const iconName = rawName.replace(/_/g, '-');
  const dir = path.join(iconsRoot, size);
  const candidates = [
    filename,
    `${iconName.replace(/-/g, '')}-${style}.svg`,
    `${iconName}-${style}.svg`,
  ];

  for (const candidate of candidates) {
    const fullPath = path.join(dir, candidate);
    if (fs.existsSync(fullPath) && !isPlaceholderSvg(fullPath)) {
      return fullPath;
    }
  }

  return resolveFromAssets(iconName, size, style);
}

function localIconCdnMiddleware(
  req: Connect.IncomingMessage,
  res: Connect.ServerResponse,
  next: Connect.NextFunction
) {
  const url = req.url ?? '';
  const match = url.match(/^\/cdn\/icons\/(\d+)\/([^/?#]+)$/);
  if (!match) {
    next();
    return;
  }

  const [, size, filename] = match;
  const iconPath = resolveLocalIconPath(size, filename);
  if (!iconPath) {
    res.statusCode = 404;
    res.end('Icon not found');
    return;
  }

  res.setHeader('Content-Type', 'image/svg+xml');
  const svg = centerSvgContent(fs.readFileSync(iconPath, 'utf8'));
  res.end(svg);
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'local-icon-cdn',
      configureServer(server) {
        server.middlewares.use(localIconCdnMiddleware);
      },
      configurePreviewServer(server) {
        server.middlewares.use(localIconCdnMiddleware);
      },
    },
  ],
  resolve: {
    alias: {
      'react-native': path.resolve(__dirname, 'node_modules/react-native-web'),
      '@refineui/web-icons/utils': path.resolve(repoRoot, 'packages/web-icons/src/utils.ts'),
      '@refineui/react-icons/utils': path.resolve(repoRoot, 'packages/react-icons/src/utils.ts'),
      '@refineui/react-native-icons/utils': path.resolve(
        repoRoot,
        'packages/react-native-icons/src/utils.ts'
      ),
    },
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
});
