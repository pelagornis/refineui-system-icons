import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapes32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10.3333 13V19.3906C7.25533 18.5201 5 15.6901 5 12.3333C5 8.28325 8.28325 5 12.3333 5C15.6901 5 18.5201 7.25533 19.3906 10.3333H13C11.5272 10.3333 10.3333 11.5272 10.3333 13Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 14.3333C11.6667 12.8606 12.8606 11.6667 14.3333 11.6667H23.6667C25.1394 11.6667 26.3333 12.8606 26.3333 14.3333V23.6667C26.3333 25.1394 25.1394 26.3333 23.6667 26.3333H14.3333C12.8606 26.3333 11.6667 25.1394 11.6667 23.6667V14.3333Z" fill="black"/>
    </Svg>
  );
};
