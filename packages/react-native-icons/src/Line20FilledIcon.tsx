import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Line20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0893 3.24406C16.4147 3.56947 16.4147 4.09706 16.0893 4.42247L4.42247 16.0893C4.09706 16.4147 3.56947 16.4147 3.24406 16.0893C2.91865 15.7639 2.91865 15.2363 3.24406 14.9109L14.9109 3.24406C15.2363 2.91865 15.7639 2.91865 16.0893 3.24406Z" fill="black"/>
    </Svg>
  );
};
