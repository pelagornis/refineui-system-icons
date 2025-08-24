import React from 'react';
import { IconProps } from './types';

export const Info48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M25.5 16.5C25.5 17.3284 24.8284 18 24 18C23.1716 18 22.5 17.3284 22.5 16.5C22.5 15.6716 23.1716 15 24 15C24.8284 15 25.5 15.6716 25.5 16.5Z" fill="black"/>
<path d="M25.3 21C25.3 20.282 24.718 19.7 24 19.7C23.282 19.7 22.7 20.282 22.7 21V33C22.7 33.718 23.282 34.3 24 34.3C24.718 34.3 25.3 33.718 25.3 33V21Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40ZM24 37.4C31.4006 37.4 37.4 31.4006 37.4 24C37.4 16.5994 31.4006 10.6 24 10.6C16.5994 10.6 10.6 16.5994 10.6 24C10.6 31.4006 16.5994 37.4 24 37.4Z" fill="black"/>
    </svg>
  );
};
