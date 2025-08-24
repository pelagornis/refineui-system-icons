import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Sim16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8047 6.13807C11.9298 6.2631 12 6.43266 12 6.60948V13C12 13.3682 11.7015 13.6667 11.3333 13.6667H4.66667C4.29848 13.6667 4 13.3682 4 13V3.66667C4 3.29848 4.29848 3 4.66667 3H8.39052C8.56734 3 8.7369 3.07024 8.86193 3.19526L11.8047 6.13807ZM7.56667 12.1V7.23333H6.66667C6.05915 7.23333 5.56667 7.72582 5.56667 8.33333V11C5.56667 11.6075 6.05915 12.1 6.66667 12.1H7.56667ZM8.43333 10.1V12.1H9.33333C9.94085 12.1 10.4333 11.6075 10.4333 11V10.1H8.43333ZM10.4333 9.23333V8.33333C10.4333 7.72582 9.94085 7.23333 9.33333 7.23333H8.43333V9.23333H10.4333Z" fill="black"/>
    </Svg>
  );
};
