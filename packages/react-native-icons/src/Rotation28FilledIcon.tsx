import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rotation28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.16678 4C5.81117 4 6.33356 4.52239 6.33356 5.16678V12.1804C7.74775 12.2885 9.44695 12.7335 10.9419 13.7819C12.7634 15.0594 14.1751 17.1604 14.4522 20.3364H21.5032C22.1476 20.3364 22.67 20.8588 22.67 21.5032C22.67 22.1476 22.1476 22.67 21.5032 22.67H6.33356C5.04477 22.67 4 21.6252 4 20.3364V5.16678C4 4.52239 4.52239 4 5.16678 4ZM12.1081 20.3364C11.8493 17.93 10.7892 16.5251 9.60196 15.6925C8.56667 14.9664 7.36139 14.6264 6.33356 14.5226V20.3364H12.1081Z" fill="black"/>
    </Svg>
  );
};
