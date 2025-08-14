import React from 'react';
import Svg, { Path, Circle, Rect, Line, Polyline, Polygon } from 'react-native-svg';
import { IconProps } from './types';

export const Video32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.66667 9C6.19391 9 5 10.1939 5 11.6667V19.6667C5 21.1394 6.19391 22.3333 7.66667 22.3333H17C18.4728 22.3333 19.6667 21.1394 19.6667 19.6667V11.6667C19.6667 10.1939 18.4728 9 17 9H7.66667Z" fill="black"/>
<path d="M26.3333 19.4866V11.8467C26.3333 10.7163 25.0149 10.0987 24.1464 10.8224L20.6857 13.7064C20.3817 13.9597 20.2059 14.335 20.2059 14.7307V16.6026C20.2059 16.9984 20.3817 17.3736 20.6857 17.6269L24.1464 20.5109C25.0149 21.2346 26.3333 20.6171 26.3333 19.4866Z" fill="black"/>
    </Svg>
  );
};
