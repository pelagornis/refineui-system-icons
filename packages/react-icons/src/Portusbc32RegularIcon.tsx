import React from 'react';
import { IconProps } from './types';

export const Portusbc32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 12C8.79086 12 7 13.7909 7 16C7 18.2091 8.79086 20 11 20H21.6667C23.8758 20 25.6667 18.2091 25.6667 16C25.6667 13.7909 23.8758 12 21.6667 12H11ZM21.6667 13.7333H11C9.74815 13.7333 8.73333 14.7482 8.73333 16C8.73333 17.2518 9.74815 18.2667 11 18.2667H21.6667C22.9185 18.2667 23.9333 17.2518 23.9333 16C23.9333 14.7482 22.9185 13.7333 21.6667 13.7333Z" fill="black"/>
    </svg>
  );
};
