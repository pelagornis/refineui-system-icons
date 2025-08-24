import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronleft16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10.7375 12.5288C10.9978 12.7892 10.9978 13.2111 10.7375 13.4715C10.4773 13.7317 10.0554 13.7318 9.79516 13.4715L5.24138 8.91657C4.91952 8.59434 4.91955 8.07226 5.24138 7.75002L9.79516 3.19513L9.84592 3.14957C10.1077 2.93602 10.4936 2.95109 10.7375 3.19513C10.9815 3.43919 10.9966 3.82515 10.7831 4.08697L10.7375 4.13775L6.54302 8.33329L10.7375 12.5288Z" fill="black"/>
    </Svg>
  );
};
