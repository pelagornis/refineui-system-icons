import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chatempty16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.67C11.2789 13.67 13.6667 11.2814 13.6667 8.335C13.6667 5.38856 11.2789 3 8.33333 3C5.38781 3 3 5.38856 3 8.335L3 13.0041C3 13.3724 3.29801 13.67 3.6662 13.67H8.33333ZM8.33333 12.8031C10.8002 12.8031 12.8 10.8026 12.8 8.335C12.8 5.86736 10.8002 3.86694 8.33333 3.86694C5.86646 3.86694 3.86667 5.86736 3.86667 8.335L3.86667 12.8031H8.33333Z" fill="black"/>
    </Svg>
  );
};
