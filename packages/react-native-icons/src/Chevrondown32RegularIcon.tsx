import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevrondown32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M24.9729 10.1544C25.3038 9.92448 25.7622 9.95023 26.0653 10.2391C26.4114 10.5693 26.4238 11.118 26.0939 11.4644L16.535 21.4937C16.0918 21.9583 15.3687 21.9875 14.8906 21.581L14.7982 21.4937L5.23924 11.4644L5.13118 11.3264C4.91729 10.9848 4.96612 10.528 5.26919 10.2391C5.57219 9.95079 6.02954 9.92476 6.36022 10.1544L6.49432 10.269L15.6666 19.8921L24.8401 10.269L24.9729 10.1544Z" fill="black"/>
    </Svg>
  );
};
