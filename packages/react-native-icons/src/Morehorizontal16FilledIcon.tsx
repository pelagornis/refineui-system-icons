import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Morehorizontal16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4.33333 7C5.06971 7 5.66667 7.59695 5.66667 8.33333C5.66667 9.06971 5.06971 9.66667 4.33333 9.66667C3.59695 9.66667 3 9.06971 3 8.33333C3 7.59695 3.59695 7 4.33333 7Z" fill="black"/>
<path d="M8.33333 7C9.06971 7 9.66667 7.59695 9.66667 8.33333C9.66667 9.06971 9.06971 9.66667 8.33333 9.66667C7.59695 9.66667 7 9.06971 7 8.33333C7 7.59695 7.59695 7 8.33333 7Z" fill="black"/>
<path d="M12.3333 7C13.0697 7 13.6667 7.59695 13.6667 8.33333C13.6667 9.06971 13.0697 9.66667 12.3333 9.66667C11.597 9.66667 11 9.06971 11 8.33333C11 7.59695 11.597 7 12.3333 7Z" fill="black"/>
    </Svg>
  );
};
