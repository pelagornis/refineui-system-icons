import React from 'react';
import { IconProps } from './types';

export const Morecircle48FilledIcon: React.FC<IconProps> = ({ 
  size = 48, 
  color = 'currentColor', 
  ...props 
}) => {
  return (
    <svg
      width="{{size}}"
      height="{{size}}"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {{...props}}
    >
      width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8ZM16 22C14.8954 22 14 22.8954 14 24C14 25.1046 14.8954 26 16 26C17.1046 26 18 25.1046 18 24C18 22.8954 17.1046 22 16 22ZM24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22ZM32 22C30.8954 22 30 22.8954 30 24C30 25.1046 30.8954 26 32 26C33.1046 26 34 25.1046 34 24C34 22.8954 33.1046 22 32 22Z" fill="black"/>
    </svg>
  );
};
