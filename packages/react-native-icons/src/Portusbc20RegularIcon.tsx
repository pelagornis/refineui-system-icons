import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Portusbc20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 7C5.11929 7 4 8.11929 4 9.5C4 10.8807 5.11929 12 6.5 12H13.1667C14.5474 12 15.6667 10.8807 15.6667 9.5C15.6667 8.11929 14.5474 7 13.1667 7H6.5ZM13.1667 8.08333H6.5C5.7176 8.08333 5.08333 8.7176 5.08333 9.5C5.08333 10.2824 5.7176 10.9167 6.5 10.9167H13.1667C13.9491 10.9167 14.5833 10.2824 14.5833 9.5C14.5833 8.7176 13.9491 8.08333 13.1667 8.08333Z" fill="black"/>
    </Svg>
  );
};
