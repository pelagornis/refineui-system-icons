import React from 'react';
import { IconProps } from './types';

export const Shapeexclude16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33333 10.3333H4.33333C3.59695 10.3333 3 9.73638 3 9V4.33333C3 3.59695 3.59695 3 4.33333 3H9C9.73638 3 10.3333 3.59695 10.3333 4.33333V6.33333H12.3333C13.0697 6.33333 13.6667 6.93029 13.6667 7.66667V12.3333C13.6667 13.0697 13.0697 13.6667 12.3333 13.6667H7.66667C6.93029 13.6667 6.33333 13.0697 6.33333 12.3333V10.3333ZM9.33333 7.2C9.40697 7.2 9.46667 7.2597 9.46667 7.33333V9C9.46667 9.25773 9.25773 9.46667 9 9.46667H7.33333C7.2597 9.46667 7.2 9.40697 7.2 9.33333V7.66667C7.2 7.40893 7.40893 7.2 7.66667 7.2H9.33333Z" fill="black"/>
    </svg>
  );
};
