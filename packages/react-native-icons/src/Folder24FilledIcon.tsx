import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Folder24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M4 17V7C4 6.44772 4.44772 6 5 6H9.08579C9.351 6 9.60536 6.10536 9.79289 6.29289L11.7071 8.20711C11.8946 8.39464 12.149 8.5 12.4142 8.5H19C19.5523 8.5 20 8.94772 20 9.5V17C20 17.5523 19.5523 18 19 18H5C4.44772 18 4 17.5523 4 17Z" fill="black"/>
    </Svg>
  );
};
