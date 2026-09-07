import React from 'react';
import { Text, TextProps } from 'react-native';
import IconUtils from './IconUtils';
import { mergeNativeIconTextStyle } from './mergeNativeIconTextStyle';

export interface IconProps extends TextProps {
  size?: number;
  color?: string;
  iconStyle?: 'regular' | 'filled';
  [key: string]: any;
}

// === Icon component creation method ===
export const createIconComponent = (iconName: string, style: 'regular' | 'filled') => {
  return (props: IconProps) => {
    const iconChar = IconUtils.getIconChar(iconName, style, props.size || 24);
    const fontFamily = IconUtils.getFontFamily(style);

    if (!iconChar) return null;

    const styleObj = {
      fontFamily,
      fontSize: props.size || 24,
      color: props.color || 'currentColor',
      lineHeight: 1,
    };

    const { style: userStyle, ...rest } = props;
    return React.createElement(Text as any, {
      ...rest,
      style: mergeNativeIconTextStyle(styleObj, userStyle),
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