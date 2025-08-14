import React from 'react';
import { IconProps } from './types';

export const Textboxaligntop48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 9.79086 9.79086 8 12 8H36C38.2091 8 40 9.79086 40 12V36C40 38.2091 38.2091 40 36 40H12C9.79086 40 8 38.2091 8 36V12ZM14.2 16.5C14.2 15.782 14.782 15.2 15.5 15.2H32.5C33.218 15.2 33.8 15.782 33.8 16.5C33.8 17.218 33.218 17.8 32.5 17.8H15.5C14.782 17.8 14.2 17.218 14.2 16.5ZM15.5 22.2C14.782 22.2 14.2 22.782 14.2 23.5C14.2 24.218 14.782 24.8 15.5 24.8H32.5C33.218 24.8 33.8 24.218 33.8 23.5C33.8 22.782 33.218 22.2 32.5 22.2H15.5Z" fill="black"/>
    </svg>
  );
};
