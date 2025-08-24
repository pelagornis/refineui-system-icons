import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottomright32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 5C6.19391 5 5 6.19391 5 7.66667V23.6667C5 25.1394 6.19391 26.3333 7.66667 26.3333H23.6667C25.1394 26.3333 26.3333 25.1394 26.3333 23.6667V7.66667C26.3333 6.19391 25.1394 5 23.6667 5H7.66667ZM12.8 20.3333C12.8 19.8547 13.188 19.4667 13.6667 19.4667H21.6667C22.1453 19.4667 22.5333 19.8547 22.5333 20.3333C22.5333 20.812 22.1453 21.2 21.6667 21.2H13.6667C13.188 21.2 12.8 20.812 12.8 20.3333ZM9.46667 15.6667C9.46667 15.188 9.85469 14.8 10.3333 14.8H21.6667C22.1453 14.8 22.5333 15.188 22.5333 15.6667C22.5333 16.1453 22.1453 16.5333 21.6667 16.5333H10.3333C9.85469 16.5333 9.46667 16.1453 9.46667 15.6667Z" fill="black"/>
    </Svg>
  );
};
