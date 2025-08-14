import React from 'react';
import { IconProps } from './types';

export const Toggleright24RegularIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C12 10.3431 13.3431 9 15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12ZM13.3 12C13.3 11.0611 14.0611 10.3 15 10.3C15.9389 10.3 16.7 11.0611 16.7 12C16.7 12.9389 15.9389 13.7 15 13.7C14.0611 13.7 13.3 12.9389 13.3 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 14.7614 17.7614 17 15 17L9 17C6.23858 17 4 14.7614 4 12C4 9.23857 6.23858 7 9 7H15C17.7614 7 20 9.23858 20 12ZM18.7 12C18.7 14.0435 17.0435 15.7 15 15.7L9 15.7C6.95655 15.7 5.3 14.0435 5.3 12C5.3 9.95655 6.95655 8.3 9 8.3L15 8.3C17.0435 8.3 18.7 9.95655 18.7 12Z" fill="black"/>
    </svg>
  );
};
