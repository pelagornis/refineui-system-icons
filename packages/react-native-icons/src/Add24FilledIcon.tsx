import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Add24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.9 11C10.9552 11 11 10.9552 11 10.9V5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V10.9C13 10.9552 13.0448 11 13.1 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13.1C13.0448 13 13 13.0448 13 13.1V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13.1C11 13.0448 10.9552 13 10.9 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H10.9Z" fill="black"/>
    </Svg>
  );
};
