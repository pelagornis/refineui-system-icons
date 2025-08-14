import React from 'react';
import { IconProps } from './types';

export const Battery10016FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.33333C3 5.59695 3.59696 5 4.33333 5H11.3468C12.0832 5 12.6801 5.59695 12.6801 6.33333V6.95718C13.225 6.95718 13.6667 7.39886 13.6667 7.94371V8.72296C13.6667 9.2678 13.225 9.70947 12.6801 9.70947V10.3333C12.6801 11.0697 12.0832 11.6667 11.3468 11.6667H4.33333C3.59696 11.6667 3 11.0697 3 10.3333V6.33333ZM5 6.33333C4.6318 6.33333 4.33333 6.63181 4.33333 7V9.66667C4.33333 10.0349 4.6318 10.3333 5 10.3333H10.7333C11.1015 10.3333 11.4 10.0349 11.4 9.66667V7C11.4 6.63181 11.1015 6.33333 10.7333 6.33333H5Z" fill="black"/>
    </svg>
  );
};
