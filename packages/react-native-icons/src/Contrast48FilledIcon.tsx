import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Contrast48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C15.176 40 8.02031 32.8568 8.00004 24.0376C8.00001 24.025 8 24.0125 8 24C8 23.9875 8.00001 23.975 8.00004 23.9624C8.01009 19.5896 9.77435 15.6288 12.6264 12.7465C12.6463 12.7264 12.6663 12.7063 12.6863 12.6863C12.7063 12.6663 12.7264 12.6463 12.7465 12.6264C15.6288 9.77435 19.5896 8.01009 23.9624 8.00004C23.975 8.00001 23.9875 8 24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40ZM24 37.4V10.6C31.4006 10.6 37.4 16.5994 37.4 24C37.4 31.4006 31.4006 37.4 24 37.4Z" fill="black"/>
    </Svg>
  );
};
