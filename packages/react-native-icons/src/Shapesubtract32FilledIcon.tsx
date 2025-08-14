import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapesubtract32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 19.6667H11.6667V23.6667C11.6667 25.1394 12.8606 26.3333 14.3333 26.3333H23.6667C25.1394 26.3333 26.3333 25.1394 26.3333 23.6667V14.3333C26.3333 12.8606 25.1394 11.6667 23.6667 11.6667H19.6667V7.66667C19.6667 6.19391 18.4728 5 17 5H7.66667C6.19391 5 5 6.19391 5 7.66667V17C5 18.4728 6.19391 19.6667 7.66667 19.6667ZM23.6667 13.4H19.6667V17C19.6667 18.4728 18.4728 19.6667 17 19.6667H13.4V23.6667C13.4 24.1821 13.8179 24.6 14.3333 24.6H23.6667C24.1821 24.6 24.6 24.1821 24.6 23.6667V14.3333C24.6 13.8179 24.1821 13.4 23.6667 13.4Z" fill="black"/>
    </Svg>
  );
};
