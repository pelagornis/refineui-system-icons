import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Payment16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5.43333 9.13333C5.19401 9.13333 5 9.32734 5 9.56666C5 9.80599 5.19401 10 5.43333 10H6.56667C6.80599 10 7 9.80599 7 9.56666C7 9.32734 6.80599 9.13333 6.56667 9.13333H5.43333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 4C3.59695 4 3 4.59695 3 5.33333V10.6667C3 11.403 3.59695 12 4.33333 12H12.3333C13.0697 12 13.6667 11.403 13.6667 10.6667V5.33333C13.6667 4.59695 13.0697 4 12.3333 4H4.33333ZM12.3333 4.86667H4.33333C4.0756 4.86667 3.86667 5.0756 3.86667 5.33333V6.23333H12.8V5.33333C12.8 5.0756 12.5911 4.86667 12.3333 4.86667ZM3.86667 10.6667V7.1H12.8V10.6667C12.8 10.9244 12.5911 11.1333 12.3333 11.1333H4.33333C4.0756 11.1333 3.86667 10.9244 3.86667 10.6667Z" fill="black"/>
    </Svg>
  );
};
