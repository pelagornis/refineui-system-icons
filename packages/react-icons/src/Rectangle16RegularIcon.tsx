import React from 'react';
import { IconProps } from './types';

export const Rectangle16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.33333 4C3.59695 4 3 4.59695 3 5.33333V10.6667C3 11.403 3.59695 12 4.33333 12H12.3333C13.0697 12 13.6667 11.403 13.6667 10.6667V5.33333C13.6667 4.59695 13.0697 4 12.3333 4H4.33333ZM12.3333 4.86667H4.33333C4.0756 4.86667 3.86667 5.0756 3.86667 5.33333V10.6667C3.86667 10.9244 4.0756 11.1333 4.33333 11.1333H12.3333C12.5911 11.1333 12.8 10.9244 12.8 10.6667V5.33333C12.8 5.0756 12.5911 4.86667 12.3333 4.86667Z" fill="black"/>
    </svg>
  );
};
