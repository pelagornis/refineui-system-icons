import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ruler16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 3C5.59695 3 5 3.59695 5 4.33333V12.3333C5 13.0697 5.59695 13.6667 6.33333 13.6667H9C9.73638 13.6667 10.3333 13.0697 10.3333 12.3333V4.33333C10.3333 3.59695 9.73638 3 9 3H6.33333ZM5.86667 5.6H7C7.23932 5.6 7.43333 5.40599 7.43333 5.16667C7.43333 4.92734 7.23932 4.73333 7 4.73333H5.86667V5.6ZM7.66667 7.26667H5.86667V6.4H7.66667C7.90599 6.4 8.1 6.59401 8.1 6.83333C8.1 7.07266 7.90599 7.26667 7.66667 7.26667ZM5.86667 8.93333H7C7.23932 8.93333 7.43333 8.73932 7.43333 8.5C7.43333 8.26068 7.23932 8.06667 7 8.06667H5.86667V8.93333ZM7.66667 10.6H5.86667V9.73333H7.66667C7.90599 9.73333 8.1 9.92734 8.1 10.1667C8.1 10.406 7.90599 10.6 7.66667 10.6ZM5.86667 12.2667H7C7.23932 12.2667 7.43333 12.0727 7.43333 11.8333C7.43333 11.594 7.23932 11.4 7 11.4H5.86667V12.2667Z" fill="black"/>
    </Svg>
  );
};
