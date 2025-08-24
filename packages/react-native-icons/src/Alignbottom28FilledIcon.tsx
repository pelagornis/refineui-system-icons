import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Alignbottom28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5 22.912C5 22.4931 5.33962 22.1535 5.75856 22.1535H22.9081C23.327 22.1535 23.6667 22.4931 23.6667 22.912C23.6667 23.331 23.327 23.6706 22.9081 23.6706H5.75856C5.33962 23.6706 5 23.331 5 22.912Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2799 21.0591C15.9908 21.0591 14.9458 20.0141 14.9458 18.7251V11.04C14.9458 9.75094 15.9908 8.70595 17.2799 8.70595H19.3491C20.6382 8.70595 21.6831 9.75093 21.6831 11.04V18.7251C21.6831 20.0141 20.6382 21.0591 19.3491 21.0591H17.2799Z" fill="black"/>
<path d="M9.31758 21.0591C8.02853 21.0591 6.98355 20.0141 6.98355 18.7251L6.98355 7.33404C6.98355 6.04499 8.02853 5 9.31759 5L11.3868 5C12.6759 5 13.7209 6.04499 13.7209 7.33404V18.7251C13.7209 20.0141 12.6759 21.0591 11.3868 21.0591H9.31758Z" fill="black"/>
    </Svg>
  );
};
