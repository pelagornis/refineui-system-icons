import React from 'react';
import { IconProps } from './types';

export const Slidelayout16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.33333C3 4.59695 3.59695 4 4.33333 4H12.3333C13.0697 4 13.6667 4.59695 13.6667 5.33333V10.6667C13.6667 11.403 13.0697 12 12.3333 12H4.33333C3.59695 12 3 11.403 3 10.6667V5.33333ZM5.66667 5.56667C5.05915 5.56667 4.56667 6.05915 4.56667 6.66667V9.33333C4.56667 9.94085 5.05915 10.4333 5.66667 10.4333H11C11.6075 10.4333 12.1 9.94085 12.1 9.33333V6.66667C12.1 6.05915 11.6075 5.56667 11 5.56667H5.66667Z" fill="black"/>
<path d="M11.2333 8.43333H7.43333V9.56667H11C11.1289 9.56667 11.2333 9.4622 11.2333 9.33333V8.43333Z" fill="black"/>
<path d="M6.56667 9.56667V8.43333H5.43333V9.33333C5.43333 9.4622 5.5378 9.56667 5.66667 9.56667H6.56667Z" fill="black"/>
<path d="M5.66667 6.43333C5.5378 6.43333 5.43333 6.5378 5.43333 6.66667V7.56667H11.2333V6.66667C11.2333 6.5378 11.1289 6.43333 11 6.43333H5.66667Z" fill="black"/>
    </svg>
  );
};
