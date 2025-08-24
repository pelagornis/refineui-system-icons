import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Documentborder20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.66667 5.5C6.66667 5.03976 7.03976 4.66667 7.5 4.66667H12.5C12.9602 4.66667 13.3333 5.03976 13.3333 5.5V13.8333C13.3333 14.2936 12.9602 14.6667 12.5 14.6667H7.5C7.03976 14.6667 6.66667 14.2936 6.66667 13.8333V5.5ZM8.16667 13.5833C7.93655 13.5833 7.75 13.3968 7.75 13.1667V6.16667C7.75 5.93655 7.93655 5.75 8.16667 5.75H11.8333C12.0635 5.75 12.25 5.93655 12.25 6.16667V13.1667C12.25 13.3968 12.0635 13.5833 11.8333 13.5833H8.16667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.66667C5 3.74619 5.74619 3 6.66667 3H13.3333C14.2538 3 15 3.74619 15 4.66667V14.6667C15 15.5871 14.2538 16.3333 13.3333 16.3333H6.66667C5.74619 16.3333 5 15.5871 5 14.6667V4.66667ZM6.66667 4.08333H13.3333C13.6555 4.08333 13.9167 4.3445 13.9167 4.66667V14.6667C13.9167 14.9888 13.6555 15.25 13.3333 15.25H6.66667C6.3445 15.25 6.08333 14.9888 6.08333 14.6667V4.66667C6.08333 4.3445 6.3445 4.08333 6.66667 4.08333Z" fill="black"/>
    </Svg>
  );
};
