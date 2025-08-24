import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Cone48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6181 8.90534C23.1418 7.69822 24.8582 7.69822 25.382 8.90534L36.8828 35.4117C37.1957 36.133 36.8525 36.9215 36.204 37.2328C28.5198 40.9224 19.4802 40.9224 11.796 37.2328C11.1475 36.9214 10.8043 36.133 11.1172 35.4117L22.6181 8.90534Z" fill="black"/>
    </Svg>
  );
};
