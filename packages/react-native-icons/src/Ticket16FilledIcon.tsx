import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ticket16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 5.66667C13.6667 5.29848 13.3682 5 13 5H3.66667C3.29848 5 3 5.29848 3 5.66667V7C3.73638 7 4.33333 7.59695 4.33333 8.33333C4.33333 9.06971 3.73638 9.66667 3 9.66667V11C3 11.3682 3.29848 11.6667 3.66667 11.6667H13C13.3682 11.6667 13.6667 11.3682 13.6667 11V9.66667C12.9303 9.66667 12.3333 9.06971 12.3333 8.33333C12.3333 7.59695 12.9303 7 13.6667 7V5.66667Z" fill="black"/>
    </Svg>
  );
};
