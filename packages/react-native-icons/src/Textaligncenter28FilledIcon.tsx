import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textaligncenter28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.33333 9.16667C7.33333 8.52233 7.85567 8 8.5 8H19C19.6443 8 20.1667 8.52233 20.1667 9.16667C20.1667 9.811 19.6443 10.3333 19 10.3333H8.5C7.85567 10.3333 7.33333 9.811 7.33333 9.16667Z" fill="black"/>
<path d="M5 13.8333C5 13.189 5.52233 12.6667 6.16667 12.6667H21.3333C21.9777 12.6667 22.5 13.189 22.5 13.8333C22.5 14.4777 21.9777 15 21.3333 15H6.16667C5.52233 15 5 14.4777 5 13.8333Z" fill="black"/>
<path d="M10.8333 17.3333C10.189 17.3333 9.66667 17.8557 9.66667 18.5C9.66667 19.1443 10.189 19.6667 10.8333 19.6667H16.6667C17.311 19.6667 17.8333 19.1443 17.8333 18.5C17.8333 17.8557 17.311 17.3333 16.6667 17.3333H10.8333Z" fill="black"/>
    </Svg>
  );
};
