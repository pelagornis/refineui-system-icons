import React from 'react';
import { IconProps } from './types';

export const Numbercircle132RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M15.4667 19.6667V13.6019L14.2867 14.8103C13.9523 15.1527 13.4036 15.1593 13.0612 14.8249C12.7187 14.4905 12.7122 13.9418 13.0466 13.5993L15.4856 11.1014C16.1434 10.4279 17.2 10.9491 17.2 11.8035V19.6667C17.2 20.1453 16.812 20.5333 16.3333 20.5333C15.8547 20.5333 15.4667 20.1453 15.4667 19.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26.3333 15.6667C26.3333 21.5577 21.5577 26.3333 15.6667 26.3333C9.77563 26.3333 5 21.5577 5 15.6667C5 9.77563 9.77563 5 15.6667 5C21.5577 5 26.3333 9.77563 26.3333 15.6667ZM24.6 15.6667C24.6 20.6004 20.6004 24.6 15.6667 24.6C10.7329 24.6 6.73333 20.6004 6.73333 15.6667C6.73333 10.7329 10.7329 6.73333 15.6667 6.73333C20.6004 6.73333 24.6 10.7329 24.6 15.6667Z" fill="black"/>
    </svg>
  );
};
