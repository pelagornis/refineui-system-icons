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
/** PascalCase to slug (e.g. "LocalLanguage" -> "local-language") for fallback lookup */
function pascalToSlug(name: string): string {
  return String(name).replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

class IconUtils {
  private metadata: Metadata;
  private fontFamilies: any;

  constructor() {
    this.metadata = metadata;
    this.fontFamilies = metadata.fontFamilies;
  }

  /** Resolve icon data by name or by slug (handles "Local language" and "LocalLanguage") */
  private getIconData(iconName: string): IconData | null {
    const direct = this.metadata.icons[iconName];
    if (direct) return direct;
    const slug = nameToSlug(iconName);
    const bySlug = Object.values(this.metadata.icons).find((icon) => icon.slug === slug);
    if (bySlug) return bySlug;
    const slugPascal = pascalToSlug(iconName);
    return Object.values(this.metadata.icons).find((icon) => icon.slug === slugPascal) || null;
  }

  /**
   * Get the unicode character of the icon
   */
  getIconChar(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.getIconData(iconName);
    if (!iconData) return null;

    const unicodeInfo = iconData.unicodeMapping[size]?.[style];
    if (!unicodeInfo) return null;

    return String.fromCodePoint(unicodeInfo.unicode);
  }

  /**
   * Get the CSS class name of the icon
   */
  getIconClass(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.getIconData(iconName);
    if (!iconData) return null;

    const unicodeInfo = iconData.unicodeMapping[size]?.[style];
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
