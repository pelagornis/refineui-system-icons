import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Tablet16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 3C3.59695 3 3 3.59695 3 4.33333V12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667H11C11.7364 13.6667 12.3333 13.0697 12.3333 12.3333V4.33333C12.3333 3.59695 11.7364 3 11 3H4.33333ZM5.66667 11.2333C5.42734 11.2333 5.23333 11.4273 5.23333 11.6667C5.23333 11.906 5.42734 12.1 5.66667 12.1H9.66667C9.90599 12.1 10.1 11.906 10.1 11.6667C10.1 11.4273 9.90599 11.2333 9.66667 11.2333H5.66667Z" fill="black"/>
    </Svg>
  );
};
