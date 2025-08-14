import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ticket24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 8C20 7.44772 19.5523 7 19 7H5C4.44772 7 4 7.44772 4 8V10C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14V16C4 16.5523 4.44772 17 5 17H19C19.5523 17 20 16.5523 20 16V14C18.8954 14 18 13.1046 18 12C18 10.8954 18.8954 10 20 10V8Z" fill="black"/>
    </Svg>
  );
};
