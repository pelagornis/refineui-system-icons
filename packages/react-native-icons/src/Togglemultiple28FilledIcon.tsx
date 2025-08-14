import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Togglemultiple28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <Svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 5C6.95875 5 5 6.95875 5 9.375C5 11.7912 6.95875 13.75 9.375 13.75H19.2917C21.7079 13.75 23.6667 11.7912 23.6667 9.375C23.6667 6.95875 21.7079 5 19.2917 5H9.375ZM19 11.7083C20.2887 11.7083 21.3333 10.6637 21.3333 9.375C21.3333 8.08634 20.2887 7.04167 19 7.04167C17.7113 7.04167 16.6667 8.08634 16.6667 9.375C16.6667 10.6637 17.7113 11.7083 19 11.7083Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 14.9167C6.95875 14.9167 5 16.8754 5 19.2917C5 21.7079 6.95875 23.6667 9.375 23.6667H19.2917C21.7079 23.6667 23.6667 21.7079 23.6667 19.2917C23.6667 16.8754 21.7079 14.9167 19.2917 14.9167H9.375ZM12 19.2917C12 20.5803 10.9553 21.625 9.66667 21.625C8.378 21.625 7.33333 20.5803 7.33333 19.2917C7.33333 18.003 8.378 16.9583 9.66667 16.9583C10.9553 16.9583 12 18.003 12 19.2917Z" fill="black"/>
    </Svg>
  );
};
