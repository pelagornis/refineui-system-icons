import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ticket32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 10.3333C26.3333 9.59695 25.7364 9 25 9H6.33333C5.59695 9 5 9.59695 5 10.3333V13C6.47276 13 7.66667 14.1939 7.66667 15.6667C7.66667 17.1394 6.47276 18.3333 5 18.3333V21C5 21.7364 5.59695 22.3333 6.33333 22.3333H25C25.7364 22.3333 26.3333 21.7364 26.3333 21V18.3333C24.8606 18.3333 23.6667 17.1394 23.6667 15.6667C23.6667 14.1939 24.8606 13 26.3333 13V10.3333ZM6.73333 10.7333V11.6212C8.30156 12.2941 9.4 13.8521 9.4 15.6667C9.4 17.4813 8.30156 19.0393 6.73333 19.7121V20.6H24.6V19.7121C23.0318 19.0393 21.9333 17.4813 21.9333 15.6667C21.9333 13.8521 23.0318 12.2941 24.6 11.6212V10.7333H6.73333Z" fill="black"/>
    </Svg>
  );
};
