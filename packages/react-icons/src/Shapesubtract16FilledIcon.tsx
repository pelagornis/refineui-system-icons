import React from 'react';
import { IconProps } from './types';

export const Shapesubtract16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 10.3333H6.33333V12.3333C6.33333 13.0697 6.93029 13.6667 7.66667 13.6667H12.3333C13.0697 13.6667 13.6667 13.0697 13.6667 12.3333V7.66667C13.6667 6.93029 13.0697 6.33333 12.3333 6.33333H10.3333V4.33333C10.3333 3.59695 9.73638 3 9 3H4.33333C3.59695 3 3 3.59695 3 4.33333V9C3 9.73638 3.59695 10.3333 4.33333 10.3333ZM12.3333 7.2H10.3333V9C10.3333 9.73638 9.73638 10.3333 9 10.3333H7.2V12.3333C7.2 12.5911 7.40893 12.8 7.66667 12.8H12.3333C12.5911 12.8 12.8 12.5911 12.8 12.3333V7.66667C12.8 7.40893 12.5911 7.2 12.3333 7.2Z" fill="black"/>
    </svg>
  );
};
