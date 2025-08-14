import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Subtract28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5 13.7583C5 13.3395 5.314 13 5.70135 13H22.9653C23.3527 13 23.6667 13.3395 23.6667 13.7583C23.6667 14.1771 23.3527 14.5167 22.9653 14.5167H5.70135C5.314 14.5167 5 14.1771 5 13.7583Z" fill="black"/>
    </Svg>
  );
};
