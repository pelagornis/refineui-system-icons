import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Recordstop32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.3333C21.5577 26.3333 26.3333 21.5577 26.3333 15.6667C26.3333 9.77563 21.5577 5 15.6667 5C9.77563 5 5 9.77563 5 15.6667C5 21.5577 9.77563 26.3333 15.6667 26.3333ZM12.6667 11.6667C12.1144 11.6667 11.6667 12.1144 11.6667 12.6667V18.6667C11.6667 19.219 12.1144 19.6667 12.6667 19.6667H18.6667C19.219 19.6667 19.6667 19.219 19.6667 18.6667V12.6667C19.6667 12.1144 19.219 11.6667 18.6667 11.6667H12.6667Z" fill="black"/>
    </Svg>
  );
};
