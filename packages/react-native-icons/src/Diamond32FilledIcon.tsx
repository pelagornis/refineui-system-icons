import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Diamond32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13.5632 5.87127C14.7249 4.70958 16.6084 4.70958 17.7701 5.87127L25.4621 13.5632C26.6238 14.7249 26.6238 16.6084 25.4621 17.7701L17.7701 25.4621C16.6084 26.6238 14.7249 26.6238 13.5632 25.4621L5.87127 17.7701C4.70958 16.6084 4.70958 14.7249 5.87127 13.5632L13.5632 5.87127Z" fill="black"/>
    </Svg>
  );
};
