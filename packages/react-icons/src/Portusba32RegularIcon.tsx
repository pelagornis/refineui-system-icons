import React from 'react';
import { IconProps } from './types';

export const Portusba32RegularIcon: React.FC<IconProps> = ({ 
  size = 32, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.66667 11C6.19391 11 5 12.1939 5 13.6667V17.6667C5 19.1394 6.19391 20.3333 7.66667 20.3333H23.6667C25.1394 20.3333 26.3333 19.1394 26.3333 17.6667V13.6667C26.3333 12.1939 25.1394 11 23.6667 11H7.66667ZM7.33333 12.3333C6.96514 12.3333 6.66667 12.6318 6.66667 13V15.6667H24.6667V13C24.6667 12.6318 24.3682 12.3333 24 12.3333H7.33333Z" fill="black"/>
    </svg>
  );
};
