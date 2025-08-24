import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevrondown32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0577 10.3904C24.5783 9.86987 25.4223 9.86987 25.9429 10.3904C26.4634 10.9109 26.4635 11.7547 25.9429 12.2752L16.8331 21.3827C16.1887 22.0264 15.1445 22.0264 14.5 21.3827L5.39027 12.2752L5.29913 12.1736C4.87204 11.6501 4.90217 10.8784 5.39027 10.3904C5.87837 9.9024 6.6503 9.87229 7.17394 10.2993L7.2755 10.3904L15.6666 18.7794L24.0577 10.3904Z" fill="black"/>
    </Svg>
  );
};
