import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Highlight16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 3C4.59695 3 4 3.59695 4 4.33333V6.20325C4 6.93963 4.59695 7.53659 5.33333 7.53659H10.6667C11.403 7.53659 12 6.93963 12 6.20325V4.33333C12 3.59695 11.403 3 10.6667 3H5.33333Z" fill="black"/>
<path d="M11.3333 8.45944C11.3333 8.2057 11.1276 8 10.8739 8H5.1261C4.87236 8 4.66667 8.2057 4.66667 8.45944C4.66667 8.96692 5.07806 9.37831 5.58554 9.37831H10.4145C10.9219 9.37831 11.3333 8.96692 11.3333 8.45944Z" fill="black"/>
<path d="M5.56667 12.5655V10.3333C5.56667 10.1492 5.7159 10 5.9 10H10.1C10.2841 10 10.4333 10.1492 10.4333 10.3333V11.6627C10.4333 12.1343 10.1327 12.5534 9.68607 12.7046L7.0194 13.6074C6.30618 13.8489 5.56667 13.3185 5.56667 12.5655Z" fill="black"/>
    </Svg>
  );
};
