import React from 'react';
import { IconProps } from './types';

export const Playcircle28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M11.5195 10.884L17.5712 13.9093C17.9207 14.084 17.9207 14.5826 17.5712 14.7573L11.5195 17.7827C11.2043 17.9403 10.8333 17.7111 10.8333 17.3587V11.308C10.8333 10.9556 11.2043 10.7264 11.5195 10.884Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6667 14.3333C23.6667 19.488 19.488 23.6667 14.3333 23.6667C9.17868 23.6667 5 19.488 5 14.3333C5 9.17868 9.17868 5 14.3333 5C19.488 5 23.6667 9.17868 23.6667 14.3333ZM22.15 14.3333C22.15 18.6504 18.6504 22.15 14.3333 22.15C10.0163 22.15 6.51665 18.6504 6.51665 14.3333C6.51665 10.0163 10.0163 6.51667 14.3333 6.51667C18.6504 6.51667 22.15 10.0163 22.15 14.3333Z" fill="black"/>
    </svg>
  );
};
