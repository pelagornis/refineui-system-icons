import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Numbercircle532FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.3333C21.5577 26.3333 26.3333 21.5577 26.3333 15.6667C26.3333 9.77563 21.5577 5 15.6667 5C9.77563 5 5 9.77563 5 15.6667C5 21.5577 9.77563 26.3333 15.6667 26.3333ZM14.4667 10.8C13.7009 10.8 12.8 11.3453 12.8 12.3333V14.3333C12.8 15.3214 13.7009 15.8667 14.4667 15.8667H16.8V18.8H13.6667C13.188 18.8 12.8 19.188 12.8 19.6667C12.8 20.1453 13.188 20.5333 13.6667 20.5333H16.8667C17.6325 20.5333 18.5333 19.9881 18.5333 19V15.6667C18.5333 14.6786 17.6325 14.1333 16.8667 14.1333H14.5333V12.5333H17.6667C18.1453 12.5333 18.5333 12.1453 18.5333 11.6667C18.5333 11.188 18.1453 10.8 17.6667 10.8H14.4667Z" fill="black"/>
    </Svg>
  );
};
