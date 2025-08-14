import React from 'react';
import { IconProps } from './types';

export const Mail20RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.83333C3 5.3731 3.3731 5 3.83333 5H15.5C15.9602 5 16.3333 5.3731 16.3333 5.83333V14.1667C16.3333 14.6269 15.9602 15 15.5 15H3.83333C3.3731 15 3 14.6269 3 14.1667V5.83333ZM4.08333 6.67756V13.9167H15.25V6.67756L10.4659 10.0948C9.98778 10.4363 9.34555 10.4363 8.86746 10.0948L4.08333 6.67756ZM14.2181 6.08333H5.11525L9.49714 9.21325C9.59855 9.28569 9.73478 9.28569 9.83619 9.21325L14.2181 6.08333Z" fill="black"/>
    </svg>
  );
};
