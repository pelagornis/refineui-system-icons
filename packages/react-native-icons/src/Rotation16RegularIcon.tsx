import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rotation16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.43342 2C2.67279 2 2.86683 2.19405 2.86683 2.43342V6.8949C3.71857 6.92066 4.80586 7.1624 5.74577 7.82159C6.81473 8.57129 7.65023 9.83191 7.7569 11.8032H12.2366C12.476 11.8032 12.67 11.9972 12.67 12.2366C12.67 12.476 12.476 12.67 12.2366 12.67H3.10021C2.49258 12.67 2 12.1774 2 11.5698V2.43342C2 2.19405 2.19405 2 2.43342 2ZM6.88869 11.8032C6.78554 10.1088 6.07674 9.11248 5.24804 8.53128C4.48139 7.99361 3.57709 7.78767 2.86683 7.76209V11.5698C2.86683 11.6987 2.97132 11.8032 3.10021 11.8032H6.88869Z" fill="black"/>
    </Svg>
  );
};
