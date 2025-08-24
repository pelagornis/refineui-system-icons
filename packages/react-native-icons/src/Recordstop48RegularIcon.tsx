import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Recordstop48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 18C18.6716 18 18 18.6716 18 19.5V28.5C18 29.3284 18.6716 30 19.5 30H28.5C29.3284 30 30 29.3284 30 28.5V19.5C30 18.6716 29.3284 18 28.5 18H19.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24ZM37.4 24C37.4 31.4006 31.4006 37.4 24 37.4C16.5994 37.4 10.6 31.4006 10.6 24C10.6 16.5994 16.5994 10.6 24 10.6C31.4006 10.6 37.4 16.5994 37.4 24Z" fill="black"/>
    </Svg>
  );
};
