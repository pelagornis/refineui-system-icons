import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardoption28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.16657 8C5.52229 8 5 8.52228 5 9.16655C5 9.81081 5.52229 10.3331 6.16657 10.3331H10.9697C11.193 10.3331 11.3967 10.4606 11.4943 10.6614L15.5527 19.0101C15.7479 19.4117 16.1553 19.6667 16.6019 19.6667H22.5001C23.1444 19.6667 23.6667 19.1444 23.6667 18.5001C23.6667 17.8559 23.1444 17.3336 22.5001 17.3336H17.6969C17.4736 17.3336 17.2699 17.2061 17.1723 17.0053L13.114 8.65656C12.9187 8.25493 12.5114 8 12.0648 8H6.16657Z" fill="black"/>
<path d="M15.9667 8C15.3224 8 14.8001 8.52228 14.8001 9.16655C14.8001 9.81081 15.3224 10.3331 15.9667 10.3331H22.5001C23.1444 10.3331 23.6666 9.81081 23.6666 9.16655C23.6666 8.52228 23.1444 8 22.5001 8H15.9667Z" fill="black"/>
    </Svg>
  );
};
