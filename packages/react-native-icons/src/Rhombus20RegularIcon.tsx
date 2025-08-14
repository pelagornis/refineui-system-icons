import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rhombus20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.17391 9.12121C4.94203 9.44445 4.94203 9.88889 5.17391 10.2121L9.30435 15.9697C9.65217 16.4545 10.3478 16.4545 10.6957 15.9697L14.8261 10.2121C15.058 9.88889 15.058 9.44445 14.8261 9.12121L10.6957 3.36364C10.3478 2.87879 9.65217 2.87879 9.30435 3.36364L5.17391 9.12121ZM6.29012 9.42379C6.18597 9.56896 6.18597 9.76437 6.29012 9.90955L9.66144 14.609C9.82767 14.8407 10.1723 14.8407 10.3386 14.609L13.7099 9.90955C13.814 9.76437 13.814 9.56896 13.7099 9.42379L10.3386 4.72437C10.1723 4.49265 9.82767 4.49265 9.66144 4.72437L6.29012 9.42379Z" fill="black"/>
    </Svg>
  );
};
