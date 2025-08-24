import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Emojimeh32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.3333C21.5577 26.3333 26.3333 21.5577 26.3333 15.6667C26.3333 9.77563 21.5577 5 15.6667 5C9.77563 5 5 9.77563 5 15.6667C5 21.5577 9.77563 26.3333 15.6667 26.3333ZM11.6667 15.6667C12.403 15.6667 13 15.0697 13 14.3333C13 13.597 12.403 13 11.6667 13C10.9303 13 10.3333 13.597 10.3333 14.3333C10.3333 15.0697 10.9303 15.6667 11.6667 15.6667ZM19.6667 15.6667C20.403 15.6667 21 15.0697 21 14.3333C21 13.597 20.403 13 19.6667 13C18.9303 13 18.3333 13.597 18.3333 14.3333C18.3333 15.0697 18.9303 15.6667 19.6667 15.6667ZM12.3333 18.8C11.8547 18.8 11.4667 19.188 11.4667 19.6667C11.4667 20.1453 11.8547 20.5333 12.3333 20.5333H19C19.4786 20.5333 19.8667 20.1453 19.8667 19.6667C19.8667 19.188 19.4786 18.8 19 18.8H12.3333Z" fill="black"/>
    </Svg>
  );
};
