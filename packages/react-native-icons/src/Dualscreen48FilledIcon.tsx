import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Dualscreen48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 13.7909 9.79086 12 12 12H21.7C22.2523 12 22.7 12.4477 22.7 13V35C22.7 35.5523 22.2523 36 21.7 36H12C9.79086 36 8 34.2091 8 32V16ZM25.3 35C25.3 35.5523 25.7477 36 26.3 36H36C38.2091 36 40 34.2091 40 32V16C40 13.7909 38.2091 12 36 12H26.3C25.7477 12 25.3 12.4477 25.3 13V35ZM30 29.7C29.282 29.7 28.7 30.282 28.7 31C28.7 31.718 29.282 32.3 30 32.3H32C32.718 32.3 33.3 31.718 33.3 31C33.3 30.282 32.718 29.7 32 29.7H30ZM16 29.7C15.282 29.7 14.7 30.282 14.7 31C14.7 31.718 15.282 32.3 16 32.3H18C18.718 32.3 19.3 31.718 19.3 31C19.3 30.282 18.718 29.7 18 29.7H16Z" fill="black"/>
    </Svg>
  );
};
