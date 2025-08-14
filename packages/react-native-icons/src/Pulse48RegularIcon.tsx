import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pulse48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M19.967 18.1082L17.6129 23.4925C17.2468 24.3299 16.4197 24.871 15.5058 24.871H9.29984C8.58196 24.871 8 24.289 8 23.5711C8 22.8532 8.58196 22.2713 9.29984 22.2713H15.3096L17.8859 16.3785C18.7181 14.4752 21.4474 14.5632 22.1552 16.5162L26.99 29.8565L29.4011 23.7289C29.7472 22.8495 30.596 22.2713 31.5411 22.2713H38.7002C39.418 22.2713 40 22.8532 40 23.5711C40 24.289 39.418 24.871 38.7002 24.871H31.7455L29.1185 31.5471C28.3425 33.5192 25.5385 33.481 24.8164 31.4886L19.967 18.1082Z" fill="black"/>
    </Svg>
  );
};
