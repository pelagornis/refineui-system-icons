import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mail16RegularIcon: React.FC<IconProps> = ({ 
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
      width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.5C2 3.22386 2.22386 3 2.5 3H9.5C9.77614 3 10 3.22386 10 3.5V8.5C10 8.77614 9.77614 9 9.5 9H2.5C2.22386 9 2 8.77614 2 8.5V3.5ZM2.65 4.00654V8.35H9.35V4.00654L6.47952 6.05688C6.19267 6.26177 5.80733 6.26177 5.52048 6.05688L2.65 4.00654ZM8.73085 3.65H3.26915L5.89828 5.52795C5.95913 5.57141 6.04087 5.57141 6.10172 5.52795L8.73085 3.65Z" fill="black"/>
    </Svg>
  );
};
