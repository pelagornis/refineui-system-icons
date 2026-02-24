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

/** Display name to slug (e.g. "Local language" -> "local-language") */
function nameToSlug(name: string): string {
  return String(name).toLowerCase().trim().replace(/\s+/g, '-');
}
/** Normalize slug for comparison (handles metadata with "Code block" vs lookup "code-block") */
function normalizeSlug(s: string): string {
  return nameToSlug(String(s).replace(/_/g, '-'));
}
/** PascalCase to slug (e.g. "LocalLanguage" -> "local-language") for fallback lookup */
function pascalToSlug(name: string): string {
  return String(name).replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}
/** Normalize display name: trim and collapse multiple spaces (for lookup by name with spaces) */
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
    const icons = this.metadata.icons;
    const direct = icons[iconName];
    if (direct) return direct;
    const slugForDirect = nameToSlug(iconName);
    const bySlugKey = icons[slugForDirect];
    if (bySlugKey) return bySlugKey;
    const withUnderscore = iconName.replace(/-/g, '_');
    if (icons[withUnderscore]) return icons[withUnderscore];
    const withHyphen = iconName.replace(/_/g, '-');
    if (icons[withHyphen]) return icons[withHyphen];
    // Fallback: iterate keys (handles hyphen/underscore/space variants)
    const keys = Object.keys(icons);
    const matchKey = keys.find(
      (k) =>
        k === iconName ||
        normalizeSlug(k) === slugForDirect ||
        k.replace(/-/g, '_') === iconName ||
        k.replace(/_/g, '-') === iconName
    );
    if (matchKey) return icons[matchKey];
    const normalized = normalizeIconName(iconName);
    if (normalized && this.metadata.icons[normalized]) return this.metadata.icons[normalized];
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
    return Object.values(this.metadata.icons).find(
      (icon) =>
        icon.slug === slugPascal ||
        icon.slug === slugPascal.replace(/-/g, '_') ||
        icon.slug === slugPascal.replace(/_/g, '-') ||
        normalizeSlug(icon.slug) === slugPascal ||
        normalizeSlug(icon.name) === slugPascal
    ) || null;
  }

  /** Get best available size key when exact size is missing (e.g. 18 -> 20) */
  private getSizeKey(iconData: IconData, size: number): string | null {
    const sizeStr = String(size);
    if (iconData.unicodeMapping[sizeStr]) return sizeStr;
    const available = (iconData.size || this.metadata.supportedSizes || []).slice().sort((a, b) => a - b);
    if (available.length === 0) return null;
    let best = available[0];
    for (const s of available) {
      if (s >= size) return String(s);
      best = s;
    }
    return String(best);
  }

  /**
   * Get the unicode character of the icon
   */
  getIconChar(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.getIconData(iconName);
    if (!iconData?.unicodeMapping) return null;

    const sizeNum = Number(size);
    const sizeKey = this.getSizeKey(iconData, sizeNum);
    if (!sizeKey) return null;
    const unicodeInfo = iconData.unicodeMapping[sizeKey]?.[style];
    if (!unicodeInfo || unicodeInfo.unicode == null) return null;

    return String.fromCodePoint(unicodeInfo.unicode);
  }

  /**
   * Get the CSS class name of the icon
   */
  getIconClass(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.getIconData(iconName);
    if (!iconData?.unicodeMapping) return null;

    const sizeNum = Number(size);
    const sizeKey = this.getSizeKey(iconData, sizeNum);
    if (!sizeKey) return null;
    const unicodeInfo = iconData.unicodeMapping[sizeKey]?.[style];
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
   * Get icon information
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
      this.metadata.icons[iconName].description.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * Check if the icon supports a specific size and style
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
