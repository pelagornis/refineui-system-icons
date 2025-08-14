import React from 'react';
import { IconProps } from './types';

export const Play32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5346 16.9589C26.5996 16.4264 26.5996 14.9069 25.5346 14.3745L7.09117 5.15439C6.13041 4.67409 5 5.3726 5 6.44657V24.8868C5 25.9607 6.13041 26.6592 7.09117 26.1789L25.5346 16.9589Z" fill="black"/>
    </svg>
  );
};
