import React from 'react';
import { IconProps } from './types';

export const Toggleleft32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6667 9C7.98477 9 5 11.9848 5 15.6667C5 19.3486 7.98477 22.3333 11.6667 22.3333H19.6667C23.3486 22.3333 26.3333 19.3486 26.3333 15.6667C26.3333 11.9848 23.3486 9 19.6667 9H11.6667ZM15.6667 15.6667C15.6667 17.8758 13.8758 19.6667 11.6667 19.6667C9.45753 19.6667 7.66667 17.8758 7.66667 15.6667C7.66667 13.4575 9.45753 11.6667 11.6667 11.6667C13.8758 11.6667 15.6667 13.4575 15.6667 15.6667Z" fill="black"/>
    </svg>
  );
};
