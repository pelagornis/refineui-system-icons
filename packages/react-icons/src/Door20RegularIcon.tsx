import React from 'react';
import { IconProps } from './types';

export const Door20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 9.66667C8.33333 10.1269 7.96024 10.5 7.5 10.5C7.03976 10.5 6.66667 10.1269 6.66667 9.66667C6.66667 9.20643 7.03976 8.83333 7.5 8.83333C7.96024 8.83333 8.33333 9.20643 8.33333 9.66667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.66667C5 3.74619 5.74619 3 6.66667 3H13.3333C14.2538 3 15 3.74619 15 4.66667V14.6667C15 15.5871 14.2538 16.3333 13.3333 16.3333H6.66667C5.74619 16.3333 5 15.5871 5 14.6667V4.66667ZM6.66667 4.08333H13.3333C13.6555 4.08333 13.9167 4.3445 13.9167 4.66667V14.6667C13.9167 14.9888 13.6555 15.25 13.3333 15.25H6.66667C6.3445 15.25 6.08333 14.9888 6.08333 14.6667V4.66667C6.08333 4.3445 6.3445 4.08333 6.66667 4.08333Z" fill="black"/>
    </svg>
  );
};
