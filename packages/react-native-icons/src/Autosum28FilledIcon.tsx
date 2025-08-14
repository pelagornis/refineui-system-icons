import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Autosum28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5.17396 5.99019C4.79801 5.62055 5.0716 5 5.61052 5H22.4481C23.1211 5 23.6667 5.52229 23.6667 6.16657C23.6667 6.81085 23.1211 7.33314 22.4481 7.33314H10.6633C10.3939 7.33314 10.2571 7.64342 10.445 7.82824L16.6474 13.9264C16.8777 14.1529 16.8777 14.5138 16.6474 14.7402L10.445 20.8384C10.2571 21.0233 10.3939 21.3335 10.6633 21.3335H22.4481C23.1211 21.3335 23.6667 21.8558 23.6667 22.5001C23.6667 23.1444 23.1211 23.6667 22.4481 23.6667H5.61052C5.0716 23.6667 4.79801 23.0461 5.17396 22.6765L13.4527 14.5368C13.5678 14.4236 13.5678 14.2431 13.4527 14.1299L5.17396 5.99019Z" fill="black"/>
    </Svg>
  );
};
