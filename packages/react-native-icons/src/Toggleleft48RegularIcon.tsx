import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toggleleft48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 24C24 27.3137 21.3137 30 18 30C14.6863 30 12 27.3137 12 24C12 20.6863 14.6863 18 18 18C21.3137 18 24 20.6863 24 24ZM21.4 24C21.4 25.8778 19.8778 27.4 18 27.4C16.1222 27.4 14.6 25.8778 14.6 24C14.6 22.1222 16.1222 20.6 18 20.6C19.8778 20.6 21.4 22.1222 21.4 24Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 24C8 18.4772 12.4772 14 18 14H30C35.5228 14 40 18.4772 40 24C40 29.5228 35.5228 34 30 34H18C12.4772 34 8 29.5228 8 24ZM18 16.6H30C34.0869 16.6 37.4 19.9131 37.4 24C37.4 28.0869 34.0869 31.4 30 31.4H18C13.9131 31.4 10.6 28.0869 10.6 24C10.6 19.9131 13.9131 16.6 18 16.6Z" fill="black"/>
    </Svg>
  );
};
