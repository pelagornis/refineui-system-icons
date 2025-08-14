import React from 'react';
import { IconProps } from './types';

export const Folder16FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M3 11.3333V4.66667C3 4.29848 3.29848 4 3.66667 4H6.39052C6.56734 4 6.7369 4.07024 6.86193 4.19526L8.13807 5.4714C8.2631 5.59643 8.43266 5.66667 8.60948 5.66667H13C13.3682 5.66667 13.6667 5.96514 13.6667 6.33333V11.3333C13.6667 11.7015 13.3682 12 13 12H3.66667C3.29848 12 3 11.7015 3 11.3333Z" fill="black"/>
    </svg>
  );
};
