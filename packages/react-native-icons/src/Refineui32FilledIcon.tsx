import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Refineui32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 25.8889V10.7505C5 6.31069 9.13032 5.06692 11.1955 5H25.7735C26.0237 5 26.2266 5.19899 26.2266 5.44444V10.7505C26.2002 15.0355 22.7003 16.8201 20.6519 17.2603C20.4877 17.2956 20.4072 17.4843 20.5038 17.6191L26.2501 25.6332C26.4612 25.9277 26.2464 26.3333 25.8794 26.3333H19.6912C19.5374 26.3333 19.394 26.2568 19.3105 26.1301L13.9286 17.9592C13.806 17.7731 13.5117 17.8582 13.5117 18.0798V25.8889C13.5117 26.1343 13.3088 26.3333 13.0585 26.3333H5.45317C5.20289 26.3333 5 26.1343 5 25.8889Z" fill="black"/>
    </Svg>
  );
};
