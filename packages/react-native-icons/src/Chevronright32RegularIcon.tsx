import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronright32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10.1544 6.36018C9.92449 6.02933 9.95024 5.57103 10.239 5.26801C10.5692 4.92191 11.1178 4.90958 11.4642 5.23937L21.4919 14.7968C21.9564 15.2399 21.9857 15.9629 21.5792 16.4409L21.4919 16.5334L11.4642 26.0908L11.3262 26.1988C10.9846 26.4127 10.528 26.3639 10.239 26.0609C9.9508 25.7579 9.92477 25.3006 10.1544 24.97L10.269 24.8359L19.8905 15.6651L10.269 6.49296L10.1544 6.36018Z" fill="black"/>
    </Svg>
  );
};
