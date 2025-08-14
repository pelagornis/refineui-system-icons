import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Autosum32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.19882 6.13164C4.76916 5.7092 5.08183 5 5.69774 5H24.9406C25.7098 5 26.3333 5.59691 26.3333 6.33322C26.3333 7.06954 25.7098 7.66645 24.9406 7.66645H11.4724C11.1644 7.66645 11.0081 8.02105 11.2229 8.23227L18.3113 15.2016C18.5745 15.4605 18.5745 15.8729 18.3113 16.1317L11.2229 23.1011C11.0081 23.3123 11.1644 23.6669 11.4724 23.6669H24.9406C25.7098 23.6669 26.3333 24.2638 26.3333 25.0001C26.3333 25.7364 25.7098 26.3333 24.9406 26.3333H5.69774C5.08183 26.3333 4.76916 25.6241 5.19882 25.2017L14.6602 15.8992C14.7918 15.7698 14.7918 15.5636 14.6602 15.4342L5.19882 6.13164Z" fill="black"/>
    </Svg>
  );
};
