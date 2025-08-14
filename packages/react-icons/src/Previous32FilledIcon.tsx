import React from 'react';
import { IconProps } from './types';

export const Previous32FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.21503 16.8581C8.38913 16.3491 8.38913 15.1918 9.21504 14.6828L24.2552 5.41393C25.1528 4.86073 26.3333 5.4786 26.3333 6.5016L26.3333 25.0393C26.3333 26.0623 25.1528 26.6802 24.2552 26.127L9.21503 16.8581Z" fill="black"/>
<path d="M5 25.0139C5 25.4926 5.38803 25.8806 5.8667 25.8806C6.34536 25.8806 6.7334 25.4926 6.7334 25.0139L6.7334 5.8667C6.7334 5.38803 6.34536 5 5.8667 5C5.38804 5 5 5.38803 5 5.8667L5 25.0139Z" fill="black"/>
    </svg>
  );
};
