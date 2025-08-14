import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pause28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.33333C5 6.04467 6.04467 5 7.33333 5H10.8333C12.122 5 13.1667 6.04467 13.1667 7.33333V21.3333C13.1667 22.622 12.122 23.6667 10.8333 23.6667H7.33333C6.04467 23.6667 5 22.622 5 21.3333V7.33333ZM6.51667 7.68333C6.51667 7.039 7.039 6.51667 7.68333 6.51667H10.4833C11.1277 6.51667 11.65 7.039 11.65 7.68333V20.9833C11.65 21.6277 11.1277 22.15 10.4833 22.15H7.68333C7.039 22.15 6.51667 21.6277 6.51667 20.9833V7.68333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7.33333C15.5 6.04467 16.5447 5 17.8333 5H21.3333C22.622 5 23.6667 6.04467 23.6667 7.33333V21.3333C23.6667 22.622 22.622 23.6667 21.3333 23.6667H17.8333C16.5447 23.6667 15.5 22.622 15.5 21.3333V7.33333ZM17.0167 7.68333C17.0167 7.039 17.539 6.51667 18.1833 6.51667H20.9833C21.6277 6.51667 22.15 7.039 22.15 7.68333V20.9833C22.15 21.6277 21.6277 22.15 20.9833 22.15H18.1833C17.539 22.15 17.0167 21.6277 17.0167 20.9833V7.68333Z" fill="black"/>
    </Svg>
  );
};
