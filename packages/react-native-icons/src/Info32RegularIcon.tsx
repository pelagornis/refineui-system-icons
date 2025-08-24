import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Info32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M16.6667 10.6667C16.6667 11.219 16.219 11.6667 15.6667 11.6667C15.1144 11.6667 14.6667 11.219 14.6667 10.6667C14.6667 10.1144 15.1144 9.66667 15.6667 9.66667C16.219 9.66667 16.6667 10.1144 16.6667 10.6667Z" fill="black"/>
<path d="M16.5333 13.6667C16.5333 13.188 16.1453 12.8 15.6667 12.8C15.188 12.8 14.8 13.188 14.8 13.6667V21.6667C14.8 22.1453 15.188 22.5333 15.6667 22.5333C16.1453 22.5333 16.5333 22.1453 16.5333 21.6667V13.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.3333C21.5577 26.3333 26.3333 21.5577 26.3333 15.6667C26.3333 9.77563 21.5577 5 15.6667 5C9.77563 5 5 9.77563 5 15.6667C5 21.5577 9.77563 26.3333 15.6667 26.3333ZM15.6667 24.6C20.6004 24.6 24.6 20.6004 24.6 15.6667C24.6 10.7329 20.6004 6.73333 15.6667 6.73333C10.7329 6.73333 6.73333 10.7329 6.73333 15.6667C6.73333 20.6004 10.7329 24.6 15.6667 24.6Z" fill="black"/>
    </Svg>
  );
};
