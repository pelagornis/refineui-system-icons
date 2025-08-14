import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Subtract28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 14.1667C5 13.5223 5.52233 13 6.16667 13H22.5C23.1443 13 23.6667 13.5223 23.6667 14.1667C23.6667 14.811 23.1443 15.3333 22.5 15.3333H6.16667C5.52233 15.3333 5 14.811 5 14.1667Z" fill="black"/>
    </Svg>
  );
};
