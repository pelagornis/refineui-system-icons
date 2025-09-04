import React from 'react';
import { Text, TextProps } from 'react-native';
import IconUtils from './IconUtils';

export interface IconProps extends TextProps {
  size?: number;
  color?: string;
  iconStyle?: 'regular' | 'filled';
  [key: string]: any;
}

// === 아이콘 컴포넌트 생성 메서드 ===
export const createIconComponent = (iconName: string, style: 'regular' | 'filled') => {
  return React.forwardRef<Text, IconProps>((props, ref) => {
    const iconChar = IconUtils.getIconChar(iconName, style, props.size || 24);
    const fontFamily = IconUtils.getFontFamily(style);

    if (!iconChar) return null;

    const styleObj = {
      fontFamily,
      fontSize: props.size || 24,
      color: props.color || 'currentColor',
      lineHeight: 1,
    };

    // React.createElement를 사용하여 React Native 호환성 문제 해결
    return React.createElement(Text as any, {
      ref,
      style: [styleObj, props.style],
      ...props,
    }, iconChar);
  });
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
