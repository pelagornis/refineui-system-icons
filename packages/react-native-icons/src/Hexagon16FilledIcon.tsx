import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Hexagon16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.26718 3.50909C5.46915 3.192 5.81907 3 6.19503 3H10.4716C10.8476 3 11.1975 3.19199 11.3995 3.50909L13.4944 6.79821C13.7107 7.13777 13.7242 7.56836 13.5297 7.92082L11.407 11.7661C11.2134 12.1168 10.8445 12.3346 10.4439 12.3346H6.22273C5.82215 12.3346 5.45324 12.1168 5.25965 11.7661L3.13699 7.92082C2.94243 7.56836 2.95594 7.13777 3.17222 6.79821L5.26718 3.50909Z" fill="black"/>
    </Svg>
  );
};
