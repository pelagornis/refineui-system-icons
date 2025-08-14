import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronltr32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13.1351 11.2669C13.7239 11.7088 13.843 12.5443 13.4011 13.133L11.2996 15.9333C11.1217 16.1703 11.1217 16.4963 11.2996 16.7334L13.4011 19.5336C13.843 20.1224 13.7239 20.9579 13.1351 21.3998C12.5463 21.8416 11.7108 21.7225 11.2689 21.1337L8.26682 17.1334C7.91106 16.6593 7.91106 16.0073 8.26682 15.5333L11.2689 11.5329C11.7108 10.9441 12.5463 10.825 13.1351 11.2669Z" fill="black"/>
    </Svg>
  );
};
