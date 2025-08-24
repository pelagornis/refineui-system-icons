import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Moreverticial16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M9 4.16667C9 4.81098 8.47767 5.3333 7.83333 5.33333C7.18897 5.33333 6.66667 4.811 6.66667 4.16667C6.66667 3.52233 7.18897 3 7.83333 3C8.47767 3.00003 9 3.52235 9 4.16667Z" fill="black"/>
<path d="M9 8.16667C9 8.81098 8.47767 9.3333 7.83333 9.33333C7.18897 9.33333 6.66667 8.811 6.66667 8.16667C6.66667 7.52233 7.18897 7 7.83333 7C8.47767 7.00003 9 7.52235 9 8.16667Z" fill="black"/>
<path d="M9 12.1667C9 12.811 8.47767 13.3333 7.83333 13.3333C7.18897 13.3333 6.66667 12.811 6.66667 12.1667C6.66667 11.5223 7.18897 11 7.83333 11C8.47767 11 9 11.5224 9 12.1667Z" fill="black"/>
    </Svg>
  );
};
