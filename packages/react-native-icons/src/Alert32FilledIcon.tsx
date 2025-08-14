import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Alert32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M16.3333 5C20.5561 5 23.9793 8.58117 23.9793 12.9987V16.057C23.9793 16.4997 24.0847 16.9354 24.2859 17.3249L25.5116 19.697C25.9705 20.5853 25.3557 21.6641 24.3905 21.6641H8.27615C7.31099 21.6641 6.69615 20.5853 7.15505 19.697L8.38076 17.3249C8.58198 16.9354 8.68737 16.4997 8.68737 16.057V12.9987C8.68737 8.58117 12.1106 5 16.3333 5Z" fill="black"/>
<path d="M19.0366 25.1586C19.7536 24.4086 20.1563 23.3913 20.1563 22.3306H12.5103C12.5103 23.3913 12.9132 24.4086 13.6301 25.1586C14.347 25.9086 15.3194 26.33 16.3333 26.33C17.3473 26.33 18.3196 25.9086 19.0366 25.1586Z" fill="black"/>
    </Svg>
  );
};
