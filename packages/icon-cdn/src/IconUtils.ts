import metadata from './metadata.json';

export interface IconData {
  name: string;
  slug: string;
  size: number[];
  style: string[];
  keyword: string;
  description: string;
  files: any[];
  unicodeMapping: any;
}

export interface Metadata {
  totalIcons: number;
  supportedSizes: number[];
  supportedStyles: string[];
  fontFamilies: any;
  icons: { [key: string]: IconData };
}

function nameToSlug(name: string): string {
  return String(name).toLowerCase().trim().replace(/\s+/g, '-');
}
function normalizeSlug(s: string): string {
  return nameToSlug(String(s).replace(/_/g, '-'));
}
function pascalToSlug(name: string): string {
  return String(name).replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}
function normalizeIconName(name: string): string {
  return String(name).trim().replace(/\s+/g, ' ');
}

class IconUtils {
  private metadata: Metadata;
  private fontFamilies: any;

  constructor() {
    this.metadata = metadata;
    this.fontFamilies = metadata.fontFamilies;
  }

  /** Resolve icon data by name or by slug (handles "Local language", "LocalLanguage", "weather-sunny" / "weather_sunny", extra spaces) */
  private getIconData(iconName: string): IconData | null {
    if (!iconName || typeof iconName !== 'string') return null;
    const direct = this.metadata.icons[iconName] ?? null;
    if (direct) return direct;
    const slugForDirect = nameToSlug(iconName);
    const bySlugDirect = this.metadata.icons[slugForDirect] ?? null;
    if (bySlugDirect) return bySlugDirect;
    const withUnderscore = this.metadata.icons[iconName.replace(/-/g, '_')] ?? null;
    if (withUnderscore) return withUnderscore;
    const withHyphen = this.metadata.icons[iconName.replace(/_/g, '-')] ?? null;
    if (withHyphen) return withHyphen;
    const keys = Object.keys(this.metadata.icons);
    const matchKey = keys.find(
      (k) =>
        k === iconName ||
        normalizeSlug(k) === slugForDirect ||
        k.replace(/-/g, '_') === iconName ||
        k.replace(/_/g, '-') === iconName
    );
    if (matchKey) return this.metadata.icons[matchKey] ?? null;
    const normalized = normalizeIconName(iconName);
    if (normalized) {
      const found = this.metadata.icons[normalized] ?? null;
      if (found) return found;
    }
    const slug = slugForDirect;
    const bySlug = Object.values(this.metadata.icons).find(
      (icon) =>
        icon.slug === slug ||
        icon.slug === slug.replace(/-/g, '_') ||
        icon.slug === slug.replace(/_/g, '-') ||
        normalizeSlug(icon.slug) === slug ||
        normalizeSlug(icon.name) === slug
    );
    if (bySlug) return bySlug;
    const slugPascal = pascalToSlug(iconName);
    const byPascal = Object.values(this.metadata.icons).find(
      (icon) =>
        icon.slug === slugPascal ||
        icon.slug === slugPascal.replace(/-/g, '_') ||
        icon.slug === slugPascal.replace(/_/g, '-') ||
        normalizeSlug(icon.slug) === slugPascal ||
        normalizeSlug(icon.name) === slugPascal
    );
    return byPascal ?? null;
  }

  /**
   * Get the unicode character of the icon
   */
  getIconChar(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.getIconData(iconName);
    if (!iconData?.unicodeMapping) return null;

    const unicodeInfo = iconData.unicodeMapping[String(size)]?.[style];
    if (!unicodeInfo || unicodeInfo.unicode == null) return null;

    return String.fromCodePoint(unicodeInfo.unicode);
  }

  /**
   * Get the CSS class name of the icon
   */
  getIconClass(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.getIconData(iconName);
    if (!iconData?.unicodeMapping) return null;

    const unicodeInfo = iconData.unicodeMapping[String(size)]?.[style];
    if (!unicodeInfo) return null;

    return unicodeInfo.cssClass;
  }

  /**
   * Get the font family of the icon
   */
  getFontFamily(style: 'regular' | 'filled' = 'regular'): string {
    return this.fontFamilies[style].font_family;
  }

  /**
   * Get all available icon names
   */
  getAllIconNames(): string[] {
    return Object.keys(this.metadata.icons);
  }

  /**
   * Get supported sizes
   */
  getSupportedSizes(): number[] {
    return this.metadata.supportedSizes;
  }

  /**
   * Get icon info
   */
  getIconInfo(iconName: string): IconData | null {
    return this.getIconData(iconName);
  }

  /**
   * Search icons
   */
  searchIcons(query: string): string[] {
    const searchTerm = query.toLowerCase();
    return Object.keys(this.metadata.icons).filter(iconName =>
      iconName.toLowerCase().includes(searchTerm) ||
      (this.metadata.icons[iconName]?.description || '').toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Check if an icon is supported for a specific size and style
   */
  isIconSupported(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): boolean {
    const iconData = this.getIconData(iconName);
    if (!iconData) return false;

    return iconData.size.includes(size) && iconData.style.includes(style);
  }
}

// Singleton instance creation
const iconUtils = new IconUtils();

export default iconUtils;
export { IconUtils };
