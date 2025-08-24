import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rectangle20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 5C3.74619 5 3 5.74619 3 6.66667V13.3333C3 14.2538 3.74619 15 4.66667 15H14.6667C15.5871 15 16.3333 14.2538 16.3333 13.3333V6.66667C16.3333 5.74619 15.5871 5 14.6667 5H4.66667ZM14.6667 6.08333H4.66667C4.3445 6.08333 4.08333 6.3445 4.08333 6.66667V13.3333C4.08333 13.6555 4.3445 13.9167 4.66667 13.9167H14.6667C14.9888 13.9167 15.25 13.6555 15.25 13.3333V6.66667C15.25 6.3445 14.9888 6.08333 14.6667 6.08333Z" fill="black"/>
    </Svg>
  );
};
