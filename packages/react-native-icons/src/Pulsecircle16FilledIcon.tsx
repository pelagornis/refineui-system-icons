import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pulsecircle16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 3C5.38781 3 3 5.38781 3 8.33333C3 11.2789 5.38781 13.6667 8.33333 13.6667C11.2789 13.6667 13.6667 11.2789 13.6667 8.33333C13.6667 5.38781 11.2789 3 8.33333 3ZM7.1606 8.62352L7.41738 8.03618L8.18389 10.1511C8.37229 10.671 9.10387 10.6809 9.30632 10.1664L9.77191 8.98316H10.9471C11.1864 8.98316 11.3804 8.78915 11.3804 8.54983C11.3804 8.31051 11.1864 8.1165 10.9471 8.1165H9.59027C9.3437 8.1165 9.12223 8.26735 9.03194 8.4968L8.75824 9.19238L8.00465 7.11306C7.81999 6.60353 7.10791 6.58057 6.8908 7.07714L6.43639 8.1165H5.43333C5.19401 8.1165 5 8.31051 5 8.54983C5 8.78915 5.19401 8.98316 5.43333 8.98316H6.61084C6.84928 8.98316 7.06508 8.84198 7.1606 8.62352Z" fill="black"/>
    </Svg>
  );
};
