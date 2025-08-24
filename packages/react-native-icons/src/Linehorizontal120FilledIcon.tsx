import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Linehorizontal120FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3333 9.83327C16.3333 10.2935 16.0595 10.6665 15.7217 10.6665L3.6116 10.6665C3.27382 10.6665 3 10.2935 3 9.83327C3 9.37307 3.27382 9 3.6116 9L15.7217 9C16.0595 9 16.3333 9.37307 16.3333 9.83327Z" fill="black"/>
    </Svg>
  );
};
