import React from 'react';
import { IconProps } from './types';

export const Playcircle16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.6667C11.2788 13.6667 13.6667 11.2788 13.6667 8.33333C13.6667 5.38782 11.2788 3 8.33333 3C5.38782 3 3 5.38782 3 8.33333C3 11.2788 5.38782 13.6667 8.33333 13.6667ZM6.72542 6.36228L10.1836 8.09104C10.3833 8.19088 10.3833 8.47579 10.1836 8.57562L6.72542 10.3044C6.54529 10.3944 6.33333 10.2635 6.33333 10.0621V6.60456C6.33333 6.4032 6.54529 6.27223 6.72542 6.36228Z" fill="black"/>
    </svg>
  );
};
