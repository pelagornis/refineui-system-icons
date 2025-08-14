import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Aligntop16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 3.43327C3 3.67255 3.19398 3.86653 3.43327 3.86653L13.2334 3.86653C13.4727 3.86653 13.6667 3.67255 13.6667 3.43327C13.6667 3.19398 13.4727 3 13.2334 3L3.43327 3C3.19398 3 3 3.19398 3 3.43327Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.13327 5.82484C4.13327 5.08858 4.73013 4.49172 5.46639 4.49172H6.6502C7.38646 4.49172 7.98332 5.08858 7.98332 5.82484V12.332C7.98332 13.0683 7.38646 13.6652 6.6502 13.6652H5.46639C4.73013 13.6652 4.13327 13.0683 4.13327 12.332L4.13327 5.82484Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0165 4.49172C9.28019 4.49172 8.68333 5.08858 8.68333 5.82484V10.2151C8.68333 10.9514 9.28019 11.5482 10.0165 11.5482H11.2003C11.9365 11.5482 12.5334 10.9514 12.5334 10.2151V5.82484C12.5334 5.08858 11.9365 4.49172 11.2003 4.49172H10.0165Z" fill="black"/>
    </Svg>
  );
};
