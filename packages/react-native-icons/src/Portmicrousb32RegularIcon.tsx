import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Portmicrousb32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.513 12.478C10.7803 12.1767 11.1644 12 11.5728 12H21.0939C21.5022 12 21.8864 12.1767 22.1537 12.478L25.0134 15.701C26.4559 17.3268 25.3685 20.0028 23.1303 20.0028H9.53633C7.29819 20.0028 6.21073 17.3268 7.65327 15.701L10.513 12.478ZM12.3157 13.7331C11.9345 13.7331 11.5715 13.8963 11.3185 14.1815L8.94964 16.8512C8.44301 17.4222 8.87681 18.2697 9.53633 18.2697H23.1303C23.7899 18.2697 24.2237 17.4222 23.717 16.8512L21.3482 14.1815C21.0952 13.8963 20.7322 13.7331 20.351 13.7331H12.3157Z" fill="black"/>
    </Svg>
  );
};
