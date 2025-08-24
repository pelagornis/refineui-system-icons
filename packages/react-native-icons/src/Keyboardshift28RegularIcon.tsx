import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Keyboardshift28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3363 5.44242C14.8008 4.85252 13.8692 4.85253 13.3337 5.44242L5.50345 14.0676C4.36617 15.3204 5.28854 17.2739 6.94447 17.2739H9.44667V21.7488C9.44667 22.82 10.3248 23.67 11.3851 23.67H17.2849C18.3452 23.67 19.2233 22.82 19.2233 21.7488V17.2739H21.7255C23.3815 17.2739 24.3038 15.3204 23.1666 14.0676L15.3363 5.44242ZM14.335 6.59601L6.62679 15.0868C6.40389 15.3323 6.56052 15.7573 6.94447 15.7573H9.61519C10.3497 15.7573 10.9637 16.347 10.9637 17.0971V21.7488C10.9637 21.9621 11.1421 22.1534 11.3851 22.1534H17.2849C17.5279 22.1534 17.7063 21.9621 17.7063 21.7488V17.0971C17.7063 16.347 18.3203 15.7573 19.0548 15.7573H21.7255C22.1095 15.7573 22.2661 15.3323 22.0432 15.0868L14.335 6.59601Z" fill="black"/>
    </Svg>
  );
};
