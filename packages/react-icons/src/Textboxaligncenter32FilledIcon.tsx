import React from 'react';
import { IconProps } from './types';

export const Textboxaligncenter32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 5C6.19391 5 5 6.19391 5 7.66667V23.6667C5 25.1394 6.19391 26.3333 7.66667 26.3333H23.6667C25.1394 26.3333 26.3333 25.1394 26.3333 23.6667V7.66667C26.3333 6.19391 25.1394 5 23.6667 5H7.66667ZM10 12.4667C9.52135 12.4667 9.13333 12.8547 9.13333 13.3333C9.13333 13.812 9.52135 14.2 10 14.2H21.3333C21.812 14.2 22.2 13.812 22.2 13.3333C22.2 12.8547 21.812 12.4667 21.3333 12.4667H10ZM11.6667 17.1333C11.188 17.1333 10.8 17.5214 10.8 18C10.8 18.4786 11.188 18.8667 11.6667 18.8667H19.6667C20.1453 18.8667 20.5333 18.4786 20.5333 18C20.5333 17.5214 20.1453 17.1333 19.6667 17.1333H11.6667Z" fill="black"/>
    </svg>
  );
};
