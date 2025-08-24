import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pentagon48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M23.0625 9.81543C23.6157 9.39448 24.3843 9.39448 24.9375 9.81543L38.8945 20.4365C39.4131 20.8313 39.625 21.5076 39.4258 22.125L34.4863 37.4346C34.2817 38.0684 33.6888 38.4998 33.0176 38.5H14.9824C14.3112 38.4998 13.7183 38.0684 13.5137 37.4346L8.57422 22.125C8.375 21.5076 8.58689 20.8313 9.10547 20.4365L23.0625 9.81543Z" fill="black" stroke="black"/>
    </Svg>
  );
};
