import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Battery032RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 11.6667C5 10.1939 6.19391 9 7.66667 9H21.6936C23.1664 9 24.3603 10.1939 24.3603 11.6667V12.9144C25.45 12.9144 26.3333 13.7977 26.3333 14.8874V16.4459C26.3333 17.5356 25.45 18.419 24.3603 18.419V19.6667C24.3603 21.1394 23.1664 22.3333 21.6936 22.3333H7.66667C6.19391 22.3333 5 21.1394 5 19.6667V11.6667ZM7.93642 10.5902C7.20004 10.5902 6.60308 11.1872 6.60308 11.9235V19.4098C6.60308 20.1462 7.20004 20.7431 7.93642 20.7431H21.4239C22.1603 20.7431 22.7572 20.1462 22.7572 19.4098V11.9235C22.7572 11.1872 22.1603 10.5902 21.4239 10.5902H7.93642Z" fill="black"/>
    </Svg>
  );
};
