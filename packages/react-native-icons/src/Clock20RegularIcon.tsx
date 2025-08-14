import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Clock20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10.2083 5.91594C10.2083 5.61686 9.96582 5.37441 9.66667 5.37441C9.36751 5.37441 9.125 5.61686 9.125 5.91594V9.71676C9.125 9.82724 9.1689 9.9332 9.24704 10.0113L11.7837 12.5473C11.9952 12.7588 12.3381 12.7588 12.5497 12.5473C12.7612 12.3358 12.7612 11.9929 12.5497 11.7815L10.3304 9.5627C10.2522 9.48458 10.2083 9.37862 10.2083 9.26814V5.91594Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 9.665C16.3333 13.346 13.3486 16.33 9.66667 16.33C5.98477 16.33 3 13.346 3 9.665C3 5.98402 5.98477 3 9.66667 3C13.3486 3 16.3333 5.98402 16.3333 9.665ZM15.25 9.665C15.25 12.7478 12.7503 15.2469 9.66667 15.2469C6.58308 15.2469 4.08333 12.7478 4.08333 9.665C4.08333 6.58218 6.58308 4.08306 9.66667 4.08306C12.7503 4.08306 15.25 6.58218 15.25 9.665Z" fill="black"/>
    </Svg>
  );
};
