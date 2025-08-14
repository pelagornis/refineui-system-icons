import React from 'react';
import { IconProps } from './types';

export const Phone16RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M8.83333 4.33333H7.83333C7.55719 4.33333 7.33333 4.55719 7.33333 4.83333C7.33333 5.10948 7.55719 5.33333 7.83333 5.33333H8.83333C9.10948 5.33333 9.33333 5.10948 9.33333 4.83333C9.33333 4.55719 9.10948 4.33333 8.83333 4.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.33333C5 3.59695 5.59695 3 6.33333 3H10.3333C11.0697 3 11.6667 3.59695 11.6667 4.33333V12.3333C11.6667 13.0697 11.0697 13.6667 10.3333 13.6667H6.33333C5.59695 13.6667 5 13.0697 5 12.3333V4.33333ZM6.33333 3.86667H10.3333C10.5911 3.86667 10.8 4.0756 10.8 4.33333V12.3333C10.8 12.5911 10.5911 12.8 10.3333 12.8H6.33333C6.0756 12.8 5.86667 12.5911 5.86667 12.3333V4.33333C5.86667 4.0756 6.0756 3.86667 6.33333 3.86667Z" fill="black"/>
    </svg>
  );
};
