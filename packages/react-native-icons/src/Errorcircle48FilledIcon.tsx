import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Errorcircle48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM25.3 16C25.3 15.282 24.718 14.7 24 14.7C23.282 14.7 22.7 15.282 22.7 16V27C22.7 27.718 23.282 28.3 24 28.3C24.718 28.3 25.3 27.718 25.3 27V16ZM24 32.6C24.7179 32.6 25.3 32.018 25.3 31.3C25.3 30.582 24.7179 30 24 30C23.282 30 22.7 30.582 22.7 31.3C22.7 32.018 23.282 32.6 24 32.6Z" fill="black"/>
    </Svg>
  );
};
