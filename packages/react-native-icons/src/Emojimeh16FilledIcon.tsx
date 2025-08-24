import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Emojimeh16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.6667C11.2789 13.6667 13.6667 11.2789 13.6667 8.33333C13.6667 5.38781 11.2789 3 8.33333 3C5.38781 3 3 5.38781 3 8.33333C3 11.2789 5.38781 13.6667 8.33333 13.6667ZM6.33333 8.33333C6.70152 8.33333 7 8.03486 7 7.66667C7 7.29848 6.70152 7 6.33333 7C5.96514 7 5.66667 7.29848 5.66667 7.66667C5.66667 8.03486 5.96514 8.33333 6.33333 8.33333ZM10.3333 8.33333C10.7015 8.33333 11 8.03486 11 7.66667C11 7.29848 10.7015 7 10.3333 7C9.96514 7 9.66667 7.29848 9.66667 7.66667C9.66667 8.03486 9.96514 8.33333 10.3333 8.33333ZM6.66667 9.9C6.42734 9.9 6.23333 10.094 6.23333 10.3333C6.23333 10.5727 6.42734 10.7667 6.66667 10.7667H10C10.2393 10.7667 10.4333 10.5727 10.4333 10.3333C10.4333 10.094 10.2393 9.9 10 9.9H6.66667Z" fill="black"/>
    </Svg>
  );
};
