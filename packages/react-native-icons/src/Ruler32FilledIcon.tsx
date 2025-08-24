import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ruler32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 5C12.1939 5 11 6.19391 11 7.66667V23.6667C11 25.1394 12.1939 26.3333 13.6667 26.3333H19C20.4728 26.3333 21.6667 25.1394 21.6667 23.6667V7.66667C21.6667 6.19391 20.4728 5 19 5H13.6667ZM12.7333 10.2H15C15.4786 10.2 15.8667 9.81198 15.8667 9.33333C15.8667 8.85469 15.4786 8.46667 15 8.46667H12.7333V10.2ZM16.3333 13.5333H12.7333V11.8H16.3333C16.812 11.8 17.2 12.188 17.2 12.6667C17.2 13.1453 16.812 13.5333 16.3333 13.5333ZM12.7333 16.8667H15C15.4786 16.8667 15.8667 16.4786 15.8667 16C15.8667 15.5214 15.4786 15.1333 15 15.1333H12.7333V16.8667ZM16.3333 20.2H12.7333V18.4667H16.3333C16.812 18.4667 17.2 18.8547 17.2 19.3333C17.2 19.812 16.812 20.2 16.3333 20.2ZM12.7333 23.5333H15C15.4786 23.5333 15.8667 23.1453 15.8667 22.6667C15.8667 22.188 15.4786 21.8 15 21.8H12.7333V23.5333Z" fill="black"/>
    </Svg>
  );
};
