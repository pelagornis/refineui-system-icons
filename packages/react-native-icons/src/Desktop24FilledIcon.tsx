import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Desktop24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V13C20 14.1046 19.1046 15 18 15H14.7929V17.2H17C17.359 17.2 17.65 17.491 17.65 17.85C17.65 18.209 17.359 18.5 17 18.5H7C6.64102 18.5 6.35 18.209 6.35 17.85C6.35 17.491 6.64102 17.2 7 17.2H9.20714V15H6C4.89543 15 4 14.1046 4 13V6ZM10.5071 15V17.2H13.4929V15H10.5071Z" fill="black"/>
    </Svg>
  );
};
