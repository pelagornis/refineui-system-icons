import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textbox32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 5C6.19391 5 5 6.19391 5 7.66667V23.6667C5 25.1394 6.19391 26.3333 7.66667 26.3333H23.6667C25.1394 26.3333 26.3333 25.1394 26.3333 23.6667V7.66667C26.3333 6.19391 25.1394 5 23.6667 5H7.66667ZM9.66667 10.1333C9.18802 10.1333 8.8 10.5214 8.8 11C8.8 11.4786 9.18802 11.8667 9.66667 11.8667H21.6667C22.1453 11.8667 22.5333 11.4786 22.5333 11C22.5333 10.5214 22.1453 10.1333 21.6667 10.1333H9.66667ZM9.66667 14.8C9.18802 14.8 8.8 15.188 8.8 15.6667C8.8 16.1453 9.18802 16.5333 9.66667 16.5333H16.3333C16.812 16.5333 17.2 16.1453 17.2 15.6667C17.2 15.188 16.812 14.8 16.3333 14.8H9.66667ZM9.66667 19.4667C9.18802 19.4667 8.8 19.8547 8.8 20.3333C8.8 20.812 9.18802 21.2 9.66667 21.2H20.3333C20.812 21.2 21.2 20.812 21.2 20.3333C21.2 19.8547 20.812 19.4667 20.3333 19.4667H9.66667Z" fill="black"/>
    </Svg>
  );
};
