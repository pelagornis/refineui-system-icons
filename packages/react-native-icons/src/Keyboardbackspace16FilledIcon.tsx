import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardbackspace16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.40382 5.23096C7.65273 5.50969 7.62093 5.93085 7.33279 6.17164L5.54211 7.66807H12.9772C13.358 7.66807 13.6667 7.96666 13.6667 8.335C13.6667 8.70334 13.358 9.00193 12.9772 9.00193H5.54211L7.33279 10.4984C7.62093 10.7392 7.65273 11.1603 7.40382 11.439C7.15492 11.7178 6.71956 11.7485 6.43143 11.5078L3.23874 8.83969C2.92042 8.57369 2.92042 8.09631 3.23874 7.83031L6.43143 5.16225C6.71956 4.92146 7.15492 4.95222 7.40382 5.23096Z" fill="black"/>
    </Svg>
  );
};
