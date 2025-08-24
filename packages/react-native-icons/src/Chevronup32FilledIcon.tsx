import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronup32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.27566 21.4751C6.75501 21.9956 5.91108 21.9956 5.39043 21.4751C4.86989 20.9546 4.86982 20.1108 5.39043 19.5903L14.5002 10.4828C15.1446 9.83905 16.1888 9.83911 16.8333 10.4828L25.9431 19.5903L26.0342 19.6918C26.4613 20.2154 26.4312 20.9871 25.9431 21.4751C25.455 21.9631 24.683 21.9932 24.1594 21.5662L24.0578 21.4751L15.6667 13.086L7.27566 21.4751Z" fill="black"/>
    </Svg>
  );
};
