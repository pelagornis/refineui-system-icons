import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottomright48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8H12ZM19.7 31C19.7 30.282 20.282 29.7 21 29.7H33C33.718 29.7 34.3 30.282 34.3 31C34.3 31.718 33.718 32.3 33 32.3H21C20.282 32.3 19.7 31.718 19.7 31ZM14.7 24C14.7 23.282 15.282 22.7 16 22.7H33C33.718 22.7 34.3 23.282 34.3 24C34.3 24.718 33.718 25.3 33 25.3H16C15.282 25.3 14.7 24.718 14.7 24Z" fill="black"/>
    </Svg>
  );
};
