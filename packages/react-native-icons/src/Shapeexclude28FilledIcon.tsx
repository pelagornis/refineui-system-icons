import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapeexclude28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 17.8333H7.33333C6.04467 17.8333 5 16.7887 5 15.5V7.33333C5 6.04467 6.04467 5 7.33333 5H15.5C16.7887 5 17.8333 6.04467 17.8333 7.33333V10.8333H21.3333C22.622 10.8333 23.6667 11.878 23.6667 13.1667V21.3333C23.6667 22.622 22.622 23.6667 21.3333 23.6667H13.1667C11.878 23.6667 10.8333 22.622 10.8333 21.3333V17.8333ZM16.0833 12.35C16.2122 12.35 16.3167 12.4545 16.3167 12.5833V15.5C16.3167 15.951 15.951 16.3167 15.5 16.3167H12.5833C12.4545 16.3167 12.35 16.2122 12.35 16.0833V13.1667C12.35 12.7156 12.7156 12.35 13.1667 12.35H16.0833Z" fill="black"/>
    </Svg>
  );
};
