import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevrondown28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M22.4763 9.13513C22.7659 8.93392 23.1669 8.95645 23.4321 9.20919C23.735 9.49811 23.7458 9.97823 23.4572 10.2814L15.0931 19.057C14.7053 19.4635 14.0726 19.4891 13.6543 19.1334L13.5734 19.057L5.20934 10.2814L5.11478 10.1606C4.92763 9.86167 4.97036 9.46204 5.23554 9.20919C5.50067 8.95694 5.90085 8.93417 6.1902 9.13513L6.30753 9.23539L14.3333 17.6556L22.3601 9.23539L22.4763 9.13513Z" fill="black"/>
    </Svg>
  );
};
