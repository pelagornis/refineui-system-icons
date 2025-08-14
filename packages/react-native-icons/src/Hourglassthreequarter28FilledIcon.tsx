import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Hourglassthreequarter28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.84498 5C6.36201 5 5.48708 6.5803 6.32726 7.74143L10.3796 13.3419C10.8117 13.9391 10.8117 14.7276 10.3796 15.3248L6.32726 20.9253C5.48708 22.0864 6.36201 23.6667 7.84498 23.6667H20.4884C21.9713 23.6667 22.8463 22.0864 22.0061 20.9253L17.9537 15.3248C17.5216 14.7276 17.5216 13.9391 17.9537 13.3419L22.0061 7.74143C22.8463 6.5803 21.9713 5 20.4884 5H7.84498ZM16.27 16.38C15.3641 15.1602 15.3486 13.4953 16.2318 12.2589L17.0079 11.1724C17.2836 10.7863 17.0076 10.25 16.5331 10.25H11.8002C11.3258 10.25 11.0498 10.7863 11.3255 11.1724L12.1016 12.2589C12.9847 13.4953 12.9692 15.1602 12.0633 16.38L8.82088 20.7459C8.52751 21.1298 8.80123 21.6834 9.28437 21.6834H19.049C19.532 21.6834 19.8058 21.1298 19.5125 20.7459L16.27 16.38Z" fill="black"/>
    </Svg>
  );
};
