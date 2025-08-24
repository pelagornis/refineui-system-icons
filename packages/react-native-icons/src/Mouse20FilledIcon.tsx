import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mouse20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.45833 8V3.41667C9.45833 3.18655 9.27179 3 9.04167 3H8.33333C6.49238 3 5 4.49238 5 6.33333V11.3333C5 14.0948 7.23858 16.3333 10 16.3333C12.7614 16.3333 15 14.0948 15 11.3333V6.33333C15 4.49238 13.5076 3 11.6667 3H10.9583C10.7282 3 10.5417 3.18655 10.5417 3.41667V8C10.5417 8.29915 10.2992 8.54167 10 8.54167C9.70085 8.54167 9.45833 8.29915 9.45833 8Z" fill="black"/>
    </Svg>
  );
};
