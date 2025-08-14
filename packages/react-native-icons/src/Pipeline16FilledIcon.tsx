import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pipeline16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.33333 4C3.59695 4 3 4.59695 3 5.33333V10.6667C3 11.403 3.59695 12 4.33333 12C5.06971 12 5.66667 11.403 5.66667 10.6667V5.33333C5.66667 4.59695 5.06971 4 4.33333 4Z" fill="black"/>
<path d="M6.7 5.56667C6.60795 5.56667 6.53333 5.64129 6.53333 5.73333V10.2667C6.53333 10.3587 6.60795 10.4333 6.7 10.4333H9.96667C10.0587 10.4333 10.1333 10.3587 10.1333 10.2667V5.73333C10.1333 5.64129 10.0587 5.56667 9.96667 5.56667H6.7Z" fill="black"/>
<path d="M11 5.33333V10.6667C11 11.403 11.597 12 12.3333 12C13.0697 12 13.6667 11.403 13.6667 10.6667V5.33333C13.6667 4.59695 13.0697 4 12.3333 4C11.597 4 11 4.59695 11 5.33333Z" fill="black"/>
    </Svg>
  );
};
