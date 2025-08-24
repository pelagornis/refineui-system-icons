import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Next48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.6774 22.2138C34.9163 22.9772 34.9163 24.7132 33.6774 25.4766L11.1173 39.3791C9.7708 40.2089 8 39.2821 8 37.7477V9.94261C8 8.40819 9.7708 7.48145 11.1173 8.3112L33.6774 22.2138Z" fill="black"/>
<path d="M40 9.98065C40 9.26269 39.4179 8.68067 38.7 8.68067C37.982 8.68067 37.3999 9.26269 37.3999 9.98065V38.7C37.3999 39.418 37.982 40 38.7 40C39.4179 40 40 39.418 40 38.7V9.98065Z" fill="black"/>
    </Svg>
  );
};
