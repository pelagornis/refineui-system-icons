import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle516RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7.73333 5.9C7.35043 5.9 6.9 6.17263 6.9 6.66667V7.66667C6.9 8.16071 7.35043 8.43333 7.73333 8.43333H8.9V9.9H7.33333C7.09401 9.9 6.9 10.094 6.9 10.3333C6.9 10.5727 7.09401 10.7667 7.33333 10.7667H8.93333C9.31624 10.7667 9.76667 10.494 9.76667 10V8.33333C9.76667 7.83929 9.31624 7.56667 8.93333 7.56667H7.76667V6.76667H9.33333C9.57266 6.76667 9.76667 6.57266 9.76667 6.33333C9.76667 6.09401 9.57266 5.9 9.33333 5.9H7.73333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 8.33333C13.6667 11.2789 11.2789 13.6667 8.33333 13.6667C5.38781 13.6667 3 11.2789 3 8.33333C3 5.38781 5.38781 3 8.33333 3C11.2789 3 13.6667 5.38781 13.6667 8.33333ZM12.8 8.33333C12.8 10.8002 10.8002 12.8 8.33333 12.8C5.86646 12.8 3.86667 10.8002 3.86667 8.33333C3.86667 5.86646 5.86646 3.86667 8.33333 3.86667C10.8002 3.86667 12.8 5.86646 12.8 8.33333Z" fill="black"/>
    </Svg>
  );
};
