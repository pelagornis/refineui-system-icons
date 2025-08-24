import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Note20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.125 15.9167C9.125 16.1468 8.93845 16.3333 8.70833 16.3333H4.66616C3.74569 16.3333 3 15.5871 3 14.6667V4.66667C3 3.74619 3.74619 3 4.66667 3H14.6667C15.5871 3 16.3333 3.74619 16.3333 4.66667V8.70833C16.3333 8.93845 16.1468 9.125 15.9167 9.125H11.3333C10.1139 9.125 9.125 10.113 9.125 11.3328V15.9167Z" fill="black"/>
<path d="M11.3333 10.2083C10.7118 10.2083 10.2083 10.7117 10.2083 11.3328V15.2887C10.2083 15.4743 10.4327 15.5673 10.564 15.436L15.436 10.564C15.5673 10.4327 15.4743 10.2083 15.2887 10.2083H11.3333Z" fill="black"/>
    </Svg>
  );
};
