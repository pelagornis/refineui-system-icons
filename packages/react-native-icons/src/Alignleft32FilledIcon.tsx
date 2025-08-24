import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Alignleft32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.86675 5C6.34544 5 6.73349 5.38806 6.73349 5.86675V25.4621C6.73349 25.9408 6.34544 26.3288 5.86675 26.3288C5.38806 26.3288 5 25.9408 5 25.4621V5.86675C5 5.38806 5.38806 5 5.86675 5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6508 7.26643C9.17794 7.26643 7.98392 8.46045 7.98392 9.93334V12.2977C7.98392 13.7706 9.17794 14.9646 10.6508 14.9646H23.6664C25.1393 14.9646 26.3333 13.7706 26.3333 12.2977V9.93335C26.3333 8.46045 25.1393 7.26643 23.6664 7.26643H10.6508Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.98392 19.0312C7.98392 17.5583 9.17794 16.3643 10.6508 16.3643H19.4319C20.9048 16.3643 22.0989 17.5583 22.0989 19.0312V21.3955C22.0989 22.8684 20.9048 24.0624 19.4319 24.0624H10.6508C9.17794 24.0624 7.98392 22.8684 7.98392 21.3955V19.0312Z" fill="black"/>
    </Svg>
  );
};
