import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Door20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.66667 3C5.74619 3 5 3.74619 5 4.66667V14.6667C5 15.5871 5.74619 16.3333 6.66667 16.3333H13.3333C14.2538 16.3333 15 15.5871 15 14.6667V4.66667C15 3.74619 14.2538 3 13.3333 3H6.66667ZM8.33333 9.66667C8.33333 10.1269 7.96024 10.5 7.5 10.5C7.03976 10.5 6.66667 10.1269 6.66667 9.66667C6.66667 9.20643 7.03976 8.83333 7.5 8.83333C7.96024 8.83333 8.33333 9.20643 8.33333 9.66667Z" fill="black"/>
    </Svg>
  );
};
