import IconUtils from './IconUtils';

// === 아이콘 HTML 생성 메서드 ===
export const createIconHTML = (iconName: string, style: 'regular' | 'filled') => {
  return (size: number = 24, color: string = 'currentColor', className: string = '') => {
    const iconChar = IconUtils.getIconChar(iconName, style, size);
    const fontFamily = IconUtils.getFontFamily(style);

    if (!iconChar) return '';

    return `<span style="font-family: '${fontFamily}'; font-size: ${size}px; color: ${color}; display: inline-block; line-height: 1; vertical-align: middle;" class="${className}">${iconChar}</span>`;
  };
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