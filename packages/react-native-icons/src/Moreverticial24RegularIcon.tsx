import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Moreverticial24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14 5.75C14 6.71647 13.2165 7.49995 12.25 7.5C11.2835 7.5 10.5 6.7165 10.5 5.75C10.5 4.7835 11.2835 4 12.25 4C13.2165 4.00005 14 4.78353 14 5.75Z" fill="black"/>
<path d="M14 11.75C14 12.7165 13.2165 13.5 12.25 13.5C11.2835 13.5 10.5 12.7165 10.5 11.75C10.5 10.7835 11.2835 10 12.25 10C13.2165 10 14 10.7835 14 11.75Z" fill="black"/>
<path d="M14 17.75C14 18.7165 13.2165 19.5 12.25 19.5C11.2835 19.5 10.5 18.7165 10.5 17.75C10.5 16.7835 11.2835 16 12.25 16C13.2165 16 14 16.7835 14 17.75Z" fill="black"/>
    </Svg>
  );
};
