import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Board48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M40 32.3C40 31.1954 39.1046 30.3 38 30.3H27.3C26.1954 30.3 25.3 31.1954 25.3 32.3V38C25.3 39.1046 26.1954 40 27.3 40H36C38.2091 40 40 38.2091 40 36V32.3Z" fill="black"/>
<path d="M22.7 22.3C22.7 21.1954 21.8046 20.3 20.7 20.3H10C8.89543 20.3 8 21.1954 8 22.3V36C8 38.2091 9.79086 40 12 40H20.7C21.8046 40 22.7 39.1046 22.7 38V22.3Z" fill="black"/>
<path d="M8 15.7C8 16.8046 8.89543 17.7 10 17.7H20.7C21.8046 17.7 22.7 16.8046 22.7 15.7V10C22.7 8.89543 21.8046 8 20.7 8H12C9.79086 8 8 9.79086 8 12V15.7Z" fill="black"/>
<path d="M25.3 25.7C25.3 26.8046 26.1954 27.7 27.3 27.7H38C39.1046 27.7 40 26.8046 40 25.7V12C40 9.79086 38.2091 8 36 8H27.3C26.1954 8 25.3 8.89543 25.3 10V25.7Z" fill="black"/>
    </Svg>
  );
};
