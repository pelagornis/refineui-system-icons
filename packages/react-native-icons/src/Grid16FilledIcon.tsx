import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Grid16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.33333C3 3.59695 3.59695 3 4.33333 3H6.33333C7.06971 3 7.66667 3.59695 7.66667 4.33333V6.33333C7.66667 7.06971 7.06971 7.66667 6.33333 7.66667H4.33333C3.59695 7.66667 3 7.06971 3 6.33333V4.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 10.3333C9 9.59695 9.59695 9 10.3333 9H12.3333C13.0697 9 13.6667 9.59695 13.6667 10.3333V12.3333C13.6667 13.0697 13.0697 13.6667 12.3333 13.6667H10.3333C9.59695 13.6667 9 13.0697 9 12.3333V10.3333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 9C3.59695 9 3 9.59695 3 10.3333V12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667H6.33333C7.06971 13.6667 7.66667 13.0697 7.66667 12.3333V10.3333C7.66667 9.59695 7.06971 9 6.33333 9H4.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 4.33333C9 3.59695 9.59695 3 10.3333 3H12.3333C13.0697 3 13.6667 3.59695 13.6667 4.33333V6.33333C13.6667 7.06971 13.0697 7.66667 12.3333 7.66667H10.3333C9.59695 7.66667 9 7.06971 9 6.33333V4.33333Z" fill="black"/>
    </Svg>
  );
};
