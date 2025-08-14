import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Document16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13.6667C4.44772 13.6667 4 13.219 4 12.6667V4C4 3.44772 4.44772 3 5 3H7C7.55228 3 8 3.44772 8 4V6C8 6.55228 8.44772 7 9 7H11C11.5523 7 12 7.44771 12 8V12.6667C12 13.219 11.5523 13.6667 11 13.6667H5Z" fill="black"/>
<path d="M12 6.33333L8.66667 3V6.08333C8.66667 6.2214 8.7786 6.33333 8.91667 6.33333H12Z" fill="black"/>
    </Svg>
  );
};
