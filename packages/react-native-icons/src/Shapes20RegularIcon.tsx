import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapes20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M3 7.58333C3 9.68129 4.40958 11.45 6.33333 11.9941V10.8535C5.01765 10.3503 4.08333 9.07593 4.08333 7.58333C4.08333 5.65034 5.65034 4.08333 7.58333 4.08333C9.07593 4.08333 10.3503 5.01765 10.8535 6.33333H11.9941C11.45 4.40958 9.68129 3 7.58333 3C5.05203 3 3 5.05203 3 7.58333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.16667 8.83333C7.16667 7.91286 7.91286 7.16667 8.83333 7.16667H14.6667C15.5871 7.16667 16.3333 7.91286 16.3333 8.83333V14.6667C16.3333 15.5871 15.5871 16.3333 14.6667 16.3333H8.83333C7.91286 16.3333 7.16667 15.5871 7.16667 14.6667V8.83333ZM8.83333 8.25H14.6667C14.9888 8.25 15.25 8.51117 15.25 8.83333V14.6667C15.25 14.9888 14.9888 15.25 14.6667 15.25H8.83333C8.51117 15.25 8.25 14.9888 8.25 14.6667V8.83333C8.25 8.51117 8.51117 8.25 8.83333 8.25Z" fill="black"/>
    </Svg>
  );
};
