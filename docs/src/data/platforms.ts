import type { IconEntry, IconStyle } from './icons';
import { componentNameFor } from './icons';
import availability from './availability.json';

/**
 * Versions are the ones actually resolvable from each registry, which is not
 * always the repository version — Maven Central lags behind the npm packages.
 */
export const REGISTRY_VERSIONS = {
  npm: '0.3.42',
  pub: '0.3.42',
  swift: '0.3.42',
  maven: '0.3.42',
  cdn: '0.3.42',
} as const;

export type PlatformId =
  | 'react'
  | 'react-native'
  | 'web'
  | 'cdn'
  | 'ios'
  | 'android'
  | 'flutter';

export interface SetupStep {
  title: string;
  note?: string;
  code: string;
}

export interface IconUsageContext {
  icon: IconEntry;
  style: IconStyle;
  size: number;
}

export interface PlatformDef {
  id: PlatformId;
  /** Short label used in tab strips */
  label: string;
  /** Registry coordinate shown next to the tab content */
  coordinate: string;
  version: string;
  summary: string;
  steps: SetupStep[];
  iconUsage: (context: IconUsageContext) => string;
}

/** `local-language` → `local_language` */
function toSnake(slug: string): string {
  return slug.replace(/-/g, '_');
}

/** The CDN drops the separators entirely: `access-time` → `accesstime` */
function toFlat(slug: string): string {
  return slug.replace(/-/g, '');
}

/** `local-language` → `localLanguage` */
function toCamel(slug: string): string {
  const [first, ...rest] = slug.split('-').filter(Boolean);
  return [first, ...rest.map((word) => word.charAt(0).toUpperCase() + word.slice(1))].join('');
}

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export const PLATFORMS: PlatformDef[] = [
  {
    id: 'react',
    label: 'React',
    coordinate: '@refineui/react-icons',
    version: REGISTRY_VERSIONS.npm,
    summary:
      'Named React components backed by the icon font. One component covers every supported size.',
    steps: [
      { title: 'Install', code: 'npm install @refineui/react-icons' },
      {
        title: 'Register the font',
        note: 'Import once at your app entry point — the components only position a glyph.',
        code: `import '@refineui/react-icons/dist/fonts/refineui-system-icons.css';`,
      },
    ],
    iconUsage: ({ icon, style, size }) => {
      const name = componentNameFor(icon, style);
      return `import { ${name} } from '@refineui/react-icons';

<${name} size={${size}} />`;
    },
  },
  {
    id: 'react-native',
    label: 'React Native',
    coordinate: '@refineui/react-native-icons',
    version: REGISTRY_VERSIONS.npm,
    summary:
      'The same component API rendered through a native Text node. Icons are font glyphs, so the two font families have to be bundled with the app.',
    steps: [
      { title: 'Install', code: 'npm install @refineui/react-native-icons' },
      {
        title: 'Bundle the fonts',
        note: 'The package ships web font formats only. Copy the OTF files into your app assets and link them so the RefineUI-System-Icons-Regular and RefineUI-System-Icons-Filled families resolve.',
        code: `// react-native.config.js
module.exports = {
  assets: ['./assets/fonts'],
};`,
      },
    ],
    iconUsage: ({ icon, style, size }) => {
      const name = componentNameFor(icon, style);
      return `import { ${name} } from '@refineui/react-native-icons';

<${name} size={${size}} />`;
    },
  },
  {
    id: 'web',
    label: 'Web',
    coordinate: '@refineui/web-icons',
    version: REGISTRY_VERSIONS.npm,
    summary:
      'Framework-free helpers that return an HTML string, for vanilla projects or any templating layer.',
    steps: [
      { title: 'Install', code: 'npm install @refineui/web-icons' },
      {
        title: 'Register the font',
        code: `import '@refineui/web-icons/dist/fonts/refineui-system-icons.css';`,
      },
    ],
    iconUsage: ({ icon, style, size }) => {
      const name = componentNameFor(icon, style);
      return `import { ${name} } from '@refineui/web-icons';

element.innerHTML = ${name}(${size});`;
    },
  },
  {
    id: 'cdn',
    label: 'CDN',
    coordinate: '@refineui/icon-cdn',
    version: REGISTRY_VERSIONS.cdn,
    summary: 'Plain SVG files over jsDelivr. No install, no font — just a URL per icon and size.',
    steps: [
      {
        title: 'URL shape',
        note: 'The file name drops the separators from the icon slug, so access-time becomes accesstime.',
        code: `https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@${REGISTRY_VERSIONS.cdn}/icons/{size}/{icon}-{style}.svg`,
      },
    ],
    iconUsage: ({ icon, style, size }) =>
      `<img
  src="https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@${REGISTRY_VERSIONS.cdn}/icons/${size}/${toFlat(icon.slug)}-${style}.svg"
  alt="${icon.label}"
  width="${size}"
  height="${size}"
/>`,
  },
  {
    id: 'ios',
    label: 'iOS',
    coordinate: 'RefineUIIcons (SwiftPM)',
    version: REGISTRY_VERSIONS.swift,
    summary:
      'A Swift package of SVG assets — no font registration. Requires iOS 13 or macOS 10.15.',
    steps: [
      {
        title: 'Add the package',
        code: `.package(
    url: "https://github.com/pelagornis/refineui-system-icons.git",
    from: "${REGISTRY_VERSIONS.swift}"
)`,
      },
      {
        title: 'Depend on the product',
        code: `.target(
    name: "YourApp",
    dependencies: ["RefineUIIcons"]
)`,
      },
    ],
    iconUsage: ({ icon, style, size }) =>
      `import RefineUIIcons

Image(refineUIIcon: .${toCamel(icon.slug)}${size}${capitalize(style)})
    .resizable()
    .frame(width: ${size}, height: ${size})`,
  },
  {
    id: 'android',
    label: 'Android',
    coordinate: 'com.pelagornis:refineui-system-icons',
    version: REGISTRY_VERSIONS.maven,
    summary:
      'Vector drawables published to Maven Central. Minimum SDK 24. The Maven release trails the npm packages.',
    steps: [
      {
        title: 'Add the dependency',
        code: `repositories {
    mavenCentral()
}

dependencies {
    implementation("com.pelagornis:refineui-system-icons:${REGISTRY_VERSIONS.maven}")
}`,
      },
    ],
    iconUsage: ({ icon, style, size }) =>
      `<ImageView
    android:layout_width="${size}dp"
    android:layout_height="${size}dp"
    android:src="@drawable/ic_refineui_${toSnake(icon.slug)}_${size}_${style}"
    android:contentDescription="${icon.label}" />`,
  },
  {
    id: 'flutter',
    label: 'Flutter',
    coordinate: 'refineui_system_icons',
    version: REGISTRY_VERSIONS.pub,
    summary: 'IconData constants. The package declares its own fonts, so there is no app-side setup.',
    steps: [
      {
        title: 'Add the dependency',
        code: `dependencies:
  refineui_system_icons: ^${REGISTRY_VERSIONS.pub}`,
      },
      { title: 'Install', code: 'flutter pub get' },
    ],
    iconUsage: ({ icon, style, size }) =>
      `import 'package:refineui_system_icons/refineui_system_icons.dart';

Icon(RefineUIIcons.${toSnake(icon.slug)}_${size}_${style}, size: ${size})`,
  },
];

export const PLATFORMS_BY_ID = new Map(PLATFORMS.map((platform) => [platform.id, platform]));

/**
 * Which assets each platform actually ships, generated by
 * `scripts/generate-availability.mjs`. The icon metadata is the union of every
 * platform, so it over-reports for Android and the CDN.
 */
const AVAILABILITY = availability.platforms as Record<
  PlatformId,
  { sizes: number[]; unsupportedSlugs: string[] }
>;

/** Sizes this platform ships for this icon and style, narrowed by the metadata. */
export function platformSizes(
  platformId: PlatformId,
  icon: IconEntry,
  style: IconStyle
): number[] {
  const platform = AVAILABILITY[platformId];
  if (!platform || platform.unsupportedSlugs.includes(icon.slug)) return [];
  return icon.sizesByStyle[style].filter((size) => platform.sizes.includes(size));
}

/**
 * The size to write into a snippet: the one the toolbar is showing when the
 * platform has it, otherwise the closest one it does have.
 */
export function resolvePlatformSize(
  platformId: PlatformId,
  icon: IconEntry,
  style: IconStyle,
  preferred: number
): number | null {
  const sizes = platformSizes(platformId, icon, style);
  if (sizes.length === 0) return null;
  if (sizes.includes(preferred)) return preferred;
  return sizes.reduce((best, size) =>
    Math.abs(size - preferred) < Math.abs(best - preferred) ? size : best
  );
}
