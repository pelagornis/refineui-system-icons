import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Laptop16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5 4C4.6318 4 4.33333 4.29847 4.33333 4.66667V9.33333C4.33333 9.70153 4.6318 10 5 10H11.6667C12.0349 10 12.3333 9.70153 12.3333 9.33333V4.66667C12.3333 4.29847 12.0349 4 11.6667 4H5Z" fill="black"/>
<path d="M3.43335 10.6667C3.19401 10.6667 3 10.8607 3 11.1C3 11.3393 3.19401 11.5333 3.43335 11.5333H13.2333C13.4727 11.5333 13.6667 11.3393 13.6667 11.1C13.6667 10.8607 13.4727 10.6667 13.2333 10.6667H3.43335Z" fill="black"/>
    </Svg>
  );
};
