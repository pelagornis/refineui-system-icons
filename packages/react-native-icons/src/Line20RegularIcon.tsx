import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Line20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M16.1747 3.15863C16.3862 3.37014 16.3862 3.71306 16.1747 3.92457L3.92457 16.1747C3.71306 16.3862 3.37014 16.3862 3.15863 16.1747C2.94712 15.9632 2.94712 15.6203 3.15863 15.4088L15.4088 3.15863C15.6203 2.94712 15.9632 2.94712 16.1747 3.15863Z" fill="black"/>
    </Svg>
  );
};
