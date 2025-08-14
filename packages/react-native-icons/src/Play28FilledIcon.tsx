import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Play28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9678 15.464C23.8996 14.9981 23.8996 13.6685 22.9678 13.2027L6.82977 5.13509C5.98911 4.71483 5 5.32603 5 6.26575V22.4009C5 23.3406 5.98911 23.9518 6.82977 23.5316L22.9678 15.464Z" fill="black"/>
    </Svg>
  );
};
