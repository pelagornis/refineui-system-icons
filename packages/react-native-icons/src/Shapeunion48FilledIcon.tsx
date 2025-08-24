import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapeunion48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 30H18V36C18 38.2091 19.7909 40 22 40H36C38.2091 40 40 38.2091 40 36V22C40 19.7909 38.2091 18 36 18H30V12C30 9.79086 28.2091 8 26 8H12C9.79086 8 8 9.79086 8 12V26C8 28.2091 9.79086 30 12 30Z" fill="black"/>
    </Svg>
  );
};
