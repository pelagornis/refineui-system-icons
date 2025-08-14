import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Laptop24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7 6C6.44769 6 6 6.44771 6 7V14C6 14.5523 6.44769 15 7 15H17C17.5523 15 18 14.5523 18 14V7C18 6.44771 17.5523 6 17 6H7Z" fill="black"/>
<path d="M4.65002 16C4.29102 16 4 16.291 4 16.65C4 17.009 4.29102 17.3 4.65002 17.3H19.35C19.709 17.3 20 17.009 20 16.65C20 16.291 19.709 16 19.35 16H4.65002Z" fill="black"/>
    </Svg>
  );
};
