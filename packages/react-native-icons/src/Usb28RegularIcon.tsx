import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Usb28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3333 9.39915V6.18896C10.3333 5.53232 10.8557 5 11.5 5H16.1667C16.811 5 17.3333 5.53232 17.3333 6.18896V9.39915C18.622 9.39915 19.6667 10.4638 19.6667 11.7771V21.2887C19.6667 22.602 18.622 23.6667 17.3333 23.6667H10.3333C9.04467 23.6667 8 22.602 8 21.2887V11.7771C8 10.4638 9.04467 9.39915 10.3333 9.39915ZM11.85 9.39915V6.54565H15.8167V9.39915L11.85 9.39915ZM10.3333 10.9448C9.8823 10.9448 9.51667 11.3174 9.51667 11.7771V21.2887C9.51667 21.7484 9.8823 22.121 10.3333 22.121H17.3333C17.7844 22.121 18.15 21.7484 18.15 21.2887V11.7771C18.15 11.3174 17.7844 10.9448 17.3333 10.9448" fill="black"/>
    </Svg>
  );
};
