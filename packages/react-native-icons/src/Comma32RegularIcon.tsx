import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Comma32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 11.4912C9 7.9062 11.9806 5 15.6574 5C19.3269 5 22.303 7.89481 22.3147 11.4701C22.4357 14.132 21.9939 17.8002 20.2049 20.8418C18.4861 23.7643 15.5415 26.0632 10.861 26.3318C10.3479 26.3613 9.9306 25.9519 9.9306 25.4507C9.9306 24.9496 10.3487 24.5471 10.8615 24.5135C14.8081 24.2548 17.1758 22.3441 18.5904 19.939C19.2344 18.844 19.684 17.638 19.9818 16.4266C18.8185 17.3966 17.3081 17.9824 15.6574 17.9824C11.9806 17.9824 9 15.0762 9 11.4912Z" fill="black"/>
    </Svg>
  );
};
