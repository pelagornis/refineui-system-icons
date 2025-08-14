import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Important32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9991 8.82699C19.9991 10.9406 18.2085 20.308 15.9996 20.308C13.7907 20.308 12 10.9406 12 8.82699C12 6.7134 13.7907 5 15.9996 5C18.2085 5 19.9991 6.7134 19.9991 8.82699Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9996 20.6114C14.4187 20.6114 13.1332 21.8901 13.1332 23.4724C13.1332 25.0546 14.4187 26.3333 15.9996 26.3333C17.5804 26.3333 18.8659 25.0546 18.8659 23.4724C18.8659 21.8901 17.5804 20.6114 15.9996 20.6114Z" fill="black"/>
    </Svg>
  );
};
