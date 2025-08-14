import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Phone20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 3C6.74619 3 6 3.74619 6 4.66667V14.6667C6 15.5871 6.74619 16.3333 7.66667 16.3333H12.6667C13.5871 16.3333 14.3333 15.5871 14.3333 14.6667V4.66667C14.3333 3.74619 13.5871 3 12.6667 3H7.66667ZM10.7917 4.66667H9.54167C9.19649 4.66667 8.91667 4.94649 8.91667 5.29167C8.91667 5.63684 9.19649 5.91667 9.54167 5.91667H10.7917C11.1368 5.91667 11.4167 5.63684 11.4167 5.29167C11.4167 4.94649 11.1368 4.66667 10.7917 4.66667Z" fill="black"/>
    </Svg>
  );
};
