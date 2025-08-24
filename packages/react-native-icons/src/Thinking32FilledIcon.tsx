import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Thinking32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 7.66667C6.33333 6.19391 7.52724 5 9 5H23.6667C25.1394 5 26.3333 6.19391 26.3333 7.66667V15C26.3333 16.4728 25.1394 17.6667 23.6667 17.6667H9C7.52724 17.6667 6.33333 16.4728 6.33333 15V7.66667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3333 23.6667C11.8061 23.6667 13 22.4728 13 21C13 19.5272 11.8061 18.3333 10.3333 18.3333C8.86057 18.3333 7.66667 19.5272 7.66667 21C7.66667 22.4728 8.86057 23.6667 10.3333 23.6667Z" fill="black"/>
<path d="M8 24.8333C8 25.6618 7.32843 26.3333 6.5 26.3333C5.67157 26.3333 5 25.6618 5 24.8333C5 24.0049 5.67157 23.3333 6.5 23.3333C7.32843 23.3333 8 24.0049 8 24.8333Z" fill="black"/>
    </Svg>
  );
};
