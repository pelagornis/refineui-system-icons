import React from 'react';
import { IconProps } from './types';

export const Chat16FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33333 13.6667C11.2788 13.6667 13.6667 11.2788 13.6667 8.33333C13.6667 5.38782 11.2788 3 8.33333 3C5.38782 3 3 5.38782 3 8.33333V13C3 13.3682 3.29848 13.6667 3.66667 13.6667H8.33333ZM5.23332 7.66667C5.23332 7.42735 5.42733 7.23334 5.66667 7.23334H11C11.2393 7.23334 11.4333 7.42735 11.4333 7.66667C11.4333 7.90599 11.2393 8.1 11 8.1H5.66667C5.42733 8.1 5.23332 7.90599 5.23332 7.66667ZM5.23332 9.66667C5.23332 9.42735 5.42733 9.23334 5.66667 9.23334H8.33333C8.57267 9.23334 8.76668 9.42735 8.76668 9.66667C8.76668 9.90599 8.57267 10.1 8.33333 10.1H5.66667C5.42733 10.1 5.23332 9.90599 5.23332 9.66667Z" fill="black"/>
    </svg>
  );
};
