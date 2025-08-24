import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Grid20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.66667C3 3.74619 3.74619 3 4.66667 3H7.16667C8.08714 3 8.83333 3.74619 8.83333 4.66667V7.16667C8.83333 8.08714 8.08714 8.83333 7.16667 8.83333H4.66667C3.74619 8.83333 3 8.08714 3 7.16667V4.66667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 12.1667C10.5 11.2462 11.2462 10.5 12.1667 10.5H14.6667C15.5871 10.5 16.3333 11.2462 16.3333 12.1667V14.6667C16.3333 15.5871 15.5871 16.3333 14.6667 16.3333H12.1667C11.2462 16.3333 10.5 15.5871 10.5 14.6667V12.1667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 10.5C3.74619 10.5 3 11.2462 3 12.1667V14.6667C3 15.5871 3.74619 16.3333 4.66667 16.3333H7.16667C8.08714 16.3333 8.83333 15.5871 8.83333 14.6667V12.1667C8.83333 11.2462 8.08714 10.5 7.16667 10.5H4.66667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 4.66667C10.5 3.74619 11.2462 3 12.1667 3H14.6667C15.5871 3 16.3333 3.74619 16.3333 4.66667V7.16667C16.3333 8.08714 15.5871 8.83333 14.6667 8.83333H12.1667C11.2462 8.83333 10.5 8.08714 10.5 7.16667V4.66667Z" fill="black"/>
    </Svg>
  );
};
