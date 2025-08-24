import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toggleleft16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 5C4.49238 5 3 6.49238 3 8.33333C3 10.1743 4.49238 11.6667 6.33333 11.6667H10.3333C12.1743 11.6667 13.6667 10.1743 13.6667 8.33333C13.6667 6.49238 12.1743 5 10.3333 5H6.33333ZM8.33333 8.33333C8.33333 9.4379 7.4379 10.3333 6.33333 10.3333C5.22876 10.3333 4.33333 9.4379 4.33333 8.33333C4.33333 7.22876 5.22876 6.33333 6.33333 6.33333C7.4379 6.33333 8.33333 7.22876 8.33333 8.33333Z" fill="black"/>
    </Svg>
  );
};
