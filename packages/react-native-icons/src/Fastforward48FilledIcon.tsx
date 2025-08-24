import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Fastforward48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0376 14.1493C20.0376 12.4972 21.7095 11.4647 23.047 12.2907L38.9969 22.1414C40.3344 22.9674 40.3344 25.0326 38.9969 25.8586L23.047 35.7093C21.7095 36.5353 20.0376 35.5028 20.0376 33.8507V30.5051C20.0376 30.3399 19.8704 30.2367 19.7367 30.3193L11.0094 35.7093C9.67189 36.5353 8 35.5028 8 33.8507V14.1493C8 12.4972 9.67189 11.4647 11.0094 12.2907L19.7367 17.6807C19.8704 17.7633 20.0376 17.6601 20.0376 17.4949V14.1493Z" fill="black"/>
    </Svg>
  );
};
