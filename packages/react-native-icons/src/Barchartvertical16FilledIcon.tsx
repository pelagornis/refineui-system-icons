import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Barchartvertical16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667C5.06971 13.6667 5.66667 13.0697 5.66667 12.3333V9C5.66667 8.26362 5.06971 7.66667 4.33333 7.66667C3.59695 7.66667 3 8.26362 3 9L3 12.3333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.3333C7 13.0697 7.59695 13.6667 8.33333 13.6667C9.06971 13.6667 9.66667 13.0697 9.66667 12.3333V7C9.66667 6.26362 9.06971 5.66667 8.33333 5.66667C7.59695 5.66667 7 6.26362 7 7V12.3333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3333 13.6667C11.597 13.6667 11 13.0697 11 12.3333V4.33333C11 3.59695 11.597 3 12.3333 3C13.0697 3 13.6667 3.59695 13.6667 4.33333V12.3333C13.6667 13.0697 13.0697 13.6667 12.3333 13.6667Z" fill="black"/>
    </Svg>
  );
};
