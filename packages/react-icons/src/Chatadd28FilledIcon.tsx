import React from 'react';
import { IconProps } from './types';

export const Chatadd28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6667 14.3333C23.6667 19.488 19.488 23.6667 14.3333 23.6667H6.16667C5.52233 23.6667 5 23.1443 5 22.5V14.3333C5 9.17868 9.17868 5 14.3333 5C19.488 5 23.6667 9.17868 23.6667 14.3333ZM15.0917 10.25C15.0917 9.83118 14.7521 9.49167 14.3333 9.49167C13.9145 9.49167 13.575 9.83118 13.575 10.25V13.575H10.25C9.83118 13.575 9.49167 13.9145 9.49167 14.3333C9.49167 14.7521 9.83118 15.0917 10.25 15.0917H13.575V18.4167C13.575 18.8355 13.9145 19.175 14.3333 19.175C14.7521 19.175 15.0917 18.8355 15.0917 18.4167V15.0917H18.4167C18.8355 15.0917 19.175 14.7521 19.175 14.3333C19.175 13.9145 18.8355 13.575 18.4167 13.575H15.0917V10.25Z" fill="black"/>
    </svg>
  );
};
