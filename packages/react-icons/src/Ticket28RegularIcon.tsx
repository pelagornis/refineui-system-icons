import React from 'react';
import { IconProps } from './types';

export const Ticket28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6667 9.16667C23.6667 8.52233 23.1443 8 22.5 8H6.16667C5.52233 8 5 8.52233 5 9.16667V11.5C6.28866 11.5 7.33333 12.5447 7.33333 13.8333C7.33333 15.122 6.28866 16.1667 5 16.1667V18.5C5 19.1443 5.52233 19.6667 6.16667 19.6667H22.5C23.1443 19.6667 23.6667 19.1443 23.6667 18.5V16.1667C22.378 16.1667 21.3333 15.122 21.3333 13.8333C21.3333 12.5447 22.378 11.5 23.6667 11.5V9.16667ZM6.51667 9.51667V10.2936C7.88886 10.8823 8.85 12.2456 8.85 13.8333C8.85 15.4211 7.88886 16.7844 6.51667 17.3731V18.15H22.15V17.3731C20.7778 16.7844 19.8167 15.4211 19.8167 13.8333C19.8167 12.2456 20.7778 10.8823 22.15 10.2936V9.51667H6.51667Z" fill="black"/>
    </svg>
  );
};
