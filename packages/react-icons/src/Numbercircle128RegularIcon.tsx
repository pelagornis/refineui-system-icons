import React from 'react';
import { IconProps } from './types';

export const Numbercircle128RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.1583 17.8333V12.5267L13.1259 13.584C12.8333 13.8836 12.3532 13.8893 12.0535 13.5968C11.7539 13.3041 11.7482 12.824 12.0408 12.5244L14.1749 10.3388C14.7505 9.74937 15.675 10.2055 15.675 10.9531V17.8333C15.675 18.2521 15.3355 18.5917 14.9167 18.5917C14.4979 18.5917 14.1583 18.2521 14.1583 17.8333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6667 14.3333C23.6667 19.488 19.488 23.6667 14.3333 23.6667C9.17868 23.6667 5 19.488 5 14.3333C5 9.17868 9.17868 5 14.3333 5C19.488 5 23.6667 9.17868 23.6667 14.3333ZM22.15 14.3333C22.15 18.6504 18.6504 22.15 14.3333 22.15C10.0163 22.15 6.51667 18.6504 6.51667 14.3333C6.51667 10.0163 10.0163 6.51667 14.3333 6.51667C18.6504 6.51667 22.15 10.0163 22.15 14.3333Z" fill="black"/>
    </svg>
  );
};
