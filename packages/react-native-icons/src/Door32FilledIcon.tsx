import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Door32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 5C9.19391 5 8 6.19391 8 7.66667V23.6667C8 25.1394 9.19391 26.3333 10.6667 26.3333H21.3333C22.8061 26.3333 24 25.1394 24 23.6667V7.66667C24 6.19391 22.8061 5 21.3333 5H10.6667ZM13.3333 15.6667C13.3333 16.403 12.7364 17 12 17C11.2636 17 10.6667 16.403 10.6667 15.6667C10.6667 14.9303 11.2636 14.3333 12 14.3333C12.7364 14.3333 13.3333 14.9303 13.3333 15.6667Z" fill="black"/>
    </Svg>
  );
};
