import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Linehorizontal116RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M13.6667 7.43328C13.6667 7.67258 13.5262 7.86656 13.3528 7.86656L3.31384 7.86656C3.14051 7.86656 3 7.67257 3 7.43328C3 7.19399 3.14051 7 3.31384 7L13.3528 7C13.5262 7 13.6667 7.19399 13.6667 7.43328Z" fill="black"/>
    </Svg>
  );
};
