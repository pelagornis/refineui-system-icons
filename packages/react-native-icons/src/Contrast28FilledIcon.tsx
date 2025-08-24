import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Contrast28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.67C9.18598 23.67 5.01185 19.5024 5.00003 14.3569C5.00001 14.3496 5 14.3423 5 14.335C5 14.3277 5.00001 14.3204 5.00003 14.3131C5.00589 11.7618 6.03504 9.45092 7.69874 7.76928C7.71035 7.75754 7.72199 7.74584 7.73367 7.73416C7.74535 7.72248 7.75705 7.71083 7.76879 7.69922C9.45013 6.03522 11.7606 5.00589 14.3114 5.00003C14.3187 5.00001 14.326 5 14.3333 5C19.488 5 23.6667 9.17942 23.6667 14.335C23.6667 19.4906 19.488 23.67 14.3333 23.67ZM14.3333 22.1531V6.51694C18.6504 6.51694 22.15 10.0172 22.15 14.335C22.15 18.6528 18.6504 22.1531 14.3333 22.1531Z" fill="black"/>
    </Svg>
  );
};
