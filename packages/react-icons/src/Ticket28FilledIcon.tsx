import React from 'react';
import { IconProps } from './types';

export const Ticket28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6667 9.16667C23.6667 8.52233 23.1443 8 22.5 8H6.16667C5.52233 8 5 8.52233 5 9.16667V11.5C6.28866 11.5 7.33333 12.5447 7.33333 13.8333C7.33333 15.122 6.28866 16.1667 5 16.1667V18.5C5 19.1443 5.52233 19.6667 6.16667 19.6667H22.5C23.1443 19.6667 23.6667 19.1443 23.6667 18.5V16.1667C22.378 16.1667 21.3333 15.122 21.3333 13.8333C21.3333 12.5447 22.378 11.5 23.6667 11.5V9.16667Z" fill="black"/>
    </svg>
  );
};
