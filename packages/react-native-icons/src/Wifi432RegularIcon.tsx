import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Wifi432RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M15.7806 24.0664C16.7471 24.0664 17.5306 23.2829 17.5306 22.3164C17.5306 21.3499 16.7471 20.5664 15.7806 20.5664C14.8141 20.5664 14.0306 21.3499 14.0306 22.3164C14.0306 23.2829 14.8141 24.0664 15.7806 24.0664Z" fill="black"/>
    </Svg>
  );
};
