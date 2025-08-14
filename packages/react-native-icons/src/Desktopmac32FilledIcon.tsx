import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Desktopmac32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 6C6.19391 6 5 7.19391 5 8.66667V18C5 19.4728 6.19391 20.6667 7.66667 20.6667H11.9429V23.6H9C8.52135 23.6 8.13333 23.988 8.13333 24.4667C8.13333 24.9453 8.52135 25.3333 9 25.3333H22.3333C22.812 25.3333 23.2 24.9453 23.2 24.4667C23.2 23.988 22.812 23.6 22.3333 23.6H19.3905V20.6667H23.6667C25.1394 20.6667 26.3333 19.4728 26.3333 18V8.66667C26.3333 7.19391 25.1394 6 23.6667 6H7.66667ZM24.6 16.8667H6.73333V18C6.73333 18.5155 7.1512 18.9333 7.66667 18.9333H23.6667C24.1821 18.9333 24.6 18.5155 24.6 18V16.8667ZM13.6762 23.6V20.6667H17.6571V23.6H13.6762Z" fill="black"/>
    </Svg>
  );
};
