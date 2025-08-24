import React from 'react';
import { IconProps } from './types';

export const Document32FilledIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 26.3333C8.44772 26.3333 8 25.8856 8 25.3333V6C8 5.44772 8.44772 5 9 5H15C15.5523 5 16 5.44772 16 6V12C16 12.5523 16.4477 13 17 13H23C23.5523 13 24 13.4477 24 14V25.3333C24 25.8856 23.5523 26.3333 23 26.3333H9Z" fill="black"/>
<path d="M24 11.6667L17.3333 5V11.4167C17.3333 11.5547 17.4453 11.6667 17.5833 11.6667H24Z" fill="black"/>
    </svg>
  );
};
