import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textaligncenter24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6 8C6 7.44772 6.44772 7 7 7H16C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H7C6.44772 9 6 8.55228 6 8Z" fill="black"/>
<path d="M4 12C4 11.4477 4.44772 11 5 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H5C4.44772 13 4 12.5523 4 12Z" fill="black"/>
<path d="M9 15C8.44772 15 8 15.4477 8 16C8 16.5523 8.44772 17 9 17H14C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15H9Z" fill="black"/>
    </Svg>
  );
};
