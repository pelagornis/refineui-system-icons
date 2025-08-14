import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Flash24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.90115 4.54515C8.04305 4.21441 8.36835 4 8.72825 4H14.807C15.4215 4 15.8552 4.60205 15.6608 5.18488L14.5352 8.5578H18.0988C18.9008 8.5578 19.3022 9.52771 18.7348 10.0945L9.08725 19.7318C8.46133 20.357 7.40343 19.7985 7.56665 18.929L8.79404 12.3899H5.90097C5.2547 12.3899 4.81907 11.729 5.07388 11.1351L7.90115 4.54515Z" fill="black"/>
    </Svg>
  );
};
