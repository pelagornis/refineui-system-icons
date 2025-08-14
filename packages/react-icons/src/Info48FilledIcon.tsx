import React from 'react';
import { IconProps } from './types';

export const Info48FilledIcon: React.FC<IconProps> = ({ 
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
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 19.7C24.718 19.7 25.3 20.282 25.3 21V33C25.3 33.718 24.718 34.3 24 34.3C23.282 34.3 22.7 33.718 22.7 33V21C22.7 20.282 23.282 19.7 24 19.7ZM25.5 16.5C25.5 17.3284 24.8284 18 24 18C23.1716 18 22.5 17.3284 22.5 16.5C22.5 15.6716 23.1716 15 24 15C24.8284 15 25.5 15.6716 25.5 16.5Z" fill="black"/>
    </svg>
  );
};
