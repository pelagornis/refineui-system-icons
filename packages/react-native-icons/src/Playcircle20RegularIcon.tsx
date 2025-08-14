import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Playcircle20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.65678 7.20286L11.9794 9.3638C12.2291 9.4886 12.2291 9.84474 11.9794 9.96953L7.65678 12.1305C7.43161 12.243 7.16667 12.0793 7.16667 11.8276V7.5057C7.16667 7.254 7.43161 7.09028 7.65678 7.20286Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 9.66667C16.3333 13.3486 13.3486 16.3333 9.66667 16.3333C5.98477 16.3333 3 13.3486 3 9.66667C3 5.98477 5.98477 3 9.66667 3C13.3486 3 16.3333 5.98477 16.3333 9.66667ZM15.25 9.66667C15.25 12.7503 12.7503 15.25 9.66667 15.25C6.58307 15.25 4.08332 12.7503 4.08332 9.66667C4.08332 6.58308 6.58307 4.08334 9.66667 4.08334C12.7503 4.08334 15.25 6.58308 15.25 9.66667Z" fill="black"/>
    </Svg>
  );
};
