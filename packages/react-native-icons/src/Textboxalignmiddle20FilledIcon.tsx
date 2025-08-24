import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignmiddle20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 3C3.74619 3 3 3.74619 3 4.66667V14.6667C3 15.5871 3.74619 16.3333 4.66667 16.3333H14.6667C15.5871 16.3333 16.3333 15.5871 16.3333 14.6667V4.66667C16.3333 3.74619 15.5871 3 14.6667 3H4.66667ZM6.125 7.66667C5.82585 7.66667 5.58333 7.90918 5.58333 8.20833C5.58333 8.50749 5.82585 8.75 6.125 8.75H13.2083C13.5075 8.75 13.75 8.50749 13.75 8.20833C13.75 7.90918 13.5075 7.66667 13.2083 7.66667H6.125ZM6.125 10.5833C5.82585 10.5833 5.58333 10.8258 5.58333 11.125C5.58333 11.4242 5.82585 11.6667 6.125 11.6667H13.2083C13.5075 11.6667 13.75 11.4242 13.75 11.125C13.75 10.8258 13.5075 10.5833 13.2083 10.5833H6.125Z" fill="black"/>
    </Svg>
  );
};
