import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bookmark32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M8 7.76456C8 6.23774 9.19391 5 10.6667 5H21.3333C22.8061 5 24 6.23774 24 7.76456V25.6409C24 26.2268 23.3408 26.547 22.9065 26.1718L16.4268 20.5738C16.1796 20.3602 15.8204 20.3602 15.5732 20.5738L9.09346 26.1718C8.65924 26.547 8 26.2268 8 25.6409V7.76456Z" fill="black"/>
    </Svg>
  );
};
