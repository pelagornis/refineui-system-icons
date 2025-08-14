import React from 'react';
import { IconProps } from './types';

export const Textboxalignbottom32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.66667C5 6.19391 6.19391 5 7.66667 5H23.6667C25.1394 5 26.3333 6.19391 26.3333 7.66667V23.6667C26.3333 25.1394 25.1394 26.3333 23.6667 26.3333H7.66667C6.19391 26.3333 5 25.1394 5 23.6667V7.66667ZM8.8 15.6667C8.8 15.188 9.18802 14.8 9.66667 14.8H21.6667C22.1453 14.8 22.5333 15.188 22.5333 15.6667C22.5333 16.1453 22.1453 16.5333 21.6667 16.5333H9.66667C9.18802 16.5333 8.8 16.1453 8.8 15.6667ZM9.66667 19.4667C9.18802 19.4667 8.8 19.8547 8.8 20.3333C8.8 20.812 9.18802 21.2 9.66667 21.2H21.6667C22.1453 21.2 22.5333 20.812 22.5333 20.3333C22.5333 19.8547 22.1453 19.4667 21.6667 19.4667H9.66667Z" fill="black"/>
    </svg>
  );
};
