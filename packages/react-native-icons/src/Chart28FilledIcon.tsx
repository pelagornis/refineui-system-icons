import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chart28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M6.51661 5.7583C6.51661 5.3395 6.1771 5 5.7583 5C5.3395 5 5 5.3395 5 5.7583V21.7417C5 22.8048 5.86181 23.6667 6.92492 23.6667H22.9084C23.3272 23.6667 23.6667 23.3272 23.6667 22.9084C23.6667 22.4896 23.3272 22.1501 22.9084 22.1501H6.92492C6.69941 22.1501 6.51661 21.9673 6.51661 21.7417V5.7583Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.9112 7.98317C22.9112 6.78792 21.4661 6.18934 20.6209 7.03451L15.379 12.2765L13.5276 10.4251C13.0923 9.98982 12.4166 9.90664 11.8887 10.2234L8.0465 12.5287C7.6424 12.7712 7.39515 13.2079 7.39515 13.6791V20.2827C7.39515 20.8626 7.86523 21.3327 8.4451 21.3327H21.8612C22.4411 21.3327 22.9112 20.8626 22.9112 20.2827V7.98317Z" fill="black"/>
    </Svg>
  );
};
