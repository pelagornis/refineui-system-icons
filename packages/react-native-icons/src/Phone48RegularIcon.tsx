import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Phone48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M25.5 12H22.5C21.6716 12 21 12.6716 21 13.5C21 14.3284 21.6716 15 22.5 15H25.5C26.3284 15 27 14.3284 27 13.5C27 12.6716 26.3284 12 25.5 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 12C14 9.79086 15.7909 8 18 8H30C32.2091 8 34 9.79086 34 12V36C34 38.2091 32.2091 40 30 40H18C15.7909 40 14 38.2091 14 36V12ZM18 10.6H30C30.7732 10.6 31.4 11.2268 31.4 12V36C31.4 36.7732 30.7732 37.4 30 37.4H18C17.2268 37.4 16.6 36.7732 16.6 36V12C16.6 11.2268 17.2268 10.6 18 10.6Z" fill="black"/>
    </Svg>
  );
};
