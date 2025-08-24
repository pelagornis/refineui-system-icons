import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Record16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.6667C11.2788 13.6667 13.6667 11.2788 13.6667 8.33333C13.6667 5.38782 11.2788 3 8.33333 3C5.38782 3 3 5.38782 3 8.33333C3 11.2788 5.38782 13.6667 8.33333 13.6667ZM8.33333 11.6667C10.1743 11.6667 11.6667 10.1743 11.6667 8.33333C11.6667 6.49238 10.1743 5 8.33333 5C6.49239 5 5 6.49238 5 8.33333C5 10.1743 6.49239 11.6667 8.33333 11.6667Z" fill="black"/>
    </Svg>
  );
};
