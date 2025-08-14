import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chatadd16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 8.33333C13.6667 11.2788 11.2788 13.6667 8.33333 13.6667H3.66667C3.29848 13.6667 3 13.3682 3 13V8.33333C3 5.38782 5.38782 3 8.33333 3C11.2788 3 13.6667 5.38782 13.6667 8.33333ZM8.76667 6C8.76667 5.76068 8.57266 5.56667 8.33333 5.56667C8.09401 5.56667 7.9 5.76068 7.9 6V7.9H6C5.76068 7.9 5.56667 8.09401 5.56667 8.33333C5.56667 8.57266 5.76068 8.76667 6 8.76667H7.9V10.6667C7.9 10.906 8.09401 11.1 8.33333 11.1C8.57266 11.1 8.76667 10.906 8.76667 10.6667V8.76667H10.6667C10.906 8.76667 11.1 8.57266 11.1 8.33333C11.1 8.09401 10.906 7.9 10.6667 7.9H8.76667V6Z" fill="black"/>
    </Svg>
  );
};
