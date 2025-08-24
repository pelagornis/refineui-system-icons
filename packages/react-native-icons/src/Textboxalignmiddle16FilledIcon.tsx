import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddle16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.33333 3C2.59695 3 2 3.59695 2 4.33333V12.3333C2 13.0697 2.59695 13.6667 3.33333 13.6667H11.3333C12.0697 13.6667 12.6667 13.0697 12.6667 12.3333V4.33333C12.6667 3.59695 12.0697 3 11.3333 3H3.33333ZM4.5 6.73333C4.26068 6.73333 4.06667 6.92734 4.06667 7.16667C4.06667 7.40599 4.26068 7.6 4.5 7.6H10.1667C10.406 7.6 10.6 7.40599 10.6 7.16667C10.6 6.92734 10.406 6.73333 10.1667 6.73333H4.5ZM4.5 9.06667C4.26068 9.06667 4.06667 9.26068 4.06667 9.5C4.06667 9.73932 4.26068 9.93333 4.5 9.93333H10.1667C10.406 9.93333 10.6 9.73932 10.6 9.5C10.6 9.26068 10.406 9.06667 10.1667 9.06667H4.5Z" fill="black"/>
    </Svg>
  );
};
