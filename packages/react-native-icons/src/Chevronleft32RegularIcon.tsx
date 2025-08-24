import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chevronleft32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7092 24.9698C21.9391 25.3007 21.9134 25.759 21.6246 26.062C21.2944 26.4081 20.7458 26.4204 20.3994 26.0906L10.3717 16.5332C9.90723 16.0901 9.87796 15.3671 10.2844 14.8891L10.3717 14.7966L20.3994 5.2392L20.5374 5.13116C20.879 4.9173 21.3357 4.96613 21.6246 5.26915C21.9128 5.5721 21.9388 6.02938 21.7092 6.36001L21.5946 6.49409L11.9731 15.6649L21.5946 24.837L21.7092 24.9698Z" fill="black"/>
    </Svg>
  );
};
