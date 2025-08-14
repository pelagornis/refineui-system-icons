import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Lockopen32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 5C13.6186 5 11.6366 6.64374 11.2158 8.81498C11.1247 9.28488 11.5214 9.67668 12 9.67668C12.4786 9.67668 12.8539 9.2801 12.9945 8.82257C13.3777 7.57564 14.5782 6.66567 16 6.66567C17.7305 6.66567 19.1333 8.01374 19.1333 9.67668V10.958H10.6667C9.19391 10.958 8 12.1053 8 13.5205V23.7708C8 25.186 9.19391 26.3333 10.6667 26.3333H21.3333C22.8061 26.3333 24 25.186 24 23.7708V13.5205C24 12.1053 22.8061 10.958 21.3333 10.958H20.8667V9.67668C20.8667 7.09382 18.6878 5 16 5ZM16 19.9269C16.7364 19.9269 17.3333 19.3533 17.3333 18.6456C17.3333 17.938 16.7364 17.3644 16 17.3644C15.2636 17.3644 14.6667 17.938 14.6667 18.6456C14.6667 19.3533 15.2636 19.9269 16 19.9269Z" fill="black"/>
    </Svg>
  );
};
