import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rewind32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.3083 22.5671C18.3083 23.6685 17.1937 24.3569 16.302 23.8062L5.66877 17.2391C4.77709 16.6884 4.77709 15.3116 5.66876 14.7609L16.302 8.19382C17.1937 7.64312 18.3083 8.33149 18.3083 9.43289L18.3083 11.6632C18.3083 11.7734 18.4197 11.8422 18.5089 11.7871L24.3271 8.19382C25.2188 7.64312 26.3333 8.33149 26.3333 9.43289L26.3333 22.5671C26.3333 23.6685 25.2187 24.3569 24.3271 23.8062L18.5089 20.2129C18.4197 20.1578 18.3083 20.2266 18.3083 20.3368L18.3083 22.5671Z" fill="black"/>
    </Svg>
  );
};
