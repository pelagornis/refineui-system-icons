import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardshift16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.90543 3.25284C8.59947 2.91572 8.0672 2.91572 7.76124 3.25284L3.28763 8.1821C2.63787 8.89803 3.16485 10.0144 4.11093 10.0144H5.5405V12.5718C5.5405 13.184 6.04217 13.6698 6.64799 13.6698H10.0187C10.6245 13.6698 11.1262 13.184 11.1262 12.5718V10.0144H12.5557C13.5018 10.0144 14.0288 8.89803 13.379 8.18209L8.90543 3.25284Z" fill="black"/>
    </Svg>
  );
};
