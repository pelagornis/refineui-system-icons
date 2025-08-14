import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Filter28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 9.16688C5 8.52243 5.52229 8 6.16657 8H22.5001C23.1444 8 23.6667 8.52243 23.6667 9.16688C23.6667 9.81133 23.1444 10.3338 22.5001 10.3338H6.16657C5.52229 10.3338 5 9.81133 5 9.16688Z" fill="black"/>
<path d="M7.33329 13.835C7.33329 13.1905 7.85558 12.6681 8.49986 12.6681H20.1667C20.8109 12.6681 21.3332 13.1905 21.3332 13.835C21.3332 14.4795 20.8109 15.0019 20.1667 15.0019H8.49986C7.85558 15.0019 7.33329 14.4795 7.33329 13.835Z" fill="black"/>
<path d="M10.8333 17.3362C10.189 17.3362 9.66672 17.8587 9.66672 18.5031C9.66672 19.1476 10.189 19.67 10.8333 19.67H17.8334C18.4776 19.67 18.9999 19.1476 18.9999 18.5031C18.9999 17.8587 18.4776 17.3362 17.8334 17.3362H10.8333Z" fill="black"/>
    </Svg>
  );
};
