import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Luggage48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 8C16.282 8 15.7 8.58203 15.7 9.3C15.7 10.018 16.282 10.6 17 10.6H17.7V14.2517H16C13.7909 14.2517 12 16.0426 12 18.2517V34.0198C12 36.229 13.7909 38.0198 16 38.0198H17.4V38.702C17.4 39.42 17.9821 40.002 18.7 40.002C19.418 40.002 20 39.42 20 38.702V38.0198H28V38.702C28 39.42 28.582 40.002 29.3 40.002C30.018 40.002 30.6 39.42 30.6 38.702V38.0198H32C34.2091 38.0198 36 36.229 36 34.0198V18.2517C36 16.0426 34.2091 14.2517 32 14.2517H30.3V10.6H31C31.718 10.6 32.3 10.018 32.3 9.3C32.3 8.58203 31.718 8 31 8H17ZM27.7 14.2517V10.6H20.3V14.2517H27.7Z" fill="black"/>
    </Svg>
  );
};
