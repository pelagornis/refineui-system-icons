import React from 'react';
import { IconProps } from './types';

export const Textboxalignmiddleleft32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.66667C5 6.19391 6.19391 5 7.66667 5H23.6667C25.1394 5 26.3333 6.19391 26.3333 7.66667V23.6667C26.3333 25.1394 25.1394 26.3333 23.6667 26.3333H7.66667C6.19391 26.3333 5 25.1394 5 23.6667V7.66667ZM9.13333 13.3333C9.13333 12.8547 9.52135 12.4667 10 12.4667H21.3333C21.812 12.4667 22.2 12.8547 22.2 13.3333C22.2 13.812 21.812 14.2 21.3333 14.2H10C9.52135 14.2 9.13333 13.812 9.13333 13.3333ZM10 17.1333C9.52135 17.1333 9.13333 17.5214 9.13333 18C9.13333 18.4786 9.52135 18.8667 10 18.8667H18C18.4786 18.8667 18.8667 18.4786 18.8667 18C18.8667 17.5214 18.4786 17.1333 18 17.1333H10Z" fill="black"/>
    </svg>
  );
};
