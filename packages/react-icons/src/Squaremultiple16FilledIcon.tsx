import React from 'react';
import { IconProps } from './types';

export const Squaremultiple16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M12.3333 3.86667H7C6.74227 3.86667 6.53333 4.0756 6.53333 4.33333H5.66667C5.66667 3.59695 6.26362 3 7 3H12.3333C13.0697 3 13.6667 3.59695 13.6667 4.33333V9.66667C13.6667 10.403 13.0697 11 12.3333 11V10.1333C12.5911 10.1333 12.8 9.9244 12.8 9.66667V4.33333C12.8 4.0756 12.5911 3.86667 12.3333 3.86667Z" fill="black"/>
<path d="M4.33333 5C3.59695 5 3 5.59695 3 6.33333V12.3333C3 13.0697 3.59695 13.6667 4.33333 13.6667H10.3333C11.0697 13.6667 11.6667 13.0697 11.6667 12.3333V6.33333C11.6667 5.59695 11.0697 5 10.3333 5H4.33333Z" fill="black"/>
    </svg>
  );
};
