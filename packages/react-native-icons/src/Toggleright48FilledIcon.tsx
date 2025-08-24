import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toggleright48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 34C35.5228 34 40 29.5228 40 24C40 18.4772 35.5228 14 30 14L18 14C12.4772 14 8 18.4772 8 24C8 29.5228 12.4772 34 18 34L30 34ZM24 24C24 20.6863 26.6863 18 30 18C33.3137 18 36 20.6863 36 24C36 27.3137 33.3137 30 30 30C26.6863 30 24 27.3137 24 24Z" fill="black"/>
    </Svg>
  );
};
