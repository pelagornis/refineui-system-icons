import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignright28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.66667 9.167C9.66667 8.52248 10.189 8 10.8333 8H21.3333C21.9777 8 22.5 8.52248 22.5 9.167C22.5 9.81152 21.9777 10.334 21.3333 10.334H10.8333C10.189 10.334 9.66667 9.81152 9.66667 9.167Z" fill="black"/>
<path d="M5 13.835C5 13.1905 5.52233 12.668 6.16667 12.668H21.3333C21.9777 12.668 22.5 13.1905 22.5 13.835C22.5 14.4795 21.9777 15.002 21.3333 15.002H6.16667C5.52233 15.002 5 14.4795 5 13.835Z" fill="black"/>
<path d="M15.5 17.336C14.8557 17.336 14.3333 17.8585 14.3333 18.503C14.3333 19.1475 14.8557 19.67 15.5 19.67H21.3333C21.9777 19.67 22.5 19.1475 22.5 18.503C22.5 17.8585 21.9777 17.336 21.3333 17.336H15.5Z" fill="black"/>
    </Svg>
  );
};
