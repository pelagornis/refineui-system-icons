import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Battery8048FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 18C8 15.7909 9.79086 14 12 14H33.0405C35.2496 14 37.0405 15.7909 37.0405 18V19.8716C38.675 19.8716 40 21.1966 40 22.8311V25.1689C40 26.8034 38.675 28.1284 37.0405 28.1284V30C37.0405 32.2091 35.2496 34 33.0405 34H12C9.79086 34 8 32.2091 8 30V18ZM14 18C12.8954 18 12 18.8954 12 20V28C12 29.1046 12.8954 30 14 30H27.2C28.3046 30 29.2 29.1046 29.2 28V20C29.2 18.8954 28.3046 18 27.2 18H14Z" fill="black"/>
    </Svg>
  );
};
