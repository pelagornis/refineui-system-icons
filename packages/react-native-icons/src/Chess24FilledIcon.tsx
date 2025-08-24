import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chess24FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M16.0638 5.22979L15.6699 8.1805H8.33014L7.93622 5.22979C7.82977 4.43273 8.74237 3.90685 9.37866 4.39858L10.438 5.21728L11.3541 4.27322C11.7076 3.90893 12.2924 3.90893 12.6459 4.27322L13.562 5.21728L14.6213 4.39855C15.2576 3.90685 16.1702 4.43273 16.0638 5.22979Z" fill="black"/>
<path d="M7.9527 14.8463C8.25714 13.4881 8.34326 12.4519 8.34961 11.5699H15.6504C15.6567 12.4519 15.7429 13.4881 16.0473 14.8463C17.13 14.8714 18 15.757 18 16.8458V18.9981C18 19.5504 17.5523 19.9981 17 19.9981H7C6.44769 19.9981 6 19.5504 6 18.9981V16.8458C6 15.757 6.87 14.8714 7.9527 14.8463Z" fill="black"/>
<path d="M8 8.85C7.44769 8.85 7 9.29772 7 9.85C7 10.4023 7.44769 10.85 8 10.85H16C16.5523 10.85 17 10.4023 17 9.85C17 9.29772 16.5523 8.85 16 8.85H8Z" fill="black"/>
    </Svg>
  );
};
