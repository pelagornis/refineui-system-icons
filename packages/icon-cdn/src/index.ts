/**
 * RefineUI System Icons CDN Package
 * 
 * A TypeScript-first CDN package for RefineUI System Icons providing
 * type-safe access to 433+ icons in multiple sizes and styles.
 * 
 * CDN URL Format:
 * https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/{size}/{icon-name}-{style}.svg
 * 
 * Examples:
 * https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/24/add-filled.svg
 * https://cdn.jsdelivr.net/npm/@refineui/icon-cdn@1.0.0/icons/16/home-regular.svg
 * 
 * @packageDocumentation
 */

import IconUtils from './IconUtils';

// === CDN 아이콘 서비스 ===
// CDN을 통해 폰트 파일과 아이콘을 제공합니다

const CDN_BASE_URL = 'https://jihoonahn.github.io/refineui-system-icons/cdn';

export interface CDNConfig {
  baseUrl?: string;
  version?: string;
}

class IconCDN {
  private baseUrl: string;

  constructor(config: CDNConfig = {}) {
    this.baseUrl = config.baseUrl || CDN_BASE_URL;
  }

  /**
   * CSS 파일 URL 반환
   */
  getCSSUrl(style: 'regular' | 'filled' = 'regular'): string {
    return `${this.baseUrl}/dist/refineui-system-icons-${style}.css`;
  }

  /**
   * 폰트 파일 URL 반환
   */
  getFontUrl(style: 'regular' | 'filled' = 'regular', format: 'woff2' | 'otf' | 'ttf' = 'woff2'): string {
    return `${this.baseUrl}/dist/refineui-system-icons-${style}.${format}`;
  }

  /**
   * HTML link 태그 생성
   */
  getCSSLinkTag(style: 'regular' | 'filled' = 'regular'): string {
    return `<link rel="stylesheet" href="${this.getCSSUrl(style)}">`;
  }

  /**
   * 모든 스타일의 CSS link 태그 생성
   */
  getAllCSSLinkTags(): string {
    return [
      this.getCSSLinkTag('regular'),
      this.getCSSLinkTag('filled')
    ].join('\n');
  }

  /**
   * 아이콘 HTML 생성
   */
  getIconHTML(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24, color: string = 'currentColor'): string {
    const iconChar = IconUtils.getIconChar(iconName, style, size);
    const fontFamily = IconUtils.getFontFamily(style);

    if (!iconChar) {
      return '';
    }

    return `<span style="font-family: '${fontFamily}'; font-size: ${size}px; color: ${color}; display: inline-block; line-height: 1;">${iconChar}</span>`;
  }

  /**
   * 아이콘 CSS 클래스 HTML 생성
   */
  getIconClassHTML(iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24): string {
    const cssClass = IconUtils.getIconClass(iconName, style, size);
    
    if (!cssClass) {
      return '';
    }

    return `<span class="${cssClass}"></span>`;
  }
}

// 기본 CDN 인스턴스
const iconCDN = new IconCDN();

// 유틸리티 함수들
export { default as IconUtils } from './IconUtils';
export type { IconData } from './IconUtils';

export const getIconChar = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {
  return IconUtils.getIconChar(iconName, style, size);
};

export const getIconClass = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {
  return IconUtils.getIconClass(iconName, style, size);
};

export const getFontFamily = (style: 'regular' | 'filled' = 'regular') => {
  return IconUtils.getFontFamily(style);
};

// CDN 함수들
export const getCSSUrl = (style: 'regular' | 'filled' = 'regular') => {
  return iconCDN.getCSSUrl(style);
};

export const getFontUrl = (style: 'regular' | 'filled' = 'regular', format: 'woff2' | 'otf' | 'ttf' = 'woff2') => {
  return iconCDN.getFontUrl(style, format);
};

export const getCSSLinkTag = (style: 'regular' | 'filled' = 'regular') => {
  return iconCDN.getCSSLinkTag(style);
};

export const getAllCSSLinkTags = () => {
  return iconCDN.getAllCSSLinkTags();
};

export const getIconHTML = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24, color: string = 'currentColor') => {
  return iconCDN.getIconHTML(iconName, style, size, color);
};

export const getIconClassHTML = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {
  return iconCDN.getIconClassHTML(iconName, style, size);
};

// === 434개 아이콘 전부에 대한 편의 함수들 자동 생성 ===
const iconNames = IconUtils.getAvailableIcons();

// Regular 스타일 아이콘들
iconNames.forEach((iconName: string) => {
  (exports as any)[iconName] = (size: number = 24, color: string = 'currentColor') => 
    iconCDN.getIconHTML(iconName, 'regular', size, color);
});

// Filled 스타일 아이콘들
iconNames.forEach((iconName: string) => {
  (exports as any)[`${iconName}Filled`] = (size: number = 24, color: string = 'currentColor') => 
    iconCDN.getIconHTML(iconName, 'filled', size, color);
});

// === 브라우저에서 직접 사용할 수 있도록 전역 함수들 노출 ===
if (typeof (globalThis as any).window !== 'undefined') {
  // CDN 함수들을 전역으로 노출
  ((globalThis as any).window as any).getCSSUrl = getCSSUrl;
  ((globalThis as any).window as any).getFontUrl = getFontUrl;
  ((globalThis as any).window as any).getCSSLinkTag = getCSSLinkTag;
  ((globalThis as any).window as any).getAllCSSLinkTags = getAllCSSLinkTags;
  ((globalThis as any).window as any).getIconHTML = getIconHTML;
  ((globalThis as any).window as any).getIconClassHTML = getIconClassHTML;
  ((globalThis as any).window as any).getIconChar = getIconChar;
  ((globalThis as any).window as any).getIconClass = getIconClass;
  ((globalThis as any).window as any).getFontFamily = getFontFamily;
  
  // IconCDN 객체도 전역으로 노출
  ((globalThis as any).window as any).IconCDN = iconCDN;
  
  // 주요 아이콘들을 전역으로 노출
  iconNames.forEach((iconName) => {
    ((globalThis as any).window as any)[iconName] = (exports as any)[iconName];
    ((globalThis as any).window as any)[`${iconName}Filled`] = (exports as any)[`${iconName}Filled`];
  });
}

// 사용법 예시:
// 1. CDN CSS 로드
// getCSSLinkTag('regular') // Regular 스타일 CSS link 태그
// getAllCSSLinkTags() // 모든 스타일 CSS link 태그
// 
// 2. 아이콘 HTML 생성
// getIconHTML('Gavel', 'regular', 24, 'red') // HTML 문자열 반환
// Gavel(24, 'red') // 편의 함수 사용
// GavelFilled(32, 'blue') // Filled 스타일
// 
// 3. 유틸리티 함수 사용
// getIconChar('Gavel', 'regular', 24) // unicode 문자 반환
// getFontFamily('filled') // 폰트 패밀리 반환
