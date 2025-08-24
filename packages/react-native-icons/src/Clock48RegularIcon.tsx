import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Clock48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M25.3 15C25.3 14.282 24.718 13.7 24 13.7C23.282 13.7 22.7 14.282 22.7 15V24.1243C22.7 24.3895 22.8054 24.6438 22.9929 24.8314L29.0808 30.9192C29.5884 31.4269 30.4116 31.4269 30.9192 30.9192C31.4269 30.4116 31.4269 29.5884 30.9192 29.0808L25.5929 23.7544C25.4054 23.5669 25.3 23.3125 25.3 23.0473V15Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24ZM37.4 24C37.4 31.4006 31.4006 37.4 24 37.4C16.5994 37.4 10.6 31.4006 10.6 24C10.6 16.5994 16.5994 10.6 24 10.6C31.4006 10.6 37.4 16.5994 37.4 24Z" fill="black"/>
    </Svg>
  );
};
