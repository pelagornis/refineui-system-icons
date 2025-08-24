import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Documentborder32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6667 9C10.6667 8.26362 11.2636 7.66667 12 7.66667H20C20.7364 7.66667 21.3333 8.26362 21.3333 9V22.3333C21.3333 23.0697 20.7364 23.6667 20 23.6667H12C11.2636 23.6667 10.6667 23.0697 10.6667 22.3333V9ZM13.0667 21.9333C12.6985 21.9333 12.4 21.6349 12.4 21.2667V10.0667C12.4 9.69848 12.6985 9.4 13.0667 9.4H18.9333C19.3015 9.4 19.6 9.69848 19.6 10.0667V21.2667C19.6 21.6349 19.3015 21.9333 18.9333 21.9333H13.0667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.66667C8 6.19391 9.19391 5 10.6667 5H21.3333C22.8061 5 24 6.19391 24 7.66667V23.6667C24 25.1394 22.8061 26.3333 21.3333 26.3333H10.6667C9.19391 26.3333 8 25.1394 8 23.6667V7.66667ZM10.6667 6.73333H21.3333C21.8488 6.73333 22.2667 7.1512 22.2667 7.66667V23.6667C22.2667 24.1821 21.8488 24.6 21.3333 24.6H10.6667C10.1512 24.6 9.73333 24.1821 9.73333 23.6667V7.66667C9.73333 7.1512 10.1512 6.73333 10.6667 6.73333Z" fill="black"/>
    </Svg>
  );
};
