import React from 'react';
import { IconProps } from './types';

export const Oval32RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 8C8.58172 8 5 11.5817 5 16C5 20.4183 8.58172 24 13 24H18.3333C22.7516 24 26.3333 20.4183 26.3333 16C26.3333 11.5817 22.7516 8 18.3333 8H13ZM18.3333 9.73333H13C9.53902 9.73333 6.73333 12.539 6.73333 16C6.73333 19.461 9.53902 22.2667 13 22.2667H18.3333C21.7943 22.2667 24.6 19.461 24.6 16C24.6 12.539 21.7943 9.73333 18.3333 9.73333Z" fill="black"/>
    </svg>
  );
};
