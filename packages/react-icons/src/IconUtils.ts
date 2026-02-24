import React from 'react';
import metadata from './metadata.json';

/** Display name to slug (e.g. "Local language" -> "local-language") */
function nameToSlug(name: string): string {
  return String(name).toLowerCase().trim().replace(/\s+/g, '-');
}
function normalizeSlug(s: string): string {
  return nameToSlug(String(s).replace(/_/g, '-'));
}
/** PascalCase to slug (e.g. "LocalLanguage" -> "local-language") for fallback lookup */
function pascalToSlug(name: string): string {
  return String(name)
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}
/** Normalize display name: trim and collapse multiple spaces */
function normalizeIconName(name: string): string {
  return String(name).trim().replace(/\s+/g, ' ');
}

export interface IconProps {
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

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

class ReactIconUtils {
  private metadata: Metadata;
  private fontFamilies: any;

  constructor() {
    this.metadata = metadata;
    this.fontFamilies = metadata.fontFamilies;
  }

  /** Resolve icon data by name or by slug (handles "Local language", "LocalLanguage", "weather-sunny" / "weather_sunny", extra spaces) */
  private getIconData(iconName: string): IconData | null {
    if (!iconName || typeof iconName !== 'string') return null;
    const direct = this.metadata.icons[iconName];
    if (direct) return direct;
    const slugForDirect = nameToSlug(iconName);
    if (this.metadata.icons[slugForDirect]) return this.metadata.icons[slugForDirect];
    if (this.metadata.icons[iconName.replace(/-/g, '_')]) return this.metadata.icons[iconName.replace(/-/g, '_')];
    if (this.metadata.icons[iconName.replace(/_/g, '-')]) return this.metadata.icons[iconName.replace(/_/g, '-')];
    const keys = Object.keys(this.metadata.icons);
    const matchKey = keys.find(
      (k) =>
        k === iconName ||
        normalizeSlug(k) === slugForDirect ||
        k.replace(/-/g, '_') === iconName ||
        k.replace(/_/g, '-') === iconName
    );
    if (matchKey) return this.metadata.icons[matchKey];
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

  // === Icon style method ===
  // Dynamic icon creation method
  createIconMethod(iconName: string, props: IconProps = {}): React.ReactElement | null {
    // Unsized method: AccessibilityRegular, AccessibilityFilled
    const unsizedMatch = iconName.match(/^([A-Za-z]+)(Regular|Filled)$/);
    if (unsizedMatch) {
      const [, iconNamePart, iconStyle] = unsizedMatch;
      return this.createUnsizedIcon(iconNamePart, iconStyle.toLowerCase() as 'regular' | 'filled', props);
    }

    // Sized method: Accessibility16Regular, Accessibility24Filled
    const sizedMatch = iconName.match(/^([A-Za-z]+)(\d+)(Regular|Filled)$/);
    if (sizedMatch) {
      const [, iconNamePart, sizeStr, iconStyle] = sizedMatch;
      const size = parseInt(sizeStr, 10);
      return this.createSizedIcon(iconNamePart, size, iconStyle.toLowerCase() as 'regular' | 'filled', props);
    }

    return null;
  }

  // Generate unsized icons (default 24px)
  private createUnsizedIcon(iconName: string, style: 'regular' | 'filled', props: IconProps = {}): React.ReactElement | null {
    const iconData = this.getIconData(iconName);
    if (!iconData?.unicodeMapping) return null;

    const defaultSize = 24;
    const unicodeInfo = iconData.unicodeMapping[String(defaultSize)]?.[style];
    if (!unicodeInfo || unicodeInfo.unicode == null) return null;

    const fontFamily = this.fontFamilies[style].font_family;
    
    return React.createElement('span', {
      ...props,
      style: {
        fontFamily,
        fontSize: `${defaultSize}px`,
        lineHeight: 1,
        ...props.style
      },
      children: String.fromCodePoint(unicodeInfo.unicode)
    });
  }

  // Generate sized icons
  private createSizedIcon(iconName: string, size: number, style: 'regular' | 'filled', props: IconProps = {}): React.ReactElement | null {
    const iconData = this.getIconData(iconName);
    if (!iconData?.unicodeMapping) return null;

    const unicodeInfo = iconData.unicodeMapping[String(size)]?.[style];
    if (!unicodeInfo || unicodeInfo.unicode == null) return null;

    const fontFamily = this.fontFamilies[style].font_family;
    
    return React.createElement('span', {
      ...props,
      style: {
        fontFamily,
        fontSize: `${size}px`,
        lineHeight: 1,
        ...props.style
      },
      children: String.fromCodePoint(unicodeInfo.unicode)
    });
  }

  // Utility methods
  getIconChar(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.getIconData(iconName);
    if (!iconData?.unicodeMapping) return null;

    const unicodeInfo = iconData.unicodeMapping[String(size)]?.[style];
    if (!unicodeInfo || unicodeInfo.unicode == null) return null;

    return String.fromCodePoint(unicodeInfo.unicode);
  }

  getIconClass(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.getIconData(iconName);
    if (!iconData?.unicodeMapping) return null;

    const unicodeInfo = iconData.unicodeMapping[String(size)]?.[style];
    if (!unicodeInfo) return null;

    return unicodeInfo.cssClass;
  }

  getFontFamily(style: 'regular' | 'filled' = 'regular'): string {
    return this.fontFamilies[style].font_family;
  }

  getAvailableIcons(): string[] {
    return Object.keys(this.metadata.icons);
  }

  getFontFamilies(): any {
    return this.fontFamilies;
  }

  getAvailableSizes(): number[] {
    return this.metadata.supportedSizes;
  }

  getIconInfo(iconName: string): IconData | null {
    return this.getIconData(iconName);
  }

  searchIcons(query: string): string[] {
    const searchTerm = query.toLowerCase();
    return Object.keys(this.metadata.icons).filter(iconName => 
      iconName.toLowerCase().includes(searchTerm) ||
      this.metadata.icons[iconName].description.toLowerCase().includes(searchTerm)
    );
  }
}

// Singleton instance creation
const reactIconUtils = new ReactIconUtils();

export default reactIconUtils;
export { ReactIconUtils };
