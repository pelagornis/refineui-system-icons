import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Piano48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M26 25V9C26 8.44772 25.5523 8 25 8H23C22.4477 8 22 8.44772 22 9V25C22 26.079 21.4304 27.025 20.5754 27.5535C20.412 27.6545 20.3 27.8266 20.3 28.0186V39C20.3 39.5523 20.7477 40 21.3 40H26.7C27.2523 40 27.7 39.5523 27.7 39V28.0186C27.7 27.8266 27.588 27.6545 27.4246 27.5535C26.5696 27.025 26 26.079 26 25Z" fill="black"/>
<path d="M33 8C32.4477 8 32 8.44772 32 9V25C32 26.079 31.4304 27.025 30.5754 27.5535C30.412 27.6545 30.3 27.8266 30.3 28.0186V39C30.3 39.5523 30.7477 40 31.3 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8H33Z" fill="black"/>
<path d="M16.7 40C17.2523 40 17.7 39.5523 17.7 39V28.0186C17.7 27.8266 17.588 27.6545 17.4246 27.5535C16.5696 27.025 16 26.079 16 25V9C16 8.44772 15.5523 8 15 8H12C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H16.7Z" fill="black"/>
    </Svg>
  );
};
