import React from 'react';
import { IconProps } from './types';

export const Addcircle48RegularIcon: React.FC<IconProps> = ({ 
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
<path d="M23 17C23 16.4477 23.4477 16 24 16C24.5523 16 25 16.4477 25 17V23H31C31.5523 23 32 23.4477 32 24C32 24.5523 31.5523 25 31 25H25V31C25 31.5523 24.5523 32 24 32C23.4477 32 23 31.5523 23 31V25H17C16.4477 25 16 24.5523 16 24C16 23.4477 16.4477 23 17 23H23L23 17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40 24C40 32.8366 32.8366 40 24 40C15.1634 40 8 32.8366 8 24C8 15.1634 15.1634 8 24 8C32.8366 8 40 15.1634 40 24ZM37.4 24C37.4 31.4006 31.4006 37.4 24 37.4C16.5994 37.4 10.6 31.4006 10.6 24C10.6 16.5994 16.5994 10.6 24 10.6C31.4006 10.6 37.4 16.5994 37.4 24Z" fill="black"/>
    </svg>
  );
};
