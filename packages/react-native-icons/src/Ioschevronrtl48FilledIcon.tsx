import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronrtl48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M28.2974 31.5997C27.4142 30.9369 27.2356 29.6836 27.8984 28.8004L31.0506 24.6C31.3174 24.2445 31.3174 23.7555 31.0506 23.4L27.8984 19.1996C27.2356 18.3164 27.4142 17.0631 28.2974 16.4003C29.1806 15.7376 30.4338 15.9162 31.0966 16.7994L35.5998 22.7999C36.1334 23.511 36.1334 24.489 35.5998 25.2001L31.0966 31.2006C30.4338 32.0838 29.1806 32.2624 28.2974 31.5997Z" fill="black"/>
    </Svg>
  );
};
