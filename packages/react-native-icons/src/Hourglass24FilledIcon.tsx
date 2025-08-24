import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Hourglass24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.58142 4H17.4186C18.6897 4 19.4396 5.35454 18.7195 6.34979L15.2461 11.1502C14.8757 11.6621 14.8757 12.3379 15.2461 12.8498L18.7195 17.6502C19.4396 18.6455 18.6897 20 17.4186 20H6.58142C5.31028 20 4.56036 18.6455 5.2805 17.6502L8.75394 12.8498C9.12432 12.3379 9.12432 11.6621 8.75394 11.1502L5.2805 6.34979C4.56036 5.35454 5.31028 4 6.58142 4Z" fill="black"/>
    </Svg>
  );
};
