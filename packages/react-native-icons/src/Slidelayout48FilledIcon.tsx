import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Slidelayout48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 13.7909 9.79086 12 12 12H36C38.2091 12 40 13.7909 40 16V32C40 34.2091 38.2091 36 36 36H12C9.79086 36 8 34.2091 8 32V16ZM16 16.7C14.1775 16.7 12.7 18.1775 12.7 20V28C12.7 29.8225 14.1775 31.3 16 31.3H32C33.8225 31.3 35.3 29.8225 35.3 28V20C35.3 18.1775 33.8225 16.7 32 16.7H16Z" fill="black"/>
<path d="M32.7 25.3H21.3V28.7H32C32.3866 28.7 32.7 28.3866 32.7 28V25.3Z" fill="black"/>
<path d="M18.7 28.7V25.3H15.3V28C15.3 28.3866 15.6134 28.7 16 28.7H18.7Z" fill="black"/>
<path d="M16 19.3C15.6134 19.3 15.3 19.6134 15.3 20V22.7H32.7V20C32.7 19.6134 32.3866 19.3 32 19.3H16Z" fill="black"/>
    </Svg>
  );
};
