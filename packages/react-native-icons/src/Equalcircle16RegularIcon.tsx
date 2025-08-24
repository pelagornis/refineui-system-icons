import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Equalcircle16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5.56667 7.33333C5.56667 7.09401 5.76068 6.9 6 6.9H10.6667C10.906 6.9 11.1 7.09401 11.1 7.33333C11.1 7.57266 10.906 7.76667 10.6667 7.76667H6C5.76068 7.76667 5.56667 7.57266 5.56667 7.33333Z" fill="black"/>
<path d="M6 8.9C5.76068 8.9 5.56667 9.09401 5.56667 9.33333C5.56667 9.57266 5.76068 9.76667 6 9.76667H10.6667C10.906 9.76667 11.1 9.57266 11.1 9.33333C11.1 9.09401 10.906 8.9 10.6667 8.9H6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.6667C11.2789 13.6667 13.6667 11.2789 13.6667 8.33333C13.6667 5.38781 11.2789 3 8.33333 3C5.38781 3 3 5.38781 3 8.33333C3 11.2789 5.38781 13.6667 8.33333 13.6667ZM8.33333 12.8C10.8002 12.8 12.8 10.8002 12.8 8.33333C12.8 5.86646 10.8002 3.86667 8.33333 3.86667C5.86646 3.86667 3.86667 5.86646 3.86667 8.33333C3.86667 10.8002 5.86646 12.8 8.33333 12.8Z" fill="black"/>
    </Svg>
  );
};
