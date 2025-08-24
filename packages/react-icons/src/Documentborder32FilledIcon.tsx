import React from 'react';
import { IconProps } from './types';

export const Documentborder32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.66667C8 6.19391 9.19391 5 10.6667 5H21.3333C22.8061 5 24 6.19391 24 7.66667V23.6667C24 25.1394 22.8061 26.3333 21.3333 26.3333H10.6667C9.19391 26.3333 8 25.1394 8 23.6667V7.66667ZM10.6667 6.73333H21.3333C21.8488 6.73333 22.2667 7.1512 22.2667 7.66667V23.6667C22.2667 24.1821 21.8488 24.6 21.3333 24.6H10.6667C10.1512 24.6 9.73333 24.1821 9.73333 23.6667V7.66667C9.73333 7.1512 10.1512 6.73333 10.6667 6.73333Z" fill="black"/>
<path d="M12 7.66667C11.2636 7.66667 10.6667 8.26362 10.6667 9V22.3333C10.6667 23.0697 11.2636 23.6667 12 23.6667H20C20.7364 23.6667 21.3333 23.0697 21.3333 22.3333V9C21.3333 8.26362 20.7364 7.66667 20 7.66667H12Z" fill="black"/>
    </svg>
  );
};
