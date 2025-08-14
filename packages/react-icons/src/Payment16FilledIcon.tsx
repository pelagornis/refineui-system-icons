import React from 'react';
import { IconProps } from './types';

export const Payment16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 4C3.59695 4 3 4.59695 3 5.33333L3.00003 6.06667C3.00004 6.15872 3.07466 6.23333 3.1667 6.23333H13.5C13.592 6.23333 13.6667 6.15871 13.6667 6.06667V5.33333C13.6667 4.59695 13.0697 4 12.3333 4H4.33333ZM13.6667 10.6667V7.26667C13.6667 7.17462 13.592 7.1 13.5 7.1H3.16667C3.07462 7.1 3 7.17462 3 7.26667V10.6667C3 11.403 3.59695 12 4.33333 12H12.3333C13.0697 12 13.6667 11.403 13.6667 10.6667ZM5 9.56666C5 9.32734 5.19401 9.13333 5.43333 9.13333H6.56667C6.80599 9.13333 7 9.32734 7 9.56666C7 9.80599 6.80599 10 6.56667 10H5.43333C5.19401 10 5 9.80599 5 9.56666Z" fill="black"/>
    </svg>
  );
};
