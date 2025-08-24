import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Smartwatch16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.66667 4.33333C5.66667 3.59695 6.26362 3 7 3H9.66667C10.403 3 11 3.59695 11 4.33333V4.44714C10.7915 4.37344 10.5671 4.33333 10.3333 4.33333H6.33333C6.09958 4.33333 5.87519 4.37344 5.66667 4.44714V4.33333Z" fill="black"/>
<path d="M10.3333 12.3333C10.5671 12.3333 10.7915 12.2932 11 12.2195V12.3333C11 13.0697 10.403 13.6667 9.66667 13.6667H7C6.26362 13.6667 5.66667 13.0697 5.66667 12.3333V12.2195C5.87519 12.2932 6.09958 12.3333 6.33333 12.3333H10.3333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 5C5.59695 5 5 5.59695 5 6.33333V10.3333C5 11.0697 5.59695 11.6667 6.33333 11.6667H10.3333C11.0697 11.6667 11.6667 11.0697 11.6667 10.3333V9C12.0349 9 12.3333 8.70152 12.3333 8.33333V7.66667C12.3333 7.29848 12.0349 7 11.6667 7V6.33333C11.6667 5.59695 11.0697 5 10.3333 5H6.33333Z" fill="black"/>
    </Svg>
  );
};
