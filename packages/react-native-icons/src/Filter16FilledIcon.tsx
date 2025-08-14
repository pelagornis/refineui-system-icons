import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Filter16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 5.66661C3 5.29845 3.29845 5 3.66661 5H13.0001C13.3682 5 13.6667 5.29845 13.6667 5.66661C13.6667 6.03477 13.3682 6.33323 13.0001 6.33323H3.66661C3.29845 6.33323 3 6.03477 3 5.66661Z" fill="black"/>
<path d="M4.33331 8.33341C4.33331 7.96525 4.63176 7.66679 4.99992 7.66679H11.6667C12.0348 7.66679 12.3333 7.96525 12.3333 8.33341C12.3333 8.70157 12.0348 9.00002 11.6667 9.00002H4.99992C4.63176 9.00002 4.33331 8.70157 4.33331 8.33341Z" fill="black"/>
<path d="M6.33331 10.3336C5.96515 10.3336 5.6667 10.632 5.6667 11.0002C5.6667 11.3684 5.96515 11.6668 6.33331 11.6668H10.3334C10.7015 11.6668 11 11.3684 11 11.0002C11 10.632 10.7015 10.3336 10.3334 10.3336H6.33331Z" fill="black"/>
    </Svg>
  );
};
