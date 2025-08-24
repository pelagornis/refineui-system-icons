import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Barcharthorizontaldescending48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 40C9.79086 40 8 38.2091 8 36C8 33.7909 9.79086 32 12 32H22C24.2091 32 26 33.7909 26 36C26 38.2091 24.2091 40 22 40H12ZM22 37.4L12 37.4C11.2268 37.4 10.6 36.7732 10.6 36C10.6 35.2268 11.2268 34.6 12 34.6H22C22.7732 34.6 23.4 35.2268 23.4 36C23.4 36.7732 22.7732 37.4 22 37.4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 28C9.79086 28 8 26.2091 8 24C8 21.7909 9.79086 20 12 20L28 20C30.2091 20 32 21.7909 32 24C32 26.2091 30.2091 28 28 28L12 28ZM28 25.4L12 25.4C11.2268 25.4 10.6 24.7732 10.6 24C10.6 23.2268 11.2268 22.6 12 22.6L28 22.6C28.7732 22.6 29.4 23.2268 29.4 24C29.4 24.7732 28.7732 25.4 28 25.4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 14.2091 9.79086 16 12 16L36 16C38.2091 16 40 14.2091 40 12C40 9.79087 38.2091 8 36 8L12 8C9.79086 8 8 9.79086 8 12ZM12 13.4L36 13.4C36.7732 13.4 37.4 12.7732 37.4 12C37.4 11.2268 36.7732 10.6 36 10.6L12 10.6C11.2268 10.6 10.6 11.2268 10.6 12C10.6 12.7732 11.2268 13.4 12 13.4Z" fill="black"/>
    </Svg>
  );
};
