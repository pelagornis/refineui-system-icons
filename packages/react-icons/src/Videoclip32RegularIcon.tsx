import React from 'react';
import { IconProps } from './types';

export const Videoclip32RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M19.3671 15.8488C19.7665 16.0484 19.7665 16.6182 19.3671 16.8179L12.4508 20.2754C12.0906 20.4555 11.6667 20.1936 11.6667 19.7909V12.8758C11.6667 12.4731 12.0906 12.2111 12.4508 12.3912L19.3671 15.8488Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 9.66667C5 8.19391 6.19393 7 7.66667 7H23.6667C25.1394 7 26.3333 8.19391 26.3333 9.66667V23C26.3333 24.4728 25.1394 25.6667 23.6667 25.6667H7.66667C6.19393 25.6667 5 24.4728 5 23V9.66667ZM7.66667 8.73334H23.6667C24.1821 8.73334 24.6 9.1512 24.6 9.66667V23C24.6 23.5155 24.1821 23.9333 23.6667 23.9333H7.66667C7.1512 23.9333 6.73332 23.5155 6.73332 23V9.66667C6.73332 9.1512 7.1512 8.73334 7.66667 8.73334Z" fill="black"/>
    </svg>
  );
};
