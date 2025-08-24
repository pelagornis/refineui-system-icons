import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronltr20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.35485 7.13676C8.5832 7.33544 8.60379 7.6777 8.40083 7.90123L6.44384 10.0566C6.30055 10.2144 6.30055 10.4522 6.44384 10.61L8.40083 12.7654C8.60379 12.989 8.5832 13.3312 8.35485 13.5299C8.12651 13.7286 7.77687 13.7084 7.57391 13.4849L5.21493 10.8868C4.92836 10.5711 4.92836 10.0955 5.21493 9.7799L7.57391 7.18177C7.77687 6.95824 8.12651 6.93809 8.35485 7.13676Z" fill="black"/>
    </Svg>
  );
};
