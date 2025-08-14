import React from 'react';
import { IconProps } from './types';

export const Stop32FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M5 7.66667C5 6.19391 6.19391 5 7.66667 5H23.6667C25.1394 5 26.3333 6.19391 26.3333 7.66667V23.6667C26.3333 25.1394 25.1394 26.3333 23.6667 26.3333H7.66667C6.19391 26.3333 5 25.1394 5 23.6667V7.66667Z" fill="black"/>
    </svg>
  );
};
