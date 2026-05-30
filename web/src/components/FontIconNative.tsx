import { createElement, type ComponentType } from 'react';
import { Text, type TextProps } from 'react-native';
import { getFontFamily, getIconChar } from '@refineui/react-native-icons/utils';
import type { IconStyle } from '../sample-icons';

const NativeText = Text as unknown as ComponentType<TextProps>;

interface FontIconNativeProps {
  iconId: string;
  size: number;
  style: IconStyle;
  color: string;
}

export function FontIconNative({ iconId, size, style, color }: FontIconNativeProps) {
  const iconChar = getIconChar(iconId, style, size);
  if (!iconChar) {
    return createElement(NativeText, { style: { fontSize: 12, color: '#9ca3af' } }, 'glyph 없음');
  }

  return createElement(
    NativeText,
    {
      style: {
        fontFamily: getFontFamily(style),
        fontSize: size,
        color,
        lineHeight: size,
      },
    },
    iconChar
  );
}
