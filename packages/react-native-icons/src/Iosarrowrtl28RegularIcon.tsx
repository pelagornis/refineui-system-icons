import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Iosarrowrtl28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.2358 23.4668C13.9361 23.1863 13.9199 22.7153 14.1997 22.4147L21.3587 14.7244C21.5635 14.5044 21.5635 14.163 21.3587 13.943L14.1997 6.25261C13.9199 5.95206 13.9361 5.48103 14.2358 5.20052C14.5356 4.92002 15.0054 4.93626 15.2852 5.2368L23.0261 13.5523C23.4357 13.9923 23.4357 14.6751 23.0261 15.115L15.2852 23.4305C15.0054 23.7311 14.5356 23.7473 14.2358 23.4668Z" fill="black"/>
    </Svg>
  );
};
