import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Important28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2492 7.46821C17.2492 9.38365 15.6264 17.8728 13.6246 17.8728C11.6228 17.8728 10 9.38365 10 7.46821C10 5.55277 11.6228 4 13.6246 4C15.6264 4 17.2492 5.55277 17.2492 7.46821Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6246 18.1478C12.192 18.1478 11.027 19.3067 11.027 20.7406C11.027 22.1745 12.192 23.3333 13.6246 23.3333C15.0572 23.3333 16.2222 22.1745 16.2222 20.7406C16.2222 19.3067 15.0572 18.1478 13.6246 18.1478Z" fill="black"/>
    </Svg>
  );
};
