import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Linehorizontal132FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M26.3333 16.3332C26.3333 17.0695 25.8952 17.6665 25.3548 17.6665L5.97856 17.6664C5.43811 17.6664 5 17.0695 5 16.3332C5 15.5969 5.43811 15 5.97856 15L25.3548 15C25.8952 15 26.3333 15.5969 26.3333 16.3332Z" fill="black"/>
    </Svg>
  );
};
