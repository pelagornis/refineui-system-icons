import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pausecircle48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM21.3 18C21.3 17.282 20.718 16.7 20 16.7C19.282 16.7 18.7 17.282 18.7 18V30C18.7 30.718 19.282 31.3 20 31.3C20.718 31.3 21.3 30.718 21.3 30V18ZM29.3 18C29.3 17.282 28.718 16.7 28 16.7C27.282 16.7 26.7 17.282 26.7 18V30C26.7 30.718 27.282 31.3 28 31.3C28.718 31.3 29.3 30.718 29.3 30V18Z" fill="black"/>
    </Svg>
  );
};
