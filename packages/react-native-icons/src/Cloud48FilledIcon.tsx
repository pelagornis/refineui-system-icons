import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Cloud48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M34.1429 24C33.5906 24 33.1488 23.5505 33.0872 23.0017C32.5827 18.5009 28.7067 15 24 15C19.2933 15 15.4173 18.5009 14.9128 23.0017C14.8512 23.5505 14.4094 24 13.8571 24H12.5714C10.0467 24 8 26.0147 8 28.5C8 30.9853 10.0467 33 12.5714 33H35.4286C37.9533 33 40 30.9853 40 28.5C40 26.0147 37.9533 24 35.4286 24H34.1429Z" fill="black"/>
    </Svg>
  );
};
