import React from 'react';
import { IconProps } from './types';

export const Payment20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 5C3.74619 5 3 5.74619 3 6.66667L3.00004 7.58334C3.00005 7.6984 3.09332 7.79167 3.20837 7.79167H16.125C16.2401 7.79167 16.3333 7.69839 16.3333 7.58333V6.66667C16.3333 5.74619 15.5871 5 14.6667 5H4.66667ZM16.3333 13.3333V9.08333C16.3333 8.96827 16.2401 8.875 16.125 8.875H3.20833C3.09327 8.875 3 8.96827 3 9.08333V13.3333C3 14.2538 3.74619 15 4.66667 15H14.6667C15.5871 15 16.3333 14.2538 16.3333 13.3333ZM5.5 11.9583C5.5 11.6592 5.74251 11.4167 6.04167 11.4167H7.45833C7.75749 11.4167 8 11.6592 8 11.9583C8 12.2575 7.75749 12.5 7.45833 12.5H6.04167C5.74251 12.5 5.5 12.2575 5.5 11.9583Z" fill="black"/>
    </svg>
  );
};
