import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Locationarrow28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.4585 6.86359C24.6533 6.33828 24.1272 5.83398 23.6119 6.05213L7.38971 12.921C6.84754 13.1506 6.87831 13.9305 7.43687 14.1165L13.8248 16.2435C14.0141 16.3066 14.1631 16.4547 14.2275 16.6439L16.8099 24.2336C17.0035 24.8028 17.8031 24.8136 18.012 24.25L24.4585 6.86359Z" fill="black"/>
    </Svg>
  );
};
