import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Sportsoccer48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24ZM27.0977 37.0402C26.1034 37.2755 25.0662 37.4 24 37.4C23.0495 37.4 22.122 37.301 21.2275 37.1128L19.46 33.0412L20.7483 31.0627H27.2372L28.4998 33.0762L27.0977 37.0402ZM35.0256 31.6176C36.4419 29.5716 37.3033 27.1123 37.3923 24.4573L34.0226 22.0819L31.3029 23.1663L29.3717 29.5725L30.6541 31.6176H35.0256ZM34.1783 15.284L33.0945 19.6529L30.4138 20.7217L25.3 17.1015V13.839L28.9519 11.5447C30.9866 12.3544 32.7762 13.6482 34.1783 15.284ZM12.9744 31.6176H17.2843L18.6245 29.5595L16.6986 23.1713L13.9117 22.0811L10.6073 24.4478C10.6946 27.1065 11.5564 29.5692 12.9744 31.6176ZM13.8164 15.2902L14.8381 19.6516L17.5818 20.7249L22.7 17.1015V13.8023L19.2951 11.4492C17.1555 12.2517 15.2756 13.5856 13.8164 15.2902Z" fill="black"/>
    </Svg>
  );
};
