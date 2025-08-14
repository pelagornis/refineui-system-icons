import React from 'react';
import { IconProps } from './types';

export const Toggleleft28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8333 8C7.61167 8 5 10.6117 5 13.8333C5 17.055 7.61167 19.6667 10.8333 19.6667H17.8333C21.055 19.6667 23.6667 17.055 23.6667 13.8333C23.6667 10.6117 21.055 8 17.8333 8H10.8333ZM14.3333 13.8333C14.3333 15.7663 12.7663 17.3333 10.8333 17.3333C8.90034 17.3333 7.33333 15.7663 7.33333 13.8333C7.33333 11.9003 8.90034 10.3333 10.8333 10.3333C12.7663 10.3333 14.3333 11.9003 14.3333 13.8333Z" fill="black"/>
    </svg>
  );
};
