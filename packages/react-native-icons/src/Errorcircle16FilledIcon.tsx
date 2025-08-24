import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Errorcircle16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.6667C11.2789 13.6667 13.6667 11.2789 13.6667 8.33333C13.6667 5.38781 11.2789 3 8.33333 3C5.38781 3 3 5.38781 3 8.33333C3 11.2789 5.38781 13.6667 8.33333 13.6667ZM8.76667 5.66667C8.76667 5.42734 8.57266 5.23333 8.33333 5.23333C8.09401 5.23333 7.9 5.42734 7.9 5.66667V9.33333C7.9 9.57266 8.09401 9.76667 8.33333 9.76667C8.57266 9.76667 8.76667 9.57266 8.76667 9.33333V5.66667ZM8.33332 11.2C8.57264 11.2 8.76665 11.006 8.76665 10.7667C8.76665 10.5273 8.57264 10.3333 8.33332 10.3333C8.09399 10.3333 7.89998 10.5273 7.89998 10.7667C7.89998 11.006 8.09399 11.2 8.33332 11.2Z" fill="black"/>
    </Svg>
  );
};
