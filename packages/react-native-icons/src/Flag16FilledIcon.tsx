import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Flag16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.86687 11.3896C3.86687 11.2054 4.01614 11.0562 4.20028 11.0562H12.5282C13.4024 11.0562 14.0252 10.0794 13.4348 9.31894L11.7485 7.1467C11.692 7.07392 11.692 6.98224 11.7485 6.90946L13.4348 4.73721C14.0252 3.97675 13.4024 3 12.5282 3H4.13109C3.53349 3 3 3.46045 3 4.08701V13.237C3 13.4764 3.19406 13.6704 3.43343 13.6704C3.67281 13.6704 3.86687 13.4764 3.86687 13.237V11.3896Z" fill="black"/>
    </Svg>
  );
};
