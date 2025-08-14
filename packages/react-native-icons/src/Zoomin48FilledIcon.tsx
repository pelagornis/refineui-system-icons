import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Zoomin48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M27.031 28.9774L27.001 29C25.3295 30.2558 23.2516 31 21 31C15.4772 31 11 26.5228 11 21C11 15.4772 15.4772 11 21 11C26.5228 11 31 15.4772 31 21C31 23.2651 30.2469 25.3544 28.9774 27.031L35.759 33.8125C36.4078 34.4614 37.5108 35.9536 36.7322 36.7322C35.9536 37.5108 34.4614 36.4078 33.8125 35.759L27.031 28.9774ZM21.5 17.5C21.5 17.2239 21.2761 17 21 17C20.7239 17 20.5 17.2239 20.5 17.5V20.5H17.5C17.2239 20.5 17 20.7239 17 21C17 21.2761 17.2239 21.5 17.5 21.5H20.5V24.5C20.5 24.7761 20.7239 25 21 25C21.2761 25 21.5 24.7761 21.5 24.5V21.5H24.5C24.7761 21.5 25 21.2761 25 21C25 20.7239 24.7761 20.5 24.5 20.5H21.5V17.5Z" fill="black"/>
    </Svg>
  );
};
