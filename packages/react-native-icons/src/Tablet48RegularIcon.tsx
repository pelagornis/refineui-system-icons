import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Tablet48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M18 32.7C17.282 32.7 16.7 33.282 16.7 34C16.7 34.718 17.282 35.3 18 35.3H30C30.718 35.3 31.3 34.718 31.3 34C31.3 33.282 30.718 32.7 30 32.7H18Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 12C10 9.79086 11.7909 8 14 8H34C36.2091 8 38 9.79086 38 12V36C38 38.2091 36.2091 40 34 40H14C11.7909 40 10 38.2091 10 36V12ZM14 10.6H34C34.7732 10.6 35.4 11.2268 35.4 12V36C35.4 36.7732 34.7732 37.4 34 37.4H14C13.2268 37.4 12.6 36.7732 12.6 36V12C12.6 11.2268 13.2268 10.6 14 10.6Z" fill="black"/>
    </Svg>
  );
};
