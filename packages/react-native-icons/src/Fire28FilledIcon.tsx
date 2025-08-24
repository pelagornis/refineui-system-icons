import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Fire28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.74979 13.2446C9.26582 12.4191 8.7263 11.7802 8.16667 12.6171C7.71285 13.5418 7 15.5891 7 16.688C7 20.5422 10.134 23.6667 14 23.6667C17.866 23.6667 21 20.5422 21 16.688C21 14.7592 19.9529 13.2314 18.9408 11.7547L18.9187 11.7226C17.5 9.65246 16.9167 7.96462 16.3333 5.05683C15.5314 4.73783 12.5515 5.76913 11.0833 7.96462C10.2374 9.22971 10.6778 10.856 11.0565 12.2541C11.0948 12.3957 11.1325 12.5349 11.1682 12.6711C11.2493 12.9811 11.32 13.2758 11.3636 13.5481C11.4597 14.1478 11.425 14.6385 11.0833 14.9433C10.8103 15.1869 10.4697 14.5578 10.0829 13.8437C10.0785 13.8354 10.074 13.8271 10.0695 13.8188C9.96602 13.6278 9.85933 13.4314 9.74979 13.2446Z" fill="black"/>
    </Svg>
  );
};
