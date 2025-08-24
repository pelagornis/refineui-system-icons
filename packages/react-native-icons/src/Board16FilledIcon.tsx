import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Board16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13.6667 11.1C13.6667 10.7318 13.3682 10.4333 13 10.4333H9.43333C9.06514 10.4333 8.76667 10.7318 8.76667 11.1V13C8.76667 13.3682 9.06514 13.6667 9.43333 13.6667H12.3333C13.0697 13.6667 13.6667 13.0697 13.6667 12.3333V11.1Z" fill="black"/>
<path d="M7.9 7.76667C7.9 7.39848 7.60152 7.1 7.23333 7.1H3.66667C3.29848 7.1 3 7.39848 3 7.76667V12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667H7.23333C7.60152 13.6667 7.9 13.3682 7.9 13V7.76667Z" fill="black"/>
<path d="M3 5.56667C3 5.93486 3.29848 6.23333 3.66667 6.23333H7.23333C7.60152 6.23333 7.9 5.93486 7.9 5.56667V3.66667C7.9 3.29848 7.60152 3 7.23333 3H4.33333C3.59695 3 3 3.59695 3 4.33333V5.56667Z" fill="black"/>
<path d="M8.76667 8.9C8.76667 9.26819 9.06514 9.56667 9.43333 9.56667H13C13.3682 9.56667 13.6667 9.26819 13.6667 8.9V4.33333C13.6667 3.59695 13.0697 3 12.3333 3H9.43333C9.06514 3 8.76667 3.29848 8.76667 3.66667V8.9Z" fill="black"/>
    </Svg>
  );
};
