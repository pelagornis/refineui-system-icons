import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Thinking48RegularIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 12C10 9.79086 11.7909 8 14 8H36C38.2091 8 40 9.79086 40 12V23C40 25.2091 38.2091 27 36 27H14C11.7909 27 10 25.2091 10 23V12ZM14 10.6H36C36.7732 10.6 37.4 11.2268 37.4 12V23C37.4 23.7732 36.7732 24.4 36 24.4H14C13.2268 24.4 12.6 23.7732 12.6 23V12C12.6 11.2268 13.2268 10.6 14 10.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 36C18.2091 36 20 34.2091 20 32C20 29.7909 18.2091 28 16 28C13.7909 28 12 29.7909 12 32C12 34.2091 13.7909 36 16 36ZM16 33.4C16.7732 33.4 17.4 32.7732 17.4 32C17.4 31.2268 16.7732 30.6 16 30.6C15.2268 30.6 14.6 31.2268 14.6 32C14.6 32.7732 15.2268 33.4 16 33.4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 40C11.4926 40 12.5 38.9926 12.5 37.75C12.5 36.5074 11.4926 35.5 10.25 35.5C9.00736 35.5 8 36.5074 8 37.75C8 38.9926 9.00736 40 10.25 40ZM10.25 37.4C10.0567 37.4 9.9 37.5567 9.9 37.75C9.9 37.9433 10.0567 38.1 10.25 38.1C10.4433 38.1 10.6 37.9433 10.6 37.75C10.6 37.5567 10.4433 37.4 10.25 37.4Z" fill="black"/>
    </Svg>
  );
};
