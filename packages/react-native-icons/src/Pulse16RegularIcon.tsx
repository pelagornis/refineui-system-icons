import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pulse16RegularIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.989 6.03579L6.20431 7.83008C6.08228 8.10913 5.80656 8.28945 5.50193 8.28945H3.43328C3.19399 8.28945 3 8.09552 3 7.85629C3 7.61705 3.19399 7.42312 3.43328 7.42312H5.43652L6.29531 5.45938C6.57269 4.82511 7.48246 4.85444 7.71839 5.50526L9.33 9.95086L10.1337 7.90888C10.2491 7.6158 10.532 7.42312 10.847 7.42312H13.2334C13.4727 7.42312 13.6667 7.61705 13.6667 7.85629C13.6667 8.09552 13.4727 8.28945 13.2334 8.28945H10.9152L10.0395 10.5142C9.78083 11.1714 8.84615 11.1587 8.60546 10.4948L6.989 6.03579Z" fill="black"/>
    </Svg>
  );
};
