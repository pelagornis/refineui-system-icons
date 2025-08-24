import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chatadd48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M25.3 17C25.3 16.282 24.718 15.7 24 15.7C23.282 15.7 22.7 16.282 22.7 17V22.7H17C16.282 22.7 15.7 23.282 15.7 24C15.7 24.718 16.282 25.3 17 25.3H22.7V31C22.7 31.718 23.282 32.3 24 32.3C24.718 32.3 25.3 31.718 25.3 31V25.3H31C31.718 25.3 32.3 24.718 32.3 24C32.3 23.282 31.718 22.7 31 22.7H25.3V17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8365 40 40 32.8365 40 24C40 15.1635 32.8365 8 24 8C15.1635 8 8 15.1635 8 24V38C8 39.1046 8.89543 40 10 40H24ZM37.4 24C37.4 31.4006 31.4006 37.4 24 37.4H10.6V24C10.6 16.5994 16.5994 10.6 24 10.6C31.4006 10.6 37.4 16.5994 37.4 24Z" fill="black"/>
    </Svg>
  );
};
