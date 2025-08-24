import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Equaloff28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M4.29452 4.2221C3.99838 3.92596 3.51824 3.92597 3.2221 4.22211C2.92596 4.51825 2.92597 4.99838 3.22211 5.29452L22.7055 24.7779C23.0016 25.074 23.4818 25.074 23.7779 24.7779C24.074 24.4817 24.074 24.0016 23.7779 23.7055L4.29452 4.2221Z" fill="black"/>
<path d="M4.92518 9.83319H6.49991L8.01631 11.3496H4.92518C4.50625 11.3496 4.16664 11.0101 4.16664 10.5914C4.16664 10.1726 4.50625 9.83319 4.92518 9.83319Z" fill="black"/>
<path d="M11.1665 9.83319L12.6829 11.3496H22.0743C22.4932 11.3496 22.8328 11.0101 22.8328 10.5914C22.8328 10.1726 22.4932 9.83319 22.0743 9.83319H11.1665Z" fill="black"/>
<path d="M4.92518 17.6499H14.3166L15.833 19.1663H4.92518C4.50625 19.1663 4.16664 18.8268 4.16664 18.4081C4.16664 17.9893 4.50625 17.6499 4.92518 17.6499Z" fill="black"/>
<path d="M18.9832 17.6499L20.4996 19.1663H22.0743C22.4932 19.1663 22.8328 18.8268 22.8328 18.4081C22.8328 17.9893 22.4932 17.6499 22.0743 17.6499H18.9832Z" fill="black"/>
    </Svg>
  );
};
