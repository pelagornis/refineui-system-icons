import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Barcharthorizontal48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16H22C24.2091 16 26 14.2091 26 12C26 9.79086 24.2091 8 22 8H12ZM22 10.6H12C11.2268 10.6 10.6 11.2268 10.6 12C10.6 12.7732 11.2268 13.4 12 13.4H22C22.7732 13.4 23.4 12.7732 23.4 12C23.4 11.2268 22.7732 10.6 22 10.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C9.79086 20 8 21.7909 8 24C8 26.2091 9.79086 28 12 28H28C30.2091 28 32 26.2091 32 24C32 21.7909 30.2091 20 28 20H12ZM28 22.6H12C11.2268 22.6 10.6 23.2268 10.6 24C10.6 24.7732 11.2268 25.4 12 25.4H28C28.7732 25.4 29.4 24.7732 29.4 24C29.4 23.2268 28.7732 22.6 28 22.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 36C8 33.7909 9.79086 32 12 32H36C38.2091 32 40 33.7909 40 36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36ZM12 34.6H36C36.7732 34.6 37.4 35.2268 37.4 36C37.4 36.7732 36.7732 37.4 36 37.4H12C11.2268 37.4 10.6 36.7732 10.6 36C10.6 35.2268 11.2268 34.6 12 34.6Z" fill="black"/>
    </Svg>
  );
};
