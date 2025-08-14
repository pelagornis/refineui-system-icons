import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Oval16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 4C4.79086 4 3 5.79086 3 8C3 10.2091 4.79086 12 7 12H9.66667C11.8758 12 13.6667 10.2091 13.6667 8C13.6667 5.79086 11.8758 4 9.66667 4H7ZM9.66667 4.86667H7C5.26951 4.86667 3.86667 6.26951 3.86667 8C3.86667 9.73049 5.26951 11.1333 7 11.1333H9.66667C11.3972 11.1333 12.8 9.73049 12.8 8C12.8 6.26951 11.3972 4.86667 9.66667 4.86667Z" fill="black"/>
    </Svg>
  );
};
