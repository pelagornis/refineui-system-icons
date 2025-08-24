import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Moreverticial28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M16 7.33333C16 8.622 14.9553 9.66667 13.6667 9.66667C12.378 9.66667 11.3333 8.622 11.3333 7.33333C11.3333 6.04467 12.378 5 13.6667 5C14.9553 5 16 6.04467 16 7.33333Z" fill="black"/>
<path d="M16 14.3333C16 15.622 14.9553 16.6667 13.6667 16.6667C12.378 16.6667 11.3333 15.622 11.3333 14.3333C11.3333 13.0447 12.378 12 13.6667 12C14.9553 12 16 13.0447 16 14.3333Z" fill="black"/>
<path d="M16 21.3333C16 22.622 14.9553 23.6667 13.6667 23.6667C12.378 23.6667 11.3333 22.622 11.3333 21.3333C11.3333 20.0447 12.378 19 13.6667 19C14.9553 19 16 20.0447 16 21.3333Z" fill="black"/>
    </Svg>
  );
};
