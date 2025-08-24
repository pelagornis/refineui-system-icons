import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Morehorizontal28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M7.04167 12C8.16921 12 9.08328 12.9141 9.08333 14.0417C9.08333 15.1693 8.16925 16.0833 7.04167 16.0833C5.91409 16.0833 5 15.1693 5 14.0417C5.00006 12.9141 5.91412 12 7.04167 12Z" fill="black"/>
<path d="M14.0417 12C15.1692 12 16.0833 12.9141 16.0833 14.0417C16.0833 15.1693 15.1692 16.0833 14.0417 16.0833C12.9141 16.0833 12 15.1693 12 14.0417C12.0001 12.9141 12.9141 12 14.0417 12Z" fill="black"/>
<path d="M21.0417 12C22.1692 12 23.0833 12.9141 23.0833 14.0417C23.0833 15.1693 22.1692 16.0833 21.0417 16.0833C19.9141 16.0833 19 15.1693 19 14.0417C19.0001 12.9141 19.9141 12 21.0417 12Z" fill="black"/>
    </Svg>
  );
};
