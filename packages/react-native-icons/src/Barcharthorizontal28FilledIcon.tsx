import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Barcharthorizontal28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 5C6.04467 5 5 6.04467 5 7.33333C5 8.622 6.04467 9.66667 7.33333 9.66667H13.1667C14.4553 9.66667 15.5 8.622 15.5 7.33333C15.5 6.04467 14.4553 5 13.1667 5H7.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 12C6.04467 12 5 13.0447 5 14.3333C5 15.622 6.04467 16.6667 7.33333 16.6667H16.6667C17.9553 16.6667 19 15.622 19 14.3333C19 13.0447 17.9553 12 16.6667 12H7.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 21.3333C5 20.0447 6.04467 19 7.33333 19H21.3333C22.622 19 23.6667 20.0447 23.6667 21.3333C23.6667 22.622 22.622 23.6667 21.3333 23.6667H7.33333C6.04467 23.6667 5 22.622 5 21.3333Z" fill="black"/>
    </Svg>
  );
};
