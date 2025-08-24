import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Pulse32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M13.0625 13.7381L12.0802 15.8998C11.7558 16.6139 11.0438 17.0724 10.2595 17.0724H6.33322C5.5969 17.0724 5 16.4755 5 15.7392C5 15.0028 5.5969 14.4059 6.33322 14.4059H9.83023L11.2994 11.1726C12.036 9.55168 14.364 9.62884 14.9916 11.295L17.5844 18.1783L18.6188 15.6488C18.9262 14.8971 19.6577 14.4059 20.4699 14.4059H25.0001C25.7364 14.4059 26.3333 15.0028 26.3333 15.7392C26.3333 16.4755 25.7364 17.0724 25.0001 17.0724H20.9175L19.4099 20.7588C18.7219 22.4411 16.328 22.4076 15.6874 20.7067L13.0625 13.7381Z" fill="black"/>
    </Svg>
  );
};
