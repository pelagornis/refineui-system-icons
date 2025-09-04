import IconUtils from './IconUtils';

// CDN 기본 URL
const CDN_BASE_URL = 'https://jihoonahn.github.io/refineui-system-icons/cdn';

// === 아이콘 HTML 생성 메서드 ===
export const createIconHTML = (iconName: string, style: 'regular' | 'filled') => {
  return (size: number = 24, color: string = 'currentColor', className: string = '') => {
    const iconChar = IconUtils.getIconChar(iconName, style, size);
    const fontFamily = IconUtils.getFontFamily(style);

    if (!iconChar) return '';

    return `<span style="font-family: '${fontFamily}'; font-size: ${size}px; color: ${color}; display: inline-block; line-height: 1; vertical-align: middle;" class="${className}">${iconChar}</span>`;
  };
};

// === CDN 유틸리티 함수들 ===
export const getCSSUrl = () => `${CDN_BASE_URL}/fonts/refineui-system-icons.css`;
export const getFontUrl = (style: 'regular' | 'filled' = 'regular') => {
  const fontFamily = IconUtils.getFontFamily(style);
  return `${CDN_BASE_URL}/fonts/${fontFamily}.woff2`;
};
export const getCDNBaseUrl = () => CDN_BASE_URL;

// === build.ts에서 필요한 함수들 ===
export const mapIconName = (iconDir: string): string => {
  // 폴더 이름을 아이콘 이름으로 변환
  return iconDir.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
};

export const generateSampleSVG = (iconName: string, size: number, style: string): string => {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${style === 'filled' ? '#000' : 'none'}" stroke="#000" stroke-width="1"/>
  <text x="${size/2}" y="${size/2 + 4}" text-anchor="middle" font-family="Arial" font-size="${size/3}" fill="#000">${iconName}</text>
</svg>`;
};

// === cdn.ts에서 필요한 함수들 ===
export const isValidIconSize = (size: number): boolean => {
  return [16, 20, 24, 28, 32, 48].includes(size);
};

export const isValidIconStyle = (style: string): style is 'regular' | 'filled' => {
  return style === 'regular' || style === 'filled';
};

export const generateIconFileName = (iconName: string, style: string): string => {
  return `${iconName}-${style}.svg`;
};

// === 유틸리티 함수들 ===
export { default as IconUtils } from './IconUtils';

export const getIconChar = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {
  return IconUtils.getIconChar(iconName, style, size);
};

export const getIconClass = (iconName: string, style: 'regular' | 'filled' = 'regular', size: number = 24) => {
  return IconUtils.getIconClass(iconName, style, size);
};

export const getFontFamily = (style: 'regular' | 'filled' = 'regular') => {
  return IconUtils.getFontFamily(style);
};