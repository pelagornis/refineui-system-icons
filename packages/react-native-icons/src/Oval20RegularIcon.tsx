import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Oval20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 5C5.23858 5 3 7.23858 3 10C3 12.7614 5.23858 15 8 15H11.3333C14.0948 15 16.3333 12.7614 16.3333 10C16.3333 7.23858 14.0948 5 11.3333 5H8ZM11.3333 6.08333H8C5.83688 6.08333 4.08333 7.83688 4.08333 10C4.08333 12.1631 5.83688 13.9167 8 13.9167H11.3333C13.4964 13.9167 15.25 12.1631 15.25 10C15.25 7.83688 13.4964 6.08333 11.3333 6.08333Z" fill="black"/>
    </Svg>
  );
};
