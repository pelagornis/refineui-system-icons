import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Note48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.7 39C22.7 39.5523 22.2523 40 21.7 40H11.9988C9.78965 40 8 38.2091 8 36V12C8 9.79086 9.79086 8 12 8H36C38.2091 8 40 9.79086 40 12V21.7C40 22.2523 39.5523 22.7 39 22.7H28C25.0734 22.7 22.7 25.0712 22.7 27.9988V39Z" fill="black"/>
<path d="M28 25.3C26.5083 25.3 25.3 26.5081 25.3 27.9988V37.4929C25.3 37.9383 25.8386 38.1614 26.1536 37.8464L37.8464 26.1536C38.1614 25.8386 37.9383 25.3 37.4929 25.3H28Z" fill="black"/>
    </Svg>
  );
};
