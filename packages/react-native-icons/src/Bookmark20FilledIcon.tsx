import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bookmark20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5 4.72742C5 3.77339 5.74619 3 6.66667 3H13.3333C14.2538 3 15 3.77339 15 4.72742V15.8973C15 16.2635 14.588 16.4635 14.3166 16.2291L10.2667 12.7312C10.1122 12.5977 9.88778 12.5977 9.73326 12.7312L5.68341 16.2291C5.41202 16.4635 5 16.2635 5 15.8973V4.72742Z" fill="black"/>
    </Svg>
  );
};
