import React from 'react';
import { IconProps } from './types';

export const Desktop16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.33333C3 3.59695 3.59695 3 4.33333 3H12.3333C13.0697 3 13.6667 3.59695 13.6667 4.33333V9C13.6667 9.73638 13.0697 10.3333 12.3333 10.3333H10.1952V11.8H11.6667C11.906 11.8 12.1 11.994 12.1 12.2333C12.1 12.4727 11.906 12.6667 11.6667 12.6667H5C4.76068 12.6667 4.56667 12.4727 4.56667 12.2333C4.56667 11.994 4.76068 11.8 5 11.8H6.47143V10.3333H4.33333C3.59695 10.3333 3 9.73638 3 9V4.33333ZM7.3381 10.3333V11.8H9.32857V10.3333H7.3381Z" fill="black"/>
    </svg>
  );
};
