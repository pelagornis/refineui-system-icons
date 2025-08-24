import React from 'react';
import { IconProps } from './types';

export const Barcharthorizontal16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 3C3.59695 3 3 3.59695 3 4.33333C3 5.06971 3.59695 5.66667 4.33333 5.66667H7.66667C8.40305 5.66667 9 5.06971 9 4.33333C9 3.59695 8.40305 3 7.66667 3H4.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 7C3.59695 7 3 7.59695 3 8.33333C3 9.06971 3.59695 9.66667 4.33333 9.66667H9.66667C10.403 9.66667 11 9.06971 11 8.33333C11 7.59695 10.403 7 9.66667 7H4.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 12.3333C3 11.597 3.59695 11 4.33333 11H12.3333C13.0697 11 13.6667 11.597 13.6667 12.3333C13.6667 13.0697 13.0697 13.6667 12.3333 13.6667H4.33333C3.59695 13.6667 3 13.0697 3 12.3333Z" fill="black"/>
    </svg>
  );
};
