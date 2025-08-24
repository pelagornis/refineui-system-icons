import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Linehorizontal124RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M20 11.6499C20 12.0089 19.7892 12.2998 19.5292 12.2998L4.47077 12.2998C4.21077 12.2998 4 12.0089 4 11.6499C4 11.291 4.21077 11 4.47077 11L19.5292 11C19.7892 11 20 11.291 20 11.6499Z" fill="black"/>
    </Svg>
  );
};
