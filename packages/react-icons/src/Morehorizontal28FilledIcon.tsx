import React from 'react';
import { IconProps } from './types';

export const Morehorizontal28FilledIcon: React.FC<IconProps> = ({ 
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
<path d="M7.33333 12C8.622 12 9.66667 13.0447 9.66667 14.3333C9.66667 15.622 8.622 16.6667 7.33333 16.6667C6.04467 16.6667 5 15.622 5 14.3333C5 13.0447 6.04467 12 7.33333 12Z" fill="black"/>
<path d="M14.3333 12C15.622 12 16.6667 13.0447 16.6667 14.3333C16.6667 15.622 15.622 16.6667 14.3333 16.6667C13.0447 16.6667 12 15.622 12 14.3333C12 13.0447 13.0447 12 14.3333 12Z" fill="black"/>
<path d="M21.3333 12C22.622 12 23.6667 13.0447 23.6667 14.3333C23.6667 15.622 22.622 16.6667 21.3333 16.6667C20.0447 16.6667 19 15.622 19 14.3333C19 13.0447 20.0447 12 21.3333 12Z" fill="black"/>
    </svg>
  );
};
