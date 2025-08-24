import React from 'react';
import { IconProps } from './types';

export const Recordstop32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6667 11.6667C12.1144 11.6667 11.6667 12.1144 11.6667 12.6667V18.6667C11.6667 19.219 12.1144 19.6667 12.6667 19.6667H18.6667C19.219 19.6667 19.6667 19.219 19.6667 18.6667V12.6667C19.6667 12.1144 19.219 11.6667 18.6667 11.6667H12.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 15.6667C26.3333 21.5577 21.5577 26.3333 15.6667 26.3333C9.77563 26.3333 5 21.5577 5 15.6667C5 9.77563 9.77563 5 15.6667 5C21.5577 5 26.3333 9.77563 26.3333 15.6667ZM24.6 15.6667C24.6 20.6004 20.6004 24.6 15.6667 24.6C10.7329 24.6 6.73333 20.6004 6.73333 15.6667C6.73333 10.7329 10.7329 6.73333 15.6667 6.73333C20.6004 6.73333 24.6 10.7329 24.6 15.6667Z" fill="black"/>
    </svg>
  );
};
