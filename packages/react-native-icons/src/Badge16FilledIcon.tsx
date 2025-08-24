import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Badge16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.2444 5.84444C13.0299 5.84444 13.6667 5.20769 13.6667 4.42222C13.6667 3.63675 13.0299 3 12.2444 3C11.459 3 10.8222 3.63675 10.8222 4.42222C10.8222 5.20769 11.459 5.84444 12.2444 5.84444Z" fill="black"/>
<path d="M12.2444 6.55556C12.4938 6.55556 12.7331 6.51278 12.9556 6.43417V12.2444C12.9556 13.0299 12.3188 13.6667 11.5333 13.6667H4.42222C3.63676 13.6667 3 13.0299 3 12.2444V5.13333C3 4.34786 3.63676 3.71111 4.42222 3.71111H10.2325C10.1539 3.93353 10.1111 4.17288 10.1111 4.42222C10.1111 5.60043 11.0662 6.55556 12.2444 6.55556Z" fill="black"/>
    </Svg>
  );
};
