import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Laptop16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 4.66667C4.33333 4.29848 4.63181 4 5 4H11.6667C12.0349 4 12.3333 4.29848 12.3333 4.66667V9.33333C12.3333 9.70152 12.0349 10 11.6667 10H5C4.63181 10 4.33333 9.70152 4.33333 9.33333V4.66667ZM5.36667 9.13333C5.27462 9.13333 5.2 9.05871 5.2 8.96667V5.03333C5.2 4.94129 5.27462 4.86667 5.36667 4.86667H11.3C11.392 4.86667 11.4667 4.94129 11.4667 5.03333V8.96667C11.4667 9.05871 11.392 9.13333 11.3 9.13333H5.36667Z" fill="black"/>
<path d="M3.43333 10.6667C3.19401 10.6667 3 10.8607 3 11.1C3 11.3393 3.19401 11.5333 3.43333 11.5333H13.2333C13.4727 11.5333 13.6667 11.3393 13.6667 11.1C13.6667 10.8607 13.4727 10.6667 13.2333 10.6667H3.43333Z" fill="black"/>
    </Svg>
  );
};
