import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Parallelogram32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6205 9.22152C10.9557 8.48183 11.7418 8 12.6135 8H24.172C25.7127 8 26.7576 9.44094 26.165 10.7484L20.7128 22.7785C20.3776 23.5182 19.5915 24 18.7199 24H7.1613C5.62064 24 4.57577 22.5591 5.16833 21.2516L10.6205 9.22152Z" fill="black"/>
    </Svg>
  );
};
