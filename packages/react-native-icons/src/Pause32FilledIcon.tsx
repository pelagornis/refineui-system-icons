import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pause32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5 7.66667C5 6.19391 6.19391 5 7.66667 5H11.6667C13.1394 5 14.3333 6.19391 14.3333 7.66667V23.6667C14.3333 25.1394 13.1394 26.3333 11.6667 26.3333H7.66667C6.19391 26.3333 5 25.1394 5 23.6667V7.66667Z" fill="black"/>
<path d="M17 7.66667C17 6.19391 18.1939 5 19.6667 5H23.6667C25.1394 5 26.3333 6.19391 26.3333 7.66667V23.6667C26.3333 25.1394 25.1394 26.3333 23.6667 26.3333H19.6667C18.1939 26.3333 17 25.1394 17 23.6667V7.66667Z" fill="black"/>
    </Svg>
  );
};
