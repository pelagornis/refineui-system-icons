import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Subtract32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5 16.8667C5 16.388 5.35886 16 5.80154 16H25.5318C25.9745 16 26.3333 16.388 26.3333 16.8667C26.3333 17.3453 25.9745 17.7333 25.5318 17.7333H5.80154C5.35886 17.7333 5 17.3453 5 16.8667Z" fill="black"/>
    </Svg>
  );
};
