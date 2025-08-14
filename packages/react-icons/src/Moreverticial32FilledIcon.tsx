import React from 'react';
import { IconProps } from './types';

export const Moreverticial32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M19 7.66667C19 9.13943 17.8061 10.3333 16.3333 10.3333C14.8606 10.3333 13.6667 9.13943 13.6667 7.66667C13.6667 6.19391 14.8606 5 16.3333 5C17.8061 5 19 6.19391 19 7.66667Z" fill="black"/>
<path d="M19 15.6667C19 17.1394 17.8061 18.3333 16.3333 18.3333C14.8606 18.3333 13.6667 17.1394 13.6667 15.6667C13.6667 14.1939 14.8606 13 16.3333 13C17.8061 13 19 14.1939 19 15.6667Z" fill="black"/>
<path d="M19 23.6667C19 25.1394 17.8061 26.3333 16.3333 26.3333C14.8606 26.3333 13.6667 25.1394 13.6667 23.6667C13.6667 22.1939 14.8606 21 16.3333 21C17.8061 21 19 22.1939 19 23.6667Z" fill="black"/>
    </svg>
  );
};
