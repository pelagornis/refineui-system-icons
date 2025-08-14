import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle548FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM22.2 16.7C21.0513 16.7 19.7 17.5179 19.7 19V22C19.7 23.4821 21.0513 24.3 22.2 24.3H25.7V28.7H21C20.282 28.7 19.7 29.282 19.7 30C19.7 30.718 20.282 31.3 21 31.3H25.8C26.9487 31.3 28.3 30.4821 28.3 29V24C28.3 22.5179 26.9487 21.7 25.8 21.7H22.3V19.3H27C27.718 19.3 28.3 18.718 28.3 18C28.3 17.282 27.718 16.7 27 16.7H22.2Z" fill="black"/>
    </Svg>
  );
};
