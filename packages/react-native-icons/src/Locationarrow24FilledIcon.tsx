import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Locationarrow24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9644 4.74022C20.1314 4.28996 19.6804 3.85769 19.2388 4.04469L5.33404 9.93228C4.86932 10.1291 4.89569 10.7976 5.37446 10.957L10.8498 12.7802C11.0121 12.8342 11.1398 12.9612 11.195 13.1234L13.4085 19.6288C13.5745 20.1167 14.2598 20.126 14.4389 19.6428L19.9644 4.74022Z" fill="black"/>
    </Svg>
  );
};
