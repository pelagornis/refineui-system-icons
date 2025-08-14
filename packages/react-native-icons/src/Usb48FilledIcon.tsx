import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Usb48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 15.5414V10.0382C18 8.91254 18.8954 8 20 8H28C29.1046 8 30 8.91254 30 10.0382V15.5414C32.2091 15.5414 34 17.3665 34 19.6178V35.9236C34 38.1749 32.2091 40 30 40H18C15.7909 40 14 38.1749 14 35.9236V19.6178C14 17.3665 15.7909 15.5414 18 15.5414ZM20.6 15.5414V10.6497H27.4V15.5414L20.6 15.5414Z" fill="black"/>
    </Svg>
  );
};
