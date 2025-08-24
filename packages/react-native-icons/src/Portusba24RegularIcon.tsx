import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Portusba24RegularIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C4.89543 8 4 8.89543 4 10V13C4 14.1046 4.89543 15 6 15H18C19.1046 15 20 14.1046 20 13V10C20 8.89543 19.1046 8 18 8H6ZM5.75 9C5.47386 9 5.25 9.22386 5.25 9.5V11.5H18.75V9.5C18.75 9.22386 18.5261 9 18.25 9H5.75Z" fill="black"/>
    </Svg>
  );
};
