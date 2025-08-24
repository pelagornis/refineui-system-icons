import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Video48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12 14C9.79086 14 8 15.7909 8 18V30C8 32.2091 9.79086 34 12 34H26C28.2091 34 30 32.2091 30 30V18C30 15.7909 28.2091 14 26 14H12Z" fill="black"/>
<path d="M40 29.7299V18.2701C40 16.5744 38.0223 15.6481 36.7196 16.7336L31.5285 21.0596C31.0725 21.4396 30.8088 22.0025 30.8088 22.596V25.404C30.8088 25.9975 31.0725 26.5604 31.5285 26.9404L36.7196 31.2664C38.0223 32.3519 40 31.4256 40 29.7299Z" fill="black"/>
    </Svg>
  );
};
