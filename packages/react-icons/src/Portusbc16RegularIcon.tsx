import React from 'react';
import { IconProps } from './types';

export const Portusbc16RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 6C3.89543 6 3 6.89543 3 8C3 9.10457 3.89543 10 5 10H10.3333C11.4379 10 12.3333 9.10457 12.3333 8C12.3333 6.89543 11.4379 6 10.3333 6H5ZM10.3333 6.86667H5C4.37408 6.86667 3.86667 7.37408 3.86667 8C3.86667 8.62592 4.37408 9.13333 5 9.13333H10.3333C10.9593 9.13333 11.4667 8.62592 11.4667 8C11.4667 7.37408 10.9593 6.86667 10.3333 6.86667Z" fill="black"/>
    </svg>
  );
};
