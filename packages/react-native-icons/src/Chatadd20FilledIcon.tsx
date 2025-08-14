import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chatadd20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 9.66667C16.3333 13.3486 13.3486 16.3333 9.66667 16.3333H3.83333C3.3731 16.3333 3 15.9602 3 15.5V9.66667C3 5.98477 5.98477 3 9.66667 3C13.3486 3 16.3333 5.98477 16.3333 9.66667ZM10.2083 6.75C10.2083 6.45085 9.96582 6.20833 9.66667 6.20833C9.36751 6.20833 9.125 6.45085 9.125 6.75V9.125H6.75C6.45085 9.125 6.20833 9.36751 6.20833 9.66667C6.20833 9.96582 6.45085 10.2083 6.75 10.2083H9.125V12.5833C9.125 12.8825 9.36751 13.125 9.66667 13.125C9.96582 13.125 10.2083 12.8825 10.2083 12.5833V10.2083H12.5833C12.8825 10.2083 13.125 9.96582 13.125 9.66667C13.125 9.36751 12.8825 9.125 12.5833 9.125H10.2083V6.75Z" fill="black"/>
    </Svg>
  );
};
