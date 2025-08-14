import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapes16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.66667 7V10.1953C4.12766 9.76003 3 8.34504 3 6.66667C3 4.64162 4.64162 3 6.66667 3C8.34504 3 9.76003 4.12766 10.1953 5.66667H7C6.26362 5.66667 5.66667 6.26362 5.66667 7Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 7.66667C6.33333 6.93029 6.93029 6.33333 7.66667 6.33333H12.3333C13.0697 6.33333 13.6667 6.93029 13.6667 7.66667V12.3333C13.6667 13.0697 13.0697 13.6667 12.3333 13.6667H7.66667C6.93029 13.6667 6.33333 13.0697 6.33333 12.3333V7.66667Z" fill="black"/>
    </Svg>
  );
};
