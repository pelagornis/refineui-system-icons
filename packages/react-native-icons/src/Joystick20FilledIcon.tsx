import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Joystick20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5417 8.94116C11.662 8.69369 12.5 7.69471 12.5 6.5C12.5 5.11929 11.3807 4 10 4C8.61929 4 7.5 5.11929 7.5 6.5C7.5 7.69471 8.33804 8.69369 9.45833 8.94116V11.0833H8.93617C8.143 11.0833 7.5 11.587 7.5 12.2083V12.6858H12.5V12.2083C12.5 11.587 11.857 11.0833 11.0638 11.0833H10.5417V8.94116Z" fill="black"/>
<path d="M5.83333 13.1667C5.3731 13.1667 5 13.5398 5 14V15.6667C5 16.1269 5.3731 16.5 5.83333 16.5H14.1667C14.6269 16.5 15 16.1269 15 15.6667V14C15 13.5398 14.6269 13.1667 14.1667 13.1667H5.83333Z" fill="black"/>
    </Svg>
  );
};
