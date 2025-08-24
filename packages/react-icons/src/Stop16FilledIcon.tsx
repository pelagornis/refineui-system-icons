import React from 'react';
import { IconProps } from './types';

export const Stop16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 4.33333C3 3.59695 3.59695 3 4.33333 3H12.3333C13.0697 3 13.6667 3.59695 13.6667 4.33333V12.3333C13.6667 13.0697 13.0697 13.6667 12.3333 13.6667H4.33333C3.59695 13.6667 3 13.0697 3 12.3333V4.33333Z" fill="black"/>
    </svg>
  );
};
