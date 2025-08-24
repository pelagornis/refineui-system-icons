import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Paintbrush24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8 4C6.89543 4 6 4.89543 6 6V10.75C6 10.8881 6.11193 11 6.25 11H17.75C17.8881 11 18 10.8881 18 10.75V6C18 4.89543 17.1046 4 16 4H15.55C15.4119 4 15.3 4.11193 15.3 4.25V7.35C15.3 7.70899 15.009 8 14.65 8C14.291 8 14 7.70899 14 7.35V4.25C14 4.11193 13.8881 4 13.75 4H13.55C13.4119 4 13.3 4.11193 13.3 4.25V6.35C13.3 6.70899 13.009 7 12.65 7C12.291 7 12 6.70899 12 6.35V4.25C12 4.11193 11.8881 4 11.75 4H8Z" fill="black"/>
<path d="M17.75 12.3C17.8881 12.3 18 12.4119 18 12.55V14C18 15.1046 17.1046 16 16 16H14.25C14.1119 16 14 16.1119 14 16.25V18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18V16.25C10 16.1119 9.88807 16 9.75 16H8C6.89543 16 6 15.1046 6 14V12.55C6 12.4119 6.11193 12.3 6.25 12.3H17.75Z" fill="black"/>
    </Svg>
  );
};
