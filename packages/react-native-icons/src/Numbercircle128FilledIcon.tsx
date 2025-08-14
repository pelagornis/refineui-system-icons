import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle128FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 23.6667C19.488 23.6667 23.6667 19.488 23.6667 14.3333C23.6667 9.17868 19.488 5 14.3333 5C9.17868 5 5 9.17868 5 14.3333C5 19.488 9.17868 23.6667 14.3333 23.6667ZM14.1583 17.8333V12.5267L13.1259 13.584C12.8333 13.8836 12.3532 13.8893 12.0535 13.5968C11.7539 13.3041 11.7482 12.824 12.0408 12.5244L14.1749 10.3388C14.7505 9.74937 15.675 10.2055 15.675 10.9531V17.8333C15.675 18.2521 15.3355 18.5917 14.9167 18.5917C14.4979 18.5917 14.1583 18.2521 14.1583 17.8333Z" fill="black"/>
    </Svg>
  );
};
