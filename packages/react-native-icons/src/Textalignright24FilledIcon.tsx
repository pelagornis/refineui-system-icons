import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignright24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8 8C8 7.44772 8.44772 7 9 7H18C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9H9C8.44772 9 8 8.55228 8 8Z" fill="black"/>
<path d="M4 12C4 11.4477 4.44772 11 5 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H5C4.44772 13 4 12.5523 4 12Z" fill="black"/>
<path d="M13 15C12.4477 15 12 15.4477 12 16C12 16.5523 12.4477 17 13 17H18C18.5523 17 19 16.5523 19 16C19 15.4477 18.5523 15 18 15H13Z" fill="black"/>
    </Svg>
  );
};
