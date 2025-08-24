import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pause24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H9C10.1046 4 11 4.89543 11 6V18C11 19.1046 10.1046 20 9 20H6C4.89543 20 4 19.1046 4 18V6ZM5.3 6.3C5.3 5.74772 5.74772 5.3 6.3 5.3H8.7C9.25228 5.3 9.7 5.74772 9.7 6.3V17.7C9.7 18.2523 9.25228 18.7 8.7 18.7H6.3C5.74772 18.7 5.3 18.2523 5.3 17.7V6.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C13 4.89543 13.8954 4 15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15C13.8954 20 13 19.1046 13 18V6ZM14.3 6.3C14.3 5.74772 14.7477 5.3 15.3 5.3H17.7C18.2523 5.3 18.7 5.74772 18.7 6.3V17.7C18.7 18.2523 18.2523 18.7 17.7 18.7H15.3C14.7477 18.7 14.3 18.2523 14.3 17.7V6.3Z" fill="black"/>
    </Svg>
  );
};
