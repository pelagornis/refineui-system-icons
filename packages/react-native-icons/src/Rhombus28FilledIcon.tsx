import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rhombus28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.24348 15.097C6.91884 14.6444 6.91884 14.0222 7.24348 13.5697L13.0261 5.50909C13.513 4.8303 14.487 4.8303 14.9739 5.50909L20.7565 13.5697C21.0812 14.0222 21.0812 14.6444 20.7565 15.097L14.9739 23.1576C14.487 23.8364 13.513 23.8364 13.0261 23.1576L7.24348 15.097Z" fill="black"/>
    </Svg>
  );
};
