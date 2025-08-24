import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Togglemultiple48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 8C11.3579 8 8 11.3579 8 15.5C8 19.6421 11.3579 23 15.5 23H32.5C36.6421 23 40 19.6421 40 15.5C40 11.3579 36.6421 8 32.5 8H15.5ZM32 19.5C34.2091 19.5 36 17.7091 36 15.5C36 13.2909 34.2091 11.5 32 11.5C29.7909 11.5 28 13.2909 28 15.5C28 17.7091 29.7909 19.5 32 19.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 25C11.3579 25 8 28.3579 8 32.5C8 36.6421 11.3579 40 15.5 40H32.5C36.6421 40 40 36.6421 40 32.5C40 28.3579 36.6421 25 32.5 25H15.5ZM20 32.5C20 34.7091 18.2091 36.5 16 36.5C13.7909 36.5 12 34.7091 12 32.5C12 30.2909 13.7909 28.5 16 28.5C18.2091 28.5 20 30.2909 20 32.5Z" fill="black"/>
    </Svg>
  );
};
