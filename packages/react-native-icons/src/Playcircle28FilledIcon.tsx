import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Playcircle28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM11.5195 10.884L17.5712 13.9093C17.9207 14.084 17.9207 14.5826 17.5712 14.7573L11.5195 17.7827C11.2043 17.9403 10.8333 17.7111 10.8333 17.3587V11.308C10.8333 10.9556 11.2043 10.7264 11.5195 10.884Z" fill="black"/>
    </Svg>
  );
};
