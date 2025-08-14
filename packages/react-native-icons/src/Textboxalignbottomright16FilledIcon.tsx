import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottomright16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 3C3.59695 3 3 3.59695 3 4.33333V12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667H12.3333C13.0697 13.6667 13.6667 13.0697 13.6667 12.3333V4.33333C13.6667 3.59695 13.0697 3 12.3333 3H4.33333ZM6.9 10.6667C6.9 10.4273 7.09401 10.2333 7.33333 10.2333H11.3333C11.5727 10.2333 11.7667 10.4273 11.7667 10.6667C11.7667 10.906 11.5727 11.1 11.3333 11.1H7.33333C7.09401 11.1 6.9 10.906 6.9 10.6667ZM5.23333 8.33333C5.23333 8.09401 5.42734 7.9 5.66667 7.9H11.3333C11.5727 7.9 11.7667 8.09401 11.7667 8.33333C11.7667 8.57266 11.5727 8.76667 11.3333 8.76667H5.66667C5.42734 8.76667 5.23333 8.57266 5.23333 8.33333Z" fill="black"/>
    </Svg>
  );
};
