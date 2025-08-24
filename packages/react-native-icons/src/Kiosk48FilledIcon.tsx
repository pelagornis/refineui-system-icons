import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Kiosk48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 12C10 9.79086 11.7909 8 14 8H34C36.2091 8 38 9.79086 38 12V22.4193C38 24.6284 36.2091 26.4193 34 26.4193H28.3V37.3988H32C32.718 37.3988 33.3 37.9808 33.3 38.6988C33.3 39.4168 32.718 39.9988 32 39.9988H16C15.282 39.9988 14.7 39.4168 14.7 38.6988C14.7 37.9808 15.282 37.3988 16 37.3988H19.7V26.4193H14C11.7909 26.4193 10 24.6284 10 22.4193V12ZM22.3 26.4193V37.3988H25.7V26.4193H22.3Z" fill="black"/>
    </Svg>
  );
};
