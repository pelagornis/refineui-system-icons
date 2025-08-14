import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ticket48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 16C40 14.8954 39.1046 14 38 14H10C8.89543 14 8 14.8954 8 16V20C10.2091 20 12 21.7909 12 24C12 26.2091 10.2091 28 8 28V32C8 33.1046 8.89543 34 10 34H38C39.1046 34 40 33.1046 40 32V28C37.7909 28 36 26.2091 36 24C36 21.7909 37.7909 20 40 20V16ZM10.6 16.6V17.9319C12.9523 18.9411 14.6 21.2781 14.6 24C14.6 26.7219 12.9523 29.0589 10.6 30.0681V31.4H37.4V30.0681C35.0477 29.0589 33.4 26.7219 33.4 24C33.4 21.2781 35.0477 18.9411 37.4 17.9319V16.6H10.6Z" fill="black"/>
    </Svg>
  );
};
