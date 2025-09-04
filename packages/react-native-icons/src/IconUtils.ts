import React from 'react';
import metadata from './metadata.json';

export interface IconProps {
  style?: any;
  className?: string;
  onPress?: () => void;
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

class ReactNativeIconUtils {
  private metadata: Metadata;
  private fontFamilies: any;

  constructor() {
    this.metadata = metadata;
    this.fontFamilies = metadata.fontFamilies;
  }

  // === FLUENTUI 스타일 방식 ===
  // 동적 아이콘 생성 메서드
  createIconMethod(iconName: string, props: IconProps = {}): React.ReactElement | null {
    // Unsized 방식: AccessibilityRegular, AccessibilityFilled
    const unsizedMatch = iconName.match(/^([A-Za-z]+)(Regular|Filled)$/);
    if (unsizedMatch) {
      const [, iconNamePart, style] = unsizedMatch;
      return this.createUnsizedIcon(iconNamePart, style.toLowerCase() as 'regular' | 'filled', props);
    }

    // Sized 방식: Accessibility16Regular, Accessibility24Filled
    const sizedMatch = iconName.match(/^([A-Za-z]+)(\d+)(Regular|Filled)$/);
    if (sizedMatch) {
      const [, iconNamePart, sizeStr, style] = sizedMatch;
      const size = parseInt(sizeStr, 10);
      return this.createSizedIcon(iconNamePart, size, style.toLowerCase() as 'regular' | 'filled', props);
    }

    return null;
  }

  // Unsized 아이콘 생성 (기본 24px)
  private createUnsizedIcon(iconName: string, style: 'regular' | 'filled', props: IconProps = {}): React.ReactElement | null {
    const iconData = this.metadata.icons[iconName];
    if (!iconData) return null;

    const defaultSize = 24;
    const unicodeInfo = iconData.unicodeMapping[defaultSize]?.[style];
    if (!unicodeInfo) return null;

    const fontFamily = this.fontFamilies[style].font_family;
    
    return React.createElement('Text', {
      ...props,
      style: {
        fontFamily,
        fontSize: defaultSize,
        lineHeight: defaultSize,
        ...props.style
      },
      children: String.fromCodePoint(unicodeInfo.unicode)
    });
  }

  // Sized 아이콘 생성
  private createSizedIcon(iconName: string, size: number, style: 'regular' | 'filled', props: IconProps = {}): React.ReactElement | null {
    const iconData = this.metadata.icons[iconName];
    if (!iconData) return null;

    const unicodeInfo = iconData.unicodeMapping[size]?.[style];
    if (!unicodeInfo) return null;

    const fontFamily = this.fontFamilies[style].font_family;
    
    return React.createElement('Text', {
      ...props,
      style: {
        fontFamily,
        fontSize: size,
        lineHeight: size,
        ...props.style
      },
      children: String.fromCodePoint(unicodeInfo.unicode)
    });
  }

  // 유틸리티 메서드들
  getIconChar(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.metadata.icons[iconName];
    if (!iconData) return null;

    const unicodeInfo = iconData.unicodeMapping[size]?.[style];
    if (!unicodeInfo) return null;

    return String.fromCodePoint(unicodeInfo.unicode);
  }

  getIconClass(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.metadata.icons[iconName];
    if (!iconData) return null;

    const unicodeInfo = iconData.unicodeMapping[size]?.[style];
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
    return this.metadata.icons[iconName] || null;
  }

  searchIcons(query: string): string[] {
    const searchTerm = query.toLowerCase();
    return Object.keys(this.metadata.icons).filter(iconName => 
      iconName.toLowerCase().includes(searchTerm) ||
      this.metadata.icons[iconName].description.toLowerCase().includes(searchTerm)
    );
  }
}

// 싱글톤 인스턴스 생성
const reactNativeIconUtils = new ReactNativeIconUtils();

export default reactNativeIconUtils;
export { ReactNativeIconUtils };
