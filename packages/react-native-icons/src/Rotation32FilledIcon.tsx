import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Rotation32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33302 5C7.06922 5 7.66603 5.59681 7.66603 6.33302V14.3459C9.28171 14.4694 11.223 14.9778 12.9309 16.1756C15.0119 17.6351 16.6248 20.0354 16.9414 23.664H24.997C25.7332 23.664 26.33 24.2608 26.33 24.997C26.33 25.7332 25.7332 26.33 24.997 26.33H7.66603C6.19362 26.33 5 25.1364 5 23.664V6.33302C5 5.59681 5.59681 5 6.33302 5ZM14.2633 23.664C13.9676 20.9146 12.7565 19.3096 11.4001 18.3584C10.2173 17.5288 8.8403 17.1404 7.66603 17.0218V23.664H14.2633Z" fill="black"/>
    </Svg>
  );
};
