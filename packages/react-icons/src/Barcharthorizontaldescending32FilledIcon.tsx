import React from 'react';
import { IconProps } from './types';

export const Barcharthorizontaldescending32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 26.3333C6.19391 26.3333 5 25.1394 5 23.6667C5 22.1939 6.19391 21 7.66667 21H14.3333C15.8061 21 17 22.1939 17 23.6667C17 25.1394 15.8061 26.3333 14.3333 26.3333H7.66667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 18.3333C6.19391 18.3333 5 17.1394 5 15.6667C5 14.1939 6.19391 13 7.66667 13L18.3333 13C19.8061 13 21 14.1939 21 15.6667C21 17.1394 19.8061 18.3333 18.3333 18.3333L7.66667 18.3333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.66667C5 9.13943 6.19391 10.3333 7.66667 10.3333L23.6667 10.3333C25.1394 10.3333 26.3333 9.13943 26.3333 7.66667C26.3333 6.19391 25.1394 5 23.6667 5L7.66667 5C6.19391 5 5 6.19391 5 7.66667Z" fill="black"/>
    </svg>
  );
};
