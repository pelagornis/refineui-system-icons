import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Errorcircle20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.66667 5.79167C9.96582 5.79167 10.2083 6.03418 10.2083 6.33333V10.9167C10.2083 11.2158 9.96582 11.4583 9.66667 11.4583C9.36751 11.4583 9.125 11.2158 9.125 10.9167V6.33333C9.125 6.03418 9.36751 5.79167 9.66667 5.79167Z" fill="black"/>
<path d="M9.66665 13.25C9.9658 13.25 10.2083 13.0075 10.2083 12.7083C10.2083 12.4092 9.9658 12.1667 9.66665 12.1667C9.36749 12.1667 9.12498 12.4092 9.12498 12.7083C9.12498 13.0075 9.36749 13.25 9.66665 13.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 16.3333C13.3486 16.3333 16.3333 13.3486 16.3333 9.66667C16.3333 5.98477 13.3486 3 9.66667 3C5.98477 3 3 5.98477 3 9.66667C3 13.3486 5.98477 16.3333 9.66667 16.3333ZM9.66667 15.25C12.7503 15.25 15.25 12.7503 15.25 9.66667C15.25 6.58308 12.7503 4.08333 9.66667 4.08333C6.58308 4.08333 4.08333 6.58308 4.08333 9.66667C4.08333 12.7503 6.58308 15.25 9.66667 15.25Z" fill="black"/>
    </Svg>
  );
};
