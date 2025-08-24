import React from 'react';
import { IconProps } from './types';

export const Portusba32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 11C6.19391 11 5 12.1939 5 13.6667V17.6667C5 19.1394 6.19391 20.3333 7.66667 20.3333H23.6667C25.1394 20.3333 26.3333 19.1394 26.3333 17.6667V13.6667C26.3333 12.1939 25.1394 11 23.6667 11H7.66667ZM24.3333 13H7V15.6667H24.3333V13Z" fill="black"/>
    </svg>
  );
};
