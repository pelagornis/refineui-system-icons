import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Target24RegularIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.35001C9.43182 7.35001 7.34998 9.43188 7.34998 12C7.34998 14.5681 9.43182 16.65 12 16.65C14.5681 16.65 16.65 14.5681 16.65 12C16.65 9.43188 14.5681 7.35001 12 7.35001ZM8.64996 12C8.64996 10.1499 10.1498 8.65001 12 8.65001C13.8502 8.65001 15.35 10.1499 15.35 12C15.35 13.8502 13.8502 15.35 12 15.35C10.1498 15.35 8.64996 13.8502 8.64996 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58173 16.4183 4 12 4C7.58173 4 4 7.58173 4 12C4 16.4183 7.58173 20 12 20ZM12 18.7C15.7003 18.7 18.7 15.7003 18.7 12C18.7 8.2997 15.7003 5.3 12 5.3C8.29968 5.3 5.29999 8.2997 5.29999 12C5.29999 15.7003 8.29968 18.7 12 18.7Z" fill="black"/>
    </Svg>
  );
};
