import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Oval48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C13.3726 12 8 17.3726 8 24C8 30.6274 13.3726 36 20 36H28C34.6274 36 40 30.6274 40 24C40 17.3726 34.6274 12 28 12H20ZM28 14.6H20C14.8085 14.6 10.6 18.8085 10.6 24C10.6 29.1915 14.8085 33.4 20 33.4H28C33.1915 33.4 37.4 29.1915 37.4 24C37.4 18.8085 33.1915 14.6 28 14.6Z" fill="black"/>
    </Svg>
  );
};
