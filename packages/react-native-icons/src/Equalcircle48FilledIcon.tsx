import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Equalcircle48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24ZM15.7 21C15.7 20.282 16.282 19.7 17 19.7H31C31.718 19.7 32.3 20.282 32.3 21C32.3 21.718 31.718 22.3 31 22.3H17C16.282 22.3 15.7 21.718 15.7 21ZM17 25.7C16.282 25.7 15.7 26.282 15.7 27C15.7 27.718 16.282 28.3 17 28.3H31C31.718 28.3 32.3 27.718 32.3 27C32.3 26.282 31.718 25.7 31 25.7H17Z" fill="black"/>
    </Svg>
  );
};
