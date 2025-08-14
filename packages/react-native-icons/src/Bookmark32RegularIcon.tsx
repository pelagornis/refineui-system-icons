import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Bookmark32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 7.76456C24 6.23774 22.8061 5 21.3333 5H10.6667C9.19391 5 8 6.23774 8 7.76456V25.6409C8 26.2268 8.65924 26.547 9.09346 26.1718L15.5732 20.5738C15.8204 20.3602 16.1796 20.3602 16.4268 20.5738L22.9065 26.1718C23.3408 26.547 24 26.2268 24 25.6409V7.76456ZM21.3333 6.79696H10.6667C10.1512 6.79696 9.73333 7.23017 9.73333 7.76456V22.5421C9.73333 22.8351 10.063 22.9951 10.2801 22.8076L14.4636 19.1933C15.3536 18.4244 16.6464 18.4244 17.5364 19.1933L21.7199 22.8076C21.937 22.9951 22.2667 22.8351 22.2667 22.5421V7.76456C22.2667 7.23017 21.8488 6.79696 21.3333 6.79696Z" fill="black"/>
    </Svg>
  );
};
