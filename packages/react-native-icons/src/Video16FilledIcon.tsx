import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Video16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.33333 5C3.59695 5 3 5.59695 3 6.33333V10.3333C3 11.0697 3.59695 11.6667 4.33333 11.6667H9C9.73638 11.6667 10.3333 11.0697 10.3333 10.3333V6.33333C10.3333 5.59695 9.73638 5 9 5H4.33333Z" fill="black"/>
<path d="M13.6667 10.2433V6.42336C13.6667 5.85814 13.0074 5.54937 12.5732 5.91122L10.8428 7.3532C10.6908 7.47986 10.6029 7.6675 10.6029 7.86535V8.80132C10.6029 8.99917 10.6908 9.18681 10.8428 9.31347L12.5732 10.7555C13.0074 11.1173 13.6667 10.8085 13.6667 10.2433Z" fill="black"/>
    </Svg>
  );
};
