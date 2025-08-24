import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Block20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 9.66667C16.3333 13.3486 13.3486 16.3333 9.66667 16.3333C5.98477 16.3333 3 13.3486 3 9.66667C3 5.98477 5.98477 3 9.66667 3C13.3486 3 16.3333 5.98477 16.3333 9.66667ZM13.0509 13.8169C13.1378 13.9039 13.1311 14.0472 13.033 14.1214C12.0971 14.8298 10.931 15.25 9.66667 15.25C6.58308 15.25 4.08333 12.7503 4.08333 9.66667C4.08333 8.40238 4.50355 7.23623 5.21194 6.30029C5.28617 6.20221 5.42945 6.19548 5.51643 6.28246L13.0509 13.8169ZM14.1214 13.033C14.0472 13.1311 13.9039 13.1378 13.8169 13.0509L6.28246 5.51643C6.19548 5.42945 6.20221 5.28617 6.30029 5.21194C7.23623 4.50355 8.40238 4.08333 9.66667 4.08333C12.7503 4.08333 15.25 6.58308 15.25 9.66667C15.25 10.931 14.8298 12.0971 14.1214 13.033Z" fill="black"/>
    </Svg>
  );
};
