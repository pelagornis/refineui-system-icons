import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Crop16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.5098 3C5.85634 3 6.13726 3.28092 6.13726 3.62745V9.90196C6.13726 10.2485 6.41817 10.5294 6.76471 10.5294H13.0392C13.3857 10.5294 13.6667 10.8103 13.6667 11.1569C13.6667 11.5034 13.3857 11.7843 13.0392 11.7843H6.76471C5.72511 11.7843 4.88235 10.9416 4.88235 9.90196V3.62745C4.88235 3.28092 5.16327 3 5.5098 3Z" fill="black"/>
<path d="M4.2549 4.88235H3.62745C3.28092 4.88235 3 5.16327 3 5.5098C3 5.85634 3.28092 6.13726 3.62745 6.13726H4.2549V4.88235Z" fill="black"/>
<path d="M10.5294 12.4118V13.0392C10.5294 13.3857 10.8103 13.6667 11.1569 13.6667C11.5034 13.6667 11.7843 13.3857 11.7843 13.0392V12.4118H10.5294Z" fill="black"/>
<path d="M11.7843 9.90196V6.76471C11.7843 5.72511 10.9416 4.88235 9.90196 4.88235H6.76471V6.13726H9.90196C10.2485 6.13726 10.5294 6.41817 10.5294 6.76471V9.90196H11.7843Z" fill="black"/>
    </Svg>
  );
};
