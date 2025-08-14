import React from 'react';
import { IconProps } from './types';

export const Radiobutton28FilledIcon: React.FC<IconProps> = ({ 
  size = 28, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3333 20.1667C17.555 20.1667 20.1667 17.555 20.1667 14.3333C20.1667 11.1117 17.555 8.5 14.3333 8.5C11.1117 8.5 8.5 11.1117 8.5 14.3333C8.5 17.555 11.1117 20.1667 14.3333 20.1667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6667 14.3333C23.6667 19.488 19.488 23.6667 14.3333 23.6667C9.17868 23.6667 5 19.488 5 14.3333C5 9.17868 9.17868 5 14.3333 5C19.488 5 23.6667 9.17868 23.6667 14.3333ZM22.15 14.3333C22.15 18.6504 18.6504 22.15 14.3333 22.15C10.0163 22.15 6.51667 18.6504 6.51667 14.3333C6.51667 10.0163 10.0163 6.51667 14.3333 6.51667C18.6504 6.51667 22.15 10.0163 22.15 14.3333Z" fill="black"/>
    </svg>
  );
};
