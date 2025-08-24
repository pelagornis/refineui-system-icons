import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Mouse28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.66667C7 7.08934 9.08934 5 11.6667 5H16.3333C18.9107 5 21 7.08934 21 9.66667V16.6667C21 20.5327 17.866 23.6667 14 23.6667C10.134 23.6667 7 20.5327 7 16.6667V9.66667ZM14.7583 6.80833C14.7583 6.64725 14.8889 6.51667 15.05 6.51667H16.3333C18.073 6.51667 19.4833 7.92697 19.4833 9.66667V16.6667C19.4833 19.695 17.0284 22.15 14 22.15C10.9716 22.15 8.51667 19.695 8.51667 16.6667V9.66667C8.51667 7.92697 9.92697 6.51667 11.6667 6.51667H12.95C13.1111 6.51667 13.2417 6.64725 13.2417 6.80833V12C13.2417 12.4188 13.5812 12.7583 14 12.7583C14.4188 12.7583 14.7583 12.4188 14.7583 12V6.80833Z" fill="black"/>
    </Svg>
  );
};
