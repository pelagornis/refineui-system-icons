import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Usbcable48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M20 8.65039H28C28.7456 8.65039 29.3496 9.25442 29.3496 10V16.6504H30C31.8502 16.6504 33.3496 18.1498 33.3496 20V30C33.3496 31.8502 31.8502 33.3496 30 33.3496H27.3496V39C27.3496 39.1933 27.1933 39.3496 27 39.3496C26.8067 39.3496 26.6504 39.1933 26.6504 39V33.3496H21.3496V39C21.3496 39.1933 21.1933 39.3496 21 39.3496C20.8067 39.3496 20.6504 39.1933 20.6504 39V33.3496H18C16.1498 33.3496 14.6504 31.8502 14.6504 30V20C14.6504 18.1498 16.1498 16.6504 18 16.6504H18.6504V10C18.6504 9.25442 19.2544 8.65039 20 8.65039ZM19.9502 16.6299H28.0498V9.9502H19.9502V16.6299Z" fill="black" stroke="black" stroke-width="1.3"/>
    </Svg>
  );
};
