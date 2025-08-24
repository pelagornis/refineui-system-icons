import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapeunion20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 12.1667H7.16667V14.6667C7.16667 15.5871 7.91286 16.3333 8.83333 16.3333H14.6667C15.5871 16.3333 16.3333 15.5871 16.3333 14.6667V8.83333C16.3333 7.91286 15.5871 7.16667 14.6667 7.16667H12.1667V4.66667C12.1667 3.74619 11.4205 3 10.5 3H4.66667C3.74619 3 3 3.74619 3 4.66667V10.5C3 11.4205 3.74619 12.1667 4.66667 12.1667Z" fill="black"/>
    </Svg>
  );
};
