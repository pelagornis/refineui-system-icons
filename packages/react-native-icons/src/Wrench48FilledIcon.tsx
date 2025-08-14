import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Wrench48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.1065 16.792C22.1065 11.9114 26.1372 8 31.0532 8C32.0861 8 33.0809 8.17249 34.0077 8.49104L35.9985 9.17525L30.7635 14.3043C30.05 15.0034 30.05 16.1255 30.7635 16.8246C31.4918 17.5382 32.6835 17.5382 33.4118 16.8246L38.6215 11.7203L39.3542 13.5069C39.771 14.5232 40 15.6327 40 16.792C40 21.6726 35.9692 25.584 31.0532 25.584C30.299 25.584 29.565 25.492 28.863 25.3183L15.1046 38.7982C13.4794 40.3905 10.8552 40.3905 9.23002 38.7982C7.58999 37.1914 7.58999 34.5749 9.23002 32.9681L22.6511 19.8187C22.2988 18.8743 22.1065 17.8544 22.1065 16.792Z" fill="black"/>
    </Svg>
  );
};
