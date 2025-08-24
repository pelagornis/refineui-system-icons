import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronup48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10.0406 32.7657C9.54424 33.1146 8.85668 33.0755 8.40208 32.6373C7.88285 32.1364 7.86435 31.304 8.35912 30.7785L22.6975 15.5639C23.3623 14.8592 24.4469 14.8148 25.1641 15.4316L25.3027 15.5639L39.6411 30.7785L39.8032 30.9879C40.1241 31.5061 40.0508 32.199 39.5962 32.6373C39.1417 33.0746 38.4557 33.1141 37.9597 32.7657L37.7585 32.5919L24.0001 17.9937L10.2398 32.5919L10.0406 32.7657Z" fill="black"/>
    </Svg>
  );
};
