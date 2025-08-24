import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Subtract32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5 16.3913C5 15.6229 5.59695 15 6.33333 15H25C25.7364 15 26.3333 15.6229 26.3333 16.3913C26.3333 17.1597 25.7364 17.7826 25 17.7826H6.33333C5.59695 17.7826 5 17.1597 5 16.3913Z" fill="black"/>
    </Svg>
  );
};
