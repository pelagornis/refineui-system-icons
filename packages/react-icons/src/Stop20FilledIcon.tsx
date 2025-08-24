import React from 'react';
import { IconProps } from './types';

export const Stop20FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 4.66667C3 3.74619 3.74619 3 4.66667 3H14.6667C15.5871 3 16.3333 3.74619 16.3333 4.66667V14.6667C16.3333 15.5871 15.5871 16.3333 14.6667 16.3333H4.66667C3.74619 16.3333 3 15.5871 3 14.6667V4.66667Z" fill="black"/>
    </svg>
  );
};
