import React from 'react';
import { IconProps } from './types';

export const Phone20RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10.7917 4.66667H9.54167C9.19649 4.66667 8.91667 4.94649 8.91667 5.29167C8.91667 5.63684 9.19649 5.91667 9.54167 5.91667H10.7917C11.1368 5.91667 11.4167 5.63684 11.4167 5.29167C11.4167 4.94649 11.1368 4.66667 10.7917 4.66667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 4.66667C6 3.74619 6.74619 3 7.66667 3H12.6667C13.5871 3 14.3333 3.74619 14.3333 4.66667V14.6667C14.3333 15.5871 13.5871 16.3333 12.6667 16.3333H7.66667C6.74619 16.3333 6 15.5871 6 14.6667V4.66667ZM7.66667 4.08333H12.6667C12.9888 4.08333 13.25 4.3445 13.25 4.66667V14.6667C13.25 14.9888 12.9888 15.25 12.6667 15.25H7.66667C7.3445 15.25 7.08333 14.9888 7.08333 14.6667V4.66667C7.08333 4.3445 7.3445 4.08333 7.66667 4.08333Z" fill="black"/>
    </svg>
  );
};
