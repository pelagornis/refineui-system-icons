export * from './types';
export * from './icon-gallery';
export * from './icon-api';

// 아이콘 URL 생성 함수
export function getIconUrl(slug: string, size: number = 24): string {
  return `/icons/${size}/${slug}.svg`;
}

// 아이콘 정보 가져오기
export async function getIconInfo(slug: string, size: number = 24): Promise<string> {
  const response = await fetch(getIconUrl(slug, size));
  return response.text();
}

// 모든 아이콘 목록 가져오기
export async function getAllIcons(): Promise<IconInfo[]> {
  const response = await fetch('/api/icons');
  return response.json();
}
