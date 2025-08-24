import React from 'react';
import { IconProps } from './types';

export const Barchartverticaldescending20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3333 14.6667C16.3333 15.5871 15.5871 16.3333 14.6667 16.3333C13.7462 16.3333 13 15.5871 13 14.6667V10.5C13 9.57952 13.7462 8.83333 14.6667 8.83333C15.5871 8.83333 16.3333 9.57952 16.3333 10.5V14.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3333 14.6667C11.3333 15.5871 10.5871 16.3333 9.66667 16.3333C8.74619 16.3333 8 15.5871 8 14.6667L8 8C8 7.07952 8.74619 6.33333 9.66667 6.33333C10.5871 6.33333 11.3333 7.07952 11.3333 8L11.3333 14.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 16.3333C5.58714 16.3333 6.33333 15.5871 6.33333 14.6667L6.33333 4.66667C6.33333 3.74619 5.58714 3 4.66667 3C3.74619 3 3 3.74619 3 4.66667L3 14.6667C3 15.5871 3.74619 16.3333 4.66667 16.3333Z" fill="black"/>
    </svg>
  );
};
