import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Cursor32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.94515 5.07829C5.79136 4.6937 4.69369 5.79137 5.07829 6.94515L11.2046 25.3241C11.6412 26.6337 13.4762 26.6807 13.9792 25.3952L16.7194 18.3925C17.0194 17.6259 17.6259 17.0193 18.3926 16.7193L25.3952 13.9792C26.6807 13.4761 26.6337 11.6411 25.3241 11.2046L6.94515 5.07829ZM6.8855 6.8855L12.6242 24.1014L15.1052 17.7609C15.5814 16.5441 16.5441 15.5814 17.7609 15.1052L24.1014 12.6241L6.8855 6.8855Z" fill="black"/>
    </Svg>
  );
};
