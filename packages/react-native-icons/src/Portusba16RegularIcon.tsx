import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Portusba16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 5C3.59695 5 3 5.59695 3 6.33333V8.33333C3 9.06971 3.59695 9.66667 4.33333 9.66667H12.3333C13.0697 9.66667 13.6667 9.06971 13.6667 8.33333V6.33333C13.6667 5.59695 13.0697 5 12.3333 5H4.33333ZM4.16667 5.66667C3.98257 5.66667 3.83333 5.81591 3.83333 6V7.33333H12.8333V6C12.8333 5.81591 12.6841 5.66667 12.5 5.66667H4.16667Z" fill="black"/>
    </Svg>
  );
};
