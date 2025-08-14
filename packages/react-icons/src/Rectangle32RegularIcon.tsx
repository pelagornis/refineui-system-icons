import React from 'react';
import { IconProps } from './types';

export const Rectangle32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 8C6.19391 8 5 9.19391 5 10.6667V21.3333C5 22.8061 6.19391 24 7.66667 24H23.6667C25.1394 24 26.3333 22.8061 26.3333 21.3333V10.6667C26.3333 9.19391 25.1394 8 23.6667 8H7.66667ZM23.6667 9.73333H7.66667C7.1512 9.73333 6.73333 10.1512 6.73333 10.6667V21.3333C6.73333 21.8488 7.1512 22.2667 7.66667 22.2667H23.6667C24.1821 22.2667 24.6 21.8488 24.6 21.3333V10.6667C24.6 10.1512 24.1821 9.73333 23.6667 9.73333Z" fill="black"/>
    </svg>
  );
};
