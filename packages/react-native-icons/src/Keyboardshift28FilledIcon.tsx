import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardshift28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3363 5.44242C14.8008 4.85252 13.8692 4.85253 13.3337 5.44242L5.50345 14.0676C4.36617 15.3204 5.28854 17.2739 6.94447 17.2739H9.44667V21.7488C9.44667 22.82 10.3248 23.67 11.3851 23.67H17.2849C18.3452 23.67 19.2233 22.82 19.2233 21.7488V17.2739H21.7255C23.3815 17.2739 24.3038 15.3204 23.1666 14.0676L15.3363 5.44242Z" fill="black"/>
    </Svg>
  );
};
