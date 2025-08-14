import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Apprecent20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M11.75 3C12.6705 3 13.4167 3.74619 13.4167 4.66667V14.6667C13.4167 15.5871 12.6705 16.3333 11.75 16.3333H7.58333C6.66286 16.3333 5.91667 15.5871 5.91667 14.6667V4.66667C5.91667 3.74619 6.66286 3 7.58333 3H11.75Z" fill="black"/>
<path d="M3 6.33333C3 5.41286 3.74619 4.66667 4.66667 4.66667H5.29167V14.6667H4.66667C3.74619 14.6667 3 13.9205 3 13V6.33333Z" fill="black"/>
<path d="M14.6667 14.6667C15.5871 14.6667 16.3333 13.9205 16.3333 13V6.33333C16.3333 5.41286 15.5871 4.66667 14.6667 4.66667H14.0417V14.6667H14.6667Z" fill="black"/>
    </Svg>
  );
};
