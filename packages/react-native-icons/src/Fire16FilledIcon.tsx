import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Fire16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.57131 7.71119C5.29476 7.23951 4.98646 6.8744 4.66667 7.35262C4.40734 7.88103 4 9.05093 4 9.67885C4 11.8813 5.79086 13.6667 8 13.6667C10.2091 13.6667 12 11.8813 12 9.67885C12 8.57668 11.4016 7.70366 10.8233 6.85985L10.8107 6.84148C10 5.65855 9.66667 4.69407 9.33333 3.03248C8.8751 2.85019 7.17227 3.43951 6.33333 4.69407C5.84992 5.41697 6.1016 6.34627 6.31798 7.14522C6.33989 7.2261 6.36143 7.30565 6.38181 7.38351C6.42818 7.56064 6.46855 7.72905 6.49349 7.88463C6.54842 8.22729 6.52855 8.5077 6.33333 8.68189C6.17734 8.82109 5.98266 8.46159 5.76168 8.05353C5.75912 8.04879 5.75655 8.04405 5.75398 8.0393C5.69487 7.93016 5.6339 7.81795 5.57131 7.71119Z" fill="black"/>
    </Svg>
  );
};
