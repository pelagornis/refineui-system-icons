import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bookmark48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M36 12.1468C36 9.8566 34.2091 8 32 8H16C13.7909 8 12 9.8566 12 12.1468V38.9613C12 39.8403 12.9889 40.3204 13.6402 39.7577L23.3598 31.3607C23.7307 31.0403 24.2693 31.0403 24.6402 31.3607L34.3598 39.7577C35.0111 40.3204 36 39.8403 36 38.9613V12.1468ZM32 10.6954H16C15.2268 10.6954 14.6 11.3453 14.6 12.1468V34.3131C14.6 34.7526 15.0944 34.9927 15.4201 34.7113L21.6953 29.29C23.0304 28.1366 24.9696 28.1366 26.3047 29.29L32.5799 34.7113C32.9056 34.9927 33.4 34.7526 33.4 34.3131V12.1468C33.4 11.3453 32.7732 10.6954 32 10.6954Z" fill="black"/>
    </Svg>
  );
};
