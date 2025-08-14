import React from 'react';
import { IconProps } from './types';

export const Toggleright20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8344 14C15.135 14 17 12.135 17 9.83437C17 7.53376 15.135 5.66875 12.8344 5.66875L7.83563 5.66875C5.53501 5.66875 3.67 7.53376 3.67 9.83437C3.67 12.135 5.53501 14 7.83562 14L12.8344 14ZM10.335 9.83437C10.335 8.45401 11.454 7.335 12.8344 7.335C14.2147 7.335 15.3338 8.45401 15.3338 9.83437C15.3338 11.2147 14.2147 12.3337 12.8344 12.3337C11.454 12.3337 10.335 11.2147 10.335 9.83437Z" fill="black"/>
    </svg>
  );
};
