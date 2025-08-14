import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Comma20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.17714C6 4.87017 7.86306 3 10.1613 3C12.4529 3 14.312 4.85957 14.3225 7.15751C14.3934 8.78377 14.1327 11.0366 13.0575 12.9186C12.0468 14.6877 10.3321 16.0895 7.6637 16.3302C7.2059 16.3715 6.83225 15.9928 6.83225 15.5314C6.83225 15.07 7.20665 14.7023 7.66345 14.6511C9.66738 14.4262 10.8738 13.3823 11.6136 12.0874C11.8396 11.6918 12.0231 11.2697 12.1698 10.8363C11.5743 11.1664 10.8896 11.3543 10.1613 11.3543C7.86306 11.3543 6 9.48411 6 7.17714Z" fill="black"/>
    </Svg>
  );
};
