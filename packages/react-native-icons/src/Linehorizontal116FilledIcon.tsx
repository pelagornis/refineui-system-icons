import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Linehorizontal116FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6667 7.66661C13.6667 8.03477 13.4476 8.33323 13.1774 8.33323L3.48928 8.33322C3.21906 8.33322 3 8.03477 3 7.66661C3 7.29845 3.21906 7 3.48928 7L13.1774 7C13.4476 7 13.6667 7.29845 13.6667 7.66661Z" fill="black"/>
    </Svg>
  );
};
