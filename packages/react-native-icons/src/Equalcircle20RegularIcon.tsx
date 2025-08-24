import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Equalcircle20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M6.20833 8.41667C6.20833 8.11751 6.45085 7.875 6.75 7.875H12.5833C12.8825 7.875 13.125 8.11751 13.125 8.41667C13.125 8.71582 12.8825 8.95833 12.5833 8.95833H6.75C6.45085 8.95833 6.20833 8.71582 6.20833 8.41667Z" fill="black"/>
<path d="M6.75 10.375C6.45085 10.375 6.20833 10.6175 6.20833 10.9167C6.20833 11.2158 6.45085 11.4583 6.75 11.4583H12.5833C12.8825 11.4583 13.125 11.2158 13.125 10.9167C13.125 10.6175 12.8825 10.375 12.5833 10.375H6.75Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 16.3333C13.3486 16.3333 16.3333 13.3486 16.3333 9.66667C16.3333 5.98477 13.3486 3 9.66667 3C5.98477 3 3 5.98477 3 9.66667C3 13.3486 5.98477 16.3333 9.66667 16.3333ZM9.66667 15.25C12.7503 15.25 15.25 12.7503 15.25 9.66667C15.25 6.58308 12.7503 4.08333 9.66667 4.08333C6.58308 4.08333 4.08333 6.58308 4.08333 9.66667C4.08333 12.7503 6.58308 15.25 9.66667 15.25Z" fill="black"/>
    </Svg>
  );
};
