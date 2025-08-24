import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Parallelogram16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.81024 4.61076C5.97786 4.24091 6.37092 4 6.80673 4H12.586C13.3563 4 13.8788 4.72047 13.5825 5.3742L10.8564 11.3892C10.6888 11.7591 10.2957 12 9.85994 12H4.08065C3.31032 12 2.78788 11.2795 3.08416 10.6258L5.81024 4.61076Z" fill="black"/>
    </Svg>
  );
};
