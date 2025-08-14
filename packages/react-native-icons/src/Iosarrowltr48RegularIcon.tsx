import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Iosarrowltr48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M23.5957 8.3432C24.1095 8.82407 24.1373 9.63155 23.6577 10.1468L11.3851 23.3302C11.034 23.7074 11.034 24.2926 11.3851 24.6698L23.6577 37.8532C24.1373 38.3684 24.1095 39.1759 23.5957 39.6568C23.0818 40.1377 22.2764 40.1098 21.7968 39.5946L8.52662 25.3395C7.82446 24.5853 7.82446 23.4148 8.52662 22.6605L21.7968 8.40539C22.2764 7.89017 23.0818 7.86233 23.5957 8.3432Z" fill="black"/>
    </Svg>
  );
};
