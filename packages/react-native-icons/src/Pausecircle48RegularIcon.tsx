import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pausecircle48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M20 16.7C20.718 16.7 21.3 17.282 21.3 18V30C21.3 30.718 20.718 31.3 20 31.3C19.282 31.3 18.7 30.718 18.7 30V18C18.7 17.282 19.282 16.7 20 16.7Z" fill="black"/>
<path d="M29.3 18C29.3 17.282 28.718 16.7 28 16.7C27.282 16.7 26.7 17.282 26.7 18V30C26.7 30.718 27.282 31.3 28 31.3C28.718 31.3 29.3 30.718 29.3 30V18Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 37.4C31.4006 37.4 37.4 31.4006 37.4 24C37.4 16.5994 31.4006 10.6 24 10.6C16.5994 10.6 10.6 16.5994 10.6 24C10.6 31.4006 16.5994 37.4 24 37.4Z" fill="black"/>
    </Svg>
  );
};
