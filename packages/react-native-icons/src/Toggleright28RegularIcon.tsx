import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Toggleright28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3333 13.8333C14.3333 11.9003 15.9003 10.3333 17.8333 10.3333C19.7663 10.3333 21.3333 11.9003 21.3333 13.8333C21.3333 15.7663 19.7663 17.3333 17.8333 17.3333C15.9003 17.3333 14.3333 15.7663 14.3333 13.8333ZM15.85 13.8333C15.85 12.738 16.738 11.85 17.8333 11.85C18.9287 11.85 19.8167 12.738 19.8167 13.8333C19.8167 14.9287 18.9287 15.8167 17.8333 15.8167C16.738 15.8167 15.85 14.9287 15.85 13.8333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6667 13.8333C23.6667 17.055 21.055 19.6667 17.8333 19.6667L10.8333 19.6667C7.61167 19.6667 5 17.055 5 13.8333C5 10.6117 7.61167 8 10.8333 8H17.8333C21.055 8 23.6667 10.6117 23.6667 13.8333ZM22.15 13.8333C22.15 16.2174 20.2174 18.15 17.8333 18.15L10.8333 18.15C8.4493 18.15 6.51667 16.2174 6.51667 13.8333C6.51667 11.4493 8.44931 9.51667 10.8333 9.51667L17.8333 9.51667C20.2174 9.51667 22.15 11.4493 22.15 13.8333Z" fill="black"/>
    </Svg>
  );
};
