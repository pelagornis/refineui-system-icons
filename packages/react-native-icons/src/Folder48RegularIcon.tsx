import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Folder48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 14.9774C8 13.333 9.36644 12 11.052 12H18.6095C19.419 12 20.1953 12.3137 20.7677 12.8721L24.3084 16.3263C24.4298 16.4447 24.5945 16.5113 24.7662 16.5113H36.948C38.6336 16.5113 40 17.8443 40 19.4887V33.0226C40 34.667 38.6336 36 36.948 36H11.052C9.36644 36 8 34.667 8 33.0226V14.9774ZM11.052 14.3459C10.6945 14.3459 10.4046 14.6286 10.4046 14.9774V33.0226C10.4046 33.3714 10.6945 33.6541 11.052 33.6541H36.948C37.3055 33.6541 37.5954 33.3714 37.5954 33.0226V19.4887C37.5954 19.1399 37.3055 18.8571 36.948 18.8571H24.7662C23.9567 18.8571 23.1804 18.5434 22.6081 17.9851L19.0673 14.5308C18.9459 14.4124 18.7812 14.3459 18.6095 14.3459H11.052Z" fill="black"/>
    </Svg>
  );
};
