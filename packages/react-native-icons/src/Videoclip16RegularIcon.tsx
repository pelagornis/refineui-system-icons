import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Videoclip16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10.1836 7.42438C10.3833 7.52421 10.3833 7.80912 10.1836 7.90896L6.72542 9.63772C6.54529 9.72777 6.33333 9.5968 6.33333 9.39544V5.9379C6.33333 5.73653 6.54529 5.60556 6.72542 5.69562L10.1836 7.42438Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.33333C3 3.59695 3.59696 3 4.33333 3H12.3333C13.0697 3 13.6667 3.59695 13.6667 4.33333V11C13.6667 11.7364 13.0697 12.3333 12.3333 12.3333H4.33333C3.59696 12.3333 3 11.7364 3 11V4.33333ZM4.33333 3.86667H12.3333C12.5911 3.86667 12.8 4.0756 12.8 4.33333V11C12.8 11.2577 12.5911 11.4667 12.3333 11.4667H4.33333C4.0756 11.4667 3.86666 11.2577 3.86666 11V4.33333C3.86666 4.0756 4.0756 3.86667 4.33333 3.86667Z" fill="black"/>
    </Svg>
  );
};
