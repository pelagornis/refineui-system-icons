import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Piano48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 9.79086 9.79086 8 12 8H36C38.2091 8 40 9.79086 40 12V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V12ZM22 10.6H26V25C26 26.079 26.5696 27.025 27.4246 27.5535C27.588 27.6545 27.7 27.8266 27.7 28.0186V37.4H20.3V28.0186C20.3 27.8266 20.412 27.6545 20.5754 27.5535C21.4304 27.025 22 26.079 22 25V10.6ZM30.3 37.4H36C36.7732 37.4 37.4 36.7732 37.4 36V12C37.4 11.2268 36.7732 10.6 36 10.6H32V25C32 26.079 31.4304 27.025 30.5754 27.5535C30.412 27.6545 30.3 27.8266 30.3 28.0186V37.4ZM17.4246 27.5535C17.588 27.6545 17.7 27.8266 17.7 28.0186V37.4H12C11.2268 37.4 10.6 36.7732 10.6 36V12C10.6 11.2268 11.2268 10.6 12 10.6H16V25C16 26.079 16.5696 27.025 17.4246 27.5535Z" fill="black"/>
    </Svg>
  );
};
