import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Battery10032FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 11.6667C5 10.1939 6.19393 9 7.66667 9H21.6936C23.1664 9 24.3603 10.1939 24.3603 11.6667V12.9144C25.45 12.9144 26.3333 13.7977 26.3333 14.8874V16.4459C26.3333 17.5356 25.45 18.4189 24.3603 18.4189V19.6667C24.3603 21.1394 23.1664 22.3333 21.6936 22.3333H7.66667C6.19393 22.3333 5 21.1394 5 19.6667V11.6667ZM9 11.6667C8.26359 11.6667 7.66667 12.2636 7.66667 13V18.3333C7.66667 19.0697 8.26359 19.6667 9 19.6667H20.4666C21.203 19.6667 21.8 19.0697 21.8 18.3333V13C21.8 12.2636 21.203 11.6667 20.4666 11.6667H9Z" fill="black"/>
    </Svg>
  );
};
