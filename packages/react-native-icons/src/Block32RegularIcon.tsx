import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Block32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 15.6667C26.3333 21.5577 21.5577 26.3333 15.6667 26.3333C9.77563 26.3333 5 21.5577 5 15.6667C5 9.77563 9.77563 5 15.6667 5C21.5577 5 26.3333 9.77563 26.3333 15.6667ZM21.0814 22.3071C21.2206 22.4462 21.2098 22.6755 21.0529 22.7942C19.5554 23.9277 17.6895 24.6 15.6667 24.6C10.7329 24.6 6.73333 20.6004 6.73333 15.6667C6.73333 13.6438 7.40568 11.778 8.5391 10.2805C8.65787 10.1235 8.88712 10.1128 9.02628 10.2519L21.0814 22.3071ZM22.7942 21.0529C22.6755 21.2098 22.4462 21.2206 22.3071 21.0814L10.2519 9.02628C10.1128 8.88712 10.1235 8.65787 10.2805 8.5391C11.778 7.40568 13.6438 6.73333 15.6667 6.73333C20.6004 6.73333 24.6 10.7329 24.6 15.6667C24.6 17.6895 23.9277 19.5554 22.7942 21.0529Z" fill="black"/>
    </Svg>
  );
};
