import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Textalignleft24RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M5 7.65031C5 7.29115 5.29102 7 5.65002 7H15.1346C15.4936 7 15.7846 7.29115 15.7846 7.65031C15.7846 8.00946 15.4936 8.30062 15.1346 8.30062H5.65002C5.29102 8.30062 5 8.00946 5 7.65031Z" fill="black"/>
<path d="M5 12C5 11.6408 5.29102 11.3497 5.65002 11.3497H19.35C19.709 11.3497 20 11.6408 20 12C20 12.3592 19.709 12.6503 19.35 12.6503H5.65002C5.29102 12.6503 5 12.3592 5 12Z" fill="black"/>
<path d="M5.65002 15.6994C5.29102 15.6994 5 15.9905 5 16.3497C5 16.7088 5.29102 17 5.65002 17H10.9192C11.2782 17 11.5693 16.7088 11.5693 16.3497C11.5693 15.9905 11.2782 15.6994 10.9192 15.6994H5.65002Z" fill="black"/>
    </Svg>
  );
};
