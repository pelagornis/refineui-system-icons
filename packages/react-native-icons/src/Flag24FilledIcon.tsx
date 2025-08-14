import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Flag24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.3 16.5814C5.3 16.3053 5.52386 16.0814 5.8 16.0814H18.289C19.6 16.0814 20.534 14.6166 19.6486 13.4762L17.1196 10.2186C17.0349 10.1095 17.0349 9.97197 17.1196 9.86283L19.6486 6.60521C20.534 5.46478 19.6 4 18.289 4H5.69624C4.80005 4 4 4.69052 4 5.63013V19.3519C4 19.7109 4.29101 20.0019 4.65 20.0019C5.00899 20.0019 5.3 19.7109 5.3 19.3519V16.5814Z" fill="black"/>
    </Svg>
  );
};
