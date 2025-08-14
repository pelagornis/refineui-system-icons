import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Squaremultiple24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M18 5.3H10C9.6134 5.3 9.3 5.6134 9.3 6H8C8 4.89543 8.89543 4 10 4H18C19.1046 4 20 4.89543 20 6V14C20 15.1046 19.1046 16 18 16V14.7C18.3866 14.7 18.7 14.3866 18.7 14V6C18.7 5.6134 18.3866 5.3 18 5.3Z" fill="black"/>
<path d="M6 7C4.89543 7 4 7.89543 4 9V18C4 19.1046 4.89543 20 6 20H15C16.1046 20 17 19.1046 17 18V9C17 7.89543 16.1046 7 15 7H6Z" fill="black"/>
    </Svg>
  );
};
