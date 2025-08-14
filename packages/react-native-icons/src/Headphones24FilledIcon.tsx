import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Headphones24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.30002 10.8864C5.30002 9.96463 5.60414 8.56389 6.57346 7.40584C7.52166 6.27302 9.16639 5.3 12 5.3C14.8337 5.3 16.4784 6.27302 17.4266 7.40584C18.3959 8.56389 18.7 9.96463 18.7 10.8864L18.7 14.2444H15C14.4477 14.2444 14 14.6921 14 15.2444V19.001C14 19.5533 14.4477 20.001 15 20.001H18C19.1046 20.001 20 19.1056 20 18.001V10.8864C20 9.7293 19.6291 8.01186 18.4235 6.57143C17.1967 5.10577 15.1664 4 12 4C8.83366 4 6.80339 5.10577 5.57659 6.57143C4.37091 8.01186 4.00002 9.72929 4.00002 10.8864L4 18.001C4 19.1056 4.89543 20.001 6 20.001H9C9.55228 20.001 10 19.5533 10 19.001V15.2444C10 14.6921 9.55228 14.2444 9 14.2444H5.30002V10.8864Z" fill="black"/>
    </Svg>
  );
};
