import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rhombus48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.4174 25.3091C11.8609 24.5333 11.8609 23.4667 12.4174 22.6909L22.3304 8.87273C23.1652 7.70909 24.8348 7.70909 25.6696 8.87273L35.5826 22.6909C36.1391 23.4667 36.1391 24.5333 35.5826 25.3091L25.6696 39.1273C24.8348 40.2909 23.1652 40.2909 22.3304 39.1273L12.4174 25.3091Z" fill="black"/>
    </Svg>
  );
};
