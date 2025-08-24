import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Desktop32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.66667C5 7.19391 6.19391 6 7.66667 6H23.6667C25.1394 6 26.3333 7.19391 26.3333 8.66667V18C26.3333 19.4728 25.1394 20.6667 23.6667 20.6667H19.3905V23.6H22.3333C22.812 23.6 23.2 23.988 23.2 24.4667C23.2 24.9453 22.812 25.3333 22.3333 25.3333H9C8.52135 25.3333 8.13333 24.9453 8.13333 24.4667C8.13333 23.988 8.52135 23.6 9 23.6H11.9429V20.6667H7.66667C6.19391 20.6667 5 19.4728 5 18V8.66667ZM7.66667 7.73333H23.6667C24.1821 7.73333 24.6 8.1512 24.6 8.66667V18C24.6 18.5155 24.1821 18.9333 23.6667 18.9333H7.66667C7.1512 18.9333 6.73333 18.5155 6.73333 18V8.66667C6.73333 8.1512 7.1512 7.73333 7.66667 7.73333ZM13.6762 20.6667V23.6H17.6571V20.6667H13.6762Z" fill="black"/>
    </Svg>
  );
};
