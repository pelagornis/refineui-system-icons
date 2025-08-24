import React from 'react';
import { IconProps } from './types';

export const Chat32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.3333C21.5577 26.3333 26.3333 21.5577 26.3333 15.6667C26.3333 9.77563 21.5577 5 15.6667 5C9.77563 5 5 9.77563 5 15.6667V25C5 25.7364 5.59695 26.3333 6.33333 26.3333H15.6667ZM9.46663 14.3333C9.46663 13.8547 9.85466 13.4667 10.3333 13.4667H21C21.4787 13.4667 21.8667 13.8547 21.8667 14.3333C21.8667 14.812 21.4787 15.2 21 15.2H10.3333C9.85466 15.2 9.46663 14.812 9.46663 14.3333ZM9.46663 18.3333C9.46663 17.8547 9.85466 17.4667 10.3333 17.4667H15.6667C16.1453 17.4667 16.5334 17.8547 16.5334 18.3333C16.5334 18.812 16.1453 19.2 15.6667 19.2H10.3333C9.85466 19.2 9.46663 18.812 9.46663 18.3333Z" fill="black"/>
    </svg>
  );
};
