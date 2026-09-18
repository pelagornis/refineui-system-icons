/**
 * Scans the real platform assets and writes `src/data/availability.json`.
 *
 * The icon metadata is the union of every platform, but the platforms do not
 * all ship the same set: Android has no 12 px drawables and is missing a few
 * icons outright, and the CDN only publishes the six documented sizes. Without
 * this map the docs would hand out snippets that reference assets that do not
 * exist, so the map is regenerated before every dev run and build.
 */
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const docsRoot = path.resolve(scriptDir, '..');
const repoRoot = path.resolve(docsRoot, '..');

const metadata = JSON.parse(
  readFileSync(path.join(repoRoot, 'packages/react-icons/src/metadata.json'), 'utf8')
);

const toSnake = (slug) => slug.replace(/-/g, '_');
const toFlat = (slug) => slug.replace(/-/g, '');
const toCamel = (slug) => {
  const [first, ...rest] = slug.split('-').filter(Boolean);
  return [first, ...rest.map((w) => w[0].toUpperCase() + w.slice(1))].join('');
};
const cap = (value) => value.charAt(0).toUpperCase() + value.slice(1);
const pascal = (slug) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join('');

/** Every (slug, style, size) the metadata claims a glyph for. */
const triples = [];
for (const [slug, icon] of Object.entries(metadata.icons)) {
  for (const [size, styles] of Object.entries(icon.unicodeMapping ?? {})) {
    for (const style of ['regular', 'filled']) {
      if (styles?.[style]?.unicode != null) {
        triples.push({ slug, style, size: Number(size) });
      }
    }
  }
}

function namedExports(pkg) {
  const names = new Set();
  for (const file of ['regular-icons.ts', 'filled-icons.ts']) {
    const source = readFileSync(path.join(repoRoot, 'packages', pkg, 'src', file), 'utf8');
    for (const match of source.matchAll(/export const ([A-Za-z0-9]+)/g)) names.add(match[1]);
  }
  return names;
}

function drawableNames() {
  return new Set(
    readdirSync(path.join(repoRoot, 'android/library/src/main/res/drawable')).map((file) =>
      file.replace(/\.xml$/, '')
    )
  );
}

function cdnFiles() {
  const base = path.join(repoRoot, 'packages/icon-cdn/icons');
  return new Map(
    readdirSync(base)
      .filter((entry) => /^\d+$/.test(entry))
      .map((entry) => [Number(entry), new Set(readdirSync(path.join(base, entry)))])
  );
}

const iosCases = new Set(
  [
    ...readFileSync(path.join(repoRoot, 'ios/Sources/RefineUIIcons.swift'), 'utf8').matchAll(
      /^\s*case ([A-Za-z0-9]+)/gm
    ),
  ].map((m) => m[1])
);

const flutterConsts = new Set(
  [
    ...readFileSync(path.join(repoRoot, 'flutter/lib/src/refineui_icons.dart'), 'utf8').matchAll(
      /static const IconData ([A-Za-z0-9_]+)/g
    ),
  ].map((m) => m[1])
);

const reactExports = namedExports('react-icons');
const reactNativeExports = namedExports('react-native-icons');
const webExports = namedExports('web-icons');
const drawables = drawableNames();
const cdn = cdnFiles();

/** Does the platform actually ship an asset for this triple? */
const resolvers = {
  react: ({ slug, style }) =>
    reactExports.has(style === 'filled' ? `${pascal(slug)}Filled` : pascal(slug)),
  'react-native': ({ slug, style }) =>
    reactNativeExports.has(style === 'filled' ? `${pascal(slug)}Filled` : pascal(slug)),
  web: ({ slug, style }) =>
    webExports.has(style === 'filled' ? `${pascal(slug)}Filled` : pascal(slug)),
  cdn: ({ slug, style, size }) => Boolean(cdn.get(size)?.has(`${toFlat(slug)}-${style}.svg`)),
  ios: ({ slug, style, size }) => iosCases.has(`${toCamel(slug)}${size}${cap(style)}`),
  android: ({ slug, style, size }) =>
    drawables.has(`ic_refineui_${toSnake(slug)}_${size}_${style}`),
  flutter: ({ slug, style, size }) => flutterConsts.has(`${toSnake(slug)}_${size}_${style}`),
};

const metadataSizes = [...new Set(triples.map((t) => t.size))].sort((a, b) => a - b);
const platforms = {};
let hasIrregularGap = false;

for (const [id, resolves] of Object.entries(resolvers)) {
  const missing = triples.filter((triple) => !resolves(triple));

  // A platform gap is only compressible if it is either "this size is absent
  // everywhere" or "this icon is absent at every size the platform does ship".
  const sizes = metadataSizes.filter((size) => {
    const atSize = triples.filter((t) => t.size === size);
    return atSize.some((t) => resolves(t));
  });

  const unsupportedSlugs = [
    ...new Set(
      missing.filter((triple) => sizes.includes(triple.size)).map((triple) => triple.slug)
    ),
  ].sort();

  // Verify the compressed form reproduces the scan exactly.
  const predicted = new Set(
    triples
      .filter((t) => !sizes.includes(t.size) || unsupportedSlugs.includes(t.slug))
      .map((t) => `${t.slug}|${t.style}|${t.size}`)
  );
  const actual = new Set(missing.map((t) => `${t.slug}|${t.style}|${t.size}`));
  if (predicted.size !== actual.size || [...actual].some((key) => !predicted.has(key))) {
    hasIrregularGap = true;
    console.error(
      `  ${id}: gap is not expressible as sizes + slug exclusions ` +
        `(scan ${actual.size}, compressed ${predicted.size})`
    );
  }

  platforms[id] = { sizes, unsupportedSlugs };
  const skipped = metadataSizes.filter((size) => !sizes.includes(size));
  console.log(
    `  ${id.padEnd(13)} sizes ${sizes.join(',')}` +
      (skipped.length ? ` · no ${skipped.join(',')}` : '') +
      (unsupportedSlugs.length ? ` · ${unsupportedSlugs.length} icon(s) unavailable` : '')
  );
}

if (hasIrregularGap) {
  console.error('\nAvailability could not be compressed losslessly. Aborting.');
  process.exit(1);
}

mkdirSync(path.join(docsRoot, 'src/data'), { recursive: true });
writeFileSync(
  path.join(docsRoot, 'src/data/availability.json'),
  JSON.stringify({ metadataSizes, platforms }, null, 2) + '\n'
);

console.log('\nWrote src/data/availability.json');
