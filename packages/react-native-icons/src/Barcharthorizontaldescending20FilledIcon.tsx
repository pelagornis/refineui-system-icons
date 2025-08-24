import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Barcharthorizontaldescending20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 16.3333C3.74619 16.3333 3 15.5871 3 14.6667C3 13.7462 3.74619 13 4.66667 13H8.83333C9.75381 13 10.5 13.7462 10.5 14.6667C10.5 15.5871 9.75381 16.3333 8.83333 16.3333H4.66667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 11.3333C3.74619 11.3333 3 10.5871 3 9.66667C3 8.74619 3.74619 8 4.66667 8H11.3333C12.2538 8 13 8.74619 13 9.66667C13 10.5871 12.2538 11.3333 11.3333 11.3333L4.66667 11.3333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.66667C3 5.58714 3.74619 6.33333 4.66667 6.33333L14.6667 6.33333C15.5871 6.33333 16.3333 5.58714 16.3333 4.66667C16.3333 3.74619 15.5871 3 14.6667 3L4.66667 3C3.74619 3 3 3.74619 3 4.66667Z" fill="black"/>
    </Svg>
  );
};
