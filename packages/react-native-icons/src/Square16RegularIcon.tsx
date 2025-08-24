import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Square16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 3C3.59695 3 3 3.59695 3 4.33333V12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667H12.3333C13.0697 13.6667 13.6667 13.0697 13.6667 12.3333V4.33333C13.6667 3.59695 13.0697 3 12.3333 3H4.33333ZM12.3333 3.86667H4.33333C4.0756 3.86667 3.86667 4.0756 3.86667 4.33333V12.3333C3.86667 12.5911 4.0756 12.8 4.33333 12.8H12.3333C12.5911 12.8 12.8 12.5911 12.8 12.3333V4.33333C12.8 4.0756 12.5911 3.86667 12.3333 3.86667Z" fill="black"/>
    </Svg>
  );
};
