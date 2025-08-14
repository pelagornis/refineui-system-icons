import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Slidelayout20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.66667C3 5.74619 3.74619 5 4.66667 5H14.6667C15.5871 5 16.3333 5.74619 16.3333 6.66667V13.3333C16.3333 14.2538 15.5871 15 14.6667 15H4.66667C3.74619 15 3 14.2538 3 13.3333V6.66667ZM6.33333 6.95833C5.57394 6.95833 4.95833 7.57394 4.95833 8.33333V11.6667C4.95833 12.4261 5.57394 13.0417 6.33333 13.0417H13C13.7594 13.0417 14.375 12.4261 14.375 11.6667V8.33333C14.375 7.57394 13.7594 6.95833 13 6.95833H6.33333Z" fill="black"/>
<path d="M13.2917 10.5417H8.54167V11.9583H13C13.1611 11.9583 13.2917 11.8278 13.2917 11.6667V10.5417Z" fill="black"/>
<path d="M7.45833 11.9583V10.5417H6.04167V11.6667C6.04167 11.8278 6.17225 11.9583 6.33333 11.9583H7.45833Z" fill="black"/>
<path d="M6.33333 8.04167C6.17225 8.04167 6.04167 8.17225 6.04167 8.33333V9.45833H13.2917V8.33333C13.2917 8.17225 13.1611 8.04167 13 8.04167H6.33333Z" fill="black"/>
    </Svg>
  );
};
