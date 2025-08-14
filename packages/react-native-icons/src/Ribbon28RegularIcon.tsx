import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ribbon28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2583 17.6079C19.9253 16.3231 21 14.302 21 12.0288C21 8.14691 17.866 5 14 5C10.134 5 7 8.14691 7 12.0288C7 14.302 8.07466 16.3231 9.74167 17.6079V22.6106C9.74167 23.4527 10.6763 23.9549 11.3741 23.4878L14 21.73L16.6259 23.4878C17.3237 23.9549 18.2583 23.4527 18.2583 22.6106V17.6079ZM19.4833 12.0288C19.4833 15.0697 17.0284 17.5347 14 17.5347C10.9716 17.5347 8.51667 15.0697 8.51667 12.0288C8.51667 8.98799 10.9716 6.52291 14 6.52291C17.0284 6.52291 19.4833 8.98799 19.4833 12.0288ZM16.7417 18.4981C15.8997 18.8583 14.973 19.0576 14 19.0576C13.027 19.0576 12.1003 18.8583 11.2583 18.4981V21.735L14 19.8997L16.7417 21.735V18.4981Z" fill="black"/>
    </Svg>
  );
};
