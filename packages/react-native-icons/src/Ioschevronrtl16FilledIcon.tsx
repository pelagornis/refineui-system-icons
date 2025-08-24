import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronrtl16FilledIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.43247 10.8666C9.13807 10.6456 9.07852 10.2279 9.29945 9.93348L10.3502 8.53335C10.4391 8.41484 10.4391 8.25183 10.3502 8.13332L9.29945 6.73319C9.07852 6.4388 9.13807 6.02104 9.43247 5.80011C9.72686 5.57918 10.1446 5.63874 10.3655 5.93313L11.8666 7.9333C12.0445 8.17033 12.0445 8.49634 11.8666 8.73336L10.3655 10.7335C10.1446 11.0279 9.72686 11.0875 9.43247 10.8666Z" fill="black"/>
    </Svg>
  );
};
