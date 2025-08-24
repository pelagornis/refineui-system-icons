import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Wifi420FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.68628 14.916C10.2386 14.916 10.6863 14.4683 10.6863 13.916C10.6863 13.3637 10.2386 12.916 9.68628 12.916C9.13399 12.916 8.68628 13.3637 8.68628 13.916C8.68628 14.4683 9.13399 14.916 9.68628 14.916Z" fill="black"/>
    </Svg>
  );
};
