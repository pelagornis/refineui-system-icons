import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Tab32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 5C6.19391 5 5 6.19391 5 7.66667V23.6667C5 25.1394 6.19391 26.3333 7.66667 26.3333H23.6667C25.1394 26.3333 26.3333 25.1394 26.3333 23.6667V7.66667C26.3333 6.19391 25.1394 5 23.6667 5H7.66667ZM23.6667 6.73333H7.66667C7.1512 6.73333 6.73333 7.1512 6.73333 7.66667V23.6667C6.73333 24.1821 7.1512 24.6 7.66667 24.6H23.6667C24.1821 24.6 24.6 24.1821 24.6 23.6667V7.66667C24.6 7.1512 24.1821 6.73333 23.6667 6.73333Z" fill="black"/>
    </Svg>
  );
};
