import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Morehorizontal32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.66667 13C9.13943 13 10.3333 14.1939 10.3333 15.6667C10.3333 17.1394 9.13943 18.3333 7.66667 18.3333C6.19391 18.3333 5 17.1394 5 15.6667C5 14.1939 6.19391 13 7.66667 13Z" fill="black"/>
<path d="M15.6667 13C17.1394 13 18.3333 14.1939 18.3333 15.6667C18.3333 17.1394 17.1394 18.3333 15.6667 18.3333C14.1939 18.3333 13 17.1394 13 15.6667C13 14.1939 14.1939 13 15.6667 13Z" fill="black"/>
<path d="M23.6667 13C25.1394 13 26.3333 14.1939 26.3333 15.6667C26.3333 17.1394 25.1394 18.3333 23.6667 18.3333C22.1939 18.3333 21 17.1394 21 15.6667C21 14.1939 22.1939 13 23.6667 13Z" fill="black"/>
    </Svg>
  );
};
