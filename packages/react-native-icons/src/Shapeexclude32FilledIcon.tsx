import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Shapeexclude32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 19.6667H7.66667C6.19391 19.6667 5 18.4728 5 17V7.66667C5 6.19391 6.19391 5 7.66667 5H17C18.4728 5 19.6667 6.19391 19.6667 7.66667V11.6667H23.6667C25.1394 11.6667 26.3333 12.8606 26.3333 14.3333V23.6667C26.3333 25.1394 25.1394 26.3333 23.6667 26.3333H14.3333C12.8606 26.3333 11.6667 25.1394 11.6667 23.6667V19.6667ZM17.6667 13.4C17.8139 13.4 17.9333 13.5194 17.9333 13.6667V17C17.9333 17.5155 17.5155 17.9333 17 17.9333H13.6667C13.5194 17.9333 13.4 17.8139 13.4 17.6667V14.3333C13.4 13.8179 13.8179 13.4 14.3333 13.4H17.6667Z" fill="black"/>
    </Svg>
  );
};
