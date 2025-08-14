import React from 'react';
import { IconProps } from './types';

export const Rectangle28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 7C6.04467 7 5 8.04467 5 9.33333V18.6667C5 19.9553 6.04467 21 7.33333 21H21.3333C22.622 21 23.6667 19.9553 23.6667 18.6667V9.33333C23.6667 8.04467 22.622 7 21.3333 7H7.33333Z" fill="black"/>
    </svg>
  );
};
