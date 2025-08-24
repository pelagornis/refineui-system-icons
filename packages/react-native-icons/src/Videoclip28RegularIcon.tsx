import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Videoclip28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M17.5712 13.7427C17.9207 13.9174 17.9207 14.416 17.5712 14.5907L11.5195 17.616C11.2043 17.7736 10.8333 17.5444 10.8333 17.192V11.1413C10.8333 10.7889 11.2043 10.5597 11.5195 10.7173L17.5712 13.7427Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.33333C5 7.04467 6.04469 6 7.33333 6H21.3333C22.622 6 23.6667 7.04467 23.6667 8.33333V20C23.6667 21.2887 22.622 22.3333 21.3333 22.3333H7.33333C6.04469 22.3333 5 21.2887 5 20V8.33333ZM7.33333 7.51667H21.3333C21.7844 7.51667 22.15 7.8823 22.15 8.33333V20C22.15 20.451 21.7844 20.8167 21.3333 20.8167H7.33333C6.8823 20.8167 6.51665 20.451 6.51665 20V8.33333C6.51665 7.8823 6.8823 7.51667 7.33333 7.51667Z" fill="black"/>
    </Svg>
  );
};
