import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Hatgraduation20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10.3324 4.12254C10.0412 3.95915 9.68595 3.95915 9.39479 4.12254L3 7.71032V12.0177C3 12.3168 3.24245 12.5592 3.54154 12.5592C3.84064 12.5592 4.08309 12.3168 4.08309 12.0177V9.0095L9.35218 12.3353C9.6646 12.5325 10.0625 12.5325 10.375 12.3353L15.8833 8.85852C16.4972 8.47104 16.4739 7.56821 15.8407 7.21299L10.3324 4.12254Z" fill="black"/>
<path d="M10.3455 13.169L14.1688 10.7558V13.2154C14.1688 13.4087 14.1105 13.6179 13.9687 13.794C13.3965 14.5042 11.9446 15.6636 9.83413 15.6636C7.72358 15.6636 6.27174 14.5042 5.69958 13.794C5.55761 13.6179 5.49934 13.4087 5.49934 13.2154V10.7558L9.32269 13.169C9.6351 13.3662 10.033 13.3662 10.3455 13.169Z" fill="black"/>
    </Svg>
  );
};
