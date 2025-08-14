import React from 'react';
import { IconProps } from './types';

export const Mail28RegularIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 8.16667C5 7.52233 5.52233 7 6.16667 7H22.5C23.1443 7 23.6667 7.52233 23.6667 8.16667V19.8333C23.6667 20.4777 23.1443 21 22.5 21H6.16667C5.52233 21 5 20.4777 5 19.8333V8.16667ZM6.51667 9.34859V19.4833H22.15V9.34859L15.4522 14.1327C14.7829 14.6108 13.8838 14.6108 13.2144 14.1327L6.51667 9.34859ZM20.7053 8.51667H7.96135L14.096 12.8986C14.238 13 14.4287 13 14.5707 12.8986L20.7053 8.51667Z" fill="black"/>
    </svg>
  );
};
