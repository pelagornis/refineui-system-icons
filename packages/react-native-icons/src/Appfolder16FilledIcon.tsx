import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Appfolder16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 4.66667C4.96514 4.66667 4.66667 4.96514 4.66667 5.33333V7.33333C4.66667 7.70152 4.96514 8 5.33333 8H7.33333C7.70152 8 8 7.70152 8 7.33333V5.33333C8 4.96514 7.70152 4.66667 7.33333 4.66667H5.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 9.33333C4.66667 8.96514 4.96514 8.66667 5.33333 8.66667H7.33333C7.70152 8.66667 8 8.96514 8 9.33333V11.3333C8 11.7015 7.70152 12 7.33333 12H5.33333C4.96514 12 4.66667 11.7015 4.66667 11.3333V9.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.33333 8.66667C8.96514 8.66667 8.66667 8.96514 8.66667 9.33333V11.3333C8.66667 11.7015 8.96514 12 9.33333 12H11.3333C11.7015 12 12 11.7015 12 11.3333V9.33333C12 8.96514 11.7015 8.66667 11.3333 8.66667H9.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.66667 5.33333C8.66667 4.96514 8.96514 4.66667 9.33333 4.66667H11.3333C11.7015 4.66667 12 4.96514 12 5.33333V7.33333C12 7.70152 11.7015 8 11.3333 8H9.33333C8.96514 8 8.66667 7.70152 8.66667 7.33333V5.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 3C3.59695 3 3 3.59695 3 4.33333V12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667H12.3333C13.0697 13.6667 13.6667 13.0697 13.6667 12.3333V4.33333C13.6667 3.59695 13.0697 3 12.3333 3H4.33333ZM12.3333 3.86667H4.33333C4.0756 3.86667 3.86667 4.0756 3.86667 4.33333V12.3333C3.86667 12.5911 4.0756 12.8 4.33333 12.8H12.3333C12.5911 12.8 12.8 12.5911 12.8 12.3333V4.33333C12.8 4.0756 12.5911 3.86667 12.3333 3.86667Z" fill="black"/>
    </Svg>
  );
};
