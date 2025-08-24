import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Slidelayout48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 16.7C14.1775 16.7 12.7 18.1775 12.7 20V28C12.7 29.8225 14.1775 31.3 16 31.3H32C33.8225 31.3 35.3 29.8225 35.3 28V20C35.3 18.1775 33.8225 16.7 32 16.7H16ZM15.3 20C15.3 19.6134 15.6134 19.3 16 19.3H32C32.3866 19.3 32.7 19.6134 32.7 20V22.7H15.3V20ZM21.3 25.3H32.7V28C32.7 28.3866 32.3866 28.7 32 28.7H21.3V25.3ZM18.7 25.3V28.7H16C15.6134 28.7 15.3 28.3866 15.3 28V25.3H18.7Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 13.7909 9.79086 12 12 12H36C38.2091 12 40 13.7909 40 16V32C40 34.2091 38.2091 36 36 36H12C9.79086 36 8 34.2091 8 32V16ZM12 14.6H36C36.7732 14.6 37.4 15.2268 37.4 16V32C37.4 32.7732 36.7732 33.4 36 33.4H12C11.2268 33.4 10.6 32.7732 10.6 32V16C10.6 15.2268 11.2268 14.6 12 14.6Z" fill="black"/>
    </Svg>
  );
};
