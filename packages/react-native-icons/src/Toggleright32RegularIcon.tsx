import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toggleright32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 15.6667C15.6667 13.4575 17.4575 11.6667 19.6667 11.6667C21.8758 11.6667 23.6667 13.4575 23.6667 15.6667C23.6667 17.8758 21.8758 19.6667 19.6667 19.6667C17.4575 19.6667 15.6667 17.8758 15.6667 15.6667ZM17.4 15.6667C17.4 14.4148 18.4148 13.4 19.6667 13.4C20.9185 13.4 21.9333 14.4148 21.9333 15.6667C21.9333 16.9185 20.9185 17.9333 19.6667 17.9333C18.4148 17.9333 17.4 16.9185 17.4 15.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 15.6667C26.3333 19.3486 23.3486 22.3333 19.6667 22.3333L11.6667 22.3333C7.98477 22.3333 5 19.3486 5 15.6667C5 11.9848 7.98477 9 11.6667 9H19.6667C23.3486 9 26.3333 11.9848 26.3333 15.6667ZM24.6 15.6667C24.6 18.3913 22.3913 20.6 19.6667 20.6L11.6667 20.6C8.94206 20.6 6.73333 18.3913 6.73333 15.6667C6.73333 12.9421 8.94206 10.7333 11.6667 10.7333L19.6667 10.7333C22.3913 10.7333 24.6 12.9421 24.6 15.6667Z" fill="black"/>
    </Svg>
  );
};
