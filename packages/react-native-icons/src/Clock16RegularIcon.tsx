import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Clock16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M8.76667 5.33333C8.76667 5.09401 8.57266 4.9 8.33333 4.9C8.09401 4.9 7.9 5.09401 7.9 5.33333V8.37476C7.9 8.46316 7.93512 8.54795 7.99763 8.61046L10.0269 10.6397C10.1961 10.809 10.4705 10.809 10.6397 10.6397C10.809 10.4705 10.809 10.1961 10.6397 10.0269L8.8643 8.25147C8.80179 8.18896 8.76667 8.10418 8.76667 8.01577V5.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6667 8.33333C13.6667 11.2789 11.2789 13.6667 8.33333 13.6667C5.38781 13.6667 3 11.2789 3 8.33333C3 5.38781 5.38781 3 8.33333 3C11.2789 3 13.6667 5.38781 13.6667 8.33333ZM12.8 8.33333C12.8 10.8002 10.8002 12.8 8.33333 12.8C5.86646 12.8 3.86667 10.8002 3.86667 8.33333C3.86667 5.86646 5.86646 3.86667 8.33333 3.86667C10.8002 3.86667 12.8 5.86646 12.8 8.33333Z" fill="black"/>
    </Svg>
  );
};
