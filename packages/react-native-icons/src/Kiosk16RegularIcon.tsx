import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Kiosk16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.33333C3 3.59695 3.59695 3 4.33333 3H11C11.7364 3 12.3333 3.59695 12.3333 4.33333V7.80643C12.3333 8.54281 11.7364 9.13976 11 9.13976H9.1V12.7996H10.3333C10.5727 12.7996 10.7667 12.9936 10.7667 13.2329C10.7667 13.4723 10.5727 13.6663 10.3333 13.6663H5C4.76068 13.6663 4.56667 13.4723 4.56667 13.2329C4.56667 12.9936 4.76068 12.7996 5 12.7996H6.23333V9.13976H4.33333C3.59695 9.13976 3 8.54281 3 7.80643V4.33333ZM4.33333 3.86667H11C11.2577 3.86667 11.4667 4.0756 11.4667 4.33333V7.80643C11.4667 8.06416 11.2577 8.2731 11 8.2731H4.33333C4.0756 8.2731 3.86667 8.06416 3.86667 7.80643V4.33333C3.86667 4.0756 4.0756 3.86667 4.33333 3.86667ZM7.1 9.13976V12.7996H8.23333V9.13976H7.1Z" fill="black"/>
    </Svg>
  );
};
