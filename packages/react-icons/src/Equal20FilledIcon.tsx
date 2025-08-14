import React from 'react';
import { IconProps } from './types';

export const Equal20FilledIcon: React.FC<IconProps> = ({ 
  size = 20, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.83327 7C3.37307 7 3 7.37298 3 7.83308C3 8.29318 3.37307 8.66616 3.83327 8.66616H15.5001C15.9603 8.66616 16.3333 8.29318 16.3333 7.83308C16.3333 7.37298 15.9603 7 15.5001 7H3.83327Z" fill="black"/>
<path d="M3.83327 12.0005C3.37307 12.0005 3 12.3735 3 12.8336C3 13.2937 3.37307 13.6667 3.83327 13.6667H15.5001C15.9603 13.6667 16.3333 13.2937 16.3333 12.8336C16.3333 12.3735 15.9603 12.0005 15.5001 12.0005H3.83327Z" fill="black"/>
    </svg>
  );
};
