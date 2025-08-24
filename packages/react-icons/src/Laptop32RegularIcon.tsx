import React from 'react';
import { IconProps } from './types';

export const Laptop32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 9.33333C7.66667 8.59695 8.26362 8 9 8H22.3333C23.0697 8 23.6667 8.59695 23.6667 9.33333V18.6667C23.6667 19.403 23.0697 20 22.3333 20H9C8.26362 20 7.66667 19.403 7.66667 18.6667V9.33333ZM9.73333 18.2667C9.54924 18.2667 9.4 18.1174 9.4 17.9333V10.0667C9.4 9.88257 9.54924 9.73333 9.73333 9.73333H21.6C21.7841 9.73333 21.9333 9.88257 21.9333 10.0667V17.9333C21.9333 18.1174 21.7841 18.2667 21.6 18.2667H9.73333Z" fill="black"/>
<path d="M5.86667 21.3333C5.38802 21.3333 5 21.7214 5 22.2C5 22.6786 5.38802 23.0667 5.86667 23.0667H25.4667C25.9453 23.0667 26.3333 22.6786 26.3333 22.2C26.3333 21.7214 25.9453 21.3333 25.4667 21.3333H5.86667Z" fill="black"/>
    </svg>
  );
};
