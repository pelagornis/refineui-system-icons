import React from 'react';
import { IconProps } from './types';

export const Videoclip32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 7C6.19391 7 5 8.19391 5 9.66667V23C5 24.4728 6.19391 25.6667 7.66667 25.6667H23.6667C25.1394 25.6667 26.3333 24.4728 26.3333 23V9.66667C26.3333 8.19391 25.1394 7 23.6667 7H7.66667ZM19.3671 15.8488C19.7665 16.0484 19.7665 16.6182 19.3671 16.8179L12.4509 20.2754C12.0906 20.4555 11.6667 20.1936 11.6667 19.7909V12.8758C11.6667 12.4731 12.0906 12.2111 12.4509 12.3912L19.3671 15.8488Z" fill="black"/>
    </svg>
  );
};
