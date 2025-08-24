import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Barcharthorizontal48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16H22C24.2091 16 26 14.2091 26 12C26 9.79086 24.2091 8 22 8H12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C9.79086 20 8 21.7909 8 24C8 26.2091 9.79086 28 12 28H28C30.2091 28 32 26.2091 32 24C32 21.7909 30.2091 20 28 20H12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 36C8 33.7909 9.79086 32 12 32H36C38.2091 32 40 33.7909 40 36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36Z" fill="black"/>
    </Svg>
  );
};
