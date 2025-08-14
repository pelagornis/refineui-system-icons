import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Comma48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 18.0251C14 12.4884 18.4713 8 23.987 8C29.4871 8 33.9487 12.463 33.974 17.978C34.1442 21.881 33.5184 27.2878 30.938 31.8046C28.5124 36.0504 24.397 39.4148 17.9929 39.9926C16.8942 40.0917 15.9974 39.1827 15.9974 38.0754C15.9974 36.9681 16.896 36.0856 17.9923 35.9626C22.8017 35.423 25.6971 32.9176 27.4726 29.8097C28.015 28.8602 28.4555 27.8472 28.8076 26.8072C27.3784 27.5994 25.7352 28.0503 23.987 28.0503C18.4713 28.0503 14 23.5619 14 18.0251Z" fill="black"/>
    </Svg>
  );
};
