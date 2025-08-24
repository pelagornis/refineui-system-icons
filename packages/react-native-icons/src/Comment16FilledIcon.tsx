import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Comment16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00062 12.6566C5.00062 12.9466 5.32404 13.1079 5.54236 12.9267L8.31673 10.6244C8.32856 10.6146 8.34325 10.6092 8.35839 10.6092H12.3363C13.0729 10.6092 13.67 9.98983 13.67 9.22574V4.3835C13.67 3.61941 13.0729 3 12.3363 3H4.33375C3.59714 3 3 3.61941 3 4.3835V9.22574C3 9.98983 3.59714 10.6092 4.33375 10.6092H4.93394C4.97077 10.6092 5.00062 10.6402 5.00062 10.6784V12.6566Z" fill="black"/>
    </Svg>
  );
};
