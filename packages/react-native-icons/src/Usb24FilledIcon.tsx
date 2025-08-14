import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Usb24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 8.07148V5.31989C9 4.75705 9.44772 4.30078 10 4.30078H14C14.5523 4.30078 15 4.75705 15 5.31989V8.07148C16.1046 8.07148 17 8.98402 17 10.1097V18.2626C17 19.3882 16.1046 20.3008 15 20.3008H9C7.89543 20.3008 7 19.3882 7 18.2626V10.1097C7 8.98402 7.89543 8.07148 9 8.07148ZM10.3 8.07148V5.62562H13.7V8.07148L10.3 8.07148Z" fill="black"/>
    </Svg>
  );
};
