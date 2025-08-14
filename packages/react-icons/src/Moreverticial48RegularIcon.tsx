import React from 'react';
import { IconProps } from './types';

export const Moreverticial48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M27 11.5C27 13.4329 25.433 14.9999 23.5 15C21.5669 15 20 13.433 20 11.5C20 9.567 21.5669 8 23.5 8C25.433 8.0001 27 9.56706 27 11.5Z" fill="black"/>
<path d="M27 23.5C27 25.4329 25.433 26.9999 23.5 27C21.5669 27 20 25.433 20 23.5C20 21.567 21.5669 20 23.5 20C25.433 20.0001 27 21.5671 27 23.5Z" fill="black"/>
<path d="M27 35.5C27 37.4329 25.433 38.9999 23.5 39C21.5669 39 20 37.433 20 35.5C20 33.567 21.5669 32 23.5 32C25.433 32.0001 27 33.5671 27 35.5Z" fill="black"/>
    </svg>
  );
};
