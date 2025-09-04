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

class IconUtils {
  private metadata: Metadata;
  private fontFamilies: any;

  constructor() {
    this.metadata = metadata;
    this.fontFamilies = metadata.fontFamilies;
  }

  /**
   * Get the unicode character of the icon
   */
  getIconChar(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.metadata.icons[iconName];
    if (!iconData) return null;

    const unicodeInfo = iconData.unicodeMapping[size]?.[style];
    if (!unicodeInfo) return null;

    return String.fromCodePoint(unicodeInfo.unicode);
  }

  /**
   * Get the CSS class name of the icon
   */
  getIconClass(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.metadata.icons[iconName];
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
   * Get icon info
   */
  getIconInfo(iconName: string): IconData | null {
    return this.metadata.icons[iconName] || null;
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
    const iconData = this.metadata.icons[iconName];
    if (!iconData) return false;

    return iconData.size.includes(size) && iconData.style.includes(style);
  }
}

// Singleton instance creation
const iconUtils = new IconUtils();

export default iconUtils;
export { IconUtils };
