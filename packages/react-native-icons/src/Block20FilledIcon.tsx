import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Block20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.591 13.8194C14.6771 13.9054 14.8185 13.8999 14.8942 13.8045C15.7952 12.6676 16.3333 11.23 16.3333 9.66667C16.3333 5.98477 13.3486 3 9.66667 3C8.10336 3 6.66572 3.53809 5.52888 4.43917C5.43347 4.51479 5.42789 4.65627 5.51398 4.74236L14.591 13.8194ZM13.8194 14.591C13.9054 14.6771 13.8999 14.8185 13.8045 14.8942C12.6676 15.7952 11.23 16.3333 9.66667 16.3333C5.98477 16.3333 3 13.3486 3 9.66667C3 8.10336 3.53809 6.66572 4.43917 5.52888C4.51479 5.43347 4.65627 5.42789 4.74236 5.51398L13.8194 14.591Z" fill="black"/>
    </Svg>
  );
};
