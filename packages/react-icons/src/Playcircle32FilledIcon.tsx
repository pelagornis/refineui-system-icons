import React from 'react';
import { IconProps } from './types';

export const Playcircle32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.3333C21.5577 26.3333 26.3333 21.5577 26.3333 15.6667C26.3333 9.77563 21.5577 5 15.6667 5C9.77563 5 5 9.77563 5 15.6667C5 21.5577 9.77563 26.3333 15.6667 26.3333ZM12.4508 11.7246L19.3671 15.1821C19.7665 15.3818 19.7665 15.9516 19.3671 16.1512L12.4508 19.6088C12.0906 19.7889 11.6667 19.5269 11.6667 19.1242V12.2091C11.6667 11.8064 12.0906 11.5445 12.4508 11.7246Z" fill="black"/>
    </svg>
  );
};
