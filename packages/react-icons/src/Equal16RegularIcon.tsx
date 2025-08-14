import React from 'react';
import { IconProps } from './types';

export const Equal16RegularIcon: React.FC<IconProps> = ({ 
  size = 16, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.43346 5C3.19407 5 3 5.19398 3 5.43327C3 5.67255 3.19407 5.86653 3.43346 5.86653H13.2332C13.4726 5.86653 13.6667 5.67255 13.6667 5.43327C13.6667 5.19398 13.4726 5 13.2332 5H3.43346Z" fill="black"/>
<path d="M3.43346 9.4668C3.19407 9.4668 3 9.66078 3 9.90007C3 10.1394 3.19407 10.3333 3.43346 10.3333H13.2332C13.4726 10.3333 13.6667 10.1394 13.6667 9.90007C13.6667 9.66078 13.4726 9.4668 13.2332 9.4668H3.43346Z" fill="black"/>
    </svg>
  );
};
