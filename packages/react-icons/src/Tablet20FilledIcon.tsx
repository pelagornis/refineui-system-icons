import React from 'react';
import { IconProps } from './types';

export const Tablet20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66667 3C4.74619 3 4 3.74619 4 4.66667V14.6667C4 15.5871 4.74619 16.3333 5.66667 16.3333H14C14.9205 16.3333 15.6667 15.5871 15.6667 14.6667V4.66667C15.6667 3.74619 14.9205 3 14 3H5.66667ZM7.33333 13.2917C7.03418 13.2917 6.79167 13.5342 6.79167 13.8333C6.79167 14.1325 7.03418 14.375 7.33333 14.375H12.3333C12.6325 14.375 12.875 14.1325 12.875 13.8333C12.875 13.5342 12.6325 13.2917 12.3333 13.2917H7.33333Z" fill="black"/>
    </svg>
  );
};
