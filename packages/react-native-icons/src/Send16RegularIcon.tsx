import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Send16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.475 8.02324C13.7306 8.151 13.7306 8.51566 13.475 8.64343L3.50179 13.6296C3.27125 13.7449 3 13.5773 3 13.3195V3.34714C3 3.08942 3.27125 2.92179 3.50179 3.03705L13.475 8.02324ZM3.90149 4.52518C3.90149 4.39631 4.03711 4.3125 4.15238 4.37013L11.7693 8.17829C11.8971 8.24217 11.8971 8.4245 11.7693 8.48838L4.15238 12.2965C4.03711 12.3542 3.90149 12.2704 3.90149 12.1415V8.95739C3.90149 8.86165 3.97911 8.78404 4.07485 8.78404H6.81399C7.06293 8.78404 7.26473 8.58225 7.26473 8.33333C7.26473 8.08441 7.06293 7.88263 6.81399 7.88263H4.07485C3.97911 7.88263 3.90149 7.80502 3.90149 7.70928L3.90149 4.52518Z" fill="black"/>
    </Svg>
  );
};
