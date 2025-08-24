import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Tag16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6911 3.00001C3.30941 3.00001 3 3.30943 3 3.69111L3.00001 7.40785C3.00001 7.59114 3.07282 7.76692 3.20243 7.89653L8.77014 13.4642C9.04003 13.7341 9.47761 13.7341 9.7475 13.4642L13.4642 9.7475C13.7341 9.47761 13.7341 9.04003 13.4642 8.77014L7.89653 3.20242C7.76693 3.07281 7.59115 3 7.40785 3L3.6911 3.00001ZM6.10993 7.14658C6.68246 7.14658 7.14658 6.68246 7.14658 6.10994C7.14658 5.53741 6.68246 5.07329 6.10993 5.07329C5.53741 5.07329 5.07329 5.53741 5.07329 6.10994C5.07329 6.68246 5.53741 7.14658 6.10993 7.14658Z" fill="black"/>
    </Svg>
  );
};
