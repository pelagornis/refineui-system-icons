import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Errorcircle32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.3333C21.5577 26.3333 26.3333 21.5577 26.3333 15.6667C26.3333 9.77563 21.5577 5 15.6667 5C9.77563 5 5 9.77563 5 15.6667C5 21.5577 9.77563 26.3333 15.6667 26.3333ZM16.5333 10.3333C16.5333 9.85469 16.1453 9.46667 15.6667 9.46667C15.188 9.46667 14.8 9.85469 14.8 10.3333V17.6667C14.8 18.1453 15.188 18.5333 15.6667 18.5333C16.1453 18.5333 16.5333 18.1453 16.5333 17.6667V10.3333ZM15.6666 21.4C16.1453 21.4 16.5333 21.012 16.5333 20.5333C16.5333 20.0547 16.1453 19.6667 15.6666 19.6667C15.188 19.6667 14.8 20.0547 14.8 20.5333C14.8 21.012 15.188 21.4 15.6666 21.4Z" fill="black"/>
    </Svg>
  );
};
