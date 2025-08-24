import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Chatadd32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M16.5333 11C16.5333 10.5214 16.1453 10.1333 15.6667 10.1333C15.188 10.1333 14.8 10.5214 14.8 11V14.8H11C10.5214 14.8 10.1333 15.188 10.1333 15.6667C10.1333 16.1453 10.5214 16.5333 11 16.5333H14.8V20.3333C14.8 20.812 15.188 21.2 15.6667 21.2C16.1453 21.2 16.5333 20.812 16.5333 20.3333V16.5333H20.3333C20.812 16.5333 21.2 16.1453 21.2 15.6667C21.2 15.188 20.812 14.8 20.3333 14.8H16.5333V11Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.3333C21.5577 26.3333 26.3333 21.5577 26.3333 15.6667C26.3333 9.77563 21.5577 5 15.6667 5C9.77563 5 5 9.77563 5 15.6667V25C5 25.7364 5.59695 26.3333 6.33333 26.3333H15.6667ZM24.6 15.6667C24.6 20.6004 20.6004 24.6 15.6667 24.6H6.73333V15.6667C6.73333 10.7329 10.7329 6.73333 15.6667 6.73333C20.6004 6.73333 24.6 10.7329 24.6 15.6667Z" fill="black"/>
    </Svg>
  );
};
