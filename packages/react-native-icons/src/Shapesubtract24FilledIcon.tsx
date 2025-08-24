import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapesubtract24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 15H9V18C9 19.1046 9.89543 20 11 20H18C19.1046 20 20 19.1046 20 18V11C20 9.89543 19.1046 9 18 9H15V6C15 4.89543 14.1046 4 13 4H6C4.89543 4 4 4.89543 4 6V13C4 14.1046 4.89543 15 6 15ZM18 10.3H15V13C15 14.1046 14.1046 15 13 15H10.3V18C10.3 18.3866 10.6134 18.7 11 18.7H18C18.3866 18.7 18.7 18.3866 18.7 18V11C18.7 10.6134 18.3866 10.3 18 10.3Z" fill="black"/>
    </Svg>
  );
};
