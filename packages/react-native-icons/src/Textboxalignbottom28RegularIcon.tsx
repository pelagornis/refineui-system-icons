import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottom28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7.325 14.3333C7.325 13.9145 7.66452 13.575 8.08333 13.575H18.5833C19.0021 13.575 19.3417 13.9145 19.3417 14.3333C19.3417 14.7521 19.0021 15.0917 18.5833 15.0917H8.08333C7.66452 15.0917 7.325 14.7521 7.325 14.3333Z" fill="black"/>
<path d="M8.08333 17.6583C7.66452 17.6583 7.325 17.9979 7.325 18.4167C7.325 18.8355 7.66452 19.175 8.08333 19.175H18.5833C19.0021 19.175 19.3417 18.8355 19.3417 18.4167C19.3417 17.9979 19.0021 17.6583 18.5833 17.6583H8.08333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 5C5.04467 5 4 6.04467 4 7.33333V21.3333C4 22.622 5.04467 23.6667 6.33333 23.6667H20.3333C21.622 23.6667 22.6667 22.622 22.6667 21.3333V7.33333C22.6667 6.04467 21.622 5 20.3333 5H6.33333ZM20.3333 6.51667H6.33333C5.8823 6.51667 5.51667 6.8823 5.51667 7.33333V21.3333C5.51667 21.7844 5.8823 22.15 6.33333 22.15H20.3333C20.7844 22.15 21.15 21.7844 21.15 21.3333V7.33333C21.15 6.8823 20.7844 6.51667 20.3333 6.51667Z" fill="black"/>
    </Svg>
  );
};
