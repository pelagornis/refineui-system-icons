import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Autosum24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M4.15093 4.85041C3.82612 4.53425 4.0602 4 4.52355 4H19.3208C19.6959 4 20 4.29098 20 4.64992C20 5.00886 19.6959 5.29984 19.3207 5.29984H7.14078C6.90911 5.29984 6.79206 5.56697 6.95447 5.72505L13.0411 11.6495C13.241 11.8441 13.241 12.1559 13.0411 12.3505L6.95447 18.275C6.79206 18.433 6.90911 18.7002 7.14078 18.7002H19.3207C19.6959 18.7002 20 18.9911 20 19.3501C20 19.709 19.6959 20 19.3207 20H4.52354C4.0602 20 3.82612 19.4657 4.15093 19.1496L11.3162 12.1752C11.4161 12.078 11.4161 11.922 11.3162 11.8248L4.15093 4.85041Z" fill="black"/>
    </Svg>
  );
};
