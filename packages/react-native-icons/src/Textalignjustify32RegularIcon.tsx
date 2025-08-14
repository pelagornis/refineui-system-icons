import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignjustify32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 10.8451C6 10.3784 6.38803 10 6.86669 10H25.1333C25.612 10 26 10.3784 26 10.8451C26 11.3119 25.612 11.6903 25.1333 11.6903H6.86669C6.38803 11.6903 6 11.3119 6 10.8451Z" fill="black"/>
<path d="M6 16.5C6 16.0332 6.38803 15.6549 6.86669 15.6549H25.1333C25.612 15.6549 26 16.0332 26 16.5C26 16.9668 25.612 17.3451 25.1333 17.3451H6.86669C6.38803 17.3451 6 16.9668 6 16.5Z" fill="black"/>
<path d="M6.86669 21.3097C6.38803 21.3097 6 21.6881 6 22.1549C6 22.6216 6.38803 23 6.86669 23H25.1333C25.612 23 26 22.6216 26 22.1549C26 21.6881 25.612 21.3097 25.1333 21.3097H6.86669Z" fill="black"/>
    </Svg>
  );
};
