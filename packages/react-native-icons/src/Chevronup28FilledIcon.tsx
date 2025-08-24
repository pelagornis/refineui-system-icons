import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronup28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.9912 19.0407C6.53564 19.4962 5.79719 19.4962 5.34163 19.0407C4.88615 18.5852 4.88609 17.847 5.34163 17.3915L13.3127 9.42242C13.8766 8.85917 14.7902 8.85922 15.3541 9.42242L23.3252 17.3915L23.4049 17.4804C23.7786 17.9384 23.7523 18.6137 23.3252 19.0407C22.8981 19.4677 22.2227 19.494 21.7645 19.1204L21.6756 19.0407L14.3334 11.7003L6.9912 19.0407Z" fill="black"/>
    </Svg>
  );
};
