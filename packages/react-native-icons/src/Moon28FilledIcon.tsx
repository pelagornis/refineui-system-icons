import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Moon28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M23.5274 16.4915C23.5833 16.2609 23.3057 16.1032 23.1167 16.2466C21.8357 17.2187 20.2382 17.7955 18.506 17.7955C14.29 17.7955 10.8722 14.3784 10.8722 10.1631C10.8722 8.43121 11.4491 6.83407 12.4213 5.55329C12.5647 5.3643 12.4071 5.08674 12.1765 5.14257C8.0584 6.13954 5 9.8491 5 14.2729C5 19.4609 9.2065 23.6667 14.3955 23.6667C18.82 23.6667 22.5303 20.6088 23.5274 16.4915Z" fill="black"/>
    </Svg>
  );
};
