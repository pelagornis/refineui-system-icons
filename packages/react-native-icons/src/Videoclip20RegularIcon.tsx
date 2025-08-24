import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Videoclip20RegularIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9794 9.53047C12.2291 9.65526 12.2291 10.0114 11.9794 10.1362L7.65678 12.2971C7.43161 12.4097 7.16667 12.246 7.16667 11.9943V7.67237C7.16667 7.42066 7.43161 7.25695 7.65678 7.36952L11.9794 9.53047Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.66667C3 4.74619 3.74621 4 4.66667 4H14.6667C15.5871 4 16.3333 4.74619 16.3333 5.66667V14C16.3333 14.9205 15.5871 15.6667 14.6667 15.6667H4.66667C3.74621 15.6667 3 14.9205 3 14V5.66667ZM4.66667 5.08334H14.6667C14.9888 5.08334 15.25 5.3445 15.25 5.66667V14C15.25 14.3222 14.9888 14.5833 14.6667 14.5833H4.66667C4.3445 14.5833 4.08332 14.3222 4.08332 14V5.66667C4.08332 5.3445 4.3445 5.08334 4.66667 5.08334Z" fill="black"/>
    </Svg>
  );
};
