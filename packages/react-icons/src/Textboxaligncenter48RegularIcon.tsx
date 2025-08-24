import React from 'react';
import { IconProps } from './types';

export const Textboxaligncenter48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14.2 20.5C14.2 19.782 14.782 19.2 15.5 19.2H32.5C33.218 19.2 33.8 19.782 33.8 20.5C33.8 21.218 33.218 21.8 32.5 21.8H15.5C14.782 21.8 14.2 21.218 14.2 20.5Z" fill="black"/>
<path d="M18 26.2C17.282 26.2 16.7 26.782 16.7 27.5C16.7 28.218 17.282 28.8 18 28.8H30C30.718 28.8 31.3 28.218 31.3 27.5C31.3 26.782 30.718 26.2 30 26.2H18Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 8C9.79086 8 8 9.79086 8 12V36C8 38.2091 9.79086 40 12 40H36C38.2091 40 40 38.2091 40 36V12C40 9.79086 38.2091 8 36 8H12ZM36 10.6H12C11.2268 10.6 10.6 11.2268 10.6 12V36C10.6 36.7732 11.2268 37.4 12 37.4H36C36.7732 37.4 37.4 36.7732 37.4 36V12C37.4 11.2268 36.7732 10.6 36 10.6Z" fill="black"/>
    </svg>
  );
};
