import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignjustify16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M3 5.45508C3 5.20374 3.19402 5 3.43335 5H12.5667C12.806 5 13 5.20374 13 5.45508C13 5.70641 12.806 5.91015 12.5667 5.91015H3.43335C3.19402 5.91015 3 5.70641 3 5.45508Z" fill="black"/>
<path d="M3 8.5C3 8.24867 3.19402 8.04492 3.43335 8.04492H12.5667C12.806 8.04492 13 8.24867 13 8.5C13 8.75133 12.806 8.95508 12.5667 8.95508H3.43335C3.19402 8.95508 3 8.75133 3 8.5Z" fill="black"/>
<path d="M3.43335 11.0899C3.19402 11.0899 3 11.2936 3 11.5449C3 11.7963 3.19402 12 3.43335 12H12.5667C12.806 12 13 11.7963 13 11.5449C13 11.2936 12.806 11.0899 12.5667 11.0899H3.43335Z" fill="black"/>
    </Svg>
  );
};
