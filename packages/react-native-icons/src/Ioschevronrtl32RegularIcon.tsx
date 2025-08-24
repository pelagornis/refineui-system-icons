import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Ioschevronrtl32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M18.6322 20.7812C18.2669 20.4633 18.2339 19.9157 18.5587 19.558L21.6899 16.1094C21.9191 15.8569 21.9191 15.4764 21.6899 15.2239L18.5587 11.7753C18.2339 11.4177 18.2669 10.87 18.6322 10.5522C18.9976 10.2343 19.557 10.2665 19.8817 10.6242L23.6561 14.7812C24.1146 15.2862 24.1146 16.0471 23.6561 16.5522L19.8817 20.7092C19.557 21.0668 18.9976 21.0991 18.6322 20.7812Z" fill="black"/>
    </Svg>
  );
};
