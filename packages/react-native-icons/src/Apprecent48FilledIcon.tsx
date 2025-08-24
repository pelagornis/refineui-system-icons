import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Apprecent48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M29 8C31.2091 8 33 9.79086 33 12V36C33 38.2091 31.2091 40 29 40H19C16.7909 40 15 38.2091 15 36V12C15 9.79086 16.7909 8 19 8H29Z" fill="black"/>
<path d="M8 16C8 13.7909 9.79086 12 12 12H13.5V36H12C9.79086 36 8 34.2091 8 32V16Z" fill="black"/>
<path d="M36 36C38.2091 36 40 34.2091 40 32V16C40 13.7909 38.2091 12 36 12H34.5V36H36Z" fill="black"/>
    </Svg>
  );
};
