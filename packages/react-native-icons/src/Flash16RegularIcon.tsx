import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Flash16RegularIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.93541 3.36358C5.03007 3.143 5.24708 3 5.48717 3H9.54243C9.95233 3 10.2417 3.40153 10.112 3.79024L9.36112 6.03977H11.7384C12.2735 6.03977 12.5413 6.68664 12.1627 7.06468L5.72667 13.4921C5.30911 13.9091 4.60337 13.5366 4.71225 12.9567L5.53107 8.59555H3.60105C3.16991 8.59555 2.8793 8.15476 3.04928 7.75865L4.93541 3.36358ZM5.66306 3.86702L4.00591 7.72853H5.85266C6.22864 7.72853 6.51212 8.07008 6.44276 8.43951L5.72365 12.2696L11.0937 6.90679H8.99076C8.58087 6.90679 8.29149 6.50526 8.42123 6.11655L9.17208 3.86702H5.66306Z" fill="black"/>
    </Svg>
  );
};
