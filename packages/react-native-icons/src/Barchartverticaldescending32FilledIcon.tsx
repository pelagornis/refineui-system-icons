import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Barchartverticaldescending32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 23.6667C26.3333 25.1394 25.1394 26.3333 23.6667 26.3333C22.1939 26.3333 21 25.1394 21 23.6667V17C21 15.5272 22.1939 14.3333 23.6667 14.3333C25.1394 14.3333 26.3333 15.5272 26.3333 17V23.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3333 23.6667C18.3333 25.1394 17.1394 26.3333 15.6667 26.3333C14.1939 26.3333 13 25.1394 13 23.6667L13 13C13 11.5272 14.1939 10.3333 15.6667 10.3333C17.1394 10.3333 18.3333 11.5272 18.3333 13L18.3333 23.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 26.3333C9.13943 26.3333 10.3333 25.1394 10.3333 23.6667L10.3333 7.66667C10.3333 6.19391 9.13943 5 7.66667 5C6.19391 5 5 6.19391 5 7.66667L5 23.6667C5 25.1394 6.19391 26.3333 7.66667 26.3333Z" fill="black"/>
    </Svg>
  );
};
