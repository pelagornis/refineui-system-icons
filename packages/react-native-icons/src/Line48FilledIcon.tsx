import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Line48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M39.4143 8.58574C40.1952 9.36672 40.1952 10.633 39.4143 11.4139L11.4139 39.4143C10.6329 40.1952 9.36672 40.1952 8.58574 39.4143C7.80475 38.6333 7.80475 37.367 8.58574 36.5861L36.5861 8.58574C37.3671 7.80475 38.6333 7.80475 39.4143 8.58574Z" fill="black"/>
    </Svg>
  );
};
