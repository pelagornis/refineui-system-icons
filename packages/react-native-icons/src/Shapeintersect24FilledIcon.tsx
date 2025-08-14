import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapeintersect24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 15H6C4.89543 15 4 14.1046 4 13V6C4 4.89543 4.89543 4 6 4H13C14.1046 4 15 4.89543 15 6V9H18C19.1046 9 20 9.89543 20 11V18C20 19.1046 19.1046 20 18 20H11C9.89543 20 9 19.1046 9 18V15ZM6 5.3H13C13.3866 5.3 13.7 5.6134 13.7 6V9H11C9.89543 9 9 9.89543 9 11V13.7H6C5.6134 13.7 5.3 13.3866 5.3 13V6C5.3 5.6134 5.6134 5.3 6 5.3ZM15 10.3H18C18.3866 10.3 18.7 10.6134 18.7 11V18C18.7 18.3866 18.3866 18.7 18 18.7H11C10.6134 18.7 10.3 18.3866 10.3 18V15H13C14.1046 15 15 14.1046 15 13V10.3Z" fill="black"/>
    </Svg>
  );
};
