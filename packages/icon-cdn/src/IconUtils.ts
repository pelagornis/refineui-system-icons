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
   * 아이콘의 unicode 문자 반환
   */
  getIconChar(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.metadata.icons[iconName];
    if (!iconData) return null;

    const unicodeInfo = iconData.unicodeMapping[size]?.[style];
    if (!unicodeInfo) return null;

    return String.fromCodePoint(unicodeInfo.unicode);
  }

  /**
   * 아이콘의 CSS 클래스명 반환
   */
  getIconClass(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string | null {
    const iconData = this.metadata.icons[iconName];
    if (!iconData) return null;

    const unicodeInfo = iconData.unicodeMapping[size]?.[style];
    if (!unicodeInfo) return null;

    return unicodeInfo.cssClass;
  }

  /**
   * 아이콘의 폰트 패밀리 반환
   */
  getFontFamily(style: 'regular' | 'filled' = 'regular'): string {
    return this.fontFamilies[style].font_family;
  }

  /**
   * 사용 가능한 모든 아이콘 이름 반환
   */
  getAvailableIcons(): string[] {
    return Object.keys(this.metadata.icons);
  }

  /**
   * 지원되는 크기들 반환
   */
  getAvailableSizes(): number[] {
    return this.metadata.supportedSizes;
  }

  /**
   * 아이콘 정보 반환
   */
  getIconInfo(iconName: string): IconData | null {
    return this.metadata.icons[iconName] || null;
  }

  /**
   * 아이콘 검색
   */
  searchIcons(query: string): string[] {
    const searchTerm = query.toLowerCase();
    return Object.keys(this.metadata.icons).filter(iconName => 
      iconName.toLowerCase().includes(searchTerm) ||
      (this.metadata.icons[iconName]?.description || '').toLowerCase().includes(searchTerm)
    );
  }

  /**
   * 아이콘이 특정 크기와 스타일을 지원하는지 확인
   */
  isIconSupported(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): boolean {
    const iconData = this.metadata.icons[iconName];
    if (!iconData) return false;

    return iconData.size.includes(size) && iconData.style.includes(style);
  }
}

// 싱글톤 인스턴스 생성
const iconUtils = new IconUtils();

export default iconUtils;
export { IconUtils };
