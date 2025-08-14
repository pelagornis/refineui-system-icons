import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronright48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M16.5593 11.4135C15.8136 10.6325 15.8136 9.36662 16.5593 8.58565C17.3051 7.80483 18.514 7.80473 19.2597 8.58565L32.3083 22.2503C33.2306 23.217 33.2305 24.7832 32.3083 25.7499L19.2597 39.4146L19.1142 39.5513C18.3642 40.1919 17.2585 40.1467 16.5593 39.4146C15.8602 38.6824 15.817 37.5246 16.4288 36.7391L16.5593 36.5868L28.5785 24.0001L16.5593 11.4135Z" fill="black"/>
    </Svg>
  );
};
