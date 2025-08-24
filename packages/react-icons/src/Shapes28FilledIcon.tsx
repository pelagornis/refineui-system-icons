import React from 'react';
import { IconProps } from './types';

export const Shapes28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M9.66667 12V17.5918C6.97341 16.83 5 14.3538 5 11.4167C5 7.87284 7.87284 5 11.4167 5C14.3538 5 16.83 6.97341 17.5918 9.66667H12C10.7113 9.66667 9.66667 10.7113 9.66667 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 13.1667C10.8333 11.878 11.878 10.8333 13.1667 10.8333H21.3333C22.622 10.8333 23.6667 11.878 23.6667 13.1667V21.3333C23.6667 22.622 22.622 23.6667 21.3333 23.6667H13.1667C11.878 23.6667 10.8333 22.622 10.8333 21.3333V13.1667Z" fill="black"/>
    </svg>
  );
};
