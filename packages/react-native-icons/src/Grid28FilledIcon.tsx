import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Grid28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.33333C5 6.04467 6.04467 5 7.33333 5H10.8333C12.122 5 13.1667 6.04467 13.1667 7.33333V10.8333C13.1667 12.122 12.122 13.1667 10.8333 13.1667H7.33333C6.04467 13.1667 5 12.122 5 10.8333V7.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 17.8333C15.5 16.5447 16.5447 15.5 17.8333 15.5H21.3333C22.622 15.5 23.6667 16.5447 23.6667 17.8333V21.3333C23.6667 22.622 22.622 23.6667 21.3333 23.6667H17.8333C16.5447 23.6667 15.5 22.622 15.5 21.3333V17.8333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 15.5C6.04467 15.5 5 16.5447 5 17.8333V21.3333C5 22.622 6.04467 23.6667 7.33333 23.6667H10.8333C12.122 23.6667 13.1667 22.622 13.1667 21.3333V17.8333C13.1667 16.5447 12.122 15.5 10.8333 15.5H7.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7.33333C15.5 6.04467 16.5447 5 17.8333 5H21.3333C22.622 5 23.6667 6.04467 23.6667 7.33333V10.8333C23.6667 12.122 22.622 13.1667 21.3333 13.1667H17.8333C16.5447 13.1667 15.5 12.122 15.5 10.8333V7.33333Z" fill="black"/>
    </Svg>
  );
};
