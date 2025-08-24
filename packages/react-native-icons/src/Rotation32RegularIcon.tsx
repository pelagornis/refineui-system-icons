import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rotation32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.86643 5C6.34494 5 6.73285 5.38791 6.73285 5.86643V14.7852C8.43553 14.8367 10.6091 15.32 12.488 16.6377C14.6249 18.1364 16.2952 20.6565 16.5084 24.5971H25.4636C25.9421 24.5971 26.33 24.9851 26.33 25.4636C26.33 25.9421 25.9421 26.33 25.4636 26.33H7.19939C5.9847 26.33 5 25.3453 5 24.1306V5.86643C5 5.38791 5.38791 5 5.86643 5ZM14.7728 24.5971C14.5666 21.21 13.1497 19.2183 11.493 18.0564C9.96045 16.9816 8.1527 16.5699 6.73285 16.5188V24.1306C6.73285 24.3883 6.94173 24.5971 7.19939 24.5971H14.7728Z" fill="black"/>
    </Svg>
  );
};
