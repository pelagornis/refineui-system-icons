import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Heart32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9606 8.95406C22.7587 6.35623 18.8483 6.3473 16.6355 8.93547L15.6666 10.0687L14.6978 8.9355C12.4849 6.34733 8.57446 6.35628 6.37267 8.95416C4.46046 11.2104 4.55638 14.6105 6.59618 16.7475L14.7236 25.2621C15.2385 25.8015 16.0947 25.8015 16.6096 25.2621L24.7371 16.7477C26.777 14.6106 26.8729 11.2103 24.9606 8.95406Z" fill="black"/>
    </Svg>
  );
};
