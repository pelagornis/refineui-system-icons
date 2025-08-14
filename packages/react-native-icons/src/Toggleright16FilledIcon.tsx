import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toggleright16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.66667 11C11.5076 11 13 9.50762 13 7.66667C13 5.82572 11.5076 4.33333 9.66667 4.33333L5.66667 4.33333C3.82572 4.33333 2.33333 5.82572 2.33333 7.66667C2.33333 9.50761 3.82572 11 5.66667 11L9.66667 11ZM7.66667 7.66667C7.66667 6.5621 8.5621 5.66667 9.66667 5.66667C10.7712 5.66667 11.6667 6.5621 11.6667 7.66667C11.6667 8.77124 10.7712 9.66667 9.66667 9.66667C8.5621 9.66667 7.66667 8.77124 7.66667 7.66667Z" fill="black"/>
    </Svg>
  );
};
