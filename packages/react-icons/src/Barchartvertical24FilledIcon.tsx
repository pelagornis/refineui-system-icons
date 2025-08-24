import React from 'react';
import { IconProps } from './types';

export const Barchartvertical24FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 18C4 19.1046 4.89543 20 6 20C7.10457 20 8 19.1046 8 18V13C8 11.8954 7.10457 11 6 11C4.89543 11 4 11.8954 4 13L4 18Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C10 19.1046 10.8954 20 12 20C13.1046 20 14 19.1046 14 18V10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10V18Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 20C16.8954 20 16 19.1046 16 18V6C16 4.89543 16.8954 4 18 4C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20Z" fill="black"/>
    </svg>
  );
};
