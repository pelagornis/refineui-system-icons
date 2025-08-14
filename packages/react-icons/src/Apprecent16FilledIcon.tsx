import React from 'react';
import { IconProps } from './types';

export const Apprecent16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M10 3C10.7364 3 11.3333 3.59695 11.3333 4.33333V12.3333C11.3333 13.0697 10.7364 13.6667 10 13.6667H6.66667C5.93029 13.6667 5.33333 13.0697 5.33333 12.3333V4.33333C5.33333 3.59695 5.93029 3 6.66667 3H10Z" fill="black"/>
<path d="M3 5.66667C3 4.93029 3.59695 4.33333 4.33333 4.33333H4.83333V12.3333H4.33333C3.59695 12.3333 3 11.7364 3 11V5.66667Z" fill="black"/>
<path d="M12.3333 12.3333C13.0697 12.3333 13.6667 11.7364 13.6667 11V5.66667C13.6667 4.93029 13.0697 4.33333 12.3333 4.33333H11.8333V12.3333H12.3333Z" fill="black"/>
    </svg>
  );
};
