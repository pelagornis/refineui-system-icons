import React from 'react';
import { IconProps } from './types';

export const Morecircle48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M16 22C17.1046 22 18 22.8954 18 24C18 25.1046 17.1046 26 16 26C14.8954 26 14 25.1046 14 24C14 22.8954 14.8954 22 16 22Z" fill="black"/>
<path d="M24 22C25.1046 22 26 22.8954 26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22Z" fill="black"/>
<path d="M32 22C33.1046 22 34 22.8954 34 24C34 25.1046 33.1046 26 32 26C30.8954 26 30 25.1046 30 24C30 22.8954 30.8954 22 32 22Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 8C32.8366 8 40 15.1634 40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8ZM24 10.5996C16.5994 10.5996 10.5996 16.5994 10.5996 24C10.5996 31.4006 16.5994 37.4004 24 37.4004C31.4006 37.4004 37.4004 31.4006 37.4004 24C37.4004 16.5994 31.4006 10.5996 24 10.5996Z" fill="black"/>
    </svg>
  );
};
