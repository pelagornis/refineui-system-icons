import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Thinking16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.66667 4.33333C3.66667 3.59695 4.26362 3 5 3H12.3333C13.0697 3 13.6667 3.59695 13.6667 4.33333V8C13.6667 8.73638 13.0697 9.33333 12.3333 9.33333H5C4.26362 9.33333 3.66667 8.73638 3.66667 8V4.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66667 12.3333C6.40305 12.3333 7 11.7364 7 11C7 10.2636 6.40305 9.66667 5.66667 9.66667C4.93029 9.66667 4.33333 10.2636 4.33333 11C4.33333 11.7364 4.93029 12.3333 5.66667 12.3333Z" fill="black"/>
<path d="M4.5 12.9167C4.5 13.3309 4.16421 13.6667 3.75 13.6667C3.33579 13.6667 3 13.3309 3 12.9167C3 12.5025 3.33579 12.1667 3.75 12.1667C4.16421 12.1667 4.5 12.5025 4.5 12.9167Z" fill="black"/>
    </Svg>
  );
};
