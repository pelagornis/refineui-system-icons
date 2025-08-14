import React from 'react';
import { IconProps } from './types';

export const Phone28RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M14.7083 7.33333H12.9583C12.4751 7.33333 12.0833 7.72508 12.0833 8.20833C12.0833 8.69158 12.4751 9.08333 12.9583 9.08333H14.7083C15.1916 9.08333 15.5833 8.69158 15.5833 8.20833C15.5833 7.72508 15.1916 7.33333 14.7083 7.33333Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 7.33333C8 6.04467 9.04467 5 10.3333 5H17.3333C18.622 5 19.6667 6.04467 19.6667 7.33333V21.3333C19.6667 22.622 18.622 23.6667 17.3333 23.6667H10.3333C9.04467 23.6667 8 22.622 8 21.3333V7.33333ZM10.3333 6.51667H17.3333C17.7844 6.51667 18.15 6.8823 18.15 7.33333V21.3333C18.15 21.7844 17.7844 22.15 17.3333 22.15H10.3333C9.8823 22.15 9.51667 21.7844 9.51667 21.3333V7.33333C9.51667 6.8823 9.8823 6.51667 10.3333 6.51667Z" fill="black"/>
    </svg>
  );
};
