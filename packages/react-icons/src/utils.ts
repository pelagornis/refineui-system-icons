import React from 'react';
import IconUtils from './IconUtils';

export interface IconProps {
  size?: number;
  color?: string;
  style?: 'regular' | 'filled';
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

// === 아이콘 컴포넌트 생성 메서드 ===
export const createIconComponent = (iconName: string, style: 'regular' | 'filled') => {
  return (props: IconProps) => {
    const iconChar = IconUtils.getIconChar(iconName, style, props.size || 24);
    const fontFamily = IconUtils.getFontFamily(style);

    if (!iconChar) return null;

    const styleObj: React.CSSProperties = {
      fontFamily,
      fontSize: props.size || 24,
      color: props.color || 'currentColor',
      display: 'inline-block',
      lineHeight: 1,
      verticalAlign: 'middle',
    };

    if (props.style) {
      Object.assign(styleObj, props.style);
    }

    return React.createElement('span', {
      style: styleObj,
      className: props.className,
      onClick: props.onClick,
    }, iconChar);
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