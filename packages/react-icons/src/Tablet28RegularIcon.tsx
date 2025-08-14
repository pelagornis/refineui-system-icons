import React from 'react';
import { IconProps } from './types';

export const Tablet28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M10.6667 19.4083C10.2479 19.4083 9.90833 19.7479 9.90833 20.1667C9.90833 20.5855 10.2479 20.925 10.6667 20.925H17.6667C18.0855 20.925 18.425 20.5855 18.425 20.1667C18.425 19.7479 18.0855 19.4083 17.6667 19.4083H10.6667Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.33333C6 6.04467 7.04467 5 8.33333 5H20C21.2887 5 22.3333 6.04467 22.3333 7.33333V21.3333C22.3333 22.622 21.2887 23.6667 20 23.6667H8.33333C7.04467 23.6667 6 22.622 6 21.3333V7.33333ZM8.33333 6.51667H20C20.451 6.51667 20.8167 6.8823 20.8167 7.33333V21.3333C20.8167 21.7844 20.451 22.15 20 22.15H8.33333C7.8823 22.15 7.51667 21.7844 7.51667 21.3333V7.33333C7.51667 6.8823 7.8823 6.51667 8.33333 6.51667Z" fill="black"/>
    </svg>
  );
};
