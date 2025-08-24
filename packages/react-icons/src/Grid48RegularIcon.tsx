import React from 'react';
import { IconProps } from './types';

export const Grid48RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 9.79086 9.79086 8 12 8H18C20.2091 8 22 9.79086 22 12V18C22 20.2091 20.2091 22 18 22H12C9.79086 22 8 20.2091 8 18V12ZM12 10.6H18C18.7732 10.6 19.4 11.2268 19.4 12V18C19.4 18.7732 18.7732 19.4 18 19.4H12C11.2268 19.4 10.6 18.7732 10.6 18V12C10.6 11.2268 11.2268 10.6 12 10.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 30C26 27.7909 27.7909 26 30 26H36C38.2091 26 40 27.7909 40 30V36C40 38.2091 38.2091 40 36 40H30C27.7909 40 26 38.2091 26 36V30ZM30 28.6H36C36.7732 28.6 37.4 29.2268 37.4 30V36C37.4 36.7732 36.7732 37.4 36 37.4H30C29.2268 37.4 28.6 36.7732 28.6 36V30C28.6 29.2268 29.2268 28.6 30 28.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 26C9.79086 26 8 27.7909 8 30V36C8 38.2091 9.79086 40 12 40H18C20.2091 40 22 38.2091 22 36V30C22 27.7909 20.2091 26 18 26H12ZM18 28.6H12C11.2268 28.6 10.6 29.2268 10.6 30V36C10.6 36.7732 11.2268 37.4 12 37.4H18C18.7732 37.4 19.4 36.7732 19.4 36V30C19.4 29.2268 18.7732 28.6 18 28.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 12C26 9.79086 27.7909 8 30 8H36C38.2091 8 40 9.79086 40 12V18C40 20.2091 38.2091 22 36 22H30C27.7909 22 26 20.2091 26 18V12ZM30 10.6H36C36.7732 10.6 37.4 11.2268 37.4 12V18C37.4 18.7732 36.7732 19.4 36 19.4H30C29.2268 19.4 28.6 18.7732 28.6 18V12C28.6 11.2268 29.2268 10.6 30 10.6Z" fill="black"/>
    </svg>
  );
};
