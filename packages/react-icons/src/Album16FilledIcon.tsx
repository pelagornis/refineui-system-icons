import React from 'react';
import { IconProps } from './types';

export const Album16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.67C11.2789 13.67 13.6667 11.2814 13.6667 8.335C13.6667 5.38856 11.2789 3 8.33333 3C5.38781 3 3 5.38856 3 8.335C3 11.2814 5.38781 13.67 8.33333 13.67ZM8.33333 10.3356C9.4379 10.3356 10.3333 9.43991 10.3333 8.335C10.3333 7.23009 9.4379 6.33437 8.33333 6.33437C7.22876 6.33437 6.33333 7.23009 6.33333 8.335C6.33333 9.43991 7.22876 10.3356 8.33333 10.3356Z" fill="black"/>
<path d="M9.66667 8.335C9.66667 9.07161 9.06971 9.66875 8.33333 9.66875C7.59695 9.66875 7 9.07161 7 8.335C7 7.59839 7.59695 7.00125 8.33333 7.00125C9.06971 7.00125 9.66667 7.59839 9.66667 8.335Z" fill="black"/>
    </svg>
  );
};
