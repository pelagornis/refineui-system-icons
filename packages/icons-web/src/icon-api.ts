import { IconInfo } from './types';

// 아이콘 API 클래스
export class IconAPI {
  private baseUrl: string;

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl;
  }

  // 아이콘 URL 생성
  getIconUrl(slug: string, size: number = 24): string {
    return `${this.baseUrl}/icons/${size}/${slug}.svg`;
  }

  // 아이콘 SVG 내용 가져오기
  async getIconSVG(slug: string, size: number = 24): Promise<string> {
    const response = await fetch(this.getIconUrl(slug, size));
    if (!response.ok) {
      throw new Error(`Failed to fetch icon: ${slug} (${size}px)`);
    }
    return response.text();
  }

  // 모든 아이콘 목록 가져오기
  async getAllIcons(): Promise<IconInfo[]> {
    const response = await fetch(`${this.baseUrl}/api/icons`);
    if (!response.ok) {
      throw new Error('Failed to fetch icons list');
    }
    return response.json();
  }

  // 특정 크기의 아이콘들 가져오기
  async getIconsBySize(size: number): Promise<IconInfo[]> {
    const response = await fetch(`${this.baseUrl}/api/icons?size=${size}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch icons for size: ${size}`);
    }
    return response.json();
  }

  // 아이콘 검색
  async searchIcons(query: string): Promise<IconInfo[]> {
    const response = await fetch(`${this.baseUrl}/api/icons/search?q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Failed to search icons');
    }
    return response.json();
  }

  // 아이콘 다운로드
  downloadIcon(slug: string, size: number = 24): void {
    const link = document.createElement('a');
    link.href = this.getIconUrl(slug, size);
    link.download = `${slug}-${size}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// 기본 인스턴스
export const iconAPI = new IconAPI();

// 편의 함수들
export const getIconUrl = (slug: string, size: number = 24): string => {
  return iconAPI.getIconUrl(slug, size);
};

export const getIconSVG = (slug: string, size: number = 24): Promise<string> => {
  return iconAPI.getIconSVG(slug, size);
};

export const getAllIcons = (): Promise<IconInfo[]> => {
  return iconAPI.getAllIcons();
};

export const searchIcons = (query: string): Promise<IconInfo[]> => {
  return iconAPI.searchIcons(query);
};

export const downloadIcon = (slug: string, size: number = 24): void => {
  return iconAPI.downloadIcon(slug, size);
};
