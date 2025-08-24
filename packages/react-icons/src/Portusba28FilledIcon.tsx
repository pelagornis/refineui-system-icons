import React from 'react';
import { IconProps } from './types';

export const Portusba28FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.33333 9C6.04467 9 5 10.0447 5 11.3333V14.8333C5 16.122 6.04467 17.1667 7.33333 17.1667H21.3333C22.622 17.1667 23.6667 16.122 23.6667 14.8333V11.3333C23.6667 10.0447 22.622 9 21.3333 9H7.33333ZM21.9167 10.75H6.75V13.0833H21.9167V10.75Z" fill="black"/>
    </svg>
  );
};
