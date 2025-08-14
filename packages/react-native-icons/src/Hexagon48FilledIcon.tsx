import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Hexagon48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8015 11.5271C15.4075 10.5759 16.4572 10 17.5851 10H30.4149C31.5428 10 32.5925 10.5759 33.1985 11.5271L39.4833 21.3931C40.1322 22.4117 40.1727 23.7033 39.589 24.7605L33.2211 36.2949C32.6403 37.3469 31.5335 38 30.3318 38H17.6682C16.4665 38 15.3597 37.3469 14.7789 36.2949L8.41097 24.7605C7.82729 23.7033 7.86783 22.4117 8.51667 21.3931L14.8015 11.5271Z" fill="black"/>
    </Svg>
  );
};
