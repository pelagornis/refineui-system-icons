import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Copy24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9 4C7.89543 4 7 4.89543 7 6V16C7 17.1046 7.89543 18 9 18H17C18.1046 18 19 17.1046 19 16V6C19 4.89543 18.1046 4 17 4H9Z" fill="black"/>
<path d="M16.3534 19.9982C16.7124 19.9982 17.0034 19.7072 17.0034 19.3482C17.0034 18.9893 16.7124 18.6982 16.3534 18.6982L7.65 18.6982C6.90442 18.6982 6.3 18.0938 6.3 17.3482L6.3 6.65C6.3 6.29101 6.00899 6 5.65 6C5.29102 6 5 6.29101 5 6.65V17.3482C5 18.8118 6.18644 19.9982 7.65 19.9982H16.3534Z" fill="black"/>
    </Svg>
  );
};
