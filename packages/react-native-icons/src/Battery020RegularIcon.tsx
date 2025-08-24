import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Battery020RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 7.66667C3 6.74619 3.74619 6 4.66667 6H13.4335C14.354 6 15.1002 6.74619 15.1002 7.66667V8.44648C15.7812 8.44648 16.3333 8.99858 16.3333 9.67963V10.6537C16.3333 11.3348 15.7812 11.8869 15.1002 11.8869V12.6667C15.1002 13.5871 14.354 14.3333 13.4335 14.3333H4.66667C3.74619 14.3333 3 13.5871 3 12.6667V7.66667ZM4.83526 6.99388C4.37502 6.99388 4.00193 7.36698 4.00193 7.82722V12.5061C4.00193 12.9664 4.37502 13.3395 4.83526 13.3395H13.2649C13.7252 13.3395 14.0983 12.9664 14.0983 12.5061V7.82722C14.0983 7.36698 13.7252 6.99388 13.2649 6.99388H4.83526Z" fill="black"/>
    </Svg>
  );
};
