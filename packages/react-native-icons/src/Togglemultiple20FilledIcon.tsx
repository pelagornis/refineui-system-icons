import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Togglemultiple20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 3C4.39911 3 3 4.39911 3 6.125C3 7.85089 4.39911 9.25 6.125 9.25H13.2083C14.9342 9.25 16.3333 7.85089 16.3333 6.125C16.3333 4.39911 14.9342 3 13.2083 3H6.125ZM13 7.79167C13.9205 7.79167 14.6667 7.04547 14.6667 6.125C14.6667 5.20453 13.9205 4.45833 13 4.45833C12.0795 4.45833 11.3333 5.20453 11.3333 6.125C11.3333 7.04547 12.0795 7.79167 13 7.79167Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.125 10.0833C4.39911 10.0833 3 11.4824 3 13.2083C3 14.9342 4.39911 16.3333 6.125 16.3333H13.2083C14.9342 16.3333 16.3333 14.9342 16.3333 13.2083C16.3333 11.4824 14.9342 10.0833 13.2083 10.0833H6.125ZM8 13.2083C8 14.1288 7.25381 14.875 6.33333 14.875C5.41286 14.875 4.66667 14.1288 4.66667 13.2083C4.66667 12.2879 5.41286 11.5417 6.33333 11.5417C7.25381 11.5417 8 12.2879 8 13.2083Z" fill="black"/>
    </Svg>
  );
};
