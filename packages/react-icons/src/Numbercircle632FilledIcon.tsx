import React from 'react';
import { IconProps } from './types';

export const Numbercircle632FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M14.5333 18.3333V16.5333H16.3333C16.5911 16.5333 16.8 16.7423 16.8 17V18.3333C16.8 18.5911 16.5911 18.8 16.3333 18.8H15C14.7423 18.8 14.5333 18.5911 14.5333 18.3333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 26.3333C21.5577 26.3333 26.3333 21.5577 26.3333 15.6667C26.3333 9.77563 21.5577 5 15.6667 5C9.77563 5 5 9.77563 5 15.6667C5 21.5577 9.77563 26.3333 15.6667 26.3333ZM15 10.8C13.785 10.8 12.8 11.785 12.8 13V18.3333C12.8 19.5484 13.785 20.5333 15 20.5333H16.3333C17.5484 20.5333 18.5333 19.5484 18.5333 18.3333V17C18.5333 15.785 17.5484 14.8 16.3333 14.8H14.5333V13C14.5333 12.7423 14.7423 12.5333 15 12.5333H17.6667C18.1453 12.5333 18.5333 12.1453 18.5333 11.6667C18.5333 11.188 18.1453 10.8 17.6667 10.8H15Z" fill="black"/>
    </svg>
  );
};
