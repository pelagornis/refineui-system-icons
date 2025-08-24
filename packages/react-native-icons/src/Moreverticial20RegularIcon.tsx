import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Moreverticial20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M11 5.45833C11 6.26372 10.3471 6.91663 9.54167 6.91667C8.73621 6.91667 8.08333 6.26375 8.08333 5.45833C8.08333 4.65292 8.73621 4 9.54167 4C10.3471 4.00004 11 4.65294 11 5.45833Z" fill="black"/>
<path d="M11 10.4583C11 11.2637 10.3471 11.9166 9.54167 11.9167C8.73621 11.9167 8.08333 11.2637 8.08333 10.4583C8.08333 9.65292 8.73621 9 9.54167 9C10.3471 9.00004 11 9.65294 11 10.4583Z" fill="black"/>
<path d="M11 15.4583C11 16.2637 10.3471 16.9166 9.54167 16.9167C8.73621 16.9167 8.08333 16.2637 8.08333 15.4583C8.08333 14.6529 8.73621 14 9.54167 14C10.3471 14 11 14.6529 11 15.4583Z" fill="black"/>
    </Svg>
  );
};
