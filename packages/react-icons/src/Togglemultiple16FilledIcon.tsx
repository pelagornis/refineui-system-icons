import React from 'react';
import { IconProps } from './types';

export const Togglemultiple16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8H11.1667C12.5474 8 13.6667 6.88071 13.6667 5.5C13.6667 4.11929 12.5474 3 11.1667 3H5.5ZM11 6.83333C11.7364 6.83333 12.3333 6.23638 12.3333 5.5C12.3333 4.76362 11.7364 4.16667 11 4.16667C10.2636 4.16667 9.66667 4.76362 9.66667 5.5C9.66667 6.23638 10.2636 6.83333 11 6.83333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 8.66667C4.11929 8.66667 3 9.78595 3 11.1667C3 12.5474 4.11929 13.6667 5.5 13.6667H11.1667C12.5474 13.6667 13.6667 12.5474 13.6667 11.1667C13.6667 9.78595 12.5474 8.66667 11.1667 8.66667H5.5ZM7 11.1667C7 11.903 6.40305 12.5 5.66667 12.5C4.93029 12.5 4.33333 11.903 4.33333 11.1667C4.33333 10.4303 4.93029 9.83333 5.66667 9.83333C6.40305 9.83333 7 10.4303 7 11.1667Z" fill="black"/>
    </svg>
  );
};
