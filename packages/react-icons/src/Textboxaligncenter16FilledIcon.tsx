import React from 'react';
import { IconProps } from './types';

export const Textboxaligncenter16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 3C3.59695 3 3 3.59695 3 4.33333V12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667H12.3333C13.0697 13.6667 13.6667 13.0697 13.6667 12.3333V4.33333C13.6667 3.59695 13.0697 3 12.3333 3H4.33333ZM5.5 6.73333C5.26068 6.73333 5.06667 6.92734 5.06667 7.16667C5.06667 7.40599 5.26068 7.6 5.5 7.6H11.1667C11.406 7.6 11.6 7.40599 11.6 7.16667C11.6 6.92734 11.406 6.73333 11.1667 6.73333H5.5ZM6.33333 9.06667C6.09401 9.06667 5.9 9.26068 5.9 9.5C5.9 9.73932 6.09401 9.93333 6.33333 9.93333H10.3333C10.5727 9.93333 10.7667 9.73932 10.7667 9.5C10.7667 9.26068 10.5727 9.06667 10.3333 9.06667H6.33333Z" fill="black"/>
    </svg>
  );
};
