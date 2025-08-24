import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Clock16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.6667C11.2788 13.6667 13.6667 11.2788 13.6667 8.33333C13.6667 5.38782 11.2788 3 8.33333 3C5.38782 3 3 5.38782 3 8.33333C3 11.2788 5.38782 13.6667 8.33333 13.6667ZM8.76668 5.33333C8.76668 5.09401 8.57267 4.9 8.33333 4.9C8.09399 4.9 7.89998 5.09401 7.89998 5.33333V8.37476C7.89998 8.46316 7.9351 8.54795 7.99762 8.61046L10.0269 10.6398C10.1962 10.809 10.4705 10.809 10.6397 10.6398C10.809 10.4705 10.809 10.1961 10.6397 10.0269L8.86431 8.25147C8.8018 8.18896 8.76668 8.10417 8.76668 8.01577V5.33333Z" fill="black"/>
    </Svg>
  );
};
