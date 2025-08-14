import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textboxalignbottomleft28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.33333C5 6.04467 6.04467 5 7.33333 5H21.3333C22.622 5 23.6667 6.04467 23.6667 7.33333V21.3333C23.6667 22.622 22.622 23.6667 21.3333 23.6667H7.33333C6.04467 23.6667 5 22.622 5 21.3333V7.33333ZM8.325 14.3333C8.325 13.9145 8.66452 13.575 9.08333 13.575H19C19.4188 13.575 19.7583 13.9145 19.7583 14.3333C19.7583 14.7521 19.4188 15.0917 19 15.0917H9.08333C8.66452 15.0917 8.325 14.7521 8.325 14.3333ZM9.08333 17.6583C8.66452 17.6583 8.325 17.9979 8.325 18.4167C8.325 18.8355 8.66452 19.175 9.08333 19.175H16.0833C16.5021 19.175 16.8417 18.8355 16.8417 18.4167C16.8417 17.9979 16.5021 17.6583 16.0833 17.6583H9.08333Z" fill="black"/>
    </Svg>
  );
};
