import React from 'react';
import { IconProps } from './types';

export const Apprecent32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M19 5C20.4728 5 21.6667 6.19391 21.6667 7.66667V23.6667C21.6667 25.1394 20.4728 26.3333 19 26.3333H12.3333C10.8606 26.3333 9.66667 25.1394 9.66667 23.6667V7.66667C9.66667 6.19391 10.8606 5 12.3333 5H19Z" fill="black"/>
<path d="M5 10.3333C5 8.86057 6.19391 7.66667 7.66667 7.66667H8.66667V23.6667H7.66667C6.19391 23.6667 5 22.4728 5 21V10.3333Z" fill="black"/>
<path d="M23.6667 23.6667C25.1394 23.6667 26.3333 22.4728 26.3333 21V10.3333C26.3333 8.86057 25.1394 7.66667 23.6667 7.66667H22.6667V23.6667H23.6667Z" fill="black"/>
    </svg>
  );
};
