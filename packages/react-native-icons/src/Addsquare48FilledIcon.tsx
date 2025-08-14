import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Addsquare48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C10.6863 8 8 10.6863 8 14V34C8 37.3137 10.6863 40 14 40H34C37.3137 40 40 37.3137 40 34V14C40 10.6863 37.3137 8 34 8H14ZM17 25C16.4477 25 16 24.5523 16 24C16 23.4477 16.4477 23 17 23H23V17C23 16.4477 23.4477 16 24 16C24.5523 16 25 16.4477 25 17V23H31C31.5523 23 32 23.4477 32 24C32 24.5523 31.5523 25 31 25H25V31C25 31.5523 24.5523 32 24 32C23.4477 32 23 31.5523 23 31V25H17Z" fill="black"/>
    </Svg>
  );
};
