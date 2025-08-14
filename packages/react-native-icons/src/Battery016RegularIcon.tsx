import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Battery016RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.33333C3 5.59695 3.59695 5 4.33333 5H11.3468C12.0832 5 12.6802 5.59695 12.6802 6.33333V6.95719C13.225 6.95719 13.6667 7.39886 13.6667 7.9437V8.72297C13.6667 9.2678 13.225 9.70948 12.6802 9.70948V10.3333C12.6802 11.0697 12.0832 11.6667 11.3468 11.6667H4.33333C3.59695 11.6667 3 11.0697 3 10.3333V6.33333ZM4.46821 5.79511C4.10002 5.79511 3.80154 6.09358 3.80154 6.46177V10.2049C3.80154 10.5731 4.10002 10.8716 4.46821 10.8716H11.2119C11.5801 10.8716 11.8786 10.5731 11.8786 10.2049V6.46177C11.8786 6.09358 11.5801 5.79511 11.2119 5.79511H4.46821Z" fill="black"/>
    </Svg>
  );
};
