import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Edit48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.35608 30.9877C9.43487 30.5938 9.6285 30.232 9.91257 29.9479L27.431 12.4295C27.6297 12.2308 27.9518 12.2308 28.1505 12.4295L35.5705 19.8495C35.7692 20.0482 35.7692 20.3703 35.5705 20.569L18.052 38.0874C17.768 38.3715 17.4062 38.5651 17.0122 38.6439L10.4351 39.9594C9.01123 40.2441 7.75588 38.9888 8.04065 37.5649L9.35608 30.9877Z" fill="black"/>
<path d="M37.2616 18.6629C37.4412 18.8425 37.7273 18.8638 37.9183 18.6963C39.1944 17.5775 40 15.9351 40 14.1046C40 10.7331 37.2669 8 33.8954 8C32.0649 8 30.4225 8.80566 29.3036 10.0817C29.1362 10.2727 29.1575 10.5588 29.3371 10.7384L37.2616 18.6629Z" fill="black"/>
    </Svg>
  );
};
