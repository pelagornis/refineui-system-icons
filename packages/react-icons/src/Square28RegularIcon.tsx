import React from 'react';
import { IconProps } from './types';

export const Square28RegularIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 5C6.04467 5 5 6.04467 5 7.33333V21.3333C5 22.622 6.04467 23.6667 7.33333 23.6667H21.3333C22.622 23.6667 23.6667 22.622 23.6667 21.3333V7.33333C23.6667 6.04467 22.622 5 21.3333 5H7.33333ZM21.3333 6.51667H7.33333C6.8823 6.51667 6.51667 6.8823 6.51667 7.33333V21.3333C6.51667 21.7844 6.8823 22.15 7.33333 22.15H21.3333C21.7844 22.15 22.15 21.7844 22.15 21.3333V7.33333C22.15 6.8823 21.7844 6.51667 21.3333 6.51667Z" fill="black"/>
    </svg>
  );
};
