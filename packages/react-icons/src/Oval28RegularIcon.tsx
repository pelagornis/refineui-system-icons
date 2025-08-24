import React from 'react';
import { IconProps } from './types';

export const Oval28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C8.13401 7 5 10.134 5 14C5 17.866 8.13401 21 12 21H16.6667C20.5327 21 23.6667 17.866 23.6667 14C23.6667 10.134 20.5327 7 16.6667 7H12ZM16.6667 8.51667H12C8.97164 8.51667 6.51667 10.9716 6.51667 14C6.51667 17.0284 8.97164 19.4833 12 19.4833H16.6667C19.695 19.4833 22.15 17.0284 22.15 14C22.15 10.9716 19.695 8.51667 16.6667 8.51667Z" fill="black"/>
    </svg>
  );
};
