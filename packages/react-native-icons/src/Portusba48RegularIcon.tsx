import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Portusba48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 17C9.79086 17 8 18.7909 8 21V27C8 29.2091 9.79086 31 12 31H36C38.2091 31 40 29.2091 40 27V21C40 18.7909 38.2091 17 36 17H12ZM11.5 19C10.9477 19 10.5 19.4477 10.5 20V24H37.5V20C37.5 19.4477 37.0523 19 36.5 19H11.5Z" fill="black"/>
    </Svg>
  );
};
