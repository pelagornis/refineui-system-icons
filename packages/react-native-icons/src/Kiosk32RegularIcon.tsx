import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Kiosk32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 7.66667C7 6.19391 8.19391 5 9.66667 5H23C24.4728 5 25.6667 6.19391 25.6667 7.66667V14.6129C25.6667 16.0856 24.4728 17.2795 23 17.2795H19.2V24.5992H21.6667C22.1453 24.5992 22.5333 24.9872 22.5333 25.4659C22.5333 25.9445 22.1453 26.3325 21.6667 26.3325H11C10.5214 26.3325 10.1333 25.9445 10.1333 25.4659C10.1333 24.9872 10.5214 24.5992 11 24.5992H13.4667V17.2795H9.66667C8.19391 17.2795 7 16.0856 7 14.6129V7.66667ZM9.66667 6.73333H23C23.5155 6.73333 23.9333 7.1512 23.9333 7.66667V14.6129C23.9333 15.1283 23.5155 15.5462 23 15.5462H9.66667C9.1512 15.5462 8.73333 15.1283 8.73333 14.6129V7.66667C8.73333 7.1512 9.1512 6.73333 9.66667 6.73333ZM15.2 17.2795V24.5992H17.4667V17.2795H15.2Z" fill="black"/>
    </Svg>
  );
};
