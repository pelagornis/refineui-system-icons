import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Desktopmac20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 3C3.74619 3 3 3.74619 3 4.66667V10.5C3 11.4205 3.74619 12.1667 4.66667 12.1667H7.33929V14H5.5C5.20085 14 4.95833 14.2425 4.95833 14.5417C4.95833 14.8408 5.20085 15.0833 5.5 15.0833H13.8333C14.1325 15.0833 14.375 14.8408 14.375 14.5417C14.375 14.2425 14.1325 14 13.8333 14H11.994V12.1667H14.6667C15.5871 12.1667 16.3333 11.4205 16.3333 10.5V4.66667C16.3333 3.74619 15.5871 3 14.6667 3H4.66667ZM15.25 9.79167H4.08333V10.5C4.08333 10.8222 4.3445 11.0833 4.66667 11.0833H14.6667C14.9888 11.0833 15.25 10.8222 15.25 10.5V9.79167ZM8.42262 14V12.1667H10.9107V14H8.42262Z" fill="black"/>
    </Svg>
  );
};
