import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Cloud32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M22.7619 16C22.2096 16 21.7708 15.5488 21.6784 15.0043C21.1965 12.1645 18.6884 10 15.6667 10C12.6449 10 10.1368 12.1645 9.65497 15.0043C9.56258 15.5488 9.12371 16 8.57143 16H8.04762C6.36447 16 5 17.3431 5 19C5 20.6569 6.36447 22 8.04762 22H23.2857C24.9689 22 26.3333 20.6569 26.3333 19C26.3333 17.3431 24.9689 16 23.2857 16H22.7619Z" fill="black"/>
    </Svg>
  );
};
