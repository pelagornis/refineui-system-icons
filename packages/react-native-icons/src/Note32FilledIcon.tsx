import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Note32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8 25.6667C14.8 26.0349 14.5015 26.3333 14.1333 26.3333H7.66586C6.1931 26.3333 5 25.1394 5 23.6667V7.66667C5 6.19391 6.19391 5 7.66667 5H23.6667C25.1394 5 26.3333 6.19391 26.3333 7.66667V14.1333C26.3333 14.5015 26.0349 14.8 25.6667 14.8H18.3333C16.3823 14.8 14.8 16.3808 14.8 18.3325V25.6667Z" fill="black"/>
<path d="M18.3333 16.5333C17.3389 16.5333 16.5333 17.3388 16.5333 18.3325V24.6619C16.5333 24.9589 16.8924 25.1076 17.1024 24.8976L24.8976 17.1024C25.1076 16.8924 24.9589 16.5333 24.6619 16.5333H18.3333Z" fill="black"/>
    </Svg>
  );
};
