import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Barcharthorizontal24RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8H11C12.1046 8 13 7.10457 13 6C13 4.89543 12.1046 4 11 4H6ZM11 5.3H6C5.6134 5.3 5.3 5.6134 5.3 6C5.3 6.3866 5.6134 6.7 6 6.7H11C11.3866 6.7 11.7 6.3866 11.7 6C11.7 5.6134 11.3866 5.3 11 5.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14H14C15.1046 14 16 13.1046 16 12C16 10.8954 15.1046 10 14 10H6ZM14 11.3H6C5.6134 11.3 5.3 11.6134 5.3 12C5.3 12.3866 5.6134 12.7 6 12.7H14C14.3866 12.7 14.7 12.3866 14.7 12C14.7 11.6134 14.3866 11.3 14 11.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 18C4 16.8954 4.89543 16 6 16H18C19.1046 16 20 16.8954 20 18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18ZM6 17.3H18C18.3866 17.3 18.7 17.6134 18.7 18C18.7 18.3866 18.3866 18.7 18 18.7H6C5.6134 18.7 5.3 18.3866 5.3 18C5.3 17.6134 5.6134 17.3 6 17.3Z" fill="black"/>
    </Svg>
  );
};
