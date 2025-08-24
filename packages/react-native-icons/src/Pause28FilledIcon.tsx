import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pause28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5 7.33333C5 6.04467 6.04467 5 7.33333 5H10.8333C12.122 5 13.1667 6.04467 13.1667 7.33333V21.3333C13.1667 22.622 12.122 23.6667 10.8333 23.6667H7.33333C6.04467 23.6667 5 22.622 5 21.3333V7.33333Z" fill="black"/>
<path d="M15.5 7.33333C15.5 6.04467 16.5447 5 17.8333 5H21.3333C22.622 5 23.6667 6.04467 23.6667 7.33333V21.3333C23.6667 22.622 22.622 23.6667 21.3333 23.6667H17.8333C16.5447 23.6667 15.5 22.622 15.5 21.3333V7.33333Z" fill="black"/>
    </Svg>
  );
};
