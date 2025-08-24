import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Equal32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.33323 11C5.59691 11 5 11.5968 5 12.3329C5 13.0691 5.59691 13.6659 6.33323 13.6659H25.0001C25.7364 13.6659 26.3333 13.0691 26.3333 12.3329C26.3333 11.5968 25.7364 11 25.0001 11H6.33323Z" fill="black"/>
<path d="M6.33323 19.0008C5.59691 19.0008 5 19.5976 5 20.3337C5 21.0699 5.59691 21.6667 6.33323 21.6667H25.0001C25.7364 21.6667 26.3333 21.0699 26.3333 20.3337C26.3333 19.5976 25.7364 19.0008 25.0001 19.0008H6.33323Z" fill="black"/>
    </Svg>
  );
};
