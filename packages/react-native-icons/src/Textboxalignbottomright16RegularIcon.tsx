import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottomright16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5.23333 8.33333C5.23333 8.09401 5.42734 7.9 5.66667 7.9H11.3333C11.5727 7.9 11.7667 8.09401 11.7667 8.33333C11.7667 8.57266 11.5727 8.76667 11.3333 8.76667H5.66667C5.42734 8.76667 5.23333 8.57266 5.23333 8.33333Z" fill="black"/>
<path d="M7.33333 10.2333C7.09401 10.2333 6.9 10.4273 6.9 10.6667C6.9 10.906 7.09401 11.1 7.33333 11.1H11.3333C11.5727 11.1 11.7667 10.906 11.7667 10.6667C11.7667 10.4273 11.5727 10.2333 11.3333 10.2333H7.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 3C3.59695 3 3 3.59695 3 4.33333V12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667H12.3333C13.0697 13.6667 13.6667 13.0697 13.6667 12.3333V4.33333C13.6667 3.59695 13.0697 3 12.3333 3H4.33333ZM12.3333 3.86667H4.33333C4.0756 3.86667 3.86667 4.0756 3.86667 4.33333V12.3333C3.86667 12.5911 4.0756 12.8 4.33333 12.8H12.3333C12.5911 12.8 12.8 12.5911 12.8 12.3333V4.33333C12.8 4.0756 12.5911 3.86667 12.3333 3.86667Z" fill="black"/>
    </Svg>
  );
};
