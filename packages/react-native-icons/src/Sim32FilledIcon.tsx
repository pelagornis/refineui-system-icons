import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Sim32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6095 11.2761C23.8595 11.5262 24 11.8653 24 12.219V25C24 25.7364 23.403 26.3333 22.6667 26.3333H9.33333C8.59695 26.3333 8 25.7364 8 25V6.33333C8 5.59695 8.59695 5 9.33333 5H16.781C17.1347 5 17.4738 5.14048 17.7239 5.39052L23.6095 11.2761ZM15.1333 23.2V13.4667H13.3333C12.1183 13.4667 11.1333 14.4516 11.1333 15.6667V21C11.1333 22.215 12.1183 23.2 13.3333 23.2H15.1333ZM16.8667 19.2V23.2H18.6667C19.8817 23.2 20.8667 22.215 20.8667 21V19.2H16.8667ZM20.8667 17.4667V15.6667C20.8667 14.4516 19.8817 13.4667 18.6667 13.4667H16.8667V17.4667H20.8667Z" fill="black"/>
    </Svg>
  );
};
