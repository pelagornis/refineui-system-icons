import React from 'react';
import { IconProps } from './types';

export const Textboxalignbottomcenter48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8H12ZM15.5 22.7C14.782 22.7 14.2 23.282 14.2 24C14.2 24.718 14.782 25.3 15.5 25.3H32.5C33.218 25.3 33.8 24.718 33.8 24C33.8 23.282 33.218 22.7 32.5 22.7H15.5ZM18 29.7C17.282 29.7 16.7 30.282 16.7 31C16.7 31.718 17.282 32.3 18 32.3H30C30.718 32.3 31.3 31.718 31.3 31C31.3 30.282 30.718 29.7 30 29.7H18Z" fill="black"/>
    </svg>
  );
};
