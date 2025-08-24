import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Equal48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99984 16C8.89536 16 8 16.8952 8 17.9994C8 19.1036 8.89536 19.9988 9.99984 19.9988H38.0002C39.1046 19.9988 40 19.1036 40 17.9994C40 16.8952 39.1046 16 38.0002 16H9.99984Z" fill="black"/>
<path d="M9.99984 28.0012C8.89536 28.0012 8 28.8964 8 30.0006C8 31.1048 8.89536 32 9.99984 32H38.0002C39.1046 32 40 31.1048 40 30.0006C40 28.8964 39.1046 28.0012 38.0002 28.0012H9.99984Z" fill="black"/>
    </Svg>
  );
};
