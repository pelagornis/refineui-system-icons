import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Line32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M25.9428 5.39049C26.4635 5.91115 26.4635 6.7553 25.9428 7.27596L7.27596 25.9428C6.7553 26.4635 5.91115 26.4635 5.39049 25.9428C4.86984 25.4222 4.86984 24.578 5.39049 24.0574L24.0574 5.39049C24.578 4.86984 25.4222 4.86984 25.9428 5.39049Z" fill="black"/>
    </Svg>
  );
};
