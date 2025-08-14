import React from 'react';
import { IconProps } from './types';

export const Oval32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 8C8.58172 8 5 11.5817 5 16C5 20.4183 8.58172 24 13 24H18.3333C22.7516 24 26.3333 20.4183 26.3333 16C26.3333 11.5817 22.7516 8 18.3333 8H13Z" fill="black"/>
    </svg>
  );
};
