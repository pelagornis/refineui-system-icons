import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pause16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.33333C3 3.59695 3.59695 3 4.33333 3H6.33333C7.06971 3 7.66667 3.59695 7.66667 4.33333V12.3333C7.66667 13.0697 7.06971 13.6667 6.33333 13.6667H4.33333C3.59695 13.6667 3 13.0697 3 12.3333V4.33333ZM3.86667 4.53333C3.86667 4.16514 4.16514 3.86667 4.53333 3.86667H6.13333C6.50152 3.86667 6.8 4.16514 6.8 4.53333V12.1333C6.8 12.5015 6.50152 12.8 6.13333 12.8H4.53333C4.16514 12.8 3.86667 12.5015 3.86667 12.1333V4.53333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 4.33333C9 3.59695 9.59695 3 10.3333 3H12.3333C13.0697 3 13.6667 3.59695 13.6667 4.33333V12.3333C13.6667 13.0697 13.0697 13.6667 12.3333 13.6667H10.3333C9.59695 13.6667 9 13.0697 9 12.3333V4.33333ZM9.86667 4.53333C9.86667 4.16514 10.1651 3.86667 10.5333 3.86667H12.1333C12.5015 3.86667 12.8 4.16514 12.8 4.53333V12.1333C12.8 12.5015 12.5015 12.8 12.1333 12.8H10.5333C10.1651 12.8 9.86667 12.5015 9.86667 12.1333V4.53333Z" fill="black"/>
    </Svg>
  );
};
