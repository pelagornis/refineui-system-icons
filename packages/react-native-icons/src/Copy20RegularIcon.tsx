import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Copy20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66667 4.66667C5.66667 3.74619 6.41286 3 7.33333 3H14C14.9205 3 15.6667 3.74619 15.6667 4.66667V13C15.6667 13.9205 14.9205 14.6667 14 14.6667H7.33333C6.41286 14.6667 5.66667 13.9205 5.66667 13V4.66667ZM7.33333 4.08333H14C14.3222 4.08333 14.5833 4.3445 14.5833 4.66667V13C14.5833 13.3222 14.3222 13.5833 14 13.5833H7.33333C7.01117 13.5833 6.75 13.3222 6.75 13V4.66667C6.75 4.3445 7.01117 4.08333 7.33333 4.08333Z" fill="black"/>
<path d="M13.4612 16.3319C13.7603 16.3319 14.0029 16.0894 14.0029 15.7902C14.0029 15.4911 13.7603 15.2485 13.4612 15.2485L6.20833 15.2485C5.58701 15.2485 5.08333 14.7449 5.08333 14.1235L5.08333 5.20833C5.08333 4.90918 4.84082 4.66667 4.54167 4.66667C4.24251 4.66667 4 4.90918 4 5.20833V14.1235C4 15.3432 4.9887 16.3319 6.20833 16.3319H13.4612Z" fill="black"/>
    </Svg>
  );
};
