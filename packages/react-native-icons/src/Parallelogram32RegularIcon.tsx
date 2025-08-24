import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Parallelogram32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6205 9.22152C10.9557 8.48183 11.7418 8 12.6135 8H24.172C25.7127 8 26.7576 9.44094 26.165 10.7484L20.7128 22.7785C20.3776 23.5182 19.5915 24 18.7199 24H7.1613C5.62064 24 4.57577 22.5591 5.16833 21.2516L10.6205 9.22152ZM12.6135 9.56391C12.4286 9.56391 12.2618 9.66612 12.1907 9.82302L6.73855 21.8531C6.61285 22.1304 6.83449 22.4361 7.1613 22.4361H18.7199C18.9048 22.4361 19.0715 22.3339 19.1426 22.177L24.5948 10.1469C24.7205 9.86956 24.4988 9.56391 24.172 9.56391H12.6135Z" fill="black"/>
    </Svg>
  );
};
