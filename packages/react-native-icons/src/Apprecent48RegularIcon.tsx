import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Apprecent48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 12C33 9.79086 31.2091 8 29 8H19C16.7909 8 15 9.79086 15 12H12C9.79086 12 8 13.7909 8 16V32C8 34.2091 9.79086 36 12 36H15C15 38.2091 16.7909 40 19 40H29C31.2091 40 33 38.2091 33 36H36C38.2091 36 40 34.2091 40 32V16C40 13.7909 38.2091 12 36 12H33ZM29 10.6H19C18.2268 10.6 17.6 11.2268 17.6 12V14.6V33.4V36C17.6 36.7732 18.2268 37.4 19 37.4H29C29.7732 37.4 30.4 36.7732 30.4 36V33.4V14.6V12C30.4 11.2268 29.7732 10.6 29 10.6ZM33 33.4V14.6H36C36.7732 14.6 37.4 15.2268 37.4 16V32C37.4 32.7732 36.7732 33.4 36 33.4H33ZM12 33.4H15V14.6H12C11.2268 14.6 10.6 15.2268 10.6 16V32C10.6 32.7732 11.2268 33.4 12 33.4Z" fill="black"/>
    </Svg>
  );
};
