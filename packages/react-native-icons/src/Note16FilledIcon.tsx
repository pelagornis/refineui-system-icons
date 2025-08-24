import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Note16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.9 13.3333C7.9 13.5174 7.75076 13.6667 7.56667 13.6667H4.33293C3.59655 13.6667 3 13.0697 3 12.3333V4.33333C3 3.59695 3.59695 3 4.33333 3H12.3333C13.0697 3 13.6667 3.59695 13.6667 4.33333V7.56667C13.6667 7.75076 13.5174 7.9 13.3333 7.9H9.66667C8.69113 7.9 7.9 8.69039 7.9 9.66626V13.3333Z" fill="black"/>
<path d="M9.66667 8.76667C9.16944 8.76667 8.76667 9.16938 8.76667 9.66626V12.831C8.76667 12.9794 8.94619 13.0538 9.05119 12.9488L12.9488 9.05118C13.0538 8.94619 12.9794 8.76667 12.831 8.76667H9.66667Z" fill="black"/>
    </Svg>
  );
};
