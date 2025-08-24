import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Smartwatch28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10.1667 7.33333C10.1667 6.04467 11.2113 5 12.5 5H17.1667C18.4553 5 19.5 6.04467 19.5 7.33333V7.53249C19.1351 7.40351 18.7424 7.33333 18.3333 7.33333H11.3333C10.9243 7.33333 10.5316 7.40351 10.1667 7.53249V7.33333Z" fill="black"/>
<path d="M18.3333 21.3333C18.7424 21.3333 19.1351 21.2632 19.5 21.1342V21.3333C19.5 22.622 18.4553 23.6667 17.1667 23.6667H12.5C11.2113 23.6667 10.1667 22.622 10.1667 21.3333V21.1342C10.5316 21.2632 10.9243 21.3333 11.3333 21.3333H18.3333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3333 8.5C10.0447 8.5 9 9.54467 9 10.8333V17.8333C9 19.122 10.0447 20.1667 11.3333 20.1667H18.3333C19.622 20.1667 20.6667 19.122 20.6667 17.8333V15.5C21.311 15.5 21.8333 14.9777 21.8333 14.3333V13.1667C21.8333 12.5223 21.311 12 20.6667 12V10.8333C20.6667 9.54467 19.622 8.5 18.3333 8.5H11.3333Z" fill="black"/>
    </Svg>
  );
};
