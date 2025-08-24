import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Wifi416FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.37395 11.984C8.82958 11.984 9.19895 11.6146 9.19895 11.159C9.19895 10.7033 8.82958 10.334 8.37395 10.334C7.91832 10.334 7.54895 10.7033 7.54895 11.159C7.54895 11.6146 7.91832 11.984 8.37395 11.984Z" fill="black"/>
    </Svg>
  );
};
