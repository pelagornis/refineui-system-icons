import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Portmicrousb24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.63506 9.35854C7.83559 9.13254 8.12373 9 8.43003 9H15.5718C15.8781 9 16.1663 9.13254 16.3668 9.35854L18.5118 11.7761C19.5939 12.9956 18.7782 15.0029 17.0993 15.0029H6.9025C5.22367 15.0029 4.40797 12.9956 5.49002 11.7761L7.63506 9.35854Z" fill="black"/>
    </Svg>
  );
};
