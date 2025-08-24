import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Clipboard28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7022 6.11112H19.2632C20.2224 6.11112 21 6.93193 21 7.94445V21.8333C21 22.8459 20.2224 23.6667 19.2632 23.6667H8.73684C7.77761 23.6667 7 22.8459 7 21.8333V7.94445C7 6.93193 7.77761 6.11112 8.73684 6.11112H10.2979C10.5635 5.45769 11.1785 5 11.8948 5H16.1053C16.8216 5 17.4366 5.45769 17.7022 6.11112ZM11.5263 6.83333C11.5263 6.61856 11.6913 6.44444 11.8948 6.44444H16.1053C16.3088 6.44444 16.4737 6.61856 16.4737 6.83333C16.4737 7.04811 16.3088 7.22222 16.1053 7.22222H11.8948C11.6913 7.22222 11.5263 7.04811 11.5263 6.83333Z" fill="black"/>
    </Svg>
  );
};
