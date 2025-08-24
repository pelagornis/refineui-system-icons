import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Spacebar16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M3.43335 7C3.67269 7 3.86671 7.19402 3.86671 7.43335V8.63542C3.86671 8.72748 3.94133 8.8021 4.03338 8.8021H12.6333C12.7253 8.8021 12.8 8.72748 12.8 8.63542V7.43335C12.8 7.19402 12.994 7 13.2333 7C13.4726 7 13.6667 7.19402 13.6667 7.43335V8.9021C13.6667 9.32554 13.3234 9.66881 12.9 9.66881H3.7667C3.34327 9.66881 3 9.32554 3 8.9021V7.43335C3 7.19402 3.19402 7 3.43335 7Z" fill="black"/>
    </Svg>
  );
};
