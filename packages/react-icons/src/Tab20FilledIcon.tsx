import React from 'react';
import { IconProps } from './types';

export const Tab20FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.66667 3C3.74619 3 3 3.74619 3 4.66667V14.6667C3 15.5871 3.74619 16.3333 4.66667 16.3333H14.6667C15.5871 16.3333 16.3333 15.5871 16.3333 14.6667V4.66667C16.3333 3.74619 15.5871 3 14.6667 3H4.66667ZM14.6667 5.5C14.6667 5.03976 14.2936 4.66667 13.8333 4.66667H5.5C5.03976 4.66667 4.66667 5.03976 4.66667 5.5V13.8333C4.66667 14.2936 5.03976 14.6667 5.5 14.6667H13.8333C14.2936 14.6667 14.6667 14.2936 14.6667 13.8333V5.5Z" fill="black"/>
    </svg>
  );
};
