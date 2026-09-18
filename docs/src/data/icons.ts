import metadata from '@refineui/react-icons/metadata.json';

export type IconStyle = 'regular' | 'filled';

export interface IconEntry {
  /** Metadata / API key, e.g. `local-language` */
  slug: string;
  /** Human readable label, e.g. `Local language` */
  label: string;
  /** Named export of `@refineui/react-icons`, e.g. `LocalLanguage` */
  componentName: string;
  /** Named export for the filled variant, e.g. `LocalLanguageFilled` */
  filledComponentName: string;
  keyword: string;
  description: string;
  /** Sizes that actually have a glyph, per style */
  sizesByStyle: Record<IconStyle, number[]>;
  styles: IconStyle[];
  /** Pre-lowercased haystack used by the search box */
  haystack: string;
}

export const ICON_STYLES: IconStyle[] = ['regular', 'filled'];

export const SUPPORTED_SIZES: number[] = [...metadata.supportedSizes].sort((a, b) => a - b);

export const FONT_FAMILIES: Record<IconStyle, string> = {
  regular: metadata.fontFamilies.regular?.font_family ?? 'RefineUI-System-Icons-Regular',
  filled: metadata.fontFamilies.filled?.font_family ?? 'RefineUI-System-Icons-Filled',
};

function splitSlug(slug: string): string[] {
  return slug.split(/[-_\s]+/).filter(Boolean);
}

export function toComponentName(slug: string): string {
  return splitSlug(slug)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function toLabel(slug: string): string {
  const words = splitSlug(slug);
  if (words.length === 0) return slug;
  return [words[0].charAt(0).toUpperCase() + words[0].slice(1), ...words.slice(1)].join(' ');
}

function sizesForStyle(icon: (typeof metadata.icons)[string], style: IconStyle): number[] {
  const mapping = icon.unicodeMapping ?? {};
  return Object.keys(mapping)
    .filter((size) => mapping[size]?.[style]?.unicode != null)
    .map(Number)
    .sort((a, b) => a - b);
}

export const icons: IconEntry[] = Object.entries(metadata.icons)
  .map(([slug, icon]) => {
    const componentName = toComponentName(slug);
    const label = toLabel(slug);
    const sizesByStyle: Record<IconStyle, number[]> = {
      regular: sizesForStyle(icon, 'regular'),
      filled: sizesForStyle(icon, 'filled'),
    };

    return {
      slug,
      label,
      componentName,
      filledComponentName: `${componentName}Filled`,
      keyword: icon.keyword ?? '',
      description: icon.description ?? '',
      sizesByStyle,
      styles: ICON_STYLES.filter((style) => sizesByStyle[style].length > 0),
      haystack: [slug, label, componentName, icon.keyword, icon.description]
        .filter(Boolean)
        .join(' ')
        .toLowerCase(),
    } satisfies IconEntry;
  })
  .filter((icon) => icon.styles.length > 0)
  .sort((a, b) => a.label.localeCompare(b.label));

export const TOTAL_ICONS = icons.length;

export const TOTAL_COMPONENTS = icons.reduce((sum, icon) => sum + icon.styles.length, 0);

export function componentNameFor(icon: IconEntry, style: IconStyle): string {
  return style === 'filled' ? icon.filledComponentName : icon.componentName;
}

/** Nearest available size for an icon, so switching styles never blanks the preview. */
export function resolveSize(icon: IconEntry, style: IconStyle, preferred: number): number | null {
  const available = icon.sizesByStyle[style];
  if (available.length === 0) return null;
  if (available.includes(preferred)) return preferred;
  return available.reduce((best, size) =>
    Math.abs(size - preferred) < Math.abs(best - preferred) ? size : best
  );
}

export function searchIcons(query: string, style: IconStyle): IconEntry[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  return icons.filter((icon) => {
    if (!icon.styles.includes(style)) return false;
    return terms.every((term) => icon.haystack.includes(term));
  });
}
