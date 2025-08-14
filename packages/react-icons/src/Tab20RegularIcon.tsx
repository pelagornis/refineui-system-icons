import React from 'react';
import { IconProps } from './types';

export const Tab20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 3C3.74619 3 3 3.74619 3 4.66667V14.6667C3 15.5871 3.74619 16.3333 4.66667 16.3333H14.6667C15.5871 16.3333 16.3333 15.5871 16.3333 14.6667V4.66667C16.3333 3.74619 15.5871 3 14.6667 3H4.66667ZM14.6667 4.08333H4.66667C4.3445 4.08333 4.08333 4.3445 4.08333 4.66667V14.6667C4.08333 14.9888 4.3445 15.25 4.66667 15.25H14.6667C14.9888 15.25 15.25 14.9888 15.25 14.6667V4.66667C15.25 4.3445 14.9888 4.08333 14.6667 4.08333Z" fill="black"/>
    </svg>
  );
};
