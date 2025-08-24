import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pause20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.66667C3 3.74619 3.74619 3 4.66667 3H7.16667C8.08714 3 8.83333 3.74619 8.83333 4.66667V14.6667C8.83333 15.5871 8.08714 16.3333 7.16667 16.3333H4.66667C3.74619 16.3333 3 15.5871 3 14.6667V4.66667ZM4.08333 4.91667C4.08333 4.45643 4.45643 4.08333 4.91667 4.08333H6.91667C7.3769 4.08333 7.75 4.45643 7.75 4.91667V14.4167C7.75 14.8769 7.3769 15.25 6.91667 15.25H4.91667C4.45643 15.25 4.08333 14.8769 4.08333 14.4167V4.91667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 4.66667C10.5 3.74619 11.2462 3 12.1667 3H14.6667C15.5871 3 16.3333 3.74619 16.3333 4.66667V14.6667C16.3333 15.5871 15.5871 16.3333 14.6667 16.3333H12.1667C11.2462 16.3333 10.5 15.5871 10.5 14.6667V4.66667ZM11.5833 4.91667C11.5833 4.45643 11.9564 4.08333 12.4167 4.08333H14.4167C14.8769 4.08333 15.25 4.45643 15.25 4.91667V14.4167C15.25 14.8769 14.8769 15.25 14.4167 15.25H12.4167C11.9564 15.25 11.5833 14.8769 11.5833 14.4167V4.91667Z" fill="black"/>
    </Svg>
  );
};
