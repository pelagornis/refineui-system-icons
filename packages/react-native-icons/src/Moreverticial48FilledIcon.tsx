import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Moreverticial48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M28 12C28 14.2091 26.2091 16 24 16C21.7909 16 20 14.2091 20 12C20 9.79086 21.7909 8 24 8C26.2091 8 28 9.79086 28 12Z" fill="black"/>
<path d="M28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24Z" fill="black"/>
<path d="M28 36C28 38.2091 26.2091 40 24 40C21.7909 40 20 38.2091 20 36C20 33.7909 21.7909 32 24 32C26.2091 32 28 33.7909 28 36Z" fill="black"/>
    </Svg>
  );
};
