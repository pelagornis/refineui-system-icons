import React from 'react';
import type { CSSProperties } from 'react';
import IconUtils from './IconUtils';
import { mergeFontIconStyles } from './mergeFontIconStyles';

export interface IconProps {
  size?: number;
  color?: string;
  style?: 'regular' | 'filled';
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

// === Icon component creation method ===
export const createIconComponent = (iconName: string, style: 'regular' | 'filled') => {
  return (props: IconProps) => {
    const iconChar = IconUtils.getIconChar(iconName, style, props.size || 24);
    const fontFamily = IconUtils.getFontFamily(style);

    if (!iconChar) return null;

    const userCss =
      props.style && typeof props.style === 'object' && !Array.isArray(props.style)
        ? (props.style as CSSProperties)
        : undefined;
    const styleObj = mergeFontIconStyles(
      {
        fontFamily,
        fontSize: props.size || 24,
        color: props.color || 'currentColor',
        lineHeight: 1,
        verticalAlign: 'middle',
      },
      userCss
    );

    return React.createElement('span', {
      style: styleObj,
      className: props.className,
      onClick: props.onClick,
    }, iconChar);
  };
};

// === Utility functions ===
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