import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Squaremultiple28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M21.3333 6.51667H12C11.549 6.51667 11.1833 6.8823 11.1833 7.33333H9.66667C9.66667 6.04467 10.7113 5 12 5H21.3333C22.622 5 23.6667 6.04467 23.6667 7.33333V16.6667C23.6667 17.9553 22.622 19 21.3333 19V17.4833C21.7844 17.4833 22.15 17.1177 22.15 16.6667V7.33333C22.15 6.8823 21.7844 6.51667 21.3333 6.51667Z" fill="black"/>
<path d="M7.33333 8.5C6.04467 8.5 5 9.54467 5 10.8333V21.3333C5 22.622 6.04467 23.6667 7.33333 23.6667H17.8333C19.122 23.6667 20.1667 22.622 20.1667 21.3333V10.8333C20.1667 9.54467 19.122 8.5 17.8333 8.5H7.33333Z" fill="black"/>
    </Svg>
  );
};
