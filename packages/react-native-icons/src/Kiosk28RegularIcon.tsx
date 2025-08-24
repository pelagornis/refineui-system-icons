import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Kiosk28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.33333C6 6.04467 7.04467 5 8.33333 5H20C21.2887 5 22.3333 6.04467 22.3333 7.33333V13.4113C22.3333 14.6999 21.2887 15.7446 20 15.7446H16.675V22.1493H18.8333C19.2521 22.1493 19.5917 22.4888 19.5917 22.9076C19.5917 23.3265 19.2521 23.666 18.8333 23.666H9.5C9.08118 23.666 8.74167 23.3265 8.74167 22.9076C8.74167 22.4888 9.08118 22.1493 9.5 22.1493H11.6583V15.7446H8.33333C7.04467 15.7446 6 14.6999 6 13.4113V7.33333ZM8.33333 6.51667H20C20.451 6.51667 20.8167 6.8823 20.8167 7.33333V13.4113C20.8167 13.8623 20.451 14.2279 20 14.2279H8.33333C7.8823 14.2279 7.51667 13.8623 7.51667 13.4113V7.33333C7.51667 6.8823 7.8823 6.51667 8.33333 6.51667ZM13.175 15.7446V22.1493H15.1583V15.7446H13.175Z" fill="black"/>
    </Svg>
  );
};
