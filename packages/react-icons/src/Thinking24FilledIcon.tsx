import React from 'react';
import { IconProps } from './types';

export const Thinking24FilledIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 6C5 4.89543 5.89543 4 7 4H18C19.1046 4 20 4.89543 20 6V11.5C20 12.6046 19.1046 13.5 18 13.5H7C5.89543 13.5 5 12.6046 5 11.5V6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 18C9.10457 18 10 17.1046 10 16C10 14.8954 9.10457 14 8 14C6.89543 14 6 14.8954 6 16C6 17.1046 6.89543 18 8 18Z" fill="black"/>
<path d="M6.25 18.875C6.25 19.4963 5.74632 20 5.125 20C4.50368 20 4 19.4963 4 18.875C4 18.2537 4.50368 17.75 5.125 17.75C5.74632 17.75 6.25 18.2537 6.25 18.875Z" fill="black"/>
    </svg>
  );
};
