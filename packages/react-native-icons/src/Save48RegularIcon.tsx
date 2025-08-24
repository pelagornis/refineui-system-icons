import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Save48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3431 8C30.6683 8 30.9894 8.0396 31.3 8.11612C32.0026 8.28924 32.6514 8.65137 33.1716 9.17157L38.8284 14.8284C39.5786 15.5786 40 16.596 40 17.6569V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V12C8 9.79086 9.79086 8 12 8H30.3431ZM15.7 14V10.6H12C11.2268 10.6 10.6 11.2268 10.6 12V36C10.6 36.7732 11.2268 37.4 12 37.4H12.7V29C12.7 26.0729 15.0729 23.7 18 23.7H30C32.9271 23.7 35.3 26.0729 35.3 29V37.4H36C36.7732 37.4 37.4 36.7732 37.4 36V17.6569C37.4 17.2856 37.2525 16.9295 36.99 16.6669L31.3331 11.0101C31.3222 10.9992 31.3112 10.9885 31.3 10.978V14C31.3 16.9271 28.9271 19.3 26 19.3H21C18.0729 19.3 15.7 16.9271 15.7 14ZM18.3 10.6H28.7V14C28.7 15.4912 27.4912 16.7 26 16.7H21C19.5088 16.7 18.3 15.4912 18.3 14V10.6ZM15.3 37.4H32.7V29C32.7 27.5088 31.4912 26.3 30 26.3H18C16.5088 26.3 15.3 27.5088 15.3 29V37.4Z" fill="black"/>
    </Svg>
  );
};
