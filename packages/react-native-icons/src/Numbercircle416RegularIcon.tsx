import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle416RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 5.9C8.1743 5.9 8.02805 5.98711 7.95231 6.12694L6.61897 8.58848C6.58465 8.65186 6.56667 8.7228 6.56667 8.79487V9.10256C6.56667 9.34189 6.76068 9.5359 7 9.5359H8.43333V10.3333C8.43333 10.5727 8.62734 10.7667 8.86667 10.7667C9.10599 10.7667 9.3 10.5727 9.3 10.3333V9.5359H9.66667C9.90599 9.5359 10.1 9.34189 10.1 9.10256C10.1 8.86324 9.90599 8.66923 9.66667 8.66923H9.3V6.33333C9.3 6.09401 9.10599 5.9 8.86667 5.9H8.33333ZM8.43333 7.05854V8.66923H7.56088L8.43333 7.05854Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 8.33333C13.6667 11.2789 11.2789 13.6667 8.33333 13.6667C5.38781 13.6667 3 11.2789 3 8.33333C3 5.38781 5.38781 3 8.33333 3C11.2789 3 13.6667 5.38781 13.6667 8.33333ZM12.8 8.33333C12.8 10.8002 10.8002 12.8 8.33333 12.8C5.86646 12.8 3.86667 10.8002 3.86667 8.33333C3.86667 5.86646 5.86646 3.86667 8.33333 3.86667C10.8002 3.86667 12.8 5.86646 12.8 8.33333Z" fill="black"/>
    </Svg>
  );
};
