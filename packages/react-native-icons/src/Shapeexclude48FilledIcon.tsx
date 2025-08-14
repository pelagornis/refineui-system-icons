import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapeexclude48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 30H12C9.79086 30 8 28.2091 8 26V12C8 9.79086 9.79086 8 12 8H26C28.2091 8 30 9.79086 30 12V18H36C38.2091 18 40 19.7909 40 22V36C40 38.2091 38.2091 40 36 40H22C19.7909 40 18 38.2091 18 36V30ZM27 20.6C27.2209 20.6 27.4 20.7791 27.4 21V26C27.4 26.7732 26.7732 27.4 26 27.4H21C20.7791 27.4 20.6 27.2209 20.6 27V22C20.6 21.2268 21.2268 20.6 22 20.6H27Z" fill="black"/>
    </Svg>
  );
};
