import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Linehorizontal1Dashes48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8 23.9998C8 22.8954 8.89536 22 9.99984 22H12.3332C13.4377 22 14.333 22.8954 14.333 23.9998C14.333 25.1043 13.4377 25.9997 12.3332 25.9997H9.99984C8.89536 25.9997 8 25.1043 8 23.9998Z" fill="black"/>
<path d="M15.0001 23.9998C15.0001 22.8954 15.8954 22 16.9999 22H21.6666C22.7711 22 23.6665 22.8954 23.6665 23.9998C23.6665 25.1043 22.7711 25.9997 21.6666 25.9997H16.9999C15.8954 25.9997 15.0001 25.1043 15.0001 23.9998Z" fill="black"/>
<path d="M24.3335 23.9998C24.3335 22.8954 25.2289 22 26.3334 22H31.0001C32.1046 22 32.9999 22.8954 32.9999 23.9998C32.9999 25.1043 32.1046 25.9997 31.0001 25.9997H26.3334C25.2289 25.9997 24.3335 25.1043 24.3335 23.9998Z" fill="black"/>
<path d="M33.667 23.9998C33.667 22.8954 34.5623 22 35.6668 22H38.0002C39.1046 22 40 22.8954 40 23.9998C40 25.1043 39.1046 25.9997 38.0002 25.9997H35.6668C34.5623 25.9997 33.667 25.1043 33.667 23.9998Z" fill="black"/>
    </Svg>
  );
};
