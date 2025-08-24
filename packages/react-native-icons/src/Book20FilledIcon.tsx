import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Book20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9167 14.375H6.52083C6.27921 14.375 6.08333 14.5709 6.08333 14.8125C6.08333 15.0541 6.27921 15.25 6.52083 15.25H14.4583C14.7575 15.25 15 15.4925 15 15.7917C15 16.0908 14.7575 16.3333 14.4583 16.3333H5.83333C5.3731 16.3333 5 15.9602 5 15.5V3.83333C5 3.3731 5.3731 3 5.83333 3H14.1667C14.6269 3 15 3.3731 15 3.83333V13.2917C15 13.89 14.515 14.375 13.9167 14.375ZM6.66667 6.33333C6.66667 5.41286 7.41286 4.66667 8.33333 4.66667H11.6667C12.5871 4.66667 13.3333 5.41286 13.3333 6.33333C13.3333 7.25381 12.5871 8 11.6667 8H8.33333C7.41286 8 6.66667 7.25381 6.66667 6.33333Z" fill="black"/>
    </Svg>
  );
};
