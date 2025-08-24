import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toggleleft48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 14C12.4772 14 8 18.4772 8 24C8 29.5228 12.4772 34 18 34H30C35.5228 34 40 29.5228 40 24C40 18.4772 35.5228 14 30 14H18ZM24 24C24 27.3137 21.3137 30 18 30C14.6863 30 12 27.3137 12 24C12 20.6863 14.6863 18 18 18C21.3137 18 24 20.6863 24 24Z" fill="black"/>
    </Svg>
  );
};
