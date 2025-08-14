import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle724FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.5 8.35C10.141 8.35 9.85 8.64102 9.85 9C9.85 9.35898 10.141 9.65 10.5 9.65H12.7112C12.4671 10.4664 12.1799 11.461 11.9372 12.3726C11.7889 12.9297 11.6557 13.4615 11.5592 13.9052C11.4675 14.3263 11.3939 14.7315 11.3939 15C11.3939 15.359 11.6849 15.65 12.0439 15.65C12.4029 15.65 12.6939 15.359 12.6939 15C12.6939 14.8927 12.7339 14.6205 12.8294 14.1817C12.92 13.7656 13.0475 13.2553 13.1934 12.707C13.485 11.6116 13.844 10.3878 14.111 9.51112C14.2945 8.90876 13.8254 8.35 13.242 8.35H10.5Z" fill="black"/>
    </Svg>
  );
};
