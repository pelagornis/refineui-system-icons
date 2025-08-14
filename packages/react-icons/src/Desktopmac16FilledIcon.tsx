import React from 'react';
import { IconProps } from './types';

export const Desktopmac16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 3C3.59695 3 3 3.59695 3 4.33333V9C3 9.73638 3.59695 10.3333 4.33333 10.3333H6.47143V11.8H5C4.76068 11.8 4.56667 11.994 4.56667 12.2333C4.56667 12.4727 4.76068 12.6667 5 12.6667H11.6667C11.906 12.6667 12.1 12.4727 12.1 12.2333C12.1 11.994 11.906 11.8 11.6667 11.8H10.1952V10.3333H12.3333C13.0697 10.3333 13.6667 9.73638 13.6667 9V4.33333C13.6667 3.59695 13.0697 3 12.3333 3H4.33333ZM12.8 8.43333H3.86667V9C3.86667 9.25773 4.0756 9.46667 4.33333 9.46667H12.3333C12.5911 9.46667 12.8 9.25773 12.8 9V8.43333ZM7.3381 11.8V10.3333H9.32857V11.8H7.3381Z" fill="black"/>
    </svg>
  );
};
