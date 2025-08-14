import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Document28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8 23.6667C7.44772 23.6667 7 23.219 7 22.6667V6C7 5.44772 7.44772 5 8 5H13C13.5523 5 14 5.44772 14 6V11C14 11.5523 14.4477 12 15 12H20C20.5523 12 21 12.4477 21 13V22.6667C21 23.219 20.5523 23.6667 20 23.6667H8Z" fill="black"/>
<path d="M21 10.8333L15.1667 5V10.5833C15.1667 10.7214 15.2786 10.8333 15.4167 10.8333H21Z" fill="black"/>
    </Svg>
  );
};
