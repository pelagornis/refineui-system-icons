import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Usb32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 10.0276V6.35881C11.6667 5.60836 12.2636 5 13 5H18.3333C19.0697 5 19.6667 5.60836 19.6667 6.35881V10.0276C21.1394 10.0276 22.3333 11.2443 22.3333 12.7452V23.6157C22.3333 25.1166 21.1394 26.3333 19.6667 26.3333H11.6667C10.1939 26.3333 9 25.1166 9 23.6157V12.7452C9 11.2443 10.1939 10.0276 11.6667 10.0276ZM13.4 10.0276V6.76645H17.9333V10.0276L13.4 10.0276Z" fill="black"/>
    </Svg>
  );
};
