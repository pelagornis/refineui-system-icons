import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rhombus24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.2087 12.6545C5.93043 12.2667 5.93043 11.7333 6.2087 11.3455L11.1652 4.43636C11.5826 3.85455 12.4174 3.85455 12.8348 4.43636L17.7913 11.3455C18.0696 11.7333 18.0696 12.2667 17.7913 12.6545L12.8348 19.5636C12.4174 20.1455 11.5826 20.1455 11.1652 19.5636L6.2087 12.6545Z" fill="black"/>
    </Svg>
  );
};
