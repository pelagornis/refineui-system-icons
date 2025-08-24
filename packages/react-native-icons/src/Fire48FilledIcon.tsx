import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Fire48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7139 22.1336C15.8843 20.7185 14.9594 19.6232 14 21.0579C13.222 22.6431 12 26.1528 12 28.0365C12 34.6438 17.3726 40 24 40C30.6274 40 36 34.6438 36 28.0365C36 24.73 34.2049 22.111 32.4699 19.5795L32.4321 19.5244C30 15.9756 29 13.0822 28 8.09743C26.6253 7.55057 21.5168 9.31852 19 13.0822C17.5498 15.2509 18.3048 18.0388 18.954 20.4357C19.0197 20.6783 19.0843 20.9169 19.1454 21.1505C19.2846 21.6819 19.4056 22.1872 19.4805 22.6539C19.6453 23.6819 19.5857 24.5231 19 25.0457C18.532 25.4633 17.948 24.3848 17.2851 23.1606C17.2774 23.1464 17.2696 23.1321 17.2619 23.1179C17.0846 22.7905 16.9017 22.4538 16.7139 22.1336Z" fill="black"/>
    </Svg>
  );
};
