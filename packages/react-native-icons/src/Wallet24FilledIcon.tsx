import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Wallet24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 5C17.1046 5 18 5.89543 18 7C19.1046 7 20 7.89543 20 9V11.75C20 11.8881 19.8881 12 19.75 12H14.5C13.6716 12 13 12.6716 13 13.5C13 14.3284 13.6716 15 14.5 15H19.75C19.8881 15 20 15.1119 20 15.25V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V7C4 5.89543 4.89543 5 6 5H16ZM16 6.3H6C5.6134 6.3 5.3 6.6134 5.3 7V7.12592C5.51787 7.04451 5.75374 7 6 7H16.7C16.7 6.6134 16.3866 6.3 16 6.3Z" fill="black"/>
<path d="M18.7 13.7V13.3H14.5C14.3895 13.3 14.3 13.3895 14.3 13.5C14.3 13.6105 14.3895 13.7 14.5 13.7H18.7Z" fill="black"/>
    </Svg>
  );
};
