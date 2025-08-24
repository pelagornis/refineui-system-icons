import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Lightbulb48FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12 20C12 23.8476 13.8108 27.2723 16.6267 29.4683C16.9492 29.7198 17.4107 30.8885 17.922 32.3618C17.9921 32.5638 18.1821 32.7 18.3959 32.7H29.6041C29.8179 32.7 30.0079 32.5638 30.078 32.3618C30.5893 30.8885 31.0508 29.7198 31.3733 29.4683C34.1892 27.2723 36 23.8476 36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20Z" fill="black"/>
<path d="M27 40C27.4383 40 28.139 38.1275 28.8727 35.9578C28.982 35.6345 28.7409 35.3 28.3996 35.3H19.6004C19.2591 35.3 19.018 35.6345 19.1273 35.9578C19.861 38.1275 20.5617 40 21 40H27Z" fill="black"/>
    </Svg>
  );
};
