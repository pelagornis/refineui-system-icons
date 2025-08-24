import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Portusbc32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 12C8.79086 12 7 13.7909 7 16C7 18.2091 8.79086 20 11 20H21.6667C23.8758 20 25.6667 18.2091 25.6667 16C25.6667 13.7909 23.8758 12 21.6667 12H11Z" fill="black"/>
    </Svg>
  );
};
